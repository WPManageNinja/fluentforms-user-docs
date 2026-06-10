# Ratings Input Field

The **rating** input field in Fluent Forms allows users to provide feedback quickly, making it a great fit for [surveys and polls](/surveys-and-polls-in-fluent-forms). By default, the field includes five rating levels: **Nice, Good, Very Good, Awesome, and Amazing**. You can customize and add more rating options as needed.

This guide walks you through adding and customizing the **Ratings** field in Fluent Forms.

> [!Note]
> The **Ratings** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Adding Ratings Input Field

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, see [How to Create a Form with Fluent Forms](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Edit form to add Ratings field](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/edit-form-01-10-scaled.webp)

On the **Editor** page, click the **Plus** icon and open **Advanced Fields**. You can also find **Advanced Fields** in the right sidebar under **Input Fields**.

Click or drag the **Ratings** field into the editor.

![Add Ratings field to the form](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/new-15-scaled.webp)

## Customizing the Ratings Input Field

Hover over the field and click the **Pencil** icon to open **Input Customization**:

- Ratings Input field options
- Advanced Options

![Ratings field customization panel](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/input-customization-03-15-scaled.webp)

### Ratings Input Field Options

**A. Element Label:** The field title users see on the form.

**B. Label Placement:** Set label position to **Top**, **Left**, **Right**, or **Default**.

**C. Admin Field Label:** A label shown only to admins when viewing submissions.

**D. Options:** Customize rating levels:

- Set a default rating
- Rename rating levels
- Drag to reorder options
- Add options with **Plus (+)**
- Remove options with **Minus (−)**
- Enable **Show Value** for backend values
- Use **Bulk Edit** for batch changes

**E. Show Text:** Choose whether to display rating option labels.

**F. Required:** Require a rating before submission.

![Ratings field basic options](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/Basic-options-04-13-scaled.webp)

### Icon Source

Change icon style per field. Existing forms keep the default setup if you leave these settings unchanged.

In **Icon Source**, choose:

**1. Preset Icons (Default):** Built-in shapes from the **Preset Icon** dropdown:

- **Star** (default)
- **Heart**
- **Thumb**
- **Smile**
- **Bolt**

![Ratings preset icon options](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/icon-source-1-scaled.webp)

**2. Custom SVG:** Paste full SVG markup into **Custom SVG Icon**. Use `currentColor` for fill and stroke so the icon inherits your color settings. Keep icons simple single-path SVGs without gradients for best cross-browser results. Markup outside the SVG tag is stripped on save.

### Colors

Two color pickers control icon appearance:

- **Inactive Color:** Color of unselected icons
- **Active Color:** Color of the selected icon

Hover feedback is derived from the inactive color.

![Ratings custom SVG and color settings](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/custom-svg-2-scaled.webp)

### Advanced Options

**A. Help Message:** Guidance text shown below the field.

**B. Name Attribute:** The HTML name attribute. You usually do not need to change this.

**C. Conditional Logic:** Show or hide the field based on other values. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic-in-fluent-forms).

![Ratings advanced options](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/Advanced-options-05-11-scaled.webp)

## Embed the Form into the Front

Click **Save Form** to apply your changes.

Copy the form **Shortcode** from the top right and paste it into a **Page** or **Post**. Click **Preview & Design** to preview the form.

![Save and embed the form](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/Save-Form-06-15-scaled.webp)

### Preview of Added Ratings Input Field

Here is a preview of the form with the **Ratings** field.

![Ratings field frontend preview](/images/form-fields/advanced-fields/ratings-input-field-in-fluent-forms/rating-preview.webp)
