---
description: "The Action Hook field in Fluent Forms allows developers to insert dynamic elements into forms."
---

# Action Hook Field

The **Action Hook** field lets [developers](/advanced-developer-overview) insert dynamic elements into a form. This guide shows you how to add and customize the **Action Hook** field on your WordPress site.

> [!Note]
> The **Action Hook** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding Action Hook Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Editor Fluent Forms](/images/form-fields/advanced-fields/action-hook-field/form-editor-01.png)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Action Hook** field, or drag and drop it into your editor.

![Add Action Hook 1024x500](/images/form-fields/advanced-fields/action-hook-field/add-action-hook-02-1024x500.png)

## Customizing the Action Hook Field

After you add the field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

- Action Hook Input Options

- Advanced Options

![Ad 4nxcfzlitbhlasejrzhrss Etwgfmnrggbzuxeqthf4hw Fg6ukornuryjmytbjc1yqrzx462ljymx59rsvlwn1tg3mdtto03](/images/form-fields/advanced-fields/action-hook-field/AD_4nXcfzLitBhLasEJrZHRSs-EtWGfmnRGGbzuXeqthf4HW-fG6ukOrNURYJMYtbJC1YqrZx462LjYmx59rSvlwn1tg3mDTtO03_DasAJg-zAgMmmu7_15sDP-BkzggW0i9EK-AKzCWFQ.png)

### Action Hook Input Options

These options in the **Customize** tab configure the **Action Hook** field.

**A. Hook Name:** Enter a unique hook name to trigger custom functionality at this location.

You get one parameter to work with: $form.

add_action(‘HOOK_NAME’, ‘your_function_name’, 10, 3 );
function your_function_name( $form ) {
  // do whatever you want
}

![Action Hook Options](/images/form-fields/advanced-fields/action-hook-field/action-Hook-options-04.png)

### Advanced Options

Advanced settings let you adapt the field to specific use cases. The screenshot below shows the settings under **Advanced Options**.

**A. Element Class:** Add custom CSS classes to the input field.

**B. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic).

![Advanced Option](/images/form-fields/advanced-fields/action-hook-field/Advanced-option-05.png)

## Embed the Form into the Front

Click **Save** to apply your changes.

To show the form on a page or post, copy the **Shortcode** from the top-right corner and paste it into that page or post.

To preview the form, click the **Preview** (eye) icon at the top right.

![Save Action Hook Field](/images/form-fields/advanced-fields/action-hook-field/Save-Form-06.png)

The **Action Hook** field now works in your Fluent Form.
