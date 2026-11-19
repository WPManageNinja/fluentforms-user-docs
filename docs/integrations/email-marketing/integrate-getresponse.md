---
description: "Integrating GetResponse with Fluent Forms helps you automatically send a contact list from your WordPress website to your GetResponse account when a form…"
---

# Integrate GetResponse

The [GetResponse](http://getresponse.com) integration sends a contact list from your WordPress website to your GetResponse account when a form is submitted. This guide shows you how to connect **GetResponse** with **Fluent Forms** on your WordPress site.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/wzQpEkVQifw" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **GetResponse** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable GetResponse Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **GetResponse**, and find the **GetResponse** integration module.

Turn on the **Toggle** to enable **GetResponse**, then click the **Manage** button that appears on the right side.

![Enabled Getresponse Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/1.-Enabled-GetResponse-scaled.webp)

Once you enable GetResponse, Fluent Forms asks for the **GetResponse API Key** of your **GetResponse Account**.

> [!Note]
> If you do not have a GetResponse account, [create one here](https://www.getresponse.com/).

![Getresponse API Settings](/images/integrations/email-marketing/integrate-getresponse/2.-GetResponse-API-Settings-scaled.webp)

### Get the GetResponse API Key

1. Log in to your [GetResponse Account](https://app.getresponse.com/login?lang=en).
2. Click the **Tools Icon** in the top left corner and select **Integrations and API**.

![Integrations API Button](/images/integrations/email-marketing/integrate-getresponse/3.-Integrations-API-button-scaled.webp)

3. Open the **API** tab and click **Generate** **API key**.

![Generate API Key](/images/integrations/email-marketing/integrate-getresponse/4.-Generate-API-Key-scaled.webp)

4. Enter a **Name** for your **API key** and click **Generate**.

![Generate Button Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/5.-Generate-button-scaled.webp)

5. Click **Copy** to copy your GetResponse API key.

![Copy API Key](/images/integrations/email-marketing/integrate-getresponse/6.-Copy-API-Key.webp)

## Connect GetResponse with Fluent Forms

1. Return to the **GetResponse API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **GetResponse** into the **GetResponse API Key** field.
3. Click **Save** to activate the **GetResponse Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-getresponse/7.-Paste-API-Key-scaled.webp)

Fluent Forms now shows that GetResponse is connected. Click **Disconnect GetResponse** to disconnect it.

![Disconnect API Key](/images/integrations/email-marketing/integrate-getresponse/8.-Disconnect-API-Key-scaled.webp)

## Integrate GetResponse into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to **GetResponse**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/Open-Desired-Form-Settings-4-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **GetResponse Integration** feed from the drawer.

![Add Integration Button Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/10.-Add-New-Integration-button-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **GetResponse List** that receives the submitted form data.

![Getresponse List Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/11.-GetResponse-List-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **GetResponse List:** Change the GetResponse list at any time.
3. **Map Fields:** Link your GetResponse fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Autoresponder Cycle:** Set the day on which contacts enter the autoresponder cycle. Leave it empty to keep contacts out of the autoresponder.
5. **Conditional Logics:** Run the GetResponse integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. GetResponse is now connected to this form.

![Save Feed Button Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/12.-Save-Feed-button-scaled.webp)

The **GetResponse Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Getresponse Integration Feed](/images/integrations/email-marketing/integrate-getresponse/13.-Added-New-GetResponse-Integration-Feed-scaled.webp)
