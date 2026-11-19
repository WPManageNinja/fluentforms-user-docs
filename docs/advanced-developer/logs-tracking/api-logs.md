---
description: "The API Logs feature stores all records related to API activities in your forms in one place."
---

# API Logs

The **API Logs** feature stores all records of API activity in your forms in one place. Use it to check whether an API action succeeded, failed, or is still in progress. This article gives you a quick overview of **API Logs** in **Fluent Forms**.

## API Logs

> [!Note]
> This list shows entry activity only when an **action** was recorded for that submission.

Go to **Tools** (under **More**) in the Fluent Forms top menu and click **API Logs** in the left menu. The page lists the API logs of all your forms.

![Tools API Logs](/images/advanced-developer/logs-tracking/api-logs/1.-Tools-API-Logs-scaled.webp)

## Filter Your API Logs

To see the activity of a particular form or action, click **Advanced Filter** at the top right of the table. It shows four filters. Use **Choose columns** to show or hide table columns. The filters are:

1. Form
2. Source
3. Status
4. Date

### 1. Form

This dropdown lists only forms that include an integration feed. Select a form from the **Select Form** dropdown to see only its API logs.

![Filter Option](/images/advanced-developer/logs-tracking/api-logs/2.-Form-filter-option-1-scaled.webp)

### 2. Source

Filter your logs by [integration feeds](/integrations-overview). The options depend on the integrations in your forms.

For example, select a feed such as **Webhook Feed** to see the logs of all forms that use that integration.

![Source Filter Option](/images/advanced-developer/logs-tracking/api-logs/3.-Source-filter-option-1-scaled.webp)

### 3. Status

Filter your API logs by the **Status** of your forms’ integration actions. The options depend on the statuses recorded in your logs, such as **Success**, **Failed**, and **Processing**.

![Status Filter Option](/images/advanced-developer/logs-tracking/api-logs/4.-Status-filter-option-1-scaled.webp)

### 4. Date

Filter your activities by date. Pick a preset such as Today, Yesterday, Last week, or Last month, or choose a custom range.

![Date Filter Option](/images/advanced-developer/logs-tracking/api-logs/5.-Date-filter-option-1-scaled.webp)

The GIF below shows all the filters in use.

![Source Status Date Drift Video](/images/advanced-developer/logs-tracking/api-logs/6.-Forms-source-status-date-Drift-video.gif)

### Check Single API Log

To see the API data of a form briefly, without opening the [individual entries](/managing-entries), click the **ID** number of a log in the first column. The log message expands under the row.

![Single API Check](/images/advanced-developer/logs-tracking/api-logs/7.-Single-API-check.webp)

For more detail on a specific entry, click the **entry number** under the **Submission ID** column.

![Detail API Log Check](/images/advanced-developer/logs-tracking/api-logs/8.-Detail-API-Log-check.webp)

This page shows the full submission information for that **Entry**.

To see the general API log, scroll down to **Submission Logs** and click the **API Calls** tab. For non-API actions like email and payment events, check the [Activity Logs](/activity-logs) instead.

If an action did not complete, use the **Resend Email Notification** and **Entry Actions** icon buttons in the **Submission Logs** header to run it manually.

![Submission Logs API Calls](/images/advanced-developer/logs-tracking/api-logs/9.-Submission-Logs-API-Calls-scaled.webp)

### Replay Action for API Logs

To re-run an action, such as reprocessing the integration for an entry, click the **Replay Action** icon under the **Action** column. Replay needs Fluent Forms Pro.

![Replay Action Fluent Forms](/images/advanced-developer/logs-tracking/api-logs/10.-Replay-Action-scaled.webp)

To re-run several actions at once, select the logs individually or click the **Checkbox** before the **ID** column to select all. Then click **Run Selected Action**. Fluent Forms processes all selected logs again.

![Replay Action Bulk](/images/advanced-developer/logs-tracking/api-logs/11.-Replay-action-in-bulk-scaled.webp)

### Delete API Logs

To delete an API log, click the **Delete Icon** under the **Action** column.

![Delete Single Log](/images/advanced-developer/logs-tracking/api-logs/12.-Delete-single-log-scaled.webp)

To delete several logs at once, select the logs individually or click the **Checkbox** before the **ID** column to select all. Then click **Delete Selected Logs**. Fluent Forms deletes all selected logs.

![Delete Logs Bulk](/images/advanced-developer/logs-tracking/api-logs/13.-Delete-logs-in-bulk-scaled.webp)
