# How to Integrate Mailchimp with Fluent Forms

Integrating [Mailchimp](https://mailchimp.com/) with **Fluent Forms** helps you automatically send a contact list from your WordPress website to your Mailchimp account when a form is submitted.

This article will guide you through integrating **Mailchimp** with **Fluent Forms** on your WordPress Site.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/v33r-MzQgaQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> Mailchimp is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Mailchimp Integration

To learn how to enable Mailchimp integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Mailchimp** through the search bar, and get the **Mailchimp** integration module.

Now, turn on the **Toggle** to enable the **Mailchimp** module, and click the **Settings Icon** on the right side. 

![Enabled Mailchimp Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/1.-Enabled-Mailchimp-scaled.webp)

Once you enable Mailchimp, you will be asked for the **Mailchimp API Key** of your **Mailchimp Account**.

> If you don’t have any existing account, click the sign up for one here link to create a new one.

![Configure Integrations Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/2.-Configure-Integrations-1-scaled.webp)

### Get the Mailchimp API Key

To learn how to get the **Mailchimp API Key** from **Mailchimp**, follow the steps with screenshots below –

First, log in to your  [Mailchimp Account](https://login.mailchimp.com/?locale=en), go to **Profile** from the top right corner, and click the **Profile** button.

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

To learn how to integrate Mailchimp into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Mailchimp,** and click the **Settings** button. 

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![Open Settings Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/Open-Desired-Form-Settings-5-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Mailchimp Feed** from the dropdown list. 

![Add Integration Button Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/10.-Add-New-Integration-button-1-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.
Also, you must select the **Mailchimp List** from the dropdown where you want to send the submitted form data.

![Mailchimp List Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/11.-Mailchimp-List-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the Mailchimp.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. List: From here, you can change the Mailchimp List anytime if needed.

1. Map Fileds: Use all the fields under this option to properly link your Mailchimp Fields with the Form Fields. You can easily select the value for the form fields based on the Mailchimp Fields using the Shortcode Arrow.

1. Interest Group: With this option, you can map your MailChimp’s Interest group here.

1. Tags: With this option, you can add tags to your ActiveCampaign contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag.Enable Dynamic Tag Input: This option allows Mailchimp to add customized tags for specific contacts based on your submission values according to your set conditions.

1. Notes: You can write a note for the contacts. You can also use Shortcodes to send dynamic data to Mailchimp.

1. Enable Double Opt-in: Enable this option if you want to check the validation of the user information (specifically user email).

1. Enable ReSubscription: When this option is enabled, if the subscriber is in an inactive state or has previously been unsubscribed, they will be re-added to the active list.

1. Mark as VIP Contact: When you enable this option, contacts will be marked as VIP.

1. Conditional Logics: This option allows Mailchimp integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

1. Enable This Feed: Check this option to ensure this integration feed remains enabled, and all its actions function properly.

Once the setup is done, click the **Save Feed** button and, your **Mailchimp** will be integrated into this specific form.

![Save Settings Button Integrate Mailchimp](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/12.-Save-Settings-button-scaled.webp)

After successful Integration, now you will see that your **Mailchimp Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Mailchimp Integration Feed](/images/integrations/email-marketing/how-to-integrate-mailchimp-with-fluent-forms/13.-Added-Mailchimp-Integration-Feed-scaled.webp)

This way you can easily integrate Mailchimp with Fluent Forms!
