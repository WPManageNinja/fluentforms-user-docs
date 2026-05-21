# Add Coupon Field in Payment Forms

In **Fluent Forms**, the **Coupon** feature allows you to add coupons and apply discounts to your payment form. This article will guide you through adding the **Coupon** field in your Fluent Forms for your WordPress Site. 

> Remember, Coupon is a premium feature and you need Fluent Forms Pro Plugin to use this field.

## Enable the Coupon Module

Before starting the process of adding a coupon field, you need to enable the **Coupon Module**. To learn how to enable the **Coupon Module**, follow the steps with the screenshots below – 

First, go to **Global** **Settings** from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, click the **Coupons**, and press the **Enable Coupon Module** button. 

![](/images/payment-fields/add-coupon-field-in-payment-forms/1.-Enable-Coupon-Field-scaled.webp)

## Create a Coupon

If you don’t have an existing coupon on the available Coupons page, create a new one. To create a **Coupon**, click the **+ Add New Coupon** button. 

![](/images/payment-fields/add-coupon-field-in-payment-forms/2.-Add-new-coupon-button-scaled.webp)

**Now, fill in the following necessary information to create a new coupon code:**

**A. Coupon Title:** Add a name for your coupon into this field so that you can find it easily later.

**B. Coupon Code:** Put your coupon code in the Coupon Code box, such as FluentForm10. You can add only alphabets or numbers as coupon codes. 

**C. Discount Type:** Here, you can select your discount type either based on Percent or a fixed amount.

**D. Discount Amount/Percent:** Here, enter the amount/percent you want to give a Discount to your coupon users.

**E. Min Purchase Amount:** This specifies the minimum amount that must be purchased to receive any discount. Leave blank if there is no minimum amount requirement.

**F. Stackable:** Check this **Yes** box if you want this coupon code to be used with other coupons.

**G. Start Date:** Enter the start date for this coupon in the format of yyyy-mm-dd from. Leave blank if there is no start date.

**H. End Date:** Enter the end date for this coupon in the format of yyyy-mm-dd as an expiry date i.e., after that, this coupon will not work. Leave blank if there is no end date. 

**I. Applicable Forms:** Here, you can select a single or multiple forms where this coupon will be applicable. Leave this blank if you want to apply this coupon or all forms

**J. Coupon Limit:** Here, you can set the number of times a specific user can use this coupon. Leave this field empty or enter zero if no limits are needed.

**K. Success Message:** Here, you can set the success message for your coupon to send to the user after each successful coupon application. You can also use the smart codes provided right below this field.

**L. Failed Message:** Use this option to set the failed messages based on different failure occurrences. 

**M. Status:** Here you can set the Coupon status as Active or Inactive. 

Once you are done, click the **Save Coupon** button and the coupon will be created.

![](/images/payment-fields/add-coupon-field-in-payment-forms/3.-Add-a-new-coupon-pop-up-page.webp)

Once you create a new coupon, you will always find it under the **Available Coupons** page.

Also, you can **edit/delete** any coupon anytime if needed by clicking the **Pencil/Trash** Icon. **Remember**, always press the **Save Coupon** button after any edit to save all the updates.

![](/images/payment-fields/add-coupon-field-in-payment-forms/4.-EditDelete-added-coupon-code-scaled.webp)

## Integrate Coupon Field in a Form

To learn how to add the **Coupon Field** in a specific form, follow the steps with screenshots below – 

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Payment Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](/images/payment-fields/add-coupon-field-in-payment-forms/5.-Open-desired-form-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Coupon** field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it. Also, don’t forget to add the Payment Method field to collect the payments. Plus to collect the recurring payments, you can add the Subscription field. Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](/images/payment-fields/add-coupon-field-in-payment-forms/6.-Add-Coupon-field-scaled.webp)

## Customize the Coupon Field

You can see that a coupon field is added to a payment form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field. 

1. Coupon

2. Advanced Options

![](/images/payment-fields/add-coupon-field-in-payment-forms/7.-Input-Customization-tab-scaled.webp)

### 1. Coupon

All the **Settings** under the **Coupon** tab mentioned in the screenshot are briefly explained below – 

**a. Element Label**: This is the field title the users will see when filling out the **Coupon** field in a form. You can enter any text here to help users understand the purpose of the field.

**b. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**c. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

**d. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Coupon** field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**e. Suffix Label**: Provide Input Suffix Label. It will show in the input field as a suffix label.

![](/images/payment-fields/add-coupon-field-in-payment-forms/8.-Coupon-customization-tab-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below – 

**a. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**b. Element Class**: Add custom CSS classes to the input field itself. This is used for adding Custom CSS/JS for a specific input field of a form.

**c. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**d. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**e. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![](/images/payment-fields/add-coupon-field-in-payment-forms/9.-Advanced-option-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the preview of the form, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](/images/payment-fields/add-coupon-field-in-payment-forms/10.-Save-Form-scaled.webp)

## Preview of Coupon Field

Here, is the preview of the added Coupon field under the Payment Form.

![](/images/payment-fields/add-coupon-field-in-payment-forms/11.-Form-Preview.webp)

This way you can easily add the **Coupon Code** field to your payment form!
