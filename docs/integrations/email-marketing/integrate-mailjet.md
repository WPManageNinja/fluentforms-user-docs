---
description: "Integrating Mailjet with Fluent Forms to automate email marketing, manage subscribers, and streamline email campaigns effortlessly."
---

# Integrate Mailjet

The **Mailjet** integration lets you automate email marketing, manage subscribers, and streamline email campaigns from **Fluent Forms**. This guide shows you how to connect **Mailjet** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Mailjet** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Mailjet Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Mailjet**, and find the **Mailjet** integration module.

Turn on the **Toggle** to enable **Mailjet**, then click the **Manage** button that appears on the right side.

![Enable Mailjet Integrate Mailjet](/images/integrations/email-marketing/integrate-mailjet/1.-Enable-Mailjet--scaled.webp)

Once you enable **Mailjet**, Fluent Forms asks for the **API Key** and the **Secret Key** of your **Mailjet Account**.

> [!Tip]
> Open the **Instructions Guide** at the top of **Mailjet Settings** to get your API credentials.

![Mailjet Settings Fluent Forms](/images/integrations/email-marketing/integrate-mailjet/2.-Mailjet-Settings-scaled.webp)

### Get the Mailjet API and Secret Key

> [!Note]
> If you do not have a Mailjet account, [create one here](https://www.mailjet.com/).

1. Log in to your **Mailjet Account** through [this link](https://app.mailjet.com/signin?redirect=aHR0cHM6Ly9hcHAubWFpbGpldC5jb20vfDI0fDgyMzU3ZDFmMWE4Y2NjMjc4ZWRhMzI0MDUzZTNlMjY0).
2. Click **Profile** in the top right corner, open the dropdown list with the **Arrow Icon**, and click **Account Settings**.

![Account Settings Fluent Forms](/images/integrations/email-marketing/integrate-mailjet/3.-Account-Settings-scaled.webp)

3. Open the **REST API** tab and click **API Key Management (Primary and subaccount)**.

![Rest API Key API Key Management](/images/integrations/email-marketing/integrate-mailjet/4.-Rest-API-Key-API-Key-Management-scaled.webp)

4. Copy your **API Key** from the **API Key Management** page.
5. Click **Generate Secret Key** on the right side to get the Secret Key.

![Generate Secret Key Button](/images/integrations/email-marketing/integrate-mailjet/5.-Generate-Secret-Key-button-scaled.webp)

6. Click the **Copy Icon** on the right side to copy the **API Key** and **Secret Key**, then click **Done**.

![Copy API And Secret Key](/images/integrations/email-marketing/integrate-mailjet/6.-Copy-API-and-Secret-Key.webp)

## Connect Mailjet with Fluent Forms

1. Return to the **Mailjet Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** and **Secret Key** you copied from **Mailjet** into the **Mailjet** **API Key** and **Mailjet Secret Key** fields.
3. Click **Save**.

![Paste API Keys](/images/integrations/email-marketing/integrate-mailjet/7.-Paste-API-Keys-scaled.webp)

Fluent Forms now shows that your **Mailjet** is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Mailjet** to disconnect it.

![Verify Or Disconnect Mailjet](/images/integrations/email-marketing/integrate-mailjet/8.-verify-or-Disconnect-Mailjet-scaled.webp)

## Integrate Mailjet in Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Mailjet**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Mailjet](/images/integrations/email-marketing/integrate-mailjet/9.-Open-desired-form-Settings-1-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Mailjet Integration** feed from the drawer.

![Add Integration Dropdown Integrate Mailjet](/images/integrations/email-marketing/integrate-mailjet/10.-Add-new-integration-dropdown-1-scaled.webp)

The feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Mailjet Services:** Select the Mailjet service that receives the form submission data from Fluent Forms. You can also change the contact list at any time. Mailjet offers three services: **Contact**, **Template**, and **Send Email**. The steps below cover **Contact**.

   - **Template:** Create a Mailjet template with fields such as **Template Name**, **Author Name**, **Select Categories**, **Select Purpose**, **Copyright Message**, and **Company Message**.
   - **Send Email:** Send an email through Mailjet with fields such as **Sender Email**, **Sender Name**, **Recipients Email**, **CC Email**, **BCC Email**, and **Email Subject**.

3. **Exclude the Contact:** Click Yes or No to choose whether the contact is added to the exclusion list.
4. **Contact Email:** Map the Mailjet contact’s Email field with the form’s Email field. Use the Shortcode button to select the value.
5. **Contact Name:** Map the Mailjet contact’s Name field with the form’s Name field. Use the Shortcode button to select the value.
6. **Conditional Logics:** Run the Mailjet integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
7. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Mailjet is now connected to this form.

![Save Feed Integrate Mailjet](/images/integrations/email-marketing/integrate-mailjet/11.-Save-Feed--scaled.webp)

The **Mailjet Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Mailjet Integration Feed](/images/integrations/email-marketing/integrate-mailjet/12.-Added-Mailjet-Integration-Feed--scaled.webp)

### Preview of Integrated Mailjet

You can see the form submissions that add **Mailjet** contacts in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-mailjet/13.-Form-Entries-1-scaled.webp)

Open your [Mailjet](http://mailjet.com) account, open the **Contacts** dropdown in the left sidebar, and click the **All Contacts** tab. The **users who submitted forms** in **Fluent Forms** now appear in the selected **Mailjet** **Contacts**.

![Mailjet Contact Preview](/images/integrations/email-marketing/integrate-mailjet/14.-Mailjet-Contact-Preview-scaled.webp)
