---
title: Embed Drawer & Cookie Banner
description: Embed legal texts directly into your website or app.
---

## In-App Embed Drawer (`/embed.js`)

Embeds a modal sheet directly into your website or web app — the text updates automatically when
changed.

```html
<script src="https://legal.yourdomain.com/embed.js"></script>
<button data-paragrafy-slug="privacy-policy" data-paragrafy-lang="en">Show Privacy Policy</button>
```

## GDPR Cookie Consent Banner (`/consent.js`)

Built-in, lightweight consent script with no external dependencies.

```html
<script src="https://legal.yourdomain.com/consent.js"></script>
```

## Consent Audit Log

Optional, server-side audit log for the cookie consent banner. Proves that a website visitor saw
the banner and accepted or rejected it at a specific point in time — including an anonymized IP
address, browser identifier, timestamp, and a hash of the exact banner text shown. **The full IP
address is never stored.**

:::tip[Managed Cloud vs. Self-Hosting]
Works identically on both platforms. Cleanup of expired log entries (based on the configured
retention period) runs automatically as part of the `/api/cron/backup` endpoint — in the
background on [Managed Cloud](/en/managed-cloud/overview/), and on
[self-hosting](/en/self-hosting/overview/) once the cron job is set up (see
[Cron Jobs](/en/self-hosting/cron-jobs/)).
:::

**Activation:** Enable it in the project settings under "Consent Audit Log" and set the desired
retention period (in days). While disabled, `/consent.js` sends no log data.

**View & export:** Recorded entries are available in the admin area under "Consent Audit Log"
(`/admin/consent-log`) as a searchable table, including CSV export for audits or regulatory
requests.
