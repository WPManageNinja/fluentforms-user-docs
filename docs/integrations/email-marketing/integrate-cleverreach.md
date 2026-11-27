---
description: "Connect CleverReach with Fluent Forms to add form submissions to your CleverReach recipient lists and grow your email audience automatically."
---

# Integrate CleverReach

The **CleverReach** integration lets you grow your CleverReach subscriber list from the users of **Fluent Forms**. This guide shows you how to connect **CleverReach** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **CleverReach** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable CleverReach Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **CleverReach**, and find the **CleverReach** integration module.

Turn on the **Toggle** to enable **CleverReach**, then click the **Manage** button next to it.

![Enabled Cleverreach Fluent Forms](/images/integrations/email-marketing/integrate-cleverreach/1.-Enabled-CleverReach-scaled.webp)

Fluent Forms opens the **CleverReach Settings** page. It asks for the **CleverReach Client ID** and **CleverReach Client Secret** of your **CleverReach Account**.

![Cleverreach Client ID And Secret](/images/integrations/email-marketing/integrate-cleverreach/2.-CleverReach-Client-ID-and-Secret-scaled.webp)

### Get the CleverReach Client ID and Secret

1. Log in to your [CleverReach Account](https://www.cleverreach.com/en-de/login/).
2. Click your **Profile** icon in the top right corner, then click **My Account**.

![Profile Icon My Account Page](/images/integrations/email-marketing/integrate-cleverreach/3.-Profile-Icon-My-Account-page-scaled.webp)

3. Open the **Interfaces** dropdown list on the **Account** page and select **REST API**.

![Rest API Option](/images/integrations/email-marketing/integrate-cleverreach/4.-Rest-API-option-scaled.webp)

4. Click **Create OAuth2 app**. This button appears when you have no OAuth2 apps yet.

![Create Oath2 App](/images/integrations/email-marketing/integrate-cleverreach/5.-Create-Oath2-App.webp)

5. Enter an **App Name**, choose **REST API version 3** from the dropdown list, and keep the **Redirect URL** as `*`.
6. Check **Recipients** and **Forms** under **Scopes**, then click **Create now**.

![Create Now Button](/images/integrations/email-marketing/integrate-cleverreach/6.-Create-Now-button.webp)

7. After you create the OAuth2 app, click the **Three-dot Icon** in the **Action** column and click **Edit**.

![Edit Button Newly Created Rest API Integrate CleverReach](/images/integrations/email-marketing/integrate-cleverreach/7.-Edit-button-of-newly-created-rest-API.webp)

8. Open the **OAuth2 App Data** tab and click the **Copy Icon** next to **Client ID** and **Client Secret** to copy them. Keep the **Client Secret** private.

![Copy Client ID And Secret](/images/integrations/email-marketing/integrate-cleverreach/8.-Copy-Client-ID-and-Secret-1.webp)

## Connect CleverReach with Fluent Forms

1. Return to the **CleverReach Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Client ID** and **Client Secret** you copied from **CleverReach** into the **CleverReach Client ID** and **CleverReach Client Secret** fields.
3. Click **Save**.

![Paste Client ID And Secret](/images/integrations/email-marketing/integrate-cleverreach/9.-Paste-Client-ID-and-Secret-scaled.webp)

After you click **Save**, Fluent Forms redirects you to the **CleverReach Login Portal** to connect CleverReach and activate the integration. Enter your **Customer ID**, **Username**, and **Password**, and click **Log in now & connect**.

![Login Now And Connect Button](/images/integrations/email-marketing/integrate-cleverreach/10.-Login-now-and-connect-Fluent-Form-button.webp)

You can find your **CleverReach** **Customer ID** under the **Profile Menu**, beside the **Account** option.

![Customer ID Or Account Number](/images/integrations/email-marketing/integrate-cleverreach/11.-Customer-ID-or-Account-Number-scaled.webp)

Fluent Forms now shows that your **CleverReach API integration is up and running**. Click **Verify connection again** to verify the connection, or **Disconnect CleverReach** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-cleverreach/12.-Verify-or-Disconnect-button-scaled.webp)

## Integrate CleverReach into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **CleverReach**, and click **Configuration** in the form's top bar.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate CleverReach](/images/integrations/email-marketing/integrate-cleverreach/Open-Desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **CleverReach Integration** feed from the drawer.

![Add Integration Button Integrate CleverReach](/images/integrations/email-marketing/integrate-cleverreach/14.-Add-New-Integration-button-scaled.webp)

Enter a **Feed Name**. This field is required. Then open the **CleverReach List** dropdown with the **Arrow Icon** and select the list that receives the submitted form data.

![Cleverreach List Fluent Forms](/images/integrations/email-marketing/integrate-cleverreach/15.-CleverReach-List-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Enable This feed:** Keep this toggle on so all the feed's actions run.
2. **Feed Name:** Change the feed name at any time.
3. **CleverReach List:** Change the CleverReach list at any time.
4. **Map Fields:** Select the form field for **Email Address**. This field is required.
5. **Conditional Logics:** Check **Enable conditional logic** to run the CleverReach integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Resubscribe:** Check **Reactivate subscriber if value is checked** to reactivate a contact who is already in the list but has unsubscribed or been deactivated. Enable it only if you are permitted to contact them again.

Click **Save** when the setup is done. CleverReach is now connected to this form.

![Save Feed Button Integrate CleverReach](/images/integrations/email-marketing/integrate-cleverreach/16.-Save-Feed-button-1-scaled.webp)

The **CleverReach Integration Feed** now appears in the list. Click the **Edit** icon to modify it, the **Copy** icon to duplicate it, or the **Trash** icon to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Cleverrech Integration Feed](/images/integrations/email-marketing/integrate-cleverreach/17.-Added-CleverRech-Integration-Feed-scaled.webp)

## Preview of Integrated CleverReach

You can see the form submissions that add **CleverReach** recipients in the **Entries** tab of the form.

![Form Entries Fluent Forms](/images/integrations/email-marketing/integrate-cleverreach/18.-Form-Entries-scaled.webp)

Open your [CleverReach](https://www.cleverreach.com/en-de/login/) account, go to **Recipients**, and open the list you connected. The users who submitted forms in **Fluent Forms** now appear as **Active** recipients.

![Recipients Preview](/images/integrations/email-marketing/integrate-cleverreach/19.-Recipients-preview-scaled.webp)
