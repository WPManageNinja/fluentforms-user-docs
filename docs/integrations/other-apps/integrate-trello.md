---
description: "Trello is an integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation."
---

# Integrate Trello

Trello is a visual project-management tool. With the Trello integration, Fluent Forms collects customer information and creates cards in your Trello list automatically. This guide shows you how to connect **Trello** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Trello** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Trello Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Trello**, and find the **Trello** integration module.

Turn on the **Toggle** to enable **Trello**, then click **Manage** on the right side.

![Enabled Trello Module](/images/integrations/other-apps/integrate-trello/1.-enabled-Trello-module-scaled.webp)

Once you enable Trello, Fluent Forms asks for the **Trello Access Key** of your **Trello Account**.

> [!Note]
> If you do not have a Trello account, [create one here](https://trello.com/signup).

![Trello API Settings](/images/integrations/other-apps/integrate-trello/2.-Trello-API-Settings-scaled.webp)

### Get the Trello API Access Key

1. Click [Get Access Token](https://trello.com/1/authorize?expiration=never&name=FluentForm%20Pro&scope=read,write,account&response_type=token&key=f79dfb43d0becc887dc488e99bed0687) to authenticate Trello. Trello opens its own page.
2. Click **Allow** to grant access to your account.

![Allow Button Fluent Forms](/images/integrations/other-apps/integrate-trello/3.-Allow-button.webp)

3. Copy the access key that Trello shows.

![Copy API Key](/images/integrations/other-apps/integrate-trello/4.-Copy-API-Key-2.webp)

## Connect Trello with Fluent Forms

1. Return to the **Trello API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Access Key** you copied from **Trello** into the **Trello Access Key** field.
3. Click **Save** to activate the **Trello Integration**.

![Paste API Key](/images/integrations/other-apps/integrate-trello/5.-Paste-API-Key-scaled.webp)

Fluent Forms now shows that your Trello is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Trello** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/other-apps/integrate-trello/6.-Verify-or-Disconnect-button-scaled-2.webp)

## Integrate Trello with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Trello**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Trello](/images/integrations/other-apps/integrate-trello/7.-Open-desired-Form-Settings-1-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Trello Integration** feed from the drawer.

![Add Integration Button Integrate Trello](/images/integrations/other-apps/integrate-trello/8.-Add-New-Integration-button-1-scaled.webp)

The feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Trello Configuration:** Use the Arrow Icon to select the Trello board and list or lists that receive the submission data. You can also set the color for new card labels and the members who can view the cards.
3. **Card Title:** Enter the title for new cards. Use shortcodes to add dynamic data to the title.
4. **Card Content:** Enter the content for your cards. You can also use shortcodes here.
5. **Card Position:** Set the position of your cards.
6. **Conditional Logics:** Run the Trello integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
7. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Trello is now connected to this form.

![Save Feed Button Integrate Trello](/images/integrations/other-apps/integrate-trello/9.-Save-Feed-button-2-scaled.webp)

The **Trello Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Trello Integration Feed](/images/integrations/other-apps/integrate-trello/10.-Added-Trello-Integration-Feed-scaled.webp)

### Preview of Integrated Trello

You can see the form submissions that create Trello cards in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Tab Fluent Forms](/images/integrations/other-apps/integrate-trello/11.-Entries-tab.webp)

In Trello, open the **Workspace** section in the left sidebar, open the **Board**, and view the **List** you connected to **Fluent Forms**. The **users who submitted the forms** now appear as cards in the selected **Trello List**.

![Preview Added Cards Integrate Trello](/images/integrations/other-apps/integrate-trello/12.-preview-of-Added-cards-scaled.webp)

Click a card to see the details of that user.

![Preview Details Specific Card Integrate Trello](/images/integrations/other-apps/integrate-trello/13.-Preview-of-details-of-a-specific-card.webp)
