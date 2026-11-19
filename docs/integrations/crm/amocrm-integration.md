---
description: "amoCRM is a CRM and sales automation tool designed to help you manage customer leads, tasks, and sales teams."
---

# AmoCRM Integration

amoCRM is a CRM and sales automation tool that helps you manage customer leads, tasks, and sales teams. With the amoCRM integration, you collect leads and other key information from form submissions and send them to amoCRM. This guide shows you how to connect **amoCRM** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **amoCRM** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the amoCRM Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **amoCRM**, and find the **amoCRM integration module**.

**Toggle** the **amoCRM** module on, then click **Manage** on the right.

![Enable amoCRM Integration](/images/integrations/crm/amocrm-integration/Enable-amoCRM-integrationj-01-scaled.webp)

Once you enable amoCRM, Fluent Forms asks for the **Account URL**, **Amocrm Integration ID**, and **Amocrm Secret Key** of your **amoCRM Account**. Enter your account URL, for example, mycompany.kommo.com. amoCRM is now part of Kommo, so the login link below opens Kommo.

Copy the **redirect URL** from the top, as shown in the screenshot.

![Configure amoCRM](/images/integrations/crm/amocrm-integration/configure-amocrm-02-scaled.webp)

### Get the amoCRM Integration Credentials

1. Log in to your [amoCRM Account](https://www.kommo.com/).
2. Go to **Settings** in the left sidebar and select **Integrations**.
3. Click **Create Integration** in the top right corner.

![Create Integration](/images/integrations/crm/amocrm-integration/create-Integration-03-scaled.webp)

4. In the popup, paste the **redirect URL** you copied and check **Allow access: All.**
5. Enter an **Integration Name** and a short **description**, then click **Save**.

![Set Redirect URL](/images/integrations/crm/amocrm-integration/set-redirect-url-04.webp)

6. A second popup shows the **Secret Key** and **Integration ID**. **Copy** both for the next step.

![Copy Integration ID And Secret Key](/images/integrations/crm/amocrm-integration/copy-integration-id-and-secret-key-05.webp)

### Connect amoCRM with Fluent Forms

1. Return to the **amoCRM Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Integration ID** and **Secret Key** you copied.
3. Click **Save** to activate the **amoCRM Integration** module.

![Credential Save](/images/integrations/crm/amocrm-integration/credential-save-06-scaled.webp)

Fluent Forms redirects you to the **AmoCRM Account** page. Select the account and click **Allow**.

![amoCRM Account Select](/images/integrations/crm/amocrm-integration/amocrm-account-select-06.webp)

Fluent Forms now shows that your **API integration is up and running**. Click **Disconnect Amocrm** to disconnect it.

![Disconnect amoCRM](/images/integrations/crm/amocrm-integration/disconnect-amocrm-7-scaled.webp)

## Integrate amoCRM into Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to amoCRM, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Setting amoCRM Fluent Forms](/images/integrations/crm/amocrm-integration/Form-Setting-amoCRM-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **amoCRM Integration** feed from the drawer.

![amoCRM Integration](/images/integrations/crm/amocrm-integration/amocrm-integration-08-scaled.webp)

### Configure amoCRM Integration Feed

- **Feed Name:** Enter a name for your amoCRM integration feed.
- **Amocrm Services:** Select the service you want to map: **Lead**, **Company**, **List**, **Task**, **Products**, and more. For example, select **Contact**, then map the fields with amoCRM. Click the **Dropdown Arrow** to add mapping values.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Add amoCRM Integration Feed](/images/integrations/crm/amocrm-integration/Add-New-Amocrm-Integration-Feed-09-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the Trash Icon to delete it. Turn the Toggle off to disable the feed, and on to enable it again.

### Preview of Integrated amoCRM

You can see the form submissions that add amoCRM contacts in the **Entries** section of the form. In this example, the form has four submissions. Learn more about [managing entries in Fluent Forms](/managing-entries).

![amoCRM Preview](/images/integrations/crm/amocrm-integration/amocrm-preview-10-scaled.webp)

To see the contacts added from Fluent Forms, open **amoCRM Contacts** in the left sidebar and go to the **Lists** tab.

![Contact List amoCRM](/images/integrations/crm/amocrm-integration/contact-list-amocrm-11-scaled.webp)
