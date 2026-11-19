---
description: "With the Frontend Entry View feature in Fluent Forms, users (or admins) can view a submitted form through a unique link."
---

# Frontend Entry View

The **Frontend Entry View** feature lets users or admins view a submitted form through a unique link. The link is **hash-based**, so it is secure and unique to each submission.

You control who can view these entries: only the person who submitted the form, other admins, or anyone with the link. To display entries publicly in a table instead, see [Show Fluent Forms Entries in Frontend using Ninja Tables](/show-entries-in-frontend-using-ninja-tables).

This article shows you how to enable the frontend entry view and share the view link with the form submitter.

## Enable Frontend Entry View

Create a new form or edit an existing one. In the form editor, click **Configuration** in the top bar. Expand **Responses** in the left menu and click **Front End Entry View**.

Turn on the **Enable Front End View of User Submission** toggle. More options appear:

### Content

Add a paragraph with the visual editor or code editor, and style it as you like. You can include media files or [shortcodes](/shortcodes-in-confirmation-settings) to personalize the content.

### Only Submitter or Admin Can View

Check **Only Submitter or Admin Can View** to limit the submission to the **form submitter** or an **admin**. If you leave it unchecked, **anyone with the link** can view the entry.

### Background Color

Set a background color for the front-end entry view page. Use the color palette to pick a color that fits your design.

### SEO Settings

Turn on **Add noindex meta tag** to **hide the submission page from search engines**.

Click **Save** to apply the changes.

![1024x552 Fluent Forms](/images/managing-submissions/entries/frontend-entry-view/01-1-1024x552.webp)

You can also open this page from an entry in the dashboard with the **View Front-end Entry** action. See [Managing Entries](/managing-entries).

## Add Frontend View URL Link

Go to **Configuration** > **Responses** > **Confirmation Settings**. Click **Add Shortcode**, then choose **Entry Attributes** from the list. Scroll down and click **Entry Frontend View Link** to insert the link.

You can also add a button for the link. Click the **Button** option and paste the **Entry frontend view link** shortcode in the URL field.

Click **Save**.

![Frontend Entry View step](/images/managing-submissions/entries/frontend-entry-view/2-2.webp)

When someone submits the form, they see a link to view their entry on the frontend, as in the screenshot below.

![Frontend Entry View step](/images/managing-submissions/entries/frontend-entry-view/3.webp)

If you added a button for the link, they see the button instead, as in the next screenshot. Clicking it opens the submitted entry.

![Frontend Entry View step](/images/managing-submissions/entries/frontend-entry-view/4-2.webp)

### View the Frontend Entry

Open the generated link to see the **Frontend view** of your form submission.

![Frontend Entry View step](/images/managing-submissions/entries/frontend-entry-view/5-3.webp)
