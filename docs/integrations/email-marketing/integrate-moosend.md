---
description: "Integrating MooSend with Fluent Forms allows you to collect customer information and automatically add it to the MooSend Subscriber list."
---

# Integrate MooSend

The **MooSend** integration collects customer information from your forms and adds it to your MooSend subscriber list automatically. This guide shows you how to connect **MooSend** with **Fluent Forms** on your **WordPress site**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/_t1Cvo3EUtE" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **MooSend** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable MooSend Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **MooSend**, and open the **MooSend** integration module.

Turn on the **Toggle** to enable **MooSend**, then click **Manage** on the right to open its configuration.

![Enabled Moosend Fluent Forms](/images/integrations/email-marketing/integrate-moosend/1.-Enabled-Moosend-scaled.webp)

Once you enable MooSend, Fluent Forms asks for the **MooSend API Key** of your **MooSend Account**.

![Moosend API Settings](/images/integrations/email-marketing/integrate-moosend/2.-MooSend-API-Settings-scaled.webp)

## Get the MooSend API Key

1. Log in to your [MooSend Account](https://app.moosend.com/) and go to **Settings** in the left sidebar.
2. Open the **More** dropdown in the top navbar and go to **Settings**.

![Settings Video Integrate MooSend](/images/integrations/email-marketing/integrate-moosend/3.-Settings-video-scaled.webp)

3. Click **API Key**.
4. Click **Copy** to copy your **API Key.** To create a new key, click **Generate new API Key**.

![Copy API Key](/images/integrations/email-marketing/integrate-moosend/4.-Copy-API-Key.webp)

## Connect MooSend with Fluent Forms

1. Return to the **MooSend API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **MooSend** into the **MooSend API Key** field.
3. Click **Save** to activate the **MooSend Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-moosend/5.-Paste-ApI-Key-scaled.webp)

Fluent Forms now shows that your MooSend account is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect MooSend** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-moosend/6.-Verify-or-Disconnect-button-scaled.webp)

## Integrate MooSend in Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **MooSend**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate MooSend](/images/integrations/email-marketing/integrate-moosend/Open-Desired-Form-Settings-1-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **MooSend Integration** from the drawer.

![Add Integration Button Integrate MooSend](/images/integrations/email-marketing/integrate-moosend/7.-Add-new-Integration-button-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **MooSend Mailing List** that receives the submitted form data.

![Moosend Mailing List](/images/integrations/email-marketing/integrate-moosend/8.-MooSend-Mailing-List-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **MooSend Mailing Lists:** Change the MooSend mailing list at any time.
3. **Map Fields:** Link your MooSend fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Double Opt-in:** Enable this option to send a confirmation email before adding the contact.
5. **Conditional Logics:** Run the MooSend integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. MooSend is now connected to this form.

![Save Feed Button Integrate MooSend](/images/integrations/email-marketing/integrate-moosend/9.-Save-Feed-button-scaled-2.webp)

The **MooSend Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Moosend Integration Feed](/images/integrations/email-marketing/integrate-moosend/10.-Added-MooSend-Integration-Feed-scaled.webp)

### Preview of Integrated MooSend

You can see the form submissions that add MooSend contacts in the **Entries** section of the form. In this example, the form has four submissions.

![Entries Newly Added Subscribers](/images/integrations/email-marketing/integrate-moosend/11.-Entries-of-newly-added-Subscribers-scaled.webp)

Open **Audiences** in the top navbar, then open the **Email Lists** tab. The **users who submitted forms** in **Fluent Forms** now appear in the selected **MooSend Contact List.**

![Preview Added Audiences Integrate MooSend](/images/integrations/email-marketing/integrate-moosend/12.-Preview-of-added-audiences-scaled.webp)
