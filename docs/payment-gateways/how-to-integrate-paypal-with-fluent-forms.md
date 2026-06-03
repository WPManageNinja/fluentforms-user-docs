# How to Integrate PayPal with Fluent Forms

[PayPal](http://paypal.com) is a payment processing platform that offers **Fluent Forms** to receive payments from your users securely. This article will guide you through integrating **PayPal** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> Remember, PayPal Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable PayPal Payment Method

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **PayPal Standard** in the top navbar and click **Enable** **PayPal Payment Method.** The **PayPal Payment Method** will be enabled globally for all forms. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/1.-Enable-Paypal-Payment-Method-scaled.webp)

## Configure PayPal with Fluent Forms

Once you enable the **PayPal**, all the required settings will appear to configure the PayPal with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Sandbox** (for test payments) and **Live (**for real payments) as both options follow the same configuration process, e.g., I choose the **Sandbox Mode**.

Then, enter the email you signed up with on the [PayPal Account](https://www.paypal.com/signin) into the **PayPal Email** field.

Additionally, turn on the **Disable PayPal IPN Verification** toggle if **Payment Data Transfer** is not accessible for you and payments are not being marked as complete. This option allows the site to use a slightly less secure method of verifying purchases.

Finally, press the **Save PayPal Settings** button and your PayPal account will be integrated with **Fluent Forms** for your WordPress Site. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/2.-Configure-Paypal-Account-Email-scaled.webp)

## Setup PayPal IPN Settings

After configuring PayPal, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in **PayPal**.

**IPN (Instant Payment Notification)** is a post-message notification sent by **PayPal** after a successful transaction for standard merchant accounts, containing all the payment transaction details. Setting up [PayPal](https://www.paypal.com/) IPN with Fluent Forms allows you to receive Instant Payment Notifications from PayPal.

To learn how to set up **PayPal IPN** with **Fluent Forms**, follow the steps with the screenshots below – 

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **PayPal Standard**, and scroll down to the **PayPal IPN Settings (Recommended for Subscription Payment)** option. 

Then, copy the **IPN URL** for smooth transactions based on **PayPal** **Data** related to **Subscription/Recurring** payments. 

> If you do not set up the IPN (Instant Payment Notification) then it will still work for single payments but recurring payments will not be marked as paid for PayPal subscription payments.

Do not forget to press the **Save PayPal Settings** button to save all your changes. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/3.-PayPal-IPN-Settings--scaled.webp)

Now, visit the Dashboard of your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile** **Icon,** and click the **Account Settings** option.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/4.-Account-Settings.webp)

Then, scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications** and click the **Update** link.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/5.-Website-Payments.webp)

Click the **Edit Settings** button to set up your IPN notification.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/6.-Choose-IPN-Settings.webp)

Finally, **paste the URL** into the **Notification URL** field that you copied from the **Paypal IPN Settings** page.

After entering your **Notification URL,** select **Receive IPN messages (Enabled)** to activate the IPN messages for users.

Once you are done, click the **Save** button to confirm the setup.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/7.-Paste-IPN-URL.webp)

Here, you can see the **Notification URL** is updated and the IPN is enabled for your site.

Also, you can modify your notification URL anytime by clicking the **Edit Settings** button.
Plus, if you want to disable the PayPal IPN, simply click the **Turn Off IPN** button.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/8.-Edit-Settings-or-Turn-Off-button.webp)

## Integrate PayPal in Forms

Once you finish setting up your **PayPal** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/docs/add-payment-item-field-in-payment-forms) and [Payment Method](/docs/add-payment-method-field-in-payment-forms) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/Open-desired-form-1-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by hovering over it and clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **PayPal** option, click the **Dropdown Arrow,** and you will get two options. These are:

- Method Label: Here, you can change the label based on your preference for your added payment method.

- Require Shipping Address: Check this box if you want to make providing the Shipping Address information mandatory for your users to submit the forms.

> To learn more details about the Payment Method field, read this Documentation.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/9.-Check-PayPal-payment-method-in-a-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/10.-Save-Form-scaled-2.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. Once a user clicks the **Submit Form** button it will redirect to PayPal to complete the payment process. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/11.-PayPal-Form-Preview.webp)

## Form Specific PayPal Settings

You can also customize the **PayPal Settings** for a specific form according to your needs.

To customize the **PayPal Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/Open-Form-Settings-1-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, and scroll down to **PayPal Settings**.

Here, you can select which **PayPal Account** (**Global** or **Custom**) will be used for this form. 
Select the **Custom PayPal ID** option if you want to set up a different PayPal account for this specific form.

Do not forget to click the **Save Settings** button to save all your changes. 

![](/images/payment-gateways/how-to-integrate-paypal-with-fluent-forms/12.-Form-Specific-PayPal-Payment-Settings-scaled.webp)
