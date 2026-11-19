---
description: "Authorize.net is a global payment gateway that gives you Visa, credit card, and electronic payment services."
---

# Integrate Authorize.Net

Authorize.net is a global payment gateway that gives you Visa, credit card, and electronic payment services. With Fluent Forms, you can take credit and debit card payments online. This article shows you how to connect Authorize.Net to your site.

> [!Note]
> **Authorize.Net** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Authorize.net Payment Method

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and select **Payment Methods**.

Turn on the toggle next to **Authorize.Net** to enable it for all forms, then click **Manage** to open its settings.

![Enable Authorized integrate Authorize.Net](/images/payments/payment-gateways/integrate-authorizenet/enable-authorized-scaled.webp)

## Configure Authorize.Net

After you enable Authorize.Net, its settings appear.

Select a **Payment Mode:** **Test** (for test payments) or **Live** (for real payments). Both follow the same process. This guide uses **Test** **Mode**.

Select the **Transaction Type**: **Authorize and Capture** charges the card immediately, while **Authorize Only** authorizes the payment for later capture. Then get the **API Login ID**, **Transaction key**, and **Webhook signature key** from your **Authorize.Net** account.

You also need to set up the **Authorize.Net Webhook Setup**. Copy your website webhook URL from this page for later use.

![Credentials Fluent Forms](/images/payments/payment-gateways/integrate-authorizenet/credentials-02-scaled.webp)

## Get the Credentials

### API Login ID, Transaction Key, and Webhook Signature Key

Sign in to your [Authorize.net](https://www.authorize.net/) account and collect these credentials for the Fluent Forms payment settings.

### Get API Login ID

Log in to your [Authorize account](https://login.authorize.net/). In the Authorize.Net Dashboard, open the **Accounts and API Settings** sidebar. You find the **API login ID** there. Copy the **ID** for later.

### Get Transaction Key

The Transaction Key is in the dropdown options. Click **GENERATE NEW TRANSACTION KEY**.

![API Credentials](/images/payments/payment-gateways/integrate-authorizenet/API-Credentials-03-scaled.webp)

A pop-up appears. Click **SUBMIT**.

![Submit Button](/images/payments/payment-gateways/integrate-authorizenet/submit-button-04.webp)

Another pop-up appears. Enter the passcode from your email and click **CONFIRM**.

![Passcode Fluent Forms](/images/payments/payment-gateways/integrate-authorizenet/passcode-05.webp)

Authorize.Net generates your **Transaction key**. **Copy** it for later.

![Transaction Key Created](/images/payments/payment-gateways/integrate-authorizenet/new-transaction-key-created-06.webp)

### WebHook Signature Key

Click **GENERATE NEW SIGNATURE KEY**. A pop-up appears. Follow the same steps as for the transaction key to get a webhook signature key. Copy it for later.

![Signature Key Created](/images/payments/payment-gateways/integrate-authorizenet/new-signature-key-created-07-scaled.webp)

### Required Authorize.Net Webhook Events Setup

For Authorize.Net to work fully for payments, configure your Authorize.Net webhooks.

To set up events, go to **Accounts & API Settings**, scroll down, and click **Webhooks**.

![Access Webhook](/images/payments/payment-gateways/integrate-authorizenet/access-webhook-08-scaled.webp)

A pop-up appears. Click **Create a Webhook notification**.

![Create Webhook Notification](/images/payments/payment-gateways/integrate-authorizenet/create-a-webhook-notification-09-scaled.webp)

Enter the webhook information. Enter the **Webhook notification name** and the **Endpoint** **URL** you **copied** from your website earlier, and set **Status** to **Active**.

Select the **Payment Events** below and click **Save**.

- AuthCapture Created (net.authorize.payment.authcapture.created)
- Authorization Created (net.authorize.payment.authorization.created)
- Capture Created (net.authorize.payment.capture.created)
- PriorAuthCapture Created (net.authorize.payment.priorAuthCapture.created)
- Void Created (net.authorize.payment.void.created)
- Refund Created (net.authorize.payment.refund.created)
- Fraud Approved (net.authorize.payment.fraud.approved)
- Fraud Declined (net.authorize.payment.fraud.declined)

![Webhook Information Added](/images/payments/payment-gateways/integrate-authorizenet/webhook-information-added-10-scaled.webp)

Your webhook is now active.

![Webhook Active](/images/payments/payment-gateways/integrate-authorizenet/webhook-active-11-scaled.webp)

Return to the **Authorize.net** page under **Payment Settings → Payment Methods** (click **Manage**).

Paste the **API Login ID**, **Transaction key**, and **Webhook Signature key** in the matching fields.

Click **Save**. Fluent Forms now connects to your Authorize.net account.

![Save Settings integrate Authorize.Net](/images/payments/payment-gateways/integrate-authorizenet/save-settings-12-scaled.webp)

## Integrate Authorize.Net in Forms

You can add Authorize.Net to any existing Payment Form, which is a form with [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields.

Note: If you do not have a Payment Form yet, read this [Documentation](/create-a-payment-form) to learn how to create one.

Go to the **Editor** page of your form by clicking its **Edit** option.

![Edit integrate Authorize.Net](/images/payments/payment-gateways/integrate-authorizenet/Edit-form-13-scaled.webp)

On the **Editor** page, click the **Pencil** Icon on the **Payment Method** field to open the **Customize** menu on the right side.

Go to Payment Methods, check the **Authorize.Net** option, and click the **Dropdown** **Arrow**. This option appears:

- **Method Label:** Change the label of your payment method.

To learn more about the Payment Method field, see [Payment Method Field](/add-payment-method-field-in-payment-forms).

![Payment Method Label](/images/payments/payment-gateways/integrate-authorizenet/payment-method-label-14-scaled.webp)

Click **Save Form** to save your changes.

To display the form on a **page or post**, **copy the shortcode** from the top-right corner of the screen and **paste it** into the content area of the page or post.

To see how the form looks before you publish, click **Preview** in the middle of the page. You can review and adjust the design before you go live.

![Copy Shortcode](/images/payments/payment-gateways/integrate-authorizenet/Copy-forms-shortcode-15-scaled.webp)

### Preview of Added Payment Method

The preview below shows the **Payment Method** you added.

![Preview Authorized Payment integrate Authorize.Net](/images/payments/payment-gateways/integrate-authorizenet/preview-of-authorized-payment-16.webp)
