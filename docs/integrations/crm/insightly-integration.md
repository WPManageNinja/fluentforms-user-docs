---
description: "Fluent Forms integrates with Insightly, a CRM that helps you collect customer leads, manage tasks, and automate sales team workflows that helps businesses…"
---

# Insightly Integration

Insightly is a CRM that helps you collect customer leads, manage tasks, and automate sales team workflows. With the Insightly integration, Fluent Forms adds personalized customer information from form submissions to your Insightly account automatically. This guide shows you how to connect **Insightly** with **Fluent Forms** on your WordPress site.

> [!Note]
> **Insightly** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Insightly Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **Insightly**, and install the **Insightly integration module**.

Turn on the **Toggle** to enable the **Insightly** module, then click **Manage** on the right.

![Enable Integration Insightly Integration](/images/integrations/crm/insightly-integration/Enable-the-integration-01.webp)

Once you enable **Insightly**, Fluent Forms asks for the **Insightly API URL** and **Insightly API Key** of your **Insightly Account**.

![Configuration Insightly](/images/integrations/crm/insightly-integration/Configuratrioin-insighjtly-02.webp)

## Get the Insightly API URL and API Key

1. Log in to your [Insightly Account](https://crm.na1.insightly.com/users/usersettings).
2. Click the profile icon in the top right corner and go to **User** **Settings**.
3. Scroll down to find the **API URL** and **API Key**. To create a new key, click **Generate new API Key**.

![User Settings](/images/integrations/crm/insightly-integration/User-Settings-03-scaled.webp)

Copy the **API Key** and **API URL** **( https://api.na1.insightly.com/ )** for the next step.

![Copy API Keyapi URL](/images/integrations/crm/insightly-integration/Copy-API-keyAPI-URl-04.webp)

## Connect Insightly with Fluent Forms

1. Return to the **Insightly Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API URL** and **API Key** you copied.
3. Click **Save** to activate the **Insightly Integration** module.

![Paste API URL API Key](/images/integrations/crm/insightly-integration/Paste-API-URL-API-Key-05.webp)

Fluent Forms now shows that your **Insightly API integration is up and running**. Click **Disconnect Insightly** to disconnect it.

![Disconnect Insightly](/images/integrations/crm/insightly-integration/Disconnect-Insightly-06.webp)

### Integrate Insightly into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to Insightly, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Edit Insightly Integration](/images/integrations/crm/insightly-integration/Edit-Form-07-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Insightly Integration** feed from the drawer.

![Add Integration Insightly Integration](/images/integrations/crm/insightly-integration/Add-new-Integration-08-scaled.webp)

## Configure Insightly Integration Feed

- **Feed Name:** Enter a name for your Insightly integration feed.
- **Insightly Services:** Select the **Insightly** service you want to map to: **Contact**, **Opportunity**, **Lead**, **Organisations**, **Project**, **Task**, etc. Click the **Dropdown Arrow** to add mapping values.

![Add Integration Feed Insightly Integration](/images/integrations/crm/insightly-integration/Add-New-Integration-Feed-09-scaled.webp)

Link your **Insightly Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.

- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Add Insightly Integration Feed](/images/integrations/crm/insightly-integration/Add-New-Insightly-Integration-Feed-10-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![All Integration](/images/integrations/crm/insightly-integration/All-Form-Integration-11-scaled.webp)

### Preview of Integrated Insightly

You can see the form submissions that add Insightly contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/insightly-integration/Entries-12-scaled.webp)

To see the contacts added from Fluent Forms, open **Insightly Contacts** in the left sidebar.

![Insightly Contact](/images/integrations/crm/insightly-integration/Insightly-Contact-12-scaled.webp)
