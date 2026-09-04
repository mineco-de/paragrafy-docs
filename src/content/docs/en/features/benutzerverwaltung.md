---
title: User Management
description: Invite additional people by email and secure sign-ins.
---

## Inviting people

In the admin area, under "Users" you can invite any number of people by email. Each invited
person receives an activation link where they set their own password — credentials are never
shared manually.

:::note[No roles or permissions]
All invited people have full access to a project's entire admin panel — there are currently no
tiered roles or permissions. Only invite people who should also be allowed to edit and publish
all legal texts.
:::

A "Forgot password" link on the login page lets anyone reset their own password without an admin
having to step in.

## Login protection

Failed sign-in attempts are throttled per IP address (5 attempts within 15 minutes) to make
automated brute-force attacks against the admin login harder.

:::tip[Managed Cloud vs. Self-Hosting]
Identical on both platforms. The admin area login is separate from the
[Managed Cloud customer dashboard](/en/managed-cloud/dashboard/) — from there, single sign-on
takes you straight in without signing in here again.
:::
