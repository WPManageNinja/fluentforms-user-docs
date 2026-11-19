---
description: "The Subscription field allows you to create forms with Subscription Items to accept Recurring Payments."
---

# Add Subscription Field in Payment Forms

The **Subscription** field lets you create forms with **Subscription** **Items** that accept **Recurring Payments.** This article shows you how to add the **Subscription** field to a form in Fluent Forms.

> [!Note]
> The **Subscription** field is available in the free plugin. Recurring billing works with Stripe (free) and PayPal (Pro).

## Add Subscription Field

Go to **Forms** in the **Fluent Forms Navbar,** choose a **Payment Form,** and click the **Pencil/Edit** icon to open its **Editor** page.

This guide uses an existing form to show the whole process.

![Open Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/1.-Open-desired-form-5-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Subscription** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Subcription Field Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/2.-Add-Subcription-field-scaled.webp)

The **Subscription** field now appears in the form. To edit it, **hover over it** and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

**1. Subscriptions**

**2. Advanced Options**

![Input Customization Tab](/images/payments/payment-fields/add-subscription-field-in-payment-forms/3.-Input-Customization-tab-2-scaled.webp)

### 1. Subscription

This tab has several settings for the field.

![Subscription Customization Tab](/images/payments/payment-fields/add-subscription-field-in-payment-forms/4.-Subscription-customization-tab-scaled.webp) 

#### A. Element Label

The field title users see when they fill out the **Subscription** field. Enter any text that helps users understand the field.

#### B. Label Placement

Sets where the label appears. The options are Top, Right, Bottom, Left, Hide Label, and **Default**. **Default** uses your global label placement settings.

#### C. Admin Field Label

A field title shown only to admin users. Use it to show a different label when admins view the form submissions.

#### D. Subscription Type

Choose how pricing is presented to users. Fluent Forms offers two subscription types:

- **Single Recurring Plan** — One plan with a fixed billing schedule.
- **Multiple Pricing Plans** — Several plans for users to choose from.

##### Single Recurring Plan

Use this option when you offer one recurring plan. Configure these settings:

- **Plan Name:** Enter the name shown to users.
- **Price Billing:** Set the subscription price.
- **Billing Interval:** Choose **Daily**, **Weekly**, **Monthly**, or **Yearly**.
- **Enable User Input Amount:** Let users enter a custom amount within your minimum and default limits. Add a **Label** for the amount field.
- **Has Signup Fee?:** Charge a one-time signup fee when the user subscribes.
- **Has Trial Days?:** Offer a free trial before billing starts.
- **Total Billing Times:** Set how many times to bill the customer. Leave blank or enter **0** for unlimited billing.

![Single Recurring Plan](/images/payments/payment-fields/add-subscription-field-in-payment-forms/5.-Single-recurring-plan.webp)

##### Multiple Pricing Plans

Use this option when you offer more than one plan. Configure these settings:

- **Plan Display Type:** Choose **Radio Button** or **Dropdown** for how users select a plan.
- **Pricing Plans:** Each plan uses the same options as a **Single Recurring Plan**.

Click **Add New Plan** to add a plan, or click the **Trash** icon to remove one. Enable the **Default** toggle on a plan to pre-select it.

![Multiple Pricing Plan](/images/payments/payment-fields/add-subscription-field-in-payment-forms/6.-Multiple-Pricing-Plan.webp)

#### E. Required

Select **Yes** to make the field mandatory for a successful form submission. Select **No** to keep it optional.

### 2. Advanced Options

The Advanced Options tab has these settings:

**A. Container Class**: Adds your custom CSS classes to the field's wrapper.

**B. Help Message**: Text shown to the user as a help message.

**C. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.

**D. Layout**: Select the layout used to display the plan choices.

**E. Conditional Logic**: Shows or hides the Subscription field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-subscription-field-in-payment-forms/7.-Advanced-options-scaled.webp)

After you customize the field, add the [Payment Method](/add-payment-method-field-in-payment-forms) field to collect payments. Recurring billing works with [Stripe](/integrate-stripe) and PayPal (Pro), so configure one of them first. For PayPal, see [Integrate PayPal](/integrate-paypal).

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings).

![Add Payment Method Field Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/8.-Add-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/9.-Save-Form-scaled.webp)

### Preview of Subscription Field

The preview below shows the **Subscription** field in the payment form.

![Preview Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/10.-Form-preview.webp)
