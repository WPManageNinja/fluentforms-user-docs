# Mautic Integration

[Fluent Forms](https://fluentforms.com/) now integrates **Mautic**, making **Email Marketing** easier for users. This article will guide you through the integration process of **Mautic** with **Fluent** **Forms**. 

### Mautic with Fluent Forms

> [!Note]
> Install both **Fluent Forms** (free) and **Fluent Forms Pro**. Mautic works on the free plugin, but Pro-only features (for example **Phone** field and **Conditional Logic**) require the Pro add-on.

## Install & Activate Mautic Integration Add-on

First, go to **Plugins** from the **WordPress Left Sidebar**, click the **Add New Plugin**, search for **Mautic Integration For Fluent Forms**, and click the **Install Now** button. 

![Mautic Add On Plugins](/images/integrations/email-marketing/mautic-integration/1.-Mautic-Add-on-in-Plugins-scaled.webp)

Now, click the **Activate** button, and your **Mautic Integration Add-on** will be **Installed** and **Activated** successfully on your WordPress Site.

![Active Mautic Add On](/images/integrations/email-marketing/mautic-integration/2.-Active-Mautic-Add-on-scaled.webp)

## Enable Mautic Integration

From your **Fluent Forms Dashboard**, go to **Integrations**, search for **Mautic**, and click the **Toggle** button to enable the **Mautic** **Integration** module in your **FluentForms**.

Then, click the **Settings Icon** to make the integration functional.

![Enabled Mautic Integrationmodule](/images/integrations/email-marketing/mautic-integration/3.-Enabled-Mautic-IntegrationModule-scaled.webp)

Now, under **Mautic Settings**, provide all the required credentials (**Mautic Account URL**, **Client ID**, and **Client Secret**). Then, press the **Save Settings** button and your **Mautic** will be Integrated.

> [!Tip]
> Follow the **To Authentic Mautic you have to enable your API first** instructions to get your credentials. Copy the URL shown in the screenshot for later use.

![Copy Mautic URL](/images/integrations/email-marketing/mautic-integration/4.-Copy-Mautic-URL-scaled.webp)

## Get the Required Mautic Credentials

Log in to your **Mautic Account Dashboard,** click the **Settings** **Icon** in the top right corner, and press the **Configuration** button from the left-side settings bar.

> [!Note]
> If you do not have a Mautic instance, set up Mautic on your server before continuing.

![Settings Icon And Configuration Button Mautic Integration](/images/integrations/email-marketing/mautic-integration/5.-Settings-icon-and-Configuration-button-scaled.webp)

To access the **API** **Credentials** tab, click the **Yes** button to enable the **API Settings.**  

![Yes Button Enable API Credentials](/images/integrations/email-marketing/mautic-integration/6.-Yes-button-to-enable-API-Credentials.webp)

Again, go to the **Settings** **Icon** in the top right corner, expand the **Integration** dropdown, and click the **API Credentials** button in the left-side settings bar.

![API Credentials Button](/images/integrations/email-marketing/mautic-integration/7.-API-Credentials-button-scaled.webp)

Click on the **New** button to create a new **API Credentials**.

![Button Mautic Integration](/images/integrations/email-marketing/mautic-integration/8.-New-button.webp)

Now, select **OAuth 2** as the **Authorization Protocol** and provide a **Name** for your API Credentials.
Then, paste the **Redirect URL** you copied from **FluentForms Global Settings.**

Finally, click the **Save** button in the top right corner.

![Paste Redirect URL](/images/integrations/email-marketing/mautic-integration/9.-Paste-Redirect-URL.webp)

Finally, you will get your required **Client ID** and **Client Secret**. **Copy** them and press the **Save** button to save all the Mautic API Credentials.

![Copy Client ID And Client Secret](/images/integrations/email-marketing/mautic-integration/10.-copy-Client-ID-and-Client-Secret.webp)

### Connect Mautic with Fluent Forms

Once you get all the credentials, return to the **Global Settings** from the **Fluent Forms Navbar,** expand the **Configure Integrations,** and open the **Mautic** tab from the left sidebar.

Now, provide your **Mautic Account’s URL** into **Your Mautic API URL** field.

Then, paste the **Client ID** and **Client Secret** you copied from Mautic into the **Mautic Client ID** and **Mautic Client Secret** fields respectively. 

Once you complete the configuration process, press the **Save Settings** button.

![Paste Client ID Client Secret](/images/integrations/email-marketing/mautic-integration/11.-Paste-Client-ID-Client-Secret--scaled.webp)

Finally, click the **Accept** button to permit **Fluent Forms** to connect with your **Mautic Account.**

![Accept Button Fluent Forms](/images/integrations/email-marketing/mautic-integration/12.-Accept-Button.webp)

Here, you can see your **Mautic Integration** feed is enabled and ready to use!

![Configured Mautic Integration](/images/integrations/email-marketing/mautic-integration/13.-Configured-Mautic-Integration-scaled.webp)

## Integrate Mautic into Fluent Forms

Go to the **Forms** section from the **Fluent Forms Navbar**, and click the **Settings** button of your desired form where you want to add the feed.

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Mautic Integration](/images/integrations/email-marketing/mautic-integration/14.-Desired-forms-Settings-scaled.webp)

Open the **Configure Integrations** tab, expand the **Add New Integration** tab, and click the **Mautic Integration** feed.

![Add Mautic Integration Feed 1024x319](/images/integrations/email-marketing/mautic-integration/15.-Add-Mautic-Integration-Feed-1024x319.webp)

Now, set up your Mautic Integration Feed according to your needs using all the following available settings options.

**A. Feed Name**: Give a name to your feed so that you can find it later easily.

**B. Map Fields**: Associate your **Mautic Field** with the **Fluent Forms Field** by selecting the appropriate form field from the dropdown (you can also give your custom value if needed).

**C. Other Fields**: Use this option to add or delete fields using the **Plus** or **Minus** icon. Here, also pair the **Mautic Field** with the **Fluent Forms Field** by selecting the appropriate form field from the dropdown. You can provide a custom value if needed.

**D. Lead Tags**: With this option, you can assign **Tag/s** using the **SmartCodes** from the **dropdown list** or by entering a **custom value.** And, the user information collected through form submissions will be directly added to the **Contacts** and **Tags** section of your **Mautic Account.**

**E. Last Active**: When this option is enabled, FluentForm will pass the lead creation time to the Mautic lead.

**F. Push IP Address:** When this option is enabled, FluentForm will pass the ipAddress to Mautic.

**G. Conditional Logics:**  This option allows Mautic integration to work conditionally based on your form submission values. To learn more, read the [Fluent Forms Conditional Logic guide](/set-up-forms-with-conditional-logic).

**H. Status**: Uncheck the **Enable This Feed** box if you want to save this **Mautic Feed** as Draft. Otherwise, enable this box to make this feed functional.

Once you are done, click the **Save Feed** button to save all your setup.

![Add Mautic Integration Feed Page](/images/integrations/email-marketing/mautic-integration/16.-Add-new-Mautic-Integration-Feed-page.webp)

Here, you can see the Mautic Integration Feed has been added!

You can disable the feed anytime by clicking the **Toggle** button if needed. 
Also, you can customize the feed anytime by clicking the **Settings** icon, and delete it by clicking the **Trash** icon.

![Enabled Mautic Integration Feed](/images/integrations/email-marketing/mautic-integration/17.-Enabled-Mautic-Integration-Feed-scaled.webp)

This is how you can integrate **Mautic** with **Fluent** **Forms**!
