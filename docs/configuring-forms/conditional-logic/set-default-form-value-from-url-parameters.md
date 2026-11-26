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

Add the input field that should take its value from the URL parameter, or select an existing one. This example uses the **Email field**. Then expand the **Advanced Options** section.

![Unnamed](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/unnamed-2-4.webp)

## Enable GET Parameter for Field

Click the **Three-dot Icon** of the **Default Value** field. On **Dropdown**, **Radio**, and **Checkbox** fields, this setting is called **Dynamic Default Value**. Select the first option, **Populate by GET Param**. This is one of the [Dynamic Default Value](/dynamic-default-value) options for input fields.

Fluent Forms inserts `{get.<Name Attribute>}`, using the field's **Name Attribute**. Here the Name Attribute is `email`, so the value is `{get.email}`. The text after `get.` is the parameter key you use in the URL. If you change the Name Attribute later, update the key in your URL too.

![URL Populate](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/URL-populate-01-1-scaled.webp)

Repeat these steps for other fields. This example also uses a **Numeric Field** for age. Set its default value to **Populate by GET Param** as well. Its Name Attribute is `numeric_field_2`, so the value is `{get.numeric_field_2}`. To use a shorter key such as `age`, change the Name Attribute to `age` before you pick **Populate by GET Param**. **Copy** the form **shortcode** for later use.

![Age Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/age--scaled.webp)

Then **paste** the shortcode into the page or post.

![Table Parameter Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/table-of-parameter-.webp)

## Create a Pre-Filled URL

To fill in form values automatically when users visit a page, build a **URL** with GET parameters.

**URL Format:** `yourwebsite.com/form-page/?fieldname=value`

Replace `fieldname` with the field's **Name Attribute**. The key must match the text after `get.` exactly.

**Example:** For a form with an **Email** field (`email`) and a **Numeric Field** (`numeric_field_2`), the URL looks like this:

`https://yourdomain.com/your-page/?email=mnb@mail.com&numeric_field_2=90`

- `?` starts the query string.

- `numeric_field_2=90` assigns the value 90 to the age (Numeric) field.

- `email=mnb@mail.com` assigns mnb@mail.com to the Email field.

- Use `&` to add multiple parameters.

**Result:** When users visit this URL, Fluent Forms fills the **Email** and age fields with the provided values. You can use as many parameters as you need.

![URL Parameter F](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/Url-parameter-f-scaled.webp)

### URL Parameter on your Landing Page

You can set a default form value from a URL parameter on your **Landing Page** the same way. The landing page URL already starts with `?ff_landing=ID`, so add each extra parameter with `&`, for example `?ff_landing=10&email=mnb@mail.com`. Do not add a second `?`. To learn more about landing pages, read the [Dedicated Landing Page in Fluent Forms](/dedicated-landing-page) documentation.

![Set Default Form Value from URL Parameters step](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/333-scaled.webp)
