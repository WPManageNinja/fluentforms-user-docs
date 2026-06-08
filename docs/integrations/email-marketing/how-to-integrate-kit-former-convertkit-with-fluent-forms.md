# How to Integrate Kit (Former ConvertKit) with Fluent Forms

**Fluent Forms** integrates with [Kit (Former ConvertKit)](http://convert.com), an email marketing tool that helps you collect customer information and automatically adds it to your Kit Subscriber List through the users of Fluent Forms.

This article will guide you through integrating **Kit (Former ConvertKit)** with **Fluent Forms** on your **WordPress Site**.  

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/1K5tYyIE9aQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **Kit (Former ConvertKit)** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable ConvertKit Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **ConvertKit** through the search bar, and get the **ConvertKit** integration module.

Now, turn on the **Toggle** to enable the **ConvertKit**. 
Then, you will see the ConvertKit’s **Settings Icon** on the right side, click on it.

![Enabled Convertkit Fluent Forms](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/1.-Enabled-ConvertKit-scaled.webp)

Once you enable ConvertKit, you will be asked for the **ConvertKit API Key** and **ConvertKit API Secret** of your **ConvertKit Account**.

![Convertkit API Key And Secret Key](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/2.-ConvertKit-API-Key-and-Secret-Key-scaled.webp)

### Get the ConvertKit API URL and API Key

To learn how to get the  **ConvertKit API URL** and **ConvertKit API Key** from **ConvertKit**, follow the steps with screenshots below –

First, log in to your [ConvertKit Account](https://app.kit.com/users/login), go to the **Profile** **Menu** from the top right corner, and click the **Settings** button. 

![Convertkit Settings Fluent Forms](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/3.-ConvertKit-Settings-scaled.webp)

Now, open the **Developer** tab and you will get your desired **API Key** and **API Secret.** Simply, copy them by clicking the **Copy** buttons.

![Copy API Keys](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/4.-Copy-API-Keys.webp)

## Connect ConvertKit with Fluent Forms

Then, return to the **ConvertKit Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** and **API Secret** you copied from **ConvertKit** into the **ConvertKit API Key** and **ConvertKit API Secret** fields respectively.

Finally, press the **Save Settings** button to make your **ConvertKit Integration** module functional.

![Paste API Keys](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/5.-Paste-the-API-Keys-scaled.webp)

Here, you can see that your ConvertKit is connected to your **Fluent Forms** successfully.

You can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect ConvertKit** buttons if needed. 

![Verifydisconnect Button Fluent Forms](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/6.-VerifyDisconnect-button--scaled.webp)

## Integrate ConvertKit into Fluent Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **ConvertKit** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/Open-Desired-Form-Settings-3-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **ConvertKit Integration** feed from the dropdown list. 

![Add Integration Button Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/7.-Add-New-Integration-button-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.
Also, you must select the **ConvertKit Form** from the dropdown where you want to send the submitted form data.

![Convertkit Dropdown Fluent Forms](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/8.-ConvertKit-Form-dropdown-scaled.webp)

Once you select the form, a pop-up page will appear with various settings options for configuring the ConvertKit.

1. **Name:** From here, you can change the name anytime if needed.

2. **ConvertKit Form:** From here, you can change the ConvertKit Form anytime if needed.

3. **Map Fileds:** Use all the fields under this option to properly link your ConvertKit Fields with the Form Fields. You can easily select the value for the Form Fields based on the ConvertKit Fields using the Shortcode Arrow.

4. **Contact Tags:** With this option, you can add tags to your ConvertKit contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag.Enable Dynamic Tag Input: This option allows ConvertKit to add customized tags for specific contacts based on your submission values according to your set conditions.

5. **Conditional Logics:** This option allows ConvertKit integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

6. **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button.
And, your ConvertKit will be integrated into this specific form!

![Save Feed Button Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/9.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **ConvertKit Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Converkit Integration Feed](/images/integrations/email-marketing/how-to-integrate-kit-former-convertkit-with-fluent-forms/10.-Added-ConverKit-Integration-feed-scaled.webp)

This way you can easily integrate ConvertKit with Fluent Forms!
