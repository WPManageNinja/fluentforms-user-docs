---
description: "Connect Campaign Monitor with Fluent Forms to send form submissions to your subscriber lists, manage contacts, and grow your email audience automatically."
---

# Integrate Campaign Monitor

The **Campaign Monitor** integration lets you manage contacts, send targeted emails, and grow your audience from **Fluent Forms**. This guide shows you how to connect **Campaign Monitor** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Campaign Monitor** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Campaign Monitor Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Campaign Monitor**, and find the **Campaign Monitor** integration module.

Turn on the **Toggle** to enable **Campaign Monitor**, then click the **Manage** button next to it.

![Enable Campaign Monitor Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/1.-Enable-Campaign-Monitor-scaled.webp)

Fluent Forms opens the **Campaign Monitor API Settings** page. It asks for your **Campaign Monitor API Key** and **Campaign Monitor Client**.

![Campaign Monitor API Settings Page](/images/integrations/email-marketing/integrate-campaign-monitor/2.-Campaign-Monitor-API-Settings-page-scaled.webp)

### Get the Campaign Monitor API Key

> [!Note]
> If you do not have a Campaign Monitor account, [create one here](https://www.campaignmonitor.com/).

1. Log in to your **Campaign Monitor Account** through [this link](https://login.createsend.com).
2. Click your **Profile** picture in the top right corner and click **Account settings**.

![Account Settings Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/3.-Account-Settings-of-Campaign-Monitor-scaled.webp)

3. Click **API & integrations** in the left menu.
4. Under **API Key**, click **Generate API key**.

![Generate API Key](/images/integrations/email-marketing/integrate-campaign-monitor/5.-Generate-API-Key-scaled.webp)

5. Copy the generated **API Key**. Campaign Monitor shows it only after you generate it, so copy it right away.

![Copy API Key](/images/integrations/email-marketing/integrate-campaign-monitor/6.-Copy-API-Key-2-scaled.webp)

## Connect Campaign Monitor with Fluent Forms

1. Return to the **Campaign Monitor API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **Campaign Monitor** into the **Campaign Monitor API Key** field. Use the **Eye Icon** to show or hide the key.
3. Open the **Campaign Monitor Client** dropdown with the **Arrow Icon** and select your client.
4. Click **Save**.

![Paste API Key](/images/integrations/email-marketing/integrate-campaign-monitor/7.-Paste-API-Key-1-scaled-2.webp)

Fluent Forms now shows that your **Campaign Monitor API integration is up and running**. Click **Verify connection again** to verify the connection, or **Disconnect Campaign Monitor** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-campaign-monitor/9.-Verify-or-Disconnect-button-scaled.webp)

## Integrate Campaign Monitor in Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Campaign Monitor**, and click **Configuration** in the form's top bar.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/10.-Open-desired-form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Campaign Monitor Integration** feed from the drawer.

![Add Integration Dropdown Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/11.-Add-new-integration-dropdown-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then open the **Campaign Monitor List** dropdown with the **Arrow Icon** and select the list that receives the submitted form data.

![Select Campaign Monitor List Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/12.-Select-campaign-monitor-list-scaled.webp)

The feed settings open with these options:

1. **Enable This feed:** Keep this toggle on so all the feed's actions run.
2. **Name:** Change the feed name at any time.
3. **Campaign Monitor List:** Select the Campaign Monitor subscriber list that receives your contacts. You can change it at any time.
4. **Map Fields:** Link your Campaign Monitor fields with the form fields. Select a form field for **Email Address**, which is required. Use the **Shortcode Icon** to add a value for **Full Name**.
5. **Resubscribe:** Check **Enable ReSubscription** so users can renew their access.
6. **Conditional Logics:** Check **Enable conditional logic** to run the Campaign Monitor integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

Click **Save** when the setup is done. Campaign Monitor is now connected to this form.

![Save Feed Button Integrate Campaign Monitor](/images/integrations/email-marketing/integrate-campaign-monitor/13.-Save-Feed-button-scaled-2.webp)

The **Campaign Monitor Integration Feed** now appears in the list. Click the **Edit** icon to modify it, the **Copy** icon to duplicate it, or the **Trash** icon to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Campaign Monitor Integration Feed](/images/integrations/email-marketing/integrate-campaign-monitor/14.-Added-Campaign-Monitor-Integration-Feed-scaled.webp)

## Preview of Integrated Campaign Monitor

You can see the form submissions that add **Campaign Monitor** subscribers in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-campaign-monitor/15.-Form-Entries-scaled.webp)

Open your [Campaign Monitor](http://campaignmonitor.com) account, go to **Lists & Subscribers** in the top navbar, and click the **Subscriber List** you connected.

![List Preview](/images/integrations/email-marketing/integrate-campaign-monitor/16.-List-preview-1-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Campaign Monitor** **Subscriber List**.

![Added Contacts Preview](/images/integrations/email-marketing/integrate-campaign-monitor/17.-Added-contacts-preview-scaled.webp)
