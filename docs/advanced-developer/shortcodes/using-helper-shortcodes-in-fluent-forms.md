# Using Helper Shortcodes in Fluent Forms

Fluent Forms offers powerful helper shortcodes that enable you to display dynamic form data, including submission counts, [entry details](/docs/managing-entries-in-fluent-forms), and [payment statuses](/docs/payment-reports), anywhere on your website. The helper shortcodes and all of their attributes are listed below.

This guide will walk you through the available shortcodes and their attributes.

[https://gist.github.com/reachkamrul/5737af6ed143fa06a7294a1d7e95f9bb](https://gist.github.com/reachkamrul/5737af6ed143fa06a7294a1d7e95f9bb)

## Form Info [fluentform_info]

This shortcode is used to display information about a form, including submission counts and creation dates. It always requires the form ID.

### Displaying General Form Info

Use the info attribute to display general information about the form. The available options are **submission_count, created_at, updated_at, and payment_total.**

`[[fluentform_info id="9" info="submission_count"]]`

- Total Submissions: Use the info="submission_count" attribute to show the total number of times the form has been submitted. It will show total submission at the bottom of the form.

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/Submission-info.webp)

- Creation Date: Use the info="created_at" attribute to show the date the form was created. It will show the creation date below the form.

`[[fluentform_info id="9" info="created_at"]]`

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/creation-date.webp)

- Last Updated Date: Use the info="updated_at" attribute to show the date the form was last modified.

- Total Payments: For payment forms, use the info="payment_total" attribute to show the total amount received.

### Custom Date Formatting

You can format the created_at and updated_at dates by adding the date_format attribute. This uses standard [date formatting](https://www.php.net/manual/en/function.date.php). For example, to show the date as "Friday 17 April 2025, 10 AM", the shortcode would be:

`[[fluentform_info id="9" date_format="l d F Y g A" info="created_at"]]`

### Submission & Field Specific Shortcode

If you want to show a specific form submission’s specific entry using a shortcode, you can now add that manually in the FluentForms shortcode.

`[[ff_entry form_id='1' entry_id='{submission.id}' field='url' is_html=false]]`

### Submissions Based On Entry Status

You can filter the submission count based on its status (read or unread).

- Show All Entries (Default): [fluentform_info id="9" status="all"]

- Show Read Entries: [fluentform_info id="9" status="read"]

- Show Unread Entries: [fluentform_info id="9" status="unread"]

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/Entry-Status-scaled.webp)

### Trashed Entries

You can specify whether to include or exclude entries that are in the trash.

- Exclude Trashed Entries (Default): [fluentform_info id="9" with_trashed="no"]

- Include Trashed Entries: [fluentform_info id="9" with_trashed="yes"]

### Show Remaining Submission Slots (Subtract From)

If you have set a maximum entry limit using the [form restrictions feature](/docs/form-restrictions-feature-in-fluent-forms), you can display how many submission slots are still available.

Use the **subtract_from** attribute with your maximum limit. For example, if you set a limit of 20 entries:

`[[fluentform_info id="9" info="submission_count" substract_from="20"]]`

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/Maximum-number-of-entries-scaled.webp)

If 5 entries have been submitted, this will display "15".

You can also make the count disappear when it reaches zero by adding the **hide_on_zero="yes"** attribute. The final shortcode would be:

`[[fluentform_info id="9" info="submission_count" substract_from="20" hide_on_zero="yes"]]`

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/all-entries.webp)

### Show Total Entries Based on Payment Status

For payment forms, you can filter the entries shown based on their payment status. The available statuses are paid, pending, failed, refunded, partially-refunded, and processed.

- Show All (Default): [fluentform_info id="9" payment_status="all"]

- Show Only Paid: [fluentform_info id="9" payment_status="paid"]

- Show Only Pending: [fluentform_info id="9" payment_status="pending"]

- Show Only Failed: [fluentform_info id="9" payment_status="failed"]

To show the total payment amount with a formatted currency symbol (e.g., $10.00), add the **currency_formatted="yes"** attribute.

![](/images/advanced-developer/shortcodes/using-helper-shortcodes-in-fluent-forms/Payment-Status-scaled.webp)

### Other Shortcodes

#### Display a Specific Field from an Entry

To show a specific value from a single form submission, use the **[ff_entry]** shortcode.

`[[ff_entry form_id='1' entry_id='{submission.id}' field='url']]`

#### Display GET Parameter Value

If you pass data in a URL (e.g., your-site.com/page?my_param=hello), you can display that value on the page using the **[ff_get]** shortcode.

`[[ff_get param="my_param"]]`

This would display "hello".
