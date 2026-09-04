---
title: Was ist Managed Cloud?
description: Der komplett gehostete Paragrafy-Betrieb ohne eigenen Server.
---

Paragrafy Cloud ist die von uns betriebene, gehostete Variante von Paragrafy. Du bekommst eine
fertig eingerichtete Instanz und musst dich um nichts kümmern, was in den
[Self-Hosting-Kapiteln](/self-hosting/overview/) beschrieben ist.

:::tip[Kurz gesagt]
Registrieren, bezahlen, loslegen. Hosting, SSL-Zertifikate, Backups, Updates und Cron-Jobs
übernehmen wir automatisch im Hintergrund.
:::

## Was automatisch für dich läuft

- **Provisionierung:** Nach der Bezahlung (Stripe-Checkout) wird deine Instanz automatisch
  angelegt — inklusive Datenbank und Erstkonfiguration. Kein manuelles Setup nötig.
- **Hosting & Domains:** Deine Instanz läuft unter einer Subdomain
  (`deinprojekt.paragrafy.cloud`) oder deiner eigenen Domain. Bei eigener Domain übernehmen wir
  DNS-Prüfung, VirtualHost-Einrichtung und SSL-Zertifikat vollautomatisch — ohne Server-Zugriff
  deinerseits.
- **Backups:** Rollierende automatische Backups deiner Rechtstexte und Konfiguration, ohne dass
  du einen Cron-Job einrichten musst.
- **Updates:** Neue Paragrafy-Versionen spielen wir automatisch ein. Du musst nichts manuell
  aktualisieren oder Migrationsskripte ausführen.
- **Cron-Jobs:** Die vier Automatisierungs-Endpunkte (Scheduled Publishing, Webhook-Zustellung,
  Backup, Audit-Mail — siehe [Cron-Jobs](/self-hosting/cron-jobs/)) sind bereits eingerichtet.
- **SSO-Login:** Aus deinem Cloud-Dashboard gelangst du per Single-Sign-On direkt und ohne
  erneuten Login in den Paragrafy-Admin deiner Instanz.

## Pläne

- **Single:** Ein Projekt pro Account.
- **Agency:** Mehrere Projekte in einem Account, zentraler Admin-Login, eigene Domain je Projekt
  möglich.

Abrechnung erfolgt monatlich über Stripe. Wie du Instanzen anlegst, Domains verbindest, den Plan
wechselst oder dein Abo verwaltest, steht Schritt für Schritt unter
[Dein Dashboard](/managed-cloud/dashboard/).

## Was gleich bleibt

Alle Kernfunktionen — Compliance-Matrix, Übersetzung, Scheduled Publishing, Webhooks, API,
Embed-Script, Cookie-Banner — funktionieren identisch zu einer selbstgehosteten Installation.
Siehe [Kernfunktionen](/features/) für die vollständige Liste.
