---
description: "Fluent Forms allows you to integrate with Telegram to send desired information as instant notifications to your Telegram channel or group when a form is…"
---

# Integrate Telegram

**Fluent Forms** connects to [Telegram](https://telegram.org/) and sends instant notifications to your Telegram channel or group when a form is submitted. You choose the information each notification includes. This guide shows you how to set up **Telegram** in **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Telegram** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Telegram Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Telegram**, and find the **Telegram** integration module.

Turn on the **Toggle** to enable **Telegram**, then click **Manage** on the right side.

![Enabled Telegram Module](/images/integrations/team-chat/integrate-telegram/1.-Enabled-Telegram-module-scaled.webp)

Once you enable Telegram, Fluent Forms asks for the **Bot Token** and the **Default Channel/Group Chat ID** of your **Telegram Account**.

![Telegram Settings Page](/images/integrations/team-chat/integrate-telegram/2.-Telegram-Settings-page-scaled.webp)

## Get the Bot Token and Chat ID from Telegram

### Get the Bot Token

1. Log in to your **Telegram Account** and open the chat with [@BotFather](https://t.me/BotFather).
2. Click **Start** to start the bot in your Telegram application.

![Botfather Start Button](/images/integrations/team-chat/integrate-telegram/3.-BotFather-Start-button-scaled.webp)

3. **Create a new bot** by sending the **‘/newbot’** command from the help message.

![Create Bot Fluent Forms](/images/integrations/team-chat/integrate-telegram/4.-Create-a-new-bot.webp)

4. Enter a relevant **Name** and a **Username** for your bot. The **username** must end with **‘Bot’** or **‘bot’**.
5. Copy the **Bot Token** that **@BotFather** provides.

![Copy Bot Token](/images/integrations/team-chat/integrate-telegram/5.-Copy-Bot-Token.webp)

### Get the Channel/Group Chat ID

Use any **existing Telegram Channel/Group**, or **create a Channel/Group**. This example uses an **existing** **Telegram Group**.

1. **Add** the **Bot** you created through **@BotFather** **as a member of the group**.
2. Give your bot **Admin Access** by making it an admin of your group chat.
3. To check the result, click the **Three-dots icon** on the right side of the **Group page** and open **View group info**.

![Group View Fluent Forms](/images/integrations/team-chat/integrate-telegram/6.-Fluent-Forms-group-view.webp)

4. Add [@GetIdsBot](https://t.me/getidsbot) as a member of the same group.
5. Copy the group **Chat ID** from the message that the **GetIDs Bot** sends to the group.

> [!Note]
> **Chat ID** starts with a minus sign (`-`). Copy it exactly as shown by the GetIDs bot.

![Copy Chat ID](/images/integrations/team-chat/integrate-telegram/7.-Copy-Chat-ID.webp)

## Connect Telegram with Fluent Forms

1. Return to the **Telegram Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Bot Token** and **Chat ID** you copied from **Telegram** into the **Bot Token** and **Default Channel/Group Chat ID** fields.
3. To test the integration, enter any text in the **Test Message (optional)** field.
4. Click **Save** to enable the **Telegram Integration** module.

![Paste Bot Token And Chat ID](/images/integrations/team-chat/integrate-telegram/8.-Paste-Bot-Token-and-Chat-ID-scaled.webp)

Telegram receives the test message in your group, which confirms the integration works.

![Preview Test Message Integrate Telegram](/images/integrations/team-chat/integrate-telegram/9.-Preview-of-Test-Message.webp)

Fluent Forms now shows that your Telegram is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Telegram** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/team-chat/integrate-telegram/10.-Verify-or-Disconnect-button-scaled.webp)

## Integrate Telegram with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Telegram**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Telegram](/images/integrations/team-chat/integrate-telegram/11.-Open-desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Telegram Integration** feed from the drawer.

![Add Integration Button Integrate Telegram](/images/integrations/team-chat/integrate-telegram/12.-Add-new-integration-button-scaled.webp)

The feed settings open with these options:

1. **Name:** Enter a name for your feed. This field is required.
2. **Message to Send:** Enter the text you want to send to the Telegram channel/group as a notification. Use the Shortcode button to add user data from form entries.
3. **Custom Chat/Channel ID:** Enter a Telegram group/channel ID to send this form's notifications to a form-specific group/channel. Otherwise, leave it empty.
4. **Conditional Logics:** Run the Telegram integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
5. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Telegram is now connected to this form.

![Save Feed Button Integrate Telegram](/images/integrations/team-chat/integrate-telegram/13.-Save-Feed-button-scaled.webp)

The **Telegram Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Telegram Integration Feed](/images/integrations/team-chat/integrate-telegram/14.-Added-Telegram-Integration-Feed-scaled.webp)

### Preview of Integrated Telegram

You can see the form submissions that trigger Telegram notifications in the **Entries** tab of the form. In this example, the form has two new **Form Submissions**.

![Entries Tab Fluent Forms](/images/integrations/team-chat/integrate-telegram/15.-Entries-tab-scaled.webp)

Open the **Telegram Group** you connected to see the notification messages for those entries.

![Preview Added Notification Integrate Telegram](/images/integrations/team-chat/integrate-telegram/16.-Preview-of-added-notification.webp)
