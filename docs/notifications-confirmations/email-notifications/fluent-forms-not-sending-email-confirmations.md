# Email Confirmations Not Sending

Sometimes, **Fluent Forms** users experience email deliverability issues (i.e., their email is not sending to the destination). This means their form users may not receive confirmation emails or other expected notifications. A couple of factors can contribute to email not sending issues.

This article will guide you through troubleshooting and fixing the email deliverability issue with Fluent Forms notifications, ensuring that emails are sent and received properly.

## Check Email Notification

The very first troubleshooting you can do is check whether your **Email Notification** setting is enabled. To learn how to ensure the email notification is enabled, follow the steps below – 

Navigate to **Forms** from the **Fluent Forms Navbar** and click the **Settings** of your desired form where you encountered the email deliverability issue.

![Open Settings Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/1.-open-desired-form-settings-scaled.webp)

Once you are on the form’s **Settings & Integrations** page, open the **Email Notifications** tab from the left side, and you will see all of the **Email Notifications** you added.

Now, if your desired email notification is showing **Disabled**, turn on the **Toggle** switch and the notification will be **Enabled**. 

> [!Note]
> To learn more about setting up email notifications, see [Admin/User Email Notifications](/how-to-setup-adminuser-email-notifications).

![Enable Email Notification Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/2.-enable-email-notification-scaled.webp)

## Check Submission Logs

Check the **Submission Logs** (which record all submission activities of a form in one place) for the form experiencing email confirmation issues. This may help you determine why the email was not sent to the destination.

Now, click the **Entries** of a chosen form where you faced the issue, and you will get all the submission entries for this particular form.

![Open Entries Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/3.-Open-desired-form-entries-scaled.webp)

Now, open the submission entry you want to check by clicking the **Eye Icon** under the **Actions** column. To learn more about **Form Entries**, see [Managing Entries in Fluent Forms](/managing-entries-in-fluent-forms).

![Open Submission Entry Fluent Forms Not Sending](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/4.-open-desired-submission-entry-scaled.webp)

Once you open the desired entry page, scroll down, and you will get your desired **Submission Logs** for this particular form submission.

> [!Note]
> To learn more about submission activity logs and API calls, see [Activity Logs](/fluent-forms-activity-logs) and [API Logs](/fluent-form-api-logs).

Now, you can see a message as **Email Notification broadcasted** (i.e., the email is successfully triggered, and Fluent Forms is working as it should).

![Submission Logs Fluent Forms](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/5.-Submission-logs-of-a-form-scaled.webp)

If the form fails to trigger an email notification, you will see an error message with a "**Failed**" status under the **Submission Logs**, explaining the reason for the error.

![Failed Message Fluent Forms](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/6.-Failed-message.webp)

But if the form successfully triggers the email notification and sends it to the destination, you will see a "**Success**" status under the **Submission Logs.**

![Sucess Message Fluent Forms](/images/notifications-confirmations/email-notifications/fluent-forms-not-sending-email-confirmations/7.-Sucess-message.webp)

## Check SMTP for Emails

We always recommend using an SMTP plugin in your WordPress site for better email deliverability. You can try out [FluentSMTP](https://wordpress.org/plugins/fluent-smtp/), a free SMTP plugin that does not require any license. FluentSMTP ensures real-time email delivery, making sure all emails reach users' inboxes efficiently. It uses your chosen SMTP server to send emails in batches and can resend emails if they get blocked.

>[!Note]
> To learn how to install and activate FluentSMTP in your WordPress Site, read this [Documentation](https://fluentsmtp.com/docs/installing-fluent-smtp/).
> Additionally, to learn how to connect an external server with FluentSMTP, refer to this [Documentation](https://fluentsmtp.com/docs/configurable-email-delivery-providers/).

### Test Email Deliverability with FluentSMTP

FluentSMTP provides an **Email Test** feature that allows you to verify whether your SMTP connection is working correctly. By sending a test email, you can confirm that your website is able to send emails successfully and ensure proper email delivery.

For detailed instructions on using the Email Test feature, please refer to the related [documentation](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#email-test).

To learn more about FluentSMTP and its features, watch the video below.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/GxHY9ZVGvL8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
