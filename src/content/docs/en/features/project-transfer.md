---
title: Project Export & Import
description: Move a single project between two instances without touching any others.
---

[Backup restore](/en/features/backup-restore/) always replaces an instance's entire database. If
you only want to move **a single project** between two instances — e.g. moving one project from
self-hosting to a Managed Cloud instance that already has several projects — use **project export
& import** instead: it transfers only that project's legal content into a target project **you
explicitly choose**, and leaves every other project on the target instance untouched.

## How it works

1. Go to **Settings → Backup & Export → "Export & import a project"**.
2. Click **"Export this project"** to download the currently selected project as a standalone
   `.sqlite` file.
3. On the target instance, upload that file in the same section.
4. In the **"Target project (will be overwritten)"** dropdown, pick the project you want to
   import into.
5. Check the confirmation box and click **"Import into target project (merge)"**.

## What happens on import

- The import always goes into the project **you selected** in the dropdown — **a new project is
  never created automatically**. A target project must already exist beforehand (e.g. created via
  "New project" in the compliance matrix).
- Only the selected target project's documents/translations are overwritten for the languages
  included in the import. The target project's company data, branding, settings, and domain stay
  unchanged. Language versions that exist on the target but aren't included in the import are
  kept as well — a real merge, not a wipe.
- **Every other project on the target instance stays completely untouched.**
- Legal document types (`doc_types`, e.g. "Imprint" or "B2B Terms") are matched by their unique
  identifier — if a type already exists on the target, it's reused instead of duplicated.
- Before every import, Paragrafy automatically creates a safety copy of the target instance (it
  shows up in the regular backup list, see [Backup restore](/en/features/backup-restore/)).
- If the uploaded file contains more than one project, the import is rejected — that's what the
  [full restore](/en/features/backup-restore/) is for.

:::note[What gets transferred]
Only legal content: document types, documents, translations, and their version history.
Operational data such as webhook logs, consent records, the audit trail, and user accounts are
**not** transferred — that's source-instance data, not portable content.
:::

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms — built exactly for moving a single project between platforms without
putting any other project on the target instance at risk. Explicitly choosing the target project
(instead of auto-detecting it by domain) keeps this reliable even when domains changed between
export and import — e.g. because a custom domain got connected on Managed Cloud in the meantime.
:::
