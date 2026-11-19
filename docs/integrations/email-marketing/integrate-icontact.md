---
description: "Fluent Forms integrates iContact an email marketing platform that helps you to collect customer information and automatically adds it to your iContact…"
---

# Integrate iContact

[iContact](http://icontact.com) is an email marketing platform that helps you collect customer information. With the iContact integration, **Fluent Forms** adds the information from form submissions to your iContact list automatically. This guide shows you how to connect **iContact** with **Fluent Forms** on your **WordPress site**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VR54k_Atnig" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **iContact** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable iContact Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **iContact**, and find the **iContact** integration module.

Turn on the **Toggle** to enable **iContact**, then click the **Manage** button that appears on the right side.

![Enabled Icontact Fluent Forms](/images/integrations/email-marketing/integrate-icontact/1.-Enabled-iContact--scaled.webp)

Once you enable iContact, Fluent Forms asks for the following information from your **iContact Account**: **iContact Application key, Account Email Address, API Password, Account ID,** and **Client Folder ID**.

> [!Note]
> If you do not have an iContact account, [create one here](https://www.icontact.com/).

![Icontact API Settings](/images/integrations/email-marketing/integrate-icontact/2.-iContact-API-Settings-scaled.webp)

### Get the iContact Credentials

1. Log in to your [iContact Account](https://www.icontact.com/login/).
2. Click **Profile** in the top right corner, then click **Settings and Billing**.

![Settings Billing Option Integrate iContact](/images/integrations/email-marketing/integrate-icontact/3.-Settings-Billing-option-scaled.webp)

3. Click **iContact Integrations** in the **Settings and Billing** list.

![Icontact Integrations Option](/images/integrations/email-marketing/integrate-icontact/4.-iContact-Integrations-option.webp)

4. Click **Create** for **Custom API Integrations**.

![Custom API Integration Create Button](/images/integrations/email-marketing/integrate-icontact/5.-Custom-API-Integration-Create-button-scaled.webp)

5. Copy all the required information shown by the arrows in the screenshot below.
6. Enter a **Name** and **Description** for your API under **API Information** and click **Save Changes**.

![Copy All Necessary Information](/images/integrations/email-marketing/integrate-icontact/6.-Copy-all-necessary-information.webp)

## Connect iContact with Fluent Forms

1. Return to the **iContact API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the information you copied from iContact into the matching fields: **Application ID** into **Application Key**, **Username/Email Address** into **Account Email Address**, **Password** into **API Password**, and then **Account ID** and **Client Folder ID**.
3. Click **Save** to activate the **iContact Integration** module.

![Paste All Copied Information](/images/integrations/email-marketing/integrate-icontact/7.-Paste-all-copied-information-scaled.webp)

Fluent Forms now shows that iContact is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect iContact** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-icontact/8.-Verify-or-Disconnect-button-scaled.webp)

## Integrate iContact into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **iContact**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate iContact](/images/integrations/email-marketing/integrate-icontact/Open-Desired-Form-Settings-2-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **iContact Integration** feed from the drawer.

![Add Integration Button Integrate iContact](/images/integrations/email-marketing/integrate-icontact/9.-Add-New-Integration-button-1-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then select the **iContact List** that receives the submitted form data.

![Icontct List](/images/integrations/email-marketing/integrate-icontact/10.-iContct-List-1-scaled.webp)

After you select the list, the feed settings open with these options:

1. **Name:** Change the feed name at any time.
2. **iContact List:** Change the iContact list at any time.
3. **Map Fields:** Link your iContact fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Conditional Logics:** Run the iContact integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
5. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. iContact is now connected to this form.

![Save Feed Button Integrate iContact](/images/integrations/email-marketing/integrate-icontact/11.-Save-Feed-button-1-scaled.webp)

The **iContact Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Icontact Integration Feed](/images/integrations/email-marketing/integrate-icontact/12.-Added-iContact-Integration-Feed-1-scaled.webp)

### Preview of Integrated iContact

You can see the form submissions that add iContact contacts in the **Entries** section of the form. In this example, the form has four submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-icontact/13.-New-form-Entries-1-scaled.webp)

In iContact, open **Contacts** in the left sidebar and go to the **Lists** tab. Use the **Three-Dot Icon** and click **View Subscriber** for the list you connected to **Fluent Forms**.

![View Subscriber Icontact](/images/integrations/email-marketing/integrate-icontact/14.-View-Subscriber-in-iContact-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **iContact Contact List.**

![Preview Newly Added Contacts Integrate iContact](/images/integrations/email-marketing/integrate-icontact/15.-Preview-of-newly-added-contacts-scaled.webp)
