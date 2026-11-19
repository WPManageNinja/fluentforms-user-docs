---
description: "The Accordion container is a powerful feature that helps you organize long forms. It allows you to group related fields into collapsible sections."
---

# Add Accordion Container Fields

The Accordion container helps you organize long forms. It groups related fields into collapsible sections. Users click a section's title to expand or collapse it, so your form looks cleaner and is easier to navigate.

> [!Note]
> The Accordion container is a Pro feature.

## Add the Accordion Container

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Edit Accordion Container Fields](/images/form-fields/container-fields/add-accordion-container-fields/edit-form-scaled.webp)

In the editor, click the **Plus Icon** and open the [Container](/add-container-fields) module. You can also find **Container** in the right sidebar under the **Input Fields** tab.

Click the **Accordion Container**, or drag and drop it into your editor.

![Accordion Field](/images/form-fields/container-fields/add-accordion-container-fields/accordion-field-02-scaled.webp)

## Configure the Accordion Settings

Click an **Accordion/Tab** container in the editor. The right sidebar shows its **Customize** settings:

**A. Title:** Enter the title. This is the visible, clickable text on the accordion bar.

**B. Description:** Adds a line of smaller helper text below the title. This field is optional.

![Customize](/images/form-fields/container-fields/add-accordion-container-fields/Input-customization-03-scaled.webp)

**C. Display Mode:** Choose how the section appears. There are two options:

 * **1. Accordion:** This mode creates a collapsible section. Users see a title bar with a **plus (+)** icon. Clicking this bar expands the section to reveal the fields inside.

![Accordion Display](/images/form-fields/container-fields/add-accordion-container-fields/accordion-display-04-scaled.webp)

 * **2. Tabs:** This mode creates a horizontal tab. The Title you set becomes the label for a clickable tab. When a user clicks the tab, the form shows the fields for that section.

![Tabs Display](/images/form-fields/container-fields/add-accordion-container-fields/tabs-display-05-scaled.webp)

**D. Accordion/Tab Type:** This setting controls how multiple accordions or tabs are grouped. To create a stack of sections, use more than one Accordion/Tab field and set their **Type**:

- **Start:** Use this for the first section in your group.

- **Both:** Use this for any middle sections. This setting tells Fluent Forms to "close the previous section and start a new one."

- **Close:** Use this to end the group. You can also use **Both** for the last section.

**Start Collapsed:** (Accordion Mode Only) When checked, the accordion is closed when the form first loads. The user must click to open it.

**Collapse When Others Opened:** (Accordion Mode Only) Check this to enable the classic accordion effect. When a user opens this section, any other open sections in the group close automatically.

**E. Container Class:** Add a custom CSS class. Use this class in your stylesheet for advanced custom styling.

## Embed the Form into Frontend

Click **Save** in the top-right corner to keep your changes. Click the **Preview** (eye) icon at the top right to see a preview.

To show the form on a page or post, copy the **Shortcode** (for example, [fluentform id="1"]) from the top of the editor. Paste it into a "Shortcode" block in the Gutenberg editor or any page builder.

![Preview And Save Accordion Container Fields](/images/form-fields/container-fields/add-accordion-container-fields/Preview-and-save-06-scaled.webp)

### Preview of the Accordion Container

On the live form, the Accordion Container works like this:

- **Collapsed View:** If you enabled the "Start Collapsed" setting, the section is closed when the form first loads. Users see only the **Accordion Title** and **Description**, with a Plus Icon (+) on the right.

- **Expanding the Section:** When a user clicks anywhere on the title bar or the **Plus Icon (+)**, the container expands and reveals all the fields you placed inside it (like "Textarea" or "Country").

- **Expanded View:** Once expanded, the icon changes to a **Minus Icon (-)**. A user can click this icon or the title bar again to collapse the section and hide the fields.

> [!Note]
> The **+** and **−** icons expand or collapse one accordion section only. To let users add duplicate rows of fields, use the [Repeat Container Field](/add-repeat-container-field) or [Repeat Input Field](/repeat-input-field) instead.

![Final Fluent Forms](/images/form-fields/container-fields/add-accordion-container-fields/final-form-07.webp)
