---
description: "Fluent Forms allows you to dynamically populate input values to make your multi-step forms more connected and personalized."
---

# Dynamic Input Values In Form Steps

Fluent Forms lets you populate input values dynamically, so your multi-step forms feel connected and personal.

This guide shows you how to add dynamic input values to form steps.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/33vaR6Mfg0w" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Creating a Multi-Step Form

To use dynamic input values, first create a multi-step form. Multi-step forms need the **Form Step** field (Pro). If you are new to multi-step forms, read [Creating a Multi-Step Form in Fluent Forms](/creating-a-multi-step-form).

For this example, create a multi-step form where the user enters their **Name** in the first step. In the second step, display their name as a personalized greeting.

![Add Step Dynamic Input Values In](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/add-form-step-01-scaled.webp)

## Adding Custom HTML Input Field

Add a **Custom HTML** input field from the **General Fields** section to show the name input data.

A **Dynamic SmartCodes** list appears below the **HTML** editor, with a sample such as `{dynamic.YOUR_INPUT_NAME}`. To learn more about the **Custom HTML** field, read the [Custom HTML Field](/custom-html-field) documentation.

![Custom HTML Field Add](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/custom-html-field-add-02-scaled.webp)

## Using the SmartCode

Smart codes show the content of a previous input. Use **{dynamic.YOUR_INPUT_NAME}**, where **YOUR_INPUT_NAME** is the Name Attribute of the input field you want to show.

## Finding the Name Attribute

To find the **Name Attribute**, click the **Input Field** (Name Field). In the right panel, go to **Advanced Options**. The **Name Attribute** of the field appears there, as the screenshot below shows.

![Name Attributes](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/name-attributes-03-scaled.webp)

## Adding Smart Code in the HTML Field

To display the entered **Name** dynamically in the second step, use the following Smart Code in the **HTML Content Field**:

Hello {dynamic.names}, welcome to Fluent Forms!

Where **names** is the **Name Attribute** of the Name Field.

![Smartcode Fluent Forms](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/smartcode-04-scaled.webp)

## Embed the Form into the Front

Click **Save** to save your changes. Click the **Preview** (eye) icon in the top bar to preview the form.

To display the form on a page or post, **copy** the **Shortcode** from the shortcode chip in the top bar and **paste** it into that page or post.

![Save Dynamic Input Values In](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/save-form-05-2-scaled-2.webp)

## Preview of Dynamic Input Values

After you embed the form, preview it to see the dynamic input values in the form steps.

![Dynamic Input Values Names](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps/dynamic-input-values-names-06.webp)

Your multi-step form now displays a personalized message using the name entered in the first step.
