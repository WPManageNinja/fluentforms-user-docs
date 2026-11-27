---
description: "Connect GetResponse with Fluent Forms to automatically add form submissions to your GetResponse lists and start your autoresponder cycle."
---

# Integrate GetResponse

Integrating [GetResponse](http://getresponse.com) with **Fluent Forms** helps you automatically send a contact list from your WordPress website to your GetResponse account when a form is submitted.

This article guides you through integrating **GetResponse** with **Fluent Forms** on your WordPress site.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/wzQpEkVQifw" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **GetResponse** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable GetResponse Integration

First, go to **Integrations** in the **Fluent Forms Navbar**, search for **GetResponse** in the search bar, and find the **GetResponse** integration module.

Now, turn on the **Toggle** to enable **GetResponse**. Then, click the **Manage** button next to it.

![Enabled Getresponse Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/1.-Enabled-GetResponse-scaled.webp)

Once you enable **GetResponse**, Fluent Forms opens the **GetResponse API Settings** page. It asks for the **GetResponse API Key** of your **GetResponse Account**.

> [!Note]
> If you do not have a GetResponse account, [create one here](https://www.getresponse.com/).

![Getresponse API Settings](/images/integrations/email-marketing/integrate-getresponse/2.-GetResponse-API-Settings-scaled.webp)

### Get the GetResponse API Key

First, log in to your [GetResponse Account](https://app.getresponse.com/login?lang=en), click **Tools** in the top menu, and select **Integrations and API** under **Connect**.

![Integrations API Button](/images/integrations/email-marketing/integrate-getresponse/3.-Integrations-API-button-scaled.webp)

Now, open the **API** tab and click the **Generate API key** button.

![Generate API Key](/images/integrations/email-marketing/integrate-getresponse/4.-Generate-API-Key-scaled.webp)

Enter a name for your API key and click the **Generate** button.

![Generate Button Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/5.-Generate-button-scaled.webp)

Finally, GetResponse generates your API key. Click the **Copy** button to copy it. GetResponse shows the key only once, so copy it right away.

![Copy API Key](/images/integrations/email-marketing/integrate-getresponse/6.-Copy-API-Key.webp)

## Connect GetResponse with Fluent Forms

Then, return to the **GetResponse API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.

Paste the **API Key** you copied from **GetResponse** into the **GetResponse API Key** field.

Finally, click **Save** to make your **GetResponse Integration** module functional.

![Paste API Key](/images/integrations/email-marketing/integrate-getresponse/7.-Paste-API-Key-scaled.webp)

Here, you can see that your **GetResponse API integration is up and running**. Your GetResponse is now connected to Fluent Forms.

You can disconnect it anytime by clicking the **Disconnect GetResponse** button if needed.

![Disconnect API Key](/images/integrations/email-marketing/integrate-getresponse/8.-Disconnect-API-Key-scaled.webp)

## Integrate GetResponse into Fluent Forms

First, go to **Forms** in the **Fluent Forms Navbar**, select the form where you want to integrate **GetResponse**, and click **Configuration** in the form's top bar.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/Open-Desired-Form-Settings-4-scaled.webp)

Once you are on the **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click the **Add New Integration** button, and select the **GetResponse Integration** feed from the drawer.

![Add Integration Button Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/10.-Add-New-Integration-button-scaled.webp)

Here, you find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **GetResponse List** from the dropdown where you want to send the submitted form data.

![Getresponse List Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/11.-GetResponse-List-scaled.webp)

Once you select the list, the feed settings open with these options:

1. **Enable This feed:** Keep this toggle on so this integration feed stays enabled and all its actions work properly.
2. **Name:** From here, you can change the feed name anytime if needed.
3. **GetResponse List:** From here, you can change the GetResponse list anytime if needed.
4. **Map Fields:** Use the fields under this option to link your GetResponse fields with the form fields. Select a form field for **Email Address**, which is required. Then use the **Shortcode Icon** to select the value for **Name**.
5. **Autoresponder Cycle:** This lets you set the day on which contacts enter the autoresponder cycle. Otherwise, keep it empty to leave contacts out of the autoresponder.
6. **Conditional Logics:** Check **Enable conditional logic** to run the GetResponse integration only when your submission values match the conditions you set. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

Once the setup is done, finally, click the **Save** button. Your GetResponse is now integrated into this specific form!

![Save Feed Button Integrate GetResponse](/images/integrations/email-marketing/integrate-getresponse/12.-Save-Feed-button-scaled.webp)

After a successful integration, you see that your **GetResponse Integration Feed** is added to the list.

You can modify your feed anytime by clicking the **Edit** icon, duplicate it with the **Copy** icon, and delete it with the **Trash** icon.

Also, you can disable or enable this feed anytime by turning the **Toggle** off or on.

![Added Getresponse Integration Feed](/images/integrations/email-marketing/integrate-getresponse/13.-Added-New-GetResponse-Integration-Feed-scaled.webp)

## Preview of Integrated GetResponse

You can see the form submissions that add **GetResponse** contacts in the **Entries** tab of the form.

![Form Entries Fluent Forms](/images/integrations/email-marketing/integrate-getresponse/14.-Form-Entries-scaled.webp)

This way, you can easily integrate **GetResponse** with **Fluent Forms**!
