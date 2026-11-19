---
description: "The Payment Method field allows you to create forms to accept Payments through different payment platforms."
---

# Add Payment Method Field in Payment Forms

The **Payment Method** field lets you create forms that accept **Payments** through different payment platforms. This article shows you how to add the **Payment Method** field to a form in Fluent Forms.

## Add Payment Method Field

Go to **Forms** in the Fluent Forms navbar, open your **payment form**, and click the **Edit** icon to open the form editor.

This guide uses an existing form to show the whole process.

![Open Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/1.-Open-desired-form-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Payment Method** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Payment Method](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/2.-Add-Payment-Method-scaled.webp)

The **Payment Method** field now appears in the form. To edit it, hover over the field and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

**1. Payment Method**

**2. Advanced Options**

![Input Customization Fluent Forms](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/3.-Input-Customization-scaled.webp)

### 1. Payment Method

This tab has several settings for the field. If you select only one payment method, Fluent Forms hides the field on the form and processes the payment with that method. The **Payment Method** tab has these options:

**A. Element Label**: The field title users see when they fill out the **Payment Method** field. Enter any text that helps users understand the field.

**B. Admin Field Label**: A field title shown only to admin users. Use it to show a different label when admins view the form submission.

**C. Label Placement**: Sets where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** **Default** uses your global label placement settings.

   - **Payment Methods:** Lists all the available payment platforms. Check the platforms you want to use to collect payments.

> [!Note]
> Selected payment methods do not work until you complete payment configuration. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings), then follow the guide for your gateway in the [Payments overview](/payments-overview).

**D. Default Value:** Enter a value to pre-populate the field. [View all the smart codes](/form-editor-smart-codes).

**E. Required**: Select **Yes** to make the field mandatory for a successful form submission. Select **No** to keep it optional.

![Payment Method Customization Option](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/4.-Payment-Method-customization-option-scaled.webp)

### 2. Advanced Options

The **Advanced Options** tab has these settings:

**A. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.

**B. Help Message**: Text shown to the user as a help message. To learn more, read this Documentation.

**C. Container Class**: Adds your custom CSS classes to the field's wrapper.

**D. Conditional Logic**: Shows or hides the Payment Method field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/5.-Advanced-Options-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/6.-Save-Form-scaled.webp)

### Preview of Payment Method Field

The preview below shows the **Payment Method** field in the payment form.

![Preview Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/7.-Form-Preview.webp)
