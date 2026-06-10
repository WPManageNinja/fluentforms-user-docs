# Integrate Mailchimp

Integrating [Mailchimp](https://mailchimp.com/) with **Fluent Forms** helps you automatically send a contact list from your WordPress website to your Mailchimp account when a form is submitted.

This article will guide you through integrating **Mailchimp** with **Fluent Forms** on your WordPress Site.

> [!Note]
> **Mailchimp** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/v33r-MzQgaQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Enable Mailchimp Integration

Go to **Integrations** from the Fluent Forms navbar and search for **Mailchimp**.

Enable the **Mailchimp** module, then click the **Settings** icon on the right.

![Enabled Mailchimp Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/1.-Enabled-Mailchimp-scaled.webp)

Once you enable Mailchimp, you will be asked for the **Mailchimp API Key** of your **Mailchimp Account**.

> [!Note]
> If you do not have a Mailchimp account, [create one here](https://login.mailchimp.com/signup/).

![Configure Integrations Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/2.-Configure-Integrations-1-scaled.webp)

### Get the Mailchimp API Key

Log in to your  [Mailchimp Account](https://login.mailchimp.com/?locale=en), go to **Profile** from the top right corner, and click the **Profile** button.

![Profile Icon Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/3.-Profile-Icon-of-Mailchimp-scaled.webp)

Now, open the **Extras** tab and select the **API keys** from the dropdown list.

![Extras API Key Button](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/4.-Extras-API-Key-button-scaled.webp)

Then, press the **Create A Key** button.

![Create API Key Button](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/5.-Create-API-Key-button.webp)

Provide a **Name** for your API key and click the **Generate Key** button.

![Generate API Key](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/6.-Generate-API-Key.webp)

Finally, your Mailchimp API key is generated, copy it by clicking the **Copy to Clipboard** button.

![Copy API Key](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/7.-Copy-API-key.webp)

## Connect Mailchimp with Fluent Forms

Return to the **Mailchimp Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **Mailchimp** into the **Mailchimp API Key** field and press the **Save Settings** button to make your **Mailchimp Integration** module functional.

![Paste API Key](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/8.-Paste-API-Key-scaled.webp)

You can see, your Mailchimp is connected to your **Fluent Forms** successfully.
Also you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect ActiveCampaign** buttons.

![Verifydisconnect API Key](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/9.-VerifyDisconnect-API-Key-scaled.webp)

## Integrate Mailchimp into Fluent Forms

Go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Mailchimp,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/Open-Desired-Form-Settings-5-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Mailchimp Feed** from the dropdown list. 

![Add Integration Button Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/10.-Add-New-Integration-button-1-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Mailchimp List** from the dropdown where you want to send the submitted form data.

![Mailchimp List Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/11.-Mailchimp-List-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the Mailchimp.

1. **Name:** Change the feed name anytime if needed.

2. **List:** Change the Mailchimp list anytime if needed.

3. **Map Fields:** Link your Mailchimp fields with your form fields. Select form field values for each Mailchimp field using the shortcode arrow.

4. **Interest Group:** Map your Mailchimp interest group here.

5. **Tags:** Add tags to Mailchimp contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value are created as a single tag. You can also use shortcodes as tags. **Enable Dynamic Tag Input** lets Mailchimp add customized tags based on submission values according to your conditions.

6. **Notes:** Write a note for contacts. You can also use shortcodes to send dynamic data to Mailchimp.

7. **Enable Double Opt-in:** Validate user information (specifically the email address) before adding the contact.

8. **Enable ReSubscription:** Re-add subscribers who are inactive or were previously unsubscribed to the active list.

9. **Mark as VIP Contact:** Mark contacts as VIP when this option is enabled.

10. **Conditional Logics:** Run this Mailchimp integration based on submission values and your conditional logic. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic-in-fluent-forms).

11. **Enable This Feed:** Keep this integration feed enabled so all actions run properly.

Once the setup is done, click the **Save Feed** button and, your **Mailchimp** will be integrated into this specific form.

![Save Settings Button Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/12.-Save-Settings-button-scaled.webp)

After successful Integration, now you will see that your **Mailchimp Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Mailchimp Integration Feed](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/13.-Added-Mailchimp-Integration-Feed-scaled.webp)

This way you can easily integrate Mailchimp with Fluent Forms!
