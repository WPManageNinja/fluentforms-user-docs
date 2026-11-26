---
description: "Fluent Forms offers a feature that allows you to add calculations to Repeat Fields, making it easy to perform math automatically inside forms."
---

# Add Calc Values on the Repeat Field

Fluent Forms lets you add [calculations](/numeric-calculation) to Repeat Fields, so math runs automatically inside your forms.

This guide shows you how to add calc values to the repeat field and calculate a total from its rows.

> [!Note]
> Calculation is a **Pro** feature. Install and activate Fluent Forms Pro to use it.

## Add Calculations in Repeat Fields

Go to **Forms** in the **Fluent Forms Navbar**. Create a new form or open an existing one.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Drag and drop the **Repeat Field** into your form.

![Calc Repeat Field](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-repeat-field-01-scaled.webp)

## Set Up the Repeat Field Columns

You do not drop other fields inside the **Repeat Field**. Instead, you add its columns in the field settings.

1. Click the **Repeat Field** to open its settings.
2. Under **Repeat Field Columns**, add the columns you need.
3. Choose a **Field Type** for each column: **Text Field**, **Email Field**, **Numeric Field**, **Select Field**, or **Input Mask Field**.

To learn more about the **Repeat Field**, read the [Repeat Field](/repeat-input-field) documentation.

## Add Calc Values to a Select Column

A **Select Field** column can carry a number for each option. The calculation uses that number instead of the option label.

- Open the **Select Field** column's options.
- Turn on **Calc Values** and enter the value for each option, such as a price.

![Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-value-03.webp)

Numeric columns need no extra setup. The calculation uses the number the user enters.

## Enable Calculations for Fields

Columns inside the **Repeat Field** have no calculation setting. You show the result in a separate **Numeric Field** placed outside the repeater.

1. Add a **Numeric Field** below the **Repeat Field**.
2. Open its settings and go to **Advanced Options**.
3. Under **Calculation Field Settings**, turn on **Enable Calculation**.
4. Enter the **Calculation Expression** that defines the calculation.

The expression `{repeat.<name>.N}` adds up one column across all rows:

- `<name>` is the **Name Attribute** of the **Repeat Field**. The default is `repeater_field`. If you rename the field or add a second one, use its own name.
- `N` is the column position, counting from 1 for the first column.

For example:

- For the 2nd column (Select Field), use `{repeat.repeater_field.2}`.
- For the 3rd column (Numeric Field), use `{repeat.repeater_field.3}`.

You can add as many columns as you need. Update each calculation expression to match.

![Calculation Field Settings](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calculation-field-settings-02-scaled.webp)

To count the rows, add another **Numeric Field** and use `{repeat.repeater_field}` as its **Calculation Expression**. It returns the number of rows the user adds.

Click **Save**, then preview the form and fill it out to test it.

![Preview Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/Preview-calc-value-form-04-scaled.webp)

Your repeat field now calculates values.
