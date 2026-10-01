---
description: "Stripe is a globally recognized payment gateway that offers Fluent Forms inline payment options and a smooth and secure payment experience using credit…"
---

# Integrate Stripe

[Stripe](http://stripe.com) is a globally recognized payment gateway that offers **Fluent Forms** inline payment options and a smooth and secure payment experience using credit and debit cards.

This article will guide you through integrating **Stripe** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> [!Note]
> **Stripe** works on the free Fluent Forms plugin with a **1.9% platform fee** per transaction. **Fluent Forms Pro** users pay no extra platform fee for Stripe on your site.

## Enabling Stripe Payment Method

Go to **Global Settings** from the Fluent Forms navbar, open the **Payment** tab, and select **Payment Methods**.

Select **Stripe**, then click **Enable Stripe Payment Method** to activate Stripe globally for all forms.

![Enable Stripe Payment Method Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/1.-Enable-Stripe-Payment-method-scaled.webp)

## Configuring Stripe with Fluent Forms

Once you enable Stripe, all the required settings will appear to configure Stripe with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, click the **Connect with Stripe** button to redirect you to the **Stripe Login Page** to connect your **Stripe Account**.

Do not forget to press the **Save Stripe Settings** button to save all your changes. 

![Connect With Stripe](/images/payments/payment-gateways/integrate-stripe/2.-Connect-with-Stripe-scaled.webp)

Stripe opens the **Create your free Stripe account** page for **Fluent Plugins by WPManageNinja**. Enter your **Email address** and **Password** (at least 10 characters), then click the **Submit** button. You can also click **Sign in with Google** to continue with your Google account. Your **Stripe** account will then be connected to **Fluent Forms**.

The **Get emails from Stripe** checkbox is optional. Leave it unchecked if you do not want product updates from Stripe.

> [!Note]
> Connecting lets Fluent Forms see your Stripe account data, such as payment and payout history, and create payments for you. If you already have a Stripe account, use the same email address. To open a new account, [click here](https://dashboard.stripe.com/register).

![Submit Button Fluent Forms](/images/payments/payment-gateways/integrate-stripe/3.-Submit-button.png)

> [!Note]
> **Connect with Stripe** is enabled by default. Fluent Forms recommends this option for a secure setup, including for Stripe Verified Partners.

To use the traditional **API Key** method instead, disable **Connect with Stripe** by adding the following snippet to your theme's **functions.php** file or a code snippets plugin.

> [!Note]
> We recommend you use the [Fluent Snippet](https://fluentsnippets.com/) Plugin to add any snippet code to your WordPress Site.

`add_filter('fluentform/disable_stripe_connect', '__return_true');`

## Configuring Webhook to Set Up Stripe IPN

After configuring Stripe, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in Stripe. Recurring billing is collected through the [Subscription](/add-subscription-field-in-payment-forms) field.

**IPN (Instant Payment Notification)** is a post-message notification sent by [Stripe](http://stripe.com) after a successful subscription or recurring payment. For Stripe to function completely for subscription/recurring payments, you must configure your Stripe webhooks.

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Stripe**, and scroll down to the **Stripe Webhook (Recommended for Recurring Payments)** option. 

Then, copy the **Webhook URL** and the recommended **Webhook Events** for smooth transactions based on **Stripe** **Data** related to **Subscription/Recurring** payments. 

Do not forget to press the **Save Stripe Settings** button to save all your changes. 

![Add Stripe Webhook URL Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/4.-Add-stripe-webhook-URL-scaled.webp)

Now, visit your [Stripe Account Dashboard](https://dashboard.stripe.com/account/webhooks), click the **Developers** from the bottom-left corner, and press the **Webhooks**.

![Developers Webhooks Fluent Forms](/images/payments/payment-gateways/integrate-stripe/5.-Developers-Webhooks-scaled.webp)

Click the **+ Add destination** button.

![Add Destination Button Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/6.-Add-Destination-button-scaled.webp)

Now, choose the events recommended by the **Fluent Forms** for **Stripe** to send to your endpoint. 

You can find your **desired events** by entering their **Name** or **Description** into the **Events** fields and can **select** **events** by clicking the **checkbox**.

**The Events recommended by Fluent Forms are briefly explained below:**

- **charge.succeeded:** This triggers when a charge is successfully processed. Basically, this event occurs when a payment is completed on Stripe.

- **charge.captured:** This triggers when a previously authorized charge is successfully captured. You must use this for Hold payments.

- **invoice.payment_succeeded:** This triggers when a payment for an invoice is successful. This is often used for Subscription payments.

- **charge.refunded:** This triggers when a charge is refunded. This event helps track refund activity that happened on Stripe.

- **customer.subscription.deleted:** This triggers when a customer’s subscription is canceled or ends. This could be due to customer action, automatic cancellation, or a failed payment after retries.

- **customer.subscription.updated:** This triggers when a customer’s subscription is changed or updated.

- **Checkout.session.completed:** This triggers when a checkout session is completed. This event confirms that the customer successfully paid for the session.

Once you select all the suggested **Webhook Events**, click the **Continue** button.

![Select Events Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/7.-Select-Events-scaled.webp)

Then, select the **Webhook endpoint** and again click the **Continue** button.

![Webhook Endpoint Fluent Forms](/images/payments/payment-gateways/integrate-stripe/8.-Webhook-endpoint-scaled.webp)

Finally, paste the **Webhook URL** you copied from the **Stripe Settings** page into the **Endpoint URL** field and click the **Create destination** button. 

And, the **Stripe Webhooks** will be configured with your WordPress Site!

![Create Destination Button](/images/payments/payment-gateways/integrate-stripe/9.-Create-Destination-button-scaled.webp)

## Integrating Stripe in Forms

Once you finish setting up your **Stripe** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields are added).

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/Open-desired-form-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by hovering over it and clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Stripe** option, click the **Dropdown Arrow,** and you will get these options:

- **Method Label:** Here, you can change the label based on your preference for your added payment method.

- **Embedded Checkout:** Check this box to activate Stripe as an inline payment option.

- **Enable Payment Element:** Check this box to replace the card field with the **Stripe Payment Element**. It shows **Apple Pay** and **Google Pay** inline on supported devices. This option appears only when **Embedded Checkout** is on. To learn more, see [Use the Stripe Payment Element](#use-the-stripe-payment-element).

- **Verify Zip/Postal Code:** Check this box if you want to make providing the Zip/Postal Code information mandatory for your users to submit the forms.

![Embed Checkout Fluent Forms](/images/payments/payment-gateways/integrate-stripe/10.-Embed-checkout-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![Save Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/11.-Save-form-scaled.webp)

### Use the Stripe Payment Element

The **Stripe Payment Element** replaces the standard card field of the inline Stripe payment option. Visitors can pay with a card, **Apple Pay**, or **Google Pay** without leaving your form. The wallet options appear only on devices and browsers that support them.

- Open your form in the **Editor** and go to the **Payment Method** field settings.
- Check **Stripe**, click the **Dropdown Arrow**, and turn on **Embedded Checkout**.
- Check **Enable Payment Element**.
- Click **Save Form**.

![Stripe Payment Element](/images/payments/payment-gateways/integrate-stripe/enable-payment-element-5.webp)

The Payment Element works on classic and [conversational forms](/create-a-conversational-form). Stripe 3D Secure confirmation also works on conversational forms.

#### Register Your Domain for Apple Pay and Google Pay

To show **Apple Pay**, register your site domain in your Stripe account first. Follow the steps below.

First, open your **Stripe Dashboard**, click the **Settings** (gear) icon at the top right, and select **Payments** under **Product settings**.

![Stripe Payment Settings](/images/payments/payment-gateways/integrate-stripe/stripe-settings-6.webp)

Next, open the **Payment method domains** tab and click the **Add a new domain** button.

![Payment Method Domains](/images/payments/payment-gateways/integrate-stripe/add-a-new-domain-7.webp)

Enter your site's primary domain (for example, example.com) or a subdomain (for example, shop.example.com), then click **Save**.

![Enter Your Domain](/images/payments/payment-gateways/integrate-stripe/enter-domain-8.webp)

Your domain now appears in the **Payment method domains** list with the **Enabled** status. To copy its ID, click the **three-dot** icon at the end of the domain row and select **Copy domain ID**. To stop showing wallets on that domain, select **Disable domain** instead.

![Copy Domain ID](/images/payments/payment-gateways/integrate-stripe/domain-id-copy-9.webp)

### Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. With the **Payment Element** on, the form shows **Card** and a wallet option side by side. Visitors on a supported device see **Apple Pay** (Safari on iPhone, iPad, or Mac) or **Google Pay** (Chrome and other supported browsers).

When a visitor selects a wallet, the form shows the message **Another step will appear to securely submit your payment information.** The visitor then completes the payment in the wallet window after clicking **Submit Form**. While you use **Test** mode, the form shows **Stripe test mode activated** below the payment options.

**Apple Pay**

![Preview Integrate Stripe Apple Pay](/images/payments/payment-gateways/integrate-stripe/apple-pay-12.png)

**Google Pay**

![Preview Integrate Stripe Gpay Pay](/images/payments/payment-gateways/integrate-stripe/gpay-form.png)

## Form Specific Stripe Settings

You can also customize the **Stripe Settings** for a specific form according to your needs.

To customize the **Stripe Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**. 

![Open Settings Integrate Stripe](/images/payments/payment-gateways/integrate-stripe/Open-Form-Settings-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, scroll down to **Stripe Settings**, and customize it based on your needs.

Do not forget to click the **Save Settings** button to save all your changes. 

![Specific Stripe Settings](/images/payments/payment-gateways/integrate-stripe/13.-Form-Specific-Stripe-Settings-scaled.webp)

### A. Stripe Meta Data

Check the **Push Form Data to Stripe** to send the form submission date to your Stripe. 

![Stripe Meta Data Option](/images/payments/payment-gateways/integrate-stripe/14.-Stripe-meta-data-option.webp)

### B. Stripe Account

Here, you can select which stripe account credential (**Global** or **Custom**) will be used for this form. Select the **Custom Stripe Credentials** if you want to set up a different Stripe account for this specific form.

![Custom Stripe Credentials](/images/payments/payment-gateways/integrate-stripe/15.-Custom-Stripe-Credentials.webp)

### C. Stripe Payment Receipt

Check this option if you want to disable the option of receiving payment receipt email notifications of this form.

>[!Note]
> But we recommend you do not disable this option if you want to keep track of your payment transactions.

![Stripe Payment Receipt](/images/payments/payment-gateways/integrate-stripe/16.-Stripe-Payment-Receipt.webp)

### D. Stripe Descriptor

Here, provide the text as per your wish (Contains between 5 and 22 characters) as a statement descriptor. If you keep it empty, your Form Name will be set as a statement descriptor.

![Statement Descriptor Fluent Forms](/images/payments/payment-gateways/integrate-stripe/17.-Statement-Descriptor.webp)
