---
description: "Error messages in Fluent Forms help users fix mistakes when filling out a form. You can set a global error message for general issues."
---

# Error Message Customization

Error messages tell visitors what to fix. You can set a **global error message** for general issues. If a field has its own custom message, Fluent Forms shows that message first.

This guide shows you how to customize error messages.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/3N0DMrth1NA" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Configure error messages for a field

Go to **Forms** in the Fluent Forms navbar and select the form you want to configure.

![Fluent Forms form list](/images/configuring-forms/form-settings/error-message-customization/edit-form-01-6-scaled.webp)

Click the field that needs an **error message**, then open the **Customize** tab in the right panel.

Turn on the **Required** toggle. If it is off, the field shows no validation error. If it is on, the default **global error message** applies.

![Global error message](/images/configuring-forms/form-settings/error-message-customization/global-error-message-01-scaled.webp)

To use a custom message for this field only, turn off the **Global Error Message** toggle. A **Custom Error Message** box appears. Enter your text, then click **Save**.

![Custom error message](/images/configuring-forms/form-settings/error-message-customization/custom-error-message-02-scaled.webp)

## Global error message settings

Manage validation messages site-wide from **Global Settings**. Go to **General → Validation Messages**.

### Validation messages

These messages appear when something goes wrong while a visitor fills out a form. Fluent Forms uses the global message when a field has no custom message. Use **{labels.current_field}** to insert the field label automatically.

* **Required Field:** Shows when a required field is empty.
* **Email:** Shows when the email address format is incorrect.
* **Numeric:** Shows when a number is required but the input is not valid.
* **Minimum:** Shows when the value is too low.
* **Maximum:** Shows when the value is too high.
* **Digits:** Shows when the number has more digits than allowed.
* **Url:** Shows when the website link format is not valid.
* **Allowed Image Types:** Shows when the uploaded image is not in an accepted format.
* **Allowed File Types:** Shows when the uploaded file is not in an allowed format.
* **Maximum File Size:** Shows when the uploaded file is too large.
* **Maximum File Count:** Shows when too many files are uploaded.
* **Valid Phone Number:** Shows when the phone number format is incorrect.

![Validation messages settings](/images/configuring-forms/form-settings/error-message-customization/global-error-message-scaled.webp)

### Error message position

Error messages can appear in different places on the form. To set the default for every form, go to **Global Settings → General → Layout** and choose **Error Message Placement**: **Below Field** or **Error Summary**.

To set the position for one form, open the form and go to **Configuration → Appearance → Form Layout**. Choose a position under **Error Message Position**. Learn more in the [Form Layout Settings](/form-layout-settings) documentation.

* **Below Input Fields:** Shows the error directly below the blank or invalid field. The global page calls this **Below Field**.
* **Stacked after Form:** Lists all validation errors below the form after submit. The global page calls this **Error Summary**.

Click **Save**.

![Error message position](/images/configuring-forms/form-settings/error-message-customization/error-message-position-03-scaled.webp)

This front-end **preview** shows how error messages appear to visitors.

![Error message preview](/images/configuring-forms/form-settings/error-message-customization/error-message-preview-04-1024x505.webp)

To guide users before they make mistakes, add a [help message](/help-message-customization) to the field.
