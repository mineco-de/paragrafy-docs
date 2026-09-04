---
title: Einlesemodus für Rechtstexte
description: Bestehende Rechtstexte per URL oder Datei einlesen lassen — die KI ordnet sie automatisch in die passende Vorlage ein.
---

:::caution[BETA]
Diese Funktion befindet sich in der Beta-Phase. Bitte prüfe das Ergebnis vor der Veröffentlichung
immer inhaltlich und rechtlich — die KI liefert einen Entwurf auf Basis deines alten Texts, ersetzt
aber keine rechtliche Prüfung.
:::

Bislang musste jeder Rechtstext manuell im Editor getippt oder per Copy-Paste eingefügt werden —
inklusive dem manuellen Ersetzen von Firmendaten durch die `{{platzhalter}}`-Buttons. Der
**Einlesemodus** übernimmt das: Du gibst die URL deiner alten Rechtstext-Seite an oder lädst eine
Datei hoch, eine KI ordnet den Inhalt automatisch in die passende Paragrafy-Struktur ein, setzt die
Platzhalter korrekt und schlägt dir die erkannten Firmendaten zur Bestätigung vor.

Verfügbar für die sechs Standard-Rechtstexte: Impressum, Datenschutzerklärung, AGB (B2C), AGB
(B2B), Cookie-Richtlinie und Widerrufsbelehrung.

## Voraussetzung: KI-Provider einrichten

Bevor der Einlesemodus genutzt werden kann, muss einmalig ein KI-Provider hinterlegt werden:

1. Gehe zu **Einstellungen** deines Projekts.
2. Scrolle zum Abschnitt **„KI-Einlesemodus"**.
3. Wähle einen Provider — **Anthropic Claude** oder **OpenAI**.
4. Trage den passenden API-Key ein und speichere.

Alternativ kann der Key global über eine `.env.local`-Datei auf dem Server hinterlegt werden
(`CLAUDE_API_KEY` bzw. `OPENAI_API_KEY`) — er wird dann automatisch als Fallback genutzt, falls im
Projekt kein eigener Key gesetzt ist. Das entspricht dem bereits bekannten Muster für den
DeepL-API-Key (siehe [Compliance-Matrix & Mehrsprachigkeit](/features/compliance-matrix/)).

Ohne hinterlegten Key erscheint beim Einlesen eine klare Fehlermeldung.

## So funktioniert's

1. Öffne im Editor einen der sechs Standard-Rechtstexte.
2. Klicke oben in der Werkzeugleiste auf **„Alten Text einlesen (BETA)"**.
3. Wähle eine Quelle:
   - **URL** deiner bestehenden Seite (z. B. `https://alte-domain.de/impressum`)
   - **Datei-Upload** — `.html`, `.htm`, `.txt` oder `.pdf`
4. Klick auf **„Einlesen"** — die Verarbeitung dauert in der Regel wenige Sekunden.
5. Du siehst danach:
   - eine **Vorschau des generierten Inhalts** im Paragrafy-Stil, mit `{{platzhaltern}}` statt
     konkreter Firmendaten im Fließtext,
   - ein **Formular mit den erkannten Firmendaten** (Firmenname, Adresse, E-Mail, Telefon,
     Vertretung, Registereintrag) — vorausgefüllt, aber frei editierbar.
6. Du entscheidest, wie es weitergeht:
   - **„Nur Text übernehmen"** — der generierte Inhalt landet im Editor, die
     Projekt-Firmendaten bleiben unverändert.
   - **„Text + Firmendaten übernehmen"** — zusätzlich werden die bestätigten Firmendaten in die
     Projekteinstellungen übernommen (nur ausgefüllte Felder; leere Felder überschreiben nichts).
7. Der Text steht danach ganz normal im Editor — wie gewohnt prüfen, ggf. nachbearbeiten und über
   **„Speichern"** veröffentlichen. Es wird nichts automatisch live geschaltet.

## Sicherheit & Grenzen

- **Kein automatisches Veröffentlichen** — Veröffentlichung erfolgt immer erst über den regulären
  Speichern-Button.
- **Firmendaten nur nach Bestätigung** — erkannte Werte werden vorgelegt und nur bei aktivem Klick
  auf „... + Firmendaten übernehmen" gespeichert.
- **SSRF-Schutz beim URL-Import** — interne/private Adressen (localhost, private IP-Bereiche,
  `file://`-URLs etc.) werden automatisch blockiert.
- **Datei-Uploads** sind auf zulässige Dateitypen und eine Maximalgröße begrenzt.

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen. Für den Einlesemodus ist ein eigener API-Key eines
unterstützten KI-Providers nötig — auf [Managed Cloud](/managed-cloud/overview/) sowie beim
[Self-Hosting](/self-hosting/overview/) trägst du ihn in den Projekteinstellungen ein.
:::
