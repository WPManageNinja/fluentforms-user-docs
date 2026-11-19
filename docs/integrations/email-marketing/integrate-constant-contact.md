---
description: "In Fluent Forms, integrating Constant Contact, an integrated email marketing, marketing automation, and small business CRM, allows you to grow your…"
---

# Integrate Constant Contact

**Constant Contact** is an email marketing platform. With the Constant Contact integration, you grow your Constant Contact list from the users of **Fluent Forms**. This guide shows you how to connect **Constant Contact** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Constant Contact** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

> [!Note]
> The Integrations page lists two cards: **Constant Contact** (the older version) and **Constant Contact V3**. This guide covers **Constant Contact V3**.

## Enable Constant Contact Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Constant Contact V3**, and find the **Constant Contact V3** integration module.

Turn on the **Toggle** to enable **Constant Contact V3**, then click the **Manage** button that appears on the right side.

![Enable Constant Contact V3 Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/1.-Enable-Constant-Contact-V3-scaled.webp)

Fluent Forms asks you to enter your **Constant Contact Client ID** and **Client Secret**.

> [!Tip]
> Follow the **Instructions Guide** at the top of **Constant Contact V3 API** settings to get your credentials.

![Constant Contact V3 API Settings Page](/images/integrations/email-marketing/integrate-constant-contact/2.-Constant-Contact-V3-API-Settings-page-scaled.webp)

### Get the Constant Contact Client ID and Client Secret

1. Log in to your **[Constant Contact Developer Account](https://developer.constantcontact.com/)**.
2. Click **New Application**.

![Application Button Fluent Forms](/images/integrations/email-marketing/integrate-constant-contact/3.-New-Application-Button-scaled.webp)

3. Enter a **Name** for your **New** **Application**.
4. Under **Application OAuth2 Settings**, choose “**Authorization Code Flow and Implicit Flow”** and **Rotating Refresh Tokens**.
5. Click **Create**.

![Create Button Fluent Forms](/images/integrations/email-marketing/integrate-constant-contact/4.-Create-button-scaled.webp)

6. After you create the app, click **Edit** in the right corner.

![Edit Button Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/5.-Edit-button-scaled.webp)

7. Open the **Details** tab and click the **Copy Icon** in the **API Key (Client ID)** field to copy the **Client ID**.
8. Click **Generate** **Client Secret** next to the Client ID.

![Copy Client ID Generate Client Secret](/images/integrations/email-marketing/integrate-constant-contact/6.-Copy-Client-ID-Generate-Client-Secret-scaled.webp)

9. Click the **Copy Icon** on the right side to copy the **Client Secret**, then click **Close**.

> [!Warning]
> **Client Secret** is shown only once. Copy and store it securely before leaving the page.

![Copy Client Secret](/images/integrations/email-marketing/integrate-constant-contact/7.-Copy-Client-Secret.webp)

10. Enter the **Redirect URL** from **Fluent Forms**. Click the **Pencil Icon** to open the editor page of the **Redirect URL** field.

![Edit Icon Redirect URL Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/8.-Edit-Icon-of-Redirect-URL.webp)

#### Collect the Redirect URL from Fluent Forms

1. Go to the **Constant Contact V3 API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Copy the **Redirect URL** under the **Constant Contact V3 API** instruction guide at the top.

![Copy Redirect URL](/images/integrations/email-marketing/integrate-constant-contact/9.-Copy-Redirect-URL-scaled.webp)

3. **Paste** the **Redirect URL** into the Constant Contact app and click **Confirm**.

![Paste Redirect URL](/images/integrations/email-marketing/integrate-constant-contact/10.-Paste-Redirect-URL.webp)

4. After you copy the Client ID and Client Secret and set up the Redirect URL, click **Save** to activate the integration.

![Save Button Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/11.-Save-button-scaled.webp)

## Connect Constant Contact with Fluent Forms

1. Return to the **Constant Contact V3 API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Client ID** and **Client Secret** you copied from **Constant Contact** into the **Constant Contact** **Client ID** and **Constant Contact Client Secret** fields.
3. Click **Verify Constant Contact** to save all your changes.

![Paste Client ID And Client Secret](/images/integrations/email-marketing/integrate-constant-contact/12.-Paste-Client-ID-and-Client-Secret-scaled.webp)

After you click **Verify Constant Contact**, Fluent Forms redirects you to **Constant Contact**, which asks for **permission** to connect with **Fluent Forms**. Click **Allow Access** to activate the integration.

![Allow Access Fluent Forms](/images/integrations/email-marketing/integrate-constant-contact/13.-Allow-access.webp)

Fluent Forms now shows that your **Constant Contact** is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Constant Contact** to disconnect it.

![Verfy Or Disconnect Button](/images/integrations/email-marketing/integrate-constant-contact/14.-Verfy-or-Disconnect-button-scaled.webp)

## Integrate Constant Contact in Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Constant Contact**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/15.-Open-Desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Constant Contact V3 Integration** feed from the drawer.

![Add Integration Feed Dropdown Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/16.-Add-new-integration-feed-dropdown-scaled.webp)

The feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Constant Contact List:** Select the Constant Contact contact list that receives the form submission data from Fluent Forms. The Map Fields option appears after you select the list. You can change the list at any time.
3. **Constant Contact Tag:** Select one or more Constant Contact tags that receive the form submission data from Fluent Forms. You can change the tags at any time.
4. **Map Fields:** Link your Constant Contact fields with the form fields. Besides **Email Address**, you can map **Type of Permission**, **First Name**, **Last Name**, **Job Title**, **Company Name**, **Birthday Month**, **Birth Day**, **Anniversary**, phone numbers, and the Home, Work, and Other address fields. Use the Shortcode button to select the value for each field.
5. **Custom Fields:** Link Fluent Forms fields with their Constant Contact custom fields. Click the **Plus/Minus** icon in the right corner to add or delete custom fields.

> [!Note]
> **Custom date fields** accept only the **MM/DD/YYYY** format.

6. **Conditional Logics:** Run the Constant Contact integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
7. **Update Contact:** Enable this option to update an existing contact's information if the submitted email address already exists in your Constant Contact list, instead of creating a duplicate contact.
8. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Constant Contact is now connected to this form.

![Save Feed Button Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/17.-Save-Feed-button-scaled.webp)

The **Constant Contact V3 Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Constant Contact V3 Integration Feed](/images/integrations/email-marketing/integrate-constant-contact/18.-Added-Constant-Contact-V3-Integration-Feed-scaled.webp)

## Preview of Integrated Constant Contact

You can see the form submissions that add **Constant Contact** contacts in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-constant-contact/19.-Form-Entries-scaled.webp)

Open your [Constant Contact](http://constantcontact.com) account, open the **Contacts** dropdown in the left sidebar, click the **Lists** tab, and click the **List** you connected to **Fluent Forms**.

![Constant Contact List](/images/integrations/email-marketing/integrate-constant-contact/20.-Desired-Constant-Contact-List-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Contact List**.

![Preview Contact List Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/21.-Preview-of-Contact-List.webp)

Open the **Tag/s** you connected to **Fluent Forms** in the same way.

![Tag List Fluent Forms](/images/integrations/email-marketing/integrate-constant-contact/22.-Desired-Tag-list-scaled.webp)

The **users who submitted forms** in **Fluent Forms** also appear in the selected **Tag/s**.

![Preview Tag List Integrate Constant Contact](/images/integrations/email-marketing/integrate-constant-contact/23.-Preview-of-Tag-list.webp)
