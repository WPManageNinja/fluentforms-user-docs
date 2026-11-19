---
description: "Fluent Forms integrates with Kit (Former ConvertKit), an email marketing tool that helps you collect customer information and automatically adds it to…"
---

# Integrate Kit (Former ConvertKit)

[Kit (Former ConvertKit)](https://kit.com) is an email marketing tool that helps you collect customer information. With the Kit integration, **Fluent Forms** adds the information from form submissions to your Kit subscriber list automatically. This guide shows you how to connect **Kit (Former ConvertKit)** with **Fluent Forms** on your **WordPress site**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/1K5tYyIE9aQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **Kit (Former ConvertKit)** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable ConvertKit Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **ConvertKit**, and find the **ConvertKit** integration module.

Turn on the **Toggle** to enable **ConvertKit**, then click the **Manage** button that appears on the right side.

![Enabled Convertkit Fluent Forms](/images/integrations/email-marketing/integrate-kit-former-convertkit/1.-Enabled-ConvertKit-scaled.webp)

Once you enable ConvertKit, Fluent Forms asks for the **ConvertKit API Key** and **ConvertKit API Secret** of your **ConvertKit Account**.

![Convertkit API Key And Secret Key](/images/integrations/email-marketing/integrate-kit-former-convertkit/2.-ConvertKit-API-Key-and-Secret-Key-scaled.webp)

### Get the ConvertKit API Key and API Secret

1. Log in to your [ConvertKit Account](https://app.kit.com/users/login).
2. Open the **Profile** **Menu** in the top right corner and click **Settings**.

![Convertkit Settings Fluent Forms](/images/integrations/email-marketing/integrate-kit-former-convertkit/3.-ConvertKit-Settings-scaled.webp)

3. Open the **Developer** tab and click the **Copy** buttons to copy your **API Key** and **API Secret.**

![Copy API Keys](/images/integrations/email-marketing/integrate-kit-former-convertkit/4.-Copy-API-Keys.webp)

## Connect ConvertKit with Fluent Forms

1. Return to the **ConvertKit Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** and **API Secret** you copied from **ConvertKit** into the **ConvertKit API Key** and **ConvertKit API Secret** fields.
3. Click **Save** to activate the **ConvertKit Integration** module.

![Paste API Keys](/images/integrations/email-marketing/integrate-kit-former-convertkit/5.-Paste-the-API-Keys-scaled.webp)

Fluent Forms now shows that ConvertKit is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect ConvertKit** to disconnect it.

![Verifydisconnect Button Fluent Forms](/images/integrations/email-marketing/integrate-kit-former-convertkit/6.-VerifyDisconnect-button--scaled.webp)

## Integrate ConvertKit into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **ConvertKit**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/integrate-kit-former-convertkit/Open-Desired-Form-Settings-3-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **ConvertKit Integration** feed from the drawer.

![Add Integration Button Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/integrate-kit-former-convertkit/7.-Add-New-Integration-button-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **ConvertKit Form** that receives the submitted form data.

![Convertkit Dropdown Fluent Forms](/images/integrations/email-marketing/integrate-kit-former-convertkit/8.-ConvertKit-Form-dropdown-scaled.webp)

After you select the form, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **ConvertKit Form:** Change the ConvertKit form at any time.
3. **Map Fields:** Link your ConvertKit fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Contact Tags:** Add tags to your ConvertKit contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use shortcodes as the tag.

   **Enable Dynamic Tag Input:** Lets ConvertKit add customized tags for specific contacts based on your submission values and the conditions you set.

5. **Conditional Logics:** Run the ConvertKit integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. ConvertKit is now connected to this form.

![Save Feed Button Integrate Kit (Former ConvertKit)](/images/integrations/email-marketing/integrate-kit-former-convertkit/9.-Save-Feed-button-scaled.webp)

The **ConvertKit Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Converkit Integration Feed](/images/integrations/email-marketing/integrate-kit-former-convertkit/10.-Added-ConverKit-Integration-feed-scaled.webp)
