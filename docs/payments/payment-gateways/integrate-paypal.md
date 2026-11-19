---
description: "PayPal is a payment processing platform that lets Fluent Forms receive payments from your users securely."
---

# Integrate PayPal

[PayPal](http://paypal.com) is a payment processing platform that lets **Fluent Forms** receive payments from your users securely. This article shows you how to connect **PayPal** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **PayPal** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable PayPal Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **PayPal** to enable it for all forms, then click **Manage** to open its settings.

![Enable Paypal Payment Method Integrate PayPal](/images/payments/payment-gateways/integrate-paypal/1.-Enable-Paypal-Payment-Method-scaled.webp)

## Configure PayPal with Fluent Forms

After you enable **PayPal**, its settings appear.

Select a **Payment Mode**: **Sandbox** (for test payments) or **Live** (for real payments). Both modes follow the same configuration process.

The **Connection Mode** setting offers **Checkout API (Recommended)** and **Standard (Legacy)**.

### Standard (Legacy Mode)

This legacy method uses your primary PayPal email address and IPN responses to track single and recurring transactions.

- **PayPal Email:** Enter the email address linked to your verified PayPal Business Account.

![PayPal Standard legacy settings](/images/payments/payment-gateways/integrate-paypal/paypal-standard-3-scaled.webp)

### Checkout API (Recommended Mode)

Fluent Forms connects to PayPal through PayPal's **Orders API v2** (one-time payments) and **Subscriptions API** (recurring payments). You get webhook-based confirmations, native subscription support, and verified signatures on every event.

- **Payment Mode:** Set **Mode** to **Sandbox Mode** (for test environments) or **Live Mode** (for processing real payments). Fluent Forms routes API calls to the matching developer endpoints for this mode.
- **Generate REST API credentials in PayPal:**
  1. Log in to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications/).
  2. Switch to the **Sandbox** or **Live** tab to match your selected mode.
  3. Click **Create App**, name the app (for example, _Fluent Forms_), and select **Merchant** as the app type.
  4. Copy the generated **Client ID** and **Secret Key**.
- **Enter keys into Fluent Forms:** Paste the credentials into the matching fields in Fluent Forms (**Test Client ID** / **Test Secret Key** or **Live Client ID** / **Live Secret Key**). You can fill both pairs at once. The **Mode** toggle decides which pair is active.
- **Webhook ID:** Enter your verified **Webhook ID**.

**Webhook settings:** To receive real-time payment, refund, and subscription events from PayPal, configure a webhook in the PayPal Developer Dashboard. Add a webhook with the **Webhook URL** shown in the Fluent Forms settings box.

Subscribe to at least these events:

- **PAYMENT.SALE.COMPLETED**
- **BILLING.SUBSCRIPTION.ACTIVATED**
- **BILLING.SUBSCRIPTION.CANCELLED**
- **BILLING.SUBSCRIPTION.EXPIRED**
- **BILLING.SUBSCRIPTION.PAYMENT.FAILED**
- **BILLING.SUBSCRIPTION.SUSPENDED**

Copy your **Webhook ID** back into Fluent Forms. As a safety guard against unsigned events, Fluent Forms processes webhook events only when a **Webhook ID** is configured.

![PayPal Checkout API settings](/images/payments/payment-gateways/integrate-paypal/paypal-checkout-api-4-scaled.webp)

Click **Save** to save your configuration.

## Setup PayPal IPN Settings

> [!Note]
> This section applies only to **Standard (Legacy)** mode. Skip it if you use **Checkout API (Recommended)**.

After you configure PayPal, set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in **PayPal**. Recurring billing is collected through the [Subscription](/add-subscription-field-in-payment-forms) field.

