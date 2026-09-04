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
| `config.php` (auto-generated) | Admin password hash (legacy login) and the cron secret. Created by the setup wizard, do not edit manually. Optional: `project_limit` (int) caps the number of `projects` rows for this instance — if the key is absent (default), there's no limit. Intended for operators running Paragrafy behind their own SaaS/billing layer with one instance per account/plan. |
| `.env` / `.env.local` (optional) | `DEEPL_API_KEY=...` as a cross-project fallback if a project doesn't have its own DeepL key configured. Both files are optional — everything works without them except this fallback. |
| `PARAGRAFY_DATA_DIR` (environment variable) | Only relevant for Docker: moves `config.php`, the SQLite database, `/backups`, and `.env.local` into a persistent directory. See [Installation: Docker](/en/self-hosting/docker/). |

## API Access & Authentication

- **The public JSON API** (`/api/:lang/:slug`) is intentionally **unauthenticated and
  read-only** — legal texts should be retrievable from any connected website without credentials.
  There is no way to write or change content through this API.
- **Editing legal texts** is only possible via the logged-in `/admin` session (password or
  multi-user login) — there is no separate API with bearer tokens or API keys for write access.
- **Cron endpoints** (`/api/cron/...`) require a `?secret=` query parameter (or an active admin
  session) and trigger server actions (backup, webhook delivery, go-live, audit email) — but they
  never expose content or credentials. See [Cron Jobs](/en/self-hosting/cron-jobs/) for details.
