---
description: "FluentCRM is a self-hosted Email Marketing Automation Plugin for WordPress. Manage your leads and customers, email campaigns, automated email sequencing…"
---

# Connecting Forms from One Domain with Fluent CRM to Another

[FluentCRM](https://fluentcrm.com/) is a self-hosted Email Marketing Automation Plugin for WordPress. Manage your leads and customers, email campaigns, automated email sequencing, monitor user activities, and many more in one place!

FluentCRM's **Incoming Webhooks** feature allows you to transfer leads collected through Fluent Forms on one domain to FluentCRM on another. If both plugins live on the same site, you can use the [FluentCRM integration](/fluentcrm-integration) instead.

This article will show you how to collect leads of Fluent Forms from one domain with FluentCRM to another domain.

## Create a WebHook in FluentCRM

To collect leads from one domain into another, use FluentCRM's **Incoming Webhooks** feature. Start on the domain where **FluentCRM** is installed.

Go to the FluentCRM dashboard. Click the **Settings** (gear) icon in the top navigation bar, then select **Incoming Webhooks** from the left sidebar. Click **Create Webhook** to add a new one.

![Incoming Webhooks page with the Settings icon and Create Webhook button highlighted](/images/account-license/connecting-forms-with-fluent-crm-across-domains/Webhook-Settings-FluentCRM-01-scaled.webp)

The **Create New Incoming Webhook** panel opens. Fill in the following fields:

- **Webhook Type:** Keep **Contact Creation Webhook** to add new contacts.

- **Name:** Enter a descriptive name for the webhook.

- **Default List:** Select the lists where the leads will be added.

- **Default Tags:** Select the tags to apply to these leads.

- **Status:** Select the contact status, such as **Subscribed**.

Click **Create Webhook** to generate the webhook.

![Create New Incoming Webhook panel](/images/account-license/connecting-forms-with-fluent-crm-across-domains/create-weebhook-02-scaled.webp)

After creation, the webhook appears in the list with its **Smart URL**. Click the copy icon to copy it. You will paste this URL into Fluent Forms.

![Smart URL copy icon in the Incoming Webhooks list](/images/account-license/connecting-forms-with-fluent-crm-across-domains/create-weebhook-03-scaled.webp)

## Set Up Fluent Forms on the Source Domain

Now, go to the Fluent Forms dashboard on the domain where the forms are installed. [Create a new form](/create-a-form) or use an existing one with **Name** and **Email** fields.

![Form with First Name, Last Name, and Email fields](/images/account-license/connecting-forms-with-fluent-crm-across-domains/Form-04-scaled.webp)

Next, go to **Integrations** from the Fluent Forms navigation bar and search for **webhook**. Turn on the **Webhooks** toggle to enable the [Webhook integration module](/integrate-webhook) (Pro).

![Webhooks module toggle on the Integrations page](/images/account-license/connecting-forms-with-fluent-crm-across-domains/enable-webhook-module-05-scaled.webp)

Now, go back to the form. Click the **Configuration** tab, then select **Integrations** under **Integrations & Add-ons**. Click **Add New Integration**.

![Integrations page with the Add New Integration button highlighted](/images/account-license/connecting-forms-with-fluent-crm-across-domains/add-new-integration-06-a.webp)

Search for **webhook** and select **WebHook** from the list.

![Add an integration panel with WebHook highlighted](/images/account-license/connecting-forms-with-fluent-crm-across-domains/add-webhook-06-scaled.webp)

The feed settings page opens. Fill in the details:

**A. Name:** Enter a unique name for the feed.

**B. Request URL:** Paste the **Smart URL** you copied from FluentCRM.

**C. Request Method:** Select **POST** from the dropdown.

**D. Request Format:** Select **JSON** from the dropdown.

**E. Request Header:** Keep **No Headers** (default).

**F. Request Body:** Select **Selected Fields**. Then add the fields FluentCRM needs:

- In **Field Name**, enter the FluentCRM key, such as `email`, `first_name`, or `last_name`.
- In **Field Value**, select the matching form field, such as **Email**, **names[First Name]**, or **names[Last Name]**.
- Click the **+** button to add another row.

**G. Conditional Logics:** To send the data only when the submission meets certain conditions, check **Enable conditional logic**. To learn more, read the [conditional logic guide](/set-up-forms-with-conditional-logic).

After completing all the fields, click **Save** to save the feed.

![Webhook feed settings with the Save button highlighted](/images/account-license/connecting-forms-with-fluent-crm-across-domains/WebHook-Settings-07-scaled.webp)

> [!Note]
> The source domain does not need FluentCRM installed.

Now, enter test data in the form on the source domain and click **Submit Form**.

![Form filled with test data and the Submit Form button highlighted](/images/account-license/connecting-forms-with-fluent-crm-across-domains/08.webp)

After a moment, go to FluentCRM on the destination domain and open the **Contacts** page. The new contact appears in the list with the lists and tags you selected in the webhook.

![New contact in the FluentCRM Contacts list](/images/account-license/connecting-forms-with-fluent-crm-across-domains/09-scaled.webp)

Using **Fluent Forms** and **WebHooks**, you can create as many WebHooks as required and collect leads from multiple domains into a centralized FluentCRM database.
