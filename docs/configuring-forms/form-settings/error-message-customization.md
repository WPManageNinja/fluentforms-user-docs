# Error Message Customization

Error messages in [Fluent Forms](https://wordpress.org/plugins/fluentform/) help users fix mistakes when filling out a form. You can set a **global error message** for general issues. If a field has its own custom message, it will show that message first. This makes it easier for users to understand what to fix.

This guide will show you how to customize your error message easily with Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/3N0DMrth1NA" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configure error messages for a field

Go to **Forms** from the Fluent Forms navbar and select the form where you want to configure error messages.

![Fluent Forms form list](/images/configuring-forms/form-settings/error-message-customization/edit-form-01-6-scaled.webp)

Navigate to the **Input Customization** tab for the field where you want to display an **error message**.

Ensure **Yes** is selected for **Required**. If **No** is selected, the field will not show a validation error. With **Yes** selected, the default **global error message** applies.

![Global error message](/images/configuring-forms/form-settings/error-message-customization/global-error-message-01-scaled.webp)

To use a custom message for this field only, turn off **Global Error Message**. Enter your text in **Custom Error Message**, then click **Save Form**.

![Custom error message](/images/configuring-forms/form-settings/error-message-customization/custom-error-message-02-scaled.webp)

### Global error message settings

Manage validation messages site-wide from **Global Settings**. Open **General Settings**, scroll to **Layout**, then find **Validation Messages**.

#### Validation messages

These messages appear when something goes wrong while filling out a form. The global error message is used if a field has no custom message. Use **{labels.current_field}** to insert the field label automatically.

* **Required Field:** Shown when a required field is left empty.
* **Email:** Appears if the email address format is incorrect.
* **Numeric:** Shown when a number is required but the input is not valid.
* **Minimum:** Appears if the value entered is too low.
* **Maximum:** Appears if the value entered is too high.
* **Digits:** Shown when the number includes more digits than allowed.
* **URL:** Shown when the website link format is not valid.
* **Allowed Image Types:** Appears if the uploaded image is not in an accepted format.
* **Allowed File Types:** Shown when the uploaded file is not in the allowed format.
* **Maximum File Size:** Appears if the uploaded file is too large.
* **Maximum File Count:** Shown when too many files are uploaded.
* **Valid Phone Number:** Shown when the phone number format is incorrect.

![Validation messages settings](/images/configuring-forms/form-settings/error-message-customization/global-error-message-scaled.webp)

#### Error message position

Error messages can be shown in different places on the form. Go to **Settings & Integrations → Form Layout** (under **Settings**), then choose a position. Learn more in the [Form Layout Settings](/form-layout-settings) documentation.

* **Below Input Fields:** Shows the error directly below the blank or invalid field.
* **Stacked after Form:** Lists all validation errors below the form after submit.

Click **Save Settings** when finished.

![Error message position](/images/configuring-forms/form-settings/error-message-customization/error-message-position-03-scaled.webp)

Here is a front-end **preview** of how error messages appear to visitors.

![Error message preview](/images/configuring-forms/form-settings/error-message-customization/error-message-preview-04-1024x505.webp)

Customizing error messages in Fluent Forms helps users spot and fix issues quickly, so form submission feels smoother and clearer. To guide users before they make mistakes, you can also add a [help message](/help-message-customization) to any field.
