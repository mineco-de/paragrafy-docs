---
title: Backup-Wiederherstellung
description: Eine hochgeladene Sicherungskopie einspielen — nützlich beim Wechsel zwischen Self-Hosting und Managed Cloud.
---

Neben dem Erstellen und Herunterladen von Backups lässt sich in den Projekteinstellungen auch
eine `.sqlite`-Sicherungskopie **hochladen und einspielen**. Das erleichtert den Wechsel zwischen
Self-Hosting und Managed Cloud in beide Richtungen: Export bei der einen Plattform, Import bei
der anderen.

## So funktioniert's

1. Gehe zu **Einstellungen → Sicherung & Export**.
2. Scrolle zum Abschnitt **„Backup wiederherstellen"**.
3. Wähle eine `.sqlite`-Datei aus (z. B. ein zuvor heruntergeladenes Backup).
4. Bestätige die Checkbox „Ich verstehe, dass alle aktuellen Daten dieser Instanz durch die
   hochgeladene Datei ersetzt werden" und klicke auf **„Datenbank wiederherstellen"**.
5. Ein Bestätigungsdialog fragt ein letztes Mal nach — danach wird die Datenbank sofort ersetzt.

Nach erfolgreichem Restore zeigt eine grüne Meldung an, wie viele Projekte in der
wiederhergestellten Datenbank enthalten sind.

## Was passiert dabei genau

- Die hochgeladene Datei wird zuerst geprüft: gültiges SQLite-Format und Vorhandensein der
  Paragrafy-Kerntabellen (`projects`, `doc_types`, `documents`, `translations`). Ist das nicht
  der Fall, wird der Vorgang abgebrochen — die aktuelle Datenbank bleibt unverändert.
- **Bevor** irgendetwas ersetzt wird, legt Paragrafy automatisch eine Sicherheitskopie der
  aktuellen Datenbank an. Sie taucht danach ganz normal oben in der Backup-Liste auf und lässt
  sich wie jedes andere Backup herunterladen — falls der Restore doch nicht das Richtige war.
- Direkt nach dem Einspielen wird die neue Datenbank auf den aktuellen Schema-Stand gebracht:
  Fehlen Spalten oder Tabellen, weil das Backup aus einer älteren Paragrafy-Version stammt,
  werden sie automatisch mit sinnvollen Standardwerten ergänzt. Das Backup muss also **nicht**
  von der exakt gleichen Version stammen wie die Zielinstanz.

:::caution[Vollständiger Ersatz]
Der Restore ersetzt **die komplette Datenbank dieser Instanz** — alle Projekte, Rechtstexte,
Übersetzungen, Nutzer und Einstellungen. Bei Managed Cloud betrifft das ausschließlich deine
eigene Instanz, da jeder Account eine eigene, isolierte Datenbank hat.
:::

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen. Genau dieser Mechanismus macht den Wechsel zwischen den
Plattformen einfach: Backup bei der aktuellen Plattform herunterladen (siehe
[Einstellungen](/features/) → Sicherung & Export) und bei der neuen Instanz wieder hochladen.
:::
