---
description: "In Fluent Forms, the Post Update field allows users to select any of your existing posts and update them directly through the form."
---

# Add Post Update Field in Post Forms

In **Fluent Forms**, the **Post Update** field lets users select any of your existing posts and update them through the form. This article shows you how to add the **Post Update** field to your form.

> [!Note]
> This field is a Pro feature. It appears in the editor only when the **Post/CPT Creation** module is enabled. See [Create a Post Form](/create-a-post-form).

## Add Post Update Field

Go to **Forms** in the Fluent Forms navbar. Click the title of your **Post Form** to open the form editor.

![Open Post](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/1.-Open-desired-Post-form-4-scaled.webp)

In the editor, go to **Input Fields** in the right sidebar. Click the **Arrow Icon** to open the **Post Fields** dropdown list. Click the **Post Update** field, or drag and drop it into your editor.

![Add Post Update Field](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/2.-Add-Post-Update-field-scaled.webp)

## Customize Post Update Field

Hover over the **Post Update** field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

1. Post Update

2. Advanced Options

![Customize](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/3.-Input-Customization-6-scaled.webp)

### 1. Post Update

Configure **Post Update** labels and post selection options:

**A. Element Label:** The field title users see when they fill out the **Post Update** field. Enter text that explains the purpose of the field.

**B. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**C. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**D. Label Placement:** Set where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide Label**, and **Default**. **Default** uses your global label placement settings.

**E. Filter Posts:** Select which posts to show in your form.

**F. Extra Query Parameter:** Provide the **Post Query Parameter** for further filtering. To learn more about the Extra Query Parameter, see the [Post Selection Module in Fluent Forms](/post-selection-module).

![Post Update Option](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/4.-Post-Update-option-scaled.webp)

### 2. Advanced Options

Configure **Advanced** options:

**A. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**B. Dynamic Default Value:** Set a default value to pre-populate the field. You can also set the value with **SmartCodes**. To learn more, read [Form Editor Smart Codes](/form-editor-smart-codes).

**C. Help Message:** Add text that appears as a help message for the user.

**D. Container Class:** Add custom CSS classes to the field’s wrapper.

**E. Element Class:** Add custom CSS classes to the input field itself. Use it to add custom CSS or JS for a specific input field.

**F. Conditional Logic:** Make the Post Update field work conditionally based on your submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic).

**G. Enable Searchable Smart Options:** Enable this option to make the field searchable with the select2 JS library.

![Advanced Options](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/5.-Advanced-Options-7-scaled.webp)

## Configure Post Feed Settings

Configure the **Post Feed**. This step is **mandatory** to make your **Post Form** work. The feed maps your post fields for data collection and lets users create more customized posts.

The **Post Update** field works only when the post feed’s **Submission Type** is set to **Update Post**. To set it:

1. On the **Editor** page, go to **Configuration**. Open the **Post Feeds** tab in the left sidebar and click the **Settings Icon** to open the existing feed.

> [!Note]
> If you do not have a **Post Feed** yet, click **+ Add Post Feed** under **Configuration → Post Feeds**. See [How to Create a Post Form with Fluent Forms](/create-a-post-form) for the full feed setup process.

![Add Post Feed](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/6.-Add-Post-Feed-scaled.webp)

2. A pop-up page opens with the Post Feed settings.

3. Select **"Update Post"** as the **Submission Type**. This gives the form access to all existing posts from your WordPress site. Without it, the **Post Update** field does not appear in your **Post Form**.

> [!Note]
> Use the **Post Feed** settings to map your post fields, then save the feed. For the full workflow, see [How to Create a Post Form with Fluent Forms](/create-a-post-form).

4. Click **Save Feed**. Your **Post Feed** is configured and the **Post Update** field works.

![Update Post Option](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/7.-Update-Post-option-scaled.webp)

## Embed the Form into Frontend

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

![Save Post Update Field in](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/8.-Save-Form-scaled-2.webp)

## Preview of Post Update field

Here is the Post Form with the **Post Update** field added.
Click the **Arrow Icon** to view all available posts on your site and select one.

![Preview Post Update Field in](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/9.-Form-Preview-scaled.webp)
