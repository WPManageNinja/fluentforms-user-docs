---
description: "The user profile editing option for any form is a fantastic feature of Fluent Forms. You can make the WordPress User Update process super easy by creating…"
---

# Create a WordPress User Update Form

With **Fluent Forms**, you can turn any form into a user profile editing form. A **User Update** form lets users change their WordPress profile details from the front end.

This guide shows you how to enable the module, set up the user update feed, and check the results.

> [!Note]
> **User Update** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

> [!Note]
> To test **user profile updates**, submit the form while **logged in** to WordPress. The update feed changes the current user’s account only when a session is active.

## Enable the User Update Module

Click **Integrations** in the Fluent Forms top bar and open the **WP Core Modules** tab. Find the **User Registration or Update** module and turn on its **Toggle** to enable it.

![Enable user update](/images/creating-forms/specialized-form-types/create-a-wordpress-user-update-form/unnamed-1-1.webp)

## Configure the User Update Feed

Before you configure the feed, pick the form you want to use or create a new one.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form). You can also start from a template with [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

With the module enabled, click **Configuration** in the top bar of the form. Open **Integrations & Add-ons** from the left menu.

Click **Add New Integration** and select **User Registration or Update Integration** from the list on the right.

![User update fields](/images/creating-forms/specialized-form-types/create-a-wordpress-user-update-form/2.webp)

## Customize the User Update Feed

The feed settings page opens. Set **Services** to **User Update**, name the feed, and select the **User Update** fields. The options are:

* **Name:** Enter a name for the user update feed.
* **Services:** Select the type of service for the feed. Here, choose **User Update**.
* **Map Fields:** Link your **user update fields** to the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each form field.
* **User Meta:** Add custom user meta fields. In the first column, type the **meta key**. In the second column, select the corresponding **form field value**. Click the **Plus Icon** to add more meta keys.
* **Conditional Logic:** Run the feed only when your conditions match. To learn more, see [Set Up Forms With Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
* **Status:** Enable this option to activate the integration.

> [!Note]
> The **User Meta** key must match the form field’s **name attribute**.

Click **Save**. The user update feed is now part of this form.

> [!Note]
> One form can include both **User Registration** and **User Update** feeds. To set up new account sign-up, see [How to Create a WordPress User Registration Form With Fluent Forms](/create-a-wordpress-user-registration-form).

![User update feed](/images/creating-forms/specialized-form-types/create-a-wordpress-user-update-form/add-new-user-update-03-scaled.webp)

Your User Registration or Update feed now appears in the list.

Click the **Pencil Icon** to edit the feed, the **Copy Icon** to duplicate it, or the **Trash Icon** to delete it. Use the **Toggle** to disable or enable the feed.

![User update settings](/images/creating-forms/specialized-form-types/create-a-wordpress-user-update-form/4.webp)

## Check the Results

Open the **Entries** section of this form to see the updated submissions.

![User update preview](/images/creating-forms/specialized-form-types/create-a-wordpress-user-update-form/5.webp)

