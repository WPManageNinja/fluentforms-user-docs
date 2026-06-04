# How to Integrate Paystack with Fluent Forms

[Paystack](http://paystack.com) is an amazing payment method for your webshop that allows **Fluent Forms** a smooth online payment transaction. This article will guide you through integrating **Paystack** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> Remember, Paystack Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Paystack Payment Method

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Paystack** in the top navbar and click **Enable PayStack Payment Method.** The **Paystack Payment Method** will be enabled globally for all forms. 

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/1.-enable-Paystack-module-scaled.webp)

## Configure Paystack with Fluent Forms

Once you enable **Paystack**, all the required settings will appear to configure Paystack with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **API  Key** and **API Secret** from your **Paystack Account**.

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/2.-API-Credentials-scaled.webp)

### Get the API Credentials from Paystack

To learn how to get all the required API Credentials from your [](http://paystack.com)[](http://paystack.com)[](http://paystack.com)[Paystack](http://paystack.com), follow the steps with screenshots below – 

First, log into your [Paystack Account](https://dashboard.paystack.com/#/login). If you do not have an account, sign up from [here](https://dashboard.paystack.com/#/signup). 

Once you log into the **Paystack Dashboard**, go to the **Settings** section from the left sidebar, and click the **API Keys & Webhooks** tab. Now, copy the  **Secret key** and **Public key.**

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/3.-Copy-secret-and-API-key-scaled.webp)

**Now,** return to the **Paystack Payment Method Settings** from the **Global Settings** section of **Fluent Forms**.

Then, paste the **Public Key** and **Secret Key** you copied from Paystack into the **API Key** and **API Secret** fields respectively.

Finally, press the **Save Settings** button and your Paystack account will be configured with **Fluent Forms** for your WordPress Site.

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/4.-Paste-API-key-and-API-Secret-scaled.webp)

## Integrate Paystack in Forms

Once you finish setting up your **Paystack** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/docs/add-payment-item-field-in-payment-forms) and [Payment Method](/docs/add-payment-method-field-in-payment-forms) fields are added).

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/Open-desired-form-5-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **PayStack** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> To learn more details, see the Payment Method field guide linked above.

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/5.-add-paystack-to-the-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/6.-Save-Form-scaled-2.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. Once a user clicks the **Submit Form** button it will redirect to **Paystack** to complete the payment process. 

![](/images/payments/payment-gateways/how-to-integrate-paystack-with-fluent-forms/7.-Form-Preview-2.webp)
