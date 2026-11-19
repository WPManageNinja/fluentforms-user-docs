---
description: "Create a user-friendly registration form with Fluent Forms to make the WordPress user registration process as simple as possible."
---

# Create a WordPress User Registration Form

A registration form with Fluent Forms lets people enter their information and create a WordPress user account through the form.

This guide shows you how to create a **User Registration Form** on your WordPress site, add the registration feed, and check the entries.

> [!Note]
> **User Registration** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

> [!Note]
> To test **user registration**, submit the form while **logged out** or in an **incognito/private** browser window.

## Enable the User Registration Module

Click **Integrations** in the Fluent Forms top bar and open the **WP Core Modules** tab. Find the **User Registration or Update** module and turn on its **Toggle** to enable it.

![Enable registration](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/User-Registration-01-scaled.webp)

## Create a Registration Form

After you enable the module, create a registration form. Go to **Fluent Forms → Forms** and click **Add Form**.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form). You can also start from a template with [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

We recommend adding these fields to the form:

 * **Email**: Required for user registration.
 * **Name**: Optional but recommended.
 * **Password**: Optional. If you do not map a password, WordPress generates one.

You can add more fields as needed. Only **Email** is required.

![Registration fields](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/registration-form-02-scaled.webp)

## Add the User Registration Feed

Click **Configuration** in the top bar of the form. Open **Integrations & Add-ons** from the left menu.

Click **Add New Integration** and select **User Registration or Update Integration** from the list on the right.

![Registration settings](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/Configure-the-user-registration-03-scaled.webp)

### Configure the User Registration Feed

The feed settings page opens. Set up the **Name**, **Password**, and **Email Address** fields and the other options:

* **Name:** Enter a name for the registration feed.
* **Service:** Select the type of service for the feed, **User Registration** or **User Update**.
* **Map Fields:** Link your **user registration or user update fields** to the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each form field.
* **Default User Role:** Select the user role assigned at registration.
* **User Meta:** Add custom user meta fields. In the first column, type the **meta key**. In the second column, select the corresponding **form field value**. Click the **Plus Icon** to add more meta keys.
* **Auto Login:** Enable **Allow the user to log in automatically after registration** to log users in right after they submit the form.
* **Email Notification:** Enable **Send default WordPress welcome email to user after registration** to send the default WordPress welcome email.
* **Form Validation:** Enable this option to prevent duplicate registrations. It checks whether the user already exists in the database.
* **Conditional Logics:** Run the User Registration feed only when your submission values match your conditional logic. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
* **Status:** Enable this option to activate the integration.

> [!Note]
> The **User Meta** key must match the form field’s **name attribute**.

Click **Save**. The feed is now part of this form, and users can register and update in a single form.

![Registration feed](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/Add-New-User-Registration-Integration-Feed-Fluent-Forms-02-26-2025_05_17_PM-scaled.webp)

Your **User Registration** or **Update Feed** now appears in the list.

Click the **Pencil Icon** to edit the feed, the **Copy Icon** to duplicate it, or the **Trash Icon** to delete it. Use the **Toggle** to disable or enable the feed.

![Registration enabled](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/user-registration-enabled-07-scaled.webp)

## Check the Entries

Open the **Entries** section of this form to see the contacts added through the **User Registration** form.

![Registration preview](/images/creating-forms/specialized-form-types/create-a-wordpress-user-registration-form/demo-08-scaled.webp)

Your form now registers and updates users.
