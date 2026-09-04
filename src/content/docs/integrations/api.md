---
title: JSON-API & Authentifizierung
description: Headless-Zugriff auf Rechtstexte.
---

- **Öffentliche JSON-API** (`/api/:lang/:slug`) ist bewusst **unauthentifiziert und rein
  lesend** — Rechtstexte sollen von jeder verbundenen Website ohne Zugangsdaten abrufbar sein. Es
  gibt keine Möglichkeit, Inhalte über diese API zu schreiben oder zu ändern.
- **Bearbeiten von Rechtstexten** ist ausschließlich über die eingeloggte `/admin`-Session
  möglich (Passwort- bzw. Multi-User-Login) — es existiert keine separate API mit Bearer-Token
  oder API-Keys für schreibende Zugriffe.
- **Cron-Endpunkte** (`/api/cron/...`) erfordern das `?secret=`-Query-Parameter (oder eine aktive
  Admin-Session) und lösen Server-Aktionen aus (Backup, Webhook-Versand, Live-Schaltung,
  Audit-Mail) — sie geben aber keine Inhalte oder Zugangsdaten preis. Siehe
  [Cron-Jobs](/self-hosting/cron-jobs/).

## Beispiel

```http
GET https://legal.deinedomain.de/api/de/datenschutz
GET https://legal.deinedomain.de/api/agb-b2c
```

Für automatisierte Benachrichtigungen bei Änderungen siehe [Webhooks](/integrations/webhooks/).
