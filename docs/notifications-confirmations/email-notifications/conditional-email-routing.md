---
description: "Fluent Forms lets you set up additional Conditional Email Routing, similar to Conditional Email Notifications except it allows you to send emails to…"
---

# Conditional Email Routing

**Fluent Forms** lets you set up additional **Conditional Email Routing**. It works like [Conditional Email Notifications](/conditional-email-notification), but it sends emails to different recipients based on user responses or specific events.

This guide shows you how to configure **Email Routing** so notifications go to different recipients.

## Conditional Email Routing

Go to **Forms** in the top navbar. Click **Edit** on the form where you want to set the conditions to open its **Editor**.

![Editor Fluent Forms](/images/notifications-confirmations/email-notifications/conditional-email-routing/1.-desired-Form-Editor-2-scaled.webp)

Click **Configuration** in the top bar and open **Email Notifications** under **Responses** in the left rail.

Turn on the default **Admin Notification** with its toggle. Then click the **Settings Icon** to set conditions.

Or click **Add Notification** to create a new one. To learn how to add a notification to a form, read [Admin & User Email Notifications](/setup-adminuser-email-notifications).

This guide uses the existing notification as an example.

![Settings Integration Email Notification Add Notification Conditional Email Routing](/images/notifications-confirmations/email-notifications/conditional-email-routing/2.-Settings-Integration-Email-Notification-Add-new-notification-1-scaled.webp)

### Configuring Email Routing

On the **Email Notification** settings page of your form, select **Configure Routing** from the **Send to** options. Additional options, similar to conditional logic, appear.

#### Setting Condition/s

When you select **Configure Routing**, click **Add a routing rule** to add an **Email Address**, a field to check, its **Operator**, and the corresponding **Value**. The selected parameter triggers the action only if the condition is met.

Each routing rule reads from left to right:

- **Email Address:** Enter the address that receives the notification.
- **If** field: Select the **input field** to check.
- **Operator:** Select how to compare the field.
- **Value:** Enter the value to match.

The notification goes to the address when the condition is met.

> For example, set two email routes "admin@gmail.com" and "moderator@gmail.com", choose "Country" as the field, use "equal" as the operator, and enter "United States" and "Bangladesh" as the values. When users from the United States submit the form, Fluent Forms sends the notification to admin@gmail.com. For users from Bangladesh, it sends the notification to moderator@gmail.com.

To add a condition, click the **Plus Icon**. To delete a condition, click the **Minus Icon** in the right corner.

Click **Save** to activate the conditions.

![Configure Routing Option Conditional Email Routing](/images/notifications-confirmations/email-notifications/conditional-email-routing/3.-Configure-Routing-option-scaled.webp)
