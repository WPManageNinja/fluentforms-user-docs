---
description: "The Coupon feature allows you to add coupons and apply discounts to your payment form. This article will guide you through adding the Coupon field in your…"
---

# Add Coupon Field in Payment Forms

The **Coupon** feature lets you add coupons and apply discounts to your payment form. This article shows you how to add the **Coupon** field to a form in Fluent Forms.

> [!Note]
> **Coupon** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Coupon Module

Enable the **Coupon Module** before you add a coupon field.

Click the **Settings** (gear) icon in the **Fluent Forms Navbar**, open **Payment Settings** from the left sidebar, click **Coupons**, and press **Enable Coupons**. Fluent Forms creates the coupon table the first time you enable it.

![Enable Coupon Field](/images/payments/payment-fields/add-coupon-field-in-payment-forms/1.-Enable-Coupon-Field-scaled.webp)

## Create a Coupon

If the Coupons page has no coupon yet, create one. Click **Add New Coupon**.

![Add Coupon Button](/images/payments/payment-fields/add-coupon-field-in-payment-forms/2.-Add-new-coupon-button-scaled.webp)

Fill in the following information to create a coupon code:

 **A. Coupon Title:** A name for your coupon, so you can find it later.

 **B. Coupon Code:** The code users enter, such as FluentForm10. Use only letters or numbers.

 **C. Discount Type:** Select **Percent** or a fixed amount.

 **D. Discount Amount/Percent:** Enter the amount or percent of the discount.

 **E. Min Purchase Amount:** The minimum purchase amount required to receive any discount. Leave blank if there is no minimum.

 **F. Stackable:** Check **Yes** to let users combine this coupon code with other coupons.

 **G. Coupon Schedule (Start Date):** Pick the start date for this coupon. Leave blank if there is no start date.

 **H. Coupon Schedule (End Date):** Pick the expiry date. After that date, the coupon does not work. Leave blank if there is no end date.

 **I. Applicable Forms:** Select one or more forms where this coupon applies. Leave blank to apply the coupon to all forms.

 **J. Coupon Limit:** Set how many times a logged-in user can apply this coupon. Leave this field empty or enter zero for no limit.

 **K. Success Message:** The message users see after each successful coupon application. You can also use the smart codes below this field.

 **L. Failed Message:** The message users see when a coupon fails. You can set separate messages for an **Inactive Coupon**, an expired date, and a crossed usage limit. If a coupon is not **Stackable**, users who apply it with another coupon see a message that the coupon cannot be used with other codes.

 **M. Status:** Set the coupon status to Active or Inactive.

The form opens as a full **Add Coupon** page. When you finish, click **Save Coupon** at the top right to create the coupon.

![Add Coupon Page](/images/payments/payment-fields/add-coupon-field-in-payment-forms/3.-Add-a-new-coupon-pop-up-page.webp)

After you create a coupon, it appears in the list under **Payment Settings → Coupons**.

To **edit** or **delete** a coupon, click the **Pencil** or **Trash** icon. Always press **Save Coupon** after an edit to save your updates.

![Editdelete Added Coupon Code](/images/payments/payment-fields/add-coupon-field-in-payment-forms/4.-EditDelete-added-coupon-code-scaled.webp)

## Integrate Coupon Field in a Form

Go to **Forms** in the Fluent Forms navbar, open your payment form, and click the **Edit** icon to open the form editor.

This guide uses an existing form to show the whole process.

![Open Coupon Field in Payment](/images/payments/payment-fields/add-coupon-field-in-payment-forms/5.-Open-desired-form-scaled.webp)

On the **Editor** page, go to **Input Fields** in the right sidebar, open the **Payment Fields** module, and add the **Coupon** field.

![Add Coupon Field](/images/payments/payment-fields/add-coupon-field-in-payment-forms/6.-Add-Coupon-field-scaled.webp)

## Customize the Coupon Field

The coupon field now appears in the payment form. To edit it, **hover over it** and click the **Pencil Icon**.

The **Customize** tab opens on the right side with these options:

**1. Coupon**

**2. Advanced Options**

![Input Customization Tab](/images/payments/payment-fields/add-coupon-field-in-payment-forms/7.-Input-Customization-tab-scaled.webp)

### 1. Coupon

The **Coupon** tab has these settings, as the screenshot shows:

**a. Element Label**: The field title users see when they fill out the **Coupon** field. Enter any text that helps users understand the field.

**b. Label Placement**: Sets where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default**. **Default** uses your global label placement settings.

**c. Admin Field Label**: A field title shown only to admin users. Use it to show a different label when admins view the form submissions.

**d. Placeholder**: Text that tells users what the **Coupon** field is for. It is the equivalent of the HTML input placeholder attribute. Users see this text while the field is empty.

**e. Suffix Label**: Sets the label of the apply button. The default is **Apply Coupon**.

![Coupon Customization Tab](/images/payments/payment-fields/add-coupon-field-in-payment-forms/8.-Coupon-customization-tab-scaled.webp)

### 2. Advanced Options

The **Advanced Options** tab has these settings:

**a. Container Class**: Adds your custom CSS classes to the field's wrapper.

**b. Element Class**: Adds custom CSS classes to the input field itself. Use it to add custom CSS or JS for a specific input field of a form.

**c. Help Message**: Text shown to the user as a help message. To learn more, read this Documentation.

**d. Name Attribute**: The HTML name attribute of the input field. You do not need to change it.

**e. Conditional Logic**: Shows or hides the coupon field based on submission values and your conditional logic rules. To learn more, see [Set Up Forms with Conditional Logic](/set-up-forms-with-conditional-logic).

**f. Calculation Field Settings**: Turn this on to use the coupon field in a calculation formula. To learn more, see [Numeric Calculation in Fluent Forms](/numeric-calculation).

![Advanced Option Fluent Forms](/images/payments/payment-fields/add-coupon-field-in-payment-forms/9.-Advanced-option-scaled.webp)

## Embed the Form into Frontend

Click **Save Form** to save your changes. To see a preview, click **Preview** in the form editor.

To display the form on a Page or Post, copy the **Shortcode** from the top right side and paste it into the Page or Post.

![Save Coupon Field in Payment](/images/payments/payment-fields/add-coupon-field-in-payment-forms/10.-Save-Form-scaled.webp)

### Preview of Coupon Field

The preview below shows the Coupon field in the payment form.

![Preview Coupon Field in Payment](/images/payments/payment-fields/add-coupon-field-in-payment-forms/11.-Form-Preview.webp)
