---
description: "Sometimes, Fluent Forms users experience email deliverability issues (i.e., their email is not sending to the destination)."
---

# Email Confirmations Not Sending

Sometimes emails from Fluent Forms do not reach the destination. Your visitors may not receive confirmation emails or other notifications. Several factors can cause this.

This guide shows you how to troubleshoot and fix email deliverability issues with Fluent Forms notifications.

## Check Email Notification

First, check that your **Email Notification** setting is enabled.

Go to **Forms** in the **Fluent Forms Navbar**, open the form with the issue, and click **Configuration**.

![Open Settings Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/1.-open-desired-form-settings-scaled.webp)

Open **Email Notifications** under **Responses** in the left rail. The page lists all the **Email Notifications** you added.

If your notification shows **Inactive**, turn on its **Toggle** switch. The notification becomes **Enabled**.

> [!Note]
> To learn more about setting up email notifications, see [Admin/User Email Notifications](/setup-adminuser-email-notifications).

![Enable Email Notification Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/2.-enable-email-notification-scaled.webp)

## Check Submission Logs

Check the **Submission Logs** of the form with the email issue. They record all submission activity of a form in one place and can show why the email was not sent.

Click **Entries** on the form with the issue. The page lists all submission entries for that form.

![Open Entries Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/3.-Open-desired-form-entries-scaled.webp)

Click the **Eye Icon** under the **Actions** column to open the entry you want to check. To learn more about **Form Entries**, see [Managing Entries in Fluent Forms](/managing-entries).

![Open Submission Entry Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/4.-open-desired-submission-entry-scaled.webp)

On the entry page, scroll down to see the **Submission Logs** for this submission.

> [!Note]
> To learn more about submission activity logs and API calls, see [Activity Logs](/activity-logs) and [API Logs](/api-logs).

The message **Email Notification broadcasted** means Fluent Forms triggered the email successfully.

![Submission Logs Fluent Forms](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/5.-Submission-logs-of-a-form-scaled.webp)

If the form fails to trigger an email notification, the **Submission Logs** show an error message with a "**Failed**" status that explains the reason.

![Failed Message Fluent Forms](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/6.-Failed-message.webp)

If the form triggers the email notification and sends it to the destination, the **Submission Logs** show a "**Success**" status.

![Success Message Fluent Forms](/images/notifications-confirmations/email-notifications/not-sending-email-confirmations/7.-Sucess-message.webp)

## Check SMTP for Emails

Use an SMTP plugin on your WordPress site for better email deliverability. You can try [FluentSMTP](https://wordpress.org/plugins/fluent-smtp/), a free SMTP plugin that needs no license. FluentSMTP delivers emails in real time. It uses your chosen SMTP server to send emails in batches and can resend emails if they get blocked.

>[!Note]
> To install and activate FluentSMTP on your WordPress site, read the [FluentSMTP installation guide](https://fluentsmtp.com/docs/installing-fluent-smtp/).
> To connect an external server with FluentSMTP, read the [supported email providers guide](https://fluentsmtp.com/docs/configurable-email-delivery-providers/).

### Test Email Deliverability with FluentSMTP

FluentSMTP has an **Email Test** feature that checks whether your SMTP connection works. Send a test email to confirm that your website can send emails.

For detailed instructions, see the [Email Test documentation](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#email-test).

To learn more about FluentSMTP and its features, watch the video below.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/GxHY9ZVGvL8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
