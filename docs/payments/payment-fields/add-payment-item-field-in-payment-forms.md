---
description: "Payment Item field allows you to showcase single or multiple Items (Products) options in your form, allowing users to select and buy their desired Item/s…"
---

# Add Payment Item Field in Payment Forms

The **Payment Item** field lets you show one or more **Items (Products)** in your form, so users can select and buy the items they want.

This article shows you how to add the **Payment Item** field to a form in Fluent Forms.

## Add Payment Item Field

Go to **Forms** in the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form editor.

> [!Note]
> If you do not have a payment form yet, see [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Open Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/1.-Open-desired-form-4-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** dropdown section, and add the **Payment Item** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Payment Item Field](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/2.-Add-Payment-Item-field-scaled.webp)

The **Payment Item** field now appears in the form. To edit it, **hover over it** and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

**1. Payment Item**

**2. Advanced Options**

![Input Customization Tab](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/3.-Input-Customization-tab-1-scaled.webp)

### 1. Payment Item

This tab has several settings for the field.

![Payment Item Customization Option](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/4.-Payment-Item-customization-option-scaled.webp)

#### A. Element Label

The field title users see when they fill out the **Payment Item** field. Enter any text that helps users understand the field.

#### B. Label Placement

Sets where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** **Default** uses your global label placement settings.

#### C. Admin Field Label

A field title shown only to admin users. Use it to show a different label when admins view the form submissions.

#### D. Product Display Type

Choose one of **four options** to add items (products) and collect payments for them:

1. Single
2. Radio
3. Checkbox
4. Select

##### 1. Single

Use this option to offer one item or product to your user.

  - **Payment Amount:** Set the amount (price) for your item.
  - **Amount Label:** Set the label for your payment amount.

![Single Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/5.-Single-tab.webp)

##### 2. Radio

Use this option to offer multiple items and let users choose one or more of them when they pay. It shows the item selection as **Radio** buttons.

- **Payment Items:** Add as many items as you want, each with a fixed price. Click the **Plus** icon to add an item and the **Minus** icon in the right corner to delete it. Turn on the **Photo** checkbox in the top-right corner to add product images.

To set the default products, check the radio button next to them.

To clear all default selections, click **Clear Selection** at the bottom-left corner. You can also rearrange product rows with drag and drop.

![Radio Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/6.-Radio-tab.webp)

##### 3. Checkbox

This option works like **Radio**, but it shows the item selection as **Checkboxes**. It also offers multiple items and lets users choose one or more of them when they pay.

![Checkbox Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/7.-Checkbox-tab.webp)

##### 4. Select

Use this option to let users choose only one item from several when they pay. It shows the item selection as a **Dropdown List**.

 - **Payment Items:** Add as many items as you want, each with a fixed price. Click the **Plus** icon to add an item and the **Minus** icon in the right corner to delete it. Turn on the **Photo** checkbox in the top-right corner to add product images. To set the default products, check the radio button next to them. To clear all default selections, click **Clear Selection** at the bottom-left corner. You can also rearrange product rows with drag and drop.

 - **Placeholder:** Text that tells users what the Payment Item field is for. It is the equivalent of the HTML input placeholder attribute. Users see this text while the field is empty.

![Select Any One Item Tab Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/8.-Select-any-one-item-tab.webp)

#### E. Required

Select **Yes** to make the field mandatory for a successful form submission. Select **No** to keep it optional.

### 2. Advanced Options

 * **A. Container Class**: Adds your custom CSS classes to the field's wrapper.
 * **B. Help Message**: Text shown to the user as a help message. To learn more, read this Documentation.
 * **C. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.
 * **D. Layout**: Select the layout used to display the checkable items.
 * **E. Dynamic Default Value**: Enter a value to pre-populate the field.
* **F. Conditional Logic**: Shows or hides the Payment Item field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/9.-Advanced-Options-scaled.webp)

After you customize the field, add the [Payment Method](/add-payment-method-field-in-payment-forms) field to collect payments. To collect recurring payments, add the [Subscription](/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings).

![Payment Method Field](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/10.-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/11.-Save-Form-scaled.webp)

### Preview of Payment Item Field

The preview below shows the **Payment Item** field in the payment form.

![Preview Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/12.-Form-Preview.webp)
