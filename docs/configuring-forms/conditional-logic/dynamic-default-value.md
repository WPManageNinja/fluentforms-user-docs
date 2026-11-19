---
description: "Fluent Forms allows you to pre-fill input fields dynamically using the Dynamic Default Value feature."
---

# Dynamic Default Value

The **Dynamic Default Value** feature pre-fills input fields dynamically. You pick a default value from the dynamic value dropdown.

This guide shows you how to pre-fill fields with dynamic values.

## Configure Dynamic Default Values

Go to **Forms** in the top navbar. Click **Edit** to open the **Editor** of your form.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Edit Dynamic Default Value](/images/configuring-forms/conditional-logic/dynamic-default-value/edit-form-01-1-scaled-2.webp)

## Choose a Dynamic Value (Shortcode)

Select the input field and go to **Advanced Options**. In the right panel, click the **three-dot** menu next to **Dynamic Default Value** (**Default Value** on some fields). A list of all available options appears.

 * **Populate by GET Param:** Sets the default value from the query string found in the URL. Keep the `get.` part, or it does not work. The shortcode is – `{get.input_text}`. For a full walkthrough, see [Set Default Form Value from URL Parameters](/set-default-form-value-from-url-parameters).

 * **Admin Email:** Inserts the site administrator’s email address from your WordPress settings. The shortcode is – `{wp.admin_email}`

 * **Site URL:** Sets the value from the website's URL. The shortcode is – `{wp.site_url}`

 * **Site Title:** Uses the site title. The shortcode is – `{wp.site_title}`

 * **IP Address:** Sets the value from the user’s IP address. The shortcode is – `{ip}`

 * **Date (mm/dd/yyyy):** Sets the value from the current date in this format: 04/25/1991. The shortcode is – `{date.m/d/Y}`

 * **Date (dd/mm/yyyy):** Sets the value from the current date in this format: 25/04/1991. The shortcode is – `{date.d/m/Y}`

 * **Embedded Post/Page ID:** Sets the value from the current post or page ID. The shortcode is – `{embed_post.ID}`

 * **Embedded Post/Page Title:** Fills the field with the title of the post or page where the form is embedded. The shortcode is – `{embed_post.post_title}`

 * **Embedded URL:** Inserts the page URL where the form is embedded. The shortcode is – `{embed_post.permalink}`

 * **HTTP Referer URL:** Fills the field with the URL of the page that referred the user to the form. The shortcode is – `{http_referer}`

 * **User ID:** Fills the field with the ID of the logged-in user. The shortcode is – `{user.ID}`

 * **User Display Name:** Populates the field with the display name of the logged-in user. The shortcode is – `{user.display_name}`

 * **User First Name:** Inserts the first name of the logged-in user. The shortcode is – `{user.first_name}`

 * **User Last Name:** Sets the value from the logged-in user’s last name. The shortcode is – `{user.last_name}`

 * **User Email:** Sets the value from the logged-in user’s email. The shortcode is – `{user.user_email}`

 * **User Username:** Sets the value from the logged-in user’s username. The shortcode is – `{user.user_login}`

 * **User Browser Client:** Sets the value from the browser in use (Chrome, Firefox). The shortcode is – `{browser.name}`

 * **User Operating System:** Sets the value from the user’s operating system (Windows, macOS). The shortcode is – `{browser.platform}`

 * **FluentCRM Data:** Pulls specific data from FluentCRM (user tags or segments). Use it to tailor forms for CRM-integrated workflows. The shortcode is – `{fluentcrm.CONTACT_DATA_KEY}`. Learn more in [Pre-Fill Form Fields with FluentCRM Data](/pre-fill-form-fields-with-fluentcrm-data).

 * **Random String with Prefix:** Generates a random string each time the form loads, so you can create unique strings. The shortcode is – `{random_string.your_prefix}`. Change the prefix to any text you like.

 * **Cookie Value:** Reads the value of a cookie, which is a small piece of data a server sends to the user’s browser. The browser can store it and send it back to the same server with later requests. The shortcode is – `{cookie.cookie_name}`.

Click **Save**. The field populates dynamically when visitors load the form.

For every available smart code, see [Shortcodes in Confirmation Settings](/shortcodes-in-confirmation-settings). To use a submitted value in a later step, see [Dynamic Input Values In Form Steps](/dynamic-input-values-in-form-steps).

![Default Value Scaled1](/images/configuring-forms/conditional-logic/dynamic-default-value/default-value-scaled1.webp)
