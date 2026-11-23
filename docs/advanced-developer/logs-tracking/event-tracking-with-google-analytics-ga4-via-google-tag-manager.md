---
description: "Fluent Forms integrates with Google Analytics (GA4) through Google Tag Manager (GTM)."
---

# Event Tracking with Google Analytics (GA4) via Google Tag Manager

**Fluent Forms** integrates with **Google Analytics (GA4)** through **Google Tag Manager (GTM)**. This setup helps you track form engagement and improve conversions. This guide applies to GA4.

> [!Note]
> This GTM and GA4 setup tracks **standard forms**. The snippet in this guide looks for the `frm-fluent-form` class, which [Conversational Forms](/create-a-conversational-form) do not use, so it does not track them.

## Overview

This guide shows you how to track your website's forms. The tracking answers two questions:

1. How many people see your form?
2. How many people fill it out and submit it?

The answers replace guesswork. You can tell whether your contact form is too long or whether people find your signup form.

With this setup, you can:

- **Find the real problem:** See whether many people view a form but leave without submitting it.
- **Test changes:** Remove a field or change your **Submit** button text, and see whether more people finish the form.
- **Improve results:** Use what you learn to get more contacts, signups, or quotes.

## How the Three Tools Work Together

Three tools work together:

1. **Fluent Forms:** The form on your WordPress site. When someone views or submits the form, Fluent Forms sends a signal.
2. **Google Tag Manager (GTM):** The middleman. GTM catches the signals from Fluent Forms and collects the form's name and the action (viewed or submitted).
3. **Google Analytics 4 (GA4):** Your dashboard for the results. GTM sends the data to GA4. You can then see, for example, that 100 people saw the 'Request a Quote' form this week and 10 submitted it.

![Tag Manager Fluent Forms](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Tag-Manager.webp)

### GTM Elements for Fluent Forms Events

|  | Tags | Triggers | Variables |
|---|---|---|---|
|  | 2 | 1 | 3 (2 Required, 1 Optional) |
| Type | cHTML, Google Tag (GA4) | Custom Event | 2 Data Layer, 1 JavaScript |

Types of Tags, Triggers, and Variables:

- **Tags:** Custom HTML, Google Tag (GA4)
- **Triggers:** Custom Event
- **Variables:** 2 Data Layer Variables, 1 JavaScript Variable

The built-in variable **[Event]** identifies the type of Fluent Forms event.

## 1. Creating Fluent Forms Variables

> [!Note]
> In Google Tag Manager, **variables** store values from your website (such as data layer properties) so tags and triggers can use them.

1. In your Google Tag Manager workspace, open the **Variables** tab.
2. In the **User-Defined Variables** area, click **New**.

![Add GTM Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Add-gtm-Variable-wpmn.webp)

3. In the popup, click the **edit icon** to configure the variable.

![Configure Variable](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/varriable-configur-3.webp)

4. In the new window, choose **Data Layer Variable** as the variable type.

![Choose Data Layer Variable](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/choose-data-layer-varriable-4.webp)

Set the **Variable** properties like this:

| Title | FluentFormID |
|---|---|
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | FluentFormID |
| Data Layer Version | Version 2 |

![Add GTM Datalayer Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-datalayer-variable-wpmn.webp)

Create **another variable** with this configuration:

| Title | FluentFormEventAction |
|---|---|
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | eventAction |
| Data Layer Version | Version 2 |

![Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager step](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/3-1.webp)

[Optional] Create **another variable** to show the **Form Page Title**:

![Add Js GTM Variable Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-js-gtm-variable-wpmn.webp)

## 2. Creating Fluent Forms Trigger

In Google Tag Manager, a **Trigger** sets the conditions that make a **Tag** fire. Create a custom trigger that fires on a Fluent Forms event, such as a form view or submission.

Go to **Triggers** in your GTM workspace and click **New** to open the trigger editor.

![Add GTM Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-trigger-wpmn.webp)

Use these settings for the trigger:

| Title | FluentFormActivitiesEvent |
|---|---|
| Event Type | Custom Event |
| Event Name | FluentFormActivities |
| Trigger Fires on | All Custom Events |

![Add GTM Event Action Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-event-action-trigger-wpmn.webp)

## 3. Creating Fluent Forms Tags

The Trigger is the "when". The **Tag** is the "what": the task Google Tag Manager runs when a trigger fires. You create two tags that work together. A **Custom HTML** tag pushes the form event data from your website, and a **Google Tag** sends it to GA4.

