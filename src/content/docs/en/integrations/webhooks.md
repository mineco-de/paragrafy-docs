---
title: Webhooks
description: Automated synchronization of legal texts with your apps.
---

This document describes Paragrafy's webhook interface for automated synchronization of
legal texts (terms & conditions, privacy policy, imprint, etc.) with connected web and mobile
applications.

:::tip[Managed Cloud vs. Self-Hosting]
On [Managed Cloud](/en/managed-cloud/overview/), queue delivery runs automatically in the
background. When [self-hosting](/en/self-hosting/overview/), you need to call the
`/api/cron/webhooks` endpoint yourself via cron — see [Cron Jobs](/en/self-hosting/cron-jobs/).
:::

**Delivery is asynchronous:** publications place the webhook in a queue instead of sending it
immediately, so a slow or unreachable recipient never blocks saving a legal text. An external
cron job must call `/api/cron/webhooks` regularly (recommended: every 5 minutes) to work through
the queue — without this cron, webhooks are only delivered when "Process now" is clicked manually
in the admin area. Failed deliveries are retried up to 5 times with increasing delay (1 / 5 / 15
/ 60 / 180 minutes), with a 5-second timeout per attempt.

## 1. HTTP Headers & Authentication

Every webhook sent by Paragrafy is delivered as a `POST` request with the following header
scheme:

| Header | Description | Example |
| :--- | :--- | :--- |
| `Content-Type` | MIME type of the payload | `application/json` |
| `User-Agent` | Client identifier | `Paragrafy-Webhook/x.y.z` |
| `X-Paragrafy-Event` | Event type | `legal_text.updated` / `legal_text.scheduled` |
| `X-Paragrafy-Signature` | HMAC-SHA256 signature of the raw body string | `a3f8e... (hex)` *(only when a secret is set)* |

## 2. Event Types at a Glance

| Event | Trigger | Use case in your app |
| :--- | :--- | :--- |
| `legal_text.scheduled` | A text change was scheduled for a future date. | Show an advance-notice banner with a **preview link** for users ("Terms are changing on Aug 31 [Read the upcoming version now]"). |
| `legal_text.updated` | A legal text was published live immediately, a scheduled date was reached, or an earlier version was restored. | Force re-acceptance of new terms in the user account, invalidate app cache. |

## 3. Payload Specification

### A. Event: `legal_text.scheduled` (advance notice with preview link)

Fired when the editor schedules a future go-live. `url`/`api_url` still point to the currently
live version (unchanged until the target date). Paragrafy additionally provides
`preview_url`/`preview_api_url` — at this address, the **scheduled new version** can already be
viewed publicly before the target date (the same page just has `/preview` appended), e.g. to
inform users in advance about upcoming changes to your terms. The preview page is served with
`noindex` and disappears automatically once the version goes live (the path returns 404
afterwards, since no schedule exists anymore).

```json
{
  "event": "legal_text.scheduled",
  "timestamp": "2026-08-30T15:30:00+02:00",
  "project": {
    "id": 1,
    "name": "MyProject",
    "domain": "legal.yourdomain.com"
  },
  "data": {
    "document_id": 3,
    "slug": "terms-b2c",
    "lang": "en",
    "title": "Terms & Conditions (Consumers / B2C)",
    "status": "scheduled",
    "change_note": "Updated payment terms effective Aug 31.",
    "scheduled_at": "2026-08-31T00:00:00+02:00",
    "effective_date": "2026-08-31T00:00:00+02:00",
    "url": "https://legal.yourdomain.com/en/terms-b2c",
    "api_url": "https://legal.yourdomain.com/api/en/terms-b2c",
    "preview_url": "https://legal.yourdomain.com/en/terms-b2c/preview",
    "preview_api_url": "https://legal.yourdomain.com/api/en/terms-b2c/preview",
    "was_scheduled": false
  }
}
```

### B. Event: `legal_text.updated` (live publication)

Fired as soon as a legal text goes active (immediately, or once its scheduled date is reached).

