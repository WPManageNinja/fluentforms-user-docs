---
description: "To make managing your Fluent Forms more efficient, you can assign Managers to specific WordPress user roles or individual users."
---

# Setting up Managers (Access Control)

You can assign Managers to specific WordPress user roles or individual users. You also set permissions so each manager only reaches the features you allow, such as [managing form entries](/managing-entries) or payments. This article shows you how to create a **Manager** and set their permissions.

>[!Note]
> The WordPress Administrator has full access to all Fluent Forms features by default.

## Access Manager Settings

1. Go to the Fluent Forms dashboard.
2. Click the **Settings** (gear) icon in the navigation bar.
3. Select **Permissions** from the left sidebar.

The page shows the **Role Based** and **Managers** sections.

![Setting Up Manager](/images/account-license/setting-up-managers-access-control/setting-up-manager-01-scaled.webp)

### Role Based

The **Role Based** section assigns permissions by WordPress user role. Users with the selected role become Fluent Forms Managers and get access to Forms, Entries, Payments, and Settings. A role never grants **Full Access**.

### Managers

In the **Managers** section, you designate specific users as Fluent Forms Managers and set what each one can access. You can add multiple managers with different permission sets.

Click **Add Manager** to add a user as a manager.

![Manage Fluent Forms](/images/account-license/setting-up-managers-access-control/manage-02.png)

A popup opens where you select the manager and set their permissions.

**User Email:** Enter the email address of an existing site user.

**Permission:** Choose what the manager can do.

- View Forms
- View Entries
- View Payments (required to view [payment reports](/payment-reports), including revenue and payment-type reports)
- Manage Settings
- Manage Forms
- Manage Entries (lets the manager [edit submitted entries](/edit-user-submitted-entries))
- Manage Payments (required for [payment](/payments-overview) bulk actions, such as bulk delete or status updates)
- Full Access to all features

Manage Payments needs View Payments, View Payments needs View Entries, and View Entries needs View Forms.

**Access to Forms:** Check **Enable Specific Forms Permission** and select the forms the manager can use. If you leave the selection blank, the manager keeps access to all forms.

> [!Note]
> A manager with specific-form access works only within the forms you assign. They can't see or change anything that belongs to other forms. That includes entries, webhook feeds and stats in the WordPress dashboard widget. A form import also can't overwrite a form they can't access.

Click **Save** to finish.

![Fluent Forms](/images/account-license/setting-up-managers-access-control/03-2-scaled-2.webp)

After you save, the page lists the manager with their assigned permissions, as the screenshot below shows. Click the **Edit** or **Delete** icon next to a manager to change or remove them.

![Manage Fluent Forms](/images/account-license/setting-up-managers-access-control/manage-04.png)
