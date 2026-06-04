# How to Integrate Paddle with Fluent Forms

[Paddle](http://paddle.com) is a payment processing platform that allows **Fluent Forms** payment options and a smooth and secure payment experience. This article will guide you through integrating **Paddle** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> [!Note]
> **Paddle** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Paddle Payment Method

First, go to **Global Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to **Paddle** in the top navbar and click **Enable Paddle Payment Method.** The **Paddle Payment Method** will be enabled globally for all forms. 

![Enable Paddle Payment Method Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/1.-Enable-Paddle-Payment-Method-scaled.webp)

## Configure Paddle with Fluent Forms

Once you enable the **Paddle**, all the required settings will appear to configure the Paddle with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **API  Key** and **Client Token** from your **Paddle Account**.

![Test API Key](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/2.-Test-API-Key--scaled.webp)

### Get the API Key and Client Token from Paddle

To learn how to get all the required API Key and Client Token from your [Paddle](http://paddle.com), follow the steps with screenshots below – 

First, log in to your [Paddle Account](https://sandbox-login.paddle.com/login). If you do not have an account, sign up from [here](https://www.paddle.com/get-started). 

#### Generating API Key

Once you log in to the **Paddle Dashboard**, open the **Developers Tool** dropdown list from the left sidebar, and click **Authentication**.

Now, go to the **API keys** section and click the **+ Generate API key** button.

![Generate API Key Button](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/3.-Generate-API-Key-button-scaled.webp)

Now provide the **Name** and **Description** for your API key, click the **Generate** button, and your desired API key will be generated.

![Generate Button](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/4.-Generate-button-1.webp)

Here, you can see the newly generated API Key. Now, click the **Three-dot-icon** and press the **Copy key** button and your desired API Key will be copied.

![Copy API Key](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/5.-copy-API-key.webp)

#### Generating Client Token

Now, go to the **Client-side tokens** section and click the **+ Generate client-side token** button.

![Generate Client Side Token](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/6.-Generate-Client-Side-Token.webp)

Now provide the **Name** and **Description** for your client token, click the **Generate** button, and your desired client token will be generated. 

![Generate Token Button](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/7.-Generate-token-button.webp)

Here, you can see the newly generated Client Token. Now, click the **Three-dot-icon** and press the **Copy Token** button and your desired Client Token will be copied.

![Copy Token Fluent Forms](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/8.-Copy-Token.webp)

### Setup Default Payment Link

Setting up a **default payment link** is essential for processing a successful payment transaction.

Now, open the **Checkout** dropdown list from the left sidebar, click the **Checkout Settings** option, go to the **General** tab, and provide your **Website URL** into the **Default Payment Link** field.

Once you’ve entered the link, click the **Save** button, and all payment links you send to your clients will use this domain to show the payment form.

![Deafult Payment Link](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/9.-Deafult-payment-link-scaled.webp)

## Connect Paddle with Fluent Forms

**Now,** return to the **Paddle Payment Method Settings** from the **Global Settings** section of **Fluent Forms**.

Then, paste the **Key** and **Token** you copied from **Paddle** into the **API Key** and **Client Token** fields respectively.

Finally, press the **Save Settings** button and your Paddle account will be configured with **Fluent Forms** for your WordPress Site.

![Paste API Key And Client Token](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/10.-Paste-API-key-and-Client-Token-scaled.webp)

## Integrate Paddle in Forms

Once you finish setting up your **Paddle** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/docs/add-payment-item-field-in-payment-forms) and [Payment Method](/docs/add-payment-method-field-in-payment-forms) fields are added).

> [!Note]
> If you do not have an existing payment form, see [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/Open-desired-form-2-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Paddle** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> [!Note]
> For **Payment Method** field details, see [Add Payment Method Field in Payment Forms](/docs/add-payment-method-field-in-payment-forms).

![Add Paddle Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/11.-Add-paddle-in-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![Save Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/12.-Save-form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. Once a user clicks the **Submit Form** button it will redirect to **Paddle** to complete the payment process. 

![Submit Fluent Forms](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/13.-Submit-form.webp)

Here is the preview of the **Paddle Checkout Modal**. 

![Preview Paddle Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/14.-Preview-of-Paddle.webp)

## Form Specific Paddle Settings

You can also customize the **Paddle Settings** for a specific form according to your needs.

To customize the **Paddle Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**.

![Open Settings Integrate Paddle](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/Open-Form-Settings-2-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, and scroll down to **Paddle Settings**.

Here, you can select which type of payment process can be done through Paddle; **Non-catalog, Catalog Item,** or **Non-catalog prices for an existing product**

Do not forget to click the **Save Settings** button to save all your changes. 

![Specific Paddle Payment Settings](/images/payments/payment-gateways/how-to-integrate-paddle-with-fluent-forms/15.-Form-specific-Paddle-payment-settings-scaled.webp)
