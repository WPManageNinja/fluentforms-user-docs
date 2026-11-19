---
description: "In Fluent Forms, the Custom Amount field allows users to pay any amount based on their needs."
---

# Add Custom Payment Amount Field in Payment Forms

In **Fluent Forms**, the **Custom Amount** field lets users pay any amount they choose. This field suits donations. To mark a form as a donation form, set **Transaction Type** to **Donations** in the form's payment settings. See [Configure Payment Settings](/configure-payment-settings). This article shows you how to add the **Custom Payment Amount** field to your form.

## Add Custom Payment Amount Field

Go to **Forms** in the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form **editor**.

This guide uses an existing form to show the whole process.

![Open Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/1.-Open-desired-form-1-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Custom Payment Amount** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Custom Amount Payment](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/2.-Add-Custom-Amount-Payment-scaled.webp)

The **Custom Payment Amount** field now appears in the form. To edit it, **hover over it** and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

1. Custom Payment Amount
2. Advanced Options

![Input Customization](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/3.-Input-Customization-1-scaled.webp)

### 1. Custom Payment Amount

This tab has several settings for the field.

**A. Element Label**: The field title users see when they fill out the **Custom Payment Amount** field. Enter any text that helps users understand the field.

**B. Label Placement**: Sets where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default**. **Default** uses your global label placement settings.

**C. Admin Field Label**: A field title shown only to admin users. Use it to show a different label when admins view the form submissions.

**D. Placeholder**: Text that tells users what the **Custom Payment Amount** field is for. It is the equivalent of the HTML input placeholder attribute. Users see this text while the field is empty.

**E. Required**: Select **Yes** to make the field mandatory for a successful form submission. Select **No** to keep it optional.

**F. Min Value**: Sets the minimum amount users can enter. Turn on the toggle to add an error message.

**G. Max Value**: Sets the maximum amount users can enter. Turn on the toggle to add an error message.

**H. Number Format**: Choose how the amount is formatted as users type it.

![Custom Payment Amount Option](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/4.-Custom-Payment-Amount-option-scaled.webp)

### 2. Advanced Options

The **Advanced Options** tab has these settings:

**A. Default Value:** Sets the default amount shown in the field.

**B. Container Class**: Adds your custom CSS classes to the field's wrapper.

**C. Element Class**: Adds your custom CSS classes to this input field.

**D. Help Message**: Text shown to the user as a help message. To learn more, read this Documentation.

**E. Prefix Label**: Text shown as a prefix in the input field.

**F. Suffix Label**: Text shown as a suffix in the input field.

**G. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.

**H. Conditional Logic**: Shows or hides the Custom Payment Amount field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

**I. Calculation Field Settings**: Turn this on and enter a formula expression to calculate this field from other numeric field values. To learn more, see [Numeric Calculation in Fluent Forms](/numeric-calculation).

![Advanced Options](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/5.-Advanced-Options-1-scaled.webp)

After you customize the field, add the [Payment Method](/add-payment-method-field-in-payment-forms) field to collect payments. To collect recurring payments, add the [Subscription](/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings).

![Add Payment Method Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/6.-Add-Payment-Method-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/7.-Save-Form-scaled-2.webp)

### Preview of Custom Payment Amount Field

The preview below shows the **Custom Payment Amount** field in the payment form.

![Preview Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/8.-Form-Preview.webp)
