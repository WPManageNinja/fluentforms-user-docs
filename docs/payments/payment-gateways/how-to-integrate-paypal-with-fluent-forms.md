# Integrate PayPal

[PayPal](http://paypal.com) is a payment processing platform that lets **Fluent Forms** receive payments from your users securely. This article will guide you through integrating **PayPal** into your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **PayPal** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Enable PayPal Payment Method

Go to **Global Settings** from the Fluent Forms navbar, open the **Payment** tab, and select **Payment Methods**.

Select **PayPal Standard**, then click **Enable PayPal Payment Method** to activate PayPal globally for all forms.

![Enable Paypal Payment Method Integrate PayPal](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/1.-Enable-Paypal-Payment-Method-scaled.webp)

## Configure PayPal with Fluent Forms

Once you enable **PayPal**, all required settings appear to configure PayPal with Fluent Forms.

Before starting, select a **Payment Mode** between **Sandbox** (for test payments) and **Live** (for real payments). Both modes follow the same configuration process.

### Standard (Legacy Mode)

This legacy method relies on your primary PayPal email address and IPN responses to track single and recurring transactions.

- **PayPal Email:** Enter the email address linked directly to your verified PayPal Business Account.

![PayPal Standard legacy settings](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/paypal-standard-3-scaled.webp)

### Checkout API (Recommended Mode)

Fluent Forms connects to PayPal through PayPal's modern **Orders API v2** (one-time payments) and **Subscriptions API** (recurring payments). You get reliable webhook-based confirmations, native subscription support, and verified signatures on every event.

- **Payment Mode:** Set **Mode** to **Sandbox Mode** (for test environments) or **Live Mode** (for processing real payments). Fluent Forms automatically routes API calls to the proper developer endpoints depending on this mode.
- **Generate REST API credentials in PayPal:**
  1. Log in to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications/).
  2. Switch to the **Sandbox** or **Live** tab to match your selected mode.
  3. Click **Create App**, name the app (for example, _Fluent Forms_), and select **Merchant** as the app type.
  4. Copy the generated **Client ID** and **Secret Key**.
- **Enter keys into Fluent Forms:** Paste the credentials into the matching fields inside Fluent Forms (**Test Client ID** / **Test Secret Key** or **Live Client ID** / **Live Secret Key**). You can fill both pairs at once; the system uses the **Mode** toggle to determine which pair is active.
- **Webhook ID:** Input your verified **Webhook ID**.

**Webhook settings:** To receive real-time payment, refund, and subscription events from PayPal, configure a webhook in the PayPal Developer Dashboard. Add a webhook with the **Webhook URL** provided in the Fluent Forms settings box.

Subscribe to at least these events:

```
PAYMENT.SALE.COMPLETED
BILLING.SUBSCRIPTION.ACTIVATED
BILLING.SUBSCRIPTION.CANCELLED
BILLING.SUBSCRIPTION.EXPIRED
BILLING.SUBSCRIPTION.PAYMENT.FAILED
BILLING.SUBSCRIPTION.SUSPENDED
```

Copy your **Webhook ID** back into Fluent Forms. Webhook events are only processed when a **Webhook ID** is configured as a safety guard against unsigned events.

![PayPal Checkout API settings](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/paypal-checkout-api-4-scaled.webp)

Press **Save PayPal Settings** to save your configuration.

## Setup PayPal IPN Settings

After configuring PayPal, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in **PayPal**. Recurring billing is collected through the [Subscription](/add-subscription-field-in-payment-forms) field.

**IPN (Instant Payment Notification)** is a post-message notification sent by **PayPal** after a successful transaction for standard merchant accounts, containing all payment transaction details. Setting up PayPal IPN with Fluent Forms allows you to receive instant payment notifications from PayPal.

Go to **Global Settings** from the Fluent Forms navbar, open the **Payment** tab, and select **Payment Methods**.

Open **PayPal Standard**, scroll to **PayPal IPN Settings (Recommended for Subscription Payment)**, and copy the **IPN URL** for subscription and recurring payment data.

> [!Note]
> If you do not set up **IPN**, single payments still work, but recurring PayPal subscription payments will not be marked as paid.

Press **Save PayPal Settings** to save your changes.

![Paypal Ipn Settings](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/3.-PayPal-IPN-Settings--scaled.webp)

Visit the dashboard of your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile** **Icon**, and click **Account Settings**.

![Account Settings Fluent Forms](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/4.-Account-Settings.webp)

Scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications** and click the **Update** link.

![Website Payments Fluent Forms](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/5.-Website-Payments.webp)

Click **Edit Settings** to set up your IPN notification.

![Choose Ipn Settings](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/6.-Choose-IPN-Settings.webp)

Paste the URL into the **Notification URL** field that you copied from the **PayPal IPN Settings** page.

After entering your **Notification URL**, select **Receive IPN messages (Enabled)** to activate IPN messages.

Click **Save** to confirm the setup.

![Paste Ipn URL](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/7.-Paste-IPN-URL.webp)

The **Notification URL** is updated and IPN is enabled for your site.

You can modify your notification URL anytime by clicking **Edit Settings**. To disable PayPal IPN, click **Turn Off IPN**.

![Edit Settings Or Turn Off Button Integrate PayPal](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/8.-Edit-Settings-or-Turn-Off-button.webp)

## Integrate PayPal in Forms

Once you finish setting up your **PayPal** payment method, you can add it to any existing **payment form** (a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields).

> [!Note]
> If you do not have an existing payment form, see [How to Create a Payment Form With Fluent Form](/how-to-create-a-payment-form-with-fluent-form).

Go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate PayPal](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/Open-desired-form-1-scaled.webp)

On the **Editor** page, hover over the **Payment Method** field and click the **Pencil Icon** to open **Input Customization**.

Under **Payment Methods**, check **PayPal**, click the **Dropdown Arrow**, and configure these options:

- **Method Label:** Change the label for your payment method.
- **Require Shipping Address:** Check this box to require shipping address information before form submission.

![Check Paypal Payment Method](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/9.-Check-PayPal-payment-method-in-a-desired-form-scaled.webp)

Click **Save Form** to save your changes.

To embed the form on a specific **page** or **post**, copy the **Shortcode** from the top right and paste it into your desired page or post.

Click **Preview & Design** in the middle to preview the form.

![Save Integrate PayPal](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/10.-Save-Form-scaled-2.webp)

## Preview of Added Payment Method

Here is the preview of the **Payment Method** you added. When a user clicks **Submit Form**, they are redirected to PayPal to complete payment.

![Paypal Preview Fluent Forms](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/11.-PayPal-Form-Preview.webp)

## Form Specific PayPal Settings

You can customize **PayPal Settings** for a specific form.

Go to **Forms** from the Fluent Forms navbar and click **Settings** on the form you want to configure.

![Open Settings Integrate PayPal](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/Open-Form-Settings-1-scaled.webp)

On the **Settings and Integrations** tab, open **Payment Settings** and scroll to **PayPal Settings**.

Select which **PayPal Account** (**Global** or **Custom**) this form uses. Choose **Custom PayPal ID** to use a different PayPal account for this form only.

Click **Save Settings** to save your changes.

![Specific Paypal Payment Settings](/images/payments/payment-gateways/how-to-integrate-paypal-with-fluent-forms/12.-Form-Specific-PayPal-Payment-Settings-scaled.webp)
