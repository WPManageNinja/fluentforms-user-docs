---
description: "Paystack is a payment gateway that lets Fluent Forms accept online payments."
---

# Integrate Paystack

[Paystack](http://paystack.com) is a payment gateway that lets **Fluent Forms** accept online payments. This article shows you how to connect **Paystack** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Paystack** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Paystack Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Paystack** to enable it for all forms, then click **Manage** to open its settings.

![Enable Paystack Module Integrate Paystack](/images/payments/payment-gateways/integrate-paystack/1.-enable-Paystack-module-scaled.webp)

## Configure Paystack with Fluent Forms

After you enable **Paystack**, its settings appear.

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

Then get the **API Key** and **API Secret** from your **Paystack Account**.

![API Credentials Fluent Forms](/images/payments/payment-gateways/integrate-paystack/2.-API-Credentials-scaled.webp)

### Get the API Credentials

Log in to your [Paystack Account](https://dashboard.paystack.com/#/login). If you do not have an account, [sign up](https://dashboard.paystack.com/#/signup).

In the **Paystack Dashboard**, go to **Settings** in the left sidebar and click the **API Keys & Webhooks** tab. Copy the **Secret key** and **Public key.**

![Copy Secret And API Key](/images/payments/payment-gateways/integrate-paystack/3.-Copy-secret-and-API-key-scaled.webp)

Return to the **Paystack** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **Public Key** and **Secret Key** you copied from Paystack into the **API Key** and **API Secret** fields.

Click **Save**. Fluent Forms now connects to your Paystack account.

![Paste API Key And API Secret](/images/payments/payment-gateways/integrate-paystack/4.-Paste-API-key-and-API-Secret-scaled.webp)

## Integrate Paystack in Forms

You can add **Paystack** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Paystack](/images/payments/payment-gateways/integrate-paystack/Open-desired-form-5-scaled.webp)

On the **Editor** page, click the **Pencil Icon** on the **Payment Method** field to open the **Input Customization** menu on the right side.

Go to **Payment Methods**, check the **PayStack** option, and click the **Dropdown Arrow**. You can change the **Method Label** there.

![Add Paystack Integrate Paystack](/images/payments/payment-gateways/integrate-paystack/5.-add-paystack-to-the-desired-form-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

![Save Integrate Paystack](/images/payments/payment-gateways/integrate-paystack/6.-Save-Form-scaled-2.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added. When a user clicks **Submit Form**, a **Paystack** popup opens to complete the payment.

![Preview Integrate Paystack](/images/payments/payment-gateways/integrate-paystack/7.-Form-Preview-2.webp)
