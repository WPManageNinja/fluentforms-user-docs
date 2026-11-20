---
description: "Fluent Forms helper shortcodes let you display submission counts, entry details, payment totals, and URL parameters anywhere on your website."
---

# Using Helper Shortcodes

Fluent Forms offers powerful helper shortcodes that enable you to display dynamic form data, including submission counts, [entry details](/managing-entries), and [payment statuses](/payment-reports), anywhere on your website. The helper shortcodes and all of their attributes are listed below.

This guide will walk you through the available shortcodes and their attributes.

## Form Info [fluentform_info]

This shortcode is used to display information about a form, including submission counts and creation dates. It always requires the form ID. You can find the form ID in the shortcode of your form, for example `[fluentform id="9"]`.

The shortcode supports these attributes:

- **id:** The form ID. Required.
- **info:** The data to show. The options are `submission_count` (default), `created_at`, `updated_at`, and `payment_total`.
- **status:** The entry status to count. The options are `all` (default), `read`, `unread`, `favourites`, and `trashed`.
- **with_trashed:** Include or exclude trashed entries. The options are `no` (default) and `yes`.
- **substract_from:** A number to subtract the submission count from. Use it to show the remaining submission slots.
- **hide_on_zero:** Hide the result when it reaches zero. The options are `no` (default) and `yes`.
- **payment_status:** The payment status to filter by. The default is `all`.
- **currency_formatted:** Show the payment total with a currency symbol. The options are `yes` (default) and `no`.
- **date_format:** The format for the `created_at` and `updated_at` dates.

> [!Note]
> The `payment_status` filter and the `payment_total` option need **Fluent Forms Pro**.

### Displaying General Form Info

Use the **info** attribute to display general information about the form. The available options are **submission_count, created_at, updated_at, and payment_total.**

- **Total Submissions:** Use the `info="submission_count"` attribute to show the total number of times the form has been submitted. This is the default, so `[fluentform_info id="9"]` shows the same result.

```
[fluentform_info id="9" info="submission_count"]
```

![Submission Info Fluent Forms](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-submission-count-08.webp)

- **Creation Date:** Use the `info="created_at"` attribute to show the date the form was created.

```
[fluentform_info id="9" info="created_at"]
```

![Creation Date Fluent Forms](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-creation-date-09.webp)

- **Last Updated Date:** Use the `info="updated_at"` attribute to show the date the form was last modified.

- **Total Payments:** For payment forms, use the `info="payment_total"` attribute to show the total amount received.

### Custom Date Formatting

You can format the **created_at** and **updated_at** dates by adding the **date_format** attribute. This uses standard [date formatting](https://www.php.net/manual/en/function.date.php). For example, to show the date as "Tuesday 17 November 2026 10 AM", the shortcode is:

```
[fluentform_info id="9" date_format="l d F Y g A" info="created_at"]
```

### Submissions Based On Entry Status

You can filter the submission count based on its status (read, unread, favourites, or trashed).

- **Show All Entries (Default):** `[fluentform_info id="9" status="all"]`

- **Show Read Entries:** `[fluentform_info id="9" status="read"]`

- **Show Unread Entries:** `[fluentform_info id="9" status="unread"]`

- **Show Favourite Entries:** `[fluentform_info id="9" status="favourites"]`

![Entry Status Fluent Forms](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-entry-status-10.webp)

### Trashed Entries

You can specify whether to include or exclude entries that are in the trash.

- **Exclude Trashed Entries (Default):** `[fluentform_info id="9" with_trashed="no"]`

- **Include Trashed Entries:** `[fluentform_info id="9" with_trashed="yes"]`

To show only the trashed entries, use `[fluentform_info id="9" status="trashed"]`.

### Show Remaining Submission Slots (Subtract From)

If you have set a maximum entry limit using the [form restrictions feature](/form-restrictions-feature), you can display how many submission slots are still available.

Use the **substract_from** attribute with your maximum limit. Fluent Forms spells this attribute `substract_from`, so type it exactly as shown. For example, if you set a limit of 20 entries:

```
[fluentform_info id="9" info="submission_count" substract_from="20"]
```

If 6 entries have been submitted, this displays "14".

![Maximum Number Entries](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-remaining-slots-11.webp)

You can also make the count disappear when it reaches zero by adding the **hide_on_zero="yes"** attribute. The final shortcode is:

```
[fluentform_info id="9" info="submission_count" substract_from="20" hide_on_zero="yes"]
```

While slots remain, it shows the number. When all 20 slots are filled, it shows nothing.

![All Entries Fluent Forms](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-hide-on-zero-12.webp)

### Show Total Entries Based on Payment Status

For payment forms, you can filter the entries shown based on their payment status. The available statuses are paid, pending, failed, refunded, partially-refunded, and processed.

- **Show All (Default):** `[fluentform_info id="9" payment_status="all"]`

- **Show Only Paid:** `[fluentform_info id="9" payment_status="paid"]`

- **Show Only Pending:** `[fluentform_info id="9" payment_status="pending"]`

- **Show Only Failed:** `[fluentform_info id="9" payment_status="failed"]`

To show the number of paid entries and the total paid amount, use these shortcodes:

```
[fluentform_info id="9" info="submission_count" payment_status="paid"]
[fluentform_info id="9" info="payment_total" payment_status="paid"]
```

The payment total shows a formatted currency symbol (for example, $80.00) by default. To show the plain number (for example, 80), add the **currency_formatted="no"** attribute.

![Payment Status Fluent Forms](/images/advanced-developer/shortcodes/using-helper-shortcodes/helper-payment-status-13.webp)

## Other Shortcodes

### Display a Specific Field from an Entry

To show a specific value from a single form submission, use the **[ff_entry]** shortcode. It supports these attributes:

- **form_id:** The form ID.
- **serial_number:** The serial number of the entry. It is the entry number you see in the **Entries** list.
- **field:** The name attribute of the field you want to show, such as `email`.
- **is_html:** Show the value as HTML. The default is `true`.

```
[ff_entry form_id="9" serial_number="1" field="email"]
```

To show the entry a user just submitted, for example on a confirmation message, use the **{submission.serial_number}** smart code.

```
[ff_entry form_id="9" serial_number="{submission.serial_number}" field="email"]
```

> [!Note]
> The **[ff_entry]** shortcode only shows entry data to users who can view entries and to the person who submitted that entry. Other visitors see nothing.

### Display GET Parameter Value

If you pass data in a URL (for example, your-site.com/page?my_param=hello), you can display that value on the page using the **[ff_get]** shortcode.

```
[ff_get param="my_param"]
```

This displays "hello". If the parameter is missing or empty, the shortcode shows nothing.
