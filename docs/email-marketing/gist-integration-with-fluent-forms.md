# Gist Integration with Fluent Forms

**Fluent Forms** integrates with GetGist, an email marketing tool that helps you collect customer leads. This article will guide you through integrating **GetGist** with **Fluent Forms** on your **WordPress Site**.  

> Remember, GetGist is a Premium Feature of the Fluent Forms Plugin. So, to integrate it, you need the Fluent Forms Pro plugin.

## Enable the GetGist Integration

To learn how to enable GetGist integration, follow the steps with the screenshots below-

First, navigate to **Integrations** from the Fluent Forms Navbar, search for **GetGist** using the search bar, and install the **GetGist integration module**.

Now, turn on the **Toggle** to enable the **GetGist** module and click the **Settings Icon** on the right.

![](/images/email-marketing/gist-integration-with-fluent-forms/Enable-GetGist-Integration-01-scaled.webp)

Once you enable GeGist, you will be asked for the **GetGist API Key** of your **GetGist Account**.

![](/images/email-marketing/gist-integration-with-fluent-forms/Configuration-GetGist-02-scaled.webp)

### Get the GetGist Integration API Key

To learn how to get the GetGist Integration API Key from GetGist, follow the steps with screenshots below.

First, log in to your [GetGist Account](https://app.getgist.com/login), then go to **Settings** from the top menu and select the API Key under the API & webhooks section in the left sidebar. Here you will find your **GetGist API Key**. Now, **Copy** the API Key.

![](/images/email-marketing/gist-integration-with-fluent-forms/API-Key-03-scaled.webp)

### Connect GetGist with Fluent Forms

Then, return to the **GetGist Settings** page under the **Global Settings Configure Integration tab** from the **Fluent Forms Navbar**.

Now, **paste** the Getgist **API Key** that was copied before**.**

Press the **Save Settings** button to activate your **GetGist Integration** module.

![](/images/email-marketing/gist-integration-with-fluent-forms/Paste-API-Key-04-scaled.webp)

Here, you can see your **GetGist API integration is up and running**. To disconnect, click the **Disconnect GetGist** button.

![](/images/email-marketing/gist-integration-with-fluent-forms/Disonnect-GetGist-05-scaled.webp)

### Integrate GetGist into Fluent Forms

To learn how to integrate GetGist into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your GetGist, and click the **Settings** button. 

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/email-marketing/gist-integration-with-fluent-forms/form-settings-06-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **GetGist Integration** feed from the dropdown list.

![](/images/email-marketing/gist-integration-with-fluent-forms/settings-Integration-07-scaled.webp)

### Configure GetGist Integration Feed

**A. Feed Name**: Enter a name for your GetGist integration feed.

**B. Map Fields:** Use all the fields under this option to properly link your **GetGist Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **GetGist fields** using the **Shortcode Arrow**. 

**C. Landing URL:** Enable this option to send the page URL where the form was submitted to the Gist lead.

**D. Push IP Address:** Enable this option to send the submitter's last seen IP address to the Gist lead.

**E. Conditional Logic:** If you want to allow **Insightly** integration conditionally based on your submission values, **Enable Conditional Logic** options. To learn more about conditional logic, read the [article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**F. Status:** Enable this feed option to activate the integration.

Now, click the **Save Feed** button to save the integration feed.

![](/images/email-marketing/gist-integration-with-fluent-forms/Add-new-gegist-integration-feed-08-scaled.webp)

After successful Integration, you will see your GetGist integration Feed has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Additionally, you can disable or enable this feed at any time by turning off the **Toggle** if needed.

![](/images/email-marketing/gist-integration-with-fluent-forms/All-form-Integration-09-scaled.webp)

### Preview of Integrated GetGist

Here, you can see a preview of the added GetGist contacts through the Form entries that I set up during the integration.

You can see the form submissions from the **Entries** section of this particular form.

![](/images/email-marketing/gist-integration-with-fluent-forms/Entries-10-scaled-2.webp)

Go to the **GetGist Contacts** section from the top menu to see the integrated contact list in Fluent Forms.

![](/images/email-marketing/gist-integration-with-fluent-forms/all-contact-11-scaled.webp)

This way, you can easily integrate GetGist with Fluent Forms!
