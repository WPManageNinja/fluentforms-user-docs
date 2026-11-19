---
description: "Integrating Campaign Monitor with Fluent Forms lets you manage contacts, send targeted emails, and grow your audience effortlessly."
---

# Integrate Campaign Monitor

The **Campaign Monitor** integration lets you manage contacts, send targeted emails, and grow your audience from **Fluent Forms**. This guide shows you how to connect **Campaign Monitor** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Campaign Monitor** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Campaign Monitor Integration

Go to **Integrations** in the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **Campaign Monitor**, and find the **Campaign Monitor** integration module.

Turn on the **Toggle** to enable **Campaign Monitor**, then click the **Manage** button that appears on the right side.

![Enable Campaign Monitor Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/1.-Enable-Campaign-Monitor-scaled.webp)

Once you enable **Campaign Monitor**, Fluent Forms asks for your **Campaign Monitor API Key** and **Campaign Monitor Client**.

![Campaign Monitor API Settings Page](/images/integrations/email-marketing/integrate-campaign-monitor/2.-Campaign-Monitor-API-Settings-page-scaled.webp)

### Get the Campaign Monitor API Key

> [!Note]
> If you do not have a Campaign Monitor account, [create one here](https://www.campaignmonitor.com/).

1. Log in to your **Campaign Monitor Account** through [this link](https://login.createsend.com).
2. Click **Profile** in the top right corner, open the dropdown list with the **Arrow Icon**, and click **Account Settings**.

![Account Settings Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/3.-Account-Settings-of-Campaign-Monitor-scaled.webp)

3. Click **API** Keys.

![API Keys Fluent Forms](/images/integrations/email-marketing/integrate-campaign-monitor/4.-API-Keys-scaled.webp)

4. Click **Generate API Key**.

![Generate API Key](/images/integrations/email-marketing/integrate-campaign-monitor/5.-Generate-API-Key-scaled.webp)

5. Copy the generated **API Key.**

![Copy API Key](/images/integrations/email-marketing/integrate-campaign-monitor/6.-Copy-API-Key-2-scaled.webp)

## Connect Campaign Monitor with Fluent Forms

1. Return to the **Campaign Monitor Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **Campaign Monitor** into the **Campaign Monitor** **API Key** field.
3. Click **Save**.

![Paste API Key](/images/integrations/email-marketing/integrate-campaign-monitor/7.-Paste-API-Key-1-scaled-2.webp)

After you provide the API key, the Client ID for Campaign Monitor appears in the dropdown list. Open the dropdown list with the **Arrow Icon**, select your Campaign Monitor Client ID, and click **Save** again.

![Campaign Monitor Client](/images/integrations/email-marketing/integrate-campaign-monitor/8.-Campaign-Monitor-Client-scaled.webp)

Fluent Forms now shows that your **Campaign Monitor** is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Campaign Monitor** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-campaign-monitor/9.-Verify-or-Disconnect-button-scaled.webp)

## Integrate Campaign Monitor in Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Campaign Monitor**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/10.-Open-desired-form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Campaign Monitor Integration** feed from the drawer.

![Add Integration Dropdown Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/11.-Add-new-integration-dropdown-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **Campaign Monitor List** that receives the submitted form data.

![Select Campaign Monitor List Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/12.-Select-campaign-monitor-list-scaled.webp)

The feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Campaign Monitor List:** Use the Arrow Icon to select the Campaign Monitor subscriber list that receives your contacts. You can change it at any time.
3. **Map Fields:** Link your Campaign Monitor fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Resubscribe:** Enable re-subscription so users can renew their access.
5. **Conditional Logics:** Run the Campaign Monitor integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Campaign Monitor is now connected to this form.

![Save Feed Button Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/13.-Save-Feed-button-scaled-2.webp)

The **Campaign Monitor Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Campaign Monitor Integration Feed](/images/integrations/email-marketing/integrate-campaign-monitor/14.-Added-Campaign-Monitor-Integration-Feed-scaled.webp)

## Preview of Integrated Campaign Monitor

You can see the form submissions that add **Campaign Monitor** subscribers in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-campaign-monitor/15.-Form-Entries-scaled.webp)

Open your [Campaign Monitor](http://campaignmonitor.com) account, go to **Lists & Subscribers** in the top navbar, and click the **Subscriber List** you connected.

![List Preview](/images/integrations/email-marketing/integrate-campaign-monitor/16.-List-preview-1-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Campaign Monitor** **Subscriber List**.

![Added Contacts Preview](/images/integrations/email-marketing/integrate-campaign-monitor/17.-Added-contacts-preview-scaled.webp)
