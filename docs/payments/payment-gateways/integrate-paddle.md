---
description: "Paddle is a payment processing platform that allows Fluent Forms payment options and a smooth and secure payment experience."
---

# Integrate Paddle

[Paddle](http://paddle.com) is a payment processing platform that gives **Fluent Forms** secure payment options. This article shows you how to connect **Paddle** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Paddle** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Paddle Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Paddle** to enable it for all forms, then click **Manage** to open its settings.

![Enable Paddle Payment Method Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/1.-Enable-Paddle-Payment-Method-scaled.webp)

## Configure Paddle with Fluent Forms

After you enable **Paddle**, its settings appear.

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

Then get the **API Key** and **Client Token** from your **Paddle Account**. Paddle uses one **Client Token** for the connection, not one per mode.

![Test API Key](/images/payments/payment-gateways/integrate-paddle/2.-Test-API-Key--scaled.webp)

### Get the API Key and Client Token from Paddle

Log in to your [Paddle Account](https://sandbox-login.paddle.com/login). If you do not have an account, [sign up](https://www.paddle.com/get-started).

#### Generating API Key

In the **Paddle Dashboard**, open the **Developers Tool** dropdown in the left sidebar and click **Authentication**.

Go to the **API keys** section and click **+ Generate API key**.

![Generate API Key Button](/images/payments/payment-gateways/integrate-paddle/3.-Generate-API-Key-button-scaled.webp)

Enter a **Name** and **Description** for your API key, then click **Generate**.

![Generate Button](/images/payments/payment-gateways/integrate-paddle/4.-Generate-button-1.webp)

The new API key appears. Click the **Three-dot-icon** and press **Copy key** to copy it.

![Copy API Key](/images/payments/payment-gateways/integrate-paddle/5.-copy-API-key.webp)

#### Generating Client Token

Go to the **Client-side tokens** section and click **+ Generate client-side token**.

![Generate Client Side Token](/images/payments/payment-gateways/integrate-paddle/6.-Generate-Client-Side-Token.webp)

Enter a **Name** and **Description** for your client token, then click **Generate**.

![Generate Token Button](/images/payments/payment-gateways/integrate-paddle/7.-Generate-token-button.webp)

The new Client Token appears. Click the **Three-dot-icon** and press **Copy Token** to copy it.

![Copy Token Fluent Forms](/images/payments/payment-gateways/integrate-paddle/8.-Copy-Token.webp)

### Setup Default Payment Link

A **default payment link** is required to process a payment successfully.

Open the **Checkout** dropdown in the left sidebar, click **Checkout Settings**, go to the **General** tab, and enter your **Website URL** in the **Default Payment Link** field.

Click **Save**. All payment links you send to your clients now use this domain to show the payment form.

![Deafult Payment Link](/images/payments/payment-gateways/integrate-paddle/9.-Deafult-payment-link-scaled.webp)

## Connect Paddle with Fluent Forms

Return to the **Paddle** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **Key** and **Token** you copied from **Paddle** into the **API Key** and **Client Token** fields.

Click **Save**. Fluent Forms now connects to your Paddle account.

![Paste API Key And Client Token](/images/payments/payment-gateways/integrate-paddle/10.-Paste-API-key-and-Client-Token-scaled.webp)

## Integrate Paddle in Forms

You can add **Paddle** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/Open-desired-form-2-scaled.webp)

On the **Editor** page, click the **Pencil Icon** on the **Payment Method** field to open the **Input Customization** menu on the right side.

Go to **Payment Methods**, check the **Paddle** option, and click the **Dropdown Arrow**. You can change the **Method Label** there.

![Add Paddle Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/11.-Add-paddle-in-desired-form-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

![Save Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/12.-Save-form-scaled.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added. When a user clicks **Submit Form**, Fluent Forms redirects them to **Paddle** to complete the payment.

![Submit Fluent Forms](/images/payments/payment-gateways/integrate-paddle/13.-Submit-form.webp)

The next image shows the **Paddle Checkout Modal**.

![Preview Paddle Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/14.-Preview-of-Paddle.webp)

## Form Specific Paddle Settings

You can customize the **Paddle Settings** for a specific form.

Click **Forms** in the **Fluent Forms Navbar**, then click the **Settings** (gear) icon of your form.

![Open Settings Integrate Paddle](/images/payments/payment-gateways/integrate-paddle/Open-Form-Settings-2-scaled.webp)

Click **Payment Settings** in the left sidebar and scroll down to **Paddle Settings**.

Select the type of payment process Paddle handles: **Non-catalog, Catalog Item,** or **Non-catalog prices for an existing product**.

Click **Save** to save your changes.

![Specific Paddle Payment Settings](/images/payments/payment-gateways/integrate-paddle/15.-Form-specific-Paddle-payment-settings-scaled.webp)
