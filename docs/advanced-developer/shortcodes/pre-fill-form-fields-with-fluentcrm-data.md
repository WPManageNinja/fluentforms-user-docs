---
description: "Fluent Forms allows you to pre-fill form fields using subscriber data from FluentCRM. This feature is useful for personalizing form experiences and…"
---

# Pre-Fill Form Fields with FluentCRM Data

You can pre-fill form fields with subscriber data from [**FluentCRM**](/fluentcrm-integration). This personalizes the form and saves your users from typing the same details again. This guide shows you how to populate form fields with FluentCRM contact data.

>[!Note]
> Only logged-in users get form fields pre-filled with FluentCRM data. Guests see the fallback value if you set one, such as `{fluentcrm.email|you@example.com}`.

## Enable the FluentCRM Module

Install and activate FluentCRM on your website first. Then enable the FluentCRM integration module.

1. Go to **Integrations** in the Fluent Forms top menu.
2. Find the **FluentCRM** card in the integrations list.
3. Turn on the **Toggle** to enable the **FluentCRM** module.

![Enable FluentCRM Module Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/enable-FluentCRM-module-01-scaled.webp)

## Using FluentCRM Data Smartcode

Go to **Forms** in the Fluent Forms top menu and click the form title to open the **Editor** page.

![Editor Fluent Forms](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/form-editor-02-scaled.webp)

On the **Editor** page, open the **Input Fields** tab on the right. Click a field or drag and drop it into your editor.

![Add Field Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/add-field-03-scaled.webp)

1. Hover over the new field and click the **Pencil Icon**.
2. Open the **Customize** tab in the right sidebar.
3. Scroll to **Advanced Options** and find the **Default Value** drop-down. In some **Input Fields**, this option is called [**Dynamic Default**](/dynamic-default-value).
4. In the **Default Value** field, add a FluentCRM smart code. It fetches data from the FluentCRM contact and fills the field.

![Access Default Value](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/access-default-value-04-scaled.webp)

Click the **Three-dot Icon**, scroll down to **FluentCRM Data**, and click the smart code. Fluent Forms adds it to your field.

![FluentCRM Data Smartcode](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/FluentCRM-Data-smartcode-05-scaled.webp)

## Insert FluentCRM Data into Fields

Edit the smart code slightly to get the pre-filled data. **Fluent Forms** pre-fills fields with the **FluentCRM Contact** data available on your website. You only get pre-filled data **if you are logged in** and your **FluentCRM contact profile contains the data**.

For example, to fetch the **email** from your **FluentCRM Contact's profile** into the **Fluent Forms Email field**, select **FluentCRM Data** from the smart code list in the **Default Value** field. It inserts `{fluentcrm.CONTACT_DATA_KEY}`. Replace `CONTACT_DATA_KEY` with the field name, like this: `{fluentcrm.email}`.

The **email field** now pre-fills with data from FluentCRM. You can find more smart codes in the [Form Editor Smart Codes](/form-editor-smart-codes) guide.

To pre-fill **Custom Fields** data from FluentCRM, first add the **field** to your form. Then select **FluentCRM Data** and replace `CONTACT_DATA_KEY` with the **Custom Field slug**, for example `{fluentcrm.your_custom_slug}`. To find the **Custom Field slug**, see the [FluentCRM global custom contact fields documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).

![Email Field](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/email-field-06-scaled.webp)

### Embed the Form on Your Site

1. Click **Save** to save your changes.
2. Click the **Preview** (eye) icon at the top right to preview the form.
3. Copy the **Shortcode** from the top-right corner.
4. **Paste** it into the **page** or **post** where you want the form to appear.

![Save Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/save-form-07-2-scaled.webp)

### Pre-populated FluentCRM Data Field Preview

After you embed the form, preview it. The fields fill automatically with **FluentCRM Data**.

![Preview Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/preview-08-2.webp)

## FluentCRM Contact Data

To verify the pre-populated data, go to the **FluentCRM** contacts and find the contact with the custom profile data. Match the field **slug** with the **FluentCRM** smart code in the form. To learn about custom profile data, read the [FluentCRM custom contact fields documentation](https://fluentcrm.com/docs/global-custom-contact-fields/#:~:text=When%20you%20need%20additional%20fields,as%20in%20the%20below%20screenshot.).

![Custom FluentCRM Data](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/custom-fluentcrm-data-09-scaled.webp)

To learn more about default values, read [Dynamic Default Value](/dynamic-default-value).
