---
description: "The Item Quantity field allows users to choose how many of an item or product they want to purchase."
---

# Add Item Quantity Field in Payment Forms

The **Item Quantity** field lets users choose how many of an item or product they want to buy. Use it on payment forms when you sell the same product in variable amounts.

This guide shows you how to add and configure the **Item Quantity** field in Fluent Forms.

## Add Item Quantity Field

Go to **Forms** in the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form editor.

This guide uses an existing form to show the whole process.

![Open Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/1.-Open-desired-form-2-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Item Quantity** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Item Quantity Field](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/2.-Add-Item-Quantity-field-scaled.webp)

The **Item Quantity** field now appears in the form. To edit it, **hover over it** and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

**1. Item Quantity**

**2. Advanced Options**

![Input Customization Fluent Forms](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/3.-Input-Customization--scaled.webp)

### 1. Item Quantity

The **Item Quantity** tab has these options:

**A. Element Label**: The field title users see when they fill out the **Item Quantity** field. Enter any text that helps users understand the field.

**B. Label Placement**: Sets where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default**. **Default** uses your global label placement settings.

**C. Admin Field Label**: A field title shown only to admin users. Use it to show a different label when admins view the form submissions.

**D. Placeholder**: Text that tells users what the **Item Quantity** field is for. It is the equivalent of the HTML input placeholder attribute. Users see this text while the field is empty.

**E. Product Field Mapping**: Map the [Payment Item](/add-payment-item-field-in-payment-forms) that this Item Quantity field applies to. Use a separate **Item Quantity** field for each **Payment Item** field.

**F. Required**: Select **Yes** to make the field mandatory for a successful form submission. Select **No** to keep it optional.

**G. Min Value**: Sets the minimum quantity users must select. Turn on the toggle to add an error message.

**H. Max Value**: Sets the maximum quantity users can select. Turn on the toggle to add an error message.

![Item Quantity Customizarion Tab](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/4.-Item-Quantity-customizarion-tab-scaled.webp)

### 2. Advanced Options

The **Advanced Options** tab has these settings:

**A. Default Value:** Sets the default quantity.

**B. Container Class**: Adds your custom CSS classes to the field's wrapper.

**C. Element Class**: Adds your custom CSS classes to this input field.

**D. Help Message**: Text shown to the user as a help message. To learn more, read this Documentation.

**E. Step**: Enter the step attribute for this field.

**F. Prefix Label**: Text shown as a prefix in the input field.

**G. Suffix Label**: Text shown as a suffix in the input field.

**H. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.

**I. Conditional Logic**: Shows or hides the Item Quantity field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

**J. Calculation Field Settings**: Turn this on and enter a formula expression to calculate the quantity from other numeric fields. To learn more, see [Numeric Calculation in Fluent Forms](/numeric-calculation).

![Advanced Options](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/5.-Advanced-Options-2-scaled.webp)

After you customize the field, add the [Payment Method](/add-payment-method-field-in-payment-forms) field to collect payments. To collect recurring payments, add the [Subscription](/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings).

![Payment Method Fields](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/6.-Payment-Method-fields-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/7.-Save-Form-1-scaled.webp)

### Preview of Item Quantity Field

The preview below shows the **Item Quantity** field in the payment form.

![Preview Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/8.-Form-Preview-1.webp)
