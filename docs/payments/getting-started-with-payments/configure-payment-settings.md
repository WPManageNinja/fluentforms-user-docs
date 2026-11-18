---
description: "Fluent Forms allows you to configure payment settings both globally and individually for all Payment Forms created with Fluent Forms (e.g., business name…"
---

# Configure Payment Settings

**Fluent Forms** allows you to configure payment settings both globally and individually for all Payment Forms created with **Fluent Forms** (e.g., business name and logo, currency, payment history, receipt page, etc.).

This article will guide you through setting up the **Payment Settings** for all Payment Forms globally.

## Configuring Payment Settings Globally

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and click **Configuration**. Three tabs appear. These are: 

**1. General**

**2. Currency**

**3. Pages & Subscription Management**

### 1. General

Under this tab, you will get the following options to configure your payment settings. Remember, this **General Setting** will function globally for all **Fluent Forms**.

**A. Payment Module**: This toggle sits above the tabs and is enabled by default, giving you access to the Payment Module (i.e., all payment-related input fields) among all forms. If you turn it off, the **Payment Module** is disabled for all forms. But if you want to accept payment through Fluent Forms, you need to keep it enabled.

**B. Business Name**: Here, you can provide your business name. It is used as the business name when customers are redirected to checkout.

**C. Logo**: Here, you can add your business logo using the **Upload** button (PNG or JPEG, minimum 400x400px).

**D. Business Full Address**: Here, you can provide your full business address, including street, city, state, and country.

**E. Enable Debug Log**: Enable this option only for test purposes. Once you enable this, Fluent Forms logs IPN and Payment errors.

Once you are done, click **Save** to save the configuration.

![General Tab Under Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/1.-General-tab-under-Payment-Settings-scaled.webp)

### 2. Currency

Under this tab, you will get the following options to define your currency settings globally. Remember, this **Currency** setting will function globally for all Fluent Forms.

**A. Default Currency**: Here, you can set the desired default currency type globally for your payment forms using the dropdown list. You can also set your currency for a specific form using the form's payment settings.

**B. Currency Sign Position**: Here, you can set the currency sign position according to your requirements by clicking the checkbox, e.g., I choose the Right (100$) option.

**C. Currency Separators**: Here, you will get two types of currency separators from the dropdown list. Choose anyone according to your needs.

**D. Hide decimal points for rounded numbers**: Check this box if you don’t want decimal points if the currency figure is rounded.

Once you are done, click **Save** to save the configuration.

![Currency Settings Tab](/images/payments/getting-started-with-payments/configure-payment-settings/2.-Currency-settings-tab-scaled.webp)

### 3. Pages & Subscription Management

Under this tab, you will get the option to display your **Payment History** and **Payment** **Receipt** on your desired pages. Also, you can enable **Subscription** **Management** for **Stripe** only. 

Remember, this setting also functions globally for all Fluent Forms.
Once you are done, click **Save** to save the configuration.

![Page And Subscription Management Tab](/images/payments/getting-started-with-payments/configure-payment-settings/3.-Page-and-Subscription-Management-tab-1-scaled.webp)

#### A. Payment (History) Management Page

Through this option, you can select an existing desired page where only the logged-in users can see their **Payment History** (i.e., **single payments** and **subscriptions**).

You can also add the **Payment History** using this shortcode **[fluentform_payments]** on the selected page. 

Then, click the **Save** button to save all the changes, and press the **Preview** button in the middle to see the form preview.

![Payment History Shortcode](/images/payments/getting-started-with-payments/configure-payment-settings/4.-Payment-History-shortcode-scaled.webp)

Here, you can see the **Preview** of the **Payment History Page** where you will get the following options. 

- **Subscriptions:** Under this section, only the logged-in users can see the Payment History of each Subscription of their payment forms. Plus, here, you can see the payment-related details by clicking the View Payments button in the left corner. Also, users can cancel their subscriptions anytime if needed by clicking the Cancel button

