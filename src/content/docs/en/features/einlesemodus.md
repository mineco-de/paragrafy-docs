---
title: Legal Text Import Mode
description: Import an existing legal text page by URL or file — the AI maps it into the matching template automatically.
---

:::caution[BETA]
This feature is in beta. Always review the result for accuracy and legal compliance before
publishing — the AI produces a draft based on your old text, it does not replace legal review.
:::

Until now, every legal text had to be typed manually into the editor or pasted in — including
manually replacing company details with the `{{placeholder}}` buttons. **Import mode** takes care
of that: give it the URL of your existing legal text page or upload a file, and the AI maps the
content into the matching Paragrafy structure, sets the placeholders correctly, and suggests the
detected company data for your confirmation.

Available for the six standard legal texts: imprint, privacy policy, terms (B2C), terms (B2B),
cookie policy, and revocation policy.

## Prerequisite: set up an AI provider

Before you can use import mode, an AI provider needs to be configured once:

1. Go to your project's **Settings**.
2. Scroll to the **"AI import mode"** section.
3. Choose a provider — **Anthropic Claude** or **OpenAI**.
4. Enter the matching API key and save.

Alternatively, the key can be set globally via a `.env.local` file on the server
(`CLAUDE_API_KEY` or `OPENAI_API_KEY`) — it's then used automatically as a fallback if no
project-specific key is set. This matches the existing pattern for the DeepL API key (see
[Compliance Matrix & Multi-Language](/en/features/compliance-matrix/)).

Without a configured key, import mode shows a clear error message.

## How it works

1. Open the editor for one of the six standard legal texts.
2. Click **"Import old text (BETA)"** in the toolbar.
3. Choose a source:
   - a **URL** of your existing page (e.g. `https://old-domain.com/imprint`)
   - a **file upload** — `.html`, `.htm`, `.txt`, or `.pdf`
4. Click **"Import"** — processing usually takes a few seconds.
5. You'll then see:
   - a **preview of the generated content** in Paragrafy's structure, with `{{placeholders}}`
     instead of literal company data in the body text,
   - a **form with the detected company data** (company name, address, email, phone,
     representative, registration details) — pre-filled but freely editable.
6. Choose how to proceed:
   - **"Apply text only"** — the generated content is loaded into the editor; your project's
     company data stays unchanged.
   - **"Apply text + company data"** — additionally applies the confirmed company data to the
     project settings (only fields you filled in; empty fields never overwrite existing data).
7. The text now sits in the editor like any other draft — review it, adjust as needed, and publish
   as usual via **"Save"**. Nothing goes live automatically.

## Security & limits

- **No automatic publishing** — publishing always still requires the regular Save button.
- **Company data only after confirmation** — detected values are shown to you and only saved once
  you actively click "... + company data".
- **SSRF protection on URL import** — internal/private addresses (localhost, private IP ranges,
  `file://` URLs, etc.) are automatically blocked.
- **File uploads** are restricted to allowed file types and a maximum size.

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms. Import mode requires your own API key from a supported AI
provider — on [Managed Cloud](/en/managed-cloud/overview/) as well as
[self-hosting](/en/self-hosting/overview/), you enter it in the project settings.
:::
