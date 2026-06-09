# How to Integrate Brevo (Formerly Sendinblue) with Fluent Forms

**Sendinblue/Brevo** is an integrated Email Marketing, Marketing Automation, and Small Business CRM. Integrating Sendinblue with Fluent Forms helps you to collect customer information from your WordPress website and automatically add it to your Sendinblue/Brevo account when a form is submitted.

This article will guide you through integrating **Brevo (formerly Sendinblue)** with **Fluent Forms** on your WordPress Site.

> [!Note]
> **Brevo** (formerly Sendinblue) requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Sendinblue Integration

Go to **Integrations** from the **Fluent Forms Navbar**, search for **Sendinblue** through the search bar, and get the **Sendinblue** integration module.

Now, turn on the **Toggle** to enable the **Sendinblue**. Then, you will see the Sendinblue’s **Settings Icon** on the right side, click on it.

![Enabled Sendinblue Fluent Forms](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/1.-Enabled-Sendinblue-scaled.webp)

Once you enable Sendinblue, you will be asked for the **Brevo V3 API Key** of your **Sendinblue Account**.

> [!Note]
> If you do not have a Brevo account, [create one here](https://www.brevo.com/free/).

![Brevo API Settings](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/2.-Brevo-API-Settings-scaled.webp)

### Get the Brevo V3 API Key

Log into your  [Sendinblue Account](http://brevo.com), open the **Profile** from the top left corner, and click the **SMTP & API**. 

![Profile Smtp API Option](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/3.-Profile-SMTP-API-option--scaled.webp)

Now, go to the **API Keys** tab and click the **Generate** **a new API key** button.

![Generate API Key](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/4.-Generate-new-API-Key-scaled.webp)

Provide a **Name** for your **API key** and click the **Generate** button.

![Provide Name For API](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/5.-Provide-Name-for-API-scaled.webp)

Finally, your Sendinblue API key is generated, copy it by clicking the **Copy** button.

![Copy API Key](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/6.-copy-API-key-scaled.webp)

## Connect Brevo with Fluent Forms

Then, return to the **Brevo API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **Brevo** into the  **Brevo V3 API Key** field.
Finally, press the **Save Settings** button to make your **Sendinblue Integration** module functional.

![Paste API Key](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/7.-Paste-API-Key-scaled-2.webp)

You can see, your MooSend is connected to your **Fluent Forms** successfully.

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Brevo** buttons. 

![Verifydisconnect Button](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/8.-VerifyDisconnect-button-scaled-2.webp)

## Integrate Sendinblue into Fluent Forms

Go to **Forms** from the Fluent Forms navbar, open the form where you want to add Brevo, and click **Settings**.

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/Open-Desired-Form-Settings-2-scaled-2.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Sendinblue Integration** feed from the dropdown list. 

![Add Integration Button Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/9.-Add-New-Integration-button-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Brevo Segment** from the dropdown where you want to send the submitted form data.

![Brevo Segment List](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/10.-Brevo-segment-list--scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring Sendinblue.

1. **Name:** From here, you can change the name anytime if needed.

2. **Brevo Segment:** From here, you can change the Brevo Subscriber List anytime if needed.

3. **Map Fileds:** Use all the fields under this option to properly link your Sendinblue Fields with the Form Fields. You can easily select the value for the Form Fields based on the Sendinblue Fields using the Shortcode Arrow.

4. **Other Fields:** Using this option, you can also link the Fluent Forms fields with their respective Sendinblue Custom fields. Click the **Plus/Minus** icon in the right corner to add or delete custom fields as needed.

> [!Note]
> **Custom date fields** accept only the **MM/DD/YYYY** format.

5. **Conditional Logics:** This option allows Sendinblue integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

6. **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button. And, your Sendinblue will be integrated into this specific form!

![Save Feed Button Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/11.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **Sendinblue Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Sendinblue Integration Feed](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/12.-Added-Sendinblue-integration-feed-scaled.webp)

### Preview of Integrated Sendinblue

Here, you can see the preview of Sendinblue’s added contacts through the form entries that I set up during the integration.

You can see four form submissions from the **Entries** section of this particular form.

![Entries Tab](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/13.-Entries-tab-scaled-2.webp)

Now, go to the **Contacts** section from the left side menu, open the **Lists** tab, and go to your desired list.

![Subscriber List Brevo](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/14.-New-Subscriber-list-in-brevo-scaled.webp)

Here, you can see that the **users who submitted forms** in **Fluent Forms** are automatically added to the selected **Brevo Contact List.** 

![Preview Added Contacts Integrate Brevo (Formerly Sendinblue)](/images/integrations/email-marketing/how-to-integrate-brevo-formerly-sendinblue-with-fluent-forms/15.-Preview-of-added-contacts.webp)

This way you can easily integrate Sendinblue with Fluent Forms!
