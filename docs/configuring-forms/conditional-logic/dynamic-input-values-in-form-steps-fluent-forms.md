# Dynamic Input Values In Form Steps | Fluent Forms

Fluent Forms allows you to dynamically populate input values to make your multi-step forms more connected and personalized. 

This article will guide you through adding dynamic input values to the form steps with Fluent Form on the WordPress site.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/33vaR6Mfg0w" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Creating a Multi-Step Form

To utilize dynamic input values, first, create a multi-step form. Read this article if you don’t know how to make a multi-step form.

For this example, I will create a multi-step form where the user enters their **Name** in the first step. In the second step, we will dynamically display their name as a personalized greeting.

![Add Step Dynamic Input Values In](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/add-form-step-01-scaled.webp)

## Adding Custom HTML Input Field

Add a **Custom HTML** input field from the **General Field** section to populate the name input data. 

You will find an innovative code sample at the bottom right of the **HTML** input areas. If you want to learn more about the **Custom HTML** field, read this[ article](/docs/custom-html-field-in-fluent-forms).

![Custom HTML Field Add](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/custom-html-field-add-02-scaled.webp)

### Using the SmartCode

Now, using the Smart codes, you can show the content of the previous input. For this, use the **{dynamic.YOUR_INPUT_NAME}**, where **YOUR_INPUT_NAME** is the Name Attribute of the input fttield you want to populate.

### Finding the Name Attribute

To find the **Name Attribute** of the input field, click on the **Input Field** (Name Field). Now, on the right-side panel, navigate to **Advanced Options**. Here, you’ll find the **Name Attribute** assigned to the input field. For a better understanding, see the screenshot below.

![Name Attributes](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/name-attributes-03-scaled.webp)

## Adding Smart Code in the HTML Field

To display the entered **Name** dynamically in the second step, use the following Smart Code in the **HTML Content Field**:

Hello {dynamic.names}, welcome to Fluent Forms!

Where **names** is the **Name Attribute** of the Name Field.

![Smartcode Fluent Forms](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/smartcode-04-scaled.webp)

## Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**. 

![Save Dynamic Input Values In](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/save-form-05-2-scaled-2.webp)

### Preview of Dynamic Input Values In Form Steps

After embedding, you can preview the form with the dynamic input values in form steps.

![Dynamic Input Values Names](/images/configuring-forms/conditional-logic/dynamic-input-values-in-form-steps-fluent-forms/dynamic-input-values-names-06.webp)

Your multi-step form will display a personalized message using the name entered in the first step.
