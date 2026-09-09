---
title: Dein Dashboard
description: So bedienst du dein Managed-Cloud-Konto — Projekte, Domains, Abo und Account.
---

Das Cloud-Dashboard ist die Verwaltungsoberfläche für dein Konto und deine Projekte — getrennt
vom eigentlichen [Rechtstexte-Admin](/features/) jedes einzelnen Projekts, in den du per
Single-Sign-On wechselst (siehe [SSO-Handoff](#in-die-rechtstexte-verwaltung-wechseln) unten).

## Login & Übersicht

Nach dem Login siehst du dein aktuelles Abo (Plan-Chip), deine Projekt-Auslastung
(z. B. „1/1 Projekte") sowie pro Projekt einen Status-Badge (**aktiv**, **wird eingerichtet**,
**DNS ausstehend**, **SSL wird eingerichtet** oder **gesperrt**). Neue Projekte zeigen zusätzlich
eine „Erste Schritte"-Checkliste. Läuft ein Abo aus oder ist eine Zahlung überfällig, erscheint ein
Warnbanner mit Countdown bis zum Ende der Karenzzeit.

## Neues Projekt anlegen & Ersteinrichtung

Solange dein Plan-Limit nicht erreicht ist, kannst du über „Neues Projekt" ein weiteres Projekt
anlegen — dafür reichen ein Projektname und ein Subdomain-Slug. Direkt danach führt dich ein
kurzes Ersteinrichtungs-Formular durch die Pflichtangaben fürs Impressum (Firma, Anschrift,
Kontakt, Vertretung, Registereintrag). Dieser Schritt lässt sich überspringen und später
jederzeit im Rechtstexte-Admin unter „Einstellungen" nachpflegen.

## Eigene Domain verbinden

Statt der System-Subdomain (`deinprojekt.paragrafy.cloud`) kannst du eine eigene Domain
hinterlegen. Das Dashboard zeigt dir den benötigten A-Record auf unsere Server-IP an; DNS- und
SSL-Prüfung laufen danach automatisch im Hintergrund (Status-Badge aktualisiert sich alle paar
Minuten), ein „Jetzt erneut prüfen"-Button stößt die Prüfung bei Bedarf sofort an.

:::tip[Ausfallsicherheit deiner Rechtstexte]
Deine Domain hängt an deiner eigenen DNS-Konfiguration. Nutzt du Cloudflare, aktiviere Proxy
(orange Wolke) und "Always Online", damit z. B. Impressum und Datenschutz auch bei einem
kurzzeitigen Ausfall unseres Servers erreichbar bleiben.
:::

:::caution[Domain entfernen]
Über „Domain entfernen" koppelst du das Projekt zurück auf die System-Subdomain. Bestätige das
nur, wenn du das wirklich willst — externe Links auf deine bisherige Domain funktionieren danach
nicht mehr.
:::

## Plan wechseln

Unter „Abo" siehst du Solo- und Flex-Plan nebeneinander mit Preis und Funktionsumfang
(Flex: mehrere Projekte, gestaffelter Preis ab 2 Projekten). Der Wechsel passiert per Klick mit
Bestätigung, die Verrechnung erfolgt anteilig über Stripe. Ein Downgrade auf Solo ist erst
möglich, wenn nur noch ein Projekt existiert. Enterprise-Konditionen werden individuell
vereinbart — wende dich dafür an den Support.

## Abo, Rechnungen & Kündigung

„Abo & Rechnung" führt dich ins Stripe-Kundenportal — dort verwaltest du Zahlungsmethode,
Rechnungen und Kündigung. Nach einer Kündigung bleibt dein Projekt bis zum Ende der bezahlten
Periode aktiv und läuft danach für eine Karenzzeit gesperrt weiter; ein **Backup-Download bleibt
während dieser Zeit möglich**, damit du deine Daten sichern kannst. Ein Klick auf „Reaktivieren"
startet eine neue Stripe-Checkout-Session für denselben Account, ohne dass du ein neues Konto
anlegen musst.

## Konto-Einstellungen & Aktivität

Unter „Konto" änderst du Anzeigename, E-Mail-Adresse (Bestätigung per Link) und Passwort. Der
Bereich „Aktivität" zeigt ein vollständiges Protokoll aller Änderungen an deinem Konto und deinen
Projekten — auch Aktionen, die über unseren Support ausgelöst wurden.

### Zwei-Faktor-Authentifizierung (2FA)

Unter „Konto" kannst du optional eine Zwei-Faktor-Authentifizierung per TOTP (z. B. Google
Authenticator, Aegis, 1Password) aktivieren. Beim Einrichten zeigt dir das Dashboard einen
QR-Code zum Scannen sowie 10 einmalig nutzbare Recovery-Codes — sichere diese sofort an einem
sicheren Ort, sie werden danach nicht erneut angezeigt und sind dein einziger Weg zurück ins
Konto, falls du die Authenticator-App verlierst. Neue Recovery-Codes lassen sich jederzeit
generieren (macht die vorherigen ungültig), Deaktivieren verlangt dein aktuelles Passwort zur
Bestätigung.

:::note
2FA schützt ausschließlich den Login in dieses Cloud-Dashboard — nicht den separaten
[Rechtstexte-Admin-Login](/features/benutzerverwaltung/) einzelner Projekte, das ist ein eigenes
Zugangssystem mit eigenen Zugangsdaten.
:::

## Benutzer verwalten

Über den Menüpunkt „Benutzer" lädst du zusätzliche Personen ein, die sich in deine Projekte
einloggen können (z. B. eine Datenschutzbeauftragte) — mit Name, E-Mail-Adresse und einer freien
Notiz als Merkhilfe. Bei jeder Einladung wählst du per Checkbox aus, auf welche deiner Projekte die
Person Zugriff erhalten soll; die Zuordnung lässt sich bei bestehenden Personen jederzeit über
„Zuordnung ändern" anpassen.

:::note
Die eingeladene Person loggt sich mit den hier vergebenen Zugangsdaten direkt im
[Rechtstexte-Admin](/features/benutzerverwaltung/) der jeweiligen Projekte ein — nicht in diesem
Cloud-Dashboard. Sie sieht dort ausschließlich die ihr zugeordneten Projekte. Dort kann sie sich in
ihren eigenen Einstellungen auch optional per [Zwei-Faktor-Authentifizierung
(TOTP)](/features/zwei-faktor-authentifizierung/) zusätzlich absichern — unabhängig vom
SSO-Login des Cloud-Dashboards selbst.
:::

## Support

Über „Support" erreichst du uns direkt aus dem Dashboard heraus, projektbezogen mit Betreff und
Nachricht — dein Account ist dabei automatisch hinterlegt.

## In die Rechtstexte-Verwaltung wechseln

Der Button „Rechtstexte verwalten" bringt dich per Single-Sign-On direkt in den
[Paragrafy-Admin](/features/) des jeweiligen Projekts — ohne erneuten Login. Dort verwaltest du
Compliance-Matrix, Übersetzungen, Webhooks und alle weiteren Kernfunktionen.

## Projekt löschen

Ein Projekt lässt sich jederzeit über den entsprechenden Button löschen (mit Sicherheitsabfrage
und Hinweis, vorher ein Backup herunterzuladen). Das Löschen ist blockiert, wenn es sich um dein
letztes Projekt handelt oder noch eine eigene Domain aktiv verbunden ist — entferne die Domain
zuerst.

### Löschschutz

Über das Schloss-Symbol neben jedem Projekt aktivierst du einen Löschschutz. Ist er aktiv, ist der
Löschen-Button ausgeblendet und das Projekt kann nicht versehentlich gelöscht werden — Bearbeiten,
Ansehen und alle anderen Aktionen bleiben davon unberührt. Ein erneuter Klick auf das Schloss hebt
den Schutz wieder auf. Praktisch für aktiv genutzte Projekte, bei denen ein Verklicken teuer wäre.

:::note
Der Löschschutz ist unabhängig von einer Sperrung durch unseren Support (Status „gesperrt") — er
betrifft ausschließlich die Selbstbedienungs-Löschung durch dich selbst.
:::
