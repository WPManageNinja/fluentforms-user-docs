---
description: "Salesforce is a popular customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service, and IT teams work as one from…"
---

# Salesforce Integration

Salesforce is a customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service, and IT teams work as one from anywhere. This guide shows you how to connect **Salesforce** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Salesforce** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

Salesforce provides API access to these four account editions only:

- Enterprise Edition
- Unlimited Edition
- Developer Edition
- Performance Edition

## Enable the Salesforce Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Salesforce**, and find the **Salesforce integration module**.

Turn on the **Toggle** to enable the **Salesforce** module, then click **Manage** on the right.

![Unnamed](/images/integrations/crm/salesforce-integration/unnamed-1-2-2.webp)

Once you enable **Salesforce**, Fluent Forms asks for the **Sandbox Account**, **Salesforce Domain URL**, **Salesforce Consumer Key**, and **Salesforce Consumer Secret** of your **Salesforce Account**.

> [!Tip]
> If you use a Salesforce sandbox, enable the **Salesforce Sandbox Account** checkbox.

Copy the **callback URL** from the top, as shown in the screenshot.

![Enable Salesforce Integration](/images/integrations/crm/salesforce-integration/enable-salesforce-integration-01-scaled.webp)

## Get the Salesforce Integration Credentials

The steps below show how to get the Domain URL, Consumer Key, and Consumer Secret from Salesforce.

1. Log in to your [Salesforce Account](https://login.salesforce.com/). The **Home page** opens.
2. Click the **Settings Icon** and select **Open Advanced Setup.**

![Salesforce Settings](/images/integrations/crm/salesforce-integration/Salesforce-Settings-03-scaled.webp)

3. In the new window, select **App Manager** under **Apps** in the left sidebar.
4. Click **New Connected App**.

![App Manager](/images/integrations/crm/salesforce-integration/App-Manager-04-scaled.webp)

5. In the pop-up, choose **Create a Connected App** and click **Continue**.

![Create Connect App](/images/integrations/crm/salesforce-integration/Create-a-connect-app-05-scaled.webp)

6. In the new window, enter the **Connected App Name**, **API Name**, and **Contact Email**.
7. Check **Enable OAuth Settings** and **paste** the **Callback URL** from the **Global Setting** of the Fluent Forms Salesforce integration settings.

![Connected API](/images/integrations/crm/salesforce-integration/new-connected-api-06-scaled.webp)

8. Select the OAuth scopes “**Manage user data via APIs (API)** and **Perform requests at any time (refresh_token, offline_access)**“.
9. **Save** the connected app and wait a few minutes for Salesforce to activate it. You can also click **Continue** to proceed to the next step.

![Selected Oauth Scope](/images/integrations/crm/salesforce-integration/selected-Oauth-scope-07-scaled.webp)

10. Click **Manage Consumer Details** to find the **Consumer Key** and **Secret** under the **API (Enable OAuth Settings)** options.

![Salesforce Integration step](/images/integrations/crm/salesforce-integration/07-scaled-2.webp)

11. **Copy** the **Consumer Key** and **Consumer Secret** from the Consumer Details.

![Consumer Details](/images/integrations/crm/salesforce-integration/Consumer-details-08-scaled.webp)

12. Click your **Profile Icon** at the top right to find your **domain URL**. **Copy** the **URL** and add **'https://'** before the domain URL.

![Domain URL Copy](/images/integrations/crm/salesforce-integration/domain-url-copy-09-scaled.webp)

## Connect Salesforce with Fluent Forms

1. Return to the **Salesforce Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste your Salesforce **Domain URL**, **Consumer Key**, and **Consumer Secret** in the **Global settings** tab of **Salesforce**.
3. Click **Save** to activate the **Salesforce Integration** module.

![Paste Consumer](/images/integrations/crm/salesforce-integration/paste-consumer-10-scaled.webp)

Fluent Forms now shows that your **Salesforce API integration** is **up and running**. Click **Disconnect Salesforce** to disconnect it.

![Disconnect Salesforce](/images/integrations/crm/salesforce-integration/disconnect-salesforce-11-scaled.webp)

## Integrate Salesforce into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to **Salesforce**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Salesforce Integration](/images/integrations/crm/salesforce-integration/Form-settings-13-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **Salesforce Integration** from the drawer.

![Add Integration Salesforce Integration](/images/integrations/crm/salesforce-integration/add-new-integration-13-scaled.webp)

Enter a **Feed** **Name** for your integration feed. This field is required. Then select the **Salesforce Services** that receive the submitted form data: **Account**, **Campaign**, **Case**, **Contact**, **Lead**, **Opportunity**, or **Product**.

![Add Salesforce Integration](/images/integrations/crm/salesforce-integration/Add-New-Salesforce-Integration-14-scaled.webp)

After you select the Salesforce service, the settings for configuring Salesforce open:

- **Feed Name:** Enter a name for your Salesforce integration feed.
- **Salesforce Services:** Use the **Arrow Icon** to select the Salesforce service that receives your contacts. You can change it at any time. For example, select **Contact**, then map the fields with Salesforce.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** to save the integration feed.

![Unnamed](/images/integrations/crm/salesforce-integration/unnamed-2-1.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Add Integration Salesforce Integration](/images/integrations/crm/salesforce-integration/add-new-integration-15-scaled.webp)

### Preview of Integrated Salesforce

You can see the form submissions that add Salesforce contacts in the **Entries** section of the form. In this example, the form has four submissions. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/salesforce-integration/entries-16-scaled.webp)

To see the contacts added from Fluent Forms, open **Salesforce Contacts** in the left sidebar.

![All Contacts From Salesforce](/images/integrations/crm/salesforce-integration/all-contacts-from-salesforce-17-scaled.webp)
