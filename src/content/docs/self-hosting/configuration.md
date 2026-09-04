---
title: Konfiguration & Umgebungsvariablen
description: Welche Einstellungen wo gepflegt werden.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) sind Cron-Secret und Admin-Zugangsdaten bereits
automatisch angelegt — diese Datei musst du nie manuell bearbeiten.
:::

Die meisten Einstellungen (SMTP-Zugangsdaten, Webhook-URL/-Secret, DeepL-API-Key, Firmendaten,
Cookie-Banner-Text, Akzentfarbe etc.) sind **projektbezogen** und liegen in der SQLite-Datenbank —
sie werden ausschließlich über die Einstellungen-Oberfläche im Admin-Bereich gepflegt, nicht über
Umgebungsvariablen oder Config-Dateien.

Nur folgende Werte kommen tatsächlich aus Dateien statt aus der Datenbank:

| Datei / Variable | Zweck |
| :--- | :--- |
| `config.php` (auto-generiert) | Admin-Passwort-Hash (Legacy-Login) und das Cron-Secret. Wird beim Setup-Wizard angelegt, nicht manuell bearbeiten. Optional: `project_limit` (int) begrenzt die Anzahl `projects`-Zeilen dieser Instanz — fehlt der Schlüssel (Standard), gilt kein Limit. Gedacht für Betreiber, die Paragrafy hinter einer eigenen SaaS-/Abrechnungsschicht mit einer Instanz pro Account/Plan betreiben. |
| `.env` / `.env.local` (optional) | `DEEPL_API_KEY=...` als projektübergreifender Fallback, falls im jeweiligen Projekt kein eigener DeepL-Key hinterlegt ist. Beide Dateien sind optional — ohne sie funktioniert alles außer diesem Fallback. |
| `PARAGRAFY_DATA_DIR` (Umgebungsvariable) | Nur für Docker relevant: verlegt `config.php`, die SQLite-Datenbank, `/backups` und `.env.local` in ein persistentes Verzeichnis. Siehe [Installation: Docker](/self-hosting/docker/). |

## API-Zugriff & Authentifizierung

- **Öffentliche JSON-API** (`/api/:lang/:slug`) ist bewusst **unauthentifiziert und rein
  lesend** — Rechtstexte sollen von jeder verbundenen Website ohne Zugangsdaten abrufbar sein. Es
  gibt keine Möglichkeit, Inhalte über diese API zu schreiben oder zu ändern.
- **Bearbeiten von Rechtstexten** ist ausschließlich über die eingeloggte `/admin`-Session
  möglich (Passwort- bzw. Multi-User-Login) — es existiert keine separate API mit Bearer-Token
  oder API-Keys für schreibende Zugriffe.
- **Cron-Endpunkte** (`/api/cron/...`) erfordern ein `?secret=`-Query-Parameter (oder eine aktive
  Admin-Session) und lösen Server-Aktionen aus (Backup, Webhook-Versand, Live-Schaltung,
  Audit-Mail) — sie geben aber keine Inhalte oder Zugangsdaten preis. Details siehe
  [Cron-Jobs](/self-hosting/cron-jobs/).
