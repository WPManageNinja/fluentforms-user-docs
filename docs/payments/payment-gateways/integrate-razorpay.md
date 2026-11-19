---
description: "Razorpay is a payment processing platform that allows Fluent Forms a smooth online payment transaction in India, supporting various payment methods…"
---

# Integrate Razorpay

[Razorpay](http://razorpay.com) is a payment processing platform that lets **Fluent Forms** take online payments in India. It supports credit cards, debit cards, net banking, UPI, and wallets such as JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp.

This article shows you how to connect **Razorpay** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Razorpay** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Razorpay Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Razorpay** to enable it for all forms, then click **Manage** to open its settings.

![Enable Razorpay Method Integrate Razorpay](/images/payments/payment-gateways/integrate-razorpay/1.-Enable-Razorpay-method-scaled.webp)

## Configure Razorpay with Fluent Forms

After you enable Razorpay, its settings appear:

A. Payment Method
B. API Credentials
C. Checkout Style

Click **Save** after each change.

![Test API Credentials](/images/payments/payment-gateways/integrate-razorpay/2.-Test-API-Credentials-scaled.webp)

### A. Payment Method

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

### B. API Credentials

Enter the **API Key** and **API Secret** from your **Razorpay Account** to connect Razorpay with Fluent Forms.

#### Get the API Credentials from Razorpay

Log in to your [RazorPay Account](http://dashboard.razorpay.com/signin). If you do not have an account, [sign up](https://easy.razorpay.com/onboarding/l1/signup?field=MobileNumber&cta_btn=Navbar_Header).

In the **RazorPay Dashboard**, go to **Accounts & Settings** in the **Left sidebar** and click the **API keys** tab.

![API Keys Fluent Forms](/images/payments/payment-gateways/integrate-razorpay/3.-API-Keys-scaled.webp)

> [!Note]
> To get the Key ID and Key Secret, you need to generate a new key.

Click **Regenerate Test Key** to generate new keys.

![Regenerate Test Key Button](/images/payments/payment-gateways/integrate-razorpay/4.-Regenerate-Test-Key-button-scaled.webp)

Copy the **Key ID** and **Key Secret**.

![Copy Key ID And Key Secret](/images/payments/payment-gateways/integrate-razorpay/5.-Copy-Key-ID-and-Key-Secret.webp)

Return to the **Razorpay** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **Key ID** and **Key Secret** into the **API Key** and **API Secret** fields.

Click **Save**. Fluent Forms now connects to your Razorpay account.

![Paste API Key And Secret](/images/payments/payment-gateways/integrate-razorpay/6.-Paste-API-Key-and-Secret-scaled.webp)

### C. Checkout Style Type

Fluent Forms offers two checkout styles. Choose the **Checkout Style Type** you prefer.

- **Modal Checkout Style**
- **Hosted to razorpay.com**

#### Modal Checkout

This style collects payments on your site.

You can choose a custom brand theme color for the Razorpay checkout popup, or leave it blank to use the default Razorpay theme.

![Modal Checkout Style](/images/payments/payment-gateways/integrate-razorpay/7.-Modal-Checkout-Style.webp)

#### Hosted to razorpay.com

This style redirects users to the RazorPay website for checkout.

It also lets you configure the SMS and Email notifications that RazorPay sends to your WordPress site, so you stay updated.

Check **SMS**, **Email**, or both to receive notifications.

> [!Tip]
> Click **Save** to apply your changes.

![Hosted Razorpay.com Fluent Forms](/images/payments/payment-gateways/integrate-razorpay/8.-Hosted-to-Razorpay.com_.webp)

## Integrate Razorpay in Forms

You can add **Razorpay** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Razorpay](/images/payments/payment-gateways/integrate-razorpay/Open-desired-form-3-scaled.webp)

On the **Editor** page, click the **Pencil Icon** on the **Payment Method** field to open the **Input Customization** menu on the right side.

Go to **Payment Methods**, check the **Razorpay** option, and click the **Dropdown Arrow**. You can change the **Method Label** there.

![Check Razorpay Payment Method](/images/payments/payment-gateways/integrate-razorpay/9.-Check-Razorpay-payment-method-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

![Save Button Integrate Razorpay](/images/payments/payment-gateways/integrate-razorpay/10.-Save-Form-button-scaled.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added. With **Modal Checkout Style**, the **Razorpay** checkout opens in a popup on your site. With **Hosted to razorpay.com**, Fluent Forms redirects users to Razorpay to complete the payment.

![Preview Integrate Razorpay](/images/payments/payment-gateways/integrate-razorpay/11.-Form-Preview-.webp)

The next image shows the **Razorpay Checkout Modal**.

![Razorpay Payment Popup 1024x575](/images/payments/payment-gateways/integrate-razorpay/12.-Razorpay-payment-popup-1024x575.webp)
