---
description: "Fluent Forms offers various dynamic smart codes that can be used in the form builder to set default input values."
---

# Form Editor Smart Codes

Fluent Forms offers various **dynamic smart codes** that can be used in the form builder to set [**default input values**](/dynamic-default-value). These codes pull information from your **website, user profile, post details,** and **FluentCRM contacts**.

This article explains each available smart code and how it works within Fluent Forms.

So, Let's get started.

## How to Add a Smart Code

Open your form in the **Editor** and click a field. Open the **Customize** tab and expand **Advanced Options**. In the **Default Value** field, type a smart code, or click the **three-dot icon** and pick one from the list. On some fields, this option is called **Dynamic Default Value**. When a visitor opens the form, Fluent Forms replaces the smart code with the real value.

![Default Value Smart Codes](/images/advanced-developer/shortcodes/form-editor-smart-codes/default-value-smart-codes-02.webp)

> [!Note]
> Smart codes that need a logged-in user, such as `{user.first_name}`, show nothing for guests. They also show nothing if the user's profile does not have that data.

## General Smart Codes

These codes fetch **basic website, user, and browser details**.

| Smart Code | Description |
| --- | --- |
| `{get.YOUR_GET_PARAM}` | Fetches data from the web address (URL). For example, `{get.input_text}` shows the value of `?input_text=hello`. In the list, it is called **Populate by GET Param**. |
| `{wp.admin_email}` | Shows the site admin's email. |
| `{wp.site_url}` | Displays the website link. |
| `{wp.site_title}` | Shows the website name. |
| `{ip}` | Displays the user's IP address. |
| `{date.m/d/Y}` | Shows the date (11/20/2026). |
| `{date.d/m/Y}` | Displays the date (20/11/2026). |
| `{http_referer}` | Shows the page the user visited before this one. |
| `{user.ID}` | Displays the logged-in user's ID. |
| `{user.display_name}` | Shows the user's display name. |
| `{user.first_name}` | Displays the user's first name. |
| `{user.last_name}` | Shows the user's last name. |
| `{user.user_email}` | Displays the user's email. |
| `{user.user_login}` | Shows the user's username. |
| `{browser.name}` | Displays the user's web browser (example: Chrome). |
| `{browser.platform}` | Shows the user's operating system (example: Windows, Mac). |
| `{random_string.your_prefix}` | Creates a random string that starts with your prefix. |

For a full walkthrough of URL parameters, see [Set Default Form Value from URL Parameters](/set-default-form-value-from-url-parameters).

### More Smart Codes You Can Type

These codes do not appear in the list, but you can type them in the **Default Value** field.

| Smart Code | Description |
| --- | --- |
| `{cookie.cookie_name}` | Shows the value of a browser cookie. |
| `{user.meta.META_KEY}` | Gets extra user info using a user meta key. |
| `{date.F j, Y}` | Shows the date in any [PHP date format](https://www.php.net/manual/en/function.date.php). For example, November 20, 2026. |

### EmbeddedPost Smart Codes

These codes pull details about the **page or post** where the form is placed.

| Smart Code | Description |
| --- | --- |
| `{embed_post.ID}` | Shows the Post/Page ID. |
| `{embed_post.post_title}` | Displays the Post/Page title. |
| `{embed_post.permalink}` | Shows the URL of the Post/Page. |
| `{embed_post.meta.META_KEY}` | Shows the value of a custom field (post meta) of the Post/Page. |

### FluentCRM Smart Codes

These codes work if you use [**FluentCRM**](/fluentcrm-integration) and want to **auto-fill contact details**. Fluent Forms finds the FluentCRM contact that matches the logged-in user. To populate fields from a contact's profile, see [Pre-Fill Form Fields with FluentCRM Data](/pre-fill-form-fields-with-fluentcrm-data).

| Smart Code | Description |
| --- | --- |
| `{fluentcrm.CONTACT_DATA_KEY}` | Shows a value from the FluentCRM contact. Replace `CONTACT_DATA_KEY` with the data you want. |
| `{fluentcrm.CONTACT_DATA_KEY\|fallback}` | Shows the fallback text if the contact has no value, or the visitor is not logged in. |

You can use these keys in place of `CONTACT_DATA_KEY`:

- **Contact details:** `first_name`, `last_name`, `email`, `phone`, and other contact fields.
- **Custom fields:** The slug of any FluentCRM custom field.
- **Lists and tags:** `list_titles`, `list_ids`, `list_slugs`, `tag_titles`, `tag_ids`, and `tag_slugs`.

> [!Note]
> Only logged-in users get FluentCRM data. Guests see the fallback value if you set one.
