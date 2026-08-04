---
description: "The Accordion container is a powerful feature that helps you organize long forms. It allows you to group related fields into collapsible sections."
---

# Add Accordion Container Fields

The Accordion container is a powerful feature that helps you organize long forms. It allows you to group related fields into collapsible sections. Users can click a section's title to expand or collapse it, making your form look cleaner and easier to navigate.

## Add the Accordion Container

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Edit Accordion Container Fields](/images/form-fields/container-fields/add-accordion-container-fields/edit-form-scaled.webp)

Once you are on the **Editor** page, click the **Plus** Icon in your form editor and open the [Container](/add-container-fields) input fields module. The Container option is also in the right sidebar under the **Input** **Fields** tab. 

Now, choose the desired **Accordion Container** by clicking on it or Drag & Drop it into your editor.

![Accordion Field](/images/form-fields/container-fields/add-accordion-container-fields/accordion-field-02-scaled.webp)

## Configure the Accordion Settings

When you click on an **Accordion/Tab** container in the form editor, the sidebar on the right will show all its **Input Customization** settings.

Here is a breakdown of each setting:

**A. Title:** Enter a suitable title. This is the visible, clickable text that appears on the accordion bar.

**B.** **Description:** This adds a line of smaller helper text directly below the title. This is an optional field.

![Input Customization](/images/form-fields/container-fields/add-accordion-container-fields/Input-customization-03-scaled.webp)

**C. Display Mode:** This option enables you to select the appearance of the forms in the display. Here you will find two options.

 * **1. Accordion:** This mode creates a collapsible section. Users see a title bar with a **plus (+)** icon. Clicking this bar expands the section to reveal the fields inside.

![Accordion Display](/images/form-fields/container-fields/add-accordion-container-fields/accordion-display-04-scaled.webp)

 * **2. Tabs:** This mode creates a horizontal tab. The Title you set becomes the label for a clickable tab. When a user clicks the tab, the form shows the fields for that section.

![Tabs Display](/images/form-fields/container-fields/add-accordion-container-fields/tabs-display-05-scaled.webp)

**D. Accordion/Tab Type:** This setting controls how multiple accordions or tabs are grouped. To create a stack of sections, you must use more than one Accordion/Tab field and configure their **Type**:

- **Start:** Use this for the first section in your group.

- **Both:** Use this for any middle sections. This setting tells Fluent Forms to "close the previous section and start a new one."

- **Close:** You can use both for the last section as well, or you can use Close to properly end the group.

**Start Collapsed:** (Accordion Mode Only) When this box is checked, the accordion will be closed by default when the form first loads. The user must click to open it.

**Collapse When Others Opened:** (Accordion Mode Only) Check this to enable the classic accordion effect. When a user opens this section, any other open sections in the group will automatically close.

**E. Container Class:** This field allows you to add a custom CSS class. You can then use this class in your stylesheet for advanced custom styling.

## Embed the Form into Frontend

Once you complete the customization, click the **Save Form** button in the top-right corner to save all your changes. To see a preview, click the **Preview & Design** button.

To display the form on a page or post, copy the **Shortcode** (e.g., [fluentform id="1"]) from the top of the editor and paste it into a "Shortcode" block in the Gutenberg editor or any page builder.

![Preview And Save Accordion Container Fields](/images/form-fields/container-fields/add-accordion-container-fields/Preview-and-save-06-scaled.webp)

### Preview of the Accordion Container

Here is how the Accordion Container will look and function for your users on the live form:

- **Collapsed View:** If you enabled the "Start Collapsed" setting, the section will be closed when the form first loads. Users will only see the **Accordion Title** and **Description**, with a Plus Icon (+) on the right.

- **Expanding the Section:** When a user clicks anywhere on the title bar or the **Plus Icon (+)**, the container will expand. This will smoothly reveal all the fields you placed inside it (like "Textarea" or "Country").

- **Expanded View:** Once expanded, the icon will change to a **Minus Icon (-)**. A user can click this icon or the title bar again to collapse the section, hiding the fields.

> [!Note]
> The **+** and **−** icons expand or collapse one accordion section only. To let users add duplicate rows of fields, use the [Repeat Container Field](/add-repeat-container-field) or [Repeat Input Field](/repeat-input-field) instead.

![Final Fluent Forms](/images/form-fields/container-fields/add-accordion-container-fields/final-form-07.webp)

This way, you can easily add the Accordion Container fields in Fluent Forms!
