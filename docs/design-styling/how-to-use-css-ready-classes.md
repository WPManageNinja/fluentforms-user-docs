# How to use CSS Ready Classes

Using the CSS Ready Classes in Fluent Form, you can easily create more advanced alternative layouts for the fields in your forms. You can also to take advantage of pre-defined styles included in the default form stylesheet.

This article will guide you how you can use CSS ready classes in Fluent Forms.

## Add CSS Classes

First, edit your form in the Form Builder and select the field where you want to add the classes.

Now, From the **Advanced Options** tab, you’ll see an input called **Container Class**. Add the **Ready Class** name or names you want to add to the field and click the **Save Form** button.

>[!Note]
> This feature does not update live in the form builder.

![use CSS Ready Classes step](/images/design-styling/how-to-use-css-ready-classes/321-scaled.webp)

## Ready Class Names

Here are the Ready Classes built into the Fluent Forms default stylesheet, which you can use immediately without writing your own CSS.

#### ff_list_2col

This turns a [Radio](/docs/radio-field-in-fluent-forms)/[checkbox](/docs/checkbox-field-in-fluent-forms) list into an equally-spaced 2-column format. It only applies to Radio/checkbox lists and works with any form label position settings.

#### ff_list_3col

This turns a Radio/checkbox list into an equally-spaced 3-column format. This only applies to Radio/checkbox lists and works with any form label position settings.

A Forms preview that without Container Class

![Preview use CSS Ready Classes](/images/design-styling/how-to-use-css-ready-classes/Preview-02.webp)

A preview Forms with **Container class**.

![use CSS Ready Classes step](/images/design-styling/how-to-use-css-ready-classes/02-2.webp)

#### ff_list_4col

This turns a Radio/checkbox list into an equally-spaced 4-column format. This only applies to Radio/checkbox lists and works with any of the form label position settings.

#### ff_list_5col

This turns a Radio/checkbox list into an equally-spaced 5-column format. This only applies to Radio/checkbox lists and works with any of the form label position settings.

#### ff_list_inline

This turns a Radio/checkbox list into an inline horizontal list (not evenly spaced columns). This only applies to multiple **Radio/checkbox** lists and works with any of the form label position settings.

#### ff_scrolled_text

This converts an HTML field into a box with a fixed height that will automatically show a scroll bar if there's a large amount of text. 

This is useful if you want to show a large amount of content to the user but don’t want to have to link to it or make the form very long to show it (Terms of Service Agreements, etc.). This class only works on [section breaks](/docs/section-break-in-fluent-forms) and with any form label position settings.

![Scroll Text](/images/design-styling/how-to-use-css-ready-classes/scroll-text-03-scaled.webp)

#### ff_force_hide

This will hide an input field from being displayed on the front end of the website. This is useful when you want to use an input field in your form to store some values or data but don’t want to display it to the users when they fill up the form.

#### ff_pointer

The cursor will change to a pointer when hovering over an input field.

#### ff-read-only

This class restricts the input fields from being edited; they can only be viewed by the user. Under the "**Advanced Options**" tab, you'll see an input called Element Class. Add the Ready Class name to the field and save the form.

#### ff-hidden

This will keep the input field hidden, where this field is visible to the admin.

<<<<<<< HEAD
> CSS classes are not compatible with [Conversational Forms](/docs/how-to-create-a-conversational-form).
=======
>[!Note]
> CSS classes are not compatible with Conversational Forms.
>>>>>>> tajulauthlab
