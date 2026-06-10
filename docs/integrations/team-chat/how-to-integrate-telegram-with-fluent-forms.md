# How to Integrate Telegram with Fluent Forms

**Fluent Forms** allows you to integrate with [Telegram](https://telegram.org/) to send desired information as instant notifications to your Telegram channel or group when a form is submitted. This article will guide you through integrating **Telegram** in **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Telegram** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enabling Telegram Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Telegram** through the search bar, and get the **Telegram** integration module.

Now, turn on the **Toggle** to enable **Telegram**, and click the **Settings Icon** on the right side. 

![Enabled Telegram Module](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/1.-Enabled-Telegram-module-scaled.webp)

Once you enable Telegram, you will be asked for the **Bot Token** and the **Default Channel/Group Chat ID** of your **Telegram Account**.

![Telegram Settings Page](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/2.-Telegram-Settings-page-scaled.webp)

## Getting the Bot Token and Chat ID from Telegram

### Getting Bot Token

First, log in to your **Telegram Account**, go to the [@Bot](https://t.me/BotFather)[Father](https://t.me/BotFather) chat, and click the **Start** button to start the bot in your Telegram application.

![Botfather Start Button](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/3.-BotFather-Start-button-scaled.webp)

Then **create a new bot** by sending the **‘/newbot’** command using the help message.

![Create Bot Fluent Forms](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/4.-Create-a-new-bot.webp)

Provide a relevant **Name** and a **Username** for your bot (**username** must end with the text **‘Bot’** or **‘bot’**). After finishing these steps, **@BotFather** will provide the **Bot Token**. Simply, copy it.

![Copy Bot Token](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/5.-Copy-Bot-Token.webp)

### Getting Channel/Group Chat ID

To get the **Channel/Group Chat ID**, go to any **existing Telegram Channel/Group** or **create a Channel/Group**. For example, I will collect the **Chat ID** from an **existing** **Telegram Group** to show the further process.

First, **add** the **Bot** you created through **@BotFather** in the previous step **as a member of the group** and give your bot **Admin Access** (i.e., simply make the bot an admin of your group chat).

Once you make your Bot Admin, you can see the preview from **View group info** by clicking the **Three-dots icon** on the right side of the **Group page**.

![Group View Fluent Forms](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/6.-Fluent-Forms-group-view.webp)

Finally, to get the **Chat ID** of your group, add [@GetIdsBot](https://t.me/getidsbot) as a member of the same group.

After adding the **GetIDs Bot as a member**, you will receive a message to the group with the Group **Chat ID**. Simply, copy it.

> [!Note]
> **Chat ID** starts with a minus sign (`-`). Copy it exactly as shown by the GetIDs bot.

![Copy Chat ID](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/7.-Copy-Chat-ID.webp)

## Connecting Telegram with Fluent Forms

Return to the **Telegram Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **Bot Token** and **Chat ID** you copied from **Telegram** into the **Bot Token** and **Default Channel/Group Chat ID** fields, respectively.

Plus, to check whether integration is successful, enter any text in the **Test Message (optional)** field.

Finally, press the **Save Settings** button, and your **Telegram Integration** module will be enabled.

![Paste Bot Token And Chat ID](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/8.-Paste-Bot-Token-and-Chat-ID-scaled.webp)

Here, you can see that the test message has been successfully sent to the Telegram Group, indicating the integration is now functional.

![Preview Test Message Integrate Telegram](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/9.-Preview-of-Test-Message.webp)

Finally, you can see that your Telegram is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Telegram** buttons.

![Verify Or Disconnect Button](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/10.-Verify-or-Disconnect-button-scaled.webp)

## Integrating Telegram with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Telegram,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Telegram](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/11.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Telegram Integration** feed from the dropdown list. 

![Add Integration Button Integrate Telegram](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/12.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Telegram. 

1. **Name:** Here, you can set a name according to your preference for your feed. This field is required to be filled in.

2. **Message to Send:** Here, you can set the texts and information you want to send to the Telegram channel/group as a notification. Also, you can use the Shortcode button to set the user data from form entries that you want to send to your Telegram Group/Channel.

3. **Custom Chat/Channel ID:** Use this field if you want to integrate a form-specific telegram group/channel. Otherwise, keep it empty.

4. **Conditional Logics:** This option allows Telegram integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

5. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Telegram will be integrated into this specific form!

![Save Feed Button Integrate Telegram](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/13.-Save-Feed-button-scaled.webp)

After successful Integration, you will see that your **Telegram Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Telegram Integration Feed](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/14.-Added-Telegram-Integration-Feed-scaled.webp)

### Preview of Integrated Telegram

Here, you can see the preview of added Telegram Notifications through the Form Entries based on the Integration.

**For example**, you can see two new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/15.-Entries-tab-scaled.webp)

Now, go to the **Telegram Group** you integrated and you can see the preview of the notification messages of Telegram through the Form entries.

![Preview Added Notification Integrate Telegram](/images/integrations/team-chat/how-to-integrate-telegram-with-fluent-forms/16.-Preview-of-added-notification.webp)

This way, you can easily integrate Telegram with Fluent Forms!
