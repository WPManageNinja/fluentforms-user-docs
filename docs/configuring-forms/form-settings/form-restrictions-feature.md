---
description: "The Fluent Forms restriction feature allows you to control the number of entries in your forms, even at specific time intervals, such as daily, weekly, or…"
---

# Form Restrictions Feature

The Fluent Forms restriction feature lets you limit the number of entries in a form. You can apply the limit over a time interval, such as daily, weekly, or annually.

This guide shows you how to limit entries in Fluent Forms.

## Access the Form Settings

Go to **Forms** in the top navbar. Click **Edit** on the form you want to restrict to open its **Editor**.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Edit Form Restrictions Feature](/images/configuring-forms/form-settings/form-restrictions-feature/edit-form-01-3-scaled.webp)

## Enable Entry Restrictions

In the form editor, click the **Configuration** tab in the top bar. Select **Scheduling & Restrictions** in the left rail. The same panel also controls [form scheduling](/form-scheduling-feature).

![Access Settings](/images/configuring-forms/form-settings/form-restrictions-feature/access-settings-01-scaled.webp)

## Configure Form Restrictions

- **Maximum Number of Entries:** Turn on this toggle.
- **Maximum Entries:** Set the number of entries allowed with the **Plus (+)** and **Minus (-)** icons.
- **Limit period dropdown:** In the dropdown next to **Maximum Entries**, choose how often the limit applies. The default is **Total Entries**. The options are:
  - Total Entries
  - Per Day
  - Per Week
  - Per Month
  - Per Year
  - Per User (IP Address Based)
  - Per User (Logged in ID based)
- **Message Shown on Reaching Max Entries:** Enter the message visitors see when the limit is reached. The default is "Maximum number of entries exceeded."

When the limit is reached, the form no longer appears. Visitors see your message in its place. Entries in the trash do not count toward the limit.

> [!Note]
> **Per User (Logged in ID based)** only limits logged-in users. Visitors who are not logged in are not limited by this option. To limit them as well, use **Per User (IP Address Based)** or turn on [User Login Requirement](/user-login-requirement).

**For example:** To cap a webinar sign-up at 100 seats, set **Maximum Entries** to 100 and keep **Total Entries**. To allow one entry per member, set it to 1 and choose **Per User (Logged in ID based)**.

![Form Restrictions Feature step](/images/configuring-forms/form-settings/form-restrictions-feature/02-7-scaled.webp)

Click **Save** to apply your changes.

Next, see [Form Scheduling](/form-scheduling-feature) to open and close the form on set dates, or [Restrict Blank Form Submission](/restrict-blank-form-submission). To show how many entries are left, use the [helper shortcodes](/using-helper-shortcodes).
