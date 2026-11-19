---
description: "Fluent Forms integrates MailerLite an email marketing tool that helps you to grow your MailerLite Subscriber list through the users of Fluent Forms."
---

# Integrate MailerLite

[MailerLite](http://mailerlite.com) is an email marketing tool. With the MailerLite integration, you grow your MailerLite subscriber list from the users of **Fluent Forms**. This guide shows you how to connect **MailerLite** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **MailerLite** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable MailerLite Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **MailerLite**, and open the **MailerLite** integration module.

Turn on the **Toggle** to enable **MailerLite**, then click **Manage** on the right to open its configuration.

![Enabled Mailerlite Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/1.-Enabled-MailerLite-scaled.webp)

Once you enable MailerLite, Fluent Forms asks for the **MailerLite API Key** of your **MailerLite Account**.

![Mailerlite Settings Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/2.-MailerLite-Settings-scaled.webp)

### Get the MailerLite API Key

1. Log in to your [MailerLite Account](https://accounts.mailerlite.com/?lang=en). Complete the profile setup first so the API settings appear under the Integration tabs.
2. Go to **Integrations** and click **Use** for **API** under the **MailerLite API** section.

![Integrations Use Button](/images/integrations/email-marketing/integrate-mailerlite/3.-Integrations-Use-button-scaled.webp)

3. Click **Generate new token**.

![Generate Token Button](/images/integrations/email-marketing/integrate-mailerlite/4.-Generate-New-Token-button.webp)

4. Enter a name for your token, select the restrictions you want, agree to the **Terms of Use**, and click **Create token**.

![Create Token Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/5.-Create-Token.webp)

5. Click **Copy** or **Download** to copy or download the API token.

![Copy API Token](/images/integrations/email-marketing/integrate-mailerlite/6.-Copy-API-Token.webp)

## Connect MailerLite with Fluent Forms

1. Return to the **MailerLite API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **MailerLite** into the **MailerLite API Key** field.
3. Click **Save**.

![Paste API Key](/images/integrations/email-marketing/integrate-mailerlite/7.-Paste-API-Key-1-scaled.webp)

Fluent Forms now shows that MailerLite is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect MailerLite** to disconnect it.

![Verifydisconnect Button Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/8.-VerifyDisconnect-button-scaled.webp)

## Integrate MailerLite with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **MailerLite**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/Open-Desired-Form-Settings-6-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **MailerLite Integration** feed from the drawer.

![Add Integration Button Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/9.-Add-New-Integration-button-2-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **Group List** of **MailerLite** that receives the submitted form data.

![Group List Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/10.-Group-List-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **Group List:** Change the MailerLite list at any time.
3. **Map Fields:** Link your MailerLite fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Conditional Logics:** Run the MailerLite integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
5. **Resubscribe:** Check this option to reactivate (resubscribe) subscribers who previously unsubscribed from the MailerLite email list.
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. **MailerLite** is now connected to this form.

![Save Feed Button Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/11.-Save-Feed-button-2-scaled.webp)

The **MailerLite Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Mailerlite Integration Feed](/images/integrations/email-marketing/integrate-mailerlite/12.-Added-MailerLite-Integration-Feed-scaled.webp)

## Preview of Integrated MailerLite

You can see the form submissions that add MailerLite contacts in the **Entries** tab of the form. In this example, the form has one new **Form Submission**.

![Entries Tab Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/13.-Entries-tab-scaled.webp)

In MailerLite, open **Subscribers** in the left sidebar, go to the **Groups** tab, and click **View Group** for the group you connected to **Fluent Forms.**

![View Mailerlite Group](/images/integrations/email-marketing/integrate-mailerlite/14.-View-desired-MailerLite-Group-scaled.webp)

The **user who submitted the form** in **Fluent Forms** now appears in the selected **MailerLite Group/Subscribers.**

![Subscriber Email Fluent Forms](/images/integrations/email-marketing/integrate-mailerlite/15.-Subscriber-Email.webp)

Click the email address under the **Subscriber** column to see the **Subscriber Detail** and **Activity** of this user.

![Preview Added Contact Integrate MailerLite](/images/integrations/email-marketing/integrate-mailerlite/16.-Preview-of-added-contact.webp)
