---
title: Upgrade Guide
description: Updating Paragrafy instances.
---

:::tip[Managed Cloud]
On [Managed Cloud](/en/managed-cloud/overview/), we roll out updates automatically — this entire
process doesn't apply to you.
:::

An update is straightforward, since schema changes run automatically on the first request after
the update:

1. **Before updating:** create a backup (Settings → Backup & Export, or back up `/backups` for
   Docker).
2. **Apache:** copy the new files over the old ones, or `git pull` — just **don't** overwrite or
   delete `config.php`, `paragrafy_data.sqlite`, and `/backups`.
   **Docker:** first `git pull` in the local checkout, then `docker compose up -d --build` — the
   image is built from the local code, so a plain `--build` without a preceding `git pull` still
   uses the old state. `config.php`, `paragrafy_data.sqlite`, `/backups`, and `.env.local` are
   preserved automatically via the `data` volume.
3. On the next request to any page, `ensure_schema_migrations()` automatically creates missing
   tables and columns (e.g. `users`, `audit_log`, `translation_versions`, `webhook_queue`, new
   columns in `projects`) — no manual migration script needed.
4. Existing installations without a `cron_secret` in `config.php` get one generated automatically
   on the first request to an `/api/cron/...` endpoint (visible under Settings → Automation).

There have been no breaking changes so far requiring manual intervention beyond the automatic
migration.
