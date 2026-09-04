---
title: Kernfunktionen
description: Der komplette Funktionsumfang von Paragrafy.
---

Gilt unverändert für [Managed Cloud](/managed-cloud/overview/) und
[Self-Hosting](/self-hosting/overview/) — der Funktionsumfang ist in beiden Varianten identisch.

## Mehrsprachigkeit & Compliance

- **Multi-Tenant / Multi-Domain Routing**:
  Erkennt die aufrufende Subdomain (`legal.deinedomain.de`, `legal.projekt-b.de`) automatisch und
  liefert die passenden Rechtstexte, Farben und Firmen-Stammdaten des jeweiligen Projekts aus.
- **Compliance-Matrix mit One-Click Toggle & Copy-URL**:
  Das Admin-Dashboard visualisiert auf einen Blick, welche Pflichttexte in welchen Sprachen
  (`DE`, `EN`, `ES`, `FR` etc.) vorhanden, als Entwurf gespeichert oder noch unvollständig sind.
  Mit Instant-Toggles und 1-Klick-Kopierbuttons für alle Sprach-URLs. Siehe
  [Compliance-Matrix & Mehrsprachigkeit](/features/compliance-matrix/) für den vollständigen
  Workflow inkl. Versions-Sync und Übersetzung.
- **Bidirektionale DeepL-Übersetzung & automatische Versions-Synchronisation**:
  Änderst du einen Quelltext, markiert Paragrafy automatisch alle anderen Sprachfassungen als
  "Veraltet" (Hash-Diff) und du übersetzt sie mit geschützten Platzhaltern direkt im
  Side-by-Side-Editor nach. Details siehe
  [Compliance-Matrix & Mehrsprachigkeit](/features/compliance-matrix/).
- **Sprachen-Tabs im Editor**:
  Aktive Sprachen erscheinen als Tabs; eine optionale Vergleichsansicht blendet die
  Referenzsprache bei Bedarf side-by-side ein.
- **Audit- & Fristenkontrolle mit SMTP-E-Mail**:
  Warnt bei Texten, die länger als das konfigurierte Intervall (z. B. 12 Monate) nicht überprüft
  wurden, und sendet auf Wunsch Prüfberichte per E-Mail.

## Editor & Content-Erstellung

- **Vollwertiger WYSIWYG & Code-Editor**:
  Visuelle Formatierungsleiste (H2, H3, Fett, Kursiv, Listen, Links) mit 1-Klick-Umschaltung zum
  reinen HTML-Quellcode.
- **Einlesemodus für Rechtstexte (BETA)**:
  Liest eine bestehende Rechtstext-Seite per URL oder Datei-Upload ein und lässt sie von einer KI
  (Anthropic Claude oder OpenAI) automatisch in die passende Vorlage mit korrekt gesetzten
  `{{platzhaltern}}` überführen — inklusive Vorschlag der erkannten Firmendaten zur Bestätigung.
  Siehe [Einlesemodus für Rechtstexte](/features/einlesemodus/) für den vollständigen Ablauf.
- **Versionshistorie mit Diff & Wiederherstellen**:
  Jede Veröffentlichung eines Rechtstexts legt eine neue Version an, inklusive Diff-Ansicht und
  nicht-destruktivem Wiederherstellen. Siehe
  [Versionshistorie & Änderungsprotokoll](/features/versionshistorie/) (auch fürs
  Änderungsprotokoll/Audit-Trail).
- **Beliebig viele eigene Rechtstext-Typen**:
  Über die Pflichtseiten hinaus lassen sich projektübergreifend zusätzliche Dokumente anlegen
  (z. B. AGB B2B, Sponsoring-Vereinbarung, Lizenzbedingungen) und optional als Pflichtseite
  markieren.
- **Dunkelmodus**:
  Hell/Dunkel/Automatisch-Umschalter in den Einstellungen, pro Browser gespeichert — ohne
  Auswirkung auf andere Personen oder die öffentlichen Rechtstext-Seiten.

## Veröffentlichung & Automatisierung

- **Zeitgesteuerte Veröffentlichung (Scheduled Publishing)**:
  Änderungen an AGB oder Datenschutzerklärungen können im Voraus mit einem Stichtag (z. B.
  `31.08. 00:00`) geplant werden. Die bestehende Fassung bleibt bis zum Stichtag live und wird
  zum Zielzeitpunkt automatisch abgelöst.
