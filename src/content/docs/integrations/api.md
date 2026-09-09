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

## HTTP-Caching

Sowohl diese JSON-API als auch der öffentliche HTML-Viewer senden `ETag`, `Last-Modified` und
`Cache-Control: public, max-age=300, must-revalidate`. Ein anfragender Client, der `If-None-Match`
mitschickt, bekommt bei unverändertem Dokument `304 Not Modified` ohne Response-Body zurück.
(`Last-Modified` wird nur informativ gesendet, zählt aber allein nicht als Validator — nur
`If-None-Match`/`ETag` können ein `304` auslösen, da sich die Aktualität einer
Sprach-Fallback-Antwort nicht zuverlässig allein über ein Datum abbilden lässt.)

```bash
# Erster Request: 200 mit ETag/Last-Modified
curl -I https://legal.deinedomain.de/api/de/datenschutz

# Zweiter Request mit dem ETag aus der ersten Antwort: 304, kein Body
curl -I -H 'If-None-Match: "<etag-aus-erster-antwort>"' https://legal.deinedomain.de/api/de/datenschutz
```

Ändert sich das Dokument (neuer Inhalt, neue Version, oder projektbezogene Stammdaten wie
Firmenname/Adresse), liefert dieselbe URL automatisch wieder `200` mit neuem `ETag`. Eine
Vorschau-URL (`/preview`) ist davon ausgenommen und liefert immer `Cache-Control: private,
no-store` — sie wird nie gecacht.

## Mehrsprachige Fallbacks

Ist ein Dokument noch nicht in der angefragten Sprache übersetzt, liefert die API statt eines
`404` automatisch eine verfügbare Alternative (angefragte Sprache → Englisch →
Projekt-Standardsprache → die einzige vorhandene Sprache). In diesem Fall ergänzt die Antwort
zwei zusätzliche Felder, und `lang` spiegelt die tatsächlich ausgelieferte Sprache wider:

```json
{
  "lang": "en",
  "fallback": true,
  "requested_lang": "fr",
  "...": "..."
}
```
