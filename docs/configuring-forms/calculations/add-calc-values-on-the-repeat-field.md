# Add Calc Values on the Repeat Field

<<<<<<< HEAD:docs/configuring-forms/calculations/add-calc-values-on-the-repeat-field.md
Fluent Form offers a feature that allows you to add [calculations](/numeric-calculation) to Repeat Fields, making it easy to perform math automatically inside forms. 
=======
Fluent Forms offers a feature that allows you to add calculations to Repeat Fields, making it easy to perform math automatically inside forms. 
>>>>>>> tajulauthlab:docs/configuring-forms/calculations/how-to-add-calc-values-on-the-repeat-field.md

This article will provide a step-by-step guide on how you can add calc values to the repeat field with Fluent Forms.

## Add Calculations in Repeat Fields

To add calculations in repeat fields, go to the **Fluent Forms dashboard**. Create a new form or open an existing one.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Now, drag and drop the **Repeat Field** into your form. Add the fields you want inside the **Repeat** **Field** (numeric fields, dropdowns, etc.).

![Calc Repeat Field](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-repeat-field-01-scaled.webp)

## Enable Calculations for Fields

Click the **Edit Icon** on a field inside the **Repeat Field**. Now scroll down and toggle to **Enable Calculation** options under the **Calculation Field Settings**. Then enter the **Calculation Expression** to define how it works.

- For the 2nd column (Select Field), use {repeat.repeater_field.2}.

- For the 3rd column (Numeric Field), use {repeat.repeater_field.3}.

You can add as many columns as needed and update their calculation expressions accordingly.

![Calculation Field Settings](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calculation-field-settings-02-scaled.webp)

Also you can add **Calculation Values** for each column based on your requirements. Enable the **Calc Values** options and enter the value you want to.

![Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/calc-value-03.webp)

After that, you can calculate the total number of repeat fields. Add a new numeric field to calculate the total number of repeat rows. Use {repeat.repeater_field} as the **Calculation Expression** for this total.

If you want to know more about **Repeat Field** then read the [Repeat Field](/repeat-input-field) documentation.

After that, click the **Save Form** button. Preview and test it by filling it out.

![Preview Calc Value](/images/configuring-forms/calculations/add-calc-values-on-the-repeat-field/Preview-calc-value-form-04-scaled.webp)

Now you can use Calc Values with Repeat Fields in Fluent Forms!