**IPN (Instant Payment Notification)** is a post-message notification that **PayPal** sends after a successful transaction for standard merchant accounts. It contains all the payment transaction details. With PayPal IPN set up, Fluent Forms receives instant payment notifications from PayPal.

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Open **PayPal Standard**, scroll to **PayPal IPN Settings (Recommended for Subscription Payment)**, and copy the **IPN URL** for subscription and recurring payment data.

> [!Note]
> If you do not set up **IPN**, single payments still work, but Fluent Forms does not mark recurring PayPal subscription payments as paid.

Click **Save** to save your changes.

![Paypal Ipn Settings](/images/payments/payment-gateways/integrate-paypal/3.-PayPal-IPN-Settings--scaled.webp)

Open the dashboard of your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile** **Icon**, and click **Account Settings**.

![Account Settings Fluent Forms](/images/payments/payment-gateways/integrate-paypal/4.-Account-Settings.webp)

Scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications** and click the **Update** link.

![Website Payments Fluent Forms](/images/payments/payment-gateways/integrate-paypal/5.-Website-Payments.webp)

Click **Edit Settings** to set up your IPN notification.

![Choose Ipn Settings](/images/payments/payment-gateways/integrate-paypal/6.-Choose-IPN-Settings.webp)

Paste the URL you copied from the **PayPal IPN Settings** page into the **Notification URL** field.

Select **Receive IPN messages (Enabled)** to activate IPN messages.

Click **Save** to confirm the setup.

![Paste Ipn URL](/images/payments/payment-gateways/integrate-paypal/7.-Paste-IPN-URL.webp)

PayPal updates the **Notification URL** and enables IPN for your site.

To change your notification URL later, click **Edit Settings**. To disable PayPal IPN, click **Turn Off IPN**.

![Edit Settings Or Turn Off Button Integrate PayPal](/images/payments/payment-gateways/integrate-paypal/8.-Edit-Settings-or-Turn-Off-button.webp)

## Integrate PayPal in Forms

You can add **PayPal** to any existing **payment form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

> [!Note]
> If you do not have a payment form yet, see [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate PayPal](/images/payments/payment-gateways/integrate-paypal/Open-desired-form-1-scaled.webp)

On the **Editor** page, hover over the **Payment Method** field and click the **Pencil Icon** to open **Customize**.

Under **Payment Methods**, check **PayPal**, click the **Dropdown Arrow**, and configure these options:

- **Method Label:** Change the label for your payment method.
- **Require Shipping Address:** Check this box to require shipping address information before form submission.

![Check Paypal Payment Method](/images/payments/payment-gateways/integrate-paypal/9.-Check-PayPal-payment-method-in-a-desired-form-scaled.webp)

Click **Save** to save your changes.

To display the form on a **page** or **post**, copy the **Shortcode** from the top right and paste it into the page or post.

Click **Preview** in the form editor to preview the form.

![Save Integrate PayPal](/images/payments/payment-gateways/integrate-paypal/10.-Save-Form-scaled-2.webp)

## Preview of Added Payment Method

The preview below shows the **Payment Method** you added. When a user clicks **Submit Form**, Fluent Forms redirects them to PayPal to complete payment.

![Paypal Preview Fluent Forms](/images/payments/payment-gateways/integrate-paypal/11.-PayPal-Form-Preview.webp)

## Form Specific PayPal Settings

You can customize **PayPal Settings** for a specific form.

Go to **Forms** in the Fluent Forms navbar and click **Settings** on the form you want to configure.

![Open Settings Integrate PayPal](/images/payments/payment-gateways/integrate-paypal/Open-Form-Settings-1-scaled.webp)

Open **Payment Settings** in the left sidebar and scroll to **PayPal Settings**.

Select which **PayPal Account** (**Global** or **Custom**) this form uses. Choose **Custom PayPal ID** to use a different PayPal account for this form only.

Click **Save** to save your changes.

![Specific Paypal Payment Settings](/images/payments/payment-gateways/integrate-paypal/12.-Form-Specific-PayPal-Payment-Settings-scaled.webp)
