---
title: Configuration & Environment Variables
description: Which settings live where.
---

:::tip[Managed Cloud]
On [Managed Cloud](/en/managed-cloud/overview/), the cron secret and admin credentials are
already set up automatically — you never need to edit this file manually.
:::

Most settings (SMTP credentials, webhook URL/secret, DeepL API key, company data, cookie banner
text, accent color, etc.) are **project-scoped** and live in the SQLite database — they're
managed exclusively through the settings UI in the admin area, not via environment variables or
config files.

Only the following values actually come from files instead of the database:

| File / Variable | Purpose |
| :--- | :--- |
| `config.php` (auto-generated) | Admin password hash (legacy login) and the cron secret. Created by the setup wizard, do not edit manually. Optional: `project_limit` (int) caps the number of `projects` rows for this instance — if the key is absent (default), there's no limit. Intended for operators running Paragrafy behind their own SaaS/billing layer with one instance per account/plan. Also self-heals a `totp_encryption_key` (random, generated on first TOTP setup, same pattern as the cron secret) used to encrypt TOTP secrets at rest — never edit or share this value, it's not a secret you're meant to configure. On self-hosted instances (no `sso_secret`), also holds the admin account's own optional `admin_totp_*` fields if two-factor authentication is enabled for it. |
| `.env` / `.env.local` (optional) | `DEEPL_API_KEY=...` as a cross-project fallback if a project doesn't have its own DeepL key configured. Both files are optional — everything works without them except this fallback. |
| `PARAGRAFY_DATA_DIR` (environment variable) | Only relevant for Docker: moves `config.php`, the SQLite database, `/backups`, and `.env.local` into a persistent directory. See [Installation: Docker](/en/self-hosting/docker/). |
| `PARAGRAFY_PUBLIC_CACHE` (environment variable, optional) | Set to `0` to disable the optional public legal-text file cache under `PARAGRAFY_DATA_DIR/cache/public/` (defaults to `1`/on). HTTP validation caching (`ETag`/`Last-Modified`/`304`) is unaffected and always active. |


## Resetting the admin password

The master admin login (the form without an email field) has **no** "forgot password" link — the
existing email-based reset flow in the admin area only applies to invited users in the multi-user
management, not to this login. If you lose the hash from `config.php`, you have to replace it
manually:

1. Generate a new bcrypt hash (on the server, requires the PHP CLI):

   ```bash
   php -r "echo password_hash('YourNewPassword123', PASSWORD_DEFAULT), PHP_EOL;"
   ```

2. In your instance's `config.php` (path per the table above, or `PARAGRAFY_DATA_DIR`), replace
   the value of `admin_password_hash` with the new hash. The file is a plain PHP array
   (`var_export` format) and can be edited with any text editor.

3. Then sign in with the new password at the master admin login.

:::caution
Watch out for the `$` character in the hash when editing it manually — it's easily swallowed by
the shell or by regex backreferences in commands like `sed`. The safest approach is a direct
editor or a small script that reads the hash unchanged from a file instead of embedding it in a
shell command.
:::

## Resetting admin TOTP

If the self-hosted admin login has two-factor authentication (TOTP) enabled and loses both the
device and all recovery codes, there is deliberately **no** web UI reset — nobody stands above
the one admin account. The emergency path requires server access:

```bash
php bin/totp-reset-admin.php
```

The script disables TOTP for the admin account (password login works again immediately, without
a second factor) and writes an entry to the audit log. On Managed Cloud instances it aborts with
a corresponding message, since no admin TOTP exists there in the first place.

## API Access & Authentication

- **The public JSON API** (`/api/:lang/:slug`) is intentionally **unauthenticated and
  read-only** — legal texts should be retrievable from any connected website without credentials.
  There is no way to write or change content through this API. It's rate-limited per IP (120
  requests / 5 minutes) against scraping/flooding; it responds with HTTP 429 once exceeded.
- **Editing legal texts** is only possible via the logged-in `/admin` session (password or
  multi-user login) — there is no separate API with bearer tokens or API keys for write access.
- **Cron endpoints** (`/api/cron/...`) require a `?secret=` query parameter (or an active admin
  session) and trigger server actions (backup, webhook delivery, go-live, audit email) — but they
  never expose content or credentials. See [Cron Jobs](/en/self-hosting/cron-jobs/) for details.
