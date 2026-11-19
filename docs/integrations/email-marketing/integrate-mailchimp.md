---
description: "Integrating Mailchimp with Fluent Forms helps you automatically send a contact list from your WordPress website to your Mailchimp account when a form is…"
---

# Integrate Mailchimp

The [Mailchimp](https://mailchimp.com/) integration sends a contact list from your WordPress website to your Mailchimp account when a form is submitted. This guide shows you how to connect **Mailchimp** with **Fluent Forms** on your WordPress site.

> [!Note]
> **Mailchimp** is included in the free **Fluent Forms** plugin. You do not need Fluent Forms Pro.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/v33r-MzQgaQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Enable Mailchimp Integration

Go to **Integrations** in the Fluent Forms navbar and search for **Mailchimp**. Enable the **Mailchimp** module, then click **Manage** on the right.

![Enabled Mailchimp Fluent Forms](/images/integrations/email-marketing/integrate-mailchimp/1.-Enabled-Mailchimp-scaled.webp)

Once you enable Mailchimp, Fluent Forms asks for the **Mailchimp API Key** of your **Mailchimp Account**.

> [!Note]
> If you do not have a Mailchimp account, [create one here](https://login.mailchimp.com/signup/).

![Configure Integrations Integrate Mailchimp](/images/integrations/email-marketing/integrate-mailchimp/2.-Configure-Integrations-1-scaled.webp)

### Get the Mailchimp API Key

1. Log in to your [Mailchimp Account](https://login.mailchimp.com/?locale=en).
2. Click **Profile** in the top right corner, then click **Profile** again.

![Profile Icon Mailchimp](/images/integrations/email-marketing/integrate-mailchimp/3.-Profile-Icon-of-Mailchimp-scaled.webp)

3. Open the **Extras** tab and select **API keys** from the dropdown list.

![Extras API Key Button](/images/integrations/email-marketing/integrate-mailchimp/4.-Extras-API-Key-button-scaled.webp)

4. Click **Create A Key**.

![Create API Key Button](/images/integrations/email-marketing/integrate-mailchimp/5.-Create-API-Key-button.webp)

5. Enter a **Name** for your API key and click **Generate Key**.

![Generate API Key](/images/integrations/email-marketing/integrate-mailchimp/6.-Generate-API-Key.webp)

6. Click **Copy to Clipboard** to copy your Mailchimp API key.

![Copy API Key](/images/integrations/email-marketing/integrate-mailchimp/7.-Copy-API-key.webp)

## Connect Mailchimp with Fluent Forms

1. Return to the **Mailchimp Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **Mailchimp** into the **Mailchimp API Key** field.
3. Click **Save** to activate the **Mailchimp Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-mailchimp/8.-Paste-API-Key-scaled.webp)

Fluent Forms now shows that Mailchimp is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Mailchimp** to disconnect it.

![Verifydisconnect API Key](/images/integrations/email-marketing/integrate-mailchimp/9.-VerifyDisconnect-API-Key-scaled.webp)

## Integrate Mailchimp into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Mailchimp**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Mailchimp](/images/integrations/email-marketing/integrate-mailchimp/Open-Desired-Form-Settings-5-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **Mailchimp Feed** from the drawer.

![Add Integration Button Integrate Mailchimp](/images/integrations/email-marketing/integrate-mailchimp/10.-Add-New-Integration-button-1-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **Mailchimp List** that receives the submitted form data.

![Mailchimp List Fluent Forms](/images/integrations/email-marketing/integrate-mailchimp/11.-Mailchimp-List-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **List:** Change the Mailchimp list at any time.
3. **Map Fields:** Link your Mailchimp fields with your form fields. Use the shortcode arrow to select the form field value for each Mailchimp field.
4. **Interest Group:** Map your Mailchimp interest group here.
5. **Tags:** Add tags to Mailchimp contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use shortcodes as tags. **Enable Dynamic Tag Input** lets Mailchimp add customized tags based on submission values and your conditions.
6. **Note:** Write a note for contacts. You can also use shortcodes to send dynamic data to Mailchimp.
7. **Enable Double Opt-in:** Validate user information (specifically the email address) before adding the contact.
8. **Enable ReSubscription:** Re-add subscribers who are inactive or were previously unsubscribed to the active list.
9. **Mark as VIP Contact:** Mark contacts as VIP when this option is enabled.
10. **Conditional Logics:** Run this Mailchimp integration based on submission values and your conditional logic. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
11. **Enable This Feed:** Keep this integration feed enabled so all actions run.

Click **Save** when the setup is done. **Mailchimp** is now connected to this form.

![Save Settings Button Integrate Mailchimp](/images/integrations/email-marketing/integrate-mailchimp/12.-Save-Settings-button-scaled.webp)

The **Mailchimp Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Mailchimp Integration Feed](/images/integrations/email-marketing/integrate-mailchimp/13.-Added-Mailchimp-Integration-Feed-scaled.webp)
