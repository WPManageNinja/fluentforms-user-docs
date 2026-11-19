---
description: "Fluent Forms allows you to integrate with Slack to send preferred information as instant notifications to your Slack channel when a form is submitted."
---

# Integrate Slack

**Fluent Forms** connects to [Slack](http://slack.com) and sends instant notifications to your Slack channel when a form is submitted. You choose the information each notification includes. This guide shows you how to set up **Slack** in **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Slack** is included in the free **Fluent Forms** plugin. The **Select Fields** option needs **Fluent Forms Pro**.

## Enable Slack Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Slack**, and turn on the **Toggle** to enable the **Slack** module.

![Enabled Slack Module](/images/integrations/team-chat/integrate-slack/1.-enabled-Slack-module-scaled.webp)

## Integrate Slack with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Slack**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Slack](/images/integrations/team-chat/integrate-slack/2.-Open-desired-Form-Settings-1-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **Slack** from the drawer.

The feed settings open with these options:

- **Slack Title:** Enter the text that appears as the notification title in your Slack channel.
- **Webhook URL:** Enter the **Webhook URL** of the Slack channel that receives the notification. To get it, follow the steps in [Get the Webhook URL from Slack](#getting-webhook-url-from-slack).
- **Select Fields (Pro):** Check the input fields whose information you want to send to the Slack channel. Check **Check All** to select every field at once.
- **Slack Footer message:** Enter the text that appears as the footer of the notification.

Click **Save** when the setup is done. Slack is now connected to this form.

![Save Feed Button Integrate Slack](/images/integrations/team-chat/integrate-slack/3.-Save-Feed-button-scaled.webp)

### Getting Webhook URL from Slack

You need to create an app in Slack to get the Webhook URL.

1. Go to the [Slack API page](https://api.slack.com/apps?new_app=1) and click **Create an App**.

![Creat App Fluent Forms](/images/integrations/team-chat/integrate-slack/4.-Creat-an-app-scaled.webp)

2. Select **From Scratch**.

![From Scratch Fluent Forms](/images/integrations/team-chat/integrate-slack/5.-From-Scratch.webp)

3. Enter an **app name** you can find later, **choose your Workspace** from the dropdown list, and click **Create App**.

![App Name Create App Button](/images/integrations/team-chat/integrate-slack/6.-App-Name-Create-app-button.webp)

4. Open the **Incoming Webhooks** page and turn on the **Toggle** button.
5. Scroll down to **Webhook URLs for Your Workspace** and click **Add New Webhook to Workspace**.

![Incoming Webhooks Fluent Forms](/images/integrations/team-chat/integrate-slack/7.-Incoming-Webhooks-scaled.webp)

6. Select the Slack **Channel** that receives the notifications and click **Allow**.

![Select Channel Allow Button Integrate Slack](/images/integrations/team-chat/integrate-slack/8.-Select-desired-channel-Allow-button.webp)

Slack redirects you to the **Incoming Webhooks** page, where your **Webhook URL** appears. Click **Copy** to copy it.

![Copy Webhook URL](/images/integrations/team-chat/integrate-slack/9.-Copy-Webhook-URL-1.webp)

### Preview of Integrated Slack

You can see the form submissions that trigger Slack notifications in the **Entries** tab of the form. In this example, the form has three new **Form Submissions**.

![Entries Tab](/images/integrations/team-chat/integrate-slack/10.-Entries-tab-1-scaled.webp)

Open the **Slack Channel** you connected to see the notification messages for those entries.

![Preview Added Notifications Integrate Slack](/images/integrations/team-chat/integrate-slack/11.-Preview-of-added-notifications-1.webp)
