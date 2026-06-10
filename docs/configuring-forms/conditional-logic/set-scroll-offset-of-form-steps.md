# Set Scroll Offset of Form Steps

If your website contains a sticky header menu. In that case, users may encounter problems where the form is partially obscured under the header when auto-scroll is enabled in a multi-step form. To fix this, you can set a Scroll Offset to adjust the scroll position, ensuring the form is fully visible.

This article will guide you on how to set the Scroll Offset using Fluent Forms. 

## Setting Scroll Offset

To set the Scroll Offset, you need to add [Custom CSS](/fluent-forms-stylingcustom-css), JavaScript, or **Both**. This script instructs the auto-scroller to allow some space at the top of the page while scrolling, preventing the form from being hidden under the sticky header.

First, open an existing **Form** where you want to set the **Scroll Offset** and go to its **Editor** page.

>[!Note]
>If you don't have any existing forms, follow the [Create Blank Form](/how-to-create-a-form-with-fluent-forms) or [Create Form using the Pre-built Template](/using-and-customizing-pre-built-quick-forms-in-fluent-forms) documentation to create a new one.

Once you are on the **Editor** page of your desired form, go to the **Settings & Integrations** section, and open the **Custom CSS/JS** tab from the left sidebar. Then, enter the **CSS**, **JavaScript**, or **Both** here according to your requirements. 

Add this JavaScript under **Custom CSS/JS**:

```
window.ff_scroll_top_offset = 20;
```

> [!Tip]
> **`20`** is the scroll offset in pixels. If the form still sits under your sticky header, raise or lower the value until each step scrolls into view correctly.

Once you are done, press the **Save & JS** button and the Scroll Offset will be set in your desired forms.

![Custom CSS Js](/images/configuring-forms/conditional-logic/set-scroll-offset-of-form-steps/Custom-CSS-JS-Fluent-Forms-12-06-2024_05_14_PM1-scaled.webp)
