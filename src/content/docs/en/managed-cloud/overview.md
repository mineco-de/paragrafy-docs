---
title: What is Managed Cloud?
description: Fully hosted Paragrafy operation without your own server.
---

Paragrafy Cloud is the hosted variant of Paragrafy that we operate for you. You get a
fully set up project and don't need to worry about anything described in the
[self-hosting chapters](/en/self-hosting/overview/).

:::tip[In short]
Sign up, pay, get started. We handle hosting, SSL certificates, backups, updates, and cron jobs
automatically in the background.
:::

## What runs automatically for you

- **Provisioning:** After payment (Stripe checkout), your project is created automatically —
  including database and initial configuration. No manual setup required.
- **Hosting & Domains:** Your project runs on a subdomain (`yourproject.paragrafy.cloud`) or
  your own domain. With a custom domain, we handle DNS verification, VirtualHost setup, and SSL
  certificates fully automatically — without any server access on your side.
- **Backups:** Rolling automatic backups of your legal texts and configuration, no need to set up
  a cron job.
- **Updates:** We roll out new Paragrafy versions automatically. You never have to update
  manually or run migration scripts.
- **Cron Jobs:** The four automation endpoints (scheduled publishing, webhook delivery, backup,
  audit email — see [Cron Jobs](/en/self-hosting/cron-jobs/)) are already set up.
- **SSO Login:** From your Cloud dashboard, you land directly in your project's Paragrafy admin
  via single sign-on, without logging in again.

## Plans

- **Solo:** One project per account.
- **Flex:** Multiple projects in one account, tiered pricing from 2 projects.
- **Enterprise:** Custom number of projects and terms, a personal point of contact instead of
  form/email support — on request.

Central admin login (single sign-on across all your own projects) and a custom domain per
project are included in all cloud plans. Optionally available for Solo and Flex: a **setup
service** — we import your existing legal texts and set up the pages for you.

Billing is monthly via Stripe (Enterprise: invoice by arrangement). For a step-by-step
walkthrough of creating projects, connecting domains, changing plans, or managing your
subscription, see [Your Dashboard](/en/managed-cloud/dashboard/).

## What stays the same

All core features — compliance matrix, translation, scheduled publishing, webhooks, API, embed
script, cookie banner — work identically to a self-hosted installation. See
[Core Features](/en/features/) for the full list.
