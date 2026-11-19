---
description: "FluentCRM is a self-hosted Email Marketing Automation Plugin for WordPress. Manage your leads and customers, email campaigns, automated email sequencing…"
---

# Connecting Forms from One Domain with Fluent CRM to Another

[FluentCRM](https://fluentcrm.com/) is a self-hosted email marketing automation plugin for WordPress. It manages your leads, customers, email campaigns, and automated email sequences.

FluentCRM's WebHooks feature transfers leads collected through Fluent Forms on one domain to FluentCRM on another. If both plugins run on the same site, use the [FluentCRM integration](/fluentcrm-integration) instead.

This article shows you how to send Fluent Forms leads from one domain to FluentCRM on another domain.

## Create a WebHook in FluentCRM

Use FluentCRM's **WebHooks** feature to collect user information from one domain on another.

1. Open the FluentCRM dashboard on the domain where **FluentCRM** is installed.
2. Go to **Settings** and click **Incoming WebHooks**.
3. Click **Create Webhook**.

![Webhook Settings FluentCRM](/images/account-license/connecting-forms-with-fluent-crm-across-domains/Webhook-Settings-FluentCRM-01-scaled.webp)

A popup opens. Fill in these fields:

- **Name:** Enter a descriptive name for the WebHook.
- **List:** Select a subscriber list where Fluent Forms adds the leads.
- **Tags:** Assign tags to categorize these leads.
- **Status:** Set the WebHook status to Active.

Click **Create** to generate the **WebHook**.

![Create Webhook](/images/account-license/connecting-forms-with-fluent-crm-across-domains/create-weebhook-02-scaled.webp)

Copy the **WebHook URL**. You use it to link Fluent Forms to FluentCRM.

![Create Webhook](/images/account-license/connecting-forms-with-fluent-crm-across-domains/create-weebhook-03-scaled.webp)

## Set Up Fluent Forms on the Source Domain

Open the Fluent Forms dashboard on the domain where the forms live. [Create a new form](/create-a-form) or use an existing one with fields like **Name** and **Email**.

![Connecting Fluent Forms from one domain with Fluent CRM to another domain step](/images/account-license/connecting-forms-with-fluent-crm-across-domains/Form-04-scaled.webp)

Go to **Integrations** in the Fluent Forms top menu, find **Webhook**, and turn on the **Toggle** to enable the [Webhook integration module](/integrate-webhook).

![Enable Webhook Module Connecting Fluent Forms from](/images/account-license/connecting-forms-with-fluent-crm-across-domains/enable-webhook-module-05-scaled.webp)

Go back to your form. Open the form's **Configuration** tab and go to **Integrations & Add-ons**. Select **Webhook**, then click the add button to set up a new **Webhook** feed.

![Add Webhook Connecting Fluent Forms from](/images/account-license/connecting-forms-with-fluent-crm-across-domains/add-webhook-06-scaled.webp)

A new window opens. Fill in these details:

**A. Name**: Enter a unique name for the integration setup.

**B. Request URL**: Paste the WebHook URL you copied from FluentCRM.

**C. Request Method**: Set to **POST** from the dropdown.

**D. Request Format**: Select **JSON** from the dropdown.

**E. Request Headers**: Leave as **No Headers** (default).

**F. Request Body:** Choose **Selected Fields** in the Request Body section.

Map the form fields (Name, Email) to the matching WebHook keys. Copy the key values from FluentCRM and paste them into the Value field.

**G. Conditional Logic:** To run the **Webhook** integration only for certain submission values, turn on **Enable Conditional Logic**. To learn more, read the [conditional logic guide](/set-up-forms-with-conditional-logic).

Click **Save Feed** to save the setup.

![Webhook Settings](/images/account-license/connecting-forms-with-fluent-crm-across-domains/WebHook-Settings-07-scaled.webp)

> [!Note]
> Make sure the second domain does not have FluentCRM installed.

Enter test data in the form on the source domain and **submit** it.

![Connecting Fluent Forms from one domain with Fluent CRM to another domain step](/images/account-license/connecting-forms-with-fluent-crm-across-domains/08.webp)

Then open FluentCRM on the destination domain and refresh the **Contacts** page. The submitted data appears in the contacts list.

![Connecting Fluent Forms from one domain with Fluent CRM to another domain step](/images/account-license/connecting-forms-with-fluent-crm-across-domains/09-scaled.webp)

You can create as many WebHooks as you need. This lets you collect leads from multiple domains into one central FluentCRM database.
