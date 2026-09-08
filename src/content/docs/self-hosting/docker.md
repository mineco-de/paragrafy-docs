---
title: "Installation: Docker"
description: Paragrafy per Docker Compose betreiben.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) übernehmen wir das komplette Container-/Server-Setup
automatisch — dieser Schritt entfällt komplett.
:::

Paragrafy lässt sich am schnellsten und saubersten über Docker und Docker Compose betreiben.

## Voraussetzungen

- Docker & Docker Compose auf dem Server installiert.

## Schnellanleitung

1. Repository **komplett klonen** (nicht nur die Docker-Dateien!):

   ```bash
   git clone https://github.com/mineco-de/Paragrafy.git && cd Paragrafy
   ```

   Das Image wird aus diesem lokalen Checkout gebaut (`COPY . /var/www/html/` in der Dockerfile)
   — es holt den Code nicht mehr selbst von GitHub, damit `docker compose up -d --build`
   zuverlässig deinen aktuellen Stand verwendet und nicht an einem alten Docker-Layer-Cache-Stand
   hängen bleibt.

2. Container im Hintergrund starten:

   ```bash
   docker compose up -d --build
   ```

## Persistenz

`docker-compose.yaml` mountet `./data` nach `/var/www/data` und setzt
`PARAGRAFY_DATA_DIR=/var/www/data` — dort liegen `paragrafy_data.sqlite`, `config.php`,
`/backups` und ein optionales `.env.local`. Der Pfad liegt bewusst **außerhalb** des
Apache-Docroots `/var/www/html`, damit diese Dateien nie über HTTP erreichbar sind, selbst wenn
eine vorgeschaltete Webserver-Konfiguration das nicht zusätzlich absichert. Ohne dieses Volume
gehen Datenbank und Admin-Zugangsdaten bei jedem `--build` verloren. Der Container setzt beim
Start automatisch die richtigen Dateirechte auf diesen Ordner (per `docker-entrypoint.sh`), auch
wenn das Host-Verzeichnis vorher nicht existierte.

:::note[Update von einer Installation vor 2026-09-08]
Frühere Versionen nutzten `/var/www/html/data` (innerhalb des Docroots) als Container-Pfad. Der
Host-seitige Ordner `./data` bleibt unverändert — ein normales `git pull` gefolgt von
`docker compose up -d --build` genügt, es ist keine manuelle Datenmigration nötig.
:::

Für einen Bare-Metal-/Apache-Betrieb (siehe [Installation: Apache](/self-hosting/apache/)) ist
`PARAGRAFY_DATA_DIR` nicht nötig — dann liegen Datenbank und Config wie gewohnt direkt im
Projektordner.

Danach geht es weiter mit der [Erstinstallation & Cron-Jobs](/self-hosting/cron-jobs/).
