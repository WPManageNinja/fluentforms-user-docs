# Add Payment Item Field in Payment Forms

**Payment Item** field allows you to showcase single or multiple **Items (Products)** options in your form, allowing users to select and buy their desired Item/s that exist in the form.

This article will guide you through adding the **Payment Item** field in your Fluent Forms for your WordPress Site.

## Add Payment Item Field

Go to **Forms** from the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form editor.

> [!Note]
> If you do not have an existing payment form, see [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Open Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/1.-Open-desired-form-4-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** dropdown section, and add the **Payment Item** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Payment Item Field](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/2.-Add-Payment-Item-field-scaled.webp)

You can see that a **Payment Item** field is added to the form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the Payment Item field. 

**1. Payment Item**

**2. Advanced Options**

![Input Customization Tab](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/3.-Input-Customization-tab-1-scaled.webp)

### 1. Payment Item

Here, you will get various settings options for customizing the field. 

![Payment Item Customization Option](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/4.-Payment-Item-customization-option-scaled.webp)

#### A. Element Label

This is the field title the users will see when filling out the **Payment Item** field in a form. You can enter any text here to help users understand the purpose of the field.

#### B. Label Placement

Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

#### C. Admin Field Label

The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

#### D. Product Display Type

Here, you will get **Four different options** to add item/s (Product/s) and collect payments through the added item/s. These are:

1. Single

2. Radio

3. Checkbox

4. Select

#### 1. Single

Select this option if you want to offer one Item/Product to your user for collecting payments.

  - **Payment Amount:** Here, you can set the Amount (Price) for your added Item.
  - **Amount Label:** Here, you can set the Label for your Payment Amount.

![Single Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/5.-Single-tab.webp)

#### 2. Radio

Select this option if you want to offer multiple items to your users for choosing one or more item/s when making a payment. This option allows you to display the item selection as **Radio** buttons.

- **Payment Items:** You can add as many items as you want with fixed prices. Click the Plus icon to add items and the Minus icon in the right corner to delete them. Enable the Photo checkbox in the top-right corner to add product images. 

To set the default product/s, check the radio button next to it. 

To clear all default selections, click Clear Selection at the bottom-left corner. You can also rearrange product rows using the drag-and-drop feature.

![Radio Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/6.-Radio-tab.webp)

#### 3. Checkbox

This option exactly works like the Radio Option except it allows you to display the item selection as **Checkboxes**. This option also offers multiple items to your users for choosing one or more item/s when making a payment.

![Checkbox Tab Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/7.-Checkbox-tab.webp)

#### 4. Select

Select this option if you want your users to choose only one item among multiple items when making a payment. This option allows you to display the item selection as a **Dropdown List** from where you can select any one Item. 

 - **Payment Items:** You can add as many items as you want with fixed prices. Click the Plus icon to add items and the Minus icon in the right corner to delete them. Enable the Photo checkbox in the top-right corner to add product images. To set the default product/s, check the radio button next to it. To clear all default selections, click Clear Selection at the bottom-left corner. You can also rearrange product rows using the drag-and-drop feature.

 - **Placeholder:** Here, you can set a desired text to guide your users about the purpose of the Payment Item field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

![Select Any One Item Tab Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/8.-Select-any-one-item-tab.webp)

#### E. Required

Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

### 2. Advanced Options

 * **A. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.
 * **B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.
 * **C. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.
 * **D. Layout**: Select the Layout for checkable items. 
 * **E. Dynamic Default Value**: If you would like to pre-populate the value of a field, enter it here.
<<<<<<< HEAD
 * **F. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/set-up-forms-with-conditional-logic). 
=======
 * **F. Conditional Logic**: This option allows the Payment Item field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 
>>>>>>> tajulauthlab

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/9.-Advanced-Options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](/add-payment-method-field-in-payment-forms) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings).

![Payment Method Field](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/10.-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![Save Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/11.-Save-Form-scaled.webp)

### Preview of Payment Item field

Here, is the preview of the added **Payment Item** field under the Payment Form. 

![Preview Payment Item Field in](/images/payments/payment-fields/add-payment-item-field-in-payment-forms/12.-Form-Preview.webp)

This way you can easily add the **Payment Item** fields in Fluent Forms!
