---
description: "Fluent Forms allows you to set input values using the URL GET parameters feature. This feature lets you populate input fields automatically, which can be…"
---

# Set Default Form Value from URL Parameters

Fluent Forms lets you set input values with URL GET parameters. Use this to pre-fill form fields automatically.

This guide shows you how to set default form values from URL parameters.

## Add or select the Field

Go to **Forms** in the top navbar and click **Edit** on the form you want to pre-fill. This opens the **Editor**.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Add the input field that should take its value from the URL parameter, or select an existing one. This example uses the **Email field**. Then open **Advanced Options** from the dropdown.

![Unnamed](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/unnamed-2-4.webp)

## Enable GET Parameter for Field

Click the **Three-dot Icon** of the **Dynamic Default Value** field. Select the first option, **Populate by GET Param**. This is one of the [Dynamic Default Value](/dynamic-default-value) options for input fields. Note the **Name Attribute**, which is email in this case.

![URL Populate](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/URL-populate-01-1-scaled.webp)

Repeat these steps for other fields. This example also uses an **Age** field. Set its default value to **Populate by GET Param** as well. **Copy** the form **shortcode** for later use.

![Age Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/age--scaled.webp)

Then **paste** the shortcode into the page or post.

![Table Parameter Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/table-of-parameter-.webp)

## Create a Pre-Filled URL

To fill in form values automatically when users visit a page, build a **URL** with GET parameters.

**URL Format:** `yourwebsite.com/form-page/?fieldname=value`

**Example:** For a form with **Email** (email) and **Age** (age) fields, the URL looks like this:

`https://yourdomain.com/your-page/?email=mnb@mail.com&age=90`

- `?` starts the query string.

- `age=90` assigns the value 90 to the Age field.

- `email=mnb@mail.com` assigns mnb@mail.com to the Email field.

- Use `&` to add multiple parameters.

**Result:** When users visit this URL, Fluent Forms fills the **Email** and **Age** fields with the provided values. You can use as many parameters as you need.

![URL Parameter F](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/Url-parameter-f-scaled.webp)

### URL Parameter on your Landing Page

You can set a default form value from a URL parameter on your **Landing Page** the same way. To learn more about landing pages, read the [Dedicated Landing Page in Fluent Forms](/dedicated-landing-page) documentation.

![Set Default Form Value from URL Parameters step](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/333-scaled.webp)
