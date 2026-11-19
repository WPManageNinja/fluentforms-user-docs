---
description: "Fluent Forms offers a built-in popup feature that makes displaying forms in a modal, popup, or lightbox easy."
---

# Modal/Popup/Lightbox

Fluent Forms has a built-in popup feature that shows a form in a modal, popup, or lightbox. A button triggers the popup.

This guide shows you how to create and customize a popup form with a shortcode.

> [!Note]
> **Modal/Popup/Lightbox** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Shortcode Attributes

- **form_id:** The ID of the form to show.
- **btn_text:** The text on the trigger button. The default is "Contact Me".
- **css_class:** CSS classes for the trigger button. The default is "btn btn-success".
- **bg_color:** The background color of the popup. The default is "white".
- **form_class:** Extra CSS classes for the form inside the popup.

## Displaying the Popup Form

To display a form in a popup, use a different shortcode from the usual one. The basic format is:

```
[fluentform_modal form_id="228"]
```

> [!Note]
> Replace the example form ID in the shortcode with your form’s ID.

Replace "228" with your form ID. Open **Forms** and find the ID in the **ID** column (for example, #228).

![Editor Fluent Forms](/images/design-styling/modalpopuplightbox/Editor-Fluentform.webp)

Paste the shortcode into the page or post where you want the popup to appear.

To change the text on the trigger button, add btn_text="**Click Me**" to your shortcode:

```
[fluentform_modal form_id="228" btn_text="Click Me"]
```

To change the background color of the popup, add bg_color="**red**" (or another color):

```
[fluentform_modal form_id="228" btn_text="Subscribe" bg_color="green"]
```

To style the button with custom CSS, add classes with the css_class parameter:

```
[fluentform_modal form_id="228" btn_text="Subscribe" css_class="myClass myClassAgain" bg_color="red"]
```

The shortcode adds the CSS classes to the button, so you can style it your way.

![Contact Zoro Fluent Forms](/images/design-styling/modalpopuplightbox/Contact-zoro-04-22-2025_06_07_PM.webp)

> [!Note]
> You can use any popup builder, such as Popup Maker or Elementor Popup. Add the Fluent Forms shortcode inside the popup builder.
