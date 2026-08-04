---
description: "Square is a powerful payment processing platform that offers Fluent Forms inline payment options and a smooth and secure payment experience using credit…"
---

# Integrate Square (Inline Payment Integration)

[Square](https://squareup.com/us/en) is a powerful payment processing platform that offers **Fluent Forms** inline payment options and a smooth and secure payment experience using credit and debit cards.

This article will guide you through integrating **Square** into your **WordPress** **Site** with the  **Fluent Forms** plugin.

> [!Note]
> **Square** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Square Payment Method

Go to **Global Settings** from the Fluent Forms navbar, open the **Payment** tab, and select **Payment Methods**.

Select **Square**, then click **Enable Square Payment Method** to activate Square globally for all forms.

![Enable Payment Methods Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/1.-Enable-Payment-Methods-scaled.webp)

## Configure Square with Fluent Forms

Once you enable the **Square**, all the required settings will appear to configure the Square with Fluent Forms. 

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **Application ID, Access Key,** and **Location ID** from your **Square Account**.

![Payment Mode And API Credentials](/images/payments/payment-gateways/integrate-square-inline-payment-integration/2.-Payment-Mode-and-API-Credentials-scaled.webp)

### Get the API Credentials from Square

First, log in to your Square account from here. If you do not have an account, sign up [here](https://app.squareup.com/signup/en-GB?return_to=https%3A%2F%2Fdeveloper.squareup.com%2F&v=developers).
Then, create an app in your Square account to get the API credentials for configuration.

To create an app, log in to the **Square Dashboard**, go to the **Account** section from the **Navbar**, and click the **Developer Console** tab. 

![Developer Console Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/3.-Developer-Console-scaled.webp)

Click the **Plus** **Icon** under the **Applications** tab to create a new application.

![Plus Icon Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/4.-Plus-Icon-scaled.webp)

Now, add a **name** to your application and click the **Next** button. 

![Application Name Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/5.-Application-Name.webp)

Check the **Accept Payments** box and click on the **Next** button.

![Accept Payments Fluent Forms](/images/payments/payment-gateways/integrate-square-inline-payment-integration/6.-Accept-Payments.webp)

Select your desired option from the pop-up with the Find your Audience option, and click the **Complete** button. 

![Myself Complete Button](/images/payments/payment-gateways/integrate-square-inline-payment-integration/7.-Myself-Complete-button.webp)

After creating the application, you will find the **Application ID** and **Access Key** in the **Sandbox Application ID Access Token** fields under the **Credentials**. Copy them. 

![Copy Application ID And Access Token](/images/payments/payment-gateways/integrate-square-inline-payment-integration/8.-Copy-Application-ID-and-Access-Token-scaled.webp)

Now, go to the **Locations** tab from the left sidebar, and copy the **Location ID.**

![Copy Location ID](/images/payments/payment-gateways/integrate-square-inline-payment-integration/9.-Copy-Location-ID-scaled.webp)

Now, return to the **Square Payment Method Settings** from the **Global Settings** section of **Fluent Forms**.

Then, paste **the Application ID**, **Access Token**, and **Location ID** in the corresponding fields.

Finally, press the **Save Settings** button, and your Square account will be configured with Fluent Forms for your WordPress Site. 

![Paste All Credentials](/images/payments/payment-gateways/integrate-square-inline-payment-integration/10.-Paste-all-credentials-scaled.webp)

## Integrate Square in Forms

Once you finish setting up your **Square** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](/add-payment-item-field-in-payment-forms) and [Payment Method](/add-payment-method-field-in-payment-forms) fields are added).

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![Open Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/11.-Open-desired-form-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Square** option, click the **Dropdown Arrow,** and you will get two options. These are:

- **Method Label:** Here, you can change the label based on your preference for your added payment method.

- **Embedded Checkout:** Check this box to activate Square as an inline payment option.

![Set Up Payment Method Field](/images/payments/payment-gateways/integrate-square-inline-payment-integration/12.-set-up-Payment-Method-field-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. 

Also, to see the **Preview** of the form, click the **Preview & Design** button in the middle.

![Save Integrate Square](/images/payments/payment-gateways/integrate-square-inline-payment-integration/13.-Save-form-scaled.webp)

### Preview of Added Payment Method

Here is the **preview** of the **Payment Method** that we just added. 

![Added Square Preview](/images/payments/payment-gateways/integrate-square-inline-payment-integration/14.-Added-Square-form-preview-scaled.webp)
