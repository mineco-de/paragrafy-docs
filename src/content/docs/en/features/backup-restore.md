---
title: Backup Restore
description: Upload and restore a backup file — useful when switching between self-hosting and Managed Cloud.
---

Besides creating and downloading backups, the project settings also let you **upload and restore**
a `.sqlite` backup file. This makes switching between self-hosting and Managed Cloud easy in
either direction: export on one platform, import on the other.

## How it works

1. Go to **Settings → Backup & Export**.
2. Scroll to the **"Restore backup"** section.
3. Choose a `.sqlite` file (e.g. a previously downloaded backup).
4. Check the box "I understand that all current data on this instance will be replaced by the
   uploaded file" and click **"Restore database"**.
5. A confirmation dialog asks one last time — after that, the database is replaced immediately.

Once the restore succeeds, a green message shows how many projects the restored database
contains.

## What happens under the hood

- The uploaded file is validated first: a valid SQLite format and the presence of Paragrafy's
  core tables (`projects`, `doc_types`, `documents`, `translations`). If either check fails, the
  operation is aborted and the current database stays untouched.
- **Before** anything is replaced, Paragrafy automatically creates a safety copy of the current
  database. It then shows up like any other entry at the top of the backup list and can be
  downloaded the same way — in case the restore turns out not to be what you wanted.
- Right after restoring, the new database is brought up to the current schema: if columns or
  tables are missing because the backup came from an older Paragrafy version, they're
  automatically added back with sensible defaults. So the backup does **not** need to come from
  the exact same version as the target instance.

:::caution[Full replacement]
Restoring replaces **this instance's entire database** — every project, legal text, translation,
user, and setting. On Managed Cloud this only affects your own instance, since every account has
its own isolated database.
:::

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms. This exact mechanism is what makes switching platforms easy:
download a backup on your current platform (see [Settings](/en/features/) → Backup & Export) and
upload it again on the new instance.
:::
