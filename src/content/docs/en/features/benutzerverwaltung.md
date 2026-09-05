---
title: User Management
description: Invite additional people by email and restrict project access with a checkbox matrix.
---

## Inviting people

In the admin area, under "Users" you can invite any number of people by email. Each invited
person receives an activation link where they set their own password — credentials are never
shared manually.

User management (inviting, changing project assignment, removing) is reserved exclusively for the
primary admin login. An invited person doesn't even see the "Users" menu item and cannot invite
further people themselves.

## Restricting access to projects

If an instance runs multiple projects, you can use a checkbox matrix to set which projects each
invited person can access. Clicking "Change assignment" opens the matrix, and a save button per
row applies the selection immediately.

:::note[No selection = full access]
If a person has no project checked at all, they still have access to **all** projects — this is
the default for newly invited people and for anyone invited before this feature existed. Only once
at least one checkbox is set does access get restricted to exactly the selected projects.
Unchecking every box for an already-restricted person therefore triggers a confirmation prompt,
since that turns access unrestricted again.
:::

A free-text note (e.g. "Data protection officer") is shown next to the name and email address —
purely informational, with no effect on permissions.

A "Forgot password" link on the login page lets anyone reset their own password without an admin
having to step in.

## Login protection

Failed sign-in attempts are throttled per IP address (5 attempts within 15 minutes) to make
automated brute-force attacks against the admin login harder.

:::tip[Managed Cloud vs. Self-Hosting]
On Managed Cloud accounts, people are no longer invited here in the admin — instead, use "Manage
users" in the [cloud dashboard](/en/managed-cloud/dashboard/#managing-users), where you also pick
via checkbox which of your projects the person gets access to. On self-hosted installs, invitations
still happen directly here in the admin, including the access restriction described above.

Independent of that, the admin area login is separate from the
[Managed Cloud customer dashboard](/en/managed-cloud/dashboard/) — from there, single sign-on
takes you straight in without signing in here again.
:::
