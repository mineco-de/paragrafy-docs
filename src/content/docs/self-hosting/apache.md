---
title: "Installation: Apache"
description: Paragrafy per Apache-VirtualHost betreiben.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) übernehmen wir Server-Setup und VirtualHost-Config
automatisch — dieser Schritt entfällt komplett.
:::

## 1. Dateien hochladen, Abhängigkeiten installieren & Berechtigungen setzen

```bash
composer install --no-dev --optimize-autoloader

sudo chown -R www-data:www-data /var/www/paragrafy
sudo find /var/www/paragrafy -type d -exec chmod 755 {} +
sudo find /var/www/paragrafy -type f -exec chmod 644 {} +
```

`composer install` zieht die Bibliotheken für die Zwei-Faktor-Authentifizierung
(`spomky-labs/otphp`, `endroid/qr-code`) nach `vendor/` (nicht Teil des Git-Repos). Benötigt die
PHP-Erweiterungen `sodium` und `gd` — beide sind bei einer Standard-PHP-8.2-Installation dabei,
`gd` muss auf manchen Distributionen ggf. mit `apt install php8.2-gd` nachinstalliert werden. Ohne
`vendor/` funktioniert alles andere weiterhin — nur der TOTP-Einrichtungsbildschirm unter
**Admin → Sicherheit** zeigt dann statt des QR-Codes einen Hinweis "nicht installiert".

## 2. Apache VirtualHost Konfiguration

```apache
<VirtualHost *:80>
    ServerName legal.deinedomain.de
    ServerAlias legal.projekt-b.de
    DocumentRoot /var/www/paragrafy

    <Directory /var/www/paragrafy>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/paragrafy_error.log
    CustomLog ${APACHE_LOG_DIR}/paragrafy_access.log combined
</VirtualHost>
```

Die mitgelieferte `.htaccess` blockiert direkten HTTP-Zugriff auf `*.sqlite*`, `config.php` und
`.env*` als zusätzliches Sicherheitsnetz — vorausgesetzt `AllowOverride All` ist wie oben gesetzt,
damit Apache die Datei überhaupt auswertet.

:::caution[Mehrere Domains an einer Instanz]
Läuft eine Paragrafy-Instanz für mehrere Kunden-Domains (`ServerAlias`/mehrere VirtualHosts, die
alle auf denselben `DocumentRoot` zeigen), löst die App das passende Projekt über den
`Host`-Header auf. Achte darauf, dass **keine** Catch-All-/Default-VirtualHost-Konfiguration
unbekannte Domains ebenfalls an diese Instanz durchreicht — sonst könnte eine Anfrage mit
gefälschtem `Host`-Header direkt an die Server-IP ein fremdes Projekt adressieren.
:::

:::caution[Cache/CDN vor der Instanz]
Setzt du einen Reverse Proxy oder CDN (z. B. Cloudflare) mit eigenen Cache-Regeln vor deine
Instanz, schließe `/admin/*` von jeglichem Caching aus. Eine gecachte Admin-Seite kann sonst das
CSRF-Token eines anderen Besuchers enthalten, wodurch das Speichern von Einstellungen mit einem
Zugriffsfehler fehlschlägt. Die öffentlichen Rechtstexte-Seiten sind davon nicht betroffen und
lassen sich bedenkenlos cachen.
:::

Danach geht es weiter mit der [Erstinstallation & Cron-Jobs](/self-hosting/cron-jobs/).
