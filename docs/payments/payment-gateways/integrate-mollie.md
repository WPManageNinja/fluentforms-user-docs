---
description: "Mollie is a payment gateway that lets Fluent Forms accept online payments."
---

# Integrate Mollie

[Mollie](http://mollie.com) is a payment gateway that lets **Fluent Forms** accept online payments. This article shows you how to connect **Mollie** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Mollie** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Mollie Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Mollie** to enable it for all forms, then click **Manage** to open its settings.

![Enable Mollie Payment Method Integrate Mollie](/images/payments/payment-gateways/integrate-mollie/1.-Enable-Mollie-payment-method-scaled.webp)

## Configure Mollie with Fluent Forms

After you enable Mollie, its settings appear.

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

Then get the **API Key** from your **Mollie Account**.

![Test API Key](/images/payments/payment-gateways/integrate-mollie/2.-Test-API-Key-scaled.webp)

### Get the API Credentials

Log in to your [Mollie account](https://my.mollie.com/dashboard/login). If you do not have an account, [sign up](https://my.mollie.com/dashboard/signup).

In the **Mollie Dashboard**, go to **Browse** in the **Navbar** and click **Developers**.

![Developers Tab Fluent Forms](/images/payments/payment-gateways/integrate-mollie/3.-Developers-tab.webp)

Copy the API key from the **Test API key** row.

>[!Note]
> If you choose Live as the payment mode, copy the Live API Key to activate Live mode.

![Copy API Key](/images/payments/payment-gateways/integrate-mollie/4.-Copy-API-Key-1.webp)

Return to the **Mollie** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **API Key** you copied from Mollie.

Click **Save**. Fluent Forms now connects to your Mollie account.

![Paste API Key](/images/payments/payment-gateways/integrate-mollie/5.-Paste-API-Key-1-scaled.webp)

## Integrate Mollie in Forms

You can add **Mollie** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Mollie](/images/payments/payment-gateways/integrate-mollie/Open-desired-form-4-scaled.webp)

On the **Editor** page, click the **Pencil Icon** on the **Payment Method** field to open the **Input Customization** menu on the right side.

Go to **Payment Methods**, check the **Mollie** option, and click the **Dropdown Arrow**. You can change the **Method Label** there.

![Add Mollie Integrate Mollie](/images/payments/payment-gateways/integrate-mollie/6.-Add-Mollie-in-desired-form-1-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

![Save Integrate Mollie](/images/payments/payment-gateways/integrate-mollie/7.-Save-Form-scaled-3.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added. When a user clicks **Submit Form**, Fluent Forms redirects them to **Mollie** to complete the payment.

![Submit Fluent Forms](/images/payments/payment-gateways/integrate-mollie/8.-Submit-form.webp)

The next image shows the **Mollie** checkout page.

![Preview Mollie Integrate Mollie](/images/payments/payment-gateways/integrate-mollie/9.-Preview-of-Mollie-.webp)
