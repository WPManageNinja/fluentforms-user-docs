---
description: "Create Meta Box custom fields and map them to a Fluent Forms Post Feed, so form submissions save their values to your posts."
---

# Use Meta Box Custom Fields

Fluent Forms integrates with the **Meta Box** plugin. Meta Box is a free Gutenberg and GDPR-compatible WordPress custom fields plugin and framework. It adds meta boxes and custom fields to your site. This article shows you how to use **Meta Box Custom Fields** with **Fluent Forms** on your WordPress site.

## Install Required Plugins

**Meta Box Plugin**: Install and activate the **Meta Box** plugin and the **Meta Box Builder** plugin to create custom fields.

![Meta Box Custom Field](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Metabox-custom-field-01-scaled.webp)

>[!Note]
> Fluent Forms supports **Meta Box**, **ACF**, and **JetEngine** custom fields. It does not support **CMB2**, so fields you build with CMB2 do not appear in the feed mapping.

**Fluent Forms Pro** is also required, because the **Post/CPT Creation** module is part of it.

## Add Field Groups in Meta Box

1. In the **Meta Box Plugin**, click **Add New Field Group**.

![Custom Field Add](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/custom-field-add-03-scaled.webp)

2. Enter a **Title** for the field group.
3. Click **+Add Fields** to add custom fields.

![Fiel Custom](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Fiel-Custom-04-scaled.webp)

4. Scroll down to select a field type, or **search** for the field in the search box.

![Select Field use Meta Box Custom](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/select-field-05-scaled.webp)

Each field has two tabs: the **General Tab** and the **Advanced Tab**.

### General Tab

**Label**: The text users see on the form.

**ID**: The unique identifier for this field. It is used for backend reference or in custom integrations.

**Type**: The data type of the field.

**Label Description**: An optional description that gives more detail about the field label.

**Input Description**: Instructions or context for the user when filling out this field.

**Default Value**: Pre-populates the field with a default email address or text.

**Placeholder**: Shows temporary text inside the field ("Enter your email").

**Size of the Input Box**: Sets the width or size of the input field.

**Required**: Makes the field mandatory. When it is on, users cannot submit the form without completing this field.

**Disabled**: Prevents users from entering data into the field.

**Read-Only**: Makes the field non-editable while it displays the value.

**Prepend Text**: Adds a fixed string at the beginning of the input field (for example, mailto:).

**Append Text**: Adds a fixed string at the end of the input field.

**Cloneable**: Lets the form duplicate this field if necessary.

![Genral Tab](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Genral-Tab-06-scaled.webp)

### Advanced Tab

**Before**: A text or HTML block that appears **before the input field**. For example, add a description, label, or styling element above the field.

**After**: A text or HTML block that appears **after the input field**. For example, add instructions, error messages, or formatting details below the field.

**Custom CSS Class**: Adds one or more CSS class names to style this field. For example, `custom-email-class` can add specific styles defined in your CSS file.

**Custom Sanitize Callback**: Specifies a custom function to sanitize the input data. It is useful for extra email validation or processing before saving.

**Save the Field**: Turn this on or off to save the field’s value to the database.

**Custom HTML5 attributes**: Click **+Add New** to add any custom HTML5 attributes to the field.

**Validation**: Define rules to validate the field input before the form is submitted. Click **+Add New** to add a rule. For example, create a rule for allowed domains (for example, @example.com) or validate format compliance.

**Custom Settings**: Click **+Add New** under **Custom Settings** to add more configuration options.

Click **Publish** to save your custom fields.

![Advanced Tab](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/advanced-tab-07-04-10-2025_04_00_PM-scaled.webp)

### Settings

**Location**: Sets where the custom fields in this group appear. The fields appear for posts and pages, as you select in the dropdown.

**Position**: Choose **After Content** or **Side** from the dropdown.

**Priority**: Set the field priority to High or Low.

**Style**: Uses the **Standard WordPress meta box** style. You can also choose **no meta style** from the dropdown.

Add **Additional Settings** from here as you need.

Click **Update** or **Publish**.

![Settings use Meta Box Custom](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Settings-09-scaled.webp)

## Enable Post/CPT Module

1. Go to **Integrations** in the Fluent Forms Navbar.
2. Search for **Post** in the search bar and find the **Post/CPT Creation** module.
3. Turn on the **Enabled** button.
4. Select an existing [**Post Form**](/create-a-post-form) from the Fluent Forms dashboard, or create a new one.

>[!Note]
> The **Post Feeds** menu appears only in a **Post Form**. A regular or blank form does not show it, so you cannot map Meta Box fields there. Create the form with the **Post Form** type first.

![Create Post](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/create-post-form-10-scaled.webp)

## Map Meta Box Custom Fields

1. Open the **Configuration** tab in the post form editor.
2. Open **Integrations & Add-ons** in the left menu and click **Post Feeds**.
3. Click **Add Post Feed**.
4. Scroll down to the **MetaBox (MB) Plugin Mapping** section.

The mapping section loads the fields of the **Post Type** you choose in the feed. Make sure your Meta Box field group has that post type in its **Location** setting. If the section is empty, check that the **Meta Box** plugin is active and that the field group matches the feed's post type.

![Post Feed](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Post-Feed-11-scaled.webp)

### Create a New Feed

**A. Feed Name:** Enter a unique name for your feed.

**B. Submission Type:** Select **New Post** to create a new post, or **Update Post** to update an old post.

**C. Allow Logged-out users to create posts:** Check **Allowed** to let non-logged-in users submit posts. Uncheck **Allowed** to limit post submission to logged-in users.

**Post Status:** Sets the status of the saved post. The options are:

   - **Draft:** Saves submissions for manual review before publishing.
   - **Publish:** Makes posts live on submission.
   - **Pending Review:** Requires admin approval before publication.
   - **Private:** Makes the post visible only to site admins and editors.

   The default is **Publish**.

**Comment Status:** Choose an option from the dropdown.

   - **Open:** Lets visitors comment on the submitted post.
   - **Closed:** Disables comments for the post.

**Default Category:** Choose the category that new posts use, such as **Uncategorized**.

**D. Post Fields Mapping:** Map the form fields to WordPress post fields (Post Title and Post Content).

   - **Post Title:** Input from the form field mapped to the post title.
   - **Post Content:** Main content submitted by the user.
   - **Post Excerpt:** Optional. Used as a summary or teaser for the post.

Taxonomies (like tags or categories) and featured images also map automatically if the form has them.

![Create Feed](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Create-new-feed-12-scaled.webp)

**E. MetaBox (MB) Plugin Mapping:** Scroll down to the **MetaBox (MB) Plugin Mapping** section. Under **General Fields**, select the custom field from **Meta Box** in the **MetaBox (MB) Field** dropdown. Then enter the matching form field in **Form Field (Value)**, for example `{inputs.event_location}`. Click **Add Another General Field** to map more fields. Use **Advanced Fields** for the other Meta Box field types.

**F. Enable Conditional Logic:** To create the **MetaBox Post** only for certain submission values, turn on **Enable Conditional Logic**. To learn more, read the [Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic) guide.

Click **Save**.

![Map Meta Box Feed](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/map-the-metabox-feed-13.webp)

Go to the **Preview Page**, add some data to the form, and click **Submit Form**.

![Preview Post use Meta Box Custom](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Preview-Post-13-1-scaled.webp)

Go to the **Posts** page and click **Edit** on your submitted **Post**. The **Metabox custom field** and its value appear on the **Post** page.

![Final Custom Post](/images/advanced-developer/custom-fields-meta/use-meta-box-custom-fields/Final-Custom-post-13-scaled.webp)
