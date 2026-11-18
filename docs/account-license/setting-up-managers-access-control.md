---
description: "To make managing your Fluent Forms more efficient, you can assign Managers to specific WordPress user roles or individual users."
---

# Setting up Managers (Access Control)

To make managing your Fluent Forms more efficient, you can assign Managers to specific WordPress user roles or individual users. Additionally, you can set customized permissions to ensure they only have access to the features you've allowed, such as [managing form entries](/managing-entries) or [payments](/payments-overview).

This article will guide you through creating a **Manager** and setting their permissions.

>[!Note]
> By default, the WordPress Administrator will have full access to all Fluent Forms features.

## Access Manager Settings

Go to the Fluent Forms dashboard. From the top navigation bar, click the **Settings** (gear) icon and select **Permissions** from the left sidebar. You will see the **Role Based** and **Managers** sections.

![Permissions page with the Settings icon and Add Manager button highlighted](/images/account-license/setting-up-managers-access-control/setting-up-manager-01-scaled.webp)

### Role-Based

The **Role Based** section assigns access by WordPress user role. Check the roles you want, such as Editor, Author, or Contributor, or select **Check all**. Users with a selected role become Fluent Forms Managers and receive full access to all Fluent Forms features.

### Managers

In the **Managers** section, you can designate specific users as Fluent Forms Managers and customize their permissions to control what they can access. You can add multiple managers with different permission sets.

Click the **Add Manager** button to add a specific user as a Manager.

![Manage Fluent Forms](/images/account-license/setting-up-managers-access-control/manage-02.png)

The **Add Manager** popup appears. Select the user and set the manager's permissions.

**User Email:** Start typing to find an existing site user by email address. Users with the administrator role automatically receive all permissions.

**Permissions:** Select the permissions for this manager. You can also check **Select All** to choose every permission at once.

- View Forms

- View Entries

- View Payments (required to view [payment reports](/payment-reports), including revenue and payment-type reports)

- Manage Settings

- Manage Forms

- Manage Entries (lets the manager [edit submitted entries](/edit-user-submitted-entries))

- Manage Payments (required for [payment](/payments-overview) bulk actions, such as bulk delete or status updates)

- Full Access to all features.

**Access to Forms:** To limit the manager to certain forms, check **Enable Specific Forms Permission**. Then use the **Select the forms this manager can access** dropdown to choose the forms. If you leave it blank, the manager keeps access to all forms.

> [!Note]
> A manager with specific-form access works only within the forms you assign. They can't see or change anything that belongs to other forms. That includes entries, webhook feeds and stats in the WordPress dashboard widget. A form import also can't overwrite a form they can't access.

Click the **Save** button to finalize the manager's permissions.

![Add Manager popup with the Enable Specific Forms Permission option](/images/account-license/setting-up-managers-access-control/03-2-scaled-2.webp)

Once you save, the manager appears in the **Managers** table. The table shows their ID, name, email, role, the forms they can access, and their permissions. **Specific** under **Forms** means the manager is limited to selected forms.

To change a manager's access, click the **Edit** (pencil) icon. To remove the manager, click the **Delete** (trash) icon.

![Managers table with the Edit and Delete icons highlighted](/images/account-license/setting-up-managers-access-control/manage-04.webp)
