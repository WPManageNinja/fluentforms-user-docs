---
description: "Using the CSS Ready Classes in Fluent Form, you can easily create more advanced alternative layouts for the fields in your forms."
---

# Use CSS Ready Classes

CSS Ready Classes let you create advanced alternative layouts for the fields in your forms. They also give you pre-defined styles from the default form stylesheet.

This guide shows you how to add a Ready Class to a field and lists the classes you can use.

## Add CSS Classes

1. Edit your form in the Form Builder and click the field where you want to add the classes.
2. Open the **Customize** tab in the right panel and expand **Advanced Options**.
3. Add the **Ready Class** name or names in the **Container Class** input.
4. Click **Save**.

> [!Note]
> This feature does not update live in the form builder.

![use CSS Ready Classes step](/images/design-styling/use-css-ready-classes/321-scaled.webp)

## Ready Class Names

The Fluent Forms default stylesheet includes these Ready Classes. You can use them without writing your own CSS.

### ff_list_2col

Turns a [Radio](/radio-field) or checkbox list into an equally spaced 2-column format. It applies only to Radio and checkbox lists and works with any form label position setting.

### ff_list_3col

Turns a Radio or checkbox list into an equally spaced 3-column format. It applies only to Radio and checkbox lists and works with any form label position setting.

A form preview without a Container Class:

![Preview use CSS Ready Classes](/images/design-styling/use-css-ready-classes/Preview-02.webp)

A form preview with a **Container Class**:

![use CSS Ready Classes step](/images/design-styling/use-css-ready-classes/02-2.webp)

### ff_list_4col

Turns a Radio or checkbox list into an equally spaced 4-column format. It applies only to Radio and checkbox lists and works with any form label position setting.

### ff_list_5col

Turns a Radio or checkbox list into an equally spaced 5-column format. It applies only to Radio and checkbox lists and works with any form label position setting.

### ff_list_inline

Turns a Radio or checkbox list into an inline horizontal list, not evenly spaced columns. It applies only to multiple **Radio** and **checkbox** lists and works with any form label position setting.

### ff_scrolled_text

Converts an HTML field into a box with a fixed height. The box shows a scroll bar when the text is long.

Use it to show a large amount of content, such as a Terms of Service agreement, without linking to it or making the form very long. This class works only on [section breaks](/section-break) and with any form label position setting.

![Scroll Text](/images/design-styling/use-css-ready-classes/scroll-text-03-scaled.webp)

### ff_force_hide

Hides an input field on the front end of your site. Use it when you want a field to store values but not show it to users.

### ff_pointer

Changes the cursor to a pointer when users hover over an input field.

### ff-read-only

Stops users from editing the input field. They can only view it. Under **Advanced Options**, add the Ready Class name in the **Container Class** or **Element Class** input, then save the form.

### ff-hidden

Keeps the input field hidden from users. The field stays visible to the admin.

> [!Note]
> CSS classes are not compatible with Conversational Forms.
