# Integrate ActiveCampaign

**Fluent Forms** integrates with [ActiveCampaign](https://www.activecampaign.com/), a marketing automation tool that helps you collect customer information and automatically adds it to your ActiveCampaign list through Fluent Forms Submissions. 

This article will guide you through integrating **ActiveCampaign** with **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **ActiveCampaign** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/F4i2RIyGZbM" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Enable ActiveCampaign Integration

Go to **Integrations** from the Fluent Forms navbar and search for **ActiveCampaign**.

Enable the **ActiveCampaign** module, then click the **Settings** icon on the right.

![Enable Activecampaign Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/1.-Enable-ActiveCampaign-scaled.webp)

Once you enable ActiveCampaign, you will be asked for the **ActiveCampaign API URL** and **ActiveCampaign API Key** of your **ActiveCampaign Account**.

> [!Note]
> If you do not have an ActiveCampaign account, [create one here](https://www.activecampaign.com/free).

![Activecampaign API Settings Page](/images/integrations/email-marketing/integrate-activecampaign/2.-ActiveCampaign-API-Settings-page-scaled.webp)

### Get the ActiveCampaign API URL and API Key

Log in to your [ActiveCampaign account](https://www.activecampaign.com/login), open **Settings** from the left sidebar, and go to the **Developer** tab.

Click **Copy API URL** and **Copy API Key** to copy both credentials.

![Copy Activecampaign API URL And Key](/images/integrations/email-marketing/integrate-activecampaign/3.-Copy-ActiveCampaign-API-URL-and-Key-scaled.webp)

## Connect ActiveCampaign with Fluent Forms

Return to the **ActiveCampaign API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API URL** and **API Key** you copied from **ActiveCampaign** into the **ActiveCampaign API URL** and **ActiveCampaign API Key** fields respectively. 

Finally, press the **Save Settings** button to make your **ActiveCampaign Integration** module functional.

![Paste API URL And Key](/images/integrations/email-marketing/integrate-activecampaign/4.-Paste-API-URL-and-Key-scaled.webp)

You can see your ActiveCampaign is connected to your **Fluent Forms** successfully!
Also, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect ActiveCampaign** buttons.

![Integreted Activecampaign Fluent Forms](/images/integrations/email-marketing/integrate-activecampaign/5.-Integreted-ActiveCampaign-scaled.webp)

## Integrate ActiveCampaign into Fluent Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **ActiveCampaign** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/6.-Desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **ActiveCampaign Integration** feed from the dropdown list. 

![Configure Integrations Page Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/7.-Configure-Integrations-page-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **ActiveCampaign List** from the dropdown where you want to send the submitted form data.

![Add Activecampaign Integration Feed Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/8.-Add-new-ActiveCampaign-Integration-Feed-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the ActiveCampaign.

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **ActiveCampaign List:** Using the Arrow Icon, you can select the ActiveCampaign Mailing List where you want to add your contacts. You can also change this anytime if needed.

3. **Map Fileds:** Use all the fields under this option to properly link your ActiveCampaign Fields with the Form Fields. You can easily select the value for the form fields based on the ActiveCampaign fields using the Shortcode Arrow.

4. **Tags:** With this option, you can add tags to your ActiveCampaign contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag. 

  * **Enable Dynamic Tag Input:** This option allows you to add customized tags for specific ActiveCampaign contacts based on your submission values according to your set conditions.

5. **Note:** This option allows you to write a note for the contacts. You can also use Shortcodes to send dynamic data to ActiveCampaign.

6. **Double Opt-In Form:** Here, you can select which ActiveCampaign Form will send the opt-in email when exporting contacts to ActiveCampaign.

7. **Enable Instant Responder:** Check this option, and ActiveCampaign will send any instant responders set up when the contact is added to the list. This option is not available to users on a free trial.

8. **Enable Send the last broadcast campaign:** Check this option, and ActiveCampaign will send the last campaign to the list or add the contact. This option is also not available to users on a free trial.

9. **Conditional Logics:** This option allows ActiveCampaign integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

10. **Enable This Feed:** Check this option to ensure this integration feed remains enabled, and all its actions function properly.

Once the setup is done, click the **Save Feed** button and, your **ActiveCampaign** will be integrated into this specific form.

![Save Settings Button Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/9.-Save-Settings-button-scaled.webp)

After successful integration, now you will see that your **ActiveCampaign Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Activecampaign Integration Feed](/images/integrations/email-marketing/integrate-activecampaign/10.-Added-ActiveCampaign-Integration-feed-scaled.webp)

### Preview of Integrated ActiveCampaign

Here, you can see the preview of added ActiveCampaign Contacts through the Form Entries based on the Integration.

For example, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-activecampaign/11.-New-Entries-scaled.webp)

Now, go to the **ActiveCampaign** **Contacts** section from the left sidebar, open the **Lists** tab, and click on the **Desired List** you integrated into **Fluent Forms**.

![Contacts Lists Activecampaign](/images/integrations/email-marketing/integrate-activecampaign/12.-Contacts-Lists-ActiveCampaign-scaled.webp)

You can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **ActiveCampaign Contact List**.  

![Preview Added Users Activecampaign Integrate ActiveCampaign](/images/integrations/email-marketing/integrate-activecampaign/13.-Preview-of-added-FluentForms-Users-in-ActiveCampaign-scaled.webp)

This way you can easily integrate ActiveCampaign with Fluent Forms!
