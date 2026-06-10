# Dropdown Field in Fluent Forms

The **Dropdown Field** is a list-based input where users select one option from predefined choices. Use it for countries, categories, product types, and other structured selections.

This guide walks you through adding and customizing the **Dropdown** field in Fluent Forms.

## Adding Dropdown Field

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, see [How to Create a Form with Fluent Forms](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Edit form to add Dropdown field](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/edit-form-01-1-scaled.webp)

On the **Editor** page, click the **Plus** icon and open **General Fields**. You can also find **General Fields** in the right sidebar under **Input Fields**.

Click or drag the **Dropdown** field into the editor.

![Add Dropdown field to the form](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/new-3-scaled.webp)

## Customizing the Dropdown Field

Hover over the field and click the **Pencil** icon to open **Input Customization**:

- Dropdown Field Options
- Advanced Options

![Dropdown field customization panel](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/Input-Customization-03-1-scaled.webp)

### Dropdown Field Options

**A. Element Label:** The field title users see on the form.

**B. Label Placement:** Set label position to **Top**, **Left**, **Right**, or **Default**.

**C. Admin Field Label:** A label shown only to admins when viewing submissions.

**D. Placeholder:** Hint text shown when no option is selected.

**E. Options:** Manage dropdown choices:

- Add items users can choose from
- Set a default selection
- Show values for admin reference
- Drag to reorder options
- Use the **Plus** icon to add options

**F. Show & Calc Value:** Display values and use them in [numeric calculations](/docs/numeric-calculation-in-fluent-forms).

**G. Bulk Edit / Predefined Data Sets:** Import predefined datasets (for example, countries or states) instead of adding each option manually.

**H. Shuffle the available options:** Randomize the option order for each visitor.

**I. Enable Searchable Smart Options:** Add a search box for long dropdown lists.

**J. Required:** Require a selection before submission.

![Dropdown field options settings](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/input-customization-1-scaled.webp)

### Option Grouping

**Option Grouping** organizes related choices under bold heading labels rendered as native HTML optgroup blocks on the frontend.

Under **Options**, turn on **Enable Option Grouping**. The flat options list becomes a grouped layout.

#### Configure Groups and Options

- **Create New Option Group:** Add a new option category
- **Group Label:** Enter the non-selectable heading text (for example, *Group 1*, *Group 2*)
- **Manage Choices Inside Groups:** Use **+** to add entries, edit labels and values, or **−** to remove rows
- **Reorder & Remove:** Drag to reorder groups or individual options. Use the trash icon to delete a group and all nested choices

> [!Note]
> Turning **Enable Option Grouping** off flattens your structure. Grouped choices merge into a single list and group header labels are dropped.

![Dropdown option grouping settings](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/input-customization-2-scaled.webp)

### Advanced Options

**A. Dynamic Default Value:** Pre-fill the field using shortcodes. See [Dynamic Default Value in Fluent Forms](/docs/dynamic-default-value-in-fluent-forms).

**B. Container Class:** Custom CSS classes for the field wrapper.

**C. Element Class:** Custom CSS classes for the input field.

**D. Help Message:** Guidance text shown below the field.

**E. Name Attribute:** The HTML name attribute. You usually do not need to change this.

**F. Conditional Logic:** Show or hide the field based on other values. See [Set up Forms with Conditional Logic in Fluent Forms](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

![Dropdown advanced options](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/Advanced-options-05-3-scaled.webp)

## Embed the Form into Frontend

Click **Save Form**, then **Preview & Design** to preview your changes.

Copy the form **Shortcode** and paste it into a **Page** or **Post**.

![Save and embed the form](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/Save-Form-06-3-scaled.webp)

## Preview of Added Dropdown Field

Here is a preview of the form with the **Dropdown** field.

![Dropdown field frontend preview](/images/form-fields/general-fields/dropdown-field-in-fluent-forms/Preview-07-1.webp)
