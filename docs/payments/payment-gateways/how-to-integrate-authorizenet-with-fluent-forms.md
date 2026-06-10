# How to Integrate Authorize.Net

Authorize.net is a global payment gateway that gives you Visa, credit card, and electronic payment services. With Fluent Forms, you can easily credit and debit your online payment.

> [!Note]
> **Authorize.Net** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Enable Authorize.net Payment Method

First, go to **Global Settings** from the **Fluent Forms** Navbar, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to Authorize.Net in the top navbar and click **Enable Authorize.Net Payment Method**. The Authorize.Net Payment Method will be enabled globally for all forms. 

![Enable Authorized integrate Authorize.Net](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/enable-authorized-scaled.webp)

## Configure Authorize.Net 

Once you enable Authorize.Net, all the required settings will appear to configure Authorize.Net with Fluent Forms. 

Before starting the configuration, select a **Payment Mode:** **Test** (for test payments) or **Live** (for real payments). Both options follow the same process; we choose **Test** **Mode**.

Then, you need to select Transaction Type, obtain the **API  Login ID**, **Transaction key**, and **Webhook signature key** from your **Authorize.Net** Account. 

Also, you need to set up the **Authorize.Net Webhook Setup**. Copy your website webhook URL from this page for later use.

![Credentials Fluent Forms](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/credentials-02-scaled.webp)

## Get the Credentials

#### API Login ID, Transaction Key, and Webhook Signature Key

Sign in to your [Authorize.net](https://www.authorize.net/) account and collect these credentials for the Fluent Forms payment settings.

#### Get API Login ID

First, log in to your Authorize account from [here](https://login.authorize.net/). Once you log in to the Authorize.Net Dashboard, go to the **Accounts and API Settings** sidebar, and click on this. Here you will find the **API login ID**. Simply copy the **ID** for future use.

#### Get Transaction Key

Next, you will find the Transaction Key from the dropdown options. To get the transaction key, click the **GENERATE NEW TRANSACTION KEY** button. 

![API Credentials](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/API-Credentials-03-scaled.webp)

Here appears a new pop-up. Simply, click on the **SUBMIT** button.

![Submit Button](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/submit-button-04.webp)

Here, a new pop-up arrives. Enter the passcode from your mail and click the **CONFIRM** button.

![Passcode Fluent Forms](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/passcode-05.webp)

Now your **Transaction key** has been generated. **Copy** this for future use.

![Transaction Key Created](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/new-transaction-key-created-06.webp)

### WebHook Signature Key

To get the signature key, click on the **GENERATE NEW SIGNATURE KEY** button. Here appears a new pop-up. Then follow the steps similar to the transaction key, and you’ll get a webhook signature key. Simply copy for future use.

![Signature Key Created](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/new-signature-key-created-07-scaled.webp)

### Required Authorize.Net Webhook Events Setup

For Authorize.Net to function completely for payments, you must configure your Authorize.Net webhooks.

To set up events, go to the **Accounts & API Settings** sections and scroll down, and click on the **Webhooks** section. 

![Access Webhook](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/access-webhook-08-scaled.webp)

Here appears a new pop-up. Now, click the **Create a Webhook notification** button.

![Create Webhook Notification](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/create-a-webhook-notification-09-scaled.webp)

Now, enter all the webhook information. Enter the **Webhook notification name**, the **Endpoint** **URL** that you **copied** from your website before, and select the **Status** option **Active**.

Then, select the **Payment Events** that are below and click the **Save** button.

- AuthCapture Created (net.authorize.payment.authcapture.created)

- Authorization Created (net.authorize.payment.authorization.created)

- Capture Created (net.authorize.payment.capture.created)

- PriorAuthCapture Created (net.authorize.payment.priorAuthCapture.created)

- Void Created (net.authorize.payment.void.created)

- Refund Created (net.authorize.payment.refund.created)

- Fraud Approved (net.authorize.payment.fraud.approved)

- Fraud Declined (net.authorize.payment.fraud.declined)

![Webhook Information Added](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/webhook-information-added-10-scaled.webp)

Now, your webhook is in an active status.

![Webhook Active](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/webhook-active-11-scaled.webp)

Now, return to the **Authorize.net Payment Method Settings** from the **Global Settings** section of Fluent Forms.

Then, paste the **API Login ID**, **Transaction key**, and **Webhook Signature key** in the corresponding fields.

Finally, press the **Save Settings** button, and your Authorize.net account will be configured with Fluent Forms for your WordPress Site.

![Save Settings integrate Authorize.Net](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/save-settings-12-scaled.webp)

## Integrate Authorize.Net in Forms

Once you finish setting up your Authorize.Net payment method, you can easily add this payment method to any of your existing Payment Forms (i.e., a form where [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields are added).

Note: If you do not have any existing Payment Forms, read this [Documentation](/how-to-create-a-payment-form-with-fluent-form) to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Edit integrate Authorize.Net](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/Edit-form-13-scaled.webp)

Once you are on the **Editor** page, go to the **Input Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil** Icon.

Now, go to the Payment Methods, check the **Authorize.Net** option, click the **Dropdown** **Arrow**, and you will get the option.

- Method Label: Here, you can change the label based on your preference for your added payment method.

To learn more details about the Payment Method field, read this [Documentation](/add-payment-method-field-in-payment-forms). 

![Payment Method Label](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/payment-method-label-14-scaled.webp)

Once you complete the edit, press the Save Form button to save all the changes.

To embed and display your form on a specific **page or post**, simply **copy the shortcode** from the top-right corner of the screen. Then, **paste it** into the content area of your desired page or post where you want the form to appear.

If you’d like to see how the form looks before publishing, click on the **Preview & Design** button in the middle of the page. This allows you to review and adjust the design before making it live.

![Copy Shortcode](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/Copy-forms-shortcode-15-scaled.webp)

### Preview of Added Payment Method

Here is the preview of the **Payment Method** that we just added. 

![Preview Authorized Payment integrate Authorize.Net](/images/payments/payment-gateways/how-to-integrate-authorizenet-with-fluent-forms/preview-of-authorized-payment-16.webp)
