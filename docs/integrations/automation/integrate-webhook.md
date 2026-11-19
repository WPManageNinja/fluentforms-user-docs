---
description: "Fluent Forms integrates with Webhook which will help you broadcast your Form Submissions to any Web API Endpoint with the powerful Webhook module."
---

# Integrate Webhook

The **Webhook** module in **Fluent Forms** sends your **form submissions** to any **web API endpoint**. This guide shows you how to set up **Webhook** on your **WordPress site**.

> [!Note]
> **Webhook** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Webhook Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Webhooks**, and turn on the **Toggle** to enable the **Webhooks** module.

![Enabled Webhooks Option](/images/integrations/automation/integrate-webhook/1.-Enabled-Webhooks-option-scaled.webp)

## Integrate Webhook with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Webhook**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Webhook](/images/integrations/automation/integrate-webhook/2.-Open-desired-Form-Settings-2-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select **WebHook** from the drawer.

![Add Webhook Integrate Webhook](/images/integrations/automation/integrate-webhook/3.-Add-New-webhook-scaled.webp)

The feed settings open with these options:

1. **Name:** Enter a name for your feed. This field is required.
2. **Request URL:** Enter the URL that receives the Fluent Forms submission data. Use the URL that the Webhook recipient provides. This field is required.
3. **Request Method:** Select the HTTP method for the request: GET, POST, PUT, PATCH, or DELETE.
4. **Request Format:** Select the data format for the request: JSON or FORM.
5. **Request Header:** Select a header name from the dropdown and enter its value. Add more rows if you need more headers.
6. **Request Body:** Choose whether to send all form fields or only the fields you select.
7. **Conditional Logics:** Run the Webhook only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

Click **Save** when the setup is done. The Webhook is now connected to this form.

![Webhook Integration Feed](/images/integrations/automation/integrate-webhook/4.-Webhook-Integration-Feed-scaled.webp)
