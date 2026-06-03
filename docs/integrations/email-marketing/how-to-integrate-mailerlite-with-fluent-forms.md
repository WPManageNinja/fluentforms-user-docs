# How to Integrate MailerLite with Fluent Forms

**Fluent Forms** integrates [MailerLite](http://mailerlite.com) an email marketing tool that helps you to grow your MailerLite Subscriber list through the users of Fluent Forms. This article will guide you through integrating **MailerLite** with **Fluent Forms** on your **WordPress Site**.  

> Remember, MailerLite is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable MailerLite Integration

To learn how to enable MailerLite integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **MailerLite** through the search bar, and get the **MailerLite** integration module.

Now, turn on the **Toggle** to enable the **MailerLite** module, and click the **Settings Icon** on the right side. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/1.-Enabled-MailerLite-scaled.webp)

Once you enable MailerLite, you will be asked for the **MailerLite API Key** of your **MailerLite Account**. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/2.-MailerLite-Settings-scaled.webp)

### Get the MailerLite API URL and API Key

To learn how to get the  **MailerLite API URL** and **MailerLite API Key** from **MailerLite**, follow the steps with screenshots below –

First, log in to your [MailerLite Account](https://accounts.mailerlite.com/?lang=en), and don’t forget to complete the profile setup to get the API Settings under the Integration tabs.

Now, go to **Integrations** and click the **Use** button of **API** under the **MailerLite API** section. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/3.-Integrations-Use-button-scaled.webp)

Click the **Generate new token** button. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/4.-Generate-New-Token-button.webp)

Give your token a Name, select what restrictions you want to set, agree with the **Terms of Use**, and click the **Create token** button.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/5.-Create-Token.webp)

Now, copy/download the API token by clicking the **Copy** or **Download** button.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/6.-Copy-API-Token.webp)

## Connect MailerLite with Fluent Forms

Return to the **MailerLite API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **MailerLite** into the **MailerLite API Key** field and press the **Save Settings** button to make it functional.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/7.-Paste-API-Key-1-scaled.webp)

You can see, your MailerLite is connected to your **Fluent Forms** successfully! 
Also, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect MailerLite** buttons.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/8.-VerifyDisconnect-button-scaled.webp)

## Integrate MailerLite with Forms

To learn how to integrate MailerLite into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **MailerLite,** and click the **Settings** button. 

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/Open-Desired-Form-Settings-6-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **MailerLite Integration** feed from the dropdown list. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/9.-Add-New-Integration-button-2-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Group List** of **MailerLite** from the dropdown where you want to send the submitted form data.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/10.-Group-List-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the MailerLite.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. Group List: From here, you can change the MailerLite List anytime if needed.

1. Map Fileds: Use all the fields under this option to properly link your ActiveCampaign Fields with the Form Fields. You can easily select the value for the form fields based on the ActiveCampaign fields using the Shortcode Arrow.

1. Conditional Logics: This option allows MailerLite integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

1. Resubscribe: If you check this option, the subscriber who had previously unsubscribed from the MailerLite email list will be reactivated (or resubscribed) to the list.

1. Enable This Feed: Check this option to ensure this integration feed remains enabled, and all its actions function properly.

Once the setup is done, click the **Save Feed** button and your **MailerLite** will be integrated into this specific form!

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/11.-Save-Feed-button-2-scaled.webp)

After successful Integration, now you will see that your **MailerLite Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/12.-Added-MailerLite-Integration-Feed-scaled.webp)

## Preview of Integrated MailerLite

Here, you can see the preview of added MailerLite Contacts through the Form Entries based on the Integration.

For example, you can see a new **Form Submission** under the **Entries** tab on this particular form.

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/13.-Entries-tab-scaled.webp)

Now, go to the **Subscribers** from the left sidebar, open the **Groups** tab, and click the **View Group** button of the selected group you integrated into **Fluent Forms.**

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/14.-View-desired-MailerLite-Group-scaled.webp)

You can see, the **user who submitted the form** in **Fluent Forms** are also automatically added to the selected **MailerLite Group/Subscribers.**

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/15.-Subscriber-Email.webp)

Now, you can see the **Subscriber Detail** and **Activity** of this user (Nita Brown) by clicking the email address under the **Subscriber** column. 

![](/images/integrations/email-marketing/how-to-integrate-mailerlite-with-fluent-forms/16.-Preview-of-added-contact.webp)

This way you can easily integrate MailerLite with Fluent Forms!
