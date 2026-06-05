# Custom HTML Field in Fluent Forms

The **Custom HTML** field in Fluent Forms allows you to personalize your forms by adding **custom HTML code** or **shortcodes**. You can also add **custom text, images, embedded elements, or Smartcodes** to enhance the user experience.

This article will guide you through adding the **Custom HTML** field to your WordPress Site's Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/eDQwZrroca8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Custom HTML Field

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

![Edit Custom HTML Field](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/edit-form-01-2-scaled.webp)

Once on the **Editor** page, click the **Plus** **Icon** in your form editor and open the **General Fields** module. The **General Fields** option is also in the right sidebar under the **Input** **Fields** tab. 

Select the desired **Custom HTML** field by **Dragging** or **Dropping** it into your editor.

![Custom HTML Field step](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/new-5-scaled.webp)

## Customizing the Custom HTML Field

A custom HTML field has been added. You can edit this field by **hovering over it** and clicking the **Pencil Icon**. It will take you to the **Input Customization** tab on the right side and offer the following options for customizing the field. 

![Input Customization](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/input-customization-03-3-scaled.webp)

**A. HTML Code:** In the HTML Code section, you can add any valid HTML code that will be displayed as regular content within the form.

For example:

`<p style="color:blue;">Welcome to our registration form!</p>`

**B. Dynamic SmartCodes:** By using Smartcodes, the user can show data from any input. 

For example, the shortcode could be {dynamic.YOUR_INPUT_NAME}.

> Other ShortCodes will work in this field as well as.

**C. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your set of conditional logics. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

**D. Container Class:** Use this option to add your custom CSS classes to the field’s wrapper. This can be used to style the current element.

![Customization Fluent Forms](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/Customization-04-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**. 

![Save Custom HTML Field](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/save-form-05-scaled.webp)

### Preview of Added Custom HTML Field

Here is the **Preview** of the **Form** to test the custom HTML field functionality.

![Preview Custom HTML Field](/images/form-fields/general-fields/custom-html-field-in-fluent-forms/preview-06.webp)

Congratulations. You will successfully add the Custom HTML field in your Form.
