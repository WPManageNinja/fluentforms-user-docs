---
description: "If your website contains a sticky header menu. In that case, users may encounter problems where the form is partially obscured under the header when…"
---

# Set Scroll Offset of Form Steps

If your site has a sticky header, the form can hide under it when auto-scroll runs in a multi-step form. Set a Scroll Offset to adjust the scroll position so the form stays fully visible.

This guide shows you how to set the Scroll Offset.

## Setting Scroll Offset

To set the Scroll Offset, add a short JavaScript snippet in the [Custom CSS & JS](/stylingcustom-css) settings. The script tells the auto-scroller to leave space at the top of the page, so the sticky header does not cover the form.

Open the **Form** where you want to set the **Scroll Offset** and go to its **Editor**.

>[!Note]
>If you don't have any existing forms, follow the [Create Blank Form](/create-a-form) or [Create Form using the Pre-built Template](/using-and-customizing-pre-built-quick-forms) documentation to create a new one.

In the **Editor**, click **Configuration** in the top bar, expand **Appearance** in the left rail, and open **Custom CSS & JS**.

Add this JavaScript under **Custom Javascript**:

```
window.ff_scroll_top_offset = 20;
```

> [!Tip]
> **`20`** is the scroll offset in pixels. If the form still sits under your sticky header, raise or lower the value until each step scrolls into view correctly.

Click **Save**. The Scroll Offset now applies to your form.

![Custom CSS Js](/images/configuring-forms/conditional-logic/set-scroll-offset-of-form-steps/Custom-CSS-JS-Fluent-Forms-12-06-2024_05_14_PM1-scaled.webp)
