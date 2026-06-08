# Add Subscription Field in Payment Forms

The **Subscription** field allows you to create forms with **Subscription** **Items** to accept **Recurring Payments.** This article will guide you through adding the **Subscription** field in your Fluent Forms for your WordPress Site.

> [!Note]
> **Subscription** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Add Subscription Field

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Payment Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> [!Note]
> If you do not have an existing payment form, see [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

![Open Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/1.-Open-desired-form-5-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Subscription** field.

> [!Note]
> Enable **Payment Fields** on your form first. See [How to Create a Payment Form With Fluent Form](/docs/how-to-create-a-payment-form-with-fluent-form).

![Add Subcription Field Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/2.-Add-Subcription-field-scaled.webp)

You can see that a **Subscription** field is added to the form. You can edit this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field. 

**1. Subscriptions**

**2. Advanced Options**

![Input Customization Tab](/images/payments/payment-fields/add-subscription-field-in-payment-forms/3.-Input-Customization-tab-2-scaled.webp)

### 1. Subscription

Here, you will get various settings options for customizing the field. 

![Subscription Customization Tab](/images/payments/payment-fields/add-subscription-field-in-payment-forms/4.-Subscription-customization-tab-scaled.webp) 

#### A. Element Label

This is the field title the users will see when filling out the **Subscription** field in a form. You can enter any text here to help users understand the purpose of the field.

#### B. Label Placement

Using this option, you can determine the position of the label title that the user will see. The available options are Top, Right, Bottom, Left, Hide Label, and Default all of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

#### C. Admin Field Label

The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option. 

#### D. Subscription Type

Choose how pricing is presented to users. Fluent Forms offers two subscription types:

- **Single Recurring Plan** — One plan with a fixed billing schedule.
- **Multiple Pricing Plans** — Several plans for users to choose from.

##### Single Recurring Plan

Use this option when you offer one recurring plan. Configure these settings:

- **Plan Name:** Enter the name shown to users.
- **Price Billing:** Set the subscription price.
- **Billing Interval:** Choose **Daily**, **Weekly**, **Monthly**, or **Yearly**.
- **Enable User Input Amount:** Let users enter a custom amount within your minimum and default limits. Add a **Label** for the amount field.
- **Has Signup Fee?:** Charge a one-time signup fee when the user subscribes.
- **Has Trial Days?:** Offer a free trial before billing starts.
- **Total Billing Times:** Set how many times to bill the customer. Leave blank or enter **0** for unlimited billing.

![Single Recurring Plan](/images/payments/payment-fields/add-subscription-field-in-payment-forms/5.-Single-recurring-plan.webp)

##### Multiple Pricing Plans

Use this option when you offer more than one plan. Configure these settings:

- **Plan Display Type:** Choose **Radio Button** or **Dropdown** for how users select a plan.
- **Pricing Plans:** Each plan uses the same options as a **Single Recurring Plan**.

Click **Add New Plan** to add a plan, or click the **Trash** icon to remove one. Enable the **Default** toggle on a plan to pre-select it.

![Multiple Pricing Plan](/images/payments/payment-fields/add-subscription-field-in-payment-forms/6.-Multiple-Pricing-Plan.webp)

#### E. Required

Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

### 2. Advanced Options

Each option in the Advanced Options tab is explained below

**A. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. 

**C. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**D. Layout**: Select the Layout for checkable items

**E. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![Advanced Options Fluent Forms](/images/payments/payment-fields/add-subscription-field-in-payment-forms/7.-Advanced-options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](/docs/add-payment-method-field-in-payment-forms) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](/docs/add-subscription-field-in-payment-forms) field.

> [!Note]
> Payment fields work only after you configure your gateway. See [Configure Payment Settings with Fluent Forms](/docs/configure-payment-settings-with-fluent-forms).

![Add Payment Method Field Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/8.-Add-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all the changes you made. Also, to see the form preview, click the **Preview & Design** button in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

![Save Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/9.-Save-Form-scaled.webp)

### Preview of Subscription field

Here, is the preview of the added **Subscription** field under the Payment Form. 

![Preview Subscription Field in Payment](/images/payments/payment-fields/add-subscription-field-in-payment-forms/10.-Form-preview.webp)

This way you can easily add the **Subscription** fields in Fluent Forms!
