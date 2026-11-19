---
description: "Square is a powerful payment processing platform that offers Fluent Forms inline payment options and a smooth and secure payment experience using credit…"
---

# Integrate Square (Inline Payment Integration)

[Square](https://squareup.com/us/en) is a payment processing platform. It gives **Fluent Forms** inline payment options and a secure payment experience with credit and debit cards.

This article shows you how to connect **Square** to your **WordPress** site with the **Fluent Forms** plugin.

> [!Note]
> **Square** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Square Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Square** to enable it for all forms, then click **Manage** to open its settings.

![Enable Payment Methods Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/1.-Enable-Payment-Methods-scaled.webp)

## Configure Square with Fluent Forms

After you enable **Square**, its settings appear.

Select a **Payment Mode**: **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** mode.

Then get the **Application ID, Access Key,** and **Location ID** from your **Square Account**. Square calls the Access Key an **Access Token**.

![Payment Mode And API Credentials](/images/payments/payment-gateways/integrate-square-inline-payment-integration/2.-Payment-Mode-and-API-Credentials-scaled.webp)

### Get the API Credentials from Square

Log in to your [Square account](https://squareup.com/login). If you do not have an account, [sign up](https://app.squareup.com/signup/en-GB?return_to=https%3A%2F%2Fdeveloper.squareup.com%2F&v=developers). Then create an app in your Square account to get the API credentials.

To create an app, log in to the **Square Dashboard**, go to **Account** in the **Navbar**, and click the **Developer Console** tab.

![Developer Console Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/3.-Developer-Console-scaled.webp)

Click the **Plus** **Icon** under the **Applications** tab to create a new application.

![Plus Icon Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/4.-Plus-Icon-scaled.webp)

Enter a **name** for your application and click **Next**.

![Application Name Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/5.-Application-Name.webp)

Check the **Accept Payments** box and click **Next**.

![Accept Payments Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/6.-Accept-Payments.webp)

In the pop-up, select an option for **Find your Audience** and click **Complete**.

![Myself Complete Button](/images/payments/payment-gateways/integrate-square-inline-payment-integration/7.-Myself-Complete-button.webp)

After you create the application, find the **Application ID** and **Access Key** in the **Sandbox Application ID Access Token** fields under **Credentials**. Copy them.

![Copy Application ID And Access Token](/images/payments/payment-gateways/integrate-square-inline-payment-integration/8.-Copy-Application-ID-and-Access-Token-scaled.webp)

Go to the **Locations** tab in the left sidebar and copy the **Location ID.**

![Copy Location ID](/images/payments/payment-gateways/integrate-square-inline-payment-integration/9.-Copy-Location-ID-scaled.webp)

Return to the **Square** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **Application ID**, **Access Key** (the Square **Access Token**), and **Location ID** in the matching fields.

Click **Save**. Fluent Forms now connects to your Square account.

![Paste All Credentials](/images/payments/payment-gateways/integrate-square-inline-payment-integration/10.-Paste-all-credentials-scaled.webp)

## Integrate Square in Forms

You can add **Square** to any existing **Payment Form**, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Open Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/11.-Open-desired-form-scaled.webp)

On the **Editor** page, click the **Pencil Icon** on the **Payment Method** field to open the **Input Customization** menu on the right side.

Go to **Payment Methods**, check the **Square** option, and click the **Dropdown Arrow**. Two options appear:

- **Method Label:** Change the label of your payment method.
- **Embedded Checkout:** Check this box to activate Square as an inline payment option.

![Set Up Payment Method Field](/images/payments/payment-gateways/integrate-square-inline-payment-integration/12.-set-up-Payment-Method-field-scaled.webp)

Click **Save** to save your changes.

To display the form on a **Page/Post**, copy the **Shortcode** from the top right side and paste it into the Page or Post.

To see a preview of the form, click **Preview** in the form editor.

![Save Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/13.-Save-form-scaled.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added.

![Added Square Preview](/images/payments/payment-gateways/integrate-square-inline-payment-integration/14.-Added-Square-form-preview-scaled.webp)
