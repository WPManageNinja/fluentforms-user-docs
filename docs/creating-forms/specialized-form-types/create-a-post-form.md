---
description: "Fluent Forms offers Post Forms, making it easy for you to accept user-submitted posts through forms and publish them directly on their site."
---

# Create a Post Form

**Fluent Forms** offers **Post Forms**, which let you accept user-submitted posts and publish them on your site. The form creates a post automatically after a user submits the data.

This guide shows you how to create a **Post Form**, map its fields with a Post Feed, and publish it.

> [!Note]
> **Post Form** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable the Advanced Post/CPT Creation Module

> [!Note]
> Before you create a **Post Form**, enable the **Advanced Post/CPT Creation** module. Without it, **Post Fields** will not appear under **Input Fields** in the Form Builder.

To enable the module:

1. Click **Integrations** in the Fluent Forms top bar.
2. Open the **WP Core Modules** tab.
3. Find **Advanced Post/CPT Creation**, or search for it.
4. Turn on the **Toggle**.

![Enable post module](/images/creating-forms/specialized-form-types/create-a-post-form/1.-Enable-PostCPT-Creation-option-scaled.webp)

## Create Post Forms

From your **WordPress Dashboard**, go to **Fluent Forms → Forms** and click **Add Form** at the top right of the **Forms** screen.

![Add new form](/images/creating-forms/specialized-form-types/create-a-post-form/2.-Add-New-Form-button-scaled.webp)

The **Create A New Form** window opens. Click **Create a Post Form**.

