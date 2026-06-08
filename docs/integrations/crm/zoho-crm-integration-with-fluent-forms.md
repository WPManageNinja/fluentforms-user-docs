# Zoho CRM Integration with Fluent Forms

[Zoho CRM](https://www.zoho.com/) is an online Sales CRM software that manages your sales, marketing, and support in one CRM platform. By Integrating Zoho CRM with Fluent Forms allows you to grow your Zoho CRM Subscriber list through the users of Fluent Forms. 

This article will step by step guide you through integrating Zoho CRM with Fluent Forms on your WordPress Site.

> [!Note]
> **Zoho CRM** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable the Zoho CRM Integration

First, go to **Integrations** from the Fluent Forms Navbar, search for **Zoho CRM** through the search bar, and get the **ZohoCRM integration module**.

Now, turn on the **Toggle** to enable the **ZohoCRM** module and click the **Settings Icon** on the right.

![Enable Zoho CRM](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/enable-zohocrm-01-scaled.webp)

Once you enable ZohoCRM, you will be asked for the **Account URL, Zoho CRM Client ID,** and **Zoho CRM Client Secret** of your **Zoho CRM Account**.

Here **Copy** the **Homepage URL** and **Authorized Redirect URL** for **later** use.

If you don’t have an existing account or application registered, click[ **Zoho Developer Console**](https://api-console.zoho.com/) to register your application.

![Fdsgdh Fluent Forms](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/fdsgdh.webp)

## Get the Zoho CRM Credentials

To learn how to get the **Account URL, Zoho CRM Client ID,** and **Zoho CRM Client Secret** from Zoho CRM, follow the steps below –

Choose the client type that **Server-based Applications** from the **API Console**.

![Choose Server Type](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/choose-server-type-02-1-scaled.webp)

A popup will appear. Now, Enter the **Client Name**. **Paste** the **Homepage URL** and **Authorized Redirect URLs** that were copied before. Press the **Create** button.

![Create Client](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/create-new-client-03-scaled.webp)

Now, You will be provided with the **Client ID** and **Client Secret. Copy** the Client ID and Client Secret for **later** use.

![Client ID And Client Secret](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/Client-ID-and-Client-Secret-04.webp)

Then go to **Settings** and **Enable** the **Data Centers** as you need.

![Settings Zoho CRM Integration](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/Settings-05-scaled.webp)

## Connect Zoho CRM with Fluent Forms

Then, return to the **Zoho CRM Settings** page under the **Configure Integration** tab of the **Global Settings** from the **Fluent Forms Navbar**.

Now, paste the **Account URL, Client ID,** and **Client Secret** that you copied before.

After that, click the **Save Settings** button.

![Global Settings](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/Global-Settings-08-scaled.webp)

Then it is redirect to your Zoho CRM account for your confirmation. Click the **Accept** button.

![Accept Fluent Forms](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/accept-07.webp)

Here, you will see that your **Zoho CRM API integration is up and running**. You can also disconnect by clicking the **Disconnect Zoho CRM** button.

![Disconect Fluent Forms](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/disconect-09-scaled.webp)

## Integrate Zoho CRM into Fluent Forms

First, go to **Forms** from the **Fluent Forms Navbar**, select the **Desired Form** where you want to integrate your Zoho CRM and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Zoho Fluent Forms](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/Fluent-Form-Zoho-forms-10-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Zoho CRM Integration** feed from the dropdown list. 

![Add Configuration Zoho CRM Integration](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/add-new-configuration-11-scaled.webp)

### Configure Zoho CRM Integration Feed

**A. Feed Name**: Enter a name for your Zoho CRM integration feed. 

**B. Services:** From the dropdown options, select the **Zoho CRM Service**. Then, **Configure the fields** and **Map** them according to your requirements.

**C. Other Fields:** Use all the fields under this option to properly link your **Zoho CRM Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **Zoho CRM fields** using the **Shortcode Arrow**. 

**D. Conditional Logic:**  If you want to allow **Zoho CRM** integration conditionally based on your submission values, then **Enable Conditional Logic** options. To learn more about this conditional logic, read the [article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**E. Status:** Enable this feed option to activate the integration.

Once the setup is complete, click the **Save Feed** button.

Now, your Zoho CRM will be integrated into this specific form!

![Add Zoho](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/add-new-zoho-13-scaled.webp)

After successful Integration, you will see that your Zoho CRM integration Feed has been added here. You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Zoho CRM Integration step](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/14-scaled.webp)

### Preview of Integrated Zoho CRM

Here, you can see the preview of the added contacts of Zoho CRM through the Form entries that I set up during the integration.

Here, you can see a preview of the added Zoho CRM contacts through the Form entries that I set up during the integration.

You can see form submissions from the **Entries** section of this particular form.

![Zoho Entries Fluent Forms](/images/integrations/crm/zoho-crm-integration-with-fluent-forms/Zoho-entries-scaled.webp)

Following this simple steps, you can easily integrate Zoho CRM with Fluent Forms!
