---
description: "The Repeat Field in Fluent Forms allows users to duplicate an input field dynamically. This is useful for forms where users may need to add multiple…"
---

# Repeat Input Field

The **Repeat Field** in [Fluent Forms](https://wordpress.org/plugins/fluentform) lets users duplicate an input field dynamically. Use it when users may need to add multiple entries, such as contact details, addresses, or product lists. You can even [add calculation values on the Repeat field](/add-calc-values-on-the-repeat-field) to total up rows automatically.

This guide shows you how to add and customize the **Repeat Input** field in Fluent Forms.

> [!Note]
> The **Repeat Input** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding a Repeat Input Field

To add the **Repeat Input Field**, follow these steps:

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Edit Repeat Input Field](/images/form-fields/advanced-fields/repeat-input-field/Form-Edit-01-1-scaled.webp)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Repeat Input** field, or drag and drop it into your editor.

![Adding Repeat Field](/images/form-fields/advanced-fields/repeat-input-field/Adding-Repeat-Field-02-scaled.webp)

## Customizing the Repeat Input Field

After you add the **Repeat Input** field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right with these options:

- Repeat Field Options

- Advanced Options

![Customize Fluent Forms](/images/form-fields/advanced-fields/repeat-input-field/Input-Customization-03-28-scaled.webp)

### Repeat Field Options

These options in the **Customize** tab configure the **Repeat Input** field.

**A. Element Label:** The field title users see when they fill out the **Repeat Input** field. Enter text that explains the purpose of the field.

**B. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Repeat Field Columns:** Click the **Plus Icon** to add a column. Click the **Minus Icon** on the right side of a column to remove it. Click the **Chevron Down Icon** to configure column settings.

- **Field Type:** Choose a field type from the dropdown.

- **Label:** Enter the label of the column.

- **Default:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read the [Dynamic Default Value documentation](/dynamic-default-value).

Click the **Three-Dot** option on the right to add the default value.

- **Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

- **Required:** Turn on **Required** to make users fill in this field before they submit.

![Unnamed](/images/form-fields/advanced-fields/repeat-input-field/unnamed-1-2.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Container Class:** Add custom CSS classes to the field’s wrapper.

**B. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**C. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic). 

**D. Max Repeat Inputs:** Set the maximum number of rows users can add to this repeated field. Leave blank or set to 0 for unlimited entries.

![Advanced Options](/images/form-fields/advanced-fields/repeat-input-field/Advanced-Options-04-3-scaled.webp)

## Embed the Form into Frontend

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Repeat Input Field](/images/form-fields/advanced-fields/repeat-input-field/Save-Form-05-6-scaled.webp)

### Preview of Repeat Input Field

Here is the form with the **Repeat Input** field added.

![Preview Repeat Input Field](/images/form-fields/advanced-fields/repeat-input-field/Preview-06-3.webp)
