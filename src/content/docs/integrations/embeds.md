---
title: Embed-Drawer & Cookie-Banner
description: Rechtstexte direkt in deiner Website oder App einbinden.
---

## In-App Embed-Drawer (`/embed.js`)

Bindet ein modales Sheet direkt in deine Website oder Web-App ein — die Texte aktualisieren sich
bei Änderungen automatisch.

```html
<script src="https://legal.deinedomain.de/embed.js"></script>
<button data-paragrafy-slug="datenschutz" data-paragrafy-lang="de">Datenschutz anzeigen</button>
```

## DSGVO Cookie-Consent-Banner (`/consent.js`)

Integriertes, leichtgewichtiges Consent-Skript ohne externe Abhängigkeiten.

```html
<script src="https://legal.deinedomain.de/consent.js"></script>
```

## Consent-Nachweisprotokoll

Optionales, serverseitiges Nachweisprotokoll für den Cookie-Consent-Banner. Belegt, dass ein
Website-Besucher zu einem bestimmten Zeitpunkt das Banner sah und akzeptiert oder abgelehnt hat —
inklusive anonymisierter IP-Adresse, Browser-Kennung, Zeitstempel und einem Hash des exakt
angezeigten Banner-Texts. **Die volle IP-Adresse wird dabei nie gespeichert.**

:::tip[Managed Cloud vs. Self-Hosting]
Auf beiden Plattformen identisch nutzbar. Die Bereinigung abgelaufener Protokolleinträge
(gemäß eingestellter Aufbewahrungsdauer) läuft automatisch mit dem `/api/cron/backup`-Endpunkt
mit — auf [Managed Cloud](/managed-cloud/overview/) im Hintergrund, beim
[Self-Hosting](/self-hosting/overview/) sobald der Cron-Job dafür eingerichtet ist (siehe
[Cron-Jobs](/self-hosting/cron-jobs/)).
:::

**Aktivierung:** In den Projekt-Einstellungen unter „Consent-Nachweise" per Schalter aktivieren
und die gewünschte Aufbewahrungsdauer (in Tagen) festlegen. Ist die Funktion deaktiviert, sendet
`/consent.js` keine Protokolldaten.

**Ansicht & Export:** Aufgezeichnete Nachweise findest du im Adminbereich unter
„Consent-Nachweise" (`/admin/consent-log`) als durchsuchbare Tabelle, inklusive CSV-Export für
Audits oder Behördenanfragen.
