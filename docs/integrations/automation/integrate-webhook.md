---
description: "Fluent Forms integrates with Webhook which will help you broadcast your Form Submissions to any Web API Endpoint with the powerful Webhook module."
---

# Integrate Webhook

**Fluent Forms** integrates with **Webhook** which will help you broadcast your **Form Submissions** to any **Web API Endpoint** with the powerful **Webhook** module. This article will guide you through integrating **Webhook** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Webhook** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enabling Webhook Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Webhooks** through the search bar, and enable the **Webhooks** integration module by turning on the **Toggle**.

![Enabled Webhooks Option](/images/integrations/automation/integrate-webhook/1.-Enabled-Webhooks-option-scaled.webp)

## Integrating Webhook with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Webhook** and click the **Settings** button.

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Webhook](/images/integrations/automation/integrate-webhook/2.-Open-desired-Form-Settings-2-scaled.webp)

Once you are on **Settings & Integrations**, go to the **WebHook** from the left menu, and click the **+ Add New** button.

![Add Webhook Integrate Webhook](/images/integrations/automation/integrate-webhook/3.-Add-New-webhook-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Webhook. 

1. **Name:** Here, you can set a name according to your preference for your feed. This field is required to be filled in.

2. **Request URL:** This is also a required field. Here, provide the URL where you want to send the Fluent Form Submission data. More specifically, enter the URL  that is provided by the Webhook recipient.

3. **Request Method:** Here you need to select the HTTP method used for the Webhook request. Choose one method among the GET, POST, PUT, PATCH, and DELETE.

4. **Request Format:** Select the data format for the Webhook request. You have to choose one format between JSON and FORM.

5. **Request Header:** Choose whether you want to send any headers with the Webhook request.

6. **Request Body:** Select body if you want to send any specific body text with the webhook request, otherwise, all fields will be sent.

7. **Conditional Logics:** This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

Once the setup is done, click the **Save Feed** button, and your Webhook will be integrated into this specific form!

![Webhook Integration Feed](/images/integrations/automation/integrate-webhook/4.-Webhook-Integration-Feed-scaled.webp)

This way you can easily integrate Webhook with Fluent Forms!
