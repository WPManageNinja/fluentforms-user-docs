# Add Payment Method Field in Payment Forms

The **Payment Method** field allows you to create forms to accept **Payments** through different payment platforms. This article will guide you through adding the **Payment Method** field to your WordPress Site's Fluent Forms.

## Add Payment Method Field

To add a payment method, go to **Forms** from the Fluent Forms navbar, open your **payment form**, and click the **Edit** icon to open the form editor.

For example, I choose an existing form to show the whole process.

![Open Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/1.-Open-desired-form-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Payment Method** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/create-a-payment-form).

![Add Payment Method](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/2.-Add-Payment-Method-scaled.webp)

You can see that a **Payment Method** field is added to the form. You can edit this field by hovering over it and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the Payment Method field. 

**1. Payment Method**

**2. Advanced Options**

![Input Customization Fluent Forms](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/3.-Input-Customization-scaled.webp)

### 1. Payment Method

Here, you will get various settings options for customizing the field. Each option in the **Payment Method** tab is explained below – 

**A. Element Label**: This is the field title the users will see when filling out the **Payment Method** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Admin Field Label**: The admin field label is a field title displayed only to admin users. This means if you want to show a different field label for your admin users when they view the form submission.

**C. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

   - **Payment Methods:** Here you will get all the available Payment Method Platforms. Now, select the desired Payment Platform/s by clicking the Checkbox/es that you want to use for collecting payments through the form submissions.

> [!Note]
> Selected payment methods will not work until you complete payment configuration. See [Configure Payment Settings with Fluent Forms](/configure-payment-settings), then follow the guide for your chosen gateway in the [Payments overview](/payments-overview).

**D. Default Value:** If you would like to pre-populate the value of a field, enter it here. [View All the smart codes here](/form-editor-smart-codes).

**E. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

![Payment Method Customization Option](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/4.-Payment-Method-customization-option-scaled.webp)

### 2. Advanced Options

Each option in the **Advanced Options** tab is explained below.

**A. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**C. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

<<<<<<< HEAD
**D. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/set-up-forms-with-conditional-logic). 
=======
**D. Conditional Logic**: This option allows the Payment Method field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 
>>>>>>> tajulauthlab

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/5.-Advanced-Options-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![Save Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/6.-Save-Form-scaled.webp)

### Preview of Payment Method field

Here, is the preview of the added **Payment Method** field under the Payment Form. 

![Preview Payment Method Field in](/images/payments/payment-fields/add-payment-method-field-in-payment-forms/7.-Form-Preview.webp)

This way, you can easily add the **Payment Methods** fields in Fluent Forms!
