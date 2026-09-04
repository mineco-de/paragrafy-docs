---
title: JSON API & Authentication
description: Headless access to legal texts.
---

- **The public JSON API** (`/api/:lang/:slug`) is intentionally **unauthenticated and
  read-only** — legal texts should be retrievable from any connected website without credentials.
  There is no way to write or change content through this API.
- **Editing legal texts** is only possible via the logged-in `/admin` session (password or
  multi-user login) — there is no separate API with bearer tokens or API keys for write access.
- **Cron endpoints** (`/api/cron/...`) require the `?secret=` query parameter (or an active admin
  session) and trigger server actions (backup, webhook delivery, go-live, audit email) — but they
  never expose content or credentials. See [Cron Jobs](/en/self-hosting/cron-jobs/).

## Example

```http
GET https://legal.yourdomain.com/api/en/privacy-policy
GET https://legal.yourdomain.com/api/terms-b2c
```

For automated change notifications, see [Webhooks](/en/integrations/webhooks/).
