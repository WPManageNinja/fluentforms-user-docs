# Form Editor Smart Codes

Fluent Forms offers various **dynamic smart codes** that can be used in the form builder to set **default input values**. These codes pull information from your **website, user profile, post details,** and **FluentCRM contacts**.

This article explains each available shortcode and how they function within Fluent Forms.

So, Let's get started.

### General Smart Codes

These codes fetch **basic website and user details**.

| ShortCode | Description |
|---|---|
| {get.input_text} | Shows the text. |
| {wp.admin_email} | Shows the site admin’s email. |
| {wp.site_url} | Displays the website link. |
| {wp.site_title} | Shows the website name. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Shows the date ( 02/25/2025). |
| {date.d/m/Y} | Displays the date (23/02/2025) |
| {user.ID} | Displays the logged-in user’s ID. |
| {http_referer} | Shows the page the user visited before this one. |
| {user.display_name} | Shows the user’s display name. |
| {user.first_name} | Displays the user’s first name. |
| {user.last_name} | Shows the user’s last name. |
| {user.user_email} | Displays the user’s email. |
| {user.user_login} | Shows the user’s username. |
| {browser.name} | Displays the user’s web browser (example: Chrome) |
| {random_string.your_prefix} | Creates a random string with your chosen prefix. |
| {cookie.cookie_name} | Shows the cookies |

### EmbeddedPost Smart Codes

These codes pull details about the **page/post** where the form is placed.

| ShortCode | Description |
|---|---|
| {embed_post.ID} | Shows the Post/Page ID. |
| {embed_post.post_title} | Displays the Post/Page title. |
| {embed_post.permalink} | Shows the URL of the Post/Page. |

### FluentCRM Shortcode

These codes work if you use **FluentCRM** and want to **auto-fill contact details**.

| SmartCode | Description |
|---|---|
| {user.meta.META_KEY} | Gets extra user info using a special meta key. |
| {wp.admin_email} | Shows the site admin’s email |
| {wp.site_url} | Displays the website link. |
| {wp.site_title} | Shows the website name. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Shows the date (04/25/2024) |
| {http_referer} | Shows the page the user visited before this one. |
| {user.ID} | Displays the logged-in user’s ID. |
| {user.display_name} | Shows the user’s display name. |
| {user.first_name} | Fetches the user’s first name. |
| {user.last_name} | Fetches the user’s last name. |
| {user.user_email} | Displays the user’s email. |
| {user.user_login} | Shows the user’s username. |
| {browser.name} | Displays the user’s web browser ( Chrome). |
| {browser.platform} | Shows the user’s device type (Windows, Mac). |
| {random_string.your_prefix} | Creates a random string with your chosen prefix. |
| {get.YOUR_GET_PARAM} | Fetches data from the web address (URL). |
