---
description: "The Fluent Forms Admin Approval feature allows administrators to review, approve, or decline form submissions before processing them."
---

# Admin Approval Feature

The **Fluent Forms Admin Approval feature** lets administrators review, approve, or decline form submissions before processing them. When a user submits a form, Fluent Forms sends an [email notification](/setup-adminuser-email-notifications) to the admin, who can approve or decline the entry.

> [!Note]
> **Admin Approval** is a **Pro** feature. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

This article shows you how to set up the admin approval feature in Fluent Forms.

## Enabling the Admin Approval Module

Go to **Integrations** in the Fluent Forms Navbar and search for **Admin Approval** in the search bar.

Turn on the toggle to activate the approval functionality.

![Admin Approval](/images/managing-submissions/entries/admin-approval-feature/admin-approval-01.webp)

## Configuring Global Settings

Click **Global Settings** in the top menu, then click **Admin approval** in the left sidebar. Here you manage approval notifications. Choose from these options, as shown in the screenshot below:

**A. Send Email Notification:** Choose **Site Admin** or **Custom Email** as the recipient.

   * **Site Admin:** Fluent Forms sends submission confirmation emails to the site's Admin Email for approval.
   * **Custom Email:** You specify an alternative email address for approval notifications.

**Enter Recipient Email Address:** With **Custom Email**, enter one or more email addresses separated by commas.

**B. Email Subject:** Enter the subject of your email.

**C. Email Body:** Customize the email content. You can send emails in **Raw HTML format**.

**D. Send Email as RAW HTML Format:** Check this option to send emails in RAW HTML format.

**E. Auto-Delete Option:** Check **Automatically delete Unapproved & Declined entries if not confirmed in certain days**, then set **Waiting Days**. After that time, Fluent Forms deletes entries that are still unapproved or declined.

![Admin Approval Feature step](/images/managing-submissions/entries/admin-approval-feature/02.webp)

## Setting Up Admin Approval for Specific Forms

To enable Admin Approval for a form, follow these steps:

1. Open your form and click **Configuration** in the top bar.
2. Expand **Security & Validation** in the left menu and click **Admin Approval**.
3. Turn on the **Enable Admin approval before Form Data Processing** toggle for that form.
4. Customize the **Approval Pending Message**. You can use shortcodes for dynamic content.

![Admin Approval Feature step](/images/managing-submissions/entries/admin-approval-feature/03.webp)

### Declined Submission Notification

When you decline a submission, Fluent Forms can send an **email notification** to the user. To enable it:

1. Make sure your form includes an email field.
2. Select that field from the dropdown. Leave it empty to send no notification.
3. Configure the **Declined Submission Notification** settings.
4. Customize the **email subject** and **body**. The body supports Raw HTML format.
5. Check the option to **Send an Email** in RAW HTML Format if you want it.

## Disabling Admin Approval for Logged-In Users

To approve submissions from logged-in users automatically, check **Disable Admin Approval for Logged in users**. Users with authenticated accounts then bypass the approval process.

Click **Save** to save the settings.

![Admin Approval Feature step](/images/managing-submissions/entries/admin-approval-feature/04.webp)

### Preview the Admin Approval Email

Admins receive an email with options to **approve** or **decline** form submissions. The email looks like the example below.

![Admin Approval Feature step](/images/managing-submissions/entries/admin-approval-feature/05-2.webp)

> [!Note]
> If your form includes a [Payment Field](/payments-overview), Fluent Forms bypasses the Admin Approval process.

### Review Entries by Approval Status

With **Admin Approval** on, the **Entries** page shows extra **Unapproved**, **Approved**, and **Declined** tabs. Use them to find entries that need a decision. See [Managing Entries](/managing-entries).