> [!Note]
> The **Create a Post Form** option appears only after you enable **Advanced Post/CPT Creation** under **Integrations**. See [Enable the Advanced Post/CPT Creation Module](#enable-the-advanced-postcpt-creation-module) above.

![Create post form](/images/creating-forms/specialized-form-types/create-a-post-form/3.-Create-a-Post-Form-scaled.webp)

The **Select Post Type** screen opens. Open the **Post Type** dropdown, select **post**, and click **Continue**.

> [!Note]
> If your site has third-party integrations, their options also appear here.

![Select post type](/images/creating-forms/specialized-form-types/create-a-post-form/4.-Select-Post-type.webp)

The **Form Editor** page opens.

Open **Input Fields** in the right sidebar. You see the **Post Fields** and **Taxonomy Fields** groups. The taxonomy fields let you add [Categories](/add-categories-taxonomy-field-in-post-forms), Tags, and **Formats**.

> [!Note]
> Each field in the Post Fields and Taxonomy Fields groups has its own guide. Read them to learn how each field works.

Click a group name such as **Post Fields** or **Taxonomy Fields** to open it, then add the **input fields** you need.

![Taxonomy fields](/images/creating-forms/specialized-form-types/create-a-post-form/5.-Post-Taxonomy-Fields-Module-scaled.webp)

## Add Post Fields

The **Post Fields** group has these fields:

- [Post Title](/add-post-title-field-in-post-forms)
- [Post Content](/add-post-content-field-in-post-forms)
- [Post Excerpt](/add-post-excerpt-field-in-post-forms)
- [Featured Image](/add-featured-image-field-in-post-forms)
- [Post Update](/add-post-update-field-in-post-forms)

Click a field, or drag and drop it into the editor. This example adds the **Post Title**, **Post Content**, and **Featured Image** fields.

![Post form fields](/images/creating-forms/specialized-form-types/create-a-post-form/6.-All-fields-under-Post-module-scaled.webp)

## Customize the Form

On the **Editor** page of your new Post Form, you can customize the added fields.

Hover over a field to see these options:

* **Drag & Drop:** Move the field anywhere in the form.
* **Arrow:** Move the field one step up or down.
* **Edit:** Click the **Pencil Icon** to open the **Customize** tab on the right, which has many customization options.
* **Duplicate:** Click this button to duplicate the field.
* **Delete:** Click the **Trash Icon** to delete the field.

![Field customization](/images/creating-forms/specialized-form-types/create-a-post-form/7.-Input-Customization-field-scaled.webp)

To see recent changes to your form, click the **History** (clock) icon at the top right of the right panel to open **Saved versions**. Click **Restore** to restore a version. The **Trash Icon** clears all saved versions.

![Form edit history](/images/creating-forms/specialized-form-types/create-a-post-form/8.-History-tab-scaled.webp)

To change the **Form Name**, click the **Pencil Icon** next to the form name in the top bar. When you finish customizing, click **Save**.

![Rename post form](/images/creating-forms/specialized-form-types/create-a-post-form/9.-Change-the-form-name-scaled.webp)

## Configure Post Feed Settings

You must configure the **Post Feed** for your **Post Form** to work. The feed maps your post fields to the data you collect and lets users create more customized posts.

Click **Configuration** in the top bar of your **Post Form**, then open **Integrations & Add-ons** from the left menu.

![Form settings](/images/creating-forms/specialized-form-types/create-a-post-form/10.-Settings-Integrations--scaled.webp)

Open **Post Feeds** and click **Add Post Feed**.

![Add post feed](/images/creating-forms/specialized-form-types/create-a-post-form/11.-Add-Post-Feed-scaled.webp)

The feed settings page opens. It has these options:

* **Feed Name:** Name your Post Feed so you can find it later. You can change the name anytime.
* **Post Type:** You cannot change the Post Type here, so select it at the start of form creation.
* **Submission Type:** Select **New Post** or **Update Post**.
* **Allow Logged out user to create Posts:** Keep **Allowed** checked so visitors who are not logged in can submit the form. Uncheck it to require login.
* **Post Status:** Select **Draft**, **Pending**, **Private**, or **Publish**.
* **Comment Status and Post Format:** Select the comment status, **Open** or **Close**, and choose the post format.
* **Default Category:** Select a default category from the post categories on your WordPress site.
* **Post Fields Mapping:** Link your **Post Fields** to the **Form Fields**. Use the **Three-Dot** button on the right to select the **value** for each form field from the **Post Fields Shortcode**.
* **Meta Fields Mapping:** Save extra post data beyond title, content, and taxonomies. Post meta stores custom information on each WordPress post created from your form.

* **Add Meta Field:** Click **+ Add Meta Field** in the **Meta Fields Mapping** section.
* **Meta key:** Enter the WordPress meta key (for example, from ACF **Field Name** or your custom field slug).
* **Form field:** Use the **three-dot** button to map a form field value to that meta key.

Complete **Post Fields Mapping** first, then add custom meta fields. If you use **ACF**, **Meta Box**, or **JetEngine**, extra mapping sections may appear in the same feed. For the full setup with custom field plugins, see [Mapping Meta Fields with Meta Keys in Fluent Forms](/mapping-meta-fields-with-meta-keys).

The last option is **Enable Conditional Logic**. It runs this Post Feed only when your conditions are met. See [Conditional Email Notification in Fluent Forms](/conditional-email-notification).

Click **Save** to save your Post Feed configuration.

![Post feed settings](/images/creating-forms/specialized-form-types/create-a-post-form/12.-Create-New-Feed-page-scaled.webp)

Your **Post Feed** now appears in the list. Click the **Pencil Icon** to edit it, use the toggle to turn it on or off, or click the **Trash Icon** to delete it.

![Post feed saved](/images/creating-forms/specialized-form-types/create-a-post-form/13.-Added-Post-Feed-scaled.webp)

## Embed Form into Frontend

Click **Save** to save your changes.

To preview the form, click the **Preview** (eye) icon.

To display the form on your site, click the copy icon next to the **Shortcode** in the top bar.

![Save post form](/images/creating-forms/specialized-form-types/create-a-post-form/14.-Save-Form-scaled.webp)

Paste the copied **Shortcode** into the **Page** or **Post** where you want the form.

![Embed post form](/images/creating-forms/specialized-form-types/create-a-post-form/15.-Paste-Shortcode-in-desired-postpage-scaled.webp)

## Preview of Post Form

This is the **preview** of the new **Post Form**.

![Post form preview](/images/creating-forms/specialized-form-types/create-a-post-form/16.-Form-Preview.webp)

You can now create **Post Forms** in Fluent Forms.
