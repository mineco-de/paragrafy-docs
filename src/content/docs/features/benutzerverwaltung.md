---
title: Benutzerverwaltung
description: Weitere Personen per E-Mail einladen und Anmeldungen absichern.
---

## Personen einladen

Im Admin-Bereich lassen sich unter "Benutzer" beliebig viele Personen per E-Mail einladen. Jede
eingeladene Person erhält einen Aktivierungslink, über den sie ihr eigenes Passwort festlegt —
Zugangsdaten werden nie manuell weitergegeben.

:::note[Keine Rollen oder Rechte]
Alle eingeladenen Personen haben vollen Zugriff auf das gesamte Admin-Panel eines Projekts — es
gibt aktuell keine abgestuften Rollen oder Berechtigungen. Lade daher nur Personen ein, die auch
alle Rechtstexte bearbeiten und veröffentlichen dürfen sollen.
:::

Ein "Passwort vergessen"-Link auf der Login-Seite ermöglicht es jeder Person, ihr Passwort
selbstständig zurückzusetzen, ohne dass ein Admin eingreifen muss.

## Login-Schutz

Fehlgeschlagene Anmeldeversuche werden pro IP-Adresse gedrosselt (5 Versuche innerhalb von 15
Minuten), um automatisierte Brute-Force-Angriffe auf den Admin-Login zu erschweren.

:::tip[Managed Cloud vs. Self-Hosting]
Identisch auf beiden Plattformen. Der Login zum Admin-Bereich ist getrennt vom
[Managed-Cloud-Kundendashboard](/managed-cloud/dashboard/) — von dort gelangst du per
Single-Sign-On direkt hinein, ohne dich hier erneut anzumelden.
:::
