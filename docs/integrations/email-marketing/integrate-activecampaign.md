---
description: "Connect ActiveCampaign with Fluent Forms using your API URL and API Key, then add a feed to any form to send new contacts to your ActiveCampaign list."
---

# Integrate ActiveCampaign

[ActiveCampaign](https://www.activecampaign.com/) is a marketing automation tool that helps you collect customer information. With the ActiveCampaign integration, **Fluent Forms** adds the information from form submissions to your ActiveCampaign list automatically. This guide shows you how to connect **ActiveCampaign** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **ActiveCampaign** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/F4i2RIyGZbM" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Enable ActiveCampaign Integration

Go to **Integrations** in the Fluent Forms navbar and search for **ActiveCampaign**. Turn on the **ActiveCampaign** toggle, then click **Manage** on the right.

![Enable Activecampaign Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/1.-Enable-ActiveCampaign-scaled.webp)

Once you enable ActiveCampaign, Fluent Forms asks for the **ActiveCampaign API URL** and **ActiveCampaign API Key** of your **ActiveCampaign Account**.

> [!Note]
> If you do not have an ActiveCampaign account, [create one here](https://www.activecampaign.com/free).

### Get the ActiveCampaign API URL and API Key

1. Log in to your [ActiveCampaign account](https://www.activecampaign.com/login).
2. Click the **Settings** (gear) icon in the top right corner and open **Developer** in the left menu.
3. Click **Copy API URL** and **Copy API Key** to copy both credentials.

![Copy Activecampaign API URL And Key](/images/integrations/email-marketing/integrate-activecampaign/3.-Copy-ActiveCampaign-API-URL-and-Key-scaled.webp)

## Connect ActiveCampaign with Fluent Forms

1. Return to the **ActiveCampaign API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API URL** and **API Key** you copied from **ActiveCampaign** into the **ActiveCampaign API URL** and **ActiveCampaign API Key** fields.
3. Click **Save** to activate the **ActiveCampaign Integration** module.

![Paste API URL And Key](/images/integrations/email-marketing/integrate-activecampaign/4.-Paste-API-URL-and-Key-scaled.webp)

Fluent Forms now shows that ActiveCampaign is connected. Click **Verify connection again** to verify the connection, or **Disconnect ActiveCampaign** to disconnect it. Confirm with **Disconnect**. Any form that uses the integration stops sending until you connect again.

![Integreted Activecampaign Fluent Forms](/images/integrations/email-marketing/integrate-activecampaign/5.-Integreted-ActiveCampaign-scaled.webp)

## Integrate ActiveCampaign into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **ActiveCampaign**, and click **Configuration** in the form's top bar.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

On the form's **Configuration** page, open **Integrations & Add-ons** in the left menu, click **Integrations**, and then click **Add New Integration**.

![Configure Integrations Page Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/7.-Configure-Integrations-page-scaled.webp)

In the **Add an integration** drawer, search for **ActiveCampaign** and select **ActiveCampaign Integration**.

![Select ActiveCampaign Integration](/images/integrations/email-marketing/integrate-activecampaign/7.-Select-ActiveCampaign-Integration.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **ActiveCampaign List** that receives the submitted form data.

![Add Activecampaign Integration Feed Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/8.-Add-new-ActiveCampaign-Integration-Feed-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **ActiveCampaign List:** Use the Arrow Icon to select the ActiveCampaign mailing list that receives your contacts. You can change it at any time.
3. **Map Fields:** Link your ActiveCampaign fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Tags:** Add tags to your ActiveCampaign contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use shortcodes as the tag.

   * **Enable Dynamic Tag Input:** Lets you add customized tags for specific ActiveCampaign contacts based on your submission values and the conditions you set.

5. **Note:** Write a note for the contacts. You can also use shortcodes to send dynamic data to ActiveCampaign.
6. **Double Opt-In Form:** Select the ActiveCampaign form that sends the opt-in email when you export contacts to ActiveCampaign.
7. **Enable Instant Responder:** Check this option, and ActiveCampaign sends any instant responders you set up when the contact is added to the list. This option is not available on a free trial.
8. **Enable Send the last broadcast campaign:** Check this option, and ActiveCampaign sends the last campaign to the list or adds the contact. This option is also not available on a free trial.
9. **Conditional Logics:** Run the ActiveCampaign integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
10. **Enable This Feed:** Keep this toggle on at the top of the feed so all its actions run.

![ActiveCampaign Feed Settings](/images/integrations/email-marketing/integrate-activecampaign/8.-ActiveCampaign-Feed-Settings.webp)

Click **Save** when the setup is done. **ActiveCampaign** is now connected to this form.

![Save Settings Button Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/9.-Save-Settings-button-scaled.webp)

The **ActiveCampaign Integration Feed** now appears in the list. Click the **Edit Icon** to modify it, the **Copy Icon** to duplicate it, or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Activecampaign Integration Feed](/images/integrations/email-marketing/integrate-activecampaign/10.-Added-ActiveCampaign-Integration-feed-scaled.webp)

### Preview of Integrated ActiveCampaign

You can see the form submissions that add ActiveCampaign contacts in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-activecampaign/11.-New-Entries-scaled.webp)

In ActiveCampaign, open **Contacts** in the left sidebar, go to the **Lists** tab, and click the **List** you connected to **Fluent Forms**.

![Contacts Lists Activecampaign](/images/integrations/email-marketing/integrate-activecampaign/12.-Contacts-Lists-ActiveCampaign-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **ActiveCampaign Contact List**.

![Preview Added Users Activecampaign Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/13.-Preview-of-added-FluentForms-Users-in-ActiveCampaign-scaled.webp)
