---
description: "Fluent Forms offers Taxonomy Fields that allow you to group your posts based on categories, tags, and other taxonomies available on your WordPress site."
---

# Add Tags Taxonomy Field in Post Forms

**Fluent Forms** offers **Taxonomy Fields** that let you group your posts by categories, tags, and other taxonomies available on your WordPress site.

> [!Note]
> **Taxonomy Fields** appear only in **Post Forms**. For custom taxonomies, see [How to Create a Post Form with Fluent Forms](/create-a-post-form).

This article shows you how to add the **Tags Taxonomy Field** to your form. The **Tags** field lets users write a tag and submit their posts under that tag in your WordPress site through the form. To let users group posts by section instead, add the [Categories Taxonomy Field](/add-categories-taxonomy-field-in-post-forms).

> [!Note]
> This field is a Pro feature. It appears in the editor only when the **Post/CPT Creation** module is enabled. See [Create a Post Form](/create-a-post-form).

## Add Tags Field

Go to **Forms** in the Fluent Forms navbar. Click the title of your **Post Form** to open the form editor.

![Open Post Tags Taxonomy Field in](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/1.-Open-desired-Post-form-6-scaled.webp)

In the editor, go to **Input Fields** in the right sidebar. Click the **Arrow Icon** to open the **Taxonomy Fields** dropdown list. Click the **Tags** field, or drag and drop it into your editor.

![Add Tags Field](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/2.-Add-Tags-field-scaled.webp)

## Customize Tags Field

Hover over the **Tags** field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

1. Tags

2. Advanced Options

![Customize tab](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/3.-Input-Customization-tab-3-scaled.webp)

### 1. Tags

Configure **Tags** labels, taxonomy display type, and validation:

**A. Element Label:** The field title users see when they fill out the **Tags** field. Enter text that explains the purpose of the field.

**B. Label Placement:** Set where the label appears. The options are **Top**, **Right**, **Bottom**, **Left**, **Hide Label**, and **Default**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**E. Required:** Select the **Yes** radio button to make this field mandatory for a successful submission. Select **No** to make it optional.

![Tags Option Fluent Forms](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/4.-Tags-option-scaled.webp)

### 2. Advanced Options

Configure **Advanced** options:

**A. Default Value:** Set a default value to pre-populate the field. You can also set the value with **SmartCodes**. To learn more, read [Form Editor Smart Codes](/form-editor-smart-codes).

**B. Container Class:** Add custom CSS classes to the field’s wrapper.

**C. Element Class:** Add custom CSS classes to the input field itself. Use it to add custom CSS or JS for a specific input field.

**D. Help Message:** Add text that appears as a help message for the user.

**E. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**F. Conditional Logic:** Make the Tags field work conditionally based on your submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic).

![Advanced Options](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/5.-Advanced-Options-9-scaled.webp)

## Configure Post Feed Settings

Configure the **Post Feed**. This step is **mandatory** to make your **Post Form** work. The feed maps your post fields for data collection and lets users create more customized posts.

> [!Note]
> Use the **Post Feed** settings to map your post fields, then save the feed. For the full workflow, see [How to Create a Post Form with Fluent Forms](/create-a-post-form).

## Embed the Form into Frontend

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

![Save Tags Taxonomy Field in](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/6.-Save-Form-6-scaled.webp)

### Preview of Tags field

Here is the Post Form with the **Tags** field added.

![Preview Tags Taxonomy Field in](/images/form-fields/post-taxonomy-fields/add-tags-taxonomy-field-in-post-forms/7.-Form-Preview--scaled.webp)
