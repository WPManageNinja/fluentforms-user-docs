---
description: "Connect GetGist with Fluent Forms to send form submissions to GetGist as leads and build your email list."
---

# Gist Integration

Fluent Forms integrates with **GetGist**, an email marketing tool that helps you collect customer leads.

This article guides you through integrating **GetGist** with **Fluent Forms** on your WordPress site. For a step-by-step guide with a video walkthrough, see the [Gist integration guide](/integrate-gist).

> [!Note]
> **GetGist** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the GetGist Integration

First, go to **Integrations** in the **Fluent Forms Navbar**, search for **GetGist** in the search bar, and find the **GetGist** integration module.

Now, turn on the **Toggle** to enable the **GetGist** module. Then, click the **Manage** button next to it.

![Enable Getgist Integration](/images/integrations/email-marketing/gist-integration/Enable-GetGist-Integration-01-scaled.webp)

Once you enable **GetGist**, Fluent Forms opens the **GetGist Settings** page. It asks for the **GetGist API Key** of your **GetGist Account**.

![Configuration Getgist](/images/integrations/email-marketing/gist-integration/Configuration-GetGist-02-scaled.webp)

### Get the GetGist API Key

First, log in to your [GetGist Account](https://app.getgist.com/login), then click **Settings** in the top menu and open **Integrations** in the left sidebar. Select **API key** there. Here, you find your **GetGist API Key**. Now, click the **Copy** button to copy the API key.

![API Key](/images/integrations/email-marketing/gist-integration/API-Key-03-scaled.webp)

### Connect GetGist with Fluent Forms

Then, return to the **GetGist Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.

Now, paste the **GetGist API Key** you copied before into the **GetGist API Key** field.

Click the **Save** button to activate your **GetGist Integration** module.

![Paste API Key](/images/integrations/email-marketing/gist-integration/Paste-API-Key-04-scaled.webp)

Here, you can see that your **GetGist API integration is up and running**. Click **Verify connection again** to check the connection. To disconnect, click the **Disconnect GetGist** button anytime.

![Disonnect Getgist](/images/integrations/email-marketing/gist-integration/Disonnect-GetGist-05-scaled.webp)

### Integrate GetGist into Fluent Forms

First, go to **Forms** in the **Fluent Forms Navbar**, select the form where you want to integrate **GetGist**, and click **Configuration** in the form's top bar.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Gist Integration](/images/integrations/email-marketing/gist-integration/form-settings-06-scaled.webp)

Once you are on the **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click the **Add New Integration** button, and select the **GetGist Integration** feed from the drawer.

![Settings Integration Gist Integration](/images/integrations/email-marketing/gist-integration/settings-Integration-07-scaled.webp)

### Configure GetGist Integration Feed

A. **Enable This feed:** Keep this toggle on to activate the integration feed and make all its actions work properly.

B. **Feed Name:** Enter a name for your GetGist integration feed.

C. **Map Fields:** Use the fields under this option to properly link your GetGist fields with the form fields. Select a form field for **Email Address**, which is required. Then use the **Shortcode Icon** to select the values for **Name** and **Phone**.

D. **Lead Tags:** Add tags to your GetGist contacts with a comma-separated list (for example, new lead, crucial users, web source). You can also use smart tags here.

E. **Landing URL:** Check **Enable Landing URL** to send the page URL where the form was submitted to the Gist lead.

F. **Push IP Address:** Check **Enable last IP address** to send the submitter's last seen IP address to the Gist lead.

G. **Conditional Logics:** If you want to run the GetGist integration conditionally based on your submission values, check **Enable conditional logic**. To learn more about conditional logic, read the [article](/set-up-forms-with-conditional-logic).

Now, click the **Save** button to save the integration feed.

![Add Gegist Integration Feed](/images/integrations/email-marketing/gist-integration/Add-new-gegist-integration-feed-08-scaled.webp)

After a successful integration, you see that your **GetGist Integration Feed** is added to the list.

You can modify your feed anytime by clicking the **Edit** icon, duplicate it with the **Copy** icon, and delete it with the **Trash** icon.

Additionally, you can disable or enable this feed at any time by turning the **Toggle** off or on.

![All Integration](/images/integrations/email-marketing/gist-integration/All-form-Integration-09-scaled.webp)

### Preview of Integrated GetGist

Here, you can see a preview of the added GetGist contacts through the form entries.

You can see the form submissions in the **Entries** section of this particular form.

![Entries](/images/integrations/email-marketing/gist-integration/Entries-10-scaled-2.webp)

Now, open **Contacts** in the top menu of your GetGist account to see the contact list added from Fluent Forms.

![All Contact](/images/integrations/email-marketing/gist-integration/all-contact-11-scaled.webp)

This way, you can easily integrate **GetGist** with **Fluent Forms**!
