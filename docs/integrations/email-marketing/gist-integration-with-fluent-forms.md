# Gist Integration

**Fluent Forms** integrates with GetGist, an email marketing tool that helps you collect customer leads. This article will guide you through integrating **GetGist** with **Fluent Forms** on your **WordPress Site**. You can also follow the [Gist integration guide](/how-to-integrate-gist-with-fluent-forms) for a video walkthrough.  

> [!Note]
> **GetGist** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Enable the GetGist Integration

First, navigate to **Integrations** from the Fluent Forms Navbar, search for **GetGist** using the search bar, and install the **GetGist integration module**.

Now, turn on the **Toggle** to enable the **GetGist** module and click the **Settings Icon** on the right.

![Enable Getgist Integration](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Enable-GetGist-Integration-01-scaled.webp)

Once you enable GeGist, you will be asked for the **GetGist API Key** of your **GetGist Account**.

![Configuration Getgist](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Configuration-GetGist-02-scaled.webp)

### Get the GetGist Integration API Key

First, log in to your [GetGist Account](https://app.getgist.com/login), then go to **Settings** from the top menu and select the API Key under the API & webhooks section in the left sidebar. Here you will find your **GetGist API Key**. Now, **Copy** the API Key.

![API Key](/images/integrations/email-marketing/gist-integration-with-fluent-forms/API-Key-03-scaled.webp)

### Connect GetGist with Fluent Forms

Then, return to the **GetGist Settings** page under the **Global Settings Configure Integration tab** from the **Fluent Forms Navbar**.

Now, **paste** the Getgist **API Key** that was copied before.

Press the **Save Settings** button to activate your **GetGist Integration** module.

![Paste API Key](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Paste-API-Key-04-scaled.webp)

Here, you can see your **GetGist API integration is up and running**. To disconnect, click the **Disconnect GetGist** button.

![Disonnect Getgist](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Disonnect-GetGist-05-scaled.webp)

### Integrate GetGist into Fluent Forms

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your GetGist, and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Settings Gist Integration](/images/integrations/email-marketing/gist-integration-with-fluent-forms/form-settings-06-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **GetGist Integration** feed from the dropdown list.

![Settings Integration Gist Integration](/images/integrations/email-marketing/gist-integration-with-fluent-forms/settings-Integration-07-scaled.webp)

### Configure GetGist Integration Feed

**A. Feed Name**: Enter a name for your GetGist integration feed.

**B. Map Fields:** Use all the fields under this option to properly link your **GetGist Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **GetGist fields** using the **Shortcode Arrow**. 

**C. Landing URL:** Enable this option to send the page URL where the form was submitted to the Gist lead.

**D. Push IP Address:** Enable this option to send the submitter's last seen IP address to the Gist lead.

**E. Conditional Logic:** If you want to allow **Insightly** integration conditionally based on your submission values, **Enable Conditional Logic** options. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic-in-fluent-forms).

**F. Status:** Enable this feed option to activate the integration.

Now, click the **Save Feed** button to save the integration feed.

![Add Gegist Integration Feed](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Add-new-gegist-integration-feed-08-scaled.webp)

After successful Integration, you will see your GetGist integration Feed has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Additionally, you can disable or enable this feed at any time by turning off the **Toggle** if needed.

![All Integration](/images/integrations/email-marketing/gist-integration-with-fluent-forms/All-form-Integration-09-scaled.webp)

### Preview of Integrated GetGist

Here, you can see a preview of the added GetGist contacts through the Form entries that I set up during the integration.

You can see the form submissions from the **Entries** section of this particular form.

![Entries](/images/integrations/email-marketing/gist-integration-with-fluent-forms/Entries-10-scaled-2.webp)

Go to the **GetGist Contacts** section from the top menu to see the integrated contact list in Fluent Forms.

![All Contact](/images/integrations/email-marketing/gist-integration-with-fluent-forms/all-contact-11-scaled.webp)

This way, you can easily integrate GetGist with Fluent Forms!
