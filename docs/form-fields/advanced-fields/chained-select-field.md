---
description: "The Chained Select in Fluent Form is a powerful feature that allows you to create dependent dropdowns from CSV data that dynamically populate a set of…"
---

# Chained Select Field

The **Chained Select** field creates dependent [dropdowns](/dropdown-field) from CSV data. Each select element fills in based on the previous selection. Use it for **category-based selection forms**, such as **Country State City** or **Make Model Variant** selections.

This guide shows you how to add and customize the **Chained Select** field in Fluent Forms.

> [!Note]
> The **Chained Select** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding a Chained Select Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Edit Chained Select Field](/images/form-fields/advanced-fields/chained-select-field/edit-form-01-17-scaled.webp)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Chained Select** field, or drag and drop it into your editor.

![Adding Chained Select Field](/images/form-fields/advanced-fields/chained-select-field/Adding-chained-select-field-02-scaled.webp)

The Chained Select field gives you **three drop-down fields:** **Parent**, **Child**, and **Grand Child**. After a user selects a **Parent** option, the **Child** drop-down shows only the options that belong to it.

The **Grandchild** works the same way. After a user selects a child option, the **Grandchild** shows only the options under that child.

The field resets automatically when a parent dropdown changes and the child option no longer matches.

## Customizing the Chained Select Field

After you add the **Chained Select** field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right with these options:

- Chained Select Options

- Advanced Options

![Customize Fluent Forms](/images/form-fields/advanced-fields/chained-select-field/Input-Customization-03-26-scaled.webp)

### Chained Select Field Options

These options in the **Customize** tab configure the **Chained Select** field.

**A. Element Label:** The field title users see when they fill out the **Chained Select** field. Enter text that explains the purpose of the field.

**B. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**C. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more about **Dynamic Default** values, read [Dynamic Default Value](/dynamic-default-value). 

Click the **Three-Dot** option on the right to add the default value.

**D. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**E. Required:** Turn on **Required** to make users fill in this field before they submit.

**F. CSV Data Source:** Click the **upload** button to upload a **CSV** file from the dropdown under the **File Upload** options. If the data is hosted externally, provide a remote **CSV URL**.

![Chained CSV Options](/images/form-fields/advanced-fields/chained-select-field/chained-csv-options-05-scaled.webp)

To get a sample CSV file, click **Download Sample CSV**.

The screenshot shows the demo data. The first-column names are placeholders for the drop-down fields.

![CSV Data File](/images/form-fields/advanced-fields/chained-select-field/CSV-data-file-04.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**B. Help Message:** Add text that appears as a help message for the user.

**C. Container Class:** Add custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Enable Searchable Smart Options:** For a long dropdown list, enable **Searchable Smart Options** so users can search the dropdown fields.

A search box then appears in the field.

**F. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic). 

![Advanced Options](/images/form-fields/advanced-fields/chained-select-field/Advanced-Options-06-scaled.webp)

## Embed the Form into Frontend

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Chained Select Field](/images/form-fields/advanced-fields/chained-select-field/save-form-07-scaled.webp)

### Preview of Chained Select Field

Here is the form with the **Chained Select** field added.

![Preview Chained Select Field](/images/form-fields/advanced-fields/chained-select-field/Preview-form-08.webp)