- **Öffentliche Vorschau geplanter Änderungen**:
  Unter `/{lang}/{slug}/preview` (und als JSON-API) ist eine geplante, noch nicht live geschaltete
  Fassung schon vor dem Stichtag einsehbar — z. B. um Nutzer:innen vorab über anstehende
  AGB-Änderungen zu informieren.
- **Vollwertige Webhooks mit Warteschlange, Retry & Delivery-Logs**:
  Benachrichtigt verbundene Web-Apps per `POST`-Webhook bei Live-Schaltungen
  (`legal_text.updated`) und Vorankündigungen (`legal_text.scheduled`, inkl. `preview_url`) mit
  vollständigen Feldern (`effective_date`, `url`, `api_url`, `status`, `was_scheduled`).
  Zustellung läuft asynchron über eine Warteschlange mit automatischem Retry (bis zu 5 Versuche,
  steigender Abstand) — ein langsamer Empfänger blockiert nie das Speichern. Ein integriertes
  Protokoll im Admin-Bereich zeigt HTTP-Statuscodes, Server-Antworten und Latenzen an. Siehe
  [Webhooks](/integrations/webhooks/) für die vollständige Spezifikation.
- **Headless JSON-API & In-App Embed Drawer**:
  Stellt Endpunkte unter `/api/:lang/:slug` bereit und liefert ein modales Sheet-Script
  (`/embed.js`) für das direkte Einbinden in Web-Apps. Siehe
  [JSON-API](/integrations/api/) und [Embed-Drawer](/integrations/embeds/).

## Öffentlicher Auftritt & Datenschutz

- **Notion/Stripe-Style Public Viewer**:
  Mitscrollendes Inhaltsverzeichnis (Sticky TOC mit Scroll-Spy), Lesezeit-Berechnung,
  Direktlink-Anker (`#`) und Live-Textfilter in allen Zielsprachen.
- **DSGVO Cookie-Consent-Banner**:
  Integriertes, leichtgewichtiges Consent-Skript (`/consent.js`) ohne externe Abhängigkeiten.
  Optional mit serverseitigem [Consent-Nachweisprotokoll](/integrations/embeds/#consent-nachweisprotokoll)
  (anonymisierte IP, Zeitstempel, Text-Hash) für DSGVO-Nachweispflichten.

## Verwaltung & Sicherheit

- **Multi-User-Verwaltung mit E-Mail-Einladung**:
  Lade beliebig viele Personen per E-Mail ein; sie legen über einen Aktivierungslink ihr eigenes
  Passwort fest. Siehe [Benutzerverwaltung](/features/benutzerverwaltung/) für Details zu
  Zugriffsrechten und Login-Schutz.
- **Login-Schutz**:
  Fehlgeschlagene Anmeldeversuche werden pro IP-Adresse gedrosselt (5 Versuche / 15 Minuten), um
  Brute-Force-Angriffe zu erschweren.
- **Automatische rollierende Backups (7 Tage)**:
  Ein Cron-Endpunkt sichert die Datenbank täglich und löscht ältere Stände automatisch. Die
  letzten Backups lassen sich einzeln in den Einstellungen herunterladen.
- **Backups & Exporte**:
  Lade in den Einstellungen eine Sicherungskopie der kompletten Datenbank oder alle
  veröffentlichten Rechtstexte als Textdateien (ZIP, nach Sprache/Slug sortiert) herunter.
- **Backup-Wiederherstellung**:
  Spiele eine hochgeladene Sicherungskopie wieder ein, um die komplette Datenbank der Instanz zu
  ersetzen — erleichtert den Wechsel zwischen Self-Hosting und Managed Cloud. Funktioniert auch
  mit Backups aus älteren Paragrafy-Versionen. Siehe
  [Backup-Wiederherstellung](/features/backup-restore/) für den vollständigen Ablauf.
- **Projekt-Export & -Import**:
  Überträgt gezielt nur ein einzelnes Projekt zwischen zwei Instanzen, ohne andere Projekte der
  Zielinstanz anzutasten — per Domain-Abgleich wird ein bestehendes Projekt zusammengeführt oder
  ein neues angelegt. Siehe [Projekt-Export & -Import](/features/project-transfer/).
