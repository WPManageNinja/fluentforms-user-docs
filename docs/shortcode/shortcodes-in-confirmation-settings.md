# Shortcodes in Confirmation Settings

Fluent Forms provides **Smart Shortcodes** that allow users to dynamically display submitted data on the Confirmation Page, emails, PDFs, Custom posts, and **Quiz** submissions. 

This article explains each available shortcode and how it functions within Fluent Forms.

So, let's get started.

## Input Options

These shortcodes can be used in **email notifications, confirmation messages, PDFs,** and **custom post submissions**.

| ShortCode | Description |
|---|---|
| {inputs.names} | Displays the full name field. |
| {inputs.names.first_name} | Retrieves the first name from the name field. |
| {inputs.names.last_name} | Retrieves the last name from the name field. |
| {inputs.email} | Displays the email address entered by the user. |
| {inputs.description} | Shows the message input field (a textarea where users enter text). |
| {inputs.payment_input} | Shows the payment item selected or entered in the form. |
| {inputs.payment_method} | Displays the payment method selected by the user. |
| {form_title} | Shows the title of the form. |
| {all_data} | Displays all submitted data from the form |
| {all_data_without_hidden_fields} | Displays all submitted data but excludes hidden fields. |

## Label Options

Label Shortcodes dynamically display the **field names** from the form, making them useful for **emails, PDFs,** and **automated messages**.

| ShortCode | Description |
|---|---|
| {labels.names} | Shows the label for the Name field. |
| {labels.names.first_name} | Displays the label for the First Name field. |
| {labels.names.last_name} | Displays the label for the Last Name field. |
| {labels.email} | Shows the label for the Email field. |
| {labels.description} | Displays the label for the Your Message field. |
| {labels.payment_input} | Shows the label for the Payment Item field. |
| {labels.payment_method} | Display the label of the Payment Method |

## General SmartCodes

These shortcodes dynamically display **WordPress-related** and **user-specific** details.

| ShortCode | Descriptions |
|---|---|
| {wp.admin_email} | Displays the email address of the site administrator from WordPress settings. |
| {wp.site_url} | Retrieves the URL of the website. |
| {wp.site_title} | Displays the site title. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Displays the current date in the format MM/DD/YYYY ( 04/25/1991). |
| {date.d/m/Y} | Displays the current date in the format DD/MM/YYYY ( 25/04/2020). |
| embed_post.ID} | Displays the ID of the post/page where the form was submitted. |
| {embed_post.post_title} | Displays the title of the post/page where the form was submitted. |
| {embed_post.permalink} | Displays the URL of the post/page where the form was submitted. |
| {http_referer} | Retrieves the HTTP referrer URL. |
| {user.ID} | Displays the ID of the logged-in user. |
| {user.display_name} | Displays the display name of the logged-in user. |
| {user.first_name} | Displays the first name of the logged-in user. |
| {user.last_name} | Displays the last name of the logged-in user. |
| {user.user_email} | Displays the email address of the logged-in user. |
| {user.user_login} | Displays the username of the logged-in user. |
| {browser.name} | Displays the browser name of the logged-in user. |
| {browser.platform} | Displays the operating system of the logged-in user. |
| {random_string.your_prefix} | Generates a random string (prefix can be customized). Useful for unique identifiers. |

## Entry Attributes

These shortcodes display **form submission details** dynamically. These include-

| ShortCode | Description |
|---|---|
| {submission.id} | Displays the unique ID assigned to each form submission. |
| {submission.serial_number} | Shows a serial number for submissions. |
| {submission.source_url} | Captures the URL where the form was submitted. |
| {submission.user_id} | Displays the WordPress user ID of the logged-in user who submitted the form. |
| {submission.browser} | Shows the browser used by the submitter. |
| {submission.device} | Identifies whether the form was submitted from a desktop, mobile, or tablet. |
| {submission.status} | Displays the current status of the form entry (Pending, Approved, Rejected). |
| {submission.created_at} | Shows the date and time when the form was submitted. |
| {submission.admin_view_url} | Provides a direct link to view the submission in the admin panel. |
| {submission.currency} | Displays the currency used in payment forms. |
| {submission.payment_method} | Shows the payment method used ( PayPal, Stripe, Credit Card). |
| {submission.payment_status} | Indicates whether the payment was successful, pending, or failed. |
| {submission.total_paid} | Show the Total Paid amount. |
| {submission.payment_total} | Displays the Total Amount. |

## Payment Details

These shortcodes display **transaction details** dynamically in emails, confirmation messages, PDFs, and reports.

| ShortCode | Description |
|---|---|
| {payment.receipt} | Generates a payment receipt for the transaction. |
| {payment.summary} | Displays a summary of the transaction, including key details. |
| {payment.order_items} | Shows a table of purchased items in an order. |
| {payment.payment_status} | Specify whether the payment was successful, pending, or failed. |
| {payment.payment_total} | Displays the total amount paid for the order. |
| {payment.payment_method} | Shows the payment method used (PayPal, Stripe, Credit Card) |

## PDF

| ShortCode | Description |
|---|---|
| {pdf.download_link} | Generates a downloadable PDF link for users. Admins can restrict access or share encrypted URLs. |

## Post

These shortcodes display **post-related information** dynamically.

| ShortCode | Description |
|---|---|
| {post.ID} | Displays the unique ID of the post |
| {post.post_title} | Displays the title of the post where the form is submitted. |
| {post.post_permalink} | Generates the URL of the post where the form is submitted. |

## Quiz

| ShortCode | Description |
|---|---|
| {quiz_result} | Display the results of the Quiz. |

## Submission & Field Specific Shortcode

If you want to show a specific form submission’s specific entry using a shortcode, now you can add that manually in the Fluent Forms shortcode.

`[[ff_entry form_id='1' entry_id='{submission.id}' field='url' is_html=false]]`

Smart Shortcodes in Fluent Forms allow you to display **dynamic content** based on user inputs, payments, and WordPress-related data. If you need **customized confirmation pages, automated email notifications,** or **PDF reports**, these shortcodes make it easy to use your forms.
