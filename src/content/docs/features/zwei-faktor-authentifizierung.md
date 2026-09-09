---
title: Zwei-Faktor-Authentifizierung (TOTP)
description: Optionales TOTP für Benutzerkonten und, self-hosted, das Admin-Konto — Einrichtung, Recovery-Codes und Reset.
---

Jedes Benutzerkonto kann optional Zwei-Faktor-Authentifizierung per TOTP (RFC 6238, kompatibel zu
Google Authenticator, Aegis, 1Password & Co.) aktivieren — zusätzlich zum Passwort, unter
**Admin → Sicherheit**.

:::tip[Managed Cloud vs. Self-Hosting]
Diese Seite beschreibt TOTP für **Benutzerkonten** — die gilt identisch für Managed Cloud und
Self-Hosting. Für das eine, projektweite **Admin-Konto** (Passwort-only, kein Benutzername) gibt es
einen wichtigen Unterschied: TOTP steht dort **nur self-hosted** zur Verfügung. Details siehe
[Admin-Konto](#admin-konto-nur-self-hosted) weiter unten.
:::

## Einrichtung

1. QR-Code mit der Authenticator-App scannen (oder das darunter angezeigte Secret manuell
   eintippen).
2. Einen aktuell gültigen 6-stelligen Code eingeben, um die Einrichtung zu bestätigen — das
   Secret wird erst danach dauerhaft gespeichert. Das verhindert eine versehentliche Aussperrung
   durch ein falsch abgetipptes Secret oder eine falsche Systemzeit auf dem Handy.
3. Direkt im Anschluss werden **10 Recovery-Codes** angezeigt (Format `xxxx-xxxx-xx`) — jeder
   davon funktioniert einmalig als Ersatz für den TOTP-Code, falls das Gerät verloren geht. Sie
   werden nur dieses eine Mal im Klartext angezeigt; eine Bestätigung ("Codes gespeichert") ist
   vor dem Abschluss erforderlich.

:::caution[Recovery-Codes sicher aufbewahren]
Es gibt keinen "Codes erneut anzeigen"-Button. Wer sie nicht gespeichert hat und danach das Gerät
verliert, braucht entweder den [Admin-Reset](#admin-seitiger-reset) (Benutzerkonto) oder den
[CLI-Notfallweg](#admin-konto-nur-self-hosted) (Admin-Konto).
:::

## Login mit TOTP

Nach korrektem Passwort wird — falls TOTP aktiv ist — ein zweiter Schritt abgefragt: 6-stelliger
Code aus der App, oder alternativ einer der Recovery-Codes. Ein Zeitfenster von ±30 Sekunden
gleicht kleinere Uhrabweichungen zwischen Handy und Server aus. Jeder Code (TOTP-Schritt wie
Recovery-Code) ist genau einmal gültig — ein zweiter Versuch mit demselben Code wird abgelehnt.
Fehlversuche werden genauso gedrosselt wie beim Passwort-Login (5 Versuche / 15 Minuten, siehe
[Login-Schutz](/features/benutzerverwaltung/#login-schutz)).

## Recovery-Codes neu generieren

Jederzeit in den eigenen Einstellungen möglich — die bisherigen 10 Codes werden dabei sofort
ungültig, ein neuer Satz wird angezeigt.

## Deaktivieren

Erfordert eine erneute Eingabe des eigenen Passworts zur Bestätigung — das erschwert es, TOTP bei
kurzzeitigem, unautorisiertem Zugriff auf eine offene Session einfach abzuschalten.

## Admin-seitiger Reset

Verliert eine Person ihr Gerät **und** alle Recovery-Codes, kann der primäre Admin-Login das TOTP
dieses Benutzerkontos zurücksetzen (Benutzer-Übersicht → 2FA-Badge in der jeweiligen Zeile). Die
betroffene Person bekommt automatisch eine Benachrichtigungsmail, der Vorgang landet im
[Änderungsprotokoll](/features/versionshistorie/).

## Admin-Konto (nur self-hosted)

Das eine, projektweite Admin-Konto (Passwort-only, kein Benutzername/E-Mail) hat zwei mögliche
Zugangswege: direkter Passwort-Login, oder — nur bei Managed Cloud — SSO aus dem
[Cloud-Dashboard](/managed-cloud/dashboard/).

- **Self-Hosted** (kein SSO eingerichtet): Das Admin-Konto kann TOTP genau wie ein reguläres
  Benutzerkonto aktivieren — gleicher Einrichtungs- und Login-Ablauf wie oben beschrieben.
- **Managed Cloud** (SSO eingerichtet): TOTP wird für das Admin-Konto bewusst **nicht** angeboten.
  Der Zugang läuft dort ausschließlich über SSO aus dem Cloud-Dashboard; der klassische
  Passwort-Login ist gesperrt (`admin_password_login_disabled`), ein TOTP-geschützter, aber
  ohnehin unerreichbarer Passwort-Pfad wäre witzlos. Wer für den Alltag einen
  TOTP-geschützten Zugang möchte, legt sich stattdessen ein reguläres [Benutzerkonto](#einrichtung)
  an — das Admin-Konto selbst bleibt SSO-exklusiv.

:::caution[Notfall-Reset erfordert Server-Zugriff]
Für das Admin-Konto gibt es **keinen** Web-UI-Reset durch eine übergeordnete Instanz — niemand
steht über dem Admin-Konto. Verliert ein self-hosted Admin Gerät **und** alle Recovery-Codes,
funktioniert nur noch der CLI-Notfallweg direkt auf dem Server:

```bash
php bin/totp-reset-admin.php
```

Das ist bewusst kein Web-Endpunkt: Ein web-erreichbarer Reset für das Admin-Konto selbst würde
jedem, der eine gestohlene oder abgelaufene Admin-Session besitzt, einen Weg geben, TOTP ohne den
zweiten Faktor abzuschalten. Details siehe
[Konfiguration & Umgebungsvariablen](/self-hosting/configuration/#admin-totp-zurücksetzen).
:::

## Technische Details

TOTP-Secrets werden verschlüsselt gespeichert (`sodium_crypto_secretbox`, Schlüssel wird beim
ersten Einsatz selbstheilend in `config.php` angelegt), Recovery-Codes ausschließlich gehasht
(`password_hash()`) — nie im Klartext, außer für den einen Moment der Anzeige direkt nach der
Generierung.
