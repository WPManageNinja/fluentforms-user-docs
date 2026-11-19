---
description: "Fluent Forms integrates with Salesflare, an email marketing automation tool that helps you collect leads or B2B leads, grow your small business, and…"
---

# Salesflare Integration

Salesflare is a CRM for small B2B teams. With the Salesflare integration, Fluent Forms adds the leads from your form submissions to Salesflare automatically. This guide shows you how to connect Salesflare with Fluent Forms on your WordPress site.

> [!Note]
> **Salesflare** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Salesflare Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **Salesflare**, and find the **Salesflare integration module**.

Turn on the **Toggle** to enable the **Salesflare** module, then click **Manage** on the right side.

![Enable Salesflare Integration](/images/integrations/crm/salesflare-integration/enable-salesflare-integration-01-scaled.webp)

Once you enable Salesflare, Fluent Forms asks for the **Salesflare API Key** of your **Salesflare Account**.

> [!Note]
> If you do not have a Salesflare account, [create one here](https://salesflare.com/).

![Configuration Salesflare](/images/integrations/crm/salesflare-integration/Configuration-salesflare-02-scaled.webp)

### Get the Salesflare API Key

1. Log in to your [Salesflare Account](https://salesflare.com/).
2. Go to **Settings** and click **API Key**.
3. Click the **Plus Icon** to create an API key.

![Create API Key](/images/integrations/crm/salesflare-integration/create-api-key-03-scaled.webp)

4. In the popup, enter the **API Name** and click **Create**.
5. **Copy** the API key.

![Create API Key](/images/integrations/crm/salesflare-integration/create-api-key-04-1-scaled.webp)

### Connect Salesflare with Fluent Forms

1. Return to the **Salesflare Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Salesflare API Key** you copied.
3. Click **Save** to activate the **Salesflare Integration** module.

![Enter Salesflare API Key](/images/integrations/crm/salesflare-integration/enter-salesflare-api-key-05-01-09-2025_03_42_PM-scaled.webp)

Fluent Forms now shows that your **Salesflare API integration is up and running**. Click **Disconnect Salesflare** to disconnect it.

![Disconnect Salesflare](/images/integrations/crm/salesflare-integration/disconnect-salesflare-06-scaled.webp)

## Integrate Salesflare into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to Salesflare, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Setting amoCRM Salesflare Integration](/images/integrations/crm/salesflare-integration/Form-Setting-amoCRM-1-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Salesflare Integration** feed from the drawer.

![Add Integration Salesflare Integration](/images/integrations/crm/salesflare-integration/add-new-integration-07-scaled.webp)

## Configure Salesflare Integration Feed

- **Feed Name:** Enter a name for your Salesflare integration feed.
- **Map Fields:** Link your **Salesflare fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.
- **Custom Fields:** Add custom **Salesflare fields** and link them to **Form Fields** with the **Shortcode Arrow**. Click the **Plus Icon** to add more fields.
- **Tag:** Add tags to your **Salesflare** contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use **shortcodes** as the tag.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** when the setup is done. Salesflare is now connected to this form.

![Add Salesflare Integration Feed](/images/integrations/crm/salesflare-integration/Add-New-Salesflare-Integration-Feed-08-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Disable Or Enable Salesflare Integration](/images/integrations/crm/salesflare-integration/Disable-or-enable-salesflare-integration-09-scaled.webp)

### Preview of Integrated Salesflare

You can see the form submissions that add Salesflare contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/salesflare-integration/Forms-Entries-10-scaled.webp)

To see the contacts added from Fluent Forms, open **Salesflare Contacts** in the left sidebar.

![Salesflare Contacts](/images/integrations/crm/salesflare-integration/salesflare-contacts-11-scaled.webp)
