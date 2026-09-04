---
title: Versionshistorie & Änderungsprotokoll
description: Jede Veröffentlichung ist nachvollziehbar und rückgängig machbar.
---

Paragrafy führt zwei getrennte, sich ergänzende Protokolle: eine **Versionshistorie** pro
Rechtstext und ein globales **Änderungsprotokoll** über alle Admin-Aktionen.

## Versionshistorie

Jede Veröffentlichung eines Rechtstexts legt automatisch eine neue Version an — nichts geht
verloren. Im Editor zeigt ein Tab "Versionen" pro Sprache den vollständigen Verlauf:

- **Diff-Ansicht** gegen den aktuell live geschalteten Stand (Grün = hinzugefügt, Rot = entfernt)
- **Wiederherstellen** einer älteren Version — nicht-destruktiv: das Wiederherstellen selbst legt
  wiederum eine neue Version an, die aktuelle Fassung geht also nie verloren

## Änderungsprotokoll (Audit-Trail)

Ein eigener Tab "Protokoll" im Admin-Bereich zeigt, wer wann was geändert hat — nicht nur
Rechtstext-Veröffentlichungen, sondern auch Projekteinstellungen, angelegte/gelöschte
Rechtstext-Typen und Änderungen an der Benutzerverwaltung. Jeder Eintrag enthält Zeitstempel,
handelnde Person und die betroffene Ressource. Das komplette Protokoll lässt sich als CSV-Datei
exportieren — praktisch für interne Nachweise oder Rückfragen von Kolleg:innen.

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen, keine zusätzliche Einrichtung nötig — beide Protokolle laufen
automatisch im Hintergrund mit.
:::
