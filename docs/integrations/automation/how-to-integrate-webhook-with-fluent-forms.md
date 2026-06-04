# How to Integrate Webhook with Fluent Forms

**Fluent Forms** integrates with **Webhook** which will help you broadcast your **Form Submissions** to any **Web API Endpoint** with the powerful **Webhook** module. This article will guide you through integrating **Webhook** with **Fluent Forms** on your **WordPress Site**.

> Remember, Webhook is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Webhook Integration

To learn how to enable Webhook integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Webhooks** through the search bar, and enable the **Webhooks** integration module by turning on the **Toggle**.

![](/images/integrations/automation/how-to-integrate-webhook-with-fluent-forms/1.-Enabled-Webhooks-option-scaled.webp)

## Integrating Webhook with Forms

To learn how to integrate Webhook into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Webhook** and click the **Settings** button.

![](/images/integrations/automation/how-to-integrate-webhook-with-fluent-forms/2.-Open-desired-Form-Settings-2-scaled.webp)

Once you are on **Settings & Integrations**, go to the **WebHook** from the left menu, and click the **+ Add New** button.

![](/images/integrations/automation/how-to-integrate-webhook-with-fluent-forms/3.-Add-New-webhook-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Webhook. 

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

1. Request URL: This is also a required field. Here, provide the URL where you want to send the Fluent Form Submission data. More specifically, enter the URL  that is provided by the Webhook recipient.

1. Request Method: Here you need to select the HTTP method used for the Webhook request. Choose one method among the GET, POST, PUT, PATCH, and DELETE.

1. Request Format: Select the data format for the Webhook request. You have to choose one format between JSON and FORM.

1. Request Header: Choose whether you want to send any headers with the Webhook request.

1. Request Body: Select body if you want to send any specific body text with the webhook request, otherwise, all fields will be sent.

1. Conditional Logics: This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [Set up Forms with Conditional Logic](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

Once the setup is done, click the **Save Feed** button, and your Webhook will be integrated into this specific form!

![](/images/integrations/automation/how-to-integrate-webhook-with-fluent-forms/4.-Webhook-Integration-Feed-scaled.webp)

This way you can easily integrate Webhook with Fluent Forms!
