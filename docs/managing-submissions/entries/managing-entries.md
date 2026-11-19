---
description: "Fluent Forms allows you to track, view, and manage all your form submissions without opening each form individually."
---

# Managing Entries

Fluent Forms lets you track, view, and manage all your form submissions without opening each form. Fluent Forms saves every user submission in the backend, and the **All Forms** screen shows a summary of all submissions.

This article shows you how to view, manage, and export entries in Fluent Forms.

## Entries Dashboards

To open the Entries Dashboard, go to the **Fluent Forms Dashboard** and click the **Entries** tab in the top menu. All your form entries appear in one place.

The dashboard shows all global entries, with summary cards for **Total Entries**, **Unread Entries**, and **Read Entries**. Use the **All Forms** dropdown to filter entries by form. Use the tabs above the table (**All**, **Unread**, **Read**, **Favorites**, **Spam**, and **Trashed**) to organize your submissions. With [Admin Approval](/admin-approval-feature) (Pro) on, extra **Unapproved**, **Approved**, and **Declined** tabs appear. On forms with payments, you can also filter by payment status and payment method.

Click the **Search** icon in the table toolbar to find specific form entries. The global **Entries** screen shows the last 30 days by default.

To bring in entries from another source, go to **Tools** > **Import Entries**. To learn more, see [Importing Entries in Fluent Forms](/importing-entries).

![Entries Dashboards Fluent Forms](/images/managing-submissions/entries/managing-entries/entries-dashboards-scaled.webp)

### Show Chart

The **Entries** **Dashboard** shows a bar chart of your entries by date. Use the **Show Chart** toggle at the top to display or hide it. For deeper, field-level charts, see [Visual Representation of Form Entries](/visual-representation-of-form-entries).

Turn the **Show Chart** toggle off at any time to remove the chart view.

![Show Chart Fluent Forms](/images/managing-submissions/entries/managing-entries/show-chart-scaled.webp)

### Filter

The **Date Range** field is in the top right corner of the entries dashboard.

Click it to filter your submissions by **Today**, **Last week**, **Last month**, or **Last 3 months**. You can also pick a start date and an end date on the calendar to view entries from a specific period.

![Entries Filter Fluent Forms](/images/managing-submissions/entries/managing-entries/Entries-filter-scaled.webp)

To show more entries at once, adjust the **per page** option in the pagination at the bottom of the page.

![Pagination Fluent Forms](/images/managing-submissions/entries/managing-entries/Pagination-scaled.webp)

## View Submitted Form Entries

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/o8b2ZZl7Lxc" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

You can open a form's entries in three ways:

First, go to **Fluent Forms** → **Forms** in your WordPress dashboard. Click the **Entries** icon on the form row.

![Entries icon on the Forms list](/images/managing-submissions/entries/managing-entries/unnamed-1.webp)

Second, open the form editor by clicking your form. Then click **Entries** in the top bar.

![Entries tab in the form editor top bar](/images/managing-submissions/entries/managing-entries/unnamed-2.webp)

Third, click **Entries** in the Fluent Forms top menu. Use the **All Forms** dropdown to select a form and view its entries.

![Entries screen with the All Forms dropdown](/images/managing-submissions/entries/managing-entries/unnamed-3-2.webp)

## Managing Entries

With submitted entries, you can manage, highlight, edit, and process them individually or in bulk.

**Status tabs:** The tabs above the table show **All**, **Unread**, **Read**, **Favorites**, **Spam**, and **Trashed** entries. Click a tab to sort your entries.

**Advanced Filter:** For more specific filtering, turn on the **Advanced Filter** with the toggle button. For a focused walkthrough, see [How to Search and Filter Form Entries](/search-and-filter-form-entries). Then click **Add** to set your filter options. You can filter entries by **Inputs**, **User**, and **Entry Attributes**. Click **Filter** to apply them.

Conditions inside a group are joined with AND. Click **Add OR Group** to add another group of conditions. To remove a filter, click the **Delete** icon. To **clear** **all filters** at once, click **Clear Filters**.

