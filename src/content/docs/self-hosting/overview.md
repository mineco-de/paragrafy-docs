---
title: Self-Hosting Übersicht
description: Paragrafy auf deinem eigenen Server betreiben.
---

Beim Self-Hosting betreibst du Paragrafy komplett selbst — auf eigener Hardware oder deinem
eigenen VPS. Der Funktionsumfang ist identisch zu [Managed Cloud](/managed-cloud/overview/), du
bist aber selbst verantwortlich für Server, Updates, Backups und Cron-Jobs.

:::note
Suchst du den einfacheren Weg ohne eigenen Server? Sieh dir [Managed Cloud](/managed-cloud/overview/)
an — dort übernehmen wir Hosting, Updates, Backups und Cron automatisch.
:::

Zwei Betriebsarten stehen zur Wahl:

- **[Apache](/self-hosting/apache/):** klassisches Deployment direkt auf einen Webserver.
- **[Docker](/self-hosting/docker/):** Container-basiertes Deployment via Docker Compose,
  schnellster Weg zu einer lauffähigen Instanz.

## Projektstruktur

```text
/var/www/paragrafy/
├── index.php             # Öffentlicher Router, Viewer, JSON-API & Cron-Handler
├── admin.php             # Admin-Dashboard, Compliance-Matrix, Webhook-Logs & Einstellungen
├── editor.php            # Sprachen-Tabs-Editor mit Scheduled Publishing & Versionshistorie
├── install.php           # Interaktiver Setup-Wizard für die Erstinstallation
├── db.php                # SQLite-Datenbankanbindung, Migrationen, Webhooks, SMTP-Client & Theme
├── Dockerfile            # Container-Image-Definition
├── docker-compose.yaml   # Docker-Compose-Setup für den Betrieb via Container
├── docker-entrypoint.sh  # Setzt beim Container-Start Dateirechte auf das Daten-Volume
├── WEBHOOKS.md           # Detaillierte Webhook-Dokumentation, Spezifikation & Payloads
├── paragrafy.svg         # Vektor-Logo
├── .htaccess             # Apache Routing & Schutz sensibler Dateien
├── .gitignore            # Git-Ausschlussregeln
├── config.php            # Admin-Passwort-Hash & Cron-Secret (wird bei Setup generiert)
├── .env.local            # Optional: DEEPL_API_KEY als Fallback
├── backups/              # Rollierende 7-Tage-Backups (automatisch angelegt)
└── paragrafy_data.sqlite # SQLite-Datenbank (wird automatisch angelegt)
```

Bei Docker liegen `config.php`, `.env.local`, `backups/` und `paragrafy_data.sqlite` stattdessen
unter `PARAGRAFY_DATA_DIR` (`/var/www/html/data`, auf `./data` gemountet).

## Nächste Schritte

1. [Installation: Apache](/self-hosting/apache/) oder [Installation: Docker](/self-hosting/docker/)
2. [Konfiguration & Umgebungsvariablen](/self-hosting/configuration/)
3. [Cron-Jobs einrichten](/self-hosting/cron-jobs/)
4. Später: [Upgrade-Guide](/self-hosting/upgrading/)
