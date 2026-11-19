---
description: "The Numeric Input Field in Fluent Forms allows users to input numbers in a controlled format."
---

# Numeric Input Field

The **Numeric Input Field** in Fluent Forms lets users enter numbers in a controlled format. Use it for numerical data like phone numbers, age, salary, or other numerical details.

This article shows you how to add the **Numeric** field to your form.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/L8T180DQR8M" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Numeric Input Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Edit Numeric Input Field](/images/form-fields/general-fields/numeric-input-field/edit-fluent-form-01-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Click the **Numeric Field**, or drag and drop it into your editor.

![Numeric Input Field step](/images/form-fields/general-fields/numeric-input-field/new-9-scaled.webp)

## Customizing the Numeric Input Field

Hover over the field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

- Numeric Field Options

- Advanced Options

![Customize](/images/form-fields/general-fields/numeric-input-field/input-customization-03-7-scaled.webp)

### Numeric Field Options

These options in the **Customize** tab configure the **Numeric** input field.

**A. Element Label:** The field title users see when they fill out the **Numeric** field. Enter text that explains the purpose of the field.

**B. Label Placement:** Set where the label appears. The options are Top, Left, Right, and Default. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**E. Required:** Turn on **Required** to stop users from submitting the form with this field empty.

**F. Min Value:** Set the minimum value the field accepts. Users cannot enter a smaller number. Set the error message that shows when a smaller number is submitted.

**Example:** For age, set a minimum value of 18.

**G. Max Value:** Set a maximum value that users cannot exceed. Set the error message that shows when a number above the maximum is submitted.

**Example:** For years of experience, set a maximum value of 40.

**H. Digits:** Set the number of digits for the field. If Digits validation fails, an error message shows.

**I. Number Format:** Select the number format this field allows. You can use a comma or a dot as the decimal separator. Both EU and US styles, with or without commas and dots, are available.

**J. Mobile Keyboard Type:** Select the keyboard layout mobile users see when they tap this field. Options are:

- **Numeric (0-9):** Displays a standard number pad.

- **Decimal (0-9 with .):** Displays a numeric pad with a decimal point.

![Numeric Field Option](/images/form-fields/general-fields/numeric-input-field/numeric-field-option-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Autocomplete:** Choose a value that tells the browser what the field collects, so it can offer saved details. Options are **Automatic**, **off**, **None**, or a specific value. To learn more, read [Autocomplete for Form Fields](/autocomplete-for-form-fields).

**B. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read [Dynamic Default Value in Fluent Forms](/dynamic-default-value).

**C. Container Class:** Add custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Help Message:** Add text that appears as a help message for the user.

**F. Step:** Set the Step attribute for this field. You can use any floating value. For example:

- Use 1 for whole numbers ( 1, 2, 3).

- Use 0.01 for decimal steps ( 0.01, 0.02, 0.03).

**G. Prefix Label:** Add text that shows in the input field as a prefix.

**H. Suffix Label:** Add text that shows in the input field as a suffix.

**I. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**J. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

**K. Calculation Field Settings:** Enable this to dynamically calculate the field's value based on other numeric field values. Add a **formula expression** to implement calculations. To learn more, read [Numeric Calculation in Fluent Forms](/numeric-calculation).

![Advanced Options](/images/form-fields/general-fields/numeric-input-field/Advanced-options-05-6-scaled.webp)

## Embedding the Form on Your Website

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Numeric Input Field](/images/form-fields/general-fields/numeric-input-field/Save-form-06-8-scaled.webp)

### Preview of Added Numeric Field

Here is the form with the **Numeric** field added.

![Preview Numeric Input Field](/images/form-fields/general-fields/numeric-input-field/preview-form-07-1.webp)
