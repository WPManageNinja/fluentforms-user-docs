---
description: "Learn how to find, copy, edit, enable, and delete the integration feeds of a form in Fluent Forms."
---

# How to Manage Integration Feeds

An **integration feed** sends a form's submission data to a connected app, such as an email marketing tool or a CRM. This guide shows you where to find the feeds of a form and how to copy, edit, enable, or delete a feed. You will also learn how to copy a feed to create a similar one without starting from scratch.

## Open the Integration Feeds of a Form

1. Go to **Forms** in the **Fluent Forms Navbar**.
2. Select your form and click **Configuration** in the form's top bar.
3. Open **Integrations & Add-ons** from the left menu and click **Integrations**.

The **All Form Integrations** page lists every feed of the form. Each row shows the feed **Title** with its **Enabled** badge, the **Integration** it belongs to, a toggle, and icons to edit, copy, or delete the feed.

To create a new feed, click **Add New Integration** and select the integration from the drawer.

![All Form Integrations](/images/integrations/manage-integration/integration-feed-1.webp)

## Copy an Integration Feed

Copy a feed when you need a similar feed for the same form. For example, you can send the same submission to another list or apply different conditional logic.

1. Find the feed you want to copy on the **All Form Integrations** page.
2. Click the **Copy** icon on the right of the feed row. The tooltip reads **Duplicate integration feed**.
3. The feed settings open with all the values already filled in.
4. Change the **Name** and any other setting you need.
5. Click **Save**.

Fluent Forms creates a new feed. The original feed stays the same.

> [!Note]
> Copy a feed only within the same form. Field mappings use the fields of that form, so check the **Map Fields** section after you change anything.

![Copy a Feed](/images/integrations/manage-integration/duplicate-feed-2.webp)

## Enable, Edit, or Delete a Feed

- **Enable or disable:** Use the toggle on the right of the feed row to turn a feed on or off without deleting it.
- **Edit:** Click the **Edit** (pencil) icon on the feed row to change the feed settings, then click **Save**.
- **Delete:** Click the **Trash** icon on the feed row to remove a feed you no longer need.

## Next Steps

- Check failed feeds in **Submission Logs** and [API Logs](/api-logs).
- Run a feed only when conditions are met with [Conditional Logic](/set-up-forms-with-conditional-logic).
