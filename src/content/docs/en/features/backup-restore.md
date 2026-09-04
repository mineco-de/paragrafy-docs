---
title: Backup Restore
description: Upload and restore a backup file — useful when switching between self-hosting and Managed Cloud.
---

Besides creating and downloading backups, the project settings also let you **upload and restore**
a `.sqlite` backup file. This makes switching between self-hosting and Managed Cloud easy in
either direction: export on one platform, import on the other — even if the source file contains
just a single project.

"Instance" here means one complete Paragrafy installation, i.e. one database — on self-hosting
that's typically your one server, on Managed Cloud it's your single, isolated account (every
customer has their own database there). An instance can itself contain several
projects/domains (see [Compliance Matrix](/en/features/compliance-matrix/)).

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
- If the restored database contains more projects than your current Managed Cloud plan allows,
  a warning appears after the restore. The restore itself is not blocked by this — in that case,
  check your Cloud dashboard to see whether a plan change is needed.

:::caution[Full replacement, not a merge]
Restoring replaces **this instance's entire database** — every project, legal text, translation,
user, and setting. If the target instance currently has several projects and the uploaded file
only has one, the other projects are deleted in the process. On Managed Cloud this only affects
your own isolated instance — not other customers'.

On Managed Cloud, the domain stored in the file is also carried over. After restoring, check the
Cloud dashboard to make sure the domain assignment still matches, and adjust it if needed.
:::

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms. This exact mechanism is what makes switching platforms easy:
download a backup on your current platform (see [Settings](/en/features/) → Backup & Export) and
upload it again on the new instance.
:::
