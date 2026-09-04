---
title: "Installation: Apache"
description: Run Paragrafy via an Apache VirtualHost.
---

:::tip[Managed Cloud]
On [Managed Cloud](/en/managed-cloud/overview/), we handle server setup and VirtualHost config
automatically — this step is skipped entirely.
:::

## 1. Upload Files & Set Permissions

```bash
sudo chown -R www-data:www-data /var/www/paragrafy
sudo find /var/www/paragrafy -type d -exec chmod 755 {} +
sudo find /var/www/paragrafy -type f -exec chmod 644 {} +
```

## 2. Apache VirtualHost Configuration

```apache
<VirtualHost *:80>
    ServerName legal.yourdomain.com
    ServerAlias legal.project-b.com
    DocumentRoot /var/www/paragrafy

    <Directory /var/www/paragrafy>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/paragrafy_error.log
    CustomLog ${APACHE_LOG_DIR}/paragrafy_access.log combined
</VirtualHost>
```

Next, continue with [Initial Setup & Cron Jobs](/en/self-hosting/cron-jobs/).
