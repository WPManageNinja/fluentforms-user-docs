---
description: "Fluent Forms allows you to pre-fill form fields using subscriber data from FluentCRM. This feature is useful for personalizing form experiences and…"
---

# Pre-Fill Form Fields with FluentCRM Data

Fluent Forms lets you pre-fill form fields with subscriber data from [**FluentCRM**](/fluentcrm-integration). This personalizes the form experience and improves user engagement.

This guide walks you through the steps to automatically populate form fields with FluentCRM contact data.

>[!Note]
> Only logged-in users get form fields pre-filled with FluentCRM data. Guests see the fallback value if you set one, such as `{fluentcrm.email|you@example.com}`.

## Enable the FluentCRM Module

Before you use this feature, make sure **FluentCRM** is installed and activated on your website. Then follow these steps to enable the FluentCRM integration module.

1. Go to **Integrations** in the Fluent Forms top menu.
2. Search for **FluentCRM** in the search bar. Find the FluentCRM integration card that says *Connect FluentCRM with Fluent Forms*.
3. Turn on the **Toggle** to enable the **FluentCRM** module.

![Enable FluentCRM Module Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/enable-FluentCRM-module-01-scaled.webp)

## Using FluentCRM Data Smartcode

Go to **Forms** in the Fluent Forms top menu. Choose a form and click its title to open the **Editor** page.

![Editor Fluent Forms](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/form-editor-02-scaled.webp)

On the **Editor** page, open the **Input Fields** tab on the right. Choose the field you want and click it, or drag and drop it into your editor.

![Add Field Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/add-field-03-scaled.webp)

1. Hover over the new field and click the **Pencil Icon**.
2. Open the **Customize** tab in the right sidebar.
3. Scroll to **Advanced Options** and find the **Default Value** drop-down. In some **Input Fields**, this option is called [**Dynamic Default**](/dynamic-default-value).
4. In the **Default Value** field, add a FluentCRM smart code. It fetches data from the FluentCRM contact and fills the field automatically.

![Access Default Value](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/access-default-value-04-scaled.webp)

Click the **Three-dot Icon**, scroll down to **FluentCRM Data**, and click the smart code. Fluent Forms adds it to your field.

![FluentCRM Data Smartcode](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/FluentCRM-Data-smartcode-05-scaled.webp)

## Insert FluentCRM Data into Fields

To get pre-filled data from FluentCRM, you need to change the smart code a little. Fluent Forms pre-fills the form with the **FluentCRM Contact** data available on your website. But remember, you only get pre-filled data **if you are logged in** and your **FluentCRM contact profile contains the data**.

For example, to fetch the **email** from your **FluentCRM Contact's profile** into the **Fluent Forms Email field**, first select **FluentCRM Data** from the three-dot list in the **Default Value** field. It adds `{fluentcrm.CONTACT_DATA_KEY}`. Now replace `CONTACT_DATA_KEY` with the data name, like this: `{fluentcrm.email}`.

Once done, the **email field** is pre-filled with data from FluentCRM. Other common keys are `{fluentcrm.first_name}` and `{fluentcrm.last_name}`. You can find more smart codes in the [Form Editor Smart Codes](/form-editor-smart-codes) guide.

To pre-fill **Custom Fields** data from FluentCRM, first add the matching **field** to your form. Then select **FluentCRM Data** and replace `CONTACT_DATA_KEY` with the **Custom Field slug**, for example `{fluentcrm.your_custom_slug}`. To find the **Custom Field slug**, see the [FluentCRM global custom contact fields documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).

![Email Field](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/email-field-06-scaled.webp)

## Embed the Form into the Frontend

Once you complete the customization, follow these steps.

1. Click **Save** to save all your changes.
2. Click the **Preview** (eye) icon at the top right to see the form preview.
3. Copy the **Shortcode** from the top-right corner.
4. **Paste** it into the **page** or **post** where you want the form to appear.

![Save Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/save-form-07-2-scaled.webp)

![Embed in a Pgae](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/embed-in-a-page.webp)

## Pre-populated FluentCRM Data Field Preview

After embedding, you can preview the form with the pre-populated FluentCRM data fields. Here you see the fields are automatically filled with **FluentCRM Data**.

![Preview Pre-Fill Form Fields with](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/preview-08-2.webp)

## FluentCRM Contact Data

To verify the pre-populated data, go to **Contacts** in **FluentCRM** and find the contact with the custom profile data. Now match the field **slug** with the **FluentCRM** smart code you used in the form. To learn about custom profile data, read the [FluentCRM custom contact fields documentation](https://fluentcrm.com/docs/global-custom-contact-fields/#:~:text=When%20you%20need%20additional%20fields,as%20in%20the%20below%20screenshot.).

![Custom FluentCRM Data](/images/advanced-developer/shortcodes/pre-fill-form-fields-with-fluentcrm-data/custom-fluentcrm-data-09-scaled.webp)

So, this feature helps you auto-fill your users' details, so they do not need to enter the data again and again. To learn more about default values, read [Dynamic Default Value](/dynamic-default-value).
