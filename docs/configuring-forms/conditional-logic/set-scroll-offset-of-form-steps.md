---
description: "If your website contains a sticky header menu. In that case, users may encounter problems where the form is partially obscured under the header when…"
---

# Set Scroll Offset of Form Steps

When a visitor moves to another step in a multi-step form (Pro), the page scrolls back to the start of the steps. If your site has a sticky header, the form can hide under it. Set a Scroll Offset to control where the page scrolls to.

This guide shows you how to set the Scroll Offset.

## Setting Scroll Offset

To set the Scroll Offset, add a short JavaScript snippet in the [Custom CSS & JS](/stylingcustom-css) settings. The value you set is the page position, in pixels from the top of the page, that the page scrolls to on each step change. Without it, the page scrolls to 100 pixels above the start of the steps. The page scrolls only when the start of the steps is out of view.

> [!Note]
> To save Custom JS, your WordPress user needs the `unfiltered_html` capability.

Open the **Form** where you want to set the **Scroll Offset** and go to its **Editor**.

>[!Note]
>If you don't have any existing forms, follow the [Create Blank Form](/create-a-form) or [Create Form using the Pre-built Template](/using-and-customizing-pre-built-quick-forms) documentation to create a new one.

In the **Editor**, click **Configuration** in the top bar, expand **Appearance** in the left rail, and open **Custom CSS & JS**.

Add this JavaScript under **Custom Javascript**:

```js
window.ff_scroll_top_offset = 20;
```

> [!Tip]
> **`20`** makes the page scroll to 20 pixels from the top of the page, wherever the form sits. It is not a gap above the form. Set the value to the position where your form should appear, for example the form's distance from the top of the page minus your header height.

Click **Save**. The Scroll Offset now applies to your form.

To turn off step scrolling, add this line under **Custom Javascript** instead:

```js
window.ff_disable_step_scroll = true;
```

![Custom CSS Js](/images/configuring-forms/conditional-logic/set-scroll-offset-of-form-steps/Custom-CSS-JS-Fluent-Forms-12-06-2024_05_14_PM1-scaled.webp)
