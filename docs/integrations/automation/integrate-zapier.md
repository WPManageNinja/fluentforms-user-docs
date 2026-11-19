---
description: "Fluent Forms integrates with Zapier, a user-friendly, cloud-based platform that blends the simplicity of spreadsheets with the functionality of a database…"
---

# Integrate Zapier

**Fluent Forms** connects to [Zapier](http://zapier.com), an automation platform that links apps and automates workflows with Zaps. This guide shows you how to connect **Zapier** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Zapier** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Zapier Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Zapier**, and turn on the **Toggle** to enable the **Zapier** module.

![Enabled Zapier Module](/images/integrations/automation/integrate-zapier/1.-enabled-Zapier-module-scaled.webp)

## Integrate Zapier with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Zapier**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Zapier](/images/integrations/automation/integrate-zapier/2.-Open-desired-Form-Settings-scaled-2.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **Zapier** from the drawer.

![Add Webhook Button Integrate Zapier](/images/integrations/automation/integrate-zapier/3.-Add-Webhook-button-scaled.webp)

The feed settings open with these options:

- **Name:** Enter a name for your feed. This field is required.
- **Webhook URL:** Enter the Zapier Webhook URL that receives the Fluent Forms submission data. To get it, follow the steps in [Getting the Webhook URL from Zapier](#getting-the-webhook-url-from-zapier). To send data to a custom endpoint instead, see [How to Integrate Webhook with Fluent Forms](/integrate-webhook).
- **Conditional Logics:** Run the integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

Click **Save** when the setup is done. Zapier is now connected to this form.

![Zapier Integration Feed Page](/images/integrations/automation/integrate-zapier/4.-Zapier-Integration-feed-page-scaled.webp)

### Getting the Webhook URL from Zapier

1. Log in to your [Zapier account](https://zapier.com/app/dashboard).
2. Click **+ Create** and then **Zaps** to create a new Zap.

![Create Zaps Button](/images/integrations/automation/integrate-zapier/5.-create-Zaps-button-scaled.webp)

#### Add the Webhook Trigger

1. Click the **Trigger** button to set the trigger.

![Trigger Button Fluent Forms](/images/integrations/automation/integrate-zapier/6.-Trigger-button-scaled.webp)

2. Select the **Webhooks** trigger.

![Webhook Option Fluent Forms](/images/integrations/automation/integrate-zapier/7.-Webhook-option.webp)

3. Click the **Choose an event** field. In the pop-up, select **Catch Hook** as the **Trigger event**.

![Cache Hook Fluent Forms](/images/integrations/automation/integrate-zapier/8.-Cache-hook-scaled.webp)

4. Click **Continue**.

![Continue Button Fluent Forms](/images/integrations/automation/integrate-zapier/9.-Continue-button.webp)

5. Click **Copy** to copy your **Webhook URL**. You can also click **Test Trigger** to test the trigger.

![Copy Webhook URL](/images/integrations/automation/integrate-zapier/10.-copy-Webhook-URL.webp)

6. Return to the **Zapier** feed in the form's **Configuration** → **Integrations & Add-ons** → **Integrations** page.
7. Paste the **Webhook URL** you copied from **Zapier** into the **Webhook URL** field.
8. Click **Save** to activate the **Zapier Integration**. You can also click **Send Data Sample** to test it.

![Paste Webhook URL](/images/integrations/automation/integrate-zapier/11.-Paste-Webhook-URL-scaled.webp)

#### Add an Action

Test the integration by submitting a demo form. To test it, you need to add an action to the Zap.

1. Click the **Action** button.

![Action Button Fluent Forms](/images/integrations/automation/integrate-zapier/12.-Action-button-scaled.webp)

2. Select the **App** that runs the action and complete the configuration step by step.

![Select Action Integrate Zapier](/images/integrations/automation/integrate-zapier/13.-Select-action-scaled.webp)

3. After you add the **Trigger** and **Action**, click **Publish** to publish the Zap.

![Publish App Fluent Forms](/images/integrations/automation/integrate-zapier/14.Publish-app.webp)

### Preview of Integrated Zapier

You can see a preview of the form data that Zapier receives through the integration.

![Preview Zapier Integrate Zapier](/images/integrations/automation/integrate-zapier/15.-Preview-of-Zapier-scaled.webp)
