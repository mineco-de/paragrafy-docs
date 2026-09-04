---
title: Your Dashboard
description: How to use your Managed Cloud account — instances, domains, billing, and account.
---

The cloud dashboard is the management interface for your account and your instances — separate
from the actual [legal text admin](/en/features/) of each individual instance, which you switch
to via single sign-on (see [SSO handoff](#switching-to-legal-text-management) below).

## Login & overview

After logging in you see your current plan (plan chip), your instance usage (e.g. "1/1
instances"), and a status badge per instance (**active**, **provisioning**, **DNS pending**,
**SSL pending**, or **suspended**). New instances also show a "getting started" checklist. If a
subscription is ending or a payment is overdue, a warning banner appears with a countdown to the
end of the grace period.

## Creating a new instance & initial setup

As long as your plan limit isn't reached, you can create another project via "New instance" — a
project name and a subdomain slug are all that's needed. Right after that, a short setup form
walks you through the mandatory imprint details (company, address, contact, legal representative,
registration entry). This step can be skipped and filled in later at any time in the legal text
admin under "Settings".

## Connecting your own domain

Instead of the system subdomain (`yourproject.paragrafy.cloud`), you can attach your own domain.
The dashboard shows you the required A record pointing to our server IP; DNS and SSL checks then
run automatically in the background (the status badge updates every few minutes), and a "Check
again now" button triggers the check immediately if needed.

:::caution[Removing a domain]
"Remove domain" switches the instance back to the system subdomain. Only confirm this if you
really mean it — external links to your previous domain will stop working afterward.
:::

## Changing your plan

Under "Subscription" you see the Single and Agency plans side by side with price and feature
scope (Agency: multiple instances, central admin login, a custom domain per project). Switching
happens with one click plus confirmation, billed pro-rata via Stripe. Downgrading to Single is
only possible once just one instance remains.

## Subscription, invoices & cancellation

"Subscription & Billing" takes you to the Stripe customer portal, where you manage your payment
method, invoices, and cancellation. After canceling, your instance stays active until the end of
the paid period and then continues, suspended, through a grace period; **a backup download
remains available during this time** so you can save your data. A click on "Reactivate" starts a
new Stripe checkout session for the same account, without having to create a new one.

## Account settings & activity

Under "Account" you change your display name, email address (confirmed via link), and password.
The "Activity" section shows a complete log of every change made to your account and your
instances — including actions triggered by our support team.

## Support

"Support" reaches us directly from the dashboard, scoped to a project with a subject and message
— your account is automatically attached.

## Switching to legal text management

The "Manage legal texts" button takes you via single sign-on straight into the
[Paragrafy admin](/en/features/) of that instance — no additional login required. From there you
manage the compliance matrix, translations, webhooks, and every other core feature.

## Deleting an instance

An instance can be deleted at any time via the corresponding button (with a confirmation prompt
and a reminder to download a backup first). Deletion is blocked if it's your last instance or if
a custom domain is still attached — remove the domain first.

### Deletion protection

The lock icon next to each instance enables deletion protection. While it's active, the delete
button is hidden and the instance cannot be deleted by accident — editing, viewing, and every
other action are unaffected. Clicking the lock again lifts the protection. Handy for actively used
instances where an accidental click would be costly.

:::note
Deletion protection is independent of a suspension by our support team (status "suspended") — it
only affects self-service deletion by you.
:::
