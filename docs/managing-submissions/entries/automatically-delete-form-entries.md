---
description: "Some forms don’t need to keep data for long, like weekly bookings, surveys, or polls. Over time, old entries can pile up and clutter your database."
---

# Automatically Delete Form Entries

Some forms don’t need to keep data for long, like weekly bookings, surveys, or polls. Old entries pile up over time and clutter your database. With **Fluent Forms**, you can delete form entries automatically.

You can delete entries right after submission or after a set number of days. This keeps your data tidy and your site running smoothly.

## Accessing the Compliance Settings

First, open the settings panel for the form you want to configure. In your WordPress dashboard, go to **Fluent Forms** > **Forms**. Click the **Settings** (gear) icon on the form's row, or open the form and click **Configuration** in the top bar.

![Settings Automatically Delete Form Entries](/images/managing-submissions/entries/automatically-delete-form-entries/Forms-settings-01-scaled.webp)

On the **Configuration** page, expand **Privacy & Data** in the left-hand menu and click **Compliance Settings**. Under **Data retention policy**, choose **Keep all entries**, **Auto-delete old entries**, or **Delete entries immediately**.

![Compailance Settings](/images/managing-submissions/entries/automatically-delete-form-entries/Compailance-settings-02-scaled.webp)

### Delete Entries Right After Submission

Use this option when the form needs to act, such as sending an [email notification](/setup-adminuser-email-notifications) or running a [CRM integration](/integrations-overview), but you don't need to store the entry data in WordPress.

In the **Compliance Settings**, select **Delete entries immediately**.

> [!Warning]
> With this option on, Fluent Forms deletes entries immediately after submission. It does not store entry data, analytics, or [visual reports](/visual-representation-of-form-entries) for this form.

Then click **Save** to apply the change.

![Delete Entry Data After Submission](/images/managing-submissions/entries/automatically-delete-form-entries/delete-entry-data-after-form-submission-03-scaled.webp)

### Delete Old Entries After a Specific Time

Use this option to remove entries automatically once you no longer need them.

In the **Compliance Settings**, select **Auto-delete old entries**. The **Delete entries older than** field appears. Enter how many days old an entry must be before Fluent Forms deletes it. You can type a number or use the **+** and **–** buttons to adjust the count.

**Example**: If you set the number to **10**, Fluent Forms deletes any submission older than **10** days.

Then click **Save** to activate the auto-deletion rule.

![Enable Auto Delete Old Entries Automatically Delete Form Entries](/images/managing-submissions/entries/automatically-delete-form-entries/enable-auto-delete-old-entries-04-scaled.webp)

To change these settings later, select **Keep all entries** and save.
