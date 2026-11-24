---
description: "ACF (Advanced Custom Fields) is a WordPress plugin that allows you to add extra custom fields to your pages and posts."
---

# Use ACF to Add a Custom Field in the Post Form

**ACF** (**Advanced Custom Fields**) is a **WordPress** plugin that adds extra custom fields to your pages and posts. The Fluent Forms ACF integration works only with a Post Form created in Fluent Forms. It collects your users’ custom field data and shows it to your site’s visitors. This article shows you how to add **ACF** fields to a **Post Form**.

## Installing & Activating ACF Plugin

Install and activate the **ACF (Advanced Custom Fields)** plugin on your **WordPress** site first.

1. In the **WordPress Admin Panel**, go to **Plugins** and click **Add Plugin**.
2. Search for **ACF** in **Search Plugins** on the right. **Advanced Custom Fields (ACF)** appears.
3. Click **Install Now**.

![Install Advanced Custom Field Plugin](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/1.-Install-Advanced-Custom-Field-plugin-scaled.webp)

4. Click **Activate**.

![Activate Button Fluent Forms](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/2.-Activate-button-scaled.webp)

## Adding Custom Fields in ACF

Add the field you want to use as a custom field in your Post Form. **For example**, to review your posts, add a Post Reviewer field in ACF and use it in your Post Form.

1. In the **WordPress left sidebar**, go to **ACF** and click **Field Groups**.
2. Click **Add New** at the top of the page.

![Add Button Create Group Field Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/3.-Add-New-button-to-create-group-field--scaled.webp)

Give your **Field Group** a clear **Title** so you can find it later. Then use the dropdown arrows to open these two options:

1. **Fields:** Add the fields you want.
2. **Settings:** Set location rules, which decide when and where the field appears.

![Group Field Title Fields And Settings Options](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/4.-Group-field-title-Fields-and-Settings-options-scaled.webp)

### 1. Fields

- **Field Type:** Select the type of field to add.
- **Field Label:** Set the name of the field.
- **Field Name:** Define the field slug.
- **Default Value:** Set a pre-defined value for the field.

To add more fields, click **Close and Add Field** or **+ Add Field**. In this example, a **Text** type field creates the **Custom Post Reviewer** field.

> [!Note]
> To learn more about the Fields section, see this [Documentation](https://www.advancedcustomfields.com/resources/creating-a-field-group/#creating-a-new-field-group) from the ACF plugin.

![Fields Option Fluent Forms](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/5.-Fields-option.webp)

### 2. Settings

Under **Location Rules**, select the post type that uses this field. In this example, the rule is **Post Type** is equal to **Post**.

>[!Note]
> To learn more about the Settings section, see this [Documentation](https://www.advancedcustomfields.com/resources/creating-a-field-group/#settings) from the ACF plugin.

Click **Save Changes** to save the field group.

![Settings Save Changes Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/6.-Settings-Save-Changes-scaled.webp)

## Integrating the ACF Field in a Post Form

Now use the ACF custom field in a Post Form. Go to **Forms** in the **Fluent Forms Navbar** and click the title of your **Post Form** to open its **Editor** page.

![Open Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/7.-Open-desired-form-scaled.webp)

The Editor already shows the [Post Title](/add-post-title-field-in-post-forms) and [Post Content](/add-post-content-field-in-post-forms) fields.

To add the “**Post Reviewer”** **ACF** **Field**:

1. In the right sidebar, open **Input Fields**.
2. Click the **Arrow Icon** to open the **General Fields** dropdown list.
3. Click the **Text Area** field, or **Drag & Drop** it into your editor.

> [!Note]
> Match the Fluent Forms input type to your **ACF field type** (for example, use a compatible text field when ACF is set to **Text**).

![Add Text Area Field Post Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/8.-Add-Text-Area-field-in-a-Post-Form-scaled.webp)

## Configuring Post Feed Settings

**Configure** the **Post Feed** so your custom field works in the **Post Form**. The feed maps your added post fields for data collection and lets users create more customized posts.

1. In the **Editor** page, go to **Configuration**.
2. Open **Integrations & Add-ons** in the left sidebar and click **Post Feeds**.
3. Click the **Edit Icon** (pencil) to open the existing feed.

> [!Note]
> If you do not have a post feed yet, click **+ Add Post Feed** to create one. See [How to Create a Post Form with Fluent Forms](/create-a-post-form) for the full setup. The steps below use an existing feed.

![Settings Integrations Post Feed Options Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/9.-Settings-Integrations-Post-Feed-options-scaled.webp)

4. On the **Post Feed** page, scroll down to **ACF Plugin Mapping**.
5. Under **ACF Plugin Mapping**, choose between **General Fields** and **Advanced Fields**. The **Post Reviewer** field is a text-type general field, so map it under **General Fields**. Select **Post Reviewer** in the **ACF Field** dropdown. Then enter the form field, such as `{inputs.post_reviewer}`, in **Form Field (Value)**.
6. To add more general fields, click **+Add Another General Field** in the right corner. To delete a field, click the **Cross Icon**.

> [!Note]
> Map each **ACF field** to the matching **Fluent Forms** field in the feed settings.

7. Click **Save**.

Your ACF field integration is now active.

![ACF Plugin Mapping Option](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/10.-ACF-Plugin-Mapping-option.webp)

## Customizing the added ACF Field

Go back to the post form’s **Editor**. The **Custom Field** now appears in the form.

To **Edit** or **Customize** the field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right side with the field options.

> To learn more about the Text Area field, read the [Text Area Input Field guide](/adding-a-text-area-input-field).

![Customize Option Textarea Field](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/11.-Input-Customization-option-of-Textarea-field-scaled.webp)

## Embedding the Form into Frontend

1. Click **Save** to save your changes.
2. Click the **Preview** (eye) icon at the top right to preview the form.
3. **Copy** the **Shortcode** from the top right side.
4. **Paste** it into the **Page/Post** where you want the form to appear.

![Save Button Use ACF to Add](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/12.-Save-form-button-scaled.webp)

### Preview of ACF Field

The preview shows the added **ACF** field in a Post Form.

![Post Reviewer Field Preview](/images/advanced-developer/custom-fields-meta/use-acf-to-add-a-custom-field-in-the-post-form/13.-Post-Reviewer-field-preview.webp)
