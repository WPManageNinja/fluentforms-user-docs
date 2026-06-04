# Conditional Email Notification in Fluent Forms

**Fluent Forms** offers the “**[Conditional Logic](/docs/set-up-forms-with-conditional-logic-in-fluent-forms)**” feature, which sends email notifications to the specified email address after each form submission based on particular action triggers according to set conditions. This article will guide you through setting up the **Conditional Email Notification** in **Fluent Forms**.

## Conditional Email Notification

To learn how to set conditional logic for email notifications, follow the steps below – 

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set the conditions.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

![Editor Fluent Forms](/images/notifications-confirmations/email-notifications/conditional-email-notification-in-fluent-forms/1.-desired-Form-Editor-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Email Notifications** tab. 

First, you can **Enable** the default **Admin Notification** by **toggling it on.** Then**,** open its settings using the **Settings Icon** to set conditions based on your needs.

Or, create a new one by clicking the **+ Add Notification** button. To learn how to add a new email notification to a specific form, read this [Documentation](/docs/how-to-setup-adminuser-email-notifications).

**For example**, I used the existing notification to show you the whole process. 

![Settings Integration Email Notification Add Notification Conditional Email Notification](/images/notifications-confirmations/email-notifications/conditional-email-notification-in-fluent-forms/2.-Settings-Integration-Email-Notification-Add-new-notification-scaled.webp)

### Enabling Conditional Logic

Once you are on the **Email Notification** settings page of your desired form, scroll down to the **Conditional Logics** feature, and check the **Enable conditional logic** box.

#### Setting Condition/s

Once you enable the option, you can specify the **Parameter**, its **Operator**, and the corresponding **Value**.

Plus, you can choose whether **All** or **Any** of your conditions should match to trigger the actions. **Remember**, the selected parameter will trigger the action only if the condition is met.

In the “**Parameter**” field (first field), select an **input field** that needs to correspond with the value provided in the “**Value**” field (last field) and set an option in the “**Operator**” field (middle field). The parameter will trigger the action if the condition is met.  

> For example, I selected "Email" and "Country" as the parameters, used "Contains" and "Equals" as the operators, and entered "@gmail.com" and "United States" as the corresponding values. As a result, when users from the United States with an email address containing @gmail.com submit the form, a notification will be sent to the specified email address.

This way you can add as many conditional logics as you need by clicking the **Plus Icon** and delete any conditions by clicking the **Minus Icon** in the right corner. 

Once you complete, click the **Save Settings** button to make the condition/s functional.

![Enable Conditional Logics](/images/notifications-confirmations/email-notifications/conditional-email-notification-in-fluent-forms/3.-Enable-Conditional-Logics-.webp)
