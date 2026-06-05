# Conditional Email Routing

**Fluent Forms** lets you set up additional **Conditional Email Routing**, similar to [Conditional Email Notifications](/docs/conditional-email-notification-in-fluent-forms) except it allows you to send emails to different recipients based on user responses or specific events.

This article will guide you through **Configuring** the **Email Routing** with specified conditions to send **Email Notifications**. 

## Conditional Email Routing

To learn how to configure conditional email routing, follow the steps below – 

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set the conditions.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

![Editor Fluent Forms](/images/notifications-confirmations/email-notifications/conditional-email-routing/1.-desired-Form-Editor-2-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Email Notifications** tab. 

First, you can **Enable** the default **Admin Notification** by **toggling it on.** Then, open its settings using the **Settings Icon** to set conditions based on your needs.

Or, create a new one by clicking the **+ Add Notification** button. To learn how to add a new email notification to a specific form, read this [Documentation](/docs/how-to-setup-adminuser-email-notifications).

**For example**, I used the existing notification to show you the whole process. 

![Settings Integration Email Notification Add Notification Conditional Email Routing](/images/notifications-confirmations/email-notifications/conditional-email-routing/2.-Settings-Integration-Email-Notification-Add-new-notification-1-scaled.webp)

### Configuring Email Routing

Once you are on the **Email Notification** settings page of your desired form, select **Configure Routing** from the **Send to** option, and additional options similar to conditional logic will appear. 

#### Setting Condition/s

Once you enable the option, you can specify the different **Email Routes** to send notification, **Parameter**, its **Operator**, and the corresponding **Value**. **Remember**, the selected parameter will trigger the action only if the condition is met.

First, in the “**Send To**” (first field), provide the email address where you want to send email notifications. 

Then, in the “**Parameter**” field (second field), select an **input field** that needs to correspond with the value provided in the “**Value**” field (fourth field) and set an option in the “**Operator**” field (third field). The parameter will trigger the action if the condition is met.  

> For example, I set two different email routes "admin@gmail.com" and "moderator@gmail.com", chose "Country" as the parameter, used "Equals" as the operator, and entered "United States" and "Bangladesh" as the corresponding values. As a result, when users from the United States submit the form, a notification will be sent to admin@gmail.com, and for users from Bangladesh, the notification will be sent to moderator@gmail.com.

This way you can add as many conditional logics as you need by clicking the **Plus Icon** and delete any conditions by clicking the **Minus Icon** in the right corner.

Once you complete, click the **Save Settings** button to make the condition/s functional.

![Configure Routing Option Conditional Email Routing](/images/notifications-confirmations/email-notifications/conditional-email-routing/3.-Configure-Routing-option-scaled.webp)
