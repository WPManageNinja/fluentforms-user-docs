# Dynamic Default Value in Fluent Forms

Fluent Forms allows you to pre-fill input fields dynamically using the Dynamic Default Value feature. You can set a default value using one of the available options from the dynamic value dropdown.

In this article you will learn about the Dynamic Default value in fluent form.

## Configure Dynamic Default Values

First, go to **Forms** from the top navbar, click the Edit button to **open** the **Editor** page of your **desired form.** 

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/configuring-forms/conditional-logic/dynamic-default-value-in-fluent-forms/edit-form-01-1-scaled-2.webp)

## Choose a Dynamic Value (Shortcode)

Now **Select** the input field, and navigate to **Advanced Options**. Then, click the **three-dot** menu from the right sidebar under the **Default Value** options. Here, you will see all the default advanced options in fluent form.

**Populate by GET Param:** Sets the default value from the query string found in the URL. Make sure you keep the ‘get.’ part; otherwise, it won’t work as expected. The shortcode is – {get.input_text} For a full walkthrough, see [Set Default Form Value from URL Parameters](/docs/set-default-form-value-from-url-parameters).

**Admin Email:** It will insert the site administrator’s email address from your WordPress settings. It automatically sets the admin's email address. The shortcode is – {wp.admin_email}

**Site URL:** With this shortcode populated with the website's URL. the shortcode is- {wp.site_url}

**Site Title:** It uses the site title. The shortcode is- {wp.site_title}

**IP Address:** Sets the value from the user’s IP address. The shortcode is – {ip}

**Date (mm/dd/yyyy):** Sets the value from the current date in the denoted format, 04/25/1991. Shortcode is – {date.m/d/Y}

**Date (dd/mm/yyyy):**  Sets the value from the current date in the denoted format, 25/04/1991. . The shortcode is – {date.d/m/Y}

**Embedded Post/Page ID:** Sets the value from the current post or page ID. The shortcode is – {embed_post.ID}

**Embedded Post/Page Title:** Dynamically populates the field with the title of the post or page where the form is embedded. The shortcode is – {embed_post.post_title}

**Embedded URL:** Inserts the page URL where the form is embedded. The shortcode is – {embed_post.permalink}

**HTTP Referrer URL:** Captures and populates the field with the page URL that refers the user to the current form. The shortcode is- {http_referer}

**User ID:** Automatically fills the field with the unique ID of the logged-in user. The shortcode is – {user.ID}

**User Display Name:** Populates the field with the display name of the logged-in user. The shortcode is – {user.display_name}

**User First Name:** Retrieves and inserts the first name of the logged-in user. The shortcode is – {user.first_name}

**User Last Name:** Sets the value from the logged-in user’s last name. The shortcode is – {user.last_name}

**User Email:** Sets the value from the logged-in user’s email. The shortcode is – {user.user_email}

**User Username:** Sets the value from the logged-in user’s username. The shortcode is – {user.user_login}

**User Browser Client:** Captures the browser being used ( Chrome, Firefox). The shortcode is – {browser.name}

**User Operating System:** Fetches the user’s operating system ( Windows, macOS). The shortcode is – {browser.platform}

**FluentCRM Data**: Pulls specific data from FluentCRM (user tags or segments). It uses tailoring forms for CRM-integrated workflows. THe shortcode is- {fluentcrm.CONTACT_DATA_KEY} Learn more in [Pre-Fill Form Fields with FluentCRM Data](/docs/pre-fill-form-fields-with-fluentcrm-data).

**Random String with Prefix:** Generates random strings each time when the form loads. It will be useful for anyone who wants to generate a unique set of strings. 

The shortcode is –{random_string.your_prefix}. You can change the prefix to any text you like.

**Cookie Value:** A Cookie Value is a small piece of data that a server sends to a user’s web browser. The browser may store the cookie and send it back to the same server with later requests. The shortcode of Cookie Value is – {cookie.cookie_name}. 

Once set, **Save** the **Form**, and the field will populate dynamically during use.

![](/images/configuring-forms/conditional-logic/dynamic-default-value-in-fluent-forms/default-value-scaled1.webp)
