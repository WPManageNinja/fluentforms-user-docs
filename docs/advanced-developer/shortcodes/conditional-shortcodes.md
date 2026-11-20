---
description: "Fluent Forms conditional shortcodes show or hide content in confirmation messages, email notifications, and PDFs based on what users select in your form."
---

# Conditional Shortcodes

**Conditional shortcodes** show or hide content based on user selections. You can use them in [**Form Confirmations**](/setup-form-submission-confirmation-message), **Email Notifications**, and **PDF Documents**. They make your messages more personal and your forms more interactive.

This article explains each conditional shortcode and how it works in Fluent Forms.

> [!Note]
> **Conditional shortcodes** require **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on). They work in confirmation messages, email notifications, and PDFs, not inside form fields or on your site's pages.

## How to use Conditional Shortcode

To show a message based on user input, use a shortcode like this:

```
[ff_if field="input_radio" is="equal" to="yes"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

For example, to use it in an email, go to **Configuration** in your form, open **Email Notifications**, and add the shortcode to the **Email Body**. You can add it to a confirmation message or a PDF in the same way.

![Conditional Shortcode](/images/advanced-developer/shortcodes/conditional-shortcodes/email-notifications-email-body-05.webp)

> [!Note]
> The **Conditional Logics** option below the **Email Body** decides whether Fluent Forms sends the email at all. A conditional shortcode only changes the text inside the email.

A conditional shortcode has three key parameters:

- Field
- Condition
- Value

> [!Note]
> You need all three parameters. If you leave one out, the shortcode shows nothing.

### Field

The **field** parameter sets which form input the shortcode checks. Use the field's **Name Attribute**. You can find it in the field's **Advanced Options** in the form editor.

For example, you have a [radio button field](/radio-field) and want to show a message only when the user selects **"Yes"**. Write:

```
[ff_if field="input_radio" is="equal" to="yes"]
    Glad to hear that you loved our product!
[/ff_if]
```

To show a different message when the user selects **"No"**, write:

```
[ff_if field="input_radio" is="equal" to="no"]
    Thanks for using our product. We are working on improvement.
[/ff_if]
```

To check a part of a field with several inputs, such as the first name in a **Name Fields** field, join the field name and the part with a dot. Do not use square brackets, because they break the shortcode.

```
[ff_if field="names.first_name" is="equal" to="Sam"]
    Welcome back, Sam!
[/ff_if]
```

### Conditions

The second parameter is the condition. Use one of these types:

| Condition | Description |
|---|---|
| equal | Matches exactly |
| not_equal | Does not match |
| greater_than | Checks if the value is more than the given number |
| less_than | Checks if the value is less than the given number |
| greater_or_equal | Checks if the value is more than or equal to the given number |
| less_or_equal | Checks if the value is less than or equal to the given number |
| starts_with | Checks if text starts with a certain word |
| ends_with | Checks if text ends with a certain word |
| contains | Checks if text includes a word or phrase |
| not_contains | Checks if text does NOT include a word |

Add the condition with **is="Your Condition Here"**. If you use a condition that is not in the list, the shortcode shows nothing.

For a field that saves several values, such as a [checkbox field](/checkbox-field), **equal** matches when the saved values include your value.

### Value

The value parameter sets what the field is compared against. Add it with **to="Your Value Here"**.

For example, a dropdown field named **feedback** has three options: **Great**, **Okay**, and **Bad**. Turn on **Show Values** in the field's **Options** to see the value each option saves. Here the values are **great**, **okay**, and **bad**. To show content when the user selects **Great**, enter the value exactly as the field saves it. The final shortcode is:

```
[ff_if field="feedback" is="equal" to="great"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

![Show Value](/images/advanced-developer/shortcodes/conditional-shortcodes/show-values-option-04.webp)

> [!Note]
> The **equal**, **not_equal**, and **starts_with** conditions check the exact capitalization. The value **great** does not match **Great**. Copy the value from the field's options in the form editor.

You can also compare a field with the value of another field. Use the **{inputs.field_name}** smart code as the value. For example, `to="{inputs.feedback}"` compares the field with what the user entered in the **feedback** field.

### Showing Different Messages

You can use as many conditional shortcodes as you need. For example, to show different messages based on user feedback:

```
[ff_if field="feedback" is="equal" to="great"]
    Thank you for your positive feedback!
[/ff_if]
```

```
[ff_if field="feedback" is="equal" to="okay"]
    Thanks for your response! Let us know how we can improve.
[/ff_if]
```

```
[ff_if field="feedback" is="equal" to="bad"]
    We're sorry to hear that. We'll work to improve!
[/ff_if]
```

Only the message whose condition matches appears. You can also use smart codes and other shortcodes inside the content, such as `{inputs.your_name}`.

### Nested Condition

To **check two conditions** at the same time, use a **nested shortcode**. Put an **[ff_sub_if]** shortcode inside an **[ff_if]** shortcode. The nested shortcode uses the same three parameters (**field**, **is**, **to**).

For example, if the user selected **yes** and gave a rating **greater than 2**, you want to show them an extra text. Use **field="ratings"**, **is="greater_than"**, and **to="2"** in the nested shortcode. The final shortcode is:

```
[ff_if field="input_radio" is="equal" to="yes"]

    Glad to hear that you loved our product.

    [ff_sub_if field="ratings" is="greater_than" to="2"]

        Also, we want to thank you for your valuable rating.

    [/ff_sub_if]

[/ff_if]

[ff_if field="input_radio" is="equal" to="no"]

    Thanks for using our product. We are working on improvement.

[/ff_if]
```

> [!Note]
> Use **[ff_sub_if]** only inside an **[ff_if]** shortcode. Do not put an **[ff_if]** inside another **[ff_if]**, and do not use **[ff_sub_if]** on its own. These do not work.

## Example Results

Suppose a form has a radio field named **input_radio**, a ratings field named **ratings**, and a dropdown field named **feedback**. You add all the shortcodes above to the confirmation message. After a user submits the form, the confirmation message shows only the matching text:

- **yes**, rating **4**, feedback **great:** "Glad to hear that you loved our product. Also, we want to thank you for your valuable rating. Thank you for your positive feedback!"
- **yes**, rating **2**, feedback **okay:** "Glad to hear that you loved our product. Thanks for your response! Let us know how we can improve."
- **no**, rating **1**, feedback **bad:** "Thanks for using our product. We are working on improvement. We're sorry to hear that. We'll work to improve!"

That's all about Conditional Shortcodes in Fluent Forms. These shortcodes help you personalize messages and make your forms more interactive.
