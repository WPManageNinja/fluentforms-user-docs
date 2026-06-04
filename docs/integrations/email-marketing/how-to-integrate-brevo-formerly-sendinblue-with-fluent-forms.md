# How to Integrate Brevo (Formerly Sendinblue) with Fluent Forms

**Sendinblue/Brevo** is an integrated Email Marketing, Marketing Automation, and Small Business CRM. Integrating Sendinblue with Fluent Forms helps you to collect customer information from your WordPress website and automatically add it to your Sendinblue/Brevo account when a form is submitted.

This article will guide you through integrating **Brevo (formerly Sendinblue)** with **Fluent Forms** on your WordPress Site.

> Remember, Sendinblue has changed its name to Brevo. It is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin for the integration.

## Enable Sendinblue Integration

To learn how to enable Sendinblue integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Sendinblue** through the search bar, and get the **Sendinblue** integration module.

Now, turn on the **Toggle** to enable the **Sendinblue**. Then, you will see the Sendinblue’s **Settings Icon** on the right side, click on it.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/1.-Enabled-Sendinblue-scaled.webp)

Once you enable Sendinblue, you will be asked for the **Brevo V3 API Key** of your **Sendinblue Account**.

> If you don’t have an existing account, click the sign up for one here link to create a new one.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/2.-Brevo-API-Settings-scaled.webp)

### Get the Brevo V3 API Key

To learn how to get the **Brevo V3 API Key** from **Brevo/Sendinblue**, follow the steps with screenshots below –

First, log into your  [Sendinblue Account](http://brevo.com), open the **Profile** from the top left corner, and click the **SMTP & API**. 

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/3.-Profile-SMTP-API-option--scaled.webp)

Now, go to the **API Keys** tab and click the **Generate** **a new API key** button.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/4.-Generate-new-API-Key-scaled.webp)

Provide a **Name** for your **API key** and click the **Generate** button.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/5.-Provide-Name-for-API-scaled.webp)

Finally, your Sendinblue API key is generated, copy it by clicking the **Copy** button.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/6.-copy-API-key-scaled.webp)

## Connect Brevo with Fluent Forms

Then, return to the **Brevo API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **Brevo** into the  **Brevo V3 API Key** field.
Finally, press the **Save Settings** button to make your **Sendinblue Integration** module functional.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/7.-Paste-API-Key-scaled-2.webp)

You can see, your MooSend is connected to your **Fluent Forms** successfully.

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Brevo** buttons. 

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/8.-VerifyDisconnect-button-scaled-2.webp)

## Integrate Sendinblue into Fluent Forms

To learn how to integrate Sendinblue into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Sendinblue,** and click the **Settings** button. 

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/Open-Desired-Form-Settings-2-scaled-2.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Sendinblue Integration** feed from the dropdown list. 

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/9.-Add-New-Integration-button-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Brevo Segment** from the dropdown where you want to send the submitted form data.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/10.-Brevo-segment-list--scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring Sendinblue.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. Brevo Segment: From here, you can change the Brevo Subscriber List anytime if needed.

1. Map Fileds: Use all the fields under this option to properly link your Sendinblue Fields with the Form Fields. You can easily select the value for the Form Fields based on the Sendinblue Fields using the Shortcode Arrow.

1. Other Fields: Using this option, you can also link the Fluent Forms fields with their respective Sendinblue Custom fields. But, remember, Custom Date fields support only MM/DD/YYYY format. Also, by clicking the Plus/Minus Icon in the right corner, you can Add/Delete custom fields as per your needs.

1. Conditional Logics: This option allows Sendinblue integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

1. Enable This Feed: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button. And, your Sendinblue will be integrated into this specific form!

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/11.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **Sendinblue Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/12.-Added-Sendinblue-integration-feed-scaled.webp)

## Preview of Integrated Sendinblue

Here, you can see the preview of Sendinblue’s added contacts through the form entries that I set up during the integration.

You can see four form submissions from the **Entries** section of this particular form.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/13.-Entries-tab-scaled-2.webp)

Now, go to the **Contacts** section from the left side menu, open the **Lists** tab, and go to your desired list.

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/14.-New-Subscriber-list-in-brevo-scaled.webp)

Here, you can see that the **users who submitted forms** in **Fluent Forms** are automatically added to the selected **Brevo Contact List.** 

![](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/15.-Preview-of-added-contacts.webp)

This way you can easily integrate Sendinblue with Fluent Forms!
