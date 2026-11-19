---
description: "Fluent Forms allows you to integrate with Discord to send desired information as instant notifications to your Discord channel when a form is submitted."
---

# Integrate Discord

**Fluent Forms** connects to [Discord](http://discord.com) and sends instant notifications to your Discord channel when a form is submitted. You choose the information each notification includes. This guide shows you how to set up **Discord** in Fluent Forms on your **WordPress site**.

> [!Note]
> **Discord** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Discord Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Discord**, and turn on the **Toggle** to enable the **Discord** module.

![Enabled Discord Module](/images/integrations/team-chat/integrate-discord/1.-Enabled-Discord-module-scaled.webp)

## Integrate Discord with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Discord**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Discord](/images/integrations/team-chat/integrate-discord/2.-Open-desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Discord Integration** feed from the drawer.

![Add Integration Button Integrate Discord](/images/integrations/team-chat/integrate-discord/3.-Add-new-integration-button-scaled.webp)

The feed settings open with these options:

1. **Name:** Enter a name for your feed. This field is required.
2. **Webhook URL:** Enter the Webhook URL of the Discord channel that receives the notification. To get it, follow the steps in [Getting Webhook URL from Discord](#getting-webhook-url-from-discord).
3. **Description:** Enter the text you want to send to the Discord channel as a notification. Use the Shortcode button to add user data from form entries.
4. **Input Fields:** Check the input fields whose information you want to send to the Discord channel.
5. **Footer:** Enter the text you want to add as the footer of the notification. Use the Shortcode button to add user data from form entries.
6. **Conditional Logics:** Run the Discord integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
7. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Discord is now connected to this form.

![Save Feed Button Integrate Discord](/images/integrations/team-chat/integrate-discord/4.-Save-Feed-button-scaled.webp)

The **Discord Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Discord Integration Feed](/images/integrations/team-chat/integrate-discord/5.-Added-Discord-Integration-Feed-scaled.webp)

### Getting Webhook URL from Discord

1. Open the **Discord App**, or open **Discord** in your browser.
2. Create a new server with the **Plus Icon (+)**, or use an existing server.

![Add Servar Plus Icon Integrate Discord](/images/integrations/team-chat/integrate-discord/6.-Add-Servar-Plus-Icon.webp)

This example uses an existing channel.

3. Click the **Settings Icon** on the right side of the channel name.

![Settings Servar Integrate Discord](/images/integrations/team-chat/integrate-discord/7.-Settings-of-desired-Servar.webp)

4. Select **Integrations** from the left sidebar and click **Create Webhook**.

![Create Webhook Fluent Forms](/images/integrations/team-chat/integrate-discord/8.-Create-Webhook.webp)

5. Click the **Arrow Icon** next to **Captain Hook**, then click **Copy Webhook URL**.

![Copy Webhook URL](/images/integrations/team-chat/integrate-discord/9.-Copy-Webhook-URL.webp)

### Preview of Integrated Discord

You can see the form submissions that trigger Discord notifications in the **Entries** tab of the form. In this example, the form has three new **Form Submissions**.

![Entries Tab Fluent Forms](/images/integrations/team-chat/integrate-discord/10.-Entries-tab-scaled.webp)

Open the **Discord Channel** you connected to see the notification messages for those entries.

![Preview Added Notifications Integrate Discord](/images/integrations/team-chat/integrate-discord/11.-Preview-of-added-notifications.webp)
