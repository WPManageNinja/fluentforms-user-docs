# How to Integrate Stripe with Fluent Forms

[Stripe](http://stripe.com) is a globally recognized payment gateway that offers **Fluent Forms** inline payment options and a smooth and secure payment experience using credit and debit cards.

This article will guide you through integrating **Stripe** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> [!Note]
> **Stripe** works on the free Fluent Forms plugin with a **1.9% platform fee** per transaction. **Fluent Forms Pro** users pay no extra platform fee for Stripe on your site.

## Enabling Stripe Payment Method

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Stripe** in the top navbar and click **Enable** **Stripe Payment Method.** The **Stripe Payment Method** will be enabled globally for all forms. 

![Enable Stripe Payment Method Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/1.-Enable-Stripe-Payment-method-scaled.webp)

## Configuring Stripe with Fluent Forms

Once you enable Stripe, all the required settings will appear to configure Stripe with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, click the **Connect with Stripe** button to redirect you to the **Stripe Login Page** to connect your **Stripe Account**.

Do not forget to press the **Save Stripe Settings** button to save all your changes. 

![Connect With Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/2.-Connect-with-Stripe-scaled.webp)

Here, provide the login credentials of your desired **Stripe Account** that you want to connect with **Fluent Forms**, click the **Submit** button, and your **Stripe** account will be configured. 

> If you do not have an existing Stripe Account, click here to open a new account.

![Submit Button Fluent Forms](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/3.-Submit-button.webp)

**Remember**, **Fluent Forms** offers the above-mentioned **Connect with** **Stripe** option by default for secure and easy integration with **Stripe**. Also, Fluent Forms recommends using this option for all Stripe Verified Partners.

But, if you prefer the traditional **API Key method for the integration,** you can **Disable** this **Connect with Stripe** option by adding the following code snippet to your theme’s **functions.php** file or a code snippet plugin.

> We recommend you use the Fluent Snippet Plugin to add any snippet code to your WordPress Site.

`**add_filter('fluentform/disable_stripe_connect', '__return_true');**`

## Configuring Webhook to Set Up Stripe IPN

After configuring Stripe, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in Stripe.

**IPN (Instant Payment Notification)** is a post-message notification sent by [Stripe](http://stripe.com) after a successful subscription or recurring payment. For Stripe to function completely for subscription/recurring payments, you must configure your Stripe webhooks.

**To learn how to configure Stripe Webhooks, follow the steps with screenshots below –**

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Stripe**, and scroll down to the **Stripe Webhook (Recommended for Recurring Payments)** option. 

Then, copy the **Webhook URL** and the recommended **Webhook Events** for smooth transactions based on **Stripe** **Data** related to **Subscription/Recurring** payments. 

Do not forget to press the **Save Stripe Settings** button to save all your changes. 

![Add Stripe Webhook URL Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/4.-Add-stripe-webhook-URL-scaled.webp)

Now, visit your [Stripe Account Dashboard](https://dashboard.stripe.com/account/webhooks), click the **Developers** from the bottom-left corner, and press the **Webhooks**.

![Developers Webhooks Fluent Forms](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/5.-Developers-Webhooks-scaled.webp)

Click the **+ Add destination** button.

![Add Destination Button Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/6.-Add-Destination-button-scaled.webp)

Now, choose the events recommended by the **Fluent Forms** for **Stripe** to send to your endpoint. 

You can find your **desired events** by entering their **Name** or **Description** into the **Events** fields and can **select** **events** by clicking the **checkbox**.

**The Events recommended by Fluent Forms are briefly explained below:**

- charge.succeeded: This triggers when a charge is successfully processed. Basically, this event occurs when a payment is completed on Stripe.

- charge.captured: This triggers when a previously authorized charge is successfully captured. You must use this for Hold payments.

- invoice.payment_succeeded: This triggers when a payment for an invoice is successful. This is often used for Subscription payments.

- charge.refunded: This triggers when a charge is refunded. This event helps track refund activity that happened on Stripe.

- customer.subscription.deleted: This triggers when a customer’s subscription is canceled or ends. This could be due to customer action, automatic cancellation, or a failed payment after retries.

- customer.subscription.updated: This triggers when a customer’s subscription is changed or updated.

- Checkout.session.completed: This triggers when a checkout session is completed. This event confirms that the customer successfully paid for the session.

Once you select all the suggested **Webhook Events**, click the **Continue** button.

![Select Events Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/7.-Select-Events-scaled.webp)

Then, select the **Webhook endpoint** and again click the **Continue** button.

![Webhook Endpoint Fluent Forms](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/8.-Webhook-endpoint-scaled.webp)

Finally, paste the **Webhook URL** you copied from the **Stripe Settings** page into the **Endpoint URL** field and click the **Create destination** button. 

And, the **Stripe Webhooks** will be configured with your WordPress Site!

![Create Destination Button](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/9.-Create-Destination-button-scaled.webp)

## Integrating Stripe in Forms

Once you finish setting up your **Stripe** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/docs/add-payment-item-field-in-payment-forms) and [Payment Method](/docs/add-payment-method-field-in-payment-forms) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/Open-desired-form-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by hovering over it and clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Stripe** option, click the **Dropdown Arrow,** and you will get three options. These are:

- Method Label: Here, you can change the label based on your preference for your added payment method.

- Embedded Checkout: Check this box to activate Stripe as an inline payment option.

- Verify Zip/Postal Code: Check this box if you want to make providing the Zip/Postal Code information mandatory for your users to submit the forms.

> To learn more details about the Payment Method field, read this Documentation.

![Embed Checkout Fluent Forms](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/10.-Embed-checkout-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![Save Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/11.-Save-form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. 

![Preview Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/12.-Form-Preview-.webp)

## Form Specific Stripe Settings

You can also customize the **Stripe Settings** for a specific form according to your needs.

To customize the **Stripe Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**. 

![Open Settings Integrate Stripe](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/Open-Form-Settings-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, scroll down to **Stripe Settings**, and customize it based on your needs.

Do not forget to click the **Save Settings** button to save all your changes. 

![Specific Stripe Settings](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/13.-Form-Specific-Stripe-Settings-scaled.webp)

**All the Stripe Settings options mentioned above are briefly explained below:**

### A. Stripe Meta Data

Check the **Push Form Data to Stripe** to send the form submission date to your Stripe. 

![Stripe Meta Data Option](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/14.-Stripe-meta-data-option.webp)

### B. Stripe Account

Here, you can select which stripe account credential (**Global** or **Custom**) will be used for this form. Select the **Custom Stripe Credentials** if you want to set up a different Stripe account for this specific form.

![Custom Stripe Credentials](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/15.-Custom-Stripe-Credentials.webp)

### C. Stripe Payment Receipt

Check this option if you want to disable the option of receiving payment receipt email notifications of this form.

> But we recommend you do not disable this option if you want to keep track of your payment transactions.

![Stripe Payment Receipt](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/16.-Stripe-Payment-Receipt.webp)

### D. Stripe Descriptor

Here, provide the text as per your wish (Contains between 5 and 22 characters) as a statement descriptor. If you keep it empty, your Form Name will be set as a statement descriptor.

![Statement Descriptor Fluent Forms](/images/payments/payment-gateways/how-to-integrate-stripe-with-fluent-forms/17.-Statement-Descriptor.webp)
