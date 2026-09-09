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

## HTTP Caching

Both this JSON API and the public HTML viewer send `ETag`, `Last-Modified`, and
`Cache-Control: public, max-age=300, must-revalidate`. A requesting client that sends
`If-None-Match` (or `If-Modified-Since`) gets `304 Not Modified` with no response body back when
the document hasn't changed:

```bash
# First request: 200 with ETag/Last-Modified
curl -I https://legal.yourdomain.com/api/en/privacy-policy

# Second request with the ETag from the first response: 304, no body
curl -I -H 'If-None-Match: "<etag-from-first-response>"' https://legal.yourdomain.com/api/en/privacy-policy
```

If the document changes (new content, a new version, or project-level details like company name
or address), the same URL automatically returns `200` again with a new `ETag`. A preview URL
(`/preview`) is excluded from this and always returns `Cache-Control: private, no-store` — it is
never cached.
