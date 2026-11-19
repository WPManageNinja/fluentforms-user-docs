---
description: "Integrating OnePageCRM with Fluent Forms helps automate your business growth by managing leads and customer actions smoothly."
---

# OnePageCRM Integration

The OnePageCRM integration sends your form submissions to OnePageCRM so you can manage leads and customer actions in one place. This guide shows you how to connect OnePageCRM with Fluent Forms on your WordPress site.

> [!Note]
> **OnePageCRM** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the OnePageCRM Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **OnePageCRM**, and find the **OnePageCRM integration module**.

Turn on the **Toggle** to enable the **OnePageCRM** module, then click **Manage** on the right side.

![Enable OnePageCRM](/images/integrations/crm/onepagecrm-integration/enable-onepagecrm-01-scaled.webp)

Once you enable OnePageCRM, Fluent Forms asks for the **OnePageCrm User ID** and **OnePageCrm Api Key** of your **OnePageCrm Account**.

> [!Note]
> If you do not have a OnePageCRM account, [create one here](https://www.onepagecrm.com/).

![Global Settings](/images/integrations/crm/onepagecrm-integration/Global-Settings-02-scaled.webp)

## Get the OnePageCrm Credentials

1. Log in to your [OnePageCrm Account](https://app.onepagecrm.com/app/api).
2. Click **Profile** in the top right corner and select **Apps and Integrations**.

![Apps And Integration](/images/integrations/crm/onepagecrm-integration/apps-and-integration-03-scaled.webp)

3. Scroll down and select **API**.

![API Fluent Forms](/images/integrations/crm/onepagecrm-integration/Api-04-scaled.webp)

4. Copy the **User ID** and **API Key** from the Configuration section.

![User ID And API Key](/images/integrations/crm/onepagecrm-integration/user-id-and-api-key-05-1-scaled.webp)

## Connect OnePageCRM with Fluent Forms

1. Return to the **OnePageCRM Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **User ID** and **API Key** you copied.
3. Click **Save** to activate the **OnePageCRM Integration** module.

![Paste User ID And API Key](/images/integrations/crm/onepagecrm-integration/paste-user-id-and-api-key-06-scaled.webp)

Fluent Forms now shows that your **OnePageCRM API integration is up and running**. Click **Disconnect OnePageCrm** to disconnect it.

![Disconnect OnePageCRM](/images/integrations/crm/onepagecrm-integration/disconnect-onepagecrm-07-1-scaled.webp)

### Integrate OnePageCRM into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to OnePageCRM, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Setting OnePageCRM Integration](/images/integrations/crm/onepagecrm-integration/Form-Setting-08-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **OnePageCRM Integration** feed from the drawer.

![Add Ne Integration OnePageCRM Integration](/images/integrations/crm/onepagecrm-integration/add-ne-integration-09-scaled.webp)

## Configure OnePageCRM Integration Feed

- **Feed Name:** Enter a name for your OnePageCRM integration feed.
- **OnePageCRM Services:** Select the service you want to map to: **Contact**, **Deal**, **Predefined Item**, **Note**, or **Action**. For example, select **Contact**, then map the fields with OnePageCRM. Click the **Dropdown Arrow** to add mapping values.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Add OnePageCRM Integration Feed](/images/integrations/crm/onepagecrm-integration/Add-New-OnePageCrm-Integration-Feed-10-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Toggle Integration](/images/integrations/crm/onepagecrm-integration/toggle-integration-11-scaled.webp)

### Preview of Integrated OnepageCRM

You can see the form submissions that add OnePageCrm contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries OnePageCRM](/images/integrations/crm/onepagecrm-integration/Entries-of-onepagecrm-12-scaled.webp)

To see the contacts added from Fluent Forms, open **OnePageCrm Contacts** in the left sidebar.

![Contacts OnePageCRM](/images/integrations/crm/onepagecrm-integration/Contacts-of-Onepagecrm-13-scaled.webp)
