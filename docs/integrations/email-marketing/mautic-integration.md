---
description: "Fluent Forms now integrates Mautic, making Email Marketing easier for users. This article will guide you through the integration process of Mautic with…"
---

# Mautic Integration

[Fluent Forms](https://fluentforms.com/) integrates with **Mautic** to make **Email Marketing** easier. This guide walks you through connecting **Mautic** with **Fluent** **Forms**.

## Mautic with Fluent Forms

> [!Note]
> The Mautic integration is a separate add-on that you install below. It needs the **Fluent Forms** plugin. Pro-only features, such as the **Phone** field and **Conditional Logic**, also need **Fluent Forms Pro**.

## Install and Activate the Mautic Integration Add-on

1. In the **WordPress Left Sidebar**, go to **Plugins** and click **Add New Plugin**.
2. Search for **Mautic Integration For Fluent Forms** and click **Install Now**.

![Mautic Add On Plugins](/images/integrations/email-marketing/mautic-integration/1.-Mautic-Add-on-in-Plugins-scaled.webp)

3. Click **Activate**.

![Active Mautic Add On](/images/integrations/email-marketing/mautic-integration/2.-Active-Mautic-Add-on-scaled.webp)

## Enable Mautic Integration

In your **Fluent Forms Dashboard**, go to **Integrations**, search for **Mautic**, and click the **Toggle** button to enable the **Mautic** **Integration** module. Then click the **Settings Icon** to open the settings.

![Enabled Mautic Integrationmodule](/images/integrations/email-marketing/mautic-integration/3.-Enabled-Mautic-IntegrationModule-scaled.webp)

Under **Mautic Settings**, enter the required credentials: **Mautic Account URL**, **Client ID**, and **Client Secret**. Then click **Save**.

> [!Tip]
> Follow the **To Authentic Mautic you have to enable your API first** instructions to get your credentials. Copy the URL shown in the screenshot.

![Copy Mautic URL](/images/integrations/email-marketing/mautic-integration/4.-Copy-Mautic-URL-scaled.webp)

## Get the Required Mautic Credentials

> [!Note]
> If you do not have a Mautic instance, set up Mautic on your server before you continue.

1. Log in to your **Mautic Account Dashboard,** click the **Settings** **Icon** in the top right corner, and click **Configuration** in the left-side settings bar.

![Settings Icon And Configuration Button Mautic Integration](/images/integrations/email-marketing/mautic-integration/5.-Settings-icon-and-Configuration-button-scaled.webp)

2. Click **Yes** to enable the **API Settings** and access the **API** **Credentials** tab.

![Yes Button Enable API Credentials](/images/integrations/email-marketing/mautic-integration/6.-Yes-button-to-enable-API-Credentials.webp)

3. Click the **Settings** **Icon** in the top right corner again, expand the **Integration** dropdown, and click **API Credentials** in the left-side settings bar.

![API Credentials Button](/images/integrations/email-marketing/mautic-integration/7.-API-Credentials-button-scaled.webp)

4. Click **New** to create new **API Credentials**.

![Button Mautic Integration](/images/integrations/email-marketing/mautic-integration/8.-New-button.webp)

5. Select **OAuth 2** as the **Authorization Protocol** and enter a **Name** for your API Credentials.
6. Paste the **Redirect URL** you copied from the **Mautic** settings page in Fluent Forms.
7. Click **Save** in the top right corner.

![Paste Redirect URL](/images/integrations/email-marketing/mautic-integration/9.-Paste-Redirect-URL.webp)

8. **Copy** the **Client ID** and **Client Secret**, then click **Save** to save the Mautic API Credentials.

![Copy Client ID And Client Secret](/images/integrations/email-marketing/mautic-integration/10.-copy-Client-ID-and-Client-Secret.webp)

### Connect Mautic with Fluent Forms

1. Go to **Integrations** in the top bar and click **Manage** next to **Mautic** to open the Mautic settings page.
2. Enter your **Mautic Account’s URL** in the **Your Mautic API URL** field.
3. Paste the **Client ID** and **Client Secret** you copied from Mautic into the **Mautic Client ID** and **Mautic Client Secret** fields.
4. Click **Save**.

![Paste Client ID Client Secret](/images/integrations/email-marketing/mautic-integration/11.-Paste-Client-ID-Client-Secret--scaled.webp)

5. Click **Accept** to let **Fluent Forms** connect with your **Mautic Account.**

![Accept Button Fluent Forms](/images/integrations/email-marketing/mautic-integration/12.-Accept-Button.webp)

Your **Mautic Integration** is now enabled and ready to use.

![Configured Mautic Integration](/images/integrations/email-marketing/mautic-integration/13.-Configured-Mautic-Integration-scaled.webp)

## Integrate Mautic into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar** and open the **Configuration** tab of the form where you want to add the feed.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Mautic Integration](/images/integrations/email-marketing/mautic-integration/14.-Desired-forms-Settings-scaled.webp)

Go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **Mautic Integration** from the drawer.

![Add Mautic Integration Feed 1024x319](/images/integrations/email-marketing/mautic-integration/15.-Add-Mautic-Integration-Feed-1024x319.webp)

Set up your Mautic Integration Feed with these options:

- **Feed Name:** Enter a name so you can find the feed later.
- **Map Fields:** Match each **Mautic Field** with a **Fluent Forms Field** from the dropdown. You can also enter a custom value.
- **Other Fields:** Add or delete fields with the **Plus** or **Minus** icon. Match each **Mautic Field** with a **Fluent Forms Field** from the dropdown. You can enter a custom value.
- **Lead Tags:** Assign **tags** with the **SmartCodes** from the **dropdown list** or with a **custom value.** The user information from form submissions is added to the **Contacts** and **Tags** sections of your **Mautic Account.**
- **Last Active:** When enabled, Fluent Forms passes the lead creation time to the Mautic lead.
- **Push IP Address:** When enabled, Fluent Forms passes the ipAddress to Mautic.
- **Conditional Logics:** Run the Mautic integration only when your form submission values match the conditions you set. See the [Fluent Forms Conditional Logic guide](/set-up-forms-with-conditional-logic).
- **Status:** Uncheck **Enable This Feed** to save the **Mautic Feed** as a draft. Keep it checked to make the feed active.

Click **Save** to save your setup.

![Add Mautic Integration Feed Page](/images/integrations/email-marketing/mautic-integration/16.-Add-new-Mautic-Integration-Feed-page.webp)

The Mautic Integration Feed now appears in the list. Click the **Toggle** button to disable the feed at any time. Click the **Settings** icon to edit it, or the **Trash** icon to delete it.

![Enabled Mautic Integration Feed](/images/integrations/email-marketing/mautic-integration/17.-Enabled-Mautic-Integration-Feed-scaled.webp)