Create the **Custom HTML** tag first. Go to **Tags** and click **New**.

![Add GTM Tags Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-gtm-tags-wpmn.webp)

Select **Custom HTML** as the **Tag Type** and paste the snippet below into the GTM code editor:

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

After you paste the code, open **Triggering** and select **Page View – All Pages** as the firing trigger:

![Add Chtml Tag Trigger Wpmn Fluent Forms Event Tracking](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-cHTML-tag-trigger-wpmn-1.webp)

Create one last tag. It fetches the event data, forwards it to Google Analytics, and formats the properties it sends.

Go to **Tags** again and select **Google Tag**:

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-1-scaled.webp)

Enter your **Google Analytics 4 Measurement ID** (steps [below](#google-analytics-4-measurement-id)), then configure the settings variable.

![Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager step](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/2-1-scaled.webp)

| Title | FluentForms – GA4 |
|---|---|
| Tag Type | Google Tag |
| Measurement ID | G-XXXXXXXX [Follow instructions below to grab this code] |

Set these **Fields to Set**:

| debug_mode | true | For Debug View. Remove it after testing. |
|---|---|---|
| EventType | {{Event}} | Select as Variable |
| EventAction | {{FluentFormEventAction}} | Select as Variable |
| FormID | {{FluentFormID}} | Select as Variable |
| FormName | {{FluentFormName}} | Select as Variable |

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-3-scaled.webp)

### Google Analytics 4 Measurement ID

Follow these steps to get the **Google Analytics 4 Measurement ID**.

1. In your **Google Analytics Dashboard**, click **Admin** (the **gear icon** in the bottom left of the page).

![GTM GA4 Property Wpmn 1024x535](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-property-wpmn-1024x535.webp)

2. Select the target account, or create a new one.
3. Select an existing **Property**, or create a new one.
4. Under the property name, open **Data Streams**.

![GTM GA4 Add Stream Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/add-stream.webp)

5. If your website is not configured yet, create a new **Data Stream** as **Web**. Enter the **URL** without a protocol and a **Stream Name**.

![GTM Setup Stream Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-setup-stream-wpmn-67.webp)

6. [Optional] Click the gear icon and enable **Page Views** only. Other data types add noise to Google Analytics for this setup.

![GTM GA4 Enhanced Option Wpmn77](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-enhanced-option-wpmn77.webp)

7. Click **Save**. The Data Stream details appear. Copy the **Measurement ID** and paste it into **Google Tag Manager**.

![GA4 Measurementid Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/ga4-measurementID-wpmn-87.webp)

Return to the last tag you created. Select its trigger the same way you did for **Custom HTML**.

> [!Note]
> Select the **FluentFormActivitiesEvent** trigger you created in the previous step.

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-4-97-scaled.webp)

The setup is complete. Test your changes in **Preview Mode**, or make them live with **Publish** in the **Workspace**.

![Google Tag Manager](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/Google-Tag-Manager-1-100-scaled.webp)

Enter a meaningful **Version Name** so you can identify this work later and revert to it if needed.

![GTM GA4 Version Name Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-version-name-wpmn-101.webp)

After you confirm the setup works, publish your workspace. Open a page with a form, submit it with test data, and check **Events** in Google Analytics.

## 4. Final Result in Google Analytics

The sample form used for testing looks like this:

![GTM Ga Test Sample Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga-test-sample-form-wpmn-102.webp)

When the page loads, the form sends a **FormView** event to GTM without any interaction. Your configuration picks it up, and the event appears in **Google Analytics**.

You can expand the **page_view** event for further details.

![GTM GA4 Formview Event Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-formview-event-wpmn-103.webp)

![GTM GA4 Formview 4events Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-formview-4events-wpmn-104.png)

After you submit the form, a second event appears: **FormSubmitted**.

![GTM GA4 Submission Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-form-submission-wpmn-105.webp)

Expand the **Event Data** sections to see more details:

![GTM GA4 Event Details Wpmn](/images/advanced-developer/logs-tracking/event-tracking-with-google-analytics-ga4-via-google-tag-manager/gtm-ga4-event-details-wpmn-106.webp)

Google Analytics 4 also has **Debug View**. Because you enabled **debug_mode** in the GA4 configuration tag, you can explore live events there:

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

Google Analytics now receives events for all Fluent Forms on your website. To analyze conversions inside WordPress alongside GA4, see [Submission Reports](/submission-reports). For help, see [How to Get Support](/get-support).
