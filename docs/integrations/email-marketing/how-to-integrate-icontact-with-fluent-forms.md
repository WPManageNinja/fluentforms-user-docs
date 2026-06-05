# How to Integrate iContact with Fluent Forms

**Fluent Forms** integrates [iContact](http://icontact.com) an email marketing platform that helps you to collect customer information and automatically adds it to your iContact list through Fluent Forms Submissions.

This article will guide you through integrating **iContact** with **Fluent Forms** on your **WordPress Site**.  

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VR54k_Atnig" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **iContact** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable iContact Integration

To learn how to enable iContact integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **iContact** through the search bar, and get the **iContact** integration module.

Now, turn on the **Toggle** to enable the **iContact**. 
Then, you will see the iContact’s **Settings Icon** on the right side, click on it.

![Enabled Icontact Fluent Forms](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/1.-Enabled-iContact--scaled.webp)

Once you enable iContact, you will be asked for the necessary information (**iContact Application key, Account Email Address, API Password, Account ID,** and **Client Folder ID)** of your **iContact Account**.

> If you don’t have any existing account, click the sign up for one here link to create a new one.

![Icontact API Settings](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/2.-iContact-API-Settings-scaled.webp)

### Get the iContact API URL and API Key

To learn how to get the  **iContact API URL** and **iContact API Key** from **iContact**, follow the steps with screenshots below –

First, log in to your [iContact Account](https://www.icontact.com/login/), go to **Profile** from the top right corner, and click the **Settings and Billing** button.

![Settings Billing Option Integrate iContact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/3.-Settings-Billing-option-scaled.webp)

Click the **iContact Integrations** from the **Settings and Billing** list. 

![Icontact Integrations Option](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/4.-iContact-Integrations-option.webp)

Click the **Create** button of **Custom API Integrations**.

![Custom API Integration Create Button](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/5.-Custom-API-Integration-Create-button-scaled.webp)

Now, you will get your required information for the integration.
Simply, copy all of the required information as shown below through arrows.

Also, give your API a **Name** and **Description** under the **API Information** section and click the **Save Changes** button to save all information.

![Copy All Necessary Information](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/6.-Copy-all-necessary-information.webp)

## Connect iContact with Fluent Forms

Then, return to the **iContact API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste all the required information you copied from iContact into the respective fields (**Application ID** into **Application Key**, **Username/Email Address** into **Account Email Address**, **Password** into **API Password**, **Account ID**, and **Client Folder ID** fields).

Finally, press the **Save Settings** button to make your **iContact Integration** module functional.

![Paste All Copied Information](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/7.-Paste-all-copied-information-scaled.webp)

Here, you can see that your iContact is connected to your **Fluent Forms** successfully.

You can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect iContact** buttons if needed. 

![Verify Or Disconnect Button](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/8.-Verify-or-Disconnect-button-scaled.webp)

## Integrate iContact into Fluent Forms

To learn how to integrate iContact into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **iContact** and click the **Settings** button. 

![Open Settings Integrate iContact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/Open-Desired-Form-Settings-2-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **iContact Integration** feed from the dropdown list. 

![Add Integration Button Integrate iContact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/9.-Add-New-Integration-button-1-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.
Also, you must select the **iContact List** from the dropdown where you want to send the submitted form data.

![Icontct List](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/10.-iContct-List-1-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the iContact.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. iContact List: From here, you can change the iContact List anytime if needed.

1. Map Fileds: Use all the fields under this option to properly link your iContact Fields with the Form Fields. You can easily select the value for the Form Fields based on the iContact fields using the Shortcode Arrow.

1. Conditional Logics: This option allows iContact integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [this documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

1. Enable This Feed: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button.
And, your iContact will be integrated into this specific form!

![Save Feed Button Integrate iContact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/11.-Save-Feed-button-1-scaled.webp)

After successful Integration, now you will see that your **iContact Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Icontact Integration Feed](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/12.-Added-iContact-Integration-Feed-1-scaled.webp)

## Preview of Integrated iContact

Here, you can see the preview of the added contacts of iContact through the Form entries that I set up during the integration.

From the **Entries** section of this particular form, you can see four form submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/13.-New-form-Entries-1-scaled.webp)

Now, go to the **Contacts** section from the left sidebar, open the **Lists** tab, and click the **View Subscriber** button of the selected list you integrated into **Fluent Forms** using **the Three-Dot Icon**.

![View Subscriber Icontact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/14.-View-Subscriber-in-iContact-scaled.webp)

And, you can see that the **users who submitted forms** in **Fluent Forms** are automatically added to the selected **iContact Contact List.**

![Preview Newly Added Contacts Integrate iContact](/images/integrations/email-marketing/how-to-integrate-icontact-with-fluent-forms/15.-Preview-of-newly-added-contacts-scaled.webp)

This way you can easily integrate iContact with Fluent Forms!
