---
description: "Salesforce is a popular customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service, and IT teams work as one from…"
---

# Salesforce Integration

Salesforce is a popular customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service, and IT teams work as one from anywhere. 

This article will guide you through integrating **Salesforce** with **Fluent Forms** on your **WordPress Site**.  

> [!Note]
> **Salesforce** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

Salesforce provides API Access to these four account editions only:

- Enterprise Edition

- Unlimited Edition

- Developer Edition

- Performance Edition

## Enable the Salesforce Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Salesforce** through the search bar, and get the **Salesforce integration module**.

Now, turn on the **Toggle** to enable the **Salesforce** module and click the **Settings Icon** on the right.

![Unnamed](/images/integrations/crm/salesforce-integration/unnamed-1-2-2.webp)

Once you enable **Salesforce**, you will be asked for the **Sandbox Account**, **Salesforce Domain URL**, **Salesforce Consumer Key**, and **Salesforce Consumer Secret** of your **Salesforce Account**.

> [!Tip]
> If you use a Salesforce sandbox, enable the **Salesforce Sandbox Account** checkbox.

Now, copy the **callback URL** from the top for later use, as shown in the screenshot.

![Enable Salesforce Integration](/images/integrations/crm/salesforce-integration/enable-salesforce-integration-01-scaled.webp)

## Get the Salesforce Integration Credentials

Follow the steps in the screenshots below to learn how to get the Salesforce Integration Domain URL, Consumer Key, and Consumer Secret from Salesforce.

First, log into your [Salesforce Account](https://login.salesforce.com/). A **Home page** will appear here. Click on the **Settings Icon** button and then select the **Open Advanced Setup.** 

![Salesforce Settings](/images/integrations/crm/salesforce-integration/Salesforce-Settings-03-scaled.webp)

Here appears a new window page. Select the **App Manager** from the left sidebar under the **Apps** section. Click on the **New Connected App** button.

![App Manager](/images/integrations/crm/salesforce-integration/App-Manager-04-scaled.webp)

After clicking the New Connect App button, a pop-up will appear. Now choose the **Create a Connected App** option and click the **Continue** button.

![Create Connect App](/images/integrations/crm/salesforce-integration/Create-a-connect-app-05-scaled.webp)

A new window page also appears here. Now, set the **Connected App Name**, **API Name**, and **Contact Email**.

Check **Enable OAuth Settings** and **paste** the **Callback URL** that you will get from the **Global Setting** of the Fluent Forms Salesforce integration settings.

![Connected API](/images/integrations/crm/salesforce-integration/new-connected-api-06-scaled.webp)

Now, Select the OAuth scopes: “**Manage user data via APIs (API)** and **Perform requests at any time (refresh_token, offline_access)**“. 

After that, **save** the connected app and wait a few minutes for it to be activated. You can also click the **Continue** button to proceed to the next step.

![Selected Oauth Scope](/images/integrations/crm/salesforce-integration/selected-Oauth-scope-07-scaled.webp)

Click the **Manage Consumer Details** button to collect the **Consumer Key** and **Secret** under the **API (Enable OAuth Settings)** options.

![Salesforce Integration step](/images/integrations/crm/salesforce-integration/07-scaled-2.webp)

Here are Consumer Details. **Copy** the **Consumer Key** and **Consumer Secret** to use in the future.

![Consumer Details](/images/integrations/crm/salesforce-integration/Consumer-details-08-scaled.webp)

Get your **domain URL** by clicking your **Profile Icon** at the top right. **Copy** the **URL** and make sure you add **'https://'** before the domain URL.

![Domain URL Copy](/images/integrations/crm/salesforce-integration/domain-url-copy-09-scaled.webp)

## Connect Salesforce with Fluent Forms

Then, return to the **salesforce Settings** page under the **Global Settings Configure Integration tab** from the **Fluent Forms Navbar**.

Paste your Salesforce **Domain URL**, **Consumer Key**, and **Consumer Secret** to **Salesforce's** **Global settings** tab and click the **Save Settings** button.

Click the **Save Settings** button to make your **Salesforce Integration** module functional.

![Paste Consumer](/images/integrations/crm/salesforce-integration/paste-consumer-10-scaled.webp)

Here, you can see your **Salesforce API integration** is **up and running**. To disconnect, click the **Disconnect Salesforce** button.

![Disconnect Salesforce](/images/integrations/crm/salesforce-integration/disconnect-salesforce-11-scaled.webp)

## Integrate Salesforce into Fluent Forms

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your **Salesforce** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Salesforce Integration](/images/integrations/crm/salesforce-integration/Form-settings-13-scaled.webp)

Once on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Salesforce Integration** feed from the dropdown list. 

![Add Integration Salesforce Integration](/images/integrations/crm/salesforce-integration/add-new-integration-13-scaled.webp)

You will find a required field to set a **Feed** **Name** for your integration feed according to your preference.

Also, you must select **Salesforce Services** from the dropdown where you want to send the submitted form data.

![Add Salesforce Integration](/images/integrations/crm/salesforce-integration/Add-New-Salesforce-Integration-14-scaled.webp)

Once you select the Salesforce services, a pop-up page with various settings options for configuring the Salesforce will appear. 

**A. Feed Name:** Enter a name for your Salesforce integration feed.

**B. Salesforce Services**: Using the **Arrow Icon**, you can select the Salesforce Services where you want to add your contacts. You can also change this anytime on your use case. 

Here, I will select Salesforce service **Contact** options. You can choose **Salesforce Services** from the drop-down menu. Now, I am mapping the field with Salesforce. 

**C.** **Conditional Logic:** If you want to allow **Salesforce** integration conditionally based on your submission values, **Enable Conditional Logic** options. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

**D. Status:** Enable this feed option to activate the integration.

After that, click the **Save Feed** button to save the integration feed.

![Unnamed](/images/integrations/crm/salesforce-integration/unnamed-2-1.webp)

After successful Integration, now you will see that your Salesforce integration Feed has been added here. You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Add Integration Salesforce Integration](/images/integrations/crm/salesforce-integration/add-new-integration-15-scaled.webp)

### Preview of Integrated Salesforce

Here, you can see a preview of the added Salesforce contacts through the Form entries that I set up during the integration.

You can see four form submissions from the **Entries** section of this particular form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/salesforce-integration/entries-16-scaled.webp)

Go to the **Salesforce Contacts** section from the left sidebar to see the integrated contact list into Fluent Forms.

![All Contacts From Salesforce](/images/integrations/crm/salesforce-integration/all-contacts-from-salesforce-17-scaled.webp)

This way, you can easily integrate Salesforce with Fluent Forms!
