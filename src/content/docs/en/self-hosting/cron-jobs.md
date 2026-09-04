---
title: Initial Setup & Cron Jobs
description: Setup wizard and the four automation endpoints.
---

:::tip[Managed Cloud]
On [Managed Cloud](/en/managed-cloud/overview/), all four endpoints are already set up — there's
nothing to configure here.
:::

Applies regardless of whether you use [Apache](/en/self-hosting/apache/) or
[Docker](/en/self-hosting/docker/).

## Initial Setup

Open your subdomain in a browser (e.g. `https://legal.yourdomain.com`). The **Paragrafy setup
wizard** starts automatically and creates the database, admin password, and a random cron secret.

## Setting Up Cron Jobs (recommended)

Four endpoints should be called regularly from the outside so scheduled publications go live,
backups are created, and webhooks get delivered. All four are protected by a secret key (query
parameter `?secret=...`), which you'll find pre-assembled under **Settings → Automation (Cron)**
— you can regenerate it there if needed.

```cron
# Publish scheduled changes (every minute, across all projects)
* * * * * curl -fsS "https://legal.yourdomain.com/api/cron/publish?secret=YOUR_CRON_SECRET" > /dev/null

# Process the webhook queue (every 5 minutes)
*/5 * * * * curl -fsS "https://legal.yourdomain.com/api/cron/webhooks?secret=YOUR_CRON_SECRET" > /dev/null

# Daily rolling backup (7 days)
0 3 * * * curl -fsS "https://legal.yourdomain.com/api/cron/backup?secret=YOUR_CRON_SECRET" > /dev/null

# Email report if legal texts are overdue for review (daily)
0 8 * * * curl -fsS "https://legal.yourdomain.com/api/cron/audit?secret=YOUR_CRON_SECRET" > /dev/null
```

Alternatively, an external uptime monitor (e.g. Uptime Kuma, healthchecks.io) can serve as a
"cron" that calls these URLs at the desired interval.

Paragrafy remains usable even without cron set up: scheduled publications are also checked
automatically whenever someone visits the respective project domain (zero-config fallback) — but
with very little traffic, this can delay going live. Backup and the webhook queue can always be
triggered manually from settings; an endpoint called without a `secret` or with the wrong one
responds with HTTP 403.

Next, continue with [Webhooks](/en/integrations/webhooks/), which are delivered via the
`/api/cron/webhooks` job.
