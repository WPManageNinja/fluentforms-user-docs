---
description: "Fluent Forms allows you to configure payment settings both globally and individually for all Payment Forms created with Fluent Forms (e.g., business name…"
---

# Configure Payment Settings

**Fluent Forms** lets you configure payment settings both globally and for each form. Settings include business name and logo, currency, payment history, and receipt page.

This article shows you how to set up the **Payment Settings** for all Payment Forms globally, then for a single form.

## Configuring Payment Settings Globally

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and click **Configuration**. Three tabs appear:

**1. General**

**2. Currency**

**3. Pages & Subscription Management**

### 1. General

This tab has the options below. The **General Setting** applies globally to all forms.

**A. Payment Module**: This toggle sits above the tabs and is on by default. It gives all forms access to the Payment Module (all payment-related input fields). If you turn it off, the **Payment Module** is disabled for all forms. Keep it on to accept payments through Fluent Forms.

**B. Business Name**: Your business name. Fluent Forms uses it when customers are redirected to checkout.

**C. Logo**: Add your business logo with the **Upload** button (PNG or JPEG, minimum 400x400px).

**D. Business Full Address**: Your full business address, with city, state, and country.

**E. Enable Debug Log**: Turn this on only for testing. Fluent Forms then logs IPN and payment errors.

Click **Save** to save the configuration.

![General Tab Under Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/1.-General-tab-under-Payment-Settings-scaled.webp)

### 2. Currency

This tab has the options below. The **Currency** setting applies globally to all forms.

**A. Default Currency**: Select the default currency for your payment forms from the dropdown list. You can also set the currency for a specific form in the form's payment settings.

**B. Currency Sign Position**: Select one of four options: **Left ($ 99.99)**, **Right (99.99 $)**, **Left with space ($ 99.99)**, or **Right with space (99.99 $)**.

**C. Currency Separators**: Choose **Comma as Thousand and Dot as Decimal (EG: 12,000.00)** or **Dot as Thousand and Comma as Decimal (EG: 12.000,00)** from the dropdown list.

**D. Hide decimal points for rounded numbers**: Check this box to hide decimal points when the currency figure is rounded.

Click **Save** to save the configuration.

![Currency Settings Tab](/images/payments/getting-started-with-payments/configure-payment-settings/2.-Currency-settings-tab-scaled.webp)

### 3. Pages & Subscription Management

This tab lets you show your **Payment History** and **Payment** **Receipt** on pages you choose. You can also enable **Subscription** **Management** for **Stripe** only.

This setting applies globally to all forms. Click **Save** to save the configuration.

![Page And Subscription Management Tab](/images/payments/getting-started-with-payments/configure-payment-settings/3.-Page-and-Subscription-Management-tab-1-scaled.webp)

#### A. Payment (History) Management Page

Select an existing page where logged-in users can see their **Payment History** (**single payments** and **subscriptions**).

You can also add the **Payment History** with the shortcode **[fluentform_payments]** on the selected page.

Click **Save**, then preview the WordPress page to see the result.

![Payment History Shortcode](/images/payments/getting-started-with-payments/configure-payment-settings/4.-Payment-History-shortcode-scaled.webp)

The preview below shows the **Payment History Page**. It has these sections:

- **Subscriptions:** Logged-in users see the payment history of each subscription on their payment forms. Click the View Payments button in the left corner to see payment details. Users can cancel their subscriptions at any time with the Cancel button.

- **Payments:** Logged-in users see the payment history of each single payment on their payment forms. Click the View link to see the individual Payment Receipt.

![Preview Payment History Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/5.-Preview-of-Payment-History.webp)

#### B. Payment Receipt Page

Select an existing page where users can view their payment receipts and manage single and subscription payments.

You can also add the Payment Receipt with the shortcode **[fluentform_payment_view]** on the selected page.

Click **Save**, then preview the WordPress page to see the result.

![Payment Receipt Shortcode](/images/payments/getting-started-with-payments/configure-payment-settings/6.-Payment-Receipt-shortcode-scaled.webp)

The preview below shows a single **Payment Receipt** on the **Payment Receipt** page.

![Specific Payment Receipt](/images/payments/getting-started-with-payments/configure-payment-settings/7.-Form-of-a-specific-Pyment-Receipt.webp)

> [!Tip]
> Open a single payment receipt from **Payments** in the **Fluent Forms Navbar** (the transactions list) by clicking the transaction.

![Payment History View Button](/images/payments/getting-started-with-payments/configure-payment-settings/8.-Payment-History-View-button.webp)

#### C. Subscription Management

Turn this on to let your users manage their own subscriptions, such as canceling an active subscription. Subscription management works only with the Stripe payment method.

Click **Save** to save the configuration.

![Subscription Management Option](/images/payments/getting-started-with-payments/configure-payment-settings/9.-Subscription-Management-option.webp)

## Configuring Payment Settings in a Specific Form

Click **Forms** in the **Fluent Forms Navbar**, then click the **Settings** (gear) icon of your **Payment Form**.

![Open Settings Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/Open-Form-Settings-3-scaled.webp)

Click **Payment Settings** in the left sidebar. These options appear:

**A. Currency:** Select the default currency for this form from the dropdown list.

**B. Transaction Type:** Select **Products / Services** or **Donations**.

**C. Customer Email:** Map the **Email field** by clicking the **Arrow** **Icon**. This field is optional but recommended.

**D. Customer Name**: Select the name field from your form inputs. This field is optional but recommended. If the user is logged in, Fluent Forms picks this data from the logged-in user. Click the arrow icon to get the shortcode list for dynamic data.

**E. Customer Address**: Select the customer address field from your form's address inputs. It is required for payments in India. Click the arrow icon to get the shortcode list for dynamic data.

Click **Save** to save your changes.

![Specific Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/4.-Form-specific-Payment-Settings-scaled.webp)

### Form-specific Payment Method Settings

This page also has **Three** major **Payment Method Settings** options that you can customize for this form:

1. **Stripe:** To learn more, see [How to Integrate Stripe with Fluent Forms](/integrate-stripe).

2. **PayPal:** To learn more, see [How to Integrate PayPal with Fluent Forms](/integrate-paypal).

3. **Paddle:** To learn more, see [How to Integrate Paddle with Fluent Forms](/integrate-paddle).

Click **Save** to save your changes.

![Specific Payment Method Settings](/images/payments/getting-started-with-payments/configure-payment-settings/5.-Form-specific-payment-method-settings-scaled.webp)

> [!Note]
> Form-specific payment options appear only when the gateway is enabled under **Settings → Payment Settings → Payment Methods**.

**To enable payment methods globally, follow these steps:**

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, and click **Payment Methods**. All the available payment platforms appear.

Turn on the toggle next to each payment platform you want. This activates the payment methods in the **Payment** **Fields** module for every form.

- Use the search box to find a gateway quickly.
- Each gateway row shows an **Enabled** or disabled badge. Click **Manage** to open its settings.
- Disabling a gateway asks you to confirm, because it removes the saved API keys and disconnects the account.
- **Test Payment** (Pro) lets you record payments taken elsewhere or rehearse the checkout.

### Coupons

The **Coupons** tab under **Payment Settings** lists your coupons. Create and manage them as described in [Add Coupon Field in Payment Forms](/add-coupon-field-in-payment-forms) (Pro).

![Enable Payment Methods Globally For All Configure Payment Settings](/images/payments/getting-started-with-payments/configure-payment-settings/7.-Enable-desired-payment-methods-globally-for-all-forms-scaled.webp)
