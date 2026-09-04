---
title: Compliance Matrix & Multi-Language
description: See at a glance which required documents are missing in which language — and keep them in sync.
---

The compliance matrix is the admin dashboard's home screen: a table with one row per required
document (terms & conditions, privacy policy, imprint, etc.) and one column per enabled language
(`DE`, `EN`, `ES`, `FR`, etc.).

## Status at a glance

Every cell immediately shows the state of a language version:

- **Live** — published and publicly accessible
- **Draft** — saved but not yet published
- **Missing** — not yet created for this language
- **Outdated** — see [Automatic version sync](#automatic-version-sync) below

Every language version can be published or unpublished with a single click straight from the
matrix (one-click toggle). A copy button next to each cell puts that language version's public
URL on the clipboard.

## Automatic version sync

When you change a language version's content (e.g. the German terms), Paragrafy automatically
flags every other language version of the same document as **"Outdated"** — detected via hash
comparison, not by date. That way a translation that needs to catch up after a legal change is
never overlooked. The built-in diff viewer highlights changes in color (green = added, red =
removed).

## Translate directly in the editor

For language versions flagged as outdated or newly created, the side-by-side editor offers a
bidirectional DeepL integration (`DE → EN`, `EN → DE`, `ES → DE`, etc.). Placeholders such as
company names or links are automatically protected and left untranslated.

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms. DeepL translation requires your own DeepL API key — on
[Managed Cloud](/en/managed-cloud/overview/) as well as [self-hosting](/en/self-hosting/overview/),
you enter it in the project settings.
:::
