# How to Integrate Discord with Fluent Forms

**Fluent Forms** allows you to integrate with [Discord](http://discord.com) to send desired information as instant notifications to your Discord channel when a form is submitted. This article will guide you through integrating **Discord** in **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Discord** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enabling Discord Integration

To learn how to enable Discord integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Discord** through the search bar, and enable the **Discord** integration module by turning on the **Toggle**.

![Enabled Discord Module](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/1.-Enabled-Discord-module-scaled.webp)

## Integrating Discord with Forms

To learn how to integrate Discord into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Discord,** and click the **Settings** button.

![Open Settings Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/2.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Discord Integration** feed from the dropdown list. 

![Add Integration Button Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/3.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Discord. 

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

1. Webhook URL: Here, you need to provide the desired Discord Channels’ Webhook URL where you want to send the notification. To learn how to get the Webhook URL, see the [Getting Webhook URL from Discord](#getting-webhook-url-from-discord) section below and follow the process accordingly.

1. Description: Here you can set the texts and information you want to send to the Discord Channel as a notification. Also, you can use the Shortcode button to set the user data from form entries that you want to send to your Discord Channel.

1. Input Fields: Here, you can also select which input fields' information you want to send to the Discord Channel by checking the box.

1. Footer: Here you can set the texts and information you want to add as a footer in the notification. Also, you can use the Shortcode button to set the user data from form entries that you want to add as a footer to your Discord Channel.

1. Conditional Logics: This option allows Discord integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [Set up Forms with Conditional Logic](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

1. Enable This Feed: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Discord will be integrated into this specific form!

![Save Feed Button Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/4.-Save-Feed-button-scaled.webp)

After successful Integration, you will now see that your **Discord Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.  Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Discord Integration Feed](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/5.-Added-Discord-Integration-Feed-scaled.webp)

### Getting Webhook URL from Discord

To learn how to get the Webhook URL, follow the steps with screenshots below – 

First, go to your **Discord App** or open **Discord** in your browser.  Now, you can create a new server by clicking the **Plus Icon (+)**, or you can use any existing server. 

![Add Servar Plus Icon Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/6.-Add-Servar-Plus-Icon.webp)

**For example**, I am using an existing channel to show you the whole process.
First, go to the desired channel settings by clicking the **Settings Icon** on the right side of the channel name.

![Settings Servar Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/7.-Settings-of-desired-Servar.webp)

Then, select the **Integrations** from the left sidebar and click the **Create Webhook** button.

![Create Webhook Fluent Forms](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/8.-Create-Webhook.webp)

Finally, click the **Arrow Icon** next to **Captain Hook** to get your desired **Webhook URL** inside the **Copy Webhook URL** button. Simply click it, and your **Webhook URL** will be copied.

![Copy Webhook URL](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/9.-Copy-Webhook-URL.webp)

## Preview of Integrated Discord

Here, you can see the preview of added Discord Notifications through the Form Entries based on the Integration.

**For example**, you can see three new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/10.-Entries-tab-scaled.webp)

Now, go to the **Discord Channel** you integrated and you can see the preview of the notification messages of Discord through the Form entries.

![Preview Added Notifications Integrate Discord](/images/integrations/team-chat/how-to-integrate-discord-with-fluent-forms/11.-Preview-of-added-notifications.webp)

This way, you can easily integrate Discord with Fluent Forms!
