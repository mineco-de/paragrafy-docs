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

## Admin-Passwort zurücksetzen

Der Master-Admin-Login (das Formular ohne E-Mail-Feld) hat **keinen** "Passwort vergessen"-Link —
der existierende Reset-per-E-Mail-Flow im Admin-Bereich gilt nur für eingeladene Nutzer:innen in
der Multi-User-Verwaltung, nicht für diesen Zugang. Wer den Hash aus `config.php` verliert, muss
ihn manuell ersetzen:

1. Neuen bcrypt-Hash erzeugen (auf dem Server, PHP CLI erforderlich):

   ```bash
   php -r "echo password_hash('NeuesPasswort123', PASSWORD_DEFAULT), PHP_EOL;"
   ```

2. In der `config.php` deiner Instanz (Pfad siehe Tabelle oben bzw. `PARAGRAFY_DATA_DIR`) den Wert
   von `admin_password_hash` durch den neuen Hash ersetzen. Die Datei ist ein normales
   PHP-Array (`var_export`-Format) und kann mit einem Texteditor bearbeitet werden.

3. Danach mit dem neuen Passwort im Master-Admin-Login anmelden.

:::caution
Achte beim manuellen Bearbeiten auf das `$`-Zeichen im Hash — in Shell-Kommandos (z. B. `sed`)
wird es leicht von der Shell oder von Regex-Backreferences verschluckt. Am sichersten ist ein
direkter Editor oder ein kleines Skript, das den Hash unverändert aus einer Datei einliest statt
ihn in ein Shell-Kommando einzubetten.
:::

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
