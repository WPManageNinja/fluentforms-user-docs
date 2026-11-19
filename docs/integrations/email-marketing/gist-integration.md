---
description: "Fluent Forms integrates with GetGist, an email marketing tool that helps you collect customer leads."
---

# Gist Integration

**GetGist** is an email marketing tool that helps you collect customer leads. This guide shows you how to connect **GetGist** with **Fluent Forms** on your **WordPress site**. For a step-by-step guide with a video walkthrough, see the [Gist integration guide](/integrate-gist).

> [!Note]
> **GetGist** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the GetGist Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **GetGist**, and install the **GetGist integration module**.

Turn on the **Toggle** to enable the **GetGist** module, then click **Manage** on the right.

![Enable Getgist Integration](/images/integrations/email-marketing/gist-integration/Enable-GetGist-Integration-01-scaled.webp)

Once you enable GetGist, Fluent Forms asks for the **GetGist API Key** of your **GetGist Account**.

![Configuration Getgist](/images/integrations/email-marketing/gist-integration/Configuration-GetGist-02-scaled.webp)

### Get the GetGist API Key

1. Log in to your [GetGist Account](https://app.getgist.com/login).
2. Click **Settings** in the top menu.
3. Select the API Key under **API & webhooks** in the left sidebar.
4. **Copy** your **GetGist API Key**.

![API Key](/images/integrations/email-marketing/gist-integration/API-Key-03-scaled.webp)

### Connect GetGist with Fluent Forms

1. Return to the **GetGist Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. **Paste** the GetGist **API Key** you copied.
3. Click **Save** to activate the **GetGist Integration** module.

![Paste API Key](/images/integrations/email-marketing/gist-integration/Paste-API-Key-04-scaled.webp)

Fluent Forms now shows that your **GetGist API integration is up and running**. Click **Disconnect GetGist** to disconnect it.

![Disonnect Getgist](/images/integrations/email-marketing/gist-integration/Disonnect-GetGist-05-scaled.webp)

### Integrate GetGist into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to GetGist, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Gist Integration](/images/integrations/email-marketing/gist-integration/form-settings-06-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **GetGist Integration** feed from the drawer.

![Settings Integration Gist Integration](/images/integrations/email-marketing/gist-integration/settings-Integration-07-scaled.webp)

### Configure GetGist Integration Feed

- **Feed Name:** Enter a name for your GetGist integration feed.
- **Map Fields:** Link your **GetGist Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.
- **Lead Tags:** Add tags to your GetGist contacts with a comma-separated list (e.g. new lead, crucial users, web source). You can also use shortcodes as the tag.
- **Landing URL:** Enable this option to send the page URL where the form was submitted to the Gist lead.
- **Push IP Address:** Enable this option to send the submitter's last seen IP address to the Gist lead.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See the [article](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Add Gegist Integration Feed](/images/integrations/email-marketing/gist-integration/Add-new-gegist-integration-feed-08-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![All Integration](/images/integrations/email-marketing/gist-integration/All-form-Integration-09-scaled.webp)

### Preview of Integrated GetGist

You can see the form submissions that add GetGist contacts in the **Entries** section of the form.

![Entries](/images/integrations/email-marketing/gist-integration/Entries-10-scaled-2.webp)

To see the contacts added from Fluent Forms, open **GetGist Contacts** in the top menu.

![All Contact](/images/integrations/email-marketing/gist-integration/all-contact-11-scaled.webp)
