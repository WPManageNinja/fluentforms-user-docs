# Automatically Delete Form Entries

Some forms don’t need to keep data for long, like weekly bookings, surveys, or polls. Over time, old entries can pile up and clutter your database. With **Fluent Forms**, you can automatically delete form entries to keep things clean and organized.

You can choose to delete entries right after they’re submitted or after a set number of days. This helps you manage your data easily and keep your site running smoothly.

## Accessing the Compliance Settings

First, you need to navigate to the correct settings panel for the form you want to configure. From your WordPress dashboard, go to **Fluent Forms**. Hover over the title of the form you want to edit and click on **Settings**.

![Settings Automatically Delete Form Entries](/images/managing-submissions/entries/automatically-delete-form-entries/Forms-settings-01-scaled.webp)

On the settings page, look for the **Compliance Settings** tab in the left-hand menu and click on it. 

![Compailance Settings](/images/managing-submissions/entries/automatically-delete-form-entries/Compailance-settings-02-scaled.webp)

### Delete Entries Right After Submission

This option is perfect for when you need the form to act (like sending an [email notification](/how-to-setup-adminuser-email-notifications) or a [CRM integration](/integrations-overview)) but don't need to store the entry data in WordPress.

In the **Compliance Settings**, check the box next to **Delete entry data after form submission**.

> [!Warning]
> When enabled, entries are deleted immediately after submission. Fluent Forms will not store entry data, analytics, or [visual reports](/visual-representation-of-form-entries-in-fluent-forms) for this form.

After that, click the **Save Settings** button to apply the change.

![Delete Entry Data After Submission](/images/managing-submissions/entries/automatically-delete-form-entries/delete-entry-data-after-form-submission-03-scaled.webp)

### Delete Old Entries After a Specific Time

Use this feature to keep your database tidy by automatically removing entries after they are no longer needed.

In the **Compliance Settings**, check the box next to **Enable auto delete old entries**. Once enabled, a new field will appear. Here, you must **specify how many days** old an entry should be before it is automatically deleted. You can type a number directly or use the **+** and **–** buttons to adjust the count.

**Example**: If you set the number to **10**, any submission that is older than **10** days will be automatically deleted by the system.

After that, click the **Save Settings** button to activate your new auto-deletion rule.

![Enable Auto Delete Old Entries Automatically Delete Form Entries](/images/managing-submissions/entries/automatically-delete-form-entries/enable-auto-delete-old-entries-04-scaled.webp)

And that's it! You've successfully set up your form to automatically manage its entries. You can change these settings anytime by simply unchecking the box and saving the form.
