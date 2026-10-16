---
description: "New to Fluent Forms? This quickstart takes you from install to a live form that saves entries and emails you — in about five minutes, with no code."
---

# Your First Working Form in 5 Minutes

New to Fluent Forms? This quickstart is the fastest path from a fresh install to a **working** form on your site — one that collects submissions, saves them, and emails you when someone fills it out. No code, about five minutes. Each step links to a deeper guide if you want more detail.

## Before you start

Make sure your site meets the minimum requirements:

- **WordPress** 6.4 or later
- **PHP** 7.4 or later

Not sure of your versions? In your WordPress dashboard, open **Tools** → **Site Health** → **Info**.

## 1. Install and activate

1. In your WordPress dashboard, go to **Plugins** → **Add New Plugin**.
2. Search for **Fluent Forms**, click **Install Now**, then **Activate**.

That's it — Fluent Forms is ready. For the manual upload method, see [Install Fluent Forms](/install-fluent-forms). Payments, advanced fields, and premium templates need the paid add-on; see [Upgrade to Pro](/upgrade-to-pro-add-on).

## 2. Create a form from a template

1. Go to **Fluent Forms** → **Forms** and click **+ Add New Form**.
2. In the popup, choose **Choose a Template** and pick a ready-made template (like Contact Form) so you have working fields right away.

![The Create A New Form popup, showing Blank Form, Choose a Template, Conversational, and Create Using AI options](/images/getting-started/quickstart/create-new-form.webp)

The form opens in the editor. You can drag new fields in from the left, or click a field to rename it. A blank starting point and the full field tour are covered in [Create a Form](/create-a-form); for a map of the editor, see the [User Interface](/user-interface) overview.

## 3. Send yourself a notification

This is the step most people miss — without it, submissions are saved but no email reaches you.

1. In the editor, open **Settings & Integrations** → **Email Notifications**.
2. Open the default notification and set **Send To** to your own email address.
3. Confirm the **Subject** and message read the way you want, then **Save**.

![The Email Notifications screen under Settings & Integrations, with a notification row showing Status, Name, and Subject](/images/getting-started/quickstart/email-notifications.webp)

The full options, including sending a copy to the person who submitted, are in [Admin & User Notifications](/setup-adminuser-email-notifications).

## 4. Set the confirmation message

Decide what the visitor sees after they submit.

1. Open **Settings & Integrations** → **Confirmations**.
2. Keep the default thank-you message, or write your own, and **Save**.

![The Confirmation Settings screen, with Confirmation Type, the message editor, and After Form Submission options](/images/getting-started/quickstart/confirmation-settings.webp)

You can also redirect to another page instead — see [Confirmation Message](/setup-form-submission-confirmation-message).

## 5. Embed the form

1. Click **Save Form**, then copy the **shortcode** shown at the top of the editor (it looks like `[fluentform id="1"]`). Every form's shortcode is also listed on the **Forms** page.
2. Create or edit a page, paste the shortcode into the content, and **Publish**.

![The Forms list, with the ShortCode column showing a copyable shortcode for each form](/images/getting-started/quickstart/copy-shortcode.webp)

Using the block editor or a page builder instead? See [Embed in Gutenberg](/embed-your-forms-directly-in-gutenberg-layout) or [Embed in Elementor](/embed-your-forms-using-elementor-widget).

## 6. Test it end to end

Don't skip this — it proves the whole chain works.

1. Open the published page in a normal browser tab (or log out first) and submit the form.
2. Check that your **confirmation message** appears.
3. Check your inbox for the **notification email**.
4. Back in the dashboard, go to **Fluent Forms** → **Entries** and confirm the submission is listed.

![The Entries screen listing form submissions, with Search, Columns, and Export controls](/images/getting-started/quickstart/view-entries.webp)

Your form is now live and working.

## Didn't get the email?

A missing notification email is almost always your site's mail setup, not the form. The entry will still be saved under **Entries** either way. See [Emails Not Sending](/not-sending-email-confirmations) for the fix (most sites need an SMTP plugin).

## Where to go next

- [Managing Entries](/managing-entries) — view, search, edit, and export submissions
- [Create a Form](/create-a-form) — the full field-by-field walkthrough
- [Notifications & Confirmations Overview](/notifications-confirmations-overview) — everything the form can send
- [How to Get Support](/get-support) — if you get stuck
