---
description: "Sendinblue/Brevo is an integrated Email Marketing, Marketing Automation, and Small Business CRM."
---

# Integrate Brevo (Formerly Sendinblue)

**Sendinblue/Brevo** combines email marketing, marketing automation, and a small business CRM. With the Brevo integration, Fluent Forms collects customer information from your WordPress website and adds it to your Sendinblue/Brevo account when a form is submitted. This guide shows you how to connect **Brevo (formerly Sendinblue)** with **Fluent Forms** on your WordPress site.

> [!Note]
> **Brevo** (formerly Sendinblue) requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Sendinblue Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Brevo**, and find the **Sendinblue** integration module.

Turn on the **Toggle** to enable **Sendinblue**, then click the **Manage** button that appears on the right side.

![Enabled Sendinblue Fluent Forms](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/1.-Enabled-Sendinblue-scaled.webp)

Once you enable Sendinblue, Fluent Forms asks for the **Brevo V3 API Key** of your **Sendinblue Account**.

> [!Note]
> If you do not have a Brevo account, [create one here](https://www.brevo.com/free/).

![Brevo API Settings](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/2.-Brevo-API-Settings-scaled.webp)

### Get the Brevo V3 API Key

1. Log in to your [Sendinblue Account](http://brevo.com).
2. Click your profile icon in the bottom left corner and open **SMTP & API** in the **Settings** menu.
3. Open the **API keys & MCP** tab and click **Generate API key**.

![Profile Smtp API Option](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/3.-Profile-SMTP-API-option--scaled.webp)

4. Enter a **Key name**, choose an **Expiry**, and select the **Access** level. Brevo recommends **Restricted**. Then click **Generate**.

![Provide Name For API](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/5.-Provide-Name-for-API-scaled.webp)

5. Click the **Copy** icon to copy your Brevo API key. Brevo shows the key only once, so copy it right away.

![Copy API Key](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/6.-copy-API-key-scaled.webp)

## Connect Brevo with Fluent Forms

1. Return to the **Brevo API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **Brevo** into the **Brevo V3 API Key** field.
3. Click **Save** to activate the **Sendinblue Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/7.-Paste-API-Key-scaled-2.webp)

Fluent Forms now shows that your Brevo account is connected. Click **Verify connection again** to verify the connection, or **Disconnect Brevo** to disconnect it.

![Verifydisconnect Button](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/8.-VerifyDisconnect-button-scaled-2.webp)

## Integrate Sendinblue into Fluent Forms

Go to **Forms** in the Fluent Forms navbar, open the form where you want to add Brevo, and click **Configuration**.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/Open-Desired-Form-Settings-2-scaled-2.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Sendinblue Integration** feed from the drawer.

![Add Integration Button Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/9.-Add-New-Integration-button-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **Brevo Segment** that receives the submitted form data.

![Brevo Segment List](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/10.-Brevo-segment-list--scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Brevo Segment:** Change the Brevo subscriber list at any time.
3. **Map Fields:** Link your Sendinblue fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Other Fields:** Link Fluent Forms fields with their Sendinblue custom fields. Click the **Plus/Minus** icon in the right corner to add or delete custom fields.

> [!Note]
> **Custom date fields** accept only the **MM/DD/YYYY** format.

5. **Conditional Logics:** Run the Sendinblue integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Sendinblue is now connected to this form.

![Save Feed Button Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/11.-Save-Feed-button-scaled.webp)

The **Sendinblue Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Sendinblue Integration Feed](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/12.-Added-Sendinblue-integration-feed-scaled.webp)

### Preview of Integrated Sendinblue

You can see the form submissions that add Sendinblue contacts in the **Entries** section of the form. In this example, the form has four submissions.

![Entries Tab](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/13.-Entries-tab-scaled-2.webp)

In Brevo, open **Contacts** in the left side menu, go to the **Lists** tab, and open your list.

![Subscriber List Brevo](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/14.-New-Subscriber-list-in-brevo-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Brevo Contact List.**

![Preview Added Contacts Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/integrate-brevo-formerly-sendinblue/15.-Preview-of-added-contacts.webp)
