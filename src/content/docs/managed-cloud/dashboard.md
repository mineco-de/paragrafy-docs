---
title: Dein Dashboard
description: So bedienst du dein Managed-Cloud-Konto — Instanzen, Domains, Abo und Account.
---

Das Cloud-Dashboard ist die Verwaltungsoberfläche für dein Konto und deine Instanzen — getrennt
vom eigentlichen [Rechtstexte-Admin](/features/) jeder einzelnen Instanz, in den du per
Single-Sign-On wechselst (siehe [SSO-Handoff](#in-die-rechtstexte-verwaltung-wechseln) unten).

## Login & Übersicht

Nach dem Login siehst du dein aktuelles Abo (Plan-Chip), deine Instanz-Auslastung
(z. B. „1/1 Instanzen") sowie pro Instanz einen Status-Badge (**aktiv**, **wird eingerichtet**,
**DNS ausstehend**, **SSL wird eingerichtet** oder **gesperrt**). Neue Instanzen zeigen zusätzlich
eine „Erste Schritte"-Checkliste. Läuft ein Abo aus oder ist eine Zahlung überfällig, erscheint ein
Warnbanner mit Countdown bis zum Ende der Karenzzeit.

## Neue Instanz anlegen & Ersteinrichtung

Solange dein Plan-Limit nicht erreicht ist, kannst du über „Neue Instanz" ein weiteres Projekt
anlegen — dafür reichen ein Projektname und ein Subdomain-Slug. Direkt danach führt dich ein
kurzes Ersteinrichtungs-Formular durch die Pflichtangaben fürs Impressum (Firma, Anschrift,
Kontakt, Vertretung, Registereintrag). Dieser Schritt lässt sich überspringen und später
jederzeit im Rechtstexte-Admin unter „Einstellungen" nachpflegen.

## Eigene Domain verbinden

Statt der System-Subdomain (`deinprojekt.paragrafy.cloud`) kannst du eine eigene Domain
hinterlegen. Das Dashboard zeigt dir den benötigten A-Record auf unsere Server-IP an; DNS- und
SSL-Prüfung laufen danach automatisch im Hintergrund (Status-Badge aktualisiert sich alle paar
Minuten), ein „Jetzt erneut prüfen"-Button stößt die Prüfung bei Bedarf sofort an.

:::caution[Domain entfernen]
Über „Domain entfernen" koppelst du die Instanz zurück auf die System-Subdomain. Bestätige das
nur, wenn du das wirklich willst — externe Links auf deine bisherige Domain funktionieren danach
nicht mehr.
:::

## Plan wechseln

Unter „Abo" siehst du Single- und Agency-Plan nebeneinander mit Preis und Funktionsumfang
(Agency: mehrere Instanzen, zentraler Admin-Login, eigene Domain je Projekt). Der Wechsel
passiert per Klick mit Bestätigung, die Verrechnung erfolgt anteilig über Stripe. Ein Downgrade
auf Single ist erst möglich, wenn nur noch eine Instanz existiert.

## Abo, Rechnungen & Kündigung

„Abo & Rechnung" führt dich ins Stripe-Kundenportal — dort verwaltest du Zahlungsmethode,
Rechnungen und Kündigung. Nach einer Kündigung bleibt deine Instanz bis zum Ende der bezahlten
Periode aktiv und läuft danach für eine Karenzzeit gesperrt weiter; ein **Backup-Download bleibt
während dieser Zeit möglich**, damit du deine Daten sichern kannst. Ein Klick auf „Reaktivieren"
startet eine neue Stripe-Checkout-Session für denselben Account, ohne dass du ein neues Konto
anlegen musst.

## Konto-Einstellungen & Aktivität

Unter „Konto" änderst du Anzeigename, E-Mail-Adresse (Bestätigung per Link) und Passwort. Der
Bereich „Aktivität" zeigt ein vollständiges Protokoll aller Änderungen an deinem Konto und deinen
Instanzen — auch Aktionen, die über unseren Support ausgelöst wurden.

## Benutzer verwalten

Über den Menüpunkt „Benutzer" lädst du zusätzliche Personen ein, die sich in deine Projekte
einloggen können (z. B. eine Datenschutzbeauftragte) — mit Name, E-Mail-Adresse und einer freien
Notiz als Merkhilfe. Bei jeder Einladung wählst du per Checkbox aus, auf welche deiner Projekte die
Person Zugriff erhalten soll; die Zuordnung lässt sich bei bestehenden Personen jederzeit über
„Zuordnung ändern" anpassen.

:::note
Die eingeladene Person loggt sich mit den hier vergebenen Zugangsdaten direkt im
[Rechtstexte-Admin](/features/benutzerverwaltung/) der jeweiligen Projekte ein — nicht in diesem
Cloud-Dashboard. Sie sieht dort ausschließlich die ihr zugeordneten Projekte.
:::

## Support

Über „Support" erreichst du uns direkt aus dem Dashboard heraus, projektbezogen mit Betreff und
Nachricht — dein Account ist dabei automatisch hinterlegt.

## In die Rechtstexte-Verwaltung wechseln

Der Button „Rechtstexte verwalten" bringt dich per Single-Sign-On direkt in den
[Paragrafy-Admin](/features/) der jeweiligen Instanz — ohne erneuten Login. Dort verwaltest du
Compliance-Matrix, Übersetzungen, Webhooks und alle weiteren Kernfunktionen.

## Instanz löschen

Eine Instanz lässt sich jederzeit über den entsprechenden Button löschen (mit Sicherheitsabfrage
und Hinweis, vorher ein Backup herunterzuladen). Das Löschen ist blockiert, wenn es sich um deine
letzte Instanz handelt oder noch eine eigene Domain aktiv verbunden ist — entferne die Domain
zuerst.

### Löschschutz

Über das Schloss-Symbol neben jeder Instanz aktivierst du einen Löschschutz. Ist er aktiv, ist der
Löschen-Button ausgeblendet und die Instanz kann nicht versehentlich gelöscht werden — Bearbeiten,
Ansehen und alle anderen Aktionen bleiben davon unberührt. Ein erneuter Klick auf das Schloss hebt
den Schutz wieder auf. Praktisch für aktiv genutzte Instanzen, bei denen ein Verklicken teuer wäre.

:::note
Der Löschschutz ist unabhängig von einer Sperrung durch unseren Support (Status „gesperrt") — er
betrifft ausschließlich die Selbstbedienungs-Löschung durch dich selbst.
:::
