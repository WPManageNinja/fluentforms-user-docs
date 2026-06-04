# How to Integrate ActiveCampaign with Fluent Forms

**Fluent Forms** integrates with [ActiveCampaign](https://www.activecampaign.com/), a marketing automation tool that helps you collect customer information and automatically adds it to your ActiveCampaign list through Fluent Forms Submissions. 

This article will guide you through integrating **ActiveCampaign** with **Fluent Forms** on your **WordPress Site**. 

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/F4i2RIyGZbM" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> Remember, ActiveCampaign is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable ActiveCampaign Integration

To learn how to enable ActiveCampaign integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **ActiveCampaign** through the search bar, and get the **ActiveCampaign** integration module.

Now, turn on the **Toggle** to enable the **ActiveCampaign** module, and click the **Settings Icon** on the right side. 

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/1.-Enable-ActiveCampaign-scaled.webp)

Once you enable ActiveCampaign, you will be asked for the **ActiveCampaign API URL** and **ActiveCampaign API Key** of your **ActiveCampaign Account**.

> If you don’t have an existing account, click the sign up for one here link to create a new one.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/2.-ActiveCampaign-API-Settings-page-scaled.webp)

### Get the ActiveCampaign API URL and API Key

To learn how to get the  **ActiveCampaign API URL** and **ActiveCampaign API Key** from **ActiveCampaign**, follow the steps with screenshots below –

First, log in to your [Active Campaign Account](https://www.activecampaign.com/login) and go to **Settings** from the left sidebar.

Now, open the **Developer** tab and you copy your desired **API URL** and **API Key** by clicking the **Copy API URL** and **Copy API Key** buttons.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/3.-Copy-ActiveCampaign-API-URL-and-Key-scaled.webp)

## Connect ActiveCampaign with Fluent Forms

Return to the **ActiveCampaign API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API URL** and **API Key** you copied from **ActiveCampaign** into the **ActiveCampaign API URL** and **ActiveCampaign API Key** fields respectively. 

Finally, press the **Save Setting**s button to make your **ActiveCampaign Integration** module functional.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/4.-Paste-API-URL-and-Key-scaled.webp)

You can see your ActiveCampaign is connected to your **Fluent Forms** successfully!
Also, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect ActiveCampaign** buttons.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/5.-Integreted-ActiveCampaign-scaled.webp)

## Integrate ActiveCampaign into Fluent Forms

To learn how to integrate ActiveCampaign into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **ActiveCampaign** and click the **Settings** button. 

> If you do not have any existing forms, read the [Create a Form from Scratch or Create a Form using Templates](/docs/how-to-create-a-form-with-fluent-forms) documentation to create a new one.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/6.-Desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **ActiveCampaign Integration** feed from the dropdown list. 

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/7.-Configure-Integrations-page-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.
Also, you must select the **ActiveCampaign List** from the dropdown where you want to send the submitted form data.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/8.-Add-new-ActiveCampaign-Integration-Feed-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the ActiveCampaign.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. ActiveCampaign List: Using the Arrow Icon, you can select the ActiveCampaign Mailing List where you want to add your contacts. You can also change this anytime if needed.

1. Map Fileds: Use all the fields under this option to properly link your ActiveCampaign Fields with the Form Fields. You can easily select the value for the form fields based on the ActiveCampaign fields using the Shortcode Arrow.

1. Tags: With this option, you can add tags to your ActiveCampaign contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag. Enable Dynamic Tag Input: This option allows you to add customized tags for specific ActiveCampaign contacts based on your submission values according to your set conditions.

1. Note: This option allows you to write a note for the contacts. You can also use Shortcodes to send dynamic data to ActiveCampaign.

1. Double Opt-In Form: Here, you can select which ActiveCampaign Form will send the opt-in email when exporting contacts to ActiveCampaign.

1. Enable Instant Responder: Check this option, and ActiveCampaign will send any instant responders set up when the contact is added to the list. This option is not available to users on a free trial.

1. Enable Send the last broadcast campaign: Check this option, and ActiveCampaign will send the last campaign to the list or add the contact. This option is also not available to users on a free trial.

1. Conditional Logics: This option allows ActiveCampaign integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [this documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

1. Enable This Feed: Check this option to ensure this integration feed remains enabled, and all its actions function properly.

Once the setup is done, click the **Save Feed** button and, your **ActiveCampaign** will be integrated into this specific form.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/9.-Save-Settings-button-scaled.webp)

After successful integration, now you will see that your **ActiveCampaign Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/10.-Added-ActiveCampaign-Integration-feed-scaled.webp)

## Preview of Integrated ActiveCampaign

Here, you can see the preview of added ActiveCampaign Contacts through the Form Entries based on the Integration.

For example, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/11.-New-Entries-scaled.webp)

Now, go to the **ActiveCampaign** **Contacts** section from the left sidebar, open the **Lists** tab, and click on the **Desired Lis**t you integrated into **Fluent Forms**.

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/12.-Contacts-Lists-ActiveCampaign-scaled.webp)

You can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **ActiveCampaign Contact List**.  

![](/images/integrations/email-marketing/how-to-integrate-activecampaign-with-fluent-forms/13.-Preview-of-added-FluentForms-Users-in-ActiveCampaign-scaled.webp)

This way you can easily integrate ActiveCampaign with Fluent Forms!
