---
description: "Fluent Forms allows you to show or hide content dynamically based on user selections using conditional shortcodes."
---

# Conditional Shortcodes

**Conditional shortcodes** show or hide content based on user selections. You can use them in [**Form Confirmations**](/setup-form-submission-confirmation-message), **Email Notifications**, and **PDF Documents**. They make your messages more personal. This article explains each parameter and shows examples.

> [!Note]
> **Conditional shortcodes** require **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on). They work in confirmation messages, email notifications, and PDFs, not inside form fields.

## How to use Conditional Shortcode

To show a message based on user input, use a shortcode like this:

```
[ff_if field="input_radio" is="equal" to="yes"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

![Conditional Shortcode](/images/advanced-developer/shortcodes/conditional-shortcodes/Conditional-shortcode-01-scaled.webp)

A conditional shortcode has three key parameters:

- Field
- Condition
- Value

### Field

The **field** parameter is required. It sets which form input the shortcode checks. Use the field's **Name Attribute**, like this:

```
[ff_if field="input_radio"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

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

### Conditions

The second parameter is the condition. Use one of these types:

| Condition | Description |
|---|---|
| equal | Matches exactly |
| not_equal | Does not match |
| greater_than | Checks if the value is more than given number |
| less_than | Checks if the value is less than given number |
| greater_or_equal | Checks if the value is more than or equal to given number |
| less_or_equal | Checks if the value is less than or equal to given number |
| starts_with | Checks if text starts with a certain word |
| ends_with | Checks if text ends with a certain word |
| contains | Checks if text includes a word or phrase |
| not_contains | Checks if text does NOT include a word |

Add the condition with **is=**”**Your Condition Here**”. With the first condition as an example, the shortcode looks like this:

```
[ff_if field="input_radio" is="equal"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

### Value

The value parameter sets what the field is compared against. Add it with **to=”Your Value Here”**.

For example, a radio field has two values, ‘**ABC**’ and ‘**XYZ**’. To show content when the user selects ‘**ABC**’, enter the value exactly as the field saves it. The final shortcode is:

```
[ff_if field="input_radio" is="equal" to="ABC"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

![Show Value](/images/advanced-developer/shortcodes/conditional-shortcodes/show-value-02.webp)

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

### Nested Condition

To **check two conditions** at the same time, use **nested shortcodes**. A nested shortcode uses the same three parameters (**field**, **is**, **to**).

For example, the user selected ‘**yes**’ and gave a rating **greater than 2**, and you want to show them a text. Use **field=”ratings”**, **is=”greater_than”**, and **to=”2”** in the nested shortcode. The final shortcode is:

```
[ff_if field="input_radio" is="equal" to="yes"]

    Glad to hear that you loved our product.

    [ff_sub_if field="ratings" is="greater_than" to="2"]

        Also, we want to Thank You for your valuable Ratings.
 
    [/ff_sub_if]

[/ff_if]

[ff_if field="input_radio" is="equal" to="no"]

    Thanks for using our product. We are working on improvement.

[/ff_if]
```

