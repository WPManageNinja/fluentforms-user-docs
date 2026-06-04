# How to Integrate Slack with Fluent Forms

**Fluent Forms** allows you to integrate with [Slack](http://slack.com) to send preferred information as instant notifications to your Slack channel when a form is submitted. This article will guide you through integrating **Slack** in **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Slack** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enabling Slack Integration

To learn how to enable Slack integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Slack** through the search bar, and enable the **Slack** integration module by turning on the **Toggle**.

![Enabled Slack Module](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/1.-enabled-Slack-module-scaled.webp)

## Integrating Slack with Forms

To learn how to integrate **Slack** into any specific **Form** in **Fluent** **Forms**, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Slack,** and click the **Settings** button.

![Open Settings Integrate Slack](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/2.-Open-desired-Form-Settings-1-scaled.webp)

Once you are on **Settings & Integrations**, go to **Slack** from the left menu, and turn on the **Integrate Slack Toggle**.

**Now, the settings options will appear to integrate Slack with Fluent Forms. These are:** 

**A. Slack Title**: Here you can set the text and information to add as a notification title for sending to the desired Slack channel.

**B. Webhook URL**: Here, you need to provide the desired **Slack channel’s Webhook URL** where you want to send the notification. To learn how to get the **Webhook URL**, see the [Getting Webhook URL from Slack](#getting-webhook-url-from-slack) section below and follow the steps accordingly.

**C. Select Fields**: Here, you can also select which input fields' information you want to send to the Slack Channel by checking the box/es. Also, you can select all the fields at once by clicking the **Check All** box.

**D. Slack Footer message**: Here you can set the texts and information you want to add as a footer for your notification.

Once the setup is done, click the **Save Feed** button, and your Slack will be integrated into this specific form!

![Save Feed Button Integrate Slack](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/3.-Save-Feed-button-scaled.webp)

### Getting Webhook URL from Slack

To learn how to get the Webhook URL, follow the steps with screenshots below – 

First, you need to create an App on your Slack to get the Webhook URL. To create an app, go to the [Slack API page](https://api.slack.com/apps?new_app=1) and click on the **Create an App** button. 

![Creat App Fluent Forms](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/4.-Creat-an-app-scaled.webp)

Select the **From Scratch** option.

![From Scratch Fluent Forms](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/5.-From-Scratch.webp)

Give your **app a Name** to easily find it later, **choose your Workspace** from the dropdown list, and click the **Create App** button.

![App Name Create App Button](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/6.-App-Name-Create-app-button.webp)

Once you create the app, open the **Incoming Webhooks** page and enable the **Toggle** button to activate it.

Now, scroll down to the **Webhook URLs for Your Workspac**e section and click the **Add New Webhook to Workspace** button. 

![Incoming Webhooks Fluent Forms](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/7.-Incoming-Webhooks-scaled.webp)

Now, select your desired Slack **Channel** from the dropdown list where you want to send the notifications, and click the **Allow** button

![Select Channel Allow Button Integrate Slack](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/8.-Select-desired-channel-Allow-button.webp)

Once you hit the Allow button, you will be redirected to the **Incoming Webhooks** page, where you will get your desired **Webhook URL**, copy it by clicking the **Copy** button.

![Copy Webhook URL](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/9.-Copy-Webhook-URL-1.webp)

## Preview of Integrated Slack

Here, you can see the preview of added Slack Notifications through the Form Entries based on the Integration.

**For example**, you can see three new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/10.-Entries-tab-1-scaled.webp)

Now, go to the **Slack Channel** you integrated and you can see the preview of the notification messages of Slack through the Form entries.

![Preview Added Notifications Integrate Slack](/images/integrations/team-chat/how-to-integrate-slack-with-fluent-forms/11.-Preview-of-added-notifications-1.webp)

This way, you can easily integrate Slack with Fluent Forms!
