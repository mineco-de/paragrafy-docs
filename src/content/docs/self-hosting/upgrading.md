---
title: Upgrade-Guide
description: Paragrafy-Instanzen aktualisieren.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) spielen wir Updates automatisch ein — dieser
gesamte Ablauf entfällt für dich.
:::

Ein Update ist unkompliziert, da Schema-Änderungen automatisch beim ersten Request nach dem
Update laufen:

1. **Vor dem Update:** Sicherung erstellen (Einstellungen → Sicherung & Export, oder `/backups`
   bei Docker sichern).
2. **Apache:** Neue Dateien über die alten kopieren bzw. `git pull` — `config.php`,
   `paragrafy_data.sqlite` und `/backups` dabei **nicht** überschreiben/löschen.
   **Docker:** Zuerst im lokalen Checkout `git pull`, dann `docker compose up -d --build` — das
   Image wird aus dem lokalen Code gebaut, ein reines `--build` ohne vorheriges `git pull`
   verwendet weiterhin den alten Stand. `config.php`, `paragrafy_data.sqlite`, `/backups` und
   `.env.local` bleiben durch das `data`-Volume automatisch erhalten.
3. Beim nächsten Aufruf einer beliebigen Seite legt `ensure_schema_migrations()` fehlende Tabellen
   und Spalten automatisch an (z. B. `users`, `audit_log`, `translation_versions`,
   `webhook_queue`, neue Spalten in `projects`) — kein manuelles Migrationsskript nötig.
4. Bestehende Installationen ohne `cron_secret` in `config.php` bekommen beim ersten Aufruf eines
   `/api/cron/...`-Endpunkts automatisch eines generiert (sichtbar unter Einstellungen →
   Automatisierung).

Es gab bislang keine Breaking Changes, die manuelles Eingreifen über die automatische Migration
hinaus erfordern.
