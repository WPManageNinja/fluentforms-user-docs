# How to Integrate Mailjet with Fluent Forms

Integrating **Mailjet** with **Fluent Forms** to automate email marketing, manage subscribers, and streamline email campaigns effortlessly. This article will guide you through integrating **Mailjet** with **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **Mailjet** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Mailjet Integration

To learn how to enable Mailjet integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Mailjet** through the search bar, and get the **Mailjet** integration module.

Now, turn on the **Toggle** to enable **Mailjet**. Then, you will see the Mailjet’s **Settings icon** on the right side, click on it. 

![Enable Mailjet Integrate Mailjet](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/1.-Enable-Mailjet--scaled.webp)

Once you enable **Mailjet**, you will be asked for the **API Key** and the **Secret Key** of your **Mailjet Account**.

> To get the credentials, click the Here link in the Instructions Guide at the top under Mailjet Settings.

![Mailjet Settings Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/2.-Mailjet-Settings-scaled.webp)

### Get the Mailjet API and Secret Key

To learn how to get the **API Key** and **Secret Key** from **Mailjet**, follow the steps with screenshots below – 

First, click this [Link](https://app.mailjet.com/signin?redirect=aHR0cHM6Ly9hcHAubWFpbGpldC5jb20vfDI0fDgyMzU3ZDFmMWE4Y2NjMjc4ZWRhMzI0MDUzZTNlMjY0), log into your **Mailjet Account**, go to the **Profile** in the top right corner, open the dropdown list by clicking the **Arrow Icon**, and click the **Account Settings** button. 

> If you don't have an existing Mailjet account, you can sign up for one here.

![Account Settings Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/3.-Account-Settings-scaled.webp)

Now, go to the **REST API** tab and click the **API Key Management (Primary and subaccount)** option. 

![Rest API Key API Key Management](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/4.-Rest-API-Key-API-Key-Management-scaled.webp)

Once you are on the **API Key Management** page, you will find your **API Key**. Copy it.

Now, to get the Secret Key, click the **Generate Secret Key** button on the right side. 

![Generate Secret Key Button](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/5.-Generate-Secret-Key-button-scaled.webp)

Now, copy the **API Key** and **Secret Key** by clicking the **Copy Icon** on the right side, and press the **Done** button.  

![Copy API And Secret Key](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/6.-Copy-API-and-Secret-Key.webp)

## Connect Mailjet with Fluent Forms

Now, return to the **Mailjet Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Then, paste the **API Key** and **Secret Key** you copied from **Mailjet** into the **Mailjet** **API Key** and the **Mailjet Secret Key** fields respectively. 

Finally, press the **Save Settings** button to save all your changes. 

![Paste API Keys](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/7.-Paste-API-Keys-scaled.webp)

Now, you can see that your **Mailjet** has been successfully connected to your **Fluent Forms**.

You can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Mailjet** button.  

![Verify Or Disconnect Mailjet](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/8.-verify-or-Disconnect-Mailjet-scaled.webp)

## Integrate Mailjet in Forms

To learn how to integrate Mailjet into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Mailjet,** and click the **Settings** button. 

![Open Settings Integrate Mailjet](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/9.-Open-desired-form-Settings-1-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Mailjet Integration** feed from the dropdown list. 

![Add Integration Dropdown Integrate Mailjet](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/10.-Add-new-integration-dropdown-1-scaled.webp)

Now, a page will appear with various settings options for configuring the Mailjet. 

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. Mailjet Services: From here, you need to select your desired Mailjet Services to which you want to send the form submission data from Fluent Forms. You can also change the contact list anytime if needed.

1. Exclude the Contact: From here, you can select whether the contact is added to the exclusion list or not by clicking the Yes or No button.

1. Contact Email: Use this field to map the Mailjet Contact’s Email fields with the Form’s Email fields. Also, you can easily select the Value for the Email Fields using the Shortcode button.

1. Contact Name: Use this field to map the Mailjet Contact’s Name fields with the Form’s Name fields. Also, you can easily select the Value for the Name Fields using the Shortcode button.

1. Conditional Logics: This option allows Mailjet integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [this documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

1. Enable This Feed: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button. And, your Mailjet will be integrated into this specific form!

![Save Feed Integrate Mailjet](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/11.-Save-Feed--scaled.webp)

After successful Integration, now you will see that your **Mailjet Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Mailjet Integration Feed](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/12.-Added-Mailjet-Integration-Feed--scaled.webp)

## Preview of Integrated Mailjet

Here, you can see the preview of added **Contacts** of **Mailjet** through the Form Entries based on the Integration.

For example, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Fluent Forms](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/13.-Form-Entries-1-scaled.webp)

Now, go to your [Mailjet](http://mailjet.com) account, open the **Contacts** dropdown from the left sidebar, and click the **All Contacts** tab.

You can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Mailjet** **Contacts**. 

![Mailjet Contact Preview](/images/integrations/email-marketing/how-to-integrate-mailjet-with-fluent-forms/14.-Mailjet-Contact-Preview-scaled.webp)

This way you can easily integrate Mailjet with Fluent Forms!
