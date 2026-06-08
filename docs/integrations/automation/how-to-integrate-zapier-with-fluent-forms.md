# How to Integrate Zapier with Fluent Forms

**Fluent Forms** integrates with [Zapier](http://zapier.com), a user-friendly, cloud-based platform that blends the simplicity of spreadsheets with the functionality of a database to help organize and collaborate on various tasks and projects. 

This article will guide you through integrating **Zapier** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Zapier** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enabling Zapier Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Zapier** through the search bar, and enable the **Zapier** integration module by turning it on the **Toggle**. 

![Enabled Zapier Module](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/1.-enabled-Zapier-module-scaled.webp)

## Integrating Zapier with Forms

Go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Zapier,** and click the **Settings** button.  

<<<<<<< HEAD
=======
> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

>>>>>>> tajulauthlab
![Open Settings Integrate Zapier](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/2.-Open-desired-Form-Settings-scaled-2.webp)

Once you are on **Settings & Integrations**, go to **Zapier** from the left menu, and click the **+ Add Webhook** button.

![Add Webhook Button Integrate Zapier](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/3.-Add-Webhook-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Zapier.

- **Name:** Here, you can set a name according to your preference for your feed. This field is required to be filled in.

- **Webhook URL:** Here, provide the Zapier Webhook URL where you want to send the Fluent Forms submission data. Read this Section to learn how to get the Zapier Webhook URL.

<<<<<<< HEAD
- Webhook URL: Here, provide the Zapier Webhook URL where you want to send the Fluent Forms submission data. Read the [Getting the Webhook URL from Zapier](#getting-the-webhook-url-from-zapier) section below to learn how to get it. To send data to a custom endpoint instead, see [How to Integrate Webhook with Fluent Forms](/docs/how-to-integrate-webhook-with-fluent-forms).

- Conditional Logics: This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [Set up Forms with Conditional Logic](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).
=======
- **Conditional Logics:** This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.
>>>>>>> tajulauthlab

Once the setup is done, click the **Save Feed** button, and your Zapier will be integrated into this specific form!

![Zapier Integration Feed Page](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/4.-Zapier-Integration-feed-page-scaled.webp)

### Getting the Webhook URL from Zapier

To learn how to get the Webhook URL from Zapier, follow the steps below – 

First, go to your [Zapier account](https://zapier.com/app/dashboard) and log in to the dashboard.
Now, click the **+ Create** button and press the **Zaps** button to create a new Zap.

![Create Zaps Button](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/5.-create-Zaps-button-scaled.webp)

#### Adding Webhook Trigger

Click the Trigger button to set the trigger

![Trigger Button Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/6.-Trigger-button-scaled.webp)

Select **Webhooks** trigger.

![Webhook Option Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/7.-Webhook-option.webp)

Click on the **Choose an event** field, and a pop-up will appear to select your **Trigger event**. Select **Catch Hook** as a trigger event.

![Cache Hook Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/8.-Cache-hook-scaled.webp)

Once you are done with the configuration, click the **Continue** button.

![Continue Button Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/9.-Continue-button.webp)

And you will get your **Webhook URL**. Now, simply copy it by clicking the **Copy** button.
You can also test the trigger by clicking the **Test Trigger** button.

![Copy Webhook URL](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/10.-copy-Webhook-URL.webp)

Now, return to the **Zapier Integration** under the **Settings & Integrations** tab of the desired Form.
Paste the **Webhook URL** you copied from **Zapier** into the **Webhook URL** field.

Finally, press the **Save Feed** button to make your **Zapier Integration** module functional.
You can also test the integration by clicking the **Send Data Sample** button.

![Paste Webhook URL](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/11.-Paste-Webhook-URL-scaled.webp)

#### Adding Action

Once you have successfully integrated Zapier with Fluent Forms, it is better to test the integration by submitting a demo form.

To test the Zapier Integration successfully, you need to add an action to this app.
Click the **Action** button to set the action for testing the integration.

![Action Button Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/12.-Action-button-scaled.webp)

Select an **App** through which you want to run the action and complete the full configuration process step-by-step.

![Select Action Integrate Zapier](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/13.-Select-action-scaled.webp)

Once you have added the **Trigger** and **Action**, publish the **Zapier App** by clicking the **Publish** button.

![Publish App Fluent Forms](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/14.Publish-app.webp)

### Preview of Integrated Zapier

Here, you can see the preview of the emails sent through the Form entries that I set up during the integration. 

![Preview Zapier Integrate Zapier](/images/integrations/automation/how-to-integrate-zapier-with-fluent-forms/15.-Preview-of-Zapier-scaled.webp)

This way you can easily integrate Zapier with Fluent Forms!
