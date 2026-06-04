# Fluent Form API Logs

The **API Logs** feature stores all records related to API activities in your forms in one place. It is especially useful for checking whether any particular API actions were successful, failed, or are still in progress. This article will give you a quick overview of the **API Logs** feature under **Fluent Forms**.

## API Logs

To learn where you can find the **API** **Logs** and their functionalities, follow the steps with Screenshots and GIFs below —

> [!Note]
> This list shows entry activity only when an **action** was recorded for that submission.

First, go to **Tools** from **WordPress Left Sidebar** or **Fluent Forms Navbar**, click the **API** **Logs** option in the left menu, and you can see all the API logs of your forms on this page.

![Tools API Logs](/images/advanced-developer/logs-tracking/fluent-form-api-logs/1.-Tools-API-Logs-scaled.webp)

### Filter Your API Logs

However, if you want to see activities of a particular form or action, this page has four filtering options with dropdown lists to filter your forms. These are:

1. Form

2. Source

3. Status

4. Date

#### 1. Form

In this dropdown, you will only see those forms that include an integration feed.

**For example**, I selected **Contact Form** (it includes Platformly integration feed) from the dropdown list by clicking the **Arrow Icon**, and the two **Contact Forms** available appeared.

![Filter Option](/images/advanced-developer/logs-tracking/fluent-form-api-logs/2.-Form-filter-option-1-scaled.webp)

#### 2. Source

Here, you can filter your logs based on different [integration feeds](/docs/integrations-overview), and these options you will find based on the integration occurring within the form.

**For example**,  I selected **Zapier Feed** from the dropdown list by clicking the **Arrow Icon**, and all the forms that includes Zapier Integration have appeared.

![Source Filter Option](/images/advanced-developer/logs-tracking/fluent-form-api-logs/3.-Source-filter-option-1-scaled.webp)

#### 3. Status

You also have the option to filter your API logs based on the **Status** (**Success**, **Failed**, and **Processing**)  of your Forms’ Actions related to integration.

![Status Filter Option](/images/advanced-developer/logs-tracking/fluent-form-api-logs/4.-Status-filter-option-1-scaled.webp)

#### 4. Date

With this option, you can filter your activities by selected **Dates** to see actions for specific days.

![Date Filter Option](/images/advanced-developer/logs-tracking/fluent-form-api-logs/5.-Date-filter-option-1-scaled.webp)

**To show the use of all filtering options at a glance, follow the GIF below:**

![Source Status Date Drift Video](/images/advanced-developer/logs-tracking/fluent-form-api-logs/6.-Forms-source-status-date-Drift-video.gif)

### Check Single API Log

If you want to see the API data of a specific form in a brief without checking the [individual entries](/docs/managing-entries-in-fluent-forms) in detail, click on the **Arrow Icon** just before the Submission ID.

![Single API Check](/images/advanced-developer/logs-tracking/fluent-form-api-logs/7.-Single-API-check.webp)

If you wish to view more detailed information for a specific entry, click on the desired **entry** **number** under the **Submission** **ID** column.

![Detail API Log Check](/images/advanced-developer/logs-tracking/fluent-form-api-logs/8.-Detail-API-Log-check.webp)

Here, you can see the overall detailed submission information of a user for this particular **Entry**.

To check specifically the general API Log, scroll down to the **Submission** **Logs**, click the **API Calls** tab, and you will get all the details. For non-API actions like email and payment events, check the [Activity Logs](/docs/fluent-forms-activity-logs) instead. 

If your action didn’t occur successfully, you can use the **Resend Email Notification** and **Entry Action** button to manually complete the desired action. 

![Submission Logs API Calls](/images/advanced-developer/logs-tracking/fluent-form-api-logs/9.-Submission-Logs-API-Calls-scaled.webp)

### Replay Action for API Logs

If you want to re-run an action (e.g., reprocess the integration for this entry),  you can do it by simply clicking the **Replay** button under the **Action** column.

![Replay Action Fluent Forms](/images/advanced-developer/logs-tracking/fluent-form-api-logs/10.-Replay-Action-scaled.webp)

You can also re-run all the API Logs Actions at once by clicking the **Checkbox** placed just before the **ID** column, or you can re-run by **selecting the API logs individually** based on your needs.

Then, click the **Run Selected Actions** button, and all your selected logs will be processed again.

![Replay Action Bulk](/images/advanced-developer/logs-tracking/fluent-form-api-logs/11.-Replay-action-in-bulk-scaled.webp)

### Delete API Logs

If you want to delete any API log, you can do it simply by clicking on the **Delete Icon** under the **Action** column.

![Delete Single Log](/images/advanced-developer/logs-tracking/fluent-form-api-logs/12.-Delete-single-log-scaled.webp)

You can also delete all the API Logs at once by clicking the **Checkbox** placed just before the **ID** column, or you can delete by **selecting the API logs individually** based on your needs.

Then, click the **Delete Selected Logs** button, and all your selected logs will be deleted.

![Delete Logs Bulk](/images/advanced-developer/logs-tracking/fluent-form-api-logs/13.-Delete-logs-in-bulk-scaled.webp)
