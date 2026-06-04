# Add Custom Payment Amount Field in Payment Forms

In **Fluent Forms**, the **Custom Amount** field allows users to pay any amount based on their needs. This article will guide you through adding the **Custom Payment Amount** field in your Fluent Forms for your WordPress Site.

## Add Custom Payment Amount Field

To learn how to add the Custom Payment Amount field to the Fluent Forms, follow the steps with the screenshots below –  

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Payment Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

For example, I choose an existing form to show the whole process.

![Open Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/1.-Open-desired-form-1-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Custom Payment Amount** field. 

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

![Add Custom Amount Payment](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/2.-Add-Custom-Amount-Payment-scaled.webp)

You can see that a **Custom Payment Amount** field is added to the form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field. 

1. Custom Payment Amount

2. Advanced Options

![Input Customization](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/3.-Input-Customization-1-scaled.webp)

### 1. Custom Payment Amount

Here, you will get various settings options for customizing the field. All the **Settings** under the **Custom Payment Amount** tab mentioned in the screenshot are briefly explained below – 

**A. Element Label**: This is the field title the users will see when filling out the **Item Quantity** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**C. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

**D. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Item Quantity** field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**E. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

**F. Min Value**: With this option, you can specify the minimum quantity users must select. You can also, add the error message by enabling the Toggle button.

**G. Max Value**: With this option, you can specify the maximum quantity users can select. You can also, add the error message by enabling the Toggle button.

![Custom Payment Amount Option](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/4.-Custom-Payment-Amount-option-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below – 

**A. Default Value:** You can set the default quantity for selecting your items.

**B. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**C. Element Class**: Use this option to add your custom CSS for a specific input field of a form.

**D. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**F. Prefix Labe**l: Use this option to provide a Prefix Label in your input field. It will show in the input field as a Prefix label.

**G. Suffix Label**: Use this option to provide a Suffix Label in your input field. It will show in the input field as a Suffix label.

**G. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**H. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

**I. Calculation Field Settings**: Enable this and provide formula expression if you want this field as calculated based on other numeric field value. To learn more, read [Numeric Calculation in Fluent Forms](/docs/numeric-calculation-in-fluent-forms).

![Advanced Options](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/5.-Advanced-Options-1-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](/docs/add-payment-method-field-in-payment-forms) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](/docs/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/docs/configure-payment-settings-with-fluent-forms).

![Add Payment Method Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/6.-Add-Payment-Method-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![Save Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/7.-Save-Form-scaled-2.webp)

## Preview of Custom Payment Amount field

Here, is the preview of the added **Custom Payment Amount** field under the Payment Form. 

![Preview Custom Payment Amount Field](/images/payments/payment-fields/add-custom-payment-amount-field-in-payment-forms/8.-Form-Preview.webp)

This way you can easily add the **Custom Payment Amount** fields in Fluent Forms!