![Advanced Filter](/images/managing-submissions/entries/managing-entries/advanced-filter-01-scaled.webp)

**Search:** Click the **Search** icon and type in the **Search Entry** box to find entries.

**Columns:** Click the **Columns** icon to choose which columns to display.

**Date Range:** Select a specific date or date range at the top of the page to filter your entries.

To view the details of an entry, click its ID. To mark an entry as a favorite, click its **star** icon. To switch to a denser table, use the **Compact View** option. Use the **With Notes** filter to show only entries that have notes.

### Bulk Actions and Row Actions

Select one or more entries with the checkboxes, then choose an action from the **Select bulk action** dropdown. Actions include marking entries as **Read**, **Unread**, **Spam**, or **Trashed**, adding or removing **Favorites**, **Print Entries**, **Resend Notifications** (Pro), and **Delete Permanently**.

To act on a single entry, click the **three-dot** menu at the end of the row. You can move an entry to the trash with **Move to Trash**, bring it back with **Restore**, or delete it permanently from the **Trashed** tab.

![Entries Advanced Filter](/images/managing-submissions/entries/managing-entries/entries-advanced-filter-scaled.webp)

When you open an entry, the detailed page shows all the information at a glance.

**Form Entry Data:** The main entry details, such as the **Name** and **Email** of the person who submitted the form.

**Submission Notes:** Click **Add Note** to add notes about the submission. Use notes to track important information or follow-up actions.

**Submission Logs:** All logs related to the submission, with **General** and **API Calls** tabs. They help you track updates and changes over time.

**Submission Info:** All the detailed information about the submission. To edit the entry, click the **Edit** icon (Pro). For details, see [Edit User Submitted Entries With Fluent Forms](/edit-user-submitted-entries). From this section you can also:

- Click the pencil icon beside **User** to change the submitter.
- Check **Show empty fields** to display fields the user left blank.
- Click the **</>** icon to view the entry as JSON.
- Click **View Front-end Entry** to open the [front-end entry view](/frontend-entry-view).

The details also show the source URL, browser, device, and user IP. If you use FluentCRM, a FluentCRM profile card appears for the submitter.

**Resend and Replay (Pro):** Use the resend option to send the email notification again to the configured recipients or a custom email address. You can also replay an integration feed. Check **Check Conditional Logic when replaying a feed action** to apply the feed's conditions again.

**Payment Details:** For entries with a payment, the entry page shows **Order Details** and **Payment Details**, such as the card's last four digits, transaction ID, and billing and shipping address. Click **Edit Transaction** to update a transaction. For subscriptions, you can see the billing cycle and times billed, and click **Cancel Plan** to cancel. To record a refund, enter the **New Refund Amount** and a **Refund Note**. The amount cannot exceed the payment total. Recording a refund does not refund the money. You must refund the payment at your payment provider.

To change the submission status, use the **Change Status to** dropdown.

**Print Entries:** To print an individual form submission, click the **Print** icon at the top right of the page. Use the **arrow** buttons next to it to move to the previous or next entry.

![Single entry details page](/images/managing-submissions/entries/managing-entries/unnamed-4.webp)

### Export Entries

You can export entries individually or in bulk, in **CSV**, **XLSX**, **ODS**, or **JSON** format.

You can export all entries, only favorites, or only unread submissions for analysis or sharing.

To export from a form's **Entries** page, click **Export** at the top, then choose **Export as CSV**, **Export as Excel (xlsx)**, **Export as ODS**, or **Export as JSON Data**.

![Export options on the Entries page](/images/managing-submissions/entries/managing-entries/unnamed-5.webp)

The **Export** button appears on a form's **Entries** page, not on the global **Entries** screen. It opens a **Select fields for export** dialog with **Select All** and **Other Fields**. You can also choose fields from **Tools** > **Export Entries**. If you don't select any fields, Fluent Forms exports the default entry columns instead of every field in the form.

Next steps:

- Learn how to [search and filter entries](/search-and-filter-form-entries).
- Learn how to [edit entries](/edit-user-submitted-entries).
- View [visual reports](/visual-representation-of-form-entries).
