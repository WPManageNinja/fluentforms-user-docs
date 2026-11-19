---
description: "Double opt-in email is a dynamic feature of fluent forms. When users submit their email to your list, a double opt-in email is required to confirm their…"
---

# Set up Double Opt-in emails

Double opt-in email is a Fluent Forms feature (Pro). When users submit their email to your list, a double opt-in email asks them to confirm it.

When they subscribe to your newsletter, they must click the confirmation link in that email to verify their email address.

This guide shows you how to set up double opt-in emails.

## Enable Double Opt-in Options

Click the **Global Settings** gear icon in the Fluent Forms top bar. In the left rail, select **Double Opt-in Settings**.

Turn on the **Enable Double Optin Module** toggle.

![Double Optionemail Settings](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/double-optionemail-settings-02-scaled.webp)

## Configure Global Double Opt-In Settings

Configure the double opt-in email with these options.

 * **Global Email Subject:** Set the subject line for the double opt-in confirmation email.

 * **Global Optin Email Body:** Enter the message content for the confirmation email. It can be a simple message or a fully designed HTML email. If you customize the body, include the `#confirmation_url#` smartcode. It becomes the confirmation link.

 * **Send Email as RAW HTML Format:** Enable this option to paste your custom HTML design, so the email appears as you designed it.

### Sender and Reply-To Settings

 * **From Name:** Enter the name the notification email is sent from.

 * **From Email:** Enter the email address the notification email is sent from.

 * **Reply To:** Enter the reply-to address for the notification email.

If the Reply To field is empty, the email sent by your domain's SMTP works by default.

### Delete Unconfirmed Entries

Use **Automatically delete unconfirmed entries** to remove entries that are never confirmed. Set the number of days in **Delete after (Days)**. The default is 5 days.

> [!Note]
> The confirmation message does not work if your outgoing email and reply-to address are already set to different addresses than the ones you set in Fluent Forms. Make sure they match.

![Fluent Forms](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/03-3-scaled-2.webp)

## Enable Double Opt-in on Your Form

Go to **Forms** in the top navbar. Create a new form or open an existing one.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

This example uses a contact form.

![Contact Fluent Forms](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/contact-form-scaled.webp)

Click **Configuration** in the top bar. Under **Security & Validation** in the left rail, open **Double Opt-in**. Turn on **Enable Double Optin Confirmation before Form Data Processing**.

 * **Primary Email Field:** Select the email field to verify. Fluent Forms sends the double opt-in email to the address in this field.

 * **Initial Success Message:** Enter the text the user sees right after the initial form submission.

You can also enter your own email body.

 * **Email Type:** Choose **As Per Global Settings** (the settings you set earlier) or **Customized Double Opt In Email**.

To skip double opt-in for logged-in users, check **Disable Double Opt-In for the logged-in-user**.

To skip double opt-in for contacts already subscribed in FluentCRM, check **Disable Double Opt-in if the contact email is subscribed in FluentCRM**. To connect your forms with the CRM, see the [FluentCRM Integration](/fluentcrm-integration) documentation.

Click **Save**.

![Set up Double Opt-in emails step](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/04-3-scaled.webp)

The flow works as follows:

1. The visitor submits the form and sees the **Initial Success Message**.
2. The visitor receives the double opt-in email and clicks the confirmation link.
3. Fluent Forms processes the entry and shows the form confirmation. You can edit it in the [Confirmation Message](/setup-form-submission-confirmation-message) settings.

![Initial Message](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/initial-message-02.webp)

When the visitor confirms, your email notifications run and the process is complete.

![Email Confirmation](/images/notifications-confirmations/email-notifications/set-up-double-opt-in-emails/email-confirmation-01.webp)
