---
description: "Integrating Gist with Fluent Forms allows you to build your Gist email list through the users of Fluent Forms."
---

# How to Integrate Gist

Integrating [Gist](http://getgist.com) with **Fluent Forms** allows you to build your Gist email list through the users of Fluent Forms. This article will guide you through integrating **Gist** with **Fluent Forms** on your **WordPress Site**. For an alternative walkthrough, see the [GetGist integration guide](/gist-integration).  

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/j6Bs2TrcjjI" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **Gist** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Gist Integration

Go to **Integrations** from the **Fluent Forms Navbar**, search for **Gist** in the search bar, and open the **Gist** integration module.

Turn on the **Toggle** to enable **Gist**, then click the **Settings Icon** on the right to open its configuration.

![Enabled Getgist Fluent Forms](/images/integrations/email-marketing/integrate-gist/1.-Enabled-GetGist-scaled.webp)

Once you enable GetGist, you will be asked for the **Gist API Key** of your **Gist Account**.

![Getgist Settings Fluent Forms](/images/integrations/email-marketing/integrate-gist/2.-GetGist-Settings-scaled.webp)

### Get the Gist API URL and API Key

First, log in to your [Gist Account](https://app.getgist.com/users/sign_in) and go to **Settings** from the left sidebar.

Now, go to Settings from the top navbar, open the **API & Webhooks** dropdown, click the **API Key** and you will get your desired **API Key.** Simply, copy the **API Key** by clicking the **Copy** button.

![Copy API Key](/images/integrations/email-marketing/integrate-gist/3.-Copy-API-Key-scaled.webp)

## Connect Gist with Fluent Forms

Then, return to the **Gist API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **Gist** into the **Gist API Key** field.
Finally, press the **Save Settings** button to make your **Gist Integration** module functional.

![Paste API Key](/images/integrations/email-marketing/integrate-gist/4.-Paste-API-Key-scaled.webp)

You can see, your GetGist is connected to your **Fluent Forms** successfully.

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect GetGist** button. 

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-gist/5.-Verify-or-Disconnect-button-scaled.webp)

## Integrate GetGist into Fluent Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **GetGist,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Gist](/images/integrations/email-marketing/integrate-gist/Open-Desired-Form-Settings-scaled-2.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **GetGist Integration** from the dropdown list. 

![Add Integration Button Integrate Gist](/images/integrations/email-marketing/integrate-gist/6.-Add-New-Integration-button-1-scaled.webp)

Once you select the integration, a page will appear with various settings options for configuring the GetGist.

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Map Fields:** Use all the fields under this option to properly link your GetGist Fields with the Form Fields. You can easily select the value for the Form Fields based on the GetGist fields using the Shortcode Arrow.

3. **Lead Tags:** With this option, you can add tags to your GetGist contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag.

4. **Landing URL:** When this option is enabled, Fluent Forms will pass the form page URL to the gist lead.

5. **Push IP Address:** When this option is enabled, FluentForm will pass the “last_seen_ip” to the gist.

6. **Conditional Logics:** This option allows GetGist integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

7. **Enable This Feed:** Check this option to ensure this integration feed stays enabled and all its actions run properly.

Once the setup is done, click the **Save Feed** button. Your GetGist integration will be added to this form.

![Save Feed Button Integrate Gist](/images/integrations/email-marketing/integrate-gist/7.-Save-Feed-button-1-scaled.webp)

After successful Integration, now you will see that your **GetGist Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Getgist Integration Feed](/images/integrations/email-marketing/integrate-gist/8.-Added-GetGist-Integration-feed-scaled.webp)

### Preview of Integrated GetGist

Here, you can see the preview of the added contacts of GetGist through the Form entries that I set up during the integration.

From the **Entries** section of this particular form, you can see four form submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-gist/9.-Form-Entries--scaled.webp)

Now, go to the **Contacts** section from the top navbar, and open the **Contacts** tab.

And, you can see that the users who submitted forms in **Fluent Forms** are automatically added to the selected **GetGist Contact List.** 

![Preview Added Contacts Integrate Gist](/images/integrations/email-marketing/integrate-gist/10.-Preview-of-added-contacts-scaled.webp)

This way you can easily integrate GetGist with Fluent Forms!
