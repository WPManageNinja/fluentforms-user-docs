---
description: "Fluent Forms, one of WordPress's most powerful form builders, allows seamless integration with Google Analytics (GA4) through Google Tag Manager (GTM)."
---

# Event Tracking with Google Analytics (GA4) via Google Tag Manager

**Fluent Forms**, one of WordPress's most powerful form builders, allows seamless integration with **Google Analytics (GA4)** through **Google Tag Manager (GTM)**. This helps you track form engagement and improve conversions.

This document applies to the latest Google Analytics: GA4.

> [!Note]
> You can use this GTM and GA4 setup with **standard forms** and [Conversational Forms](/create-a-conversational-form). The same view and submit events apply to both form types.

#### Overview

This guide shows you how to set up tracking for your website's forms. The goal is simple: we want to know two main things:

1. How many people see your form.

2. How many people actually fill it out and submit it.

Knowing this is incredibly helpful because it helps you stop guessing. You can finally get answers to questions like, "Is my contact form too long and complicated?" or "Are people even finding my signup form?"

With this setup, you can:

- **See the real problem:** Find out if a lot of people are viewing a form but then giving up without submitting it.

- **Make smart changes:** Test new ideas, like removing a field or changing your **Submit** button text, and see if it actually helps more people finish the form.

- **Get better results:** Use what you learn to get more contacts, signups, or quotes from your website.

## How the Three Tools Work Together

To make this happen, we use three tools that work together as a team:

1. **Fluent Forms:** This is simply the form on your WordPress site. When someone sees the form or submits it, Fluent Forms sends out a signal.

2. **Google Tag Manager (GTM):** Think of this as the helpful middleman or a post office. Its job is to catch those signals from Fluent Forms. It grabs the important information, like the form's name and the action (whether it was viewed or submitted).

3. **Google Analytics 4 (GA4):** This is your main dashboard where you see all the results. GTM sends a neat, organized report over to GA4. This allows you to log in and easily see things like, "100 people saw the 'Request a Quote' form this week, and 10 people submitted it."

![Tag Manager Fluent Forms](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Tag-Manager.webp)

### GTM Elements for Fluent Forms Events

|  | Tags | Triggers | Variables |
|---|---|---|---|
|  | 2 | 1 | 3 (2 Required, 1 Optional) |
| Type | cHTML, GA4 Configuration | Custom Event | 2 Data Layer, 1 JavaScript |

Types of Tags, Triggers, and Variables:

- **Tags:** Custom HTML, GA4 Configuration

- **Triggers:** Custom Event

- **Variables:** 2 Data Layer Variables, 1 JavaScript Variable

A built-in variable **[Event]** will be used to identify the type of Fluent Forms events.

## 1. Creating Fluent Forms Variables

> [!Note]
> In Google Tag Manager, **variables** store values from your website (such as data layer properties) so tags and triggers can use them.

First, navigate to the **Variables** tab in your Google Tag Manager workspace. From there, find the **User-Defined Variables** area and click the **New** button to create a new variable.

![Add GTM Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Add-gtm-Variable-wpmn.webp)

A popup will appear. Click the **edit icon** to configure the variable.

![Configure Variable](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/varriable-configur-3.webp)

A new window opens. Choose **Data Layer Variable** as the variable type.

![Choose Data Layer Variable](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/choose-data-layer-varriable-4.webp)

Your **Variable** properties should look like this:

| Title | FluentFormID |
|---|---|
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | FluentFormID |
| Data Layer Version | Version 2 |

![Add GTM Datalayer Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-datalayer-variable-wpmn.webp)

Create **another variable** using the following configuration:

| Title | FluentFormEventAction |
|---|---|
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | eventAction |
| Data Layer Version | Version 2 |

![Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager step](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/3-1.webp)

[Optional] Create **another variable** using the following configuration to display the **Form Page Title**:

![Add Js GTM Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-js-gtm-variable-wpmn.webp)

## 2. Creating Fluent Forms Trigger

In Google Tag Manager, a **Trigger** defines the specific conditions that cause a **Tag** to fire. For this setup, we need to create a custom trigger that activates when it detects a Fluent Forms event, such as a form view or submission.

