---
description: "Fluent Forms allows you to send email notifications to the admin and users every time someone fills out a form."
---

# Setup Admin/User Email Notifications

**Fluent Forms** sends email notifications to the admin and users every time someone fills out a form. You can also notify others, such as team members, support agents, or moderators.

This guide shows you how to set up the **Admin/User Email Notification**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/pltcvAqE1ww" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Email Notifications for Admin/User

Go to **Forms** in the top navbar. Click **Edit** on the form where you want to set the email notification to open its **Editor**.

![Editor Fluent Forms](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/1.-desired-Form-Editor-3-scaled.webp)

Click **Configuration** in the top bar and open **Email Notifications** under **Responses** in the left rail.

Fluent Forms creates one **Admin Notification Email** by default. Turn on its toggle to use it, or click the **Settings Icon** to edit it.

To create a new one, click **Add Notification**. This guide creates a new notification as an example.

In the notification list, you can also turn a notification on or off, duplicate it with **Duplicate notification settings**, or remove it with **Delete notification**. If your site has no SMTP plugin yet, the page shows a **Setup SMTP** prompt.

![Settings Integration Email Notification Add Notification Setup Admin/User Email Notifications](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/2.-Settings-Integration-Email-Notification-Add-new-notification-2-scaled.webp)

On the **Add Notification** page, fill in the settings you need and click **Save**. Your admin or user notification is now set.

![Email Notfications Page](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/3.-Email-Notfications-Page-scaled.webp)

The sections below explain each setting.

> [!Note]
> Admin and user notifications use the same settings. The only difference is who you choose in **Send To**.

### A. Name

Enter a name for your email notification so you can find it later.

### B. Send To

**Send To** has three options:

- **Send to Email:** Send the notification to a fixed address, such as the admin.

- **Select a Field:** Send the notification to the address a visitor enters in an email field.

- **Configure Routing:** Send the notification to different addresses based on the visitor's answers. See [Conditional Email Routing](/conditional-email-routing).

#### Setup Admin Notification Using Send to Email

By default, the `{wp.admin_email}` shortcode sends emails to the site admin. It uses the admin email set in your WordPress settings.

To use a different admin email, choose **Send to Email** and enter the address.

You can also send notifications to multiple recipients by separating email addresses with a comma (,).

![Email Notifications Admin](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/Email-Notifications-Admin-scaled.webp)

#### Setup User Notification Using Select a Field

Select **Select a Field** and choose the **Email** input field of your form. The address entered in that field receives the confirmation email.

Click the **drop-down arrow** in the **Select an email field** box to pick the field.

![Select Field Option Setup Admin/User Email Notifications](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/5.-Select-a-Field-option.webp)

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VBZ7cqgciBk" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Send Email (Payment Forms)

For payment forms, the **Send Email** option sets when Fluent Forms sends the email: **After Form Submit** or **After Payment Success**.

### C. Subject

Set a subject for your email notification. To add data from submitted entries, use the **{ }** shortcode icon in the right corner of the **Subject** field.

![Subject Option Fluent Forms](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/6.-Subject-option.webp)

### D. Email Body

Set the body of your email.

Use the **Add Shortcodes** drop-down arrow in the right corner to add dynamic data. For every available smart shortcode, see [Shortcodes in Confirmation Settings](/shortcodes-in-confirmation-settings).

For advanced customization, edit the email body as **HTML Codes** in the **Code** tab.

![Email Body Option](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/7.-Email-Body-option.webp)

#### Send Email as Raw HTML Format

This option lets you send the email body in **HTML format**. Type your HTML and shortcodes directly into the box.

![Send Email As Raw HTML Format](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/8.-Send-email-as-Raw-HTML-Format.webp)

### E. Conditional Logics (Pro)

Use this option to send the notification only when the conditions you set are met. Conditional logic in notifications is available in **Fluent Forms Pro**. For notifications that need no extra setup, leave it off.

> To learn more, read [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

![Conditional Logics Fluent Forms](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/9.-Conditional-Logics.webp)

### F. Media File Attachments (Pro)

Use **Media File Attachments** to send **PDF or image attachments** with the email notification. This option is available in **Fluent Forms Pro**. To remove a file, click the Trash Icon.

If you use the [PDF module](/pdf-module), a **PDF Attachments** option also appears here. Select a PDF template to attach to the email.

> Use SMTP to send attachments. Otherwise the email may go to spam.

![Media File Attachments Option](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/10.-Media-File-Attachments-option.webp)

### G. Advanced

Use these settings to control the sender, the reply address, and who else receives a copy.

Expand the **Advanced** section at the bottom of the page to find these options.

- **From Name & Email:** Set the sender name and email in the **From Name** and **From Email** fields. You can add dynamic data with the **{ }** shortcode icon. Fluent Forms recommends that you do not change the from email. Use your domain's email or your SMTP main email. Otherwise the email may fail to send.

- **Reply To:** Set an email address for replies to the notification. If you leave this field blank, replies go to the default email of your site.

- **BCC & CC:** Add an email address in **CC** or **BCC** to send a copy of the email to another person. Separate multiple addresses with a comma.

Click **Save**.

![Advanced Option Fluent Forms](/images/notifications-confirmations/email-notifications/setup-adminuser-email-notifications/11.-Advanced-option.webp)
