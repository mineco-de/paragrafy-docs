---
title: Self-Hosting Overview
description: Run Paragrafy on your own server.
---

With self-hosting, you run Paragrafy entirely yourself — on your own hardware or your own VPS.
The feature set is identical to [Managed Cloud](/en/managed-cloud/overview/), but you're
responsible for the server, updates, backups, and cron jobs yourself.

:::note
Looking for the simpler path without your own server? Check out
[Managed Cloud](/en/managed-cloud/overview/) — we handle hosting, updates, backups, and cron
automatically.
:::

Two deployment options are available:

- **[Apache](/en/self-hosting/apache/):** classic deployment directly on a web server.
- **[Docker](/en/self-hosting/docker/):** container-based deployment via Docker Compose, the
  fastest way to a working instance.

## Project Structure

```text
/var/www/paragrafy/
├── index.php             # Public router, viewer, JSON API & cron handler
├── admin.php             # Admin dashboard, compliance matrix, webhook logs & settings
├── editor.php            # Language-tabs editor with scheduled publishing & version history
├── install.php           # Interactive setup wizard for initial installation
├── db.php                # SQLite database layer, migrations, webhooks, SMTP client & theme
├── Dockerfile             # Container image definition
├── docker-compose.yaml    # Docker Compose setup for container-based operation
├── docker-entrypoint.sh   # Sets file permissions on the data volume at container start
├── WEBHOOKS.md            # Detailed webhook documentation, specification & payloads
├── paragrafy.svg          # Vector logo
├── .htaccess              # Apache routing & protection of sensitive files
├── .gitignore             # Git exclusion rules
├── config.php             # Admin password hash & cron secret (generated at setup)
├── .env.local             # Optional: DEEPL_API_KEY as fallback
├── backups/               # Rolling 7-day backups (created automatically)
└── paragrafy_data.sqlite  # SQLite database (created automatically)
```

With Docker, `config.php`, `.env.local`, `backups/`, and `paragrafy_data.sqlite` instead live
under `PARAGRAFY_DATA_DIR` (`/var/www/html/data`, mounted to `./data`).

## Next Steps

1. [Installation: Apache](/en/self-hosting/apache/) or [Installation: Docker](/en/self-hosting/docker/)
2. [Configuration & Environment Variables](/en/self-hosting/configuration/)
3. [Setting up Cron Jobs](/en/self-hosting/cron-jobs/)
4. Later: [Upgrade Guide](/en/self-hosting/upgrading/)
