---
description: "The integration between Twilio and Fluent Forms allows you to send SMS notifications when a form is submitted in real time. It's easy and hassle-free."
---

# Twilio Integration

The Twilio integration sends an SMS notification in real time when a form is submitted. This guide shows you how to connect Twilio with Fluent Forms on your WordPress site.

> [!Note]
> **Twilio** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/5KeCiA1Q10c" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Enable the Twilio Module

Go to **Integrations** in the Fluent Forms Navbar, search for **Twilio**, and find the **Twilio** integration module.

Turn on the **Toggle** button to enable Twilio, then click the **Manage** button that appears on the right side.

![Enable Twilio](/images/integrations/other-apps/twilio-integration/enable-twilio-01-scaled.webp)

Once you enable Twilio, Fluent Forms asks for the **Number From**, **Account SID**, and **Auth Token**. **Number From** is your Twilio sender number. Fluent Forms needs it to send the SMS.

![Twilio Integration step](/images/integrations/other-apps/twilio-integration/02-8-scaled.webp)

### Get the Twilio Credentials

Log in to your **Twilio** account dashboard to find the **Account SID** and **Auth Token**.

> [!Note]
> If you do not have a Twilio account, [create one here](https://www.twilio.com/try-twilio) and register your application.

**Copy** the **Account SID** and **Auth Token**.

![Twilio Credentials](/images/integrations/other-apps/twilio-integration/Twilio-credentials-03-scaled.webp)

## Connect Twilio with Fluent Forms

1. Return to the **Twilio Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Enter your Twilio **Number From**.
3. Paste the **Account SID** and **Auth Token** you copied.
4. Click **Save**.

![Global Settings](/images/integrations/other-apps/twilio-integration/Globql-settings-04-scaled.webp)

Fluent Forms shows a success notice that your Twilio credentials are verified. Click **Disconnect Twilio** to disconnect the **Twilio API**.

![Disconnect Twilio](/images/integrations/other-apps/twilio-integration/Disconnect-Twilio-05-scaled.webp)

## Integrate the Form with Twilio

After you set up the credentials, go to **All Forms** and select the form you want to connect to Twilio, or create a new one.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings Twilio Integration](/images/integrations/other-apps/twilio-integration/settings-form-06-scaled.webp)

Open the form's **Configuration** page, click **Add New Integration**, and select **SMS Notification by Twilio** from the drawer.

![SMS Notification By Twilio](/images/integrations/other-apps/twilio-integration/sms-notification-by-twilio-07-scaled.webp)

### Configure Twilio with Fluent Forms

* **Name:** Enter a name for the feed.
* **To:** Enter the recipient’s phone number. This can be the user who submitted the form or a team member.
* **SMS Text:** Write the message you want to send. Use dynamic fields to personalize the SMS.
* **Conditional Logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See the [Documentation](/set-up-forms-with-conditional-logic).
* **Status:** Enable this option to activate the feed.

Click **Save** when the setup is done. Twilio is now connected to this form.

![Add Twilio Integration Feed](/images/integrations/other-apps/twilio-integration/Add-New-Twilio-Integration-Feed-08-scaled.webp)

The feed now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn off **Enable** to disable the feed.

![Success Twilio Integration](/images/integrations/other-apps/twilio-integration/Success-twilio-integration-09-scaled.webp)

### Preview of Integrated Twilio

You can check the SMS sent for each submission in the **Entries** section of the form.

![Entries](/images/integrations/other-apps/twilio-integration/entries-10-1-scaled.webp)

> [!Warning]
> On a Twilio trial account, verify your phone number before sending a test SMS.
