# How to Integrate CleverReach with Fluent Forms

Integrating **CleverReach** with **Fluent Forms** allows you to grow your CleverReach Subscriber list through the users of Fluent Forms. This article will guide you through integrating **CleverReach** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **CleverReach** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable CleverReach Integration

To learn how to enable CleverReach integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **CleverReach** through the search bar, and get the **CleverReach** integration module.

Now, turn on the **Toggle** to enable the **CleverReach**.
Then, you will see the CleverReach’s **Settings Icon** on the right side, click on it. 

![Enabled Cleverreach Fluent Forms](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/1.-Enabled-CleverReach-scaled.webp)

Once you enable CleverReach, you will be asked for the **CleverReach Client ID** and **CleverReach Client Secret** of your **CleverReach Account**. 

![Cleverreach Client ID And Secret](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/2.-CleverReach-Client-ID-and-Secret-scaled.webp)

### Get the CleverReach Client ID and Secret

To learn how to get the  **CleverReach Client ID** and **CleverReach Client Secret** from **CleverReach**, follow the steps with screenshots below – 

First, log in to your [CleverReach Account](https://www.cleverreach.com/en-de/login/), go to **Profile** from the top right corner, and click the **My Account** button. 

![Profile Icon My Account Page](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/3.-Profile-Icon-My-Account-page-scaled.webp)

Now, open the **Interfaces** dropdown list and go to the **Rest API** option.

![Rest API Option](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/4.-Rest-API-option-scaled.webp)

Click the **Create OAuth2 app** button.

![Create Oath2 App](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/5.-Create-Oath2-App.webp)

Then give your OAuth **App** a **Name**, choose **REST API Version 3** from the dropdown list, keep the **Redirect URL ( * )**, select the **Scopes** as **Recipients** and **Forms**, and press the **Create Now** button. 

![Create Now Button](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/6.-Create-Now-button.webp)

Once you created the OAuth2 app, click the **Three-dot Icon** in the right corner, and go to the **Edit** page of that app. 

![Edit Button Newly Created Rest API Integrate CleverReach](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/7.-Edit-button-of-newly-created-rest-API.webp)

Now go to the **Oauth2 App Data** tab and copy the **Client ID** and **Client Secret** by clicking the **Copy Icon**.

![Copy Client ID And Secret](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/8.-Copy-Client-ID-and-Secret-1.webp)

## Connect CleverReach with Fluent Forms

Then, return to the **CleverReach Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **Client ID** and **Client Secret** you copied from **CleverReach** into the **CleverReach**  **Client ID** and **CleverReach Client Secret** fields respectively.

Finally, press the **Save Settings** button to save your all changes.

![Paste Client ID And Secret](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/9.-Paste-Client-ID-and-Secret-scaled.webp)

Once you click the **Save Settings**, it will redirect you to the **CleverReach Login Portal** again to connect it with **Fluent Forms** and make the integration functional. 

Now, provide your **Login Information** (**Customer ID, User Name**, and **User password**), and click the **login now & connect the Fluent Forms** button.

![Login Now And Connect Button](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/10.-Login-now-and-connect-Fluent-Form-button.webp)

You can find your **CleverReach** **Customer ID** under the **Profile Menu** beside the **Account** option. 

![Customer ID Or Account Number](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/11.-Customer-ID-or-Account-Number-scaled.webp)

Now, you can see, your **CleverReach** is connected to your **Fluent Forms** successfully.
You can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect CleverReach** buttons if needed.  

![Verify Or Disconnect Button](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/12.-Verify-or-Disconnect-button-scaled.webp)

## Integrate CleverReach into Fluent Forms

To learn how to integrate CleverReach into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **CleverReach,** and click the **Settings** button. 

![Open Settings Integrate CleverReach](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/Open-Desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **CleverReach Integration** feed from the dropdown list. 

![Add Integration Button Integrate CleverReach](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/14.-Add-New-Integration-button-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.
Also, you need to select the **CleverReach List** from the dropdown where you want to send the submitted form data. 

![Cleverreach List Fluent Forms](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/15.-CleverReach-List-scaled.webp)

Once you select the form, a pop-up page will appear with various settings options for configuring the CleverReach.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: From here, you can change the name anytime if needed.

1. CleverReach List: From here, you can change the CleverReach List anytime if needed.

1. Map Fileds: Use this option to properly link your CelverReach Field with the Form Field. You can easily select the value for the Form field based on the CelverReach Field using the Shortcode Arrow.

1. Conditional Logics: This option allows CleverReach integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [this documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

1. Enable This Feed: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button.
And, your CleverReach will be integrated into this specific form!

![Save Feed Button Integrate CleverReach](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/16.-Save-Feed-button-1-scaled.webp)

After successful integration, now you will see that your **CleverReach Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Cleverrech Integration Feed](/images/integrations/email-marketing/how-to-integrate-cleverreach-with-fluent-forms/17.-Added-CleverRech-Integration-Feed-scaled.webp)

This way you can easily integrate CleverReach with Fluent Forms!
