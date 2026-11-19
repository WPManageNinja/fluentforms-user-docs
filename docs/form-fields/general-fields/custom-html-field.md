---
description: "The Custom HTML field in Fluent Forms allows you to personalize your forms by adding custom HTML code or shortcodes."
---

# Custom HTML Field

The **Custom HTML** field in Fluent Forms lets you personalize your form with **custom HTML code** or **shortcodes**. You can also add **custom text, images, embedded elements, or Smartcodes**.

This article shows you how to add the **Custom HTML** field to your form.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/eDQwZrroca8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Custom HTML Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Edit Custom HTML Field](/images/form-fields/general-fields/custom-html-field/edit-form-01-2-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Drag and drop the **Custom HTML** field into your editor.

![Custom HTML Field step](/images/form-fields/general-fields/custom-html-field/new-5-scaled.webp)

## Customizing the Custom HTML Field

Hover over the field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

![Customize](/images/form-fields/general-fields/custom-html-field/input-customization-03-3-scaled.webp)

**A. HTML Code:** Add any valid HTML code. The form shows it as regular content.

For example:

`<p style="color:blue;">Welcome to our registration form!</p>`

**B. Dynamic SmartCodes:** Use [Smart Codes](/form-editor-smart-codes) to show data from any input.

For example, the shortcode could be {dynamic.YOUR_INPUT_NAME}.

> Other shortcodes also work in this field.

**Smart Code Picker:** You do not need to type smart codes by hand. Use the smart code picker in the **HTML Code** section to browse the available smart codes and insert one at your cursor position.

- Click **Add shortcodes** in the **HTML Code** section.
- Select the smart code you want. It is added to your HTML code.

**C. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic). 

**D. Container Class:** Add custom CSS classes to the field’s wrapper. This can be used to style the current element.

![Customization Fluent Forms](/images/form-fields/general-fields/custom-html-field/Customization-04-scaled.webp)

## Embed the Form into Frontend

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Custom HTML Field](/images/form-fields/general-fields/custom-html-field/save-form-05-scaled.webp)

### Preview of Added Custom HTML Field

Here is the **Preview** of the **Form** to test the custom HTML field functionality.

![Preview Custom HTML Field](/images/form-fields/general-fields/custom-html-field/preview-06.webp)
