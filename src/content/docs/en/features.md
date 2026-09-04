---
title: Core Features
description: The complete feature set of Paragrafy.
---

Applies unchanged to both [Managed Cloud](/en/managed-cloud/overview/) and
[Self-Hosting](/en/self-hosting/overview/) — the feature set is identical in both variants.

## Multi-Language & Compliance

- **Multi-Tenant / Multi-Domain Routing**:
  Automatically detects the requesting subdomain (`legal.yourdomain.com`, `legal.project-b.com`)
  and serves the matching legal texts, colors, and company master data for that project.
- **Compliance Matrix with One-Click Toggle & Copy-URL**:
  The admin dashboard shows at a glance which mandatory texts exist in which languages (`DE`,
  `EN`, `ES`, `FR`, etc.), are saved as drafts, or still incomplete. With instant toggles and
  1-click copy buttons for every language URL. See
  [Compliance Matrix & Multi-Language](/en/features/compliance-matrix/) for the full workflow
  including version sync and translation.
- **Bidirectional DeepL Translation & Automatic Version Sync**:
  Change a source text and Paragrafy automatically flags every other language version as
  "outdated" (hash diff), then you translate them with protected placeholders directly in the
  side-by-side editor. See
  [Compliance Matrix & Multi-Language](/en/features/compliance-matrix/) for details.
- **Language Tabs in the Editor**:
  Active languages appear as tabs; an optional comparison view shows the reference language
  side-by-side when needed.
- **Audit & Deadline Tracking with SMTP Email**:
  Warns about texts that haven't been reviewed within the configured interval (e.g. 12 months),
  and can send review reports by email on request.

## Editor & Content Creation

- **Full-Featured WYSIWYG & Code Editor**:
  Visual formatting toolbar (H2, H3, bold, italic, lists, links) with a 1-click toggle to raw
  HTML source.
- **Legal Text Import Mode (BETA)**:
  Imports an existing legal text page by URL or file upload and has an AI (Anthropic Claude or
  OpenAI) map it automatically into the matching template with correctly placed
  `{{placeholders}}` — including a suggestion of the detected company data for confirmation. See
  [Legal Text Import Mode](/en/features/einlesemodus/) for the full workflow.
- **Version History with Diff & Restore**:
  Every publication of a legal text creates a new version, including a diff view and
  non-destructive restore. See
  [Version History & Change Log](/en/features/versionshistorie/) (also covers the change log /
  audit trail).
- **Unlimited Custom Legal Text Types**:
  Beyond the mandatory pages, additional documents can be created across projects (e.g. B2B terms,
  sponsorship agreements, license terms) and optionally flagged as mandatory.
- **Dark Mode**:
  Light/dark/auto toggle in settings, saved per browser — with no effect on other people or the
  public legal text pages.

## Publishing & Automation

- **Scheduled Publishing**:
  Changes to terms & conditions or privacy policies can be scheduled in advance for a target date
  (e.g. `Aug 31, 00:00`). The current version stays live until that date and is automatically
  replaced at the target time.
- **Public Preview of Scheduled Changes**:
  At `/{lang}/{slug}/preview` (and via the JSON API), a scheduled, not-yet-live version can be
  viewed before its target date — e.g. to inform users in advance about upcoming changes to your
  terms.
- **Full-Featured Webhooks with Queue, Retry & Delivery Logs**:
  Notifies connected web apps via `POST` webhook on go-live (`legal_text.updated`) and advance
  notices (`legal_text.scheduled`, incl. `preview_url`) with complete fields (`effective_date`,
  `url`, `api_url`, `status`, `was_scheduled`). Delivery runs asynchronously via a queue with
  automatic retry (up to 5 attempts, increasing delay) — a slow recipient never blocks saving. A
  built-in log in the admin area shows HTTP status codes, server responses, and latencies. See
  [Webhooks](/en/integrations/webhooks/) for the full specification.
- **Headless JSON API & In-App Embed Drawer**:
  Provides endpoints under `/api/:lang/:slug` and ships a modal sheet script (`/embed.js`) for
  embedding directly into web apps. See [JSON API](/en/integrations/api/) and
  [Embed Drawer](/en/integrations/embeds/).

## Public Presentation & Privacy

- **Notion/Stripe-Style Public Viewer**:
  Scroll-following table of contents (sticky TOC with scroll-spy), reading-time estimate, direct
  anchor links (`#`), and live text filtering across all target languages.
- **GDPR Cookie Consent Banner**:
  Built-in, lightweight consent script (`/consent.js`) with no external dependencies. Optionally
  paired with a server-side [consent audit log](/en/integrations/embeds/#consent-audit-log)
  (anonymized IP, timestamp, text hash) for GDPR proof-of-consent requirements.

## Administration & Security

- **Multi-User Management with Email Invitations**:
  Invite as many people as you like by email; they set their own password via an activation link.
  See [User Management](/en/features/benutzerverwaltung/) for details on access rights and login
  protection.
- **Login Protection**:
  Failed login attempts are throttled per IP address (5 attempts / 15 minutes) to make brute-force
  attacks harder.
- **Automatic Rolling Backups (7 days)**:
  A cron endpoint backs up the database daily and automatically deletes older snapshots. The
  latest backups can be downloaded individually from settings.
- **Backups & Exports**:
  Download a backup of the complete database, or all published legal texts as text files (ZIP,
  sorted by language/slug), from settings.
- **Backup Restore**:
  Restore an uploaded backup to replace the instance's entire database — makes
  switching between self-hosting and Managed Cloud easier. Also works with backups from older
  Paragrafy versions. See [Backup Restore](/en/features/backup-restore/) for the full
  workflow.