To do this, go to the **Triggers** section in your GTM workspace and click the **New** button to open the trigger editor.

![Add GTM Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-trigger-wpmn.webp)

Follow the settings below to create the trigger:

| Title | FluentFormActivitiesEvent |
|---|---|
| Event Type | Custom Event |
| Event Name | FluentFormActivities |
| Trigger Fires on | All Custom Events |

![Add GTM Event Action Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-event-action-trigger-wpmn.webp)

## 3. Creating Fluent Forms Tags

Now that we have our "when" (the Trigger), it's time to set up the "what" — the **Tag**. A Tag is the actual task that Google Tag Manager performs when a trigger is activated. For this project to work correctly, we will create two tags that work together.

We will use a **Google Analytics: GA4 Configuration** tag and pass form event data from the website using a **Custom JavaScript Snippet** attached to webpages, and also through Google Tag Manager itself with a **Custom HTML** tag.

Let's create the **Custom HTML** tag first:

Go to **Tags** and click **New**.

![Add GTM Tags Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-tags-wpmn.webp)

Then select **Tag Type** as **Custom HTML** and paste the snippet below into the GTM code editor:

| Title | cHTML – FluentFormsDataPush |
|---|---|
| Tag Type | Custom HTML |

```html [GTM Custom HTML]
<script>
(function($){
  var fluentForms = $('.frm-fluent-form');
  fluentForms.each(function() {
    var $form = $(this);
    var formId = $form.attr('data-form_id');
    dataLayer.push({
      'event': 'FluentFormActivities',
      'eventCategory': 'FluentForm',
      'eventAction': 'FormView',
      'FluentFormID' : formId
    });
    $form.on('fluentform_submission_success', function() {
      dataLayer.push({
        'event': 'FluentFormActivities',
        'eventCategory': 'FluentForm',
        'eventAction': 'FormSubmitted',
        'FluentFormID' : formId
      });
    });
  });
})(jQuery);
</script>
```

> [!Tip]
> Click the **copy** icon in the top-right corner of the code block to copy the full snippet, then paste it into the GTM **Custom HTML** tag editor.

![Add Chtml Tag Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-cHTML-tag-wpmn.webp)

After you insert the code, open **Triggering**, select **Page View – All Pages** as the firing trigger, as shown below:

![Add Chtml Tag Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-cHTML-tag-trigger-wpmn-1.webp)

You are almost done. Create one last tag that fetches the event data, forwards it to Google Analytics, and formats the properties that will be sent.

Go to **Tags** again and select **Google Tag**, as shown below:

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-1-scaled.webp)

Enter your **Google Analytics 4 Measurement ID** (steps [below](#google-analytics-4-measurement-id)), then configure the settings variable.

![Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager step](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/2-1-scaled.webp)

| Title | FluentForms – GA4 |
|---|---|
| Tag Type | Google Analytics: GA4 Configuration |
| Measurement ID | G-XXXXXXXX [Follow instructions below to grab this code] |

> Fields to Set:

| debug_mode | true | For Debug View |
|---|---|---|
| EventType | {{Event}} | Select as Variable |
| EventAction | {{FluentFormEventAction}} | Select as Variable |
| FormID | {{FluentFormID}} | Select as Variable |
| FormName | {{FluentFormName}} | Select as Variable |

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-3-scaled.webp)

### Google Analytics 4 Measurement ID

To get the **Google Analytics 4 Measurement ID**, follow the steps below:

Go to your **Google Analytics Dashboard** and click **Admin** (the **gear icon** in the bottom left of the page).

![GTM GA4 Property Wpmn 1024x535](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-property-wpmn-1024x535.webp)

Select the target account or create a new one with your desired details. Also select an existing **Property** if you already have one, or create a new one.

Under the property name, open **Data Streams**.

![GTM GA4 Add Stream Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-stream.webp)

Create a new **Data Stream** as **Web** if your website is not already configured. Provide an appropriate **URL** without a protocol and a **Stream Name**.

![GTM Setup Stream Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-setup-stream-wpmn-67.webp)

[Optional] Click the gear icon to select only the data you need for Fluent Forms event tracking. Enable **Page Views** only. Other data types can add unnecessary noise to Google Analytics for this setup.

![GTM GA4 Enhanced Option Wpmn77](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-enhanced-option-wpmn77.webp)

After you click **Save**, you will see the Data Stream details. Copy the **Measurement ID** and paste it into **Google Tag Manager**.

![GA4 Measurementid Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/ga4-measurementID-wpmn-87.webp)

Return to the last tag you created. When the Google Analytics settings are configured, select the trigger the same way you did for **Custom HTML**.

> [!Note]
> Select the **FluentFormActivitiesEvent** trigger you created in the previous step.

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-4-97-scaled.webp)

