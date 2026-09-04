---
title: Projekt-Export & -Import
description: Nur ein einzelnes Projekt zwischen zwei Instanzen übertragen, ohne andere Projekte anzutasten.
---

Der [Backup-Restore](/features/backup-restore/) ersetzt immer die komplette Datenbank einer
Instanz. Wer aber nur **ein einzelnes Projekt** zwischen zwei Instanzen verschieben will — z. B.
ein Projekt von Self-Hosting zu einer Managed-Cloud-Instanz mit mehreren bestehenden Projekten —,
nutzt stattdessen den **Projekt-Export & -Import**: Er überträgt gezielt nur die Rechtsinhalte
eines Projekts in ein **von dir explizit gewähltes** Zielprojekt und lässt alle anderen Projekte
der Zielinstanz unberührt.

## So funktioniert's

1. Gehe zu **Einstellungen → Sicherung & Export → „Projekt exportieren & importieren"**.
2. Klicke auf **„Dieses Projekt exportieren"**, um das aktuell ausgewählte Projekt als
   eigenständige `.sqlite`-Datei herunterzuladen.
3. Lade diese Datei auf der Zielinstanz im gleichen Bereich hoch.
4. Wähle im Dropdown **„Zielprojekt (wird überschrieben)"** das Projekt aus, in das importiert
   werden soll.
5. Bestätige die Checkbox und klicke auf **„In Zielprojekt importieren (Merge)"**.

## Was beim Import passiert

- Der Import erfolgt **immer** in das von dir im Dropdown gewählte, bereits bestehende Projekt —
  es wird **nie automatisch ein neues Projekt angelegt**. Ein Zielprojekt muss vorher regulär
  angelegt worden sein (z. B. über „Neues Projekt" in der Compliance-Matrix).
- Nur die Dokumente/Übersetzungen des gewählten Zielprojekts werden für die im Import enthaltenen
  Sprachen überschrieben. Firmendaten, Branding und Einstellungen des Zielprojekts bleiben
  unverändert — genauso wie dessen Domain. Sprachfassungen, die im Ziel existieren, aber nicht im
  Import enthalten sind, bleiben ebenfalls erhalten — echtes Zusammenführen, kein Löschen.
- **Alle anderen Projekte der Zielinstanz bleiben komplett unberührt.**
- Rechtstext-Typen (`doc_types`, z. B. „Impressum" oder „AGB B2B") werden anhand ihres
  eindeutigen Kennzeichens abgeglichen — existiert ein Typ in der Zielinstanz bereits, wird er
  wiederverwendet statt dupliziert.
- Vor jedem Import legt Paragrafy automatisch eine Sicherheitskopie der Zielinstanz an (landet
  in der normalen Backup-Liste, siehe [Backup-Wiederherstellung](/features/backup-restore/)).
- Enthält die hochgeladene Datei mehr als ein Projekt, wird der Import abgelehnt — dafür ist der
  [vollständige Restore](/features/backup-restore/) gedacht.

:::note[Was übertragen wird]
Nur Rechtsinhalte: Rechtstext-Typen, Dokumente, Übersetzungen und deren Versionshistorie.
Betriebsdaten wie Webhook-Logs, Consent-Nachweise, der Audit-Trail und Nutzerkonten werden
**nicht** mit übertragen — das sind Daten der Quellinstanz, keine portablen Inhalte.
:::

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen — genau dafür gedacht, ein einzelnes Projekt zwischen den
Plattformen zu verschieben, ohne dabei andere Projekte auf der Zielinstanz zu gefährden. Die
explizite Zielprojekt-Auswahl (statt automatischer Domain-Erkennung) sorgt dafür, dass das auch
dann eindeutig funktioniert, wenn sich Domains zwischen Export und Import geändert haben — z. B.
weil bei Managed Cloud zwischenzeitlich eine eigene Domain verbunden wurde.
:::