- **Payments:** Under this section, only the logged-in users can see the Payment History of each single payment of their payment forms. From here, you can see the individual Payment Receipt by clicking the View link.

![Preview Payment History Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/5.-Preview-of-Payment-History.webp)

#### B. Payment Receipt Page

Through this option, you can select an existing desired page where users can view their payment receipts, and manage single & subscription payments.

You can also add the Payment Receipt using this shortcode **[fluentform_payment_view]** on the selected page. 

Then, click the **Save** button to save all the changes, and press the **Preview** button in the middle to see the form preview.

![Payment Receipt Shortcode](/images/payments/getting-started-with-payments/configure-payment-settings/6.-Payment-Receipt-shortcode-scaled.webp)

Here, you can see the **Preview** of a single **Payment Receipt** under the **Payment Receipt** page. 

![Specific Pyment Receipt](/images/payments/getting-started-with-payments/configure-payment-settings/7.-Form-of-a-specific-Pyment-Receipt.webp)

> [!Tip]
> Open a single payment receipt from **Payments** (the **Transactions** list) by clicking the transaction.

![Payment History View Button](/images/payments/getting-started-with-payments/configure-payment-settings/8.-Payment-History-View-button.webp)

#### C. Subscription Management

Enable this option if you want to allow your users to manage their own subscriptions, like canceling an active subscription. This subscription management will function only for the Stripe payment method.

Once you are done, click **Save** to save the configuration.

![Subscription Management Option](/images/payments/getting-started-with-payments/configure-payment-settings/9.-Subscription-Management-option.webp)

## Configuring Payment Settings in a Specific Form

Click **Forms** in the **Fluent Forms Navbar**, then click the **Settings** (gear) icon of your desired **Payment Form**. 

![Open Settings Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/Open-Form-Settings-3-scaled.webp)

Then click **Payment Settings** in the left sidebar, and you will get the following options. 

**A. Currency:** Using this option, you can set the desired default currency type specifically for this form using the dropdown list. 

**B. Transaction Type:** Using this option, you can select the transaction type between **Products/Services** and **Donation** based on your preference.

**C. Customer Email:** Here, you need to map the **Email field** by clicking the **Arrow** **Icon**. It's an optional field but recommended to be mapped.

**D. Customer Name**: Here, you need to select the name field from your form inputs. It's an optional but recommended field. If the user is logged in then this data will be picked from logged in user. You can also get the shortcode list by clicking the arrow icon to use dynamic data.

**E. Customer Address**: Please select the customer address field from your form's address inputs. It's required for payments in India. You can also get the shortcode list by clicking the arrow icon to use dynamic data.

Do not forget to click the **Save** button to save all your changes. 

![Specific Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/4.-Form-specific-Payment-Settings-scaled.webp)

### Form-specific Payment Method Settings

On this page, you will also get **Three** major **Payment Method Settings** options that you can customize according to your needs, specifically for this form. These are:

1. **Stripe:** To learn more, see [How to Integrate Stripe with Fluent Forms](/integrate-stripe).

2. **PayPal:** To learn more, see [How to Integrate PayPal with Fluent Forms](/integrate-paypal).

3. **Paddle:** To learn more, see [How to Integrate Paddle with Fluent Forms](/integrate-paddle).

Do not forget to click the **Save** button to save all your changes. 

![Specific Payment Method Settings](/images/payments/getting-started-with-payments/configure-payment-settings/5.-Form-specific-payment-method-settings-scaled.webp)

> [!Note]
> Form-specific payment options appear only when the gateway is enabled under **Settings → Payment Settings → Payment Methods**.

**To learn how to enable payment Methods Globally, follow the steps below –**

To enable the desired **Payment Methods**, click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, click **Payment Methods**, and you will see all the available payment platforms.  

Now, turn on the toggle next to your desired payment platform/s. This will activate all your desired payment methods within the **Payment** **Fields** module for every form.

![Enable Payment Methods Globally For All Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/7.-Enable-desired-payment-methods-globally-for-all-forms-scaled.webp)
