---
description: "Fluent Forms shortcodes allow you to add different types of form displays on your WordPress site. They help make your website dynamic and user-friendly."
---

# Shortcodes Overview

Fluent Forms shortcodes let you display forms and show form data anywhere on your WordPress site. This page lists every shortcode and smart code group, explains what each one does, and links to the full guide.

## Form Shortcodes

Use these shortcodes in pages, posts, and widgets.

- `[fluentform id="1"]` displays a form. You can also set `title`, `css_classes`, `permission`, `permission_message`, `type` (`classic` or `conversational`), and `theme`.
- `[fluentform_modal]` (Pro) shows a form in a popup. See [Modal Popup (Lightbox)](/modalpopuplightbox).
- `[fluentform_survey]` (Pro) shows survey and poll results. See [Surveys and Polls](/surveys-and-polls).
- `[fluentform_payments]` (Pro) lists the payments and subscriptions of the logged-in user. Use `type`, `payment_statuses`, and `subscription_statuses` to filter the list. See [Configure Payment Settings](/configure-payment-settings).
- `[fluentform_payment_view]` (Pro) shows the payment receipt on the page you select in the payment settings. See [Configure Payment Settings](/configure-payment-settings).

## Helper Shortcodes

Helper shortcodes help you collect and filter data, count submissions, check payment statuses, and display URL parameters. Learn more in [Using Helper Shortcodes](/using-helper-shortcodes).

- `[fluentform_info]` shows form details, submission counts, and remaining submission slots.
- `[ff_entry]` shows a specific field value from an entry.
- `[ff_get]` shows a value from a URL parameter, for example after a form submission.

## Conditional Shortcodes (Pro)

`[ff_if]` and `[ff_sub_if]` show or hide content based on user selections. They work with fields, values, and conditions. You can use them in confirmation messages, email notifications, and PDFs. Read [Conditional Shortcodes](/conditional-shortcodes) for a deeper understanding.

## Smart Codes

Smart codes are placeholders such as `{user.email}` that Fluent Forms replaces with real values.

- Use them inside the form editor to collect data from your website, user profiles, post details, and FluentCRM contacts. Read [Smart Codes in the Form Editor](/form-editor-smart-codes).
- Use them in confirmation messages, emails, and PDFs to show submitted data. Read [Shortcodes in Confirmation Settings](/shortcodes-in-confirmation-settings).

For default values that change with another field, see [Dynamic Default Value](/dynamic-default-value).

Explore the powerful and easy-to-use shortcode features in Fluent Forms.
