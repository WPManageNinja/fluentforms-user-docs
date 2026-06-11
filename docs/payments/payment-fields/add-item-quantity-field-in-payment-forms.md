# Add Item Quantity Field in Payment Forms

The **Item Quantity** field allows users to choose how many of an item or product they want to purchase. Use it on payment forms when you sell the same product in variable amounts.

This guide shows you how to add and configure the **Item Quantity** field in Fluent Forms.

## Add Item Quantity Field

Go to **Forms** from the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form editor.

> [!Note]
> If you do not have an existing payment form, see [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

![Open Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/1.-Open-desired-form-2-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Item Quantity** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

![Add Item Quantity Field](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/2.-Add-Item-Quantity-field-scaled.webp)

You can see that an **Item Quantity** field is added to the form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the Item Quantity field. 

**1. Item Quantity**

**2. Advanced Options**

![Input Customization Fluent Forms](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/3.-Input-Customization--scaled.webp)

### 1. Item Quantity

Each option in the **Item Quantity** tab is explained below.

**A. Element Label**: This is the field title the users will see when filling out the **Item Quantity** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default**. All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**C. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

**D. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Item Quantity** field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**E. Product Field Mapping**:  You need to map the **Payment Item** from the item/s added to your form for which you want to use this Item Quantity field. Remember, ensure that you use a separate "Item Quantity" field for each "Payment Item" field.”

**F. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

**G. Min Value**: With this option, you can specify the minimum quantity users must select. You can also, add the error message by enabling the Toggle button.

**H. Max Value**: With this option, you can specify the maximum quantity users can select. You can also, add the error message by enabling the Toggle button.

![Item Quantity Customizarion Tab](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/4.-Item-Quantity-customizarion-tab-scaled.webp)

### 2. Advanced Options

Each option in the **Advanced Options** tab is explained below.

**A. Default Value:** You can set the default quantity for selecting your items.

**B. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**C. Element Class**: Use this option to add your custom CSS for a specific input field of a form.

**D. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**E. Step**: Please provide the step attribute for this field.

**F. Prefix Label**: Use this option to provide a Prefix Label in your input field. It will show in the input field as a Prefix label.

**G. Suffix Label**: Use this option to provide a Suffix Label in your input field. It will show in the input field as a Suffix label.

**H. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**I. Conditional Logic**: This option allows the Item Quantity field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![Advanced Options](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/5.-Advanced-Options-2-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](/docs/add-payment-method-field-in-payment-forms) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](/docs/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/docs/configure-payment-settings-with-fluent-forms).

![Payment Method Fields](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/6.-Payment-Method-fields-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![Save Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/7.-Save-Form-1-scaled.webp)

### Preview of Item Quantity field

Here, is the preview of the added **Item Quantity** field under the Payment Form. 

![Preview Item Quantity Field in](/images/payments/payment-fields/add-item-quantity-field-in-payment-forms/8.-Form-Preview-1.webp)

This way you can easily add the **Item Quantity** fields in Fluent Forms!
