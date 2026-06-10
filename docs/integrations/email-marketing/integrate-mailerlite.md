# Integrate MailerLite

**Fluent Forms** integrates [MailerLite](http://mailerlite.com) an email marketing tool that helps you to grow your MailerLite Subscriber list through the users of Fluent Forms. This article will guide you through integrating **MailerLite** with **Fluent Forms** on your **WordPress Site**.  

> [!Note]
> **MailerLite** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable MailerLite Integration

Go to **Integrations** from the **Fluent Forms Navbar**, search for **MailerLite** in the search bar, and open the **MailerLite** integration module.

Turn on the **Toggle** to enable **MailerLite**, then click the **Settings Icon** on the right to open its configuration.

![Enabled Mailerlite Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/1.-Enabled-MailerLite-scaled.webp)

Once you enable MailerLite, you will be asked for the **MailerLite API Key** of your **MailerLite Account**. 

![Mailerlite Settings Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/2.-MailerLite-Settings-scaled.webp)

### Get the MailerLite API URL and API Key

First, log in to your [MailerLite Account](https://accounts.mailerlite.com/?lang=en), and don’t forget to complete the profile setup to get the API Settings under the Integration tabs.

Now, go to **Integrations** and click the **Use** button of **API** under the **MailerLite API** section. 

![Integrations Use Button](/images/integrations/email-marketing/integrate-mailerlite/3.-Integrations-Use-button-scaled.webp)

Click the **Generate new token** button. 

![Generate Token Button](/images/integrations/email-marketing/integrate-mailerlite/4.-Generate-New-Token-button.webp)

Give your token a Name, select what restrictions you want to set, agree with the **Terms of Use**, and click the **Create token** button.

![Create Token Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/5.-Create-Token.webp)

Now, copy/download the API token by clicking the **Copy** or **Download** button.

![Copy API Token](/images/integrations/email-marketing/integrate-mailerlite/6.-Copy-API-Token.webp)

## Connect MailerLite with Fluent Forms

Return to the **MailerLite API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **MailerLite** into the **MailerLite API Key** field and press the **Save Settings** button to make it functional.

![Paste API Key](/images/integrations/email-marketing/integrate-mailerlite/7.-Paste-API-Key-1-scaled.webp)

You can see, your MailerLite is connected to your **Fluent Forms** successfully! 
Also, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect MailerLite** buttons.

![Verifydisconnect Button Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/8.-VerifyDisconnect-button-scaled.webp)

## Integrate MailerLite with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **MailerLite,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/Open-Desired-Form-Settings-6-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **MailerLite Integration** feed from the dropdown list. 

![Add Integration Button Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/9.-Add-New-Integration-button-2-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Group List** of **MailerLite** from the dropdown where you want to send the submitted form data.

![Group List Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/10.-Group-List-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the MailerLite.

1. **Name:** From here, you can change the name anytime if needed.

2. **Group List:** From here, you can change the MailerLite List anytime if needed.

3. **Map Fileds:** Use all the fields under this option to properly link your ActiveCampaign Fields with the Form Fields. You can easily select the value for the form fields based on the ActiveCampaign fields using the Shortcode Arrow.

4. **Conditional Logics:** This option allows MailerLite integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

5. **Resubscribe:** If you check this option, the subscriber who had previously unsubscribed from the MailerLite email list will be reactivated (or resubscribed) to the list.

6. **Enable This Feed:** Check this option to ensure this integration feed remains enabled, and all its actions function properly.

Once the setup is done, click the **Save Feed** button and your **MailerLite** will be integrated into this specific form!

![Save Feed Button Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/11.-Save-Feed-button-2-scaled.webp)

After successful Integration, now you will see that your **MailerLite Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Mailerlite Integration Feed](/images/integrations/email-marketing/integrate-mailerlite/12.-Added-MailerLite-Integration-Feed-scaled.webp)

## Preview of Integrated MailerLite

Here, you can see the preview of added MailerLite Contacts through the Form Entries based on the Integration.

For example, you can see a new **Form Submission** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/13.-Entries-tab-scaled.webp)

Now, go to the **Subscribers** from the left sidebar, open the **Groups** tab, and click the **View Group** button of the selected group you integrated into **Fluent Forms.**

![View Mailerlite Group](/images/integrations/email-marketing/integrate-mailerlite/14.-View-desired-MailerLite-Group-scaled.webp)

You can see, the **user who submitted the form** in **Fluent Forms** are also automatically added to the selected **MailerLite Group/Subscribers.**

![Subscriber Email Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/15.-Subscriber-Email.webp)

Now, you can see the **Subscriber Detail** and **Activity** of this user (Nita Brown) by clicking the email address under the **Subscriber** column. 

![Preview Added Contact Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/16.-Preview-of-added-contact.webp)

This way you can easily integrate MailerLite with Fluent Forms!
