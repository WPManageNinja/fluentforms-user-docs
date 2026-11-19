---
description: "Integrating Gist with Fluent Forms allows you to build your Gist email list through the users of Fluent Forms."
---

# How to Integrate Gist

The [Gist](http://getgist.com) integration lets you build your Gist email list from the users of **Fluent Forms**. This guide shows you how to connect **Gist** with **Fluent Forms** on your **WordPress site**. For an alternative walkthrough, see the [GetGist integration guide](/gist-integration).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/j6Bs2TrcjjI" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> [!Note]
> **Gist** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Gist Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Gist**, and open the **Gist** integration module.

Turn on the **Toggle** to enable **Gist**, then click **Manage** on the right to open its configuration.

![Enabled Getgist Fluent Forms](/images/integrations/email-marketing/integrate-gist/1.-Enabled-GetGist-scaled.webp)

Once you enable GetGist, Fluent Forms asks for the **GetGist API Key** of your **Gist Account**.

![Getgist Settings Fluent Forms](/images/integrations/email-marketing/integrate-gist/2.-GetGist-Settings-scaled.webp)

### Get the Gist API Key

1. Log in to your [Gist Account](https://app.getgist.com/users/sign_in) and go to **Settings** in the left sidebar.
2. Go to Settings in the top navbar and open the **API & Webhooks** dropdown.
3. Click **API Key**, then click **Copy** to copy your **API Key.**

![Copy API Key](/images/integrations/email-marketing/integrate-gist/3.-Copy-API-Key-scaled.webp)

## Connect Gist with Fluent Forms

1. Return to the **Gist API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **Gist** into the **GetGist API Key** field.
3. Click **Save** to activate the **Gist Integration** module.

![Paste API Key](/images/integrations/email-marketing/integrate-gist/4.-Paste-API-Key-scaled.webp)

Fluent Forms now shows that GetGist is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect GetGist** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/email-marketing/integrate-gist/5.-Verify-or-Disconnect-button-scaled.webp)

## Integrate GetGist into Fluent Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **GetGist**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Gist](/images/integrations/email-marketing/integrate-gist/Open-Desired-Form-Settings-scaled-2.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **GetGist Integration** from the drawer.

![Add Integration Button Integrate Gist](/images/integrations/email-marketing/integrate-gist/6.-Add-New-Integration-button-1-scaled.webp)

The feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Map Fields:** Link your GetGist fields with the form fields. Use the Shortcode Arrow to select the value for each field.
3. **Lead Tags:** Add tags to your GetGist contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use shortcodes as the tag.
4. **Landing URL:** When enabled, Fluent Forms passes the form page URL to the Gist lead.
5. **Push IP Address:** When enabled, Fluent Forms passes the “last_seen_ip” to Gist.
6. **Conditional Logics:** Run the GetGist integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
7. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. The GetGist integration is now added to this form.

![Save Feed Button Integrate Gist](/images/integrations/email-marketing/integrate-gist/7.-Save-Feed-button-1-scaled.webp)

The **GetGist Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Getgist Integration Feed](/images/integrations/email-marketing/integrate-gist/8.-Added-GetGist-Integration-feed-scaled.webp)

### Preview of Integrated GetGist

You can see the form submissions that add GetGist contacts in the **Entries** section of the form. In this example, the form has four submissions.

![Entries Fluent Forms](/images/integrations/email-marketing/integrate-gist/9.-Form-Entries--scaled.webp)

Open **Contacts** in the top navbar, then open the **Contacts** tab. The users who submitted forms in **Fluent Forms** now appear in the selected **GetGist Contact List.**

![Preview Added Contacts Integrate Gist](/images/integrations/email-marketing/integrate-gist/10.-Preview-of-added-contacts-scaled.webp)
