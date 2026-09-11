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
   delete `config.php`, `paragrafy_data.sqlite`, and `/backups`. Then run
   `composer install --no-dev --optimize-autoloader` (see [Apache setup](/en/self-hosting/apache/)
   above) — needed since the 2FA release to pull in the TOTP libraries; harmless to re-run on
   every update either way.
   **Docker:** first `git pull` in the local checkout, then `docker compose up -d --build` — the
   image is built from the local code, so a plain `--build` without a preceding `git pull` still
   uses the old state. `config.php`, `paragrafy_data.sqlite`, `/backups`, and `.env.local` are
   preserved automatically via the `data` volume; `composer install` runs automatically as part of
   the image build, nothing to do manually.
3. On the next request to any page, `ensure_schema_migrations()` automatically creates missing
   tables and columns (e.g. `users`, `audit_log`, `translation_versions`, `webhook_queue`,
   `sso_nonces`, TOTP columns on `users`, new columns on `projects`) — no manual migration script
   needed.
4. Existing installations without a `cron_secret` in `config.php` get one generated automatically
   on the first request to an `/api/cron/...` endpoint (visible under Settings → Automation). The
   same self-healing pattern applies to `totp_encryption_key`, generated the first time anyone
   sets up TOTP.

## Breaking Changes

### 2026.9.11 — Docker data directory moved (security fix)

The container path for `PARAGRAFY_DATA_DIR` moved from `/var/www/html/data` (inside the Apache
docroot) to `/var/www/data` (outside it), so the database, `config.php`, and `.env.local` can
never be reachable over HTTP. The host-side `./data` folder is **not affected** — a plain
`git pull` followed by `docker compose up -d --build` is enough, no manual data migration needed.
See [Installation: Docker](/en/self-hosting/docker/#persistence) for details.

Nothing changes for Apache/bare-metal installs.

Beyond that, there have been no breaking changes so far requiring manual intervention beyond the
automatic migration.
