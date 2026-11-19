---
description: "Fluent Forms offers the “Conditional Logic” feature, which sends email notifications to the specified email address after each form submission based on…"
---

# Conditional Email Notification

**Fluent Forms** offers the “**[Conditional Logic](/set-up-forms-with-conditional-logic)**” feature, which sends an email notification only when the submission meets the conditions you set (Pro). This guide shows you how to set up a **Conditional Email Notification**. To send emails to different recipients based on user responses, see [Conditional Email Routing](/conditional-email-routing).

## Conditional Email Notification

Go to **Forms** in the top navbar. Click **Edit** on the form where you want to set the conditions to open its **Editor**.

![Editor Fluent Forms](/images/notifications-confirmations/email-notifications/conditional-email-notification/1.-desired-Form-Editor-scaled.webp)

Click **Configuration** in the top bar and open **Email Notifications** under **Responses** in the left rail.

Turn on the default **Admin Notification** with its toggle. Then click the **Settings Icon** to set conditions.

Or click **Add Notification** to create a new one. To learn how to add a notification to a form, read [Admin & User Email Notifications](/setup-adminuser-email-notifications).

This guide uses the existing notification as an example.

![Settings Integration Email Notification Add Notification Conditional Email Notification](/images/notifications-confirmations/email-notifications/conditional-email-notification/2.-Settings-Integration-Email-Notification-Add-new-notification-scaled.webp)

### Enabling Conditional Logic

> [!Note]
> Conditional logic in email notifications is available in **Fluent Forms Pro**.

On the **Email Notification** settings page of your form, scroll down to **Conditional Logics** and check the **Enable conditional logic** box.

#### Setting Condition/s

When you enable the option, you can set the **Parameter**, its **Operator**, and the corresponding **Value**.

You can also choose whether **All** or **Any** of your conditions must match to send the notification. The selected parameter triggers the action only if the condition is met.

- **Parameter:** The first field. Select the **input field** to check against the value.
- **Operator:** The middle field. Select how to compare the parameter and the value.
- **Value:** The last field. Enter the value to compare against.

> For example, select "Email" and "Country" as the parameters, use "contains" and "equal" as the operators, and enter "@gmail.com" and "United States" as the corresponding values. When users from the United States with an email address containing @gmail.com submit the form, Fluent Forms sends the notification to the specified email address.

To add a condition, click the **Plus Icon**. To delete a condition, click the **Minus Icon** in the right corner.

Click **Save** to activate the conditions.

![Enable Conditional Logics](/images/notifications-confirmations/email-notifications/conditional-email-notification/3.-Enable-Conditional-Logics-.webp)
