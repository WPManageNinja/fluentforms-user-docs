# Pre-Fill Form Fields with FluentCRM Data

Fluent Forms allows you to pre-fill form fields using subscriber data from [**FluentCRM**](https://fluentcrm.com/). This feature is useful for personalizing form experiences and improving user engagement.

This guide will walk you through the steps to automatically populate form fields with FluentCRM contact data.

> Only logged in users will get pre-populate form fields with FluentCRM data.

## Enable the FluentCRM Module

Before using this feature, ensure that FluentCRM is installed and activated on your website. Follow these steps to enable the FluentCRM integration module-

First, go to **Integrations** from the Fluent Forms Navbar, search for **FluentCRM** through the search bar, and get the **FluentCRM integration module**.

Now, turn on the **Toggle** to enable the **FluentCRM** module.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/enable-FluentCRM-module-01-scaled.webp)

## Using FluentCRM Data Smartcode

To pre-fill the FluentCRM data in your form fields, follow the steps given below-

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Form,** and click the **Edit** icon to open the **Editor** page of that form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/form-editor-02-scaled.webp)

Once you are on the **Editor** page, click the **Plus** **Icon** in your form editor and choose the desired **Field** by clicking on it or **Dragging & Drop**ping it into your editor.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/add-field-03-scaled.webp)

Now, hover over the newly added field and click the **Pencil Icon**. Navigate to the **Input Customization** tab on the right sidebar. Scroll to **Advanced Options** and find the **Default Value** drop-down. In some **Input Fields**, you will find this **Default Value** option as **Dynamic Default**.

In the **Default Value** field, add FluentCRM shortcodes to automatically fetch and populate data from FluentCRM contact information into the form fields.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/access-default-value-04-scaled.webp)

Click the **Three-dot Icon**, then scroll down to locate **FluentCRM Data**. Then, click on the smartcode, and it will be automatically generated in your field.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/FluentCRM-Data-smartcode-05-scaled.webp)

## Insert FluentCRM Data into Fields

To get pre-filled data from **FluentCRM**, you need to use the shortcode with a small modification. **Fluent Forms** will automatically prefill with the **FluentCRM Contact** data available on your website. But remember, you will only get the pre-filled data **if you are logged in** and your **FluentCRM contact profile contains the data**.

For example, if you want to fetch the **email** from your **FluentCRM Contact's profile** into the **Fluent Forms Email field**, first, add the shortcode **{fluentcrm.data}** in the **shortcode section** of the field. Now, modify the shortcode by adding the field name like this: {**fluentcrm.email}**. 

Once done, the **email field** will be pre-filled with data from FluentCRM. You can check out more **FluentCRM shortcodes** in this [article](/docs/form-editor-smart-codes).

If you want to pre-fill **Custom Fields** data from FluentCRM, first add the **desired field** to your form. Then, use the shortcode **{fluentcrm.data}** and modify it with the specific **Custom Field slug**. To learn how to find the **Custom Field slug**, check out this [documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/email-field-06-scaled.webp)

### Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

After that, copy the **Shortcode** from the top-right corner. **Paste** it into the **page** or **post** where you want the form to appear.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/save-form-07-2-scaled.webp)

### Pre-populated FluentCRM Data Field Preview

After embedding, you can preview the form with the pre-populated FluentCRM data fields. Here you will see the fields are automatically filled with **FluentCRM Data**.

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/preview-08-2.webp)

## FluentCRM Contact Data

To verify pre-populated data, go to the **FluentCRM** contacts. Locate the contact with the custom profile data. Now, match the field **slug** with the **FluentCRM** smartcode used in the form. If you want to learn the custom profile data read this [article](https://fluentcrm.com/docs/global-custom-contact-fields/#:~:text=When%20you%20need%20additional%20fields,as%20in%20the%20below%20screenshot.).

![](/images/shortcode/pre-fill-form-fields-with-fluentcrm-data/custom-fluentcrm-data-09-scaled.webp)

So, this feature helps your user auto-fille your users details and helps to not re enter the data again and again.
