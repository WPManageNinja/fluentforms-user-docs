---
description: "Fluent Forms allows you to send a Default/Customized Confirmation Message after each form submission to let the users know their form was submitted…"
---

# Setup Form Submission Confirmation Message

**Fluent Forms** sends a **Default** or **Customized Confirmation Message** after each form submission, so users know their form went through. This guide shows you how to set up the **Confirmation Message**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/E0_xgmiqXoc" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Confirmation Settings

Go to **Forms** in the top navbar and click **Edit** on your form to open the **Editor**. You can also create a new form.

![Editor Fluent Forms](/images/notifications-confirmations/confirmations/setup-form-submission-confirmation-message/1.-desired-Form-Editor-4-scaled.webp)

Click **Configuration** in the top bar and open **Confirmation Settings** under **Responses** in the left rail.

Choose one of three **Confirmation Types**:

**1. Same Page**

**2. To a Page**

**3. To a Custom URL**

Click **Save** to save your changes.

![Confirmation Settings Option](/images/notifications-confirmations/confirmations/setup-form-submission-confirmation-message/2.-Confirmation-Settings-option-scaled.webp)

The sections below explain each confirmation type.

### 1. Same page

This option is selected by default. It shows the confirmation message on the same page where the form is embedded.

 * **A. Message to show:** Fluent Forms shows a default confirmation message. Keep it or customize it. Use **Add Media** and **Add Shortcodes** in the right corner to add media and shortcodes. For the full list of smart shortcodes, see [Shortcodes in Confirmation Settings](/shortcodes-in-confirmation-settings). For advanced customization, edit the message as **HTML Codes** in the **Code** tab.

 * **B. After Form Submission:** Choose **Hide Form** or **Reset Form** after each form submission.

Click **Save**.

![Same Page Confirmation Type](/images/notifications-confirmations/confirmations/setup-form-submission-confirmation-message/3.-Same-Page-confirmation-type.webp)

### 2. To a Page

This option redirects your subscribers to a page on your website after they submit the form. It guides them to relevant content or further actions. The page can be a **Customized Welcome Page**, your **Home Page**, or **Any Other Page** on your site.

 * **A. Select Page:** Choose the page to redirect your subscriber to after form submission. The dropdown lists all your site's pages.

 * **B. Redirect Query String:** Turn on **Pass Field Data Via Query String** to pass the field data in the URL. Add values with the **{ }** shortcode icon in the right corner.

 * **C. Redirection Message:** Customize the message shown after form submission. Use **Add Media** and **Add Shortcodes** in the right corner to add media and shortcodes. For advanced customization, edit the message as **HTML Codes** in the **Code** tab.

Click **Save**.

![Page Confirmation Type](/images/notifications-confirmations/confirmations/setup-form-submission-confirmation-message/4.-To-a-Page-confirmation-type.webp)

### 3. To a Custom URL

This confirmation type redirects your subscriber to a page or website outside your domain through a custom URL.

 * **A. Custom URL:** Enter the **Redirect URL** to send your subscriber to after form submission. Add shortcodes with the **{ }** icon.

 * **B. Redirect Query String:** Turn on **Pass Field Data Via Query String** to pass the field data in the URL. Add values with the **{ }** shortcode icon in the right corner.

Suppose your form has a field like **Name**. If you enable **Pass Field Data via Query String**, the URL after submission can look like this: `https://yourwebsite.com/thank-you/?name=JohnDoe`

- Here, 'name=JohnDoe' is passed through the query string.

- You can use this information on the next page for personalization or tracking.

 * **C. Redirection Message:** Customize the message shown after form submission. Use **Add Media** and **Add Shortcodes** in the right corner to add media and shortcodes. For advanced customization, edit the message as **HTML Codes** in the **Code** tab.

> [!Note]
> To pass data in a query string and populate form fields on the redirected page, see [Set Default Form Value from URL Parameters](/set-default-form-value-from-url-parameters).

Click **Save**.

![Custom URL Confirmation Type](/images/notifications-confirmations/confirmations/setup-form-submission-confirmation-message/5.-To-a-Custom-URL-confirmation-Type.webp)
