---
description: "Stripe is a globally recognized payment gateway that offers Fluent Forms inline payment options and a smooth and secure payment experience using credit…"
---

# Integrate Stripe

[Stripe](http://stripe.com) is a payment gateway that gives **Fluent Forms** inline payment options and a secure payment experience with credit and debit cards.

This article shows you how to connect **Stripe** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Stripe** works on the free Fluent Forms plugin with a **1.9% platform fee** per transaction, including subscription payments. **Fluent Forms Pro** users pay no extra platform fee for Stripe on your site.

## Enabling Stripe Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Stripe** to enable it for all forms, then click **Manage** to open its settings.

![Enable Stripe Payment Method Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/1.-Enable-Stripe-Payment-method-scaled.webp)

## Configuring Stripe with Fluent Forms

After you enable Stripe, its settings appear.

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

Click **Connect with Stripe** to go to the **Stripe Login Page** and connect your **Stripe Account**.

Click **Save** to save your changes.

![Connect With Stripe](/images/payments/payment-gateways/integrate-stripe/2.-Connect-with-Stripe-scaled.webp)

Stripe opens the **Create your free Stripe account** page for **Fluent Plugins by WPManageNinja**. Enter your **Email address** and **Password** (at least 10 characters), then click **Submit**. You can also click **Sign in with Google** to continue with your Google account. Your **Stripe** account is then connected to **Fluent Forms**.

The **Get emails from Stripe** checkbox is optional. Leave it unchecked if you do not want product updates from Stripe.

> [!Note]
> Connecting lets Fluent Forms see your Stripe account data, such as payment and payout history, and create payments for you. If you already have a Stripe account, use the same email address. To open a new account, [register on Stripe](https://dashboard.stripe.com/register).

![Submit Button Fluent Forms](/images/payments/payment-gateways/integrate-stripe/3.-Submit-button.png)

> [!Note]
> **Connect with Stripe** is the default and recommended option for a secure setup, including for Stripe Verified Partners.

To use the traditional **API Key** method instead, open the **Use API keys instead** section on the Stripe settings page and enter your keys for the selected mode. Test and Live modes each have their own connection.

To force the API key method for the whole site, add the following snippet to your theme's **functions.php** file or a code snippets plugin.

> [!Note]
> We recommend the [Fluent Snippet](https://fluentsnippets.com/) plugin for adding snippet code to your WordPress site.

`add_filter('fluentform/disable_stripe_connect', '__return_true');`

## Configuring Webhook to Set Up Stripe IPN

After you configure Stripe, set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in Stripe. Recurring billing is collected through the [Subscription](/add-subscription-field-in-payment-forms) field.

**IPN (Instant Payment Notification)** is a post-message notification that [Stripe](http://stripe.com) sends after a successful subscription or recurring payment. For Stripe to work fully for subscription and recurring payments, configure your Stripe webhooks.

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Go to **Stripe** and scroll down to **Stripe Webhook (Recommended for Recurring Payments)**.

Copy the **Webhook URL** and the recommended **Webhook Events** for **Stripe** **Data** related to **Subscription/Recurring** payments.

Click **Save** to save your changes.

![Add Stripe Webhook URL Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/4.-Add-stripe-webhook-URL-scaled.webp)

Open your [Stripe Account Dashboard](https://dashboard.stripe.com/account/webhooks), click **Developers** in the bottom-left corner, and press **Webhooks**.

![Developers Webhooks Fluent Forms](/images/payments/payment-gateways/integrate-stripe/5.-Developers-Webhooks-scaled.webp)

Click **+ Add destination**.

![Add Destination Button Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/6.-Add-Destination-button-scaled.webp)

Choose the events that **Fluent Forms** recommends for **Stripe** to send to your endpoint.

To find events, enter a **Name** or **Description** in the **Events** field. Check the box to **select** an event.

**The events Fluent Forms recommends:**

- **charge.succeeded:** Triggers when a charge is processed successfully. This event occurs when a payment completes on Stripe.

- **charge.captured:** Triggers when a previously authorized charge is captured successfully. You must use this for Hold payments.

- **invoice.payment_succeeded:** Triggers when a payment for an invoice succeeds. It is often used for Subscription payments.

- **charge.refunded:** Triggers when a charge is refunded. This event helps you track refund activity that happened on Stripe.

- **customer.subscription.deleted:** Triggers when a customer’s subscription is canceled or ends. This can be due to customer action, automatic cancellation, or a failed payment after retries.

- **customer.subscription.updated:** Triggers when a customer’s subscription changes.

- **checkout.session.completed:** Triggers when a checkout session completes. This event confirms that the customer paid for the session.

After you select all the suggested **Webhook Events**, click **Continue**.

![Select Events Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/7.-Select-Events-scaled.webp)

Select the **Webhook endpoint** and click **Continue** again.

![Webhook Endpoint Fluent Forms](/images/payments/payment-gateways/integrate-stripe/8.-Webhook-endpoint-scaled.webp)

Paste the **Webhook URL** you copied from the **Stripe Settings** page into the **Endpoint URL** field and click **Create destination**.

Stripe Webhooks are now configured for your WordPress site.

![Create Destination Button](/images/payments/payment-gateways/integrate-stripe/9.-Create-Destination-button-scaled.webp)

## Integrating Stripe in Forms

You can add **Stripe** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/Open-desired-form-scaled.webp)

On the **Editor** page, hover over the **Payment Method** field and click the **Pencil Icon** to open the **Input** **Customization** menu on the right side.

Go to **Payment Methods**, check the **Stripe** option, and click the **Dropdown Arrow**. These options appear:

- **Method Label:** Change the label of your payment method.

- **Embedded Checkout:** Check this box to activate Stripe as an inline payment option.

- **Enable Payment Element:** Check this box to replace the card field with the **Stripe Payment Element**. It shows **Apple Pay** and **Google Pay** inline on supported devices. This option appears only when **Embedded Checkout** is on. To learn more, see [Use the Stripe Payment Element](#use-the-stripe-payment-element).

- **Verify Zip/Postal Code:** Check this box to make the Zip/Postal Code mandatory for users to submit the form.

- **Require Billing info:** Check this box to collect billing details at checkout. This option appears when **Embedded Checkout** is off.

- **Collect Shipping Info:** Check this box to collect a shipping address at checkout. This option appears when **Embedded Checkout** is off.

![Embed Checkout Fluent Forms](/images/payments/payment-gateways/integrate-stripe/10.-Embed-checkout-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

Before you go live, submit a test payment in **Test** mode, then check it under **Payments** in the **Fluent Forms Navbar** and in the form entry.

![Save Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/11.-Save-form-scaled.webp)

### Use the Stripe Payment Element

The **Stripe Payment Element** replaces the standard card field of the inline Stripe payment option. Visitors can pay with a card, **Apple Pay**, or **Google Pay** without leaving your form. The wallet options appear only on devices and browsers that support them.

- Open your form in the **Editor** and go to the **Payment Method** field settings.
- Check **Stripe**, click the **Dropdown Arrow**, and turn on **Embedded Checkout**.
- Check **Enable Payment Element**.
- Click **Save**.

![Stripe Payment Element](/images/payments/payment-gateways/integrate-stripe/enable-payment-element-5.webp)

The Payment Element works on classic and [conversational forms](/create-a-conversational-form). Stripe 3D Secure confirmation also works on conversational forms.

#### Register Your Domain for Apple Pay and Google Pay

To show **Apple Pay**, register your site domain in your Stripe account first. Follow the steps below.

First, open your **Stripe Dashboard**, click the **Settings** (gear) icon at the top right, and select **Payments** under **Product settings**.

![Stripe Payment Settings](/images/payments/payment-gateways/integrate-stripe/stripe-settings-6.webp)

Next, open the **Payment method domains** tab and click **Add a new domain**.

![Payment Method Domains](/images/payments/payment-gateways/integrate-stripe/add-a-new-domain-7.webp)

Enter your site's primary domain (for example, example.com) or a subdomain (for example, shop.example.com), then click **Save**.

![Enter Your Domain](/images/payments/payment-gateways/integrate-stripe/enter-domain-8.webp)

Your domain now appears in the **Payment method domains** list with the **Enabled** status. To copy its ID, click the **three-dot** icon at the end of the domain row and select **Copy domain ID**. To stop showing wallets on that domain, select **Disable domain** instead.

![Copy Domain ID](/images/payments/payment-gateways/integrate-stripe/domain-id-copy-9.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added. With the **Payment Element** on, the form shows **Card** and a wallet option side by side. Visitors on a supported device see **Apple Pay** (Safari on iPhone, iPad, or Mac) or **Google Pay** (Chrome and other supported browsers).

When a visitor selects a wallet, the form shows the message **Another step will appear to securely submit your payment information.** The visitor then completes the payment in the wallet window after clicking **Submit Form**. While you use **Test** mode, the form shows **Stripe test mode activated** below the payment options.

**Apple Pay**

![Preview Integrate Stripe Apple Pay](/images/payments/payment-gateways/integrate-stripe/apple-pay-12.png)

**Google Pay**

![Preview Integrate Stripe Gpay Pay](/images/payments/payment-gateways/integrate-stripe/gpay-form.png)

## Form Specific Stripe Settings

You can customize the **Stripe Settings** for a specific form.

Click **Forms** in the **Fluent Forms Navbar**, then click the **Settings** (gear) icon of your form.

![Open Settings Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/Open-Form-Settings-scaled.webp)

Click **Payment Settings** in the left sidebar, scroll down to **Stripe Settings**, and customize it for your needs.

Click **Save** to save your changes.

![Specific Stripe Settings](/images/payments/payment-gateways/integrate-stripe/13.-Form-Specific-Stripe-Settings-scaled.webp)

### A. Stripe Meta Data

Check **Push Form Data to Stripe** to send the form submission date to your Stripe account.

![Stripe Meta Data Option](/images/payments/payment-gateways/integrate-stripe/14.-Stripe-meta-data-option.webp)

### B. Stripe Account

Select which Stripe account credentials (**Global** or **Custom**) this form uses. Select **Custom Stripe Credentials** to set up a different Stripe account for this form.

![Custom Stripe Credentials](/images/payments/payment-gateways/integrate-stripe/15.-Custom-Stripe-Credentials.webp)

### C. Stripe Payment Receipt

Check **Disable Payment Receipt Email by Stripe(not recommended)** to stop Stripe from sending payment receipt emails for this form.

>[!Note]
> Fluent Forms recommends you keep receipt emails on so you can track your payment transactions.

![Stripe Payment Receipt](/images/payments/payment-gateways/integrate-stripe/16.-Stripe-Payment-Receipt.webp)

### D. Stripe Descriptor

Enter text of your choice (5 to 22 characters) as the statement descriptor. If you leave it empty, Fluent Forms uses your Form Name as the statement descriptor.

![Statement Descriptor Fluent Forms](/images/payments/payment-gateways/integrate-stripe/17.-Statement-Descriptor.webp)
