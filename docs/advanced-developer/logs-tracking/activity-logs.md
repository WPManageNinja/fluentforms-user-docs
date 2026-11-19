---
description: "The Activity Logs feature keeps a record of actions performed in all your forms created through Fluent Forms in one place, making it easier to find…"
---

# Activity Logs

The **Activity Logs** feature records the actions performed in all your Fluent Forms forms in one place. You can find information about specific actions without opening each form entry. This article gives you a quick overview of **Activity Logs** in **Fluent Forms**.

## Activity Logs

> [!Note]
> This list shows entry activity only when an **action** was recorded for that submission.

Go to **Tools** (under **More**) in the Fluent Forms top menu and click **Activity Logs** in the left menu. The page lists the activity logs of all your forms.

![Tools Activity Logs](/images/advanced-developer/logs-tracking/activity-logs/1.-Tools-Activity-Logs-scaled.webp)

## Filter Your Activity Logs

To see the activity of a particular form or action, click **Advanced Filter** at the top right of the table. It shows four filters. Use **Choose columns** to show or hide table columns. The filters are:

1. Form
2. Source
3. Status
4. Date

### 1. Form

Filter activities by **Form Title**. The list shows only forms that have actions recorded.

Select a form from the **Select Form** dropdown to see only its activity.

![Filter Option Fluent Forms](/images/advanced-developer/logs-tracking/activity-logs/2.-Form-filter-option-scaled.webp)

### 2. Source

Use **Select Component** to filter your logs by the component that created them. The options depend on the actions that occurred and the integration feeds you added to your forms. For example:

- [Email Notification](/setup-adminuser-email-notifications)
- Payment (see [Payments Overview](/payments-overview))
- User Registration (see [User Registration](/create-a-wordpress-user-registration-form))

For example, to review payment issues in one form or in all forms, click the **Arrow Icon** in **Source** and select **Payment**. The list then shows all payment-related activity. You can filter any other form activity the same way.

![Source Filter Option](/images/advanced-developer/logs-tracking/activity-logs/3.-Source-filter-option-scaled.webp)

### 3. Status

Filter your activity logs by **Status**: **Info**, **Success**, **Error**, or **Failed**.

![Status Filter Option](/images/advanced-developer/logs-tracking/activity-logs/4.-Status-filter-option-scaled.webp)

### 4. Date

Filter your activities by date. Pick a preset such as Today, Yesterday, Last week, or Last month, or choose a custom range.

![Date Filter Option](/images/advanced-developer/logs-tracking/activity-logs/5.-Date-filter-option-scaled.webp)

The GIF below shows all the filters in use.

![Four Filter Dropdowns Drift Video](/images/advanced-developer/logs-tracking/activity-logs/6.-Four-filter-dropdowns-Drift-video.gif)

### Check Single Activity Log

To see the activity data of a form briefly, without opening the individual entries, click the **ID** number of a log in the first column. The log message expands under the row.

![Brief Actitivity Check By Arrow Icon](/images/advanced-developer/logs-tracking/activity-logs/7.-Brief-actitivity-check-by-Arrow-Icon.webp)

For more detail on a specific entry, click the **entry number** under the **Submission ID** column.

![Click Submission ID Fluent Forms Activity Logs](/images/advanced-developer/logs-tracking/activity-logs/8.-Click-the-desired-Submission-Id.webp)

This page shows the full submission information for that **Entry**.

To see the general activity log, scroll down to **Submission Logs** and click the **General** tab. To review only integration-related calls, see the [API Logs](/api-logs).

If an action did not complete, use the **Resend Email Notification** and **Entry Actions** icon buttons in the **Submission Logs** header to run it manually.

![Detailed Entry Info Log](/images/advanced-developer/logs-tracking/activity-logs/9.-Detailed-entry-info-of-a-log-scaled.webp)

### Delete Activity Logs

To delete an activity log, click the **Delete Icon** under the **Action** column.

![Delete Single Activity Log](/images/advanced-developer/logs-tracking/activity-logs/10.-Delete-Single-activity-log-scaled.webp)

To delete several logs at once, select the logs individually or click the **Checkbox** before the **ID** column to select all. Then click **Delete Selected Logs**. Fluent Forms deletes all selected logs.

![Delete Bulk Fluent Forms](/images/advanced-developer/logs-tracking/activity-logs/11.-Delete-in-bulk-scaled.webp)
