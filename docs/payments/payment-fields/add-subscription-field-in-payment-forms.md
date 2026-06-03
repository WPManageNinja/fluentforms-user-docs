# Add Subscription Field in Payment Forms

In **Fluent Forms**, the **Subscription** field allows you to create forms with **Subscription** **Items** to accept **Recurring Payments.** This article will guide you through adding the **Subscription** field in your Fluent Forms for your WordPress Site.

> Remember, Subscription is a premium feature and you need Fluent Forms Pro Plugin to use this field.

## Add Subscription Field

To learn how to add the Subscription field to the Fluent Forms, follow the steps with the screenshots below –  

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Payment Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/1.-Open-desired-form-5-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Subscription** field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/2.-Add-Subcription-field-scaled.webp)

You can see that a **Subscription** field is added to the form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field. 

1. Subscriptions

2. Advanced Options

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/3.-Input-Customization-tab-2-scaled.webp)

### 1. Subscription

Here, you will get various settings options for customizing the field. 

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/4.-Subscription-customization-tab-scaled.webp)

**All the Settings under the Subscription mentioned above are briefly explained below –** 

#### A. Element Label

This is the field title the users will see when filling out the **Subscription** field in a form. You can enter any text here to help users understand the purpose of the field.

#### B. Label Placement

Using this option, you can determine the position of the label title that the user will see. The available options are Top, Right, Bottom, Left, Hide Label, and Default all of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

#### C. Admin Field Label

The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

#### D. Subscription Type

Here, you will get two different **Subscription Types** to set your pricing plan for the subscription payment. These are:

1. Single Recurring Plan

2. Multiple Pricing Plans

##### 1. Single Recurring Plan:

Select this plan if you want to offer one pricing plan to your users for collecting payments. Plus, configure the following options as per your needs.

- Plan Name: Give the name of your plan in this field.

- Price Billing: Here, set the price for your subscription.

- Billing Interval: Here, set the billing interval as Daily, Weekly, Monthly, or Yearly for the subscription.

- Enable User Input Amount: Enable this feature to customize the pricing plan by setting a fixed Minimum and Default amount, along with a Label for this amount.

- Has Signup Fee?: Enable this option if you want to set a custom amount as a Signup Fee. This amount will be deducted from customers’ accounts once they sign up on your website.

- Has Trial Days?: Enable this option to offer users a trial period without a subscription fee.

- Total Billing Times: Here, you can set how many times your website will pull funds from customers’ accounts. Keep the field blank or put 0 (Zero) for billing for an unlimited time.

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/5.-Single-recurring-plan.webp)

##### 2. Multiple Pricing Plans

Select this option if you want to offer multiple pricing plans to your users to choose one plan when making a subscription. Plus, configure the following options as per your needs.

1. Plan Display Type: With this option, you can select whether you want to set the item selection type using a radio button or select the input field (dropdown list).

1. Pricing Plans: The pricing plan for this option works exactly similarly to the pricing plan for the Single Recurring Plan.

To add multiple pricing plans, click the **Add New Plan** button, and to delete any item, click the **Trash** icon in the right corner of the section. 

Also, if you want a pricing plan to be selected by default from all your pricing plans, enable the **Default** **Toggle** for that plan. 

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/6.-Multiple-Pricing-Plan.webp)

#### E. Required

Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

### 2. Advanced Options

All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below – 

**A. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. 

**C. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**D. Layout**: Select the Layout for checkable items

**E. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/7.-Advanced-options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](/docs/add-payment-method-field-in-payment-forms) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](/docs/add-subscription-field-in-payment-forms) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/8.-Add-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all the changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/9.-Save-Form-scaled.webp)

## Preview of Subscription field

Here, is the preview of the added **Subscription** field under the Payment Form. 

![](/images/payments/payment-fields/add-subscription-field-in-payment-forms/10.-Form-preview.webp)

This way you can easily add the **Subscription** fields in Fluent Forms!
