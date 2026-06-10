# How to Integrate Mollie with Fluent Forms

[Mollie](http://mollie.com) is a fantastic payment gateway for your webshop that allows **Fluent Forms** a smooth online payment transaction. This article will guide you through integrating **Mollie** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> [!Note]
> **Mollie** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Mollie Payment Method

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Mollie** in the top navbar and click **Enable Mollie Payment Method.** The **Mollie Payment Method** will be enabled globally for all forms. 

![Enable Mollie Payment Method Integrate Mollie](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/1.-Enable-Mollie-payment-method-scaled.webp)

## Configure Mollie with Fluent Forms

Once you enable Mollie, all the required settings will appear to configure Mollie with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **API  Key** from your **Mollie Account**.

![Test API Key](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/2.-Test-API-Key-scaled.webp)

### Get the API Credentials 

First, log in to your Mollie account from [here](https://my.mollie.com/dashboard/login). If you do not have an account, sign up from [here](https://my.mollie.com/dashboard/signup). 

Once you log in to the **Mollie Dashboard**, go to the **Browse** section from the **Navbar**, and click the **Developers** option.

![Developers Tab Fluent Forms](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/3.-Developers-tab.webp)

Here, you will get your desired **API key** from the **Test API key** row, and copy it.

>[!Note]
> Copy the Live API Key to activate Live mode if Live is chosen as the payment mode.

![Copy API Key](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/4.-Copy-API-Key-1.webp)

**Now,** return to the **Mollie Payment Method Settings** from the **Global Settings** section of **Fluent Forms**.

Then, paste the **API Key** you copied from Mollie.

Finally, press the **Save Settings** button and your Mollie account will be configured with **Fluent Forms** for your WordPress Site.

![Paste API Key](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/5.-Paste-API-Key-1-scaled.webp)

## Integrate Mollie in Forms

Once you finish setting up your **Mollie** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/docs/add-payment-item-field-in-payment-forms) and [Payment Method](/docs/add-payment-method-field-in-payment-forms) fields are added).

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate Mollie](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/Open-desired-form-4-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Mollie** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

![Add Mollie Integrate Mollie](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/6.-Add-Mollie-in-desired-form-1-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![Save Integrate Mollie](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/7.-Save-Form-scaled-3.webp)

### Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. Once a user clicks the **Submit Form** button it will redirect to **Mollie** to complete the payment process. 

![Submit Fluent Forms](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/8.-Submit-form.webp)

Here is the preview of the **Mollie Checkout Modal**. 

![Preview Mollie Integrate Mollie](/images/payments/payment-gateways/how-to-integrate-mollie-with-fluent-forms/9.-Preview-of-Mollie-.webp)
