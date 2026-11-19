---
description: "Fluent Forms integrates with Drip, a robust e-commerce CRM (ECRM) designed for personalized customer engagement."
---

# Drip Integration

Drip is an e-commerce CRM (ECRM) designed for personalized customer engagement. With the Drip integration, Fluent Forms adds the customer information from form submissions to your Drip list automatically. This guide shows you how to connect **Drip** with **Fluent Forms** on your WordPress site.

> [!Note]
> **Drip** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Drip Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **Drip**, and find the **Drip integration module**.

Turn on the **Toggle** to enable the **Drip** module, then click **Manage** on the right.

![Enable Drip Integration](/images/integrations/crm/drip-integration/enable-drip-integration-01-scaled.webp)

Once you enable **Drip**, Fluent Forms asks for the **Drip API Token** and **Drip Account ID** of your **Drip Account**.

![Drip Integration](/images/integrations/crm/drip-integration/Drip-integration-02-scaled.webp)

## Get the Drip Credentials

1. Log in to your [Drip account](https://www.drip.com/).
2. Click **Setting** in the bottom left corner and click **User settings**.

![User Settings](/images/integrations/crm/drip-integration/user-settings-03-scaled.webp)

3. Find the API token on the User Info page and **Copy** the **API Token**.

![API Token](/images/integrations/crm/drip-integration/api-token-900.webp)

4. Go **Back to the Dashboard** and click **Accounts** in the **Settings** section.

![Account Settings](/images/integrations/crm/drip-integration/account-settings-04-2-scaled.webp)

5. Scroll down to find the **Account ID** and **Copy** it.

![Account ID X515](/images/integrations/crm/drip-integration/account-ID-05-2-1024x515.webp)

## Connect Drip with Fluent Forms

1. Return to the **Drip Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Drip API Token** and **Drip Account ID** you copied.
3. Click **Save** to activate the **Drip Integration** module.

![Paste API And ID](/images/integrations/crm/drip-integration/paste-api-and-id-06-scaled.webp)

Fluent Forms now shows that your **Drip API integration is up and running**. Click **Disconnect Drip** to disconnect it.

![Drip Success](/images/integrations/crm/drip-integration/drip-success-06-1-scaled.webp)

### Integrate Drip into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to Drip, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Setting Drip Integration](/images/integrations/crm/drip-integration/form-setting-07-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Drip Integration** feed from the drawer.

![Drip Integration](/images/integrations/crm/drip-integration/drip-inttegration-02.webp)

### Configure Drip Integration Feed

- **Feed Name:** Enter a name for your Drip integration feed.
- **Map Fields:** Link your **Drip Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.
- **Other Fields:** Map extra preset **Drip fields** (such as address, city, state, ZIP code, country, and phone) with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field. Click the **Plus Icon** to add more fields.
- **Custom Fields:** Enter your own Drip custom field label and select the form field that supplies its value.
- **Contact Tags:** Enter the custom tags for the Drip contact list (e.g., new lead, FluentForms, web source). Commas within a merge tag value create a single tag. You can add tags manually or dynamically with form field values.
- **Remove Tags:** Choose the tags to remove from contacts during the sync.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **EU Consent:** The Default option does not grant GDPR consent. The Granted option grants GDPR consent. To collect consent directly on the form, add a [GDPR agreement field](/gdpr-agreement-field).
- **Status:** Enable this option to activate the feed.

Click **Save** when the setup is done. Drip is now connected to this form.

![Add Configuration Drip Integration](/images/integrations/crm/drip-integration/add-new-configuration-08-1.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Done Integration Fields](/images/integrations/crm/drip-integration/Done-integration-fields-09-scaled.webp)

### Preview of Integrated Drip

You can see the form submissions that add Drip contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/drip-integration/Entries-10-scaled.webp)

In Drip, open **People** in the left sidebar and click **Active** to view the contacts on the list you connected to Fluent Forms.

![Drip Active](/images/integrations/crm/drip-integration/Drip-active-11-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Drip Contact List**.

![Contact List Drip](/images/integrations/crm/drip-integration/Contact-list-of-drip-12-scaled.webp)