```json
{
  "event": "legal_text.updated",
  "timestamp": "2026-08-30T15:45:00+02:00",
  "project": {
    "id": 1,
    "name": "MyProject",
    "domain": "legal.yourdomain.com"
  },
  "data": {
    "document_id": 3,
    "slug": "terms-b2c",
    "lang": "en",
    "title": "Terms & Conditions (Consumers / B2C)",
    "status": "published",
    "change_note": "Updated payment terms at month end.",
    "was_scheduled": true,
    "effective_date": "2026-08-30T15:45:00+02:00",
    "url": "https://legal.yourdomain.com/en/terms-b2c",
    "api_url": "https://legal.yourdomain.com/api/en/terms-b2c",
    "updated_at": "2026-08-30T15:45:00+02:00"
  }
}
```

## 4. Field Definitions (Data Mapping)

| Field name | Type | Meaning |
| :--- | :--- | :--- |
| `data.title` | `string` | The title in the respective target language. |
| `data.slug` | `string` | Unique identifier (`terms-b2c`, `privacy-policy`, `imprint`). |
| `data.lang` | `string` | 2-letter language code (`de`, `en`, `es`, `fr`, etc.). |
| `data.effective_date` | `string` (ISO 8601) | **Effective date** (immediate for live, the target date for scheduled). |
| `data.scheduled_at` | `string` (ISO 8601) | Only for `scheduled`: the planned go-live time. |
| `data.url` | `string` | URL of the currently live version. |
| `data.api_url` | `string` | JSON API URL of the currently live version. |
| `data.preview_url` | `string` | Only for `scheduled`: public preview URL of the scheduled new version (`/preview` suffix), retrievable before the target date. |
| `data.preview_api_url` | `string` | Only for `scheduled`: JSON API variant of the preview URL. |
| `data.was_scheduled` | `boolean` | `true` if this publication originated from a scheduled change. |
| `data.change_note` | `string` | The revision note entered by the admin. |

## 5. Implementation Example in TypeScript / Node.js

```typescript
import express, { Request, Response } from 'express';
import crypto from 'crypto';

interface ParagrafyWebhookPayload {
  event: 'legal_text.updated' | 'legal_text.scheduled';
  timestamp: string;
  project: {
    id: number;
    name: string;
    domain: string;
  };
  data: {
    document_id: number;
    slug: string;
    lang: string;
    title: string;
    status: string;
    change_note?: string;
    was_scheduled?: boolean;
    scheduled_at?: string;
    effective_date: string;
    url: string;
    api_url: string;
    preview_url?: string;
    preview_api_url?: string;
    updated_at?: string;
  };
}

const app = express();
const WEBHOOK_SECRET = process.env.PARAGRAFY_WEBHOOK_SECRET || 'my-webhook-secret';

app.post('/api/legal-webhook', express.raw({ type: 'application/json' }), (req: Request, res: Response) => {
  const signature = req.headers['x-paragrafy-signature'] as string;
  const rawBody = req.body.toString('utf8');

  // 1. Validate signature
  if (WEBHOOK_SECRET) {
    const expected = crypto.createHmac('sha256', WEBHOOK_SECRET).update(rawBody).digest('hex');
    const valid = signature && crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
    if (!valid) {
      return res.status(401).json({ error: 'Invalid signature' });
    }
  }

  const payload: ParagrafyWebhookPayload = JSON.parse(rawBody);

  // 2. Event routing
  switch (payload.event) {
    case 'legal_text.scheduled':
      // Show advance-notice banner with preview link!
      console.log(`[Advance notice] ${payload.data.title} changes on ${payload.data.scheduled_at}`);
      console.log(`Preview link for users: ${payload.data.preview_url}`);
      break;

    case 'legal_text.updated':
      // New version is active: request user consent
      console.log(`[Live] ${payload.data.title} is now in effect.`);
      break;
  }

  return res.status(200).json({ success: true });
});
```
