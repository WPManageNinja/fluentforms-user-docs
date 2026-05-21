# Salesforce Integration with Fluent Forms

Salesforce is a popular customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service, and IT teams work as one from anywhere. 

This article will guide you through integrating **Salesforce** with **Fluent Forms** on your **WordPress Site**.  

> Remember, Salesforce is a Premium Feature of the Fluent Forms Plugin. So, to integrate it, you need the Fluent Forms Pro plugin.

Salesforce provides API Access to these four account editions only:

- Enterprise Edition

- Unlimited Edition

- Developer Edition

- Performance Edition

## Enable the Salesforce Integration

To learn how to enable Salesforce integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navba**r, search for **Salesforce** through the search bar, and get the **Salesforce integration module**.

Now, turn on the **Toggle** to enable the **Salesforce** module and click the **Settings Icon** on the right.

![](/images/crm/salesforce-integration-with-fluent-forms/unnamed-1-2-2.webp)

Once you enable **Salesforce**, you will be asked for the **Sandbox Account**, **Salesforce Domain URL**, **Salesforce Consumer Ke**y, and **Salesforce Consumer Secret** of your **Salesforce Account**.

> If you use a Sandbox Account, check the Salesforce Sandbox Account checkbox.

Now, copy the **callback URL** from the top for later use, as shown in the screenshot.

![](/images/crm/salesforce-integration-with-fluent-forms/enable-salesforce-integration-01-scaled.webp)

## Get the Salesforce Integration Credentials

Follow the steps in the screenshots below to learn how to get the Salesforce Integration Domain URL, Consumer Key, and Consumer Secret from Salesforce.

First, log into your [Salesforce Account](https://login.salesforce.com/). A **Home page** will appear here. Click on the **Settings Icon** button and then select the **Open Advanced Setup.** 

![](/images/crm/salesforce-integration-with-fluent-forms/Salesforce-Settings-03-scaled.webp)

Here appears a new window page. Select the **App Manager** from the left sidebar under the **Apps** section. Click on the **New Connected App** button.

![](/images/crm/salesforce-integration-with-fluent-forms/App-Manager-04-scaled.webp)

After clicking the New Connect App button, a pop-up will appear. Now choose the **Create a Connected App** option and click the **Continue** button.

![](/images/crm/salesforce-integration-with-fluent-forms/Create-a-connect-app-05-scaled.webp)

A new window page also appears here. Now, set the **Connected App Name**, **API Name**, and **Contact Email**.

Check **Enable OAuth Settings** and **paste** the **Callback URL** that you will get from the **Global Setting** of the Fluent Forms Salesforce integration settings.

![](/images/crm/salesforce-integration-with-fluent-forms/new-connected-api-06-scaled.webp)

Now, Select the OAuth scopes: “**Manage user data via APIs (API)** and **Perform requests at any time (refresh_token, offline_access)**“. 

After that, **save** the connected app and wait a few minutes for it to be activated. You can also click the **Continue** button to proceed to the next step.

![](/images/crm/salesforce-integration-with-fluent-forms/selected-Oauth-scope-07-scaled.webp)

Click the **Manage Consumer Details** button to collect the **Consumer Key** and **Secret** under the **API (Enable OAuth Settings)** options.

![](/images/crm/salesforce-integration-with-fluent-forms/07-scaled-2.webp)

Here are Consumer Details. **Copy** the **Consumer Key** and **Consumer Secret** to use in the future.

![](/images/crm/salesforce-integration-with-fluent-forms/Consumer-details-08-scaled.webp)

Get your **domain URL** by clicking your **Profile Icon** at the top right. **Copy** the **URL** and make sure you add **'https://'** before the domain URL.

![](/images/crm/salesforce-integration-with-fluent-forms/domain-url-copy-09-scaled.webp)

## Connect Salesforce with Fluent Forms

Then, return to the **salesforce Settings** page under the **Global Settings Configure Integration tab** from the **Fluent Forms Navbar**.

Paste your Salesforce **Domain URL**, **Consumer Key**, and **Consumer Secret** to **Salesforce's** **Global settings** tab and click the **Save Settings** button.

Press the **Save Settings** button to make your **Salesforce Integration** module functional.

![](/images/crm/salesforce-integration-with-fluent-forms/paste-consumer-10-scaled.webp)

Here, you can see your **Salesforce API integration** is **up and running**. To disconnect, click the **Disconnect Salesforce** button.

![](/images/crm/salesforce-integration-with-fluent-forms/disconnect-salesforce-11-scaled.webp)

## Integrate Salesforce into Fluent Forms

To learn how to integrate Salesforce into any specific Form in Fluent Forms, follow the steps below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your **Salesforce** and click the **Settings** button. 

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/crm/salesforce-integration-with-fluent-forms/Form-settings-13-scaled.webp)

Once on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Salesforce Integration** feed from the dropdown list. 

![](/images/crm/salesforce-integration-with-fluent-forms/add-new-integration-13-scaled.webp)

You will find a required field to set a **Feed** **Name** for your integration feed according to your preference.

Also, you must select **Salesforce Services** from the dropdown where you want to send the submitted form data.

![](/images/crm/salesforce-integration-with-fluent-forms/Add-New-Salesforce-Integration-14-scaled.webp)

Once you select the Salesforce services, a pop-up page with various settings options for configuring the Salesforce will appear. 

**All the settings options mentioned in the screenshot below are briefly explained:**

**A. Feed Name:** Enter a name for your Salesforce integration feed.

**B.** **Salesforce** **Services**: Using the **Arrow** **Icon**, you can select the Salesforce Services where you want to add your contacts. You can also change this anytime on your use case. 

Here, I will select Salesforce service **Contact** options. You can choose **Salesforce Services** from the drop-down menu. Now, I am mapping the field with Salesforce. 

**C.** **Conditional Logic:** If you want to allow **Salesforce** integration conditionally based on your submission values, **Enable Conditional Logic** options. To learn more about conditional logic, read the[ article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**D. Status:** Enable this feed option to activate the integration.

After that, click the **Save Feed** button to save the integration feed.

![](/images/crm/salesforce-integration-with-fluent-forms/unnamed-2-1.webp)

After successful Integration, now you will see that your Salesforce integration Feed has been added here. You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/crm/salesforce-integration-with-fluent-forms/add-new-integration-15-scaled.webp)

## Preview of Integrated Salesforce

Here, you can see a preview of the added Salesforce contacts through the Form entries that I set up during the integration.

You can see four form submissions from the **Entries** section of this particular form.

![](/images/crm/salesforce-integration-with-fluent-forms/entries-16-scaled.webp)

Go to the **Salesforce Contacts** section from the left sidebar to see the integrated contact list into Fluent Forms.

![](/images/crm/salesforce-integration-with-fluent-forms/all-contacts-from-salesforce-17-scaled.webp)

This way, you can easily integrate Salesforce with Fluent Forms!
