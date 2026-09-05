---
title: Benutzerverwaltung
description: Weitere Personen per E-Mail einladen und Projektzugriff per Checkbox-Matrix einschränken.
---

## Personen einladen

Im Admin-Bereich lassen sich unter "Benutzer" beliebig viele Personen per E-Mail einladen. Jede
eingeladene Person erhält einen Aktivierungslink, über den sie ihr eigenes Passwort festlegt —
Zugangsdaten werden nie manuell weitergegeben.

Die Nutzerverwaltung (Einladen, Zuordnung ändern, Entfernen) ist ausschließlich dem primären
Admin-Login vorbehalten. Eine eingeladene Person sieht den Menüpunkt "Benutzer" gar nicht erst und
kann selbst keine weiteren Personen einladen.

## Zugriff auf Projekte beschränken

Läuft eine Instanz mit mehreren Projekten, lässt sich pro eingeladener Person per Checkbox-Matrix
festlegen, auf welche Projekte sie Zugriff hat. Ein Klick auf "Zuordnung ändern" öffnet die Matrix,
ein Speichern-Button je Zeile übernimmt die Auswahl sofort.

:::note[Ohne Auswahl = voller Zugriff]
Ist für eine Person kein einziges Projekt angehakt, hat sie weiterhin Zugriff auf **alle**
Projekte — das ist die Voreinstellung für neu eingeladene Personen und für alle, die vor Einführung
dieser Funktion eingeladen wurden. Erst sobald mindestens ein Häkchen gesetzt ist, wird der Zugriff
auf genau die ausgewählten Projekte beschränkt. Beim Entfernen aller Häkchen einer bereits
eingeschränkten Person erscheint deshalb eine Sicherheitsabfrage, da das wieder unbeschränkten
Zugriff bedeutet.
:::

Eine als freies Feld gepflegte Notiz (z. B. "Datenschutzbeauftragter") wird neben Name und
E-Mail-Adresse angezeigt — rein informativ, ohne Auswirkung auf die Rechte.

Ein "Passwort vergessen"-Link auf der Login-Seite ermöglicht es jeder Person, ihr Passwort
selbstständig zurückzusetzen, ohne dass ein Admin eingreifen muss.

## Login-Schutz

Fehlgeschlagene Anmeldeversuche werden pro IP-Adresse gedrosselt (5 Versuche innerhalb von 15
Minuten), um automatisierte Brute-Force-Angriffe auf den Admin-Login zu erschweren.

:::tip[Managed Cloud vs. Self-Hosting]
Bei Managed-Cloud-Konten werden Personen nicht mehr hier im Admin eingeladen, sondern zentral über
"Benutzer verwalten" im [Cloud-Dashboard](/managed-cloud/dashboard/#benutzer-verwalten) — dort
wählst du zusätzlich per Checkbox aus, auf welche deiner Projekte die Person Zugriff erhält. Beim
Self-Hosting bleibt die Einladung direkt hier im Admin, inklusive der Zugriffsbeschränkung aus dem
Abschnitt oben.

Der Login zum Admin-Bereich ist unabhängig davon getrennt vom
[Managed-Cloud-Kundendashboard](/managed-cloud/dashboard/) — von dort gelangst du per
Single-Sign-On direkt hinein, ohne dich hier erneut anzumelden.
:::
