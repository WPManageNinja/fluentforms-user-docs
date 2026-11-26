---
description: "Fluent Forms offers the Conditional Logic feature inside Input Fields to display/hide them based on specific conditions in your forms."
---

# Set up Forms with Conditional Logic

**Fluent Forms** offers the **Conditional Logic** feature inside **Input Fields** to show or hide them based on specific conditions in your forms. This guide shows you how to use **Conditional Logic** in any **Input Field**.

Conditional logic is also available for email notifications and confirmations (Pro). See [Conditional Email Notification](/conditional-email-notification) and [Conditional Confirmation Message](/conditional-confirmation-message).

## Enabling Conditional Logic in a Field

Go to **Forms** in the **Fluent Forms Navbar** or the **WordPress Left Sidebar**. Click **Edit** on the form where you want to use **Conditional Logic** to open its **Editor**.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

This guide uses an existing form as an example.

![Open Set up Forms with](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/1.-Open-Desired-form-scaled.webp)

In the **Editor**, choose the **Input Field** you want to show or hide based on conditions. **For example**, select the [Payment Method](/add-payment-method-field-in-payment-forms) field.

Hover over the field and click the **Pencil/Edit** icon. The **Customize** tab opens in the right panel.

Click the **Arrow Icon** to open **Advanced Options**, scroll down to **Conditional Logic**, and select **Yes**.

![Input Customization Fluent Forms](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/2.-Input-Customization-scaled.webp)

## Condition Match

When you enable **Conditional Logic**, a **Condition Match** option appears with three choices:

**A. Any:** The form user must meet at least one of the conditions to trigger the action.

**B. All:** The form user must meet all the conditions to trigger the action.

**C. Group:** This advanced option lets you **create multiple conditions within groups**. Inside a group, every condition must match (AND). Groups are joined with "**OR**", so the action triggers when at least one group is fully met. Click **+ OR** to add another group. You can also **Name** your **Groups**.

Fields show or hide live as the user fills in the form. Fluent Forms checks the same conditions again on submission.

## Fields to set Conditions

After you select the **Condition Match**, set the **Parameter**, its **Operator**, and the corresponding **Value**.

- **Parameter:** The first field. Select the input field to check against the value.
- **Operator:** The middle field. Select how to compare the parameter and the value.
- **Value:** The last field. Enter the value to compare against.

The field triggers the action when the condition is met.

To add a condition, click the **Plus Icon**. To delete a condition, click the **Minus (-) Icon**. With **Any** or **All**, these icons sit below the condition rows. With **Group**, the plus icon sits at the right of each row, and the **+ OR** button adds a new group.

Click **Save** in the top bar to activate the conditions. To see the result, click the **Preview** (eye) icon.

![Conditional Match Fluent Forms](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/3.-Conditional-Match-scaled.webp)

## Example of Each Conditional Match

The examples below explain all three conditional matches in detail.

### A. Any Conditional Match

**For example**, select **"Email"** and **"Payment Item"** as the parameters, use **"includes"** and **"equal"** as the operators, and enter **"@gmail.com"** and **"Fluent Forms"** as the corresponding values.

With the "**Any**" match, the **Payment Method** field is visible when users either provide an email address containing **“@gmail.com”** or select the **“Fluent Forms”** product. Otherwise, the field stays hidden.

![Any Conditional Fluent Forms](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/4.-Any-conditional.webp)

This is a **preview** of a form where the user met one condition (selecting the Fluent Forms product). The **Payment Method** field is visible.

![Preview Any Condional Set up Forms with](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/5.-Preview-of-Any-condional-scaled.webp)

### B. All Conditional Match

**For example**, select **"Email"** and **"Payment Item"** as the parameters, use **"includes"** and **"equal"** as the operators, and enter **"@gmail.com"** and **"Fluent Forms"** as the corresponding values.

With the "**All**" match, the **Payment Method** field is visible only when users both provide an email address containing **“@gmail.com”** and select the **“Fluent Forms”** product. Otherwise, the field stays hidden.

![All Condional Fluent Forms](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/6.-All-condional.webp)

This is a **preview** of a form where the user met all the conditions (providing an email that contains @gmail.com and selecting the Fluent Forms product). The **Payment Method** field is visible.

![Preview All Conditional Set up Forms with](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/7.-Preview-of-All-Conditional.webp)

### C. Group Conditional Match

Select the “Group” conditional match and set two Groups of Conditions with the OR operator. When users meet any one group, the field is visible.

**For example**, in Group 1, select **"Email"** and **"Payment Item"** as the parameters, use **"includes"** and **"equal"** as the operators, and enter **"@gmail.com"** and **"Fluent Forms"** as the corresponding values.

In Group 2, select “**Name [First Name]**”, **"Email"** and **"Payment Item"** as the parameters, use “**starts with**”, **"includes"** and **"equal"** as the operators, and enter “**Z**”, **"@gmail.com"** and **"Fluent Forms"** as the corresponding values.

With the "**Group**" match, the **Payment Method** field is visible when users meet either of these:

- **Group 1:** They provide an email address containing “**@gmail.com**” and select the “**Fluent Forms**” product.
- **Group 2:** They enter a first name starting with “**Z**,” provide an email address containing “**@gmail.com**,” and select the “**Fluent Forms**” product.

Otherwise, the field stays hidden.

![Group Conditional Fluent Forms](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/8.-Group-Conditional.webp)

This is a **preview** of a form where the user met **All Conditions** under **Group 1** (providing an email address containing **“@gmail.com”** and selecting the **“Fluent Forms”** product). The **Payment Method** field is visible.

![Preview Group One Codinitional Set up Forms with](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/9.-Preview-of-Group-one-codinitional.webp)

This is a **preview** of a form where the user met **All Conditions** under **Group 2** (entering a first name starting with **“Z”**, providing an email address containing **“@gmail.com”**, and selecting the **“Fluent Forms”** product). The **Payment Method** field is visible.

![Preview Group Two Conditionals Set up Forms with](/images/configuring-forms/conditional-logic/set-up-forms-with-conditional-logic/10.-Preview-of-Group-two-Conditionals.webp)

The condition operators for text fields are: equal, not equal, greater than, less than, greater than or equal, less than or equal, includes, not includes, starts with, ends with, and Regex match. A **Checkbox** parameter offers only equal and not equal.
