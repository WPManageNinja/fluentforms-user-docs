# Set Default Form Value from URL Parameters

[Fluent Forms](https://wordpress.org/plugins/fluentform/) allows you to set input values using the URL GET parameters feature. This feature lets you populate input fields automatically, which can be useful for advanced users and dynamically pre-filling form fields. 

This article guides you on how to set default form values from URL parameters in Fluent Forms.

## Add or select the Field

Go to **Forms** from the top navbar and **open** the **Editor** page of the form you want to set the default form value via URL parameters. Then, click the **Edit** button to access the **Editor** page of the form you wish to modify.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

Add the input fields where the value must be set from the URL parameter or select the existing one. In this case, it’s the **Email field**. Then, go to **Advanced Options** from the dropdown.

![Unnamed](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/unnamed-2-4.webp)

## Enable GET Parameter for Field

Click the **Three-dot** **Icon** of the **Default Value** field. Then, select the first option, **Populate by GET Param**. Don’t forget the **Name Attribute**, which is email in this case.

![URL Populate](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/URL-populate-01-1-scaled.webp)

Follow the same steps for other fields. In my example, another field name is **Age**, and I am also setting its default value to **Populate by GET parameter**. **Copy** the form **shortcode** for later use.

![Age Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/age--scaled.webp)

After that, **paste** it into the desired **page** or **post**.

![Table Parameter Fluent Forms](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/table-of-parameter-.webp)

## Create a Pre-Filled URL

To automatically fill in form values when users visit a page, construct a **URL** with GET parameters.

**URL Format: yourwebsite.com/form-page/?fieldname=value**

**Example:** For a form with **Email** (email) and **Age** (age) fields, the URL would be:

https://yourdomain.com/your page/?**email**=mnb@mail.com&**age**=90

- ? starts the query string.

- age=90 assigns the value 90 to the Age field.

- &email=mnb@mail.com assigns mnb@mail.com to the Email field.

- Use "&" to add multiple parameters.

**Result**: When users visit this URL, the **Email** and **Age** fields will automatically be populated with the provided values. You may use as many parameters as you need.

![URL Parameter F](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/Url-parameter-f-scaled.webp)

### URL Parameter on your Landing Page

You can also set a default form value from a URL parameter on your **Landing Page** as same way. To know more about the landing page in fluent form, read this [article](/docs/dedicated-landing-page-in-fluent-forms).

![Set Default Form Value from URL Parameters step](/images/configuring-forms/conditional-logic/set-default-form-value-from-url-parameters/333-scaled.webp)
