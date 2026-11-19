---
description: "Pipedrive is a deal-driven CRM solution designed to manage the entire sales process effectively."
---

# Pipedrive Integration

Pipedrive is a deal-driven CRM that manages your sales process. With the Pipedrive integration, Fluent Forms sends form submissions to your Pipedrive account automatically, which streamlines lead management. This guide shows you how to connect Pipedrive with Fluent Forms on your WordPress site.

> [!Note]
> **Pipedrive** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Pipedrive Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **Pipedrive**, and find the **Pipedrive integration module**.

Turn on the **Toggle** to enable the **Pipedrive** module, then click **Manage** on the right side.

![Pipedrive Integration](/images/integrations/crm/pipedrive-integration/Pipedrive-integration-01-scaled.webp)

Once you enable Pipedrive, Fluent Forms asks for the **Pipedrive API Token** of your **Pipedrive Account**.

> [!Note]
> If you do not have a Pipedrive account, [create one here](https://www.pipedrive.com/).

![Configure Pipedrive](/images/integrations/crm/pipedrive-integration/Configure-pipedrive-02-scaled.webp)

### Get the Pipedrive API Token

1. Log in to your [Pipedrive Account](https://www.pipedrive.com/en/register).
2. Click **Profile** in the top right corner and select **Company Settings**.
3. Click **Personal preferences** and select **API**.
4. **Copy** the **API Token**.

![API Token](/images/integrations/crm/pipedrive-integration/API-Token-03-scaled.webp)

### Connect Pipedrive with Fluent Forms

1. Return to the **Pipedrive Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Token** you copied.
3. Click **Verify Pipedrive API Token** to activate the **Pipedrive Integration** module.

![Paste Pipedrive API Token](/images/integrations/crm/pipedrive-integration/paste-pipedrive-api-token-04-scaled.webp)

Fluent Forms now shows that your **Pipedrive API integration is up and running**. Click **Disconnect Pipedrive** to disconnect it.

![Disconnect Pipedrive](/images/integrations/crm/pipedrive-integration/Disconnect-pipedrive-05-scaled.webp)

## Integrate Pipedrive into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to Pipedrive, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Pipedrive Integration](/images/integrations/crm/pipedrive-integration/Settings-06-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Pipedrive Integration** feed from the drawer.

![Add Integration Pipedrive Integration](/images/integrations/crm/pipedrive-integration/add-new-integration-07-1-scaled.webp)

## Configure Pipedrive Integration Feed

- **Feed Name:** Enter a name for your Pipedrive integration feed.
- **Services:** Select the **Pipedrive** service you want to map to: **Person**, **Leads**, **Organization**, **Deal**, **Activity**, etc. Click the **Dropdown Arrow** to add mapping values.

When you map a **Person**, you can also set **Email**, **Phone**, and **Marketing Status** (**No consent**, **Unsubscribed**, **Subscribed**, or **Archived**). **Email** is required when the marketing status is anything other than **No consent**. Pipedrive uses **No consent** if you leave the status empty.

Link your **Pipedrive Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.

![Add Integration Feed Pipedrive Integration](/images/integrations/crm/pipedrive-integration/add-new-integration-feed-08-scaled.webp)

- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Add Integration Feed Pipedrive Integration](/images/integrations/crm/pipedrive-integration/add-new-integration-feed-09-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Enable Or Disable Integration Pipedrive Integration](/images/integrations/crm/pipedrive-integration/Enable-or-disable-integration-10-scaled.webp)

### Preview of Integrated Pipedrive

You can see the form submissions that add Pipedrive contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Preview Entries Pipedrive Integration](/images/integrations/crm/pipedrive-integration/preview-entries-11-scaled.webp)
