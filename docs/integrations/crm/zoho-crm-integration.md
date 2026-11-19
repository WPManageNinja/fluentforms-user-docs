---
description: "Zoho CRM is an online Sales CRM software that manages your sales, marketing, and support in one CRM platform."
---

# Zoho CRM Integration

[Zoho CRM](https://www.zoho.com/) is an online sales CRM that manages your sales, marketing, and support in one platform. With the Zoho CRM integration, you grow your Zoho CRM subscriber list from the users of Fluent Forms. This guide walks you through connecting Zoho CRM with Fluent Forms on your WordPress site.

> [!Note]
> **Zoho CRM** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Zoho CRM Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **Zoho CRM**, and find the **ZohoCRM integration module**.

Turn on the **Toggle** to enable the **ZohoCRM** module, then click **Manage** on the right.

![Enable Zoho CRM](/images/integrations/crm/zoho-crm-integration/enable-zohocrm-01-scaled.webp)

Once you enable ZohoCRM, Fluent Forms asks for the **Account URL, Zoho CRM Client ID,** and **Zoho CRM Client Secret** of your **Zoho CRM Account**. Select your **Account URL** from the dropdown to match your Zoho data center: **US**, **AU**, **EU**, **IN**, or **CN**.

**Copy** the **Homepage URL** and **Authorized Redirect URL** for the next steps.

If you don’t have an account or a registered application, click[ **Zoho Developer Console**](https://api-console.zoho.com/) to register your application.

![Fdsgdh Fluent Forms](/images/integrations/crm/zoho-crm-integration/fdsgdh.webp)

## Get the Zoho CRM Credentials

1. In the **API Console**, choose **Server-based Applications** as the client type.

![Choose Server Type](/images/integrations/crm/zoho-crm-integration/choose-server-type-02-1-scaled.webp)

2. In the popup, enter the **Client Name**.
3. **Paste** the **Homepage URL** and **Authorized Redirect URLs** you copied.
4. Click **Create**.

![Create Client](/images/integrations/crm/zoho-crm-integration/create-new-client-03-scaled.webp)

5. **Copy** the **Client ID** and **Client Secret** that Zoho shows.

![Client ID And Client Secret](/images/integrations/crm/zoho-crm-integration/Client-ID-and-Client-Secret-04.webp)

6. Go to **Settings** and **Enable** the **Data Centers** you need.

![Settings Zoho CRM Integration](/images/integrations/crm/zoho-crm-integration/Settings-05-scaled.webp)

## Connect Zoho CRM with Fluent Forms

1. Return to the **Zoho CRM Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Account URL, Client ID,** and **Client Secret** you copied.
3. Click **Save**.

![Global Settings](/images/integrations/crm/zoho-crm-integration/Global-Settings-08-scaled.webp)

Zoho CRM redirects you to your account for confirmation. Click **Accept**.

![Accept Fluent Forms](/images/integrations/crm/zoho-crm-integration/accept-07.webp)

Fluent Forms now shows that your **Zoho CRM API integration is up and running**. Click **Disconnect Zoho CRM** to disconnect it.

![Disconect Fluent Forms](/images/integrations/crm/zoho-crm-integration/disconect-09-scaled.webp)

## Integrate Zoho CRM into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to Zoho CRM, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Zoho Fluent Forms](/images/integrations/crm/zoho-crm-integration/Fluent-Form-Zoho-forms-10-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Zoho CRM Integration** feed from the drawer.

![Add Configuration Zoho CRM Integration](/images/integrations/crm/zoho-crm-integration/add-new-configuration-11-scaled.webp)

### Configure Zoho CRM Integration Feed

- **Feed Name:** Enter a name for your Zoho CRM integration feed.
- **Services:** Select the **Zoho CRM Service** from the dropdown: **Leads**, **Contacts**, **Accounts**, **Deals**, **Tasks**, **Cases**, **Vendors**, **Solutions**, or **Campaigns**. Then **configure the fields** and **map** them to your needs.
- **Other Fields:** Link your **Zoho CRM Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the **value** for each field.
- **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Status:** Enable this option to activate the feed.

Click **Save** when the setup is complete. Zoho CRM is now connected to this form.

![Add Zoho](/images/integrations/crm/zoho-crm-integration/add-new-zoho-13-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Zoho CRM Integration step](/images/integrations/crm/zoho-crm-integration/14-scaled.webp)

### Preview of Integrated Zoho CRM

You can see the form submissions that add Zoho CRM contacts in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Zoho Entries Fluent Forms](/images/integrations/crm/zoho-crm-integration/Zoho-entries-scaled.webp)
