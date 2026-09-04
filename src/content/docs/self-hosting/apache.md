---
title: "Installation: Apache"
description: Paragrafy per Apache-VirtualHost betreiben.
---

:::tip[Managed Cloud]
Auf [Managed Cloud](/managed-cloud/overview/) übernehmen wir Server-Setup und VirtualHost-Config
automatisch — dieser Schritt entfällt komplett.
:::

## 1. Dateien hochladen & Berechtigungen setzen

```bash
sudo chown -R www-data:www-data /var/www/paragrafy
sudo find /var/www/paragrafy -type d -exec chmod 755 {} +
sudo find /var/www/paragrafy -type f -exec chmod 644 {} +
```

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

Danach geht es weiter mit der [Erstinstallation & Cron-Jobs](/self-hosting/cron-jobs/).
