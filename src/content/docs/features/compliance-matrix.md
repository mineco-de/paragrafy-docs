---
title: Compliance-Matrix & Mehrsprachigkeit
description: Auf einen Blick sehen, welche Pflichttexte in welchen Sprachen fehlen — und sie synchron halten.
---

Die Compliance-Matrix ist die Startseite des Admin-Dashboards: eine Tabelle mit einer Zeile pro
Pflichttext (AGB, Datenschutzerklärung, Impressum etc.) und einer Spalte pro aktivierter Sprache
(`DE`, `EN`, `ES`, `FR` etc.).

## Status auf einen Blick

Jede Zelle zeigt sofort den Zustand einer Sprachfassung:

- **Live** — veröffentlicht und öffentlich abrufbar
- **Entwurf** — gespeichert, aber noch nicht veröffentlicht
- **Fehlt** — für diese Sprache noch nicht angelegt
- **Veraltet** — siehe [Versions-Synchronisation](#automatische-versions-synchronisation) unten

Mit einem Klick lässt sich jede Sprachfassung direkt aus der Matrix live schalten oder
zurückziehen (One-Click Toggle). Ein Kopier-Button neben jeder Zelle legt die öffentliche URL der
jeweiligen Sprachfassung in die Zwischenablage.

## Automatische Versions-Synchronisation

Änderst du inhaltlich eine Sprachfassung (z. B. die deutsche AGB), markiert Paragrafy automatisch
alle anderen Sprachfassungen desselben Texts als **"Veraltet"** — erkannt per Hash-Vergleich, nicht
per Datum. So übersieht man nie, dass eine Übersetzung nach einer Rechtsänderung nachgezogen
werden muss. Der integrierte Diff-Viewer hebt dabei Änderungen farblich hervor (Grün = neu
hinzugefügt, Rot = entfernt).

## Übersetzen direkt im Editor

Für als "Veraltet" markierte oder neue Sprachfassungen steht im Side-by-Side-Editor eine
bidirektionale DeepL-Anbindung bereit (`DE → EN`, `EN → DE`, `ES → DE` usw.). Platzhalter wie
Firmennamen oder Links werden dabei automatisch geschützt und nicht mitübersetzt.

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen. Für die DeepL-Übersetzung ist ein eigener DeepL-API-Key nötig —
auf [Managed Cloud](/managed-cloud/overview/) sowie beim [Self-Hosting](/self-hosting/overview/)
trägst du ihn in den Projekteinstellungen ein.
:::
