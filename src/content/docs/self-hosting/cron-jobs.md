---
title: Erstinstallation & Cron-Jobs
description: Setup-Wizard und die vier Automatisierungs-Endpunkte.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) sind alle vier Endpunkte bereits eingerichtet — du
musst hier nichts konfigurieren.
:::

Gilt unabhängig davon, ob [Apache](/self-hosting/apache/) oder [Docker](/self-hosting/docker/)
verwendet wird.

## Erstinstallation

Rufe deine Subdomain im Browser auf (z. B. `https://legal.deinedomain.de`). Der **Paragrafy
Setup-Wizard** startet automatisch und legt Datenbank, Admin-Passwort und ein zufälliges
Cron-Secret an.

## Cron-Jobs einrichten (empfohlen)

Vier Endpunkte sollten von außen regelmäßig aufgerufen werden, damit geplante Veröffentlichungen
live gehen, Backups entstehen und Webhooks zugestellt werden. Alle vier sind mit einem geheimen
Schlüssel geschützt (Query-Parameter `?secret=...`), den du fertig zusammengesetzt in
**Einstellungen → Automatisierung (Cron)** findest — dort lässt er sich bei Bedarf auch neu
generieren.

```cron
# Geplante Veröffentlichungen live schalten (jede Minute, projektübergreifend)
* * * * * curl -fsS "https://legal.deinedomain.de/api/cron/publish?secret=DEIN_CRON_SECRET" > /dev/null

# Webhook-Warteschlange abarbeiten (alle 5 Minuten)
*/5 * * * * curl -fsS "https://legal.deinedomain.de/api/cron/webhooks?secret=DEIN_CRON_SECRET" > /dev/null

# Tägliches rollierendes Backup (7 Tage)
0 3 * * * curl -fsS "https://legal.deinedomain.de/api/cron/backup?secret=DEIN_CRON_SECRET" > /dev/null

# Prüfbericht per E-Mail, falls Rechtstexte überfällig sind (täglich)
0 8 * * * curl -fsS "https://legal.deinedomain.de/api/cron/audit?secret=DEIN_CRON_SECRET" > /dev/null
```

Alternativ eignet sich auch ein externer Uptime-Monitor (z. B. Uptime Kuma, healthchecks.io) als
"Cron", der diese URLs im gewünschten Intervall abruft.

Ohne eingerichteten Cron ist Paragrafy dennoch nutzbar: Geplante Veröffentlichungen werden
zusätzlich automatisch geprüft, sobald jemand die jeweilige Projekt-Domain besucht
(Zero-Config-Fallback) — bei sehr wenig Traffic kann das aber verzögert live gehen. Backup und
Webhook-Warteschlange lassen sich in den Einstellungen jederzeit manuell anstoßen; ein
aufgerufener Endpunkt ohne oder mit falschem `secret` antwortet mit HTTP 403.

Weiter geht's mit den [Webhooks](/integrations/webhooks/), die über den `/api/cron/webhooks`-Job
zugestellt werden.
