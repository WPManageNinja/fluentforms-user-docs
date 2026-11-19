---
description: "Integrating Mailster with Fluent Forms allows you to automate email subscriptions, manage mailing lists, and streamline newsletter campaigns efficiently."
---

# Integrate Mailster

The **Mailster** integration lets you automate email subscriptions, manage mailing lists, and streamline newsletter campaigns from **Fluent Forms**. This guide shows you how to connect **Mailster** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Mailster** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Mailster Integration

> [!Note]
> Install and activate the **Mailster** plugin on your WordPress site before you continue.

1. In the **WordPress Left Sidebar**, go to **Plugins** and click **Add New Plugin**.
2. Search for **Mailster**, then click **Install** and **Activate**.

![Install Mailster Fluent Forms](/images/integrations/email-marketing/integrate-mailster/1.-Install-Mailster-scaled.webp)

3. Go to **Integrations** in the **Fluent Forms Navbar**, search for **Mailster**, and turn on the **Toggle**.

![Enable Mailster Integration Integrate Mailster](/images/integrations/email-marketing/integrate-mailster/2.-Enable-Mailster-Integration-scaled.webp)

## Integrate Mailster in Forms

After you enable the Mailster module, you can connect it to any form. Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Mailster**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Mailster](/images/integrations/email-marketing/integrate-mailster/3.-Open-desired-form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Mailster Integration** feed from the drawer.

![Add Integration Dropdown Integrate Mailster](/images/integrations/email-marketing/integrate-mailster/4.-Add-new-integration-dropdown-scaled.webp)

The feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Mailster Lists:** Use the Arrow Icon to select the Mailster subscriber list that receives your contacts from Fluent Forms submissions. You can change it at any time.
3. **First Name, Last Name, and Email:** Link your Mailster contact fields with the form's fields. Use the Shortcode Arrow to select the value for each field.
4. **Select Status:** Select the status for your Mailster contacts. You can also use shortcodes as the status.
5. **Enter Referer Name:** Enter the referrer name for the contacts. You can also use shortcodes to send dynamic data to Mailster.
6. **Custom Fields:** Link Fluent Forms fields with their Mailster custom fields. Click the Plus/Minus Icon in the right corner to add or delete custom fields.
7. **Conditional Logics:** Run the Mailster integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
8. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Mailster is now connected to this form.

![Save Feed Integrate Mailster](/images/integrations/email-marketing/integrate-mailster/5.-Save-Feed-scaled.webp)

The **Mailster Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Mailster Integration Feed](/images/integrations/email-marketing/integrate-mailster/6.-Added-Mailster-Integration-Feed-scaled.webp)

### Preview of Integrated Mailster

You can see the **Form Submissions** that add **Mailster** contacts in the **Entries** tab of the form. In this example, the form has four new submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-mailster/7.-Form-Entries-scaled.webp)

Next, open your [Mailster](https://mailster.co) account. Go to **Lists** in the **WordPress Left Sidebar** or the **Mailster Navbar**, and click **Subscribers** for the list you connected to Fluent Forms.

![Mailster List Preview](/images/integrations/email-marketing/integrate-mailster/8.-Mailster-List-Preview-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear as subscribers in the selected **Mailster** list.

![Subscriber Preview Fluent Forms](/images/integrations/email-marketing/integrate-mailster/9.-Subscriber-preview-scaled.webp)
