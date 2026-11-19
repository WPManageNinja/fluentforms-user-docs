---
description: "With Fluent Forms Dynamic Fields, you can create fields that automatically pull in content like posts, users, taxonomy terms, or form data, giving users…"
---

# Dynamic Field

**Dynamic Fields** pull in content automatically, such as posts, users, [taxonomy terms](/add-categories-taxonomy-field-in-post-forms), or form data. They give users options tailored to your site.

This guide shows you how to set up and customize Dynamic Fields.

> [!Note]
> The **Dynamic** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

**Fluent Forms: Boost Form Efficiency with Dynamic Fields**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/cx3N5y1ddOQ" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding a Dynamic Input Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Edit Dynamic Field in Fluent](/images/form-fields/advanced-fields/dynamic-field/edit-form-01-18-scaled.webp)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Dynamic Input** field, or drag and drop it into your editor.

![Adding Dynamic Fluent Forms](/images/form-fields/advanced-fields/dynamic-field/Adding-dynamic--scaled.webp)

## Customizing the Dynamic Field

After you add the **Dynamic Input** field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right with these options:

- Dynamic Field Options

- Advanced Options

![Dynamic Field Customization](/images/form-fields/advanced-fields/dynamic-field/dynamic-field-customization-scaled.webp)

### Dynamic Field Options

These options in the **Customize** tab configure the **Dynamic Input** field.

**A.** **Element Label:** The field title users see when they fill out the **Dynamic** field. Enter text that explains the field's purpose.

**B. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**C. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**D. Required:** Turn on **Required** to make users select or enter a value before they submit.

**E. Field Type:** Choose from five types to determine how users interact with the dynamic data: **Radio, Checkbox, Select (dropdown), Multi-Select,** and **Text Autocomplete**.

- **Radio/Checkbox:** Users can respond using standard radio buttons or checkboxes.

- **Select/Multi-Select:** Users can choose one or multiple options from a dropdown menu.

- **Text Autocomplete:** Users type into the field and the form suggests matching results from the source data. With this type, you can also set:

  - **Placeholder:** The hint text shown in the field.
  - **Minimum Characters:** The number of characters a user types before suggestions appear. The default is 2.
  - **Max Suggestions:** The most suggestions the field shows. The default is 10.

![Dynamic Field Options](/images/form-fields/advanced-fields/dynamic-field/dynamic-field-options-scaled.webp)

### Types of Dynamic Fields

Fluent Forms offers five types of dynamic data. After you add a Dynamic Field to your form, choose the data to show from the **Source** dropdown.

After you select a source, use filters to narrow the data. Click the **Advance** tab and add one or more filter conditions. To combine conditions with **OR** logic, create separate groups of filters with the **Add Filter Group** button.

**1. Post Type:** Filter your posts so the form shows only specific posts. Users can then select from those posts.

Filter the post types to display, such as **Posts**, **Pages**, or **Products**. Click the **ADD** button at the bottom to set multiple filters and show only relevant posts.

![Unnamed Fluent Forms](/images/form-fields/advanced-fields/dynamic-field/unnamed.gif)

**2. Taxonomy Terms:** Add the taxonomy information you want to include in your group. Click **Add Filter Group** to add more taxonomy term groups and make the field more specific.

Click the **Plus Icon** to add a category from the dropdown. Click the **Minus Icon** to delete a category. Click the **Edit Icon** on the left side to edit the category name.

![Texonomy Fluent Forms](/images/form-fields/advanced-fields/dynamic-field/Texonomy-scaled.webp)

**3. Users Type:** Show WordPress users filtered by role, such as **Administrator**, **Editor**, or **Subscriber**.

![User Fluent Forms](/images/form-fields/advanced-fields/dynamic-field/user-07-scaled.webp)

**4. Form Submissions:** Show data from specific form submissions.

**Form and Field Selection:** Choose the form and specific field whose data you want to display. Additional filtering options are available to refine the data shown.

![Submission Fluent Forms](/images/form-fields/advanced-fields/dynamic-field/Form-Submission-08-scaled.webp)

**5. Dynamic CSV:** Use data from a **Google Sheet** or a **CSV** file in this field.

**CSV Setup:** For Google Sheets, publish the sheet as a CSV and use the published link in the **URL** section. Go to **File → Share → Publish to Web**. Make sure the sheet is publicly accessible.

![Dynamic CSV](/images/form-fields/advanced-fields/dynamic-field/dynamic-CSV-09-scaled.webp)

**Only Show Unique result:** If two options have the same value, the **Dynamic** field shows only one of them.

**Result Limit:** Limit the number of results shown. For example, if you have 50 posts, you can show only 30.

**Template Mapping:** Define placeholders that Fluent Forms replaces with values from your data source. This builds the options from your database records.

Choose **Label** and **Values** from the dropdown options. Click the **Edit Icon** on the right to edit the label and value.

**Dynamic Retrieval:** When you check this option, Fluent Forms fetches results based on filters when it renders the form. If unchecked, the current valid value stays unchanged.

**Enable Searchable Smart Option:** Makes the options searchable.

**Shuffle the Available Options:** Shuffles the options.

![Result Limit](/images/form-fields/advanced-fields/dynamic-field/Result-limit-10-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Dynamic Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read the [Dynamic Default Value documentation](/dynamic-default-value).

Click the **Three-Dot** option on the right to add the default value.

**B. Help Message:** Add text that appears as a help message for the user.

**C. Container Class:** Add custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**F. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic).

![Advanced Options](/images/form-fields/advanced-fields/dynamic-field/Advanced-options-11-scaled.webp)

## Embed the Form into Frontend

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Dynamic Field in Fluent](/images/form-fields/advanced-fields/dynamic-field/Save-Form-12-scaled.webp)

### Preview of Added Dynamic Field

Here is the form with the **Dynamic** field added.

![Preview Dynamic Field in Fluent](/images/form-fields/advanced-fields/dynamic-field/Preview-13-1.webp)
