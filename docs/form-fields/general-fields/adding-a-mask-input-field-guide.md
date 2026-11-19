---
description: "The Mask Input Field in Fluent Forms ensures that users enter data in a predefined format, making it ideal for fields such as phone numbers, dates, social…"
---

# Adding a Mask Input Field Guide

The **Mask Input Field** in **[Fluent Forms](https://wordpress.org/plugins/fluentform)** makes users enter data in a **predefined format**. Use it for fields such as **phone numbers, dates, social security numbers, and license keys**.

Fluent Forms offers **five pre-defined masking formats**. You can also create **custom formats**.

This article shows you how to add the **Mask** field to your form.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/gN6Yc3VrqGc" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Mask Input Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Mask Input Field](/images/form-fields/general-fields/adding-a-mask-input-field-guide/Mask-input-field-01-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Click the **Mask** field, or drag and drop it into your editor.

![a Mask Input Field step](/images/form-fields/general-fields/adding-a-mask-input-field-guide/new-11-scaled.webp)

## Customizing the Mask Input Field

Hover over the field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

- Mask Input Options

- Advanced Options

![Customize](/images/form-fields/general-fields/adding-a-mask-input-field-guide/Input-Customization-03-9-scaled.webp)

### Mask Input Options

These options in the **Customize** tab configure the **Mask** input field.

**A. Element Label:** The field title users see when they fill out the **Mask** field. Enter text that explains the purpose of the field.

**B. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**E. Mask Input:** Choose a predefined mask from the dropdown, or create a custom mask.

Follow these format rules:

- **0-9/ #:** Numerical character

- **A:** Alphabetical character

- `*`: Alphanumeric character

- Literal characters are automatically displayed

Examples:

Date Mask: 00/00/0000. Valid Input: 10/21/2011

Social Security Number Mask: 000-00-0000. Valid Input: 987-65-4329

Course Code Mask: AAA 999. Valid Input: BIO 101

License Key Mask: `***-***-***`. Valid Input: a9a-f0c-28Q

When you choose **Custom** in the **Mask Input** dropdown, three more options appear:

- **Custom Mask:** Write your own mask pattern using the format rules above.
- **Activating a reversible mask:** Turn this on to make the mask work in reverse.
- **Clear if not match:** Turn this on to clear the value when the entry does not match the mask.

**F. Mobile Keyboard Type:** Select the keyboard layout mobile users see when they tap this field. Options are:

- **Standard Keyboard:** The default full alphanumeric keyboard.

- **Numeric (0-9):** A number-only pad.

- **Decimal (0-9 with .):** A numeric pad with a decimal point.

- **Telephone (0-9, *, #):** A standard phone dialer pad.

**G. Required:** Turn on **Required** to make users fill in this field before they submit.

![Mask Input Options](/images/form-fields/general-fields/adding-a-mask-input-field-guide/mask-input-options-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read [Dynamic Default Value in Fluent Forms](/dynamic-default-value).

**B. Container Class:** Add custom CSS classes to the field’s wrapper.

**C. Element Class:** Add custom CSS classes to the input field.

**D. Help Message:** Add text that appears as a help message for the user.

**E. Prefix Label:** Add text that shows in the input field as a prefix.

**F. Suffix Label:** Add text that shows in the input field as a suffix.

**G. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**H. Max Text Length:** Set the maximum number of characters the field accepts. Use it to limit responses like postal codes or short codes.

**I. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

![Advanced Options](/images/form-fields/general-fields/adding-a-mask-input-field-guide/Advanced-Options-05-7-scaled.webp)

## Embedding the Form on Your Website

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Fluent Forms](/images/form-fields/general-fields/adding-a-mask-input-field-guide/Save-Form-06-10-scaled.webp)

### Preview of Added Mask Input Field

Here is the form with the **Mask Input** field added.

![Preview a Mask Input Field](/images/form-fields/general-fields/adding-a-mask-input-field-guide/Preview-07-5.webp)
