---
description: "Integrating SendFox with Fluent Forms allows you to build your SendFox email list through the users of Fluent Forms."
---

# Integrate SendFox

The SendFox integration lets you build your SendFox email list from the users of **Fluent Forms**. This guide shows you how to connect **SendFox** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **SendFox** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable SendFox Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **SendFox**, and find the **SendFox** integration module.

Turn on the **Toggle** to enable **SendFox**, then click the **Manage** button that appears on the right side.

![Enable Sendfox Integrate SendFox](/images/integrations/email-marketing/integrate-sendfox/1.-Enable-Sendfox-scaled.webp)

Once you enable SendFox, Fluent Forms asks for the **SendFox API Key** of your **SendFox Account**.

![Sendfox API Settings Page](/images/integrations/email-marketing/integrate-sendfox/2.-SendFox-API-Settings-page-scaled.webp)

### Get the SendFox API Key

1. Log in to your [SendFox Account](https://sendfox.com/login) and go to **Settings** in the left sidebar.
2. Click the **Profile** button in the top right corner and choose **Settings** from the dropdown list.

![Sendfox Settings Page](/images/integrations/email-marketing/integrate-sendfox/3.-SendFox-Settings-page-scaled.webp)

3. Go to **API** in the left menu and click **Create New Token.**

![Create Token Fluent Forms](/images/integrations/email-marketing/integrate-sendfox/4.-Create-New-Token-scaled.webp)

4. Enter a **Name** for your API and click **Create**.

![Provide Name Popup](/images/integrations/email-marketing/integrate-sendfox/5.-Provide-the-Name-popup-scaled.webp)

5. Copy the API key from the popup.

![Copy API Key](/images/integrations/email-marketing/integrate-sendfox/6.-Copy-API-Key-1-scaled.webp)

## Connect SendFox with Fluent Forms

1. Return to the **SendFox API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **SendFox** into the **SendFox API Key** field.
3. Click **Save** to activate the **SendFox Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-sendfox/7.-Paste-API-Key-scaled-3.webp)

Fluent Forms now shows that SendFox is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect SendFox** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-sendfox/8.-Verify-or-Disconnect-button-scaled-2.webp)

## Integrate SendFox into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **SendFox**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate SendFox](/images/integrations/email-marketing/integrate-sendfox/9.-Open-desired-form-settings-2-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **SendFox Integration** from the drawer.

![Add Integration Dropdown Integrate SendFox](/images/integrations/email-marketing/integrate-sendfox/10.-Add-new-integration-dropdown--scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **SendFox Mailing List** that receives the submitted form data.

![Select Sendfox Mailing List Integrate SendFox](/images/integrations/email-marketing/integrate-sendfox/11.-Select-sendfox-mailing-list-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **SendFox Mailing Lists:** Use the Arrow Icon to select the SendFox mailing list that receives your contacts. You can change it at any time.
3. **Map Fields:** Link your SendFox fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Conditional Logics:** Run the SendFox integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
5. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. SendFox is now connected to this form.

![Save Feed Button Integrate SendFox](/images/integrations/email-marketing/integrate-sendfox/12.-Save-Feed-button-scaled-2.webp)

The **SendFox Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Sendfox Integration Feed](/images/integrations/email-marketing/integrate-sendfox/13.-Added-SendFox-Integration-Feed-scaled.webp)

### Preview of Integrated SendFox

You can see the form submissions that add SendFox contacts in the **Entries** section of the form. In this example, the form has four submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-sendfox/14.-Form-Entries-scaled.webp)

In the **SendFox** **Dashboard**, open **Audience** in the top navbar and click the **List** you connected to Fluent Forms.

![Audience Tab Sendfox](/images/integrations/email-marketing/integrate-sendfox/15.-Audience-tab-of-SendFox-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **SendFox Contact List.**

![List Preview Fluent Forms](/images/integrations/email-marketing/integrate-sendfox/16.-List-Preview.webp)
