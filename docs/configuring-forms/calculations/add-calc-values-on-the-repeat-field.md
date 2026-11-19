---
description: "Fluent Forms offers a feature that allows you to add calculations to Repeat Fields, making it easy to perform math automatically inside forms."
---

# Add Calc Values on the Repeat Field

Fluent Forms lets you add [calculations](/numeric-calculation) to Repeat Fields, so math runs automatically inside your forms.

This guide shows you how to add calc values to the repeat field and calculate a total from its rows.

> [!Note]
> Calculation is a **Pro** feature. Install and activate Fluent Forms Pro to use it.

## Add Calculations in Repeat Fields

Go to the **Fluent Forms dashboard**. Create a new form or open an existing one.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Drag and drop the **Repeat Field** into your form. Add the fields you want inside the **Repeat Field**, such as numeric fields and dropdowns.

![Calc Repeat Field](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-repeat-field-01-scaled.webp)

## Enable Calculations for Fields

1. Click the **Edit Icon** on a field inside the **Repeat Field**.
2. Scroll down to **Calculation Field Settings** and turn on **Enable Calculation**.
3. Enter the **Calculation Expression** that defines the calculation.

- For the 2nd column (Select Field), use {repeat.repeater_field.2}.

- For the 3rd column (Numeric Field), use {repeat.repeater_field.3}.

You can add as many columns as you need. Update each calculation expression to match.

![Calculation Field Settings](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calculation-field-settings-02-scaled.webp)

You can also add **Calculation Values** for each column. Turn on **Calc Values** and enter the value you want.

![Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-value-03.webp)

Next, calculate the total number of repeat rows. Add a new numeric field and use {repeat.repeater_field} as its **Calculation Expression**.

To learn more about the **Repeat Field**, read the [Repeat Field](/repeat-input-field) documentation.

Click **Save**, then preview the form and fill it out to test it.

![Preview Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/Preview-calc-value-form-04-scaled.webp)

Your repeat field now calculates values.
