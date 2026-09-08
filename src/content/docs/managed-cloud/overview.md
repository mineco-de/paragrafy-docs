---
title: Was ist Managed Cloud?
description: Der komplett gehostete Paragrafy-Betrieb ohne eigenen Server.
---

Paragrafy Cloud ist die von uns betriebene, gehostete Variante von Paragrafy. Du bekommst eine
fertig eingerichtetes Projekt und musst dich um nichts kümmern, was in den
[Self-Hosting-Kapiteln](/self-hosting/overview/) beschrieben ist.

:::tip[Kurz gesagt]
Registrieren, bezahlen, loslegen. Hosting, SSL-Zertifikate, Backups, Updates und Cron-Jobs
übernehmen wir automatisch im Hintergrund.
:::

## Was automatisch für dich läuft

- **Provisionierung:** Nach der Bezahlung (Stripe-Checkout) wird dein Projekt automatisch
  angelegt — inklusive Datenbank und Erstkonfiguration. Kein manuelles Setup nötig.
- **Hosting & Domains:** Dein Projekt läuft unter einer Subdomain
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
  erneuten Login in den Paragrafy-Admin deines Projekts.

## Pläne

- **Solo:** Ein Projekt pro Account.
- **Flex:** Mehrere Projekte in einem Account, ab 2 Projekten gestaffelter Preis.
- **Enterprise:** Individuelle Projektanzahl und Konditionen, persönlicher Ansprechpartner statt
  Support per Formular/E-Mail — auf Anfrage.

Zentraler Admin-Login (Single-Sign-On über alle eigenen Projekte) und eigene Domain je Projekt
sind in allen Cloud-Plänen enthalten. Optional buchbar bei Solo und Flex: ein
**Einrichtungsservice** — wir importieren deine bestehenden Rechtstexte und legen die Seiten für
dich an.

Abrechnung erfolgt monatlich über Stripe (bei Enterprise: Rechnung nach Absprache). Wie du
Projekte anlegst, Domains verbindest, den Plan wechselst oder dein Abo verwaltest, steht Schritt
für Schritt unter [Dein Dashboard](/managed-cloud/dashboard/).

## Was gleich bleibt

Alle Kernfunktionen — Compliance-Matrix, Übersetzung, Scheduled Publishing, Webhooks, API,
Embed-Script, Cookie-Banner — funktionieren identisch zu einer selbstgehosteten Installation.
Siehe [Kernfunktionen](/features/) für die vollständige Liste.