You are done with the setup. You can test your changes in **Preview Mode** or make them live by **Publishing** from the **Workspace**.

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-1-100-scaled.webp)

Enter a meaningful **Version Name** so you can identify this work later and revert to it if needed.

![GTM GA4 Version Name Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-version-name-wpmn-101.webp)

After you confirm the setup works for Fluent Forms, publish your workspace. Then open a page that contains a form, submit it with test data, and check **Events** in Google Analytics.

### 4. Final result in Google Analytics

The sample form used for testing looks like this:

![GTM Ga Test Sample Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga-test-sample-form-wpmn-102.webp)

After the page loads, even without any interaction, the form sends a **FormView** event to GTM. Your configuration picks it up, and the event appears in **Google Analytics**.

You can expand the **page_view** event for further details.

![GTM GA4 Formview Event Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-formview-event-wpmn-103.webp)

![GTM GA4 Formview 4events Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-formview-4events-wpmn-104.png)

After you submit the form, you will see another event: **FormSubmitted**.

![GTM GA4 Submission Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-form-submission-wpmn-105.webp)

Expand the **Event Data** sections to see more details:

![GTM GA4 Event Details Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-event-details-wpmn-106.webp)

Google Analytics 4 also includes **Debug View**. Because we enabled **debug_mode** in the GA4 configuration tag, you can explore live events there as well:

![GTM GA4 Debug View Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-debug-view-wpmn-107.webp)

## Troubleshooting

If **FormView** or **FormSubmitted** events do not show up, check the items below.

### Nothing appears in GTM or GA4

- **Publish** your GTM workspace after saving changes.
- Test in an incognito window with ad blockers turned off.
- Confirm the GTM container is on the page and clear your site cache.

### FormView works, FormSubmitted does not

- Submit the form successfully and wait for the confirmation message.
- Failed validation or spam protection blocks the `fluentform_submission_success` event.
- Test with a simple form first.

### No FormView on page load

- Set the **Custom HTML** tag trigger to **Page View – All Pages**.
- Make sure **jQuery** is loaded on the page.
- The form must use the `frm-fluent-form` class.
- Popups and page builders may load the form late — test on a normal page first.

### GTM works, GA4 is empty

- Check the **Measurement ID** in the **FluentForms – GA4** tag.
- Set the GA4 tag trigger to **FluentFormActivitiesEvent**, not **All Pages**.
- Match data layer variable names exactly: `FluentFormID` and `eventAction`.
- Use **DebugView** for live results. Standard reports can take 24–48 hours.

### Variables show as undefined

- Fix **FluentFormID** and **FluentFormEventAction** variable names in GTM.
- Remove **FormName** from the GA4 tag if you did not create that optional variable.

### Duplicate events

- Do not use GTM and a separate GA4 snippet on the same site.
- Check for multiple GTM containers or duplicate Custom HTML snippets.

### Still stuck?

Use **GTM Preview**: load a form page, check for `FluentFormActivities`, then submit and look for **FormSubmitted**. If Preview works but GA4 does not, recheck the Measurement ID and GA4 tag trigger.

That's it. You will now receive events in Google Analytics for all Fluent Forms on your website. To analyze conversions directly inside WordPress alongside GA4, see the [Submission Reports](/submission-reports). For more help, see [How to Get Support](/get-support).

Enjoy **Fluent Forms** as the most powerful form plugin for WordPress!
