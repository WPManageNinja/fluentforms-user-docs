---
description: "Multi-step forms are an effective way to collect more data from users without overwhelming them."
---

# Creating a Multi-Step Form

Multi-step forms let you collect more data without overwhelming users. Splitting a long form into steps makes it easier to fill out. This guide shows you how to create a multi-step form and set up each step marker.

> [!Note]
> **Multi-step forms** require the **Fluent Forms Pro Add-on**. Install and activate the free Fluent Forms plugin first, then add Pro. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VQTWnM6BbRU" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Creating a Multi-Step Form

You can start from a [pre-built template](/using-and-customizing-pre-built-quick-forms) or a blank form. This guide uses a **Blank Form**. For the steps, see [Create a Form](/create-a-form).

On the **Editor** page, open the **Advanced Fields** group under the **Input Fields** tab on the right. Drag the **Form Step** field into your editor.

![Add Form Step field](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/1.-Adding-Form-Step-field-1-scaled.webp)

The **Form Step** field adds three markers:

- **PAGING START**
- **PAGE BREAK**
- **PAGING END**

![Multi-step paging fields](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/2.-Paging-Start-Break-End-steps-scaled.webp)

The sections below explain each marker.

## 1. Paging Start

The **Paging Start** block controls the indicator behavior and styles for the whole multi-step sequence. Hover over the **PAGING START** bar in your editor and click the **Pencil Icon** to open the **Customize** settings.

**Element Class:** Add custom CSS classes to the Paging Start block. See [How to Use CSS Ready Classes](/use-css-ready-classes) for available options.

### Progress Indicator

The **Progress Indicator** setting controls how step progress shows at the top of the form. You can choose one of four layout styles:

- **Progress Bar:** Shows a standard progress bar with a numeric indication of progress, such as "1 of 2 steps completed".
- **Steps:** Shows a numbered list of step titles and highlights the current step. Completed steps are clickable, so visitors can jump back to any step they finished. Steps they have not reached stay locked, so the normal validation order still applies.
- **Tabs:** Shows step titles as clickable tab buttons. Visitors can jump back to any completed step in one click.
- **None:** Hides all progress indicators.

> [!Tip]
> For the **Steps** and **Tabs** indicators, the values you enter in **Step Titles** become the labels. If you leave them blank, Fluent Forms uses Step 1, Step 2, and so on.

### Tabs Indicator Settings

**Tab Position:** Sets the layout of your step tabs:

- **Top** (Default): Tabs align horizontally above the form. If they overflow the screen width, they scroll horizontally instead of wrapping.
- **Left:** Tabs show vertically in a column to the left of the form. This works well for many steps or long step titles.

**Show Progress Bar Under Tabs:** Check this box to show a compact progress bar directly beneath the horizontal tab strip. It is off by default.

### Animation & Page Controls

- **Animation Type:** Choose the transition style when moving between steps (**Slide Left/Right**, **Fade In/Out**, **Slide Down/Up**, or **None**).
- **Step Titles:** Enter your own text labels for **Step 1**, **Step 2**, and so on, to replace the default step text.
- **Disable auto focus when changing each page:** Check this to stop the page from scrolling to the top of the form when a user changes steps.
- **Enable auto page change for single radio field:** When enabled, the form moves to the next step as soon as a user selects an option in the last radio field of the current step.
- **Enable Per-step data save (Save and Continue):** Saves each step as the user proceeds, so they can resume the form later.
- **Resume Step from last form session:** Shows visitors the step where they left off. This option appears only after you enable **Per-step data save**.

> [!Tip]
> If your site has a sticky header menu, the form may hide beneath it while auto-scroll is on. See [Set Scroll Offset of Form Steps](/set-scroll-offset-of-form-steps).

> [!Tip]
> Watch this [video tutorial](https://youtu.be/TQAw19OoCSU) to see how multi-step forms advance to the next step automatically.

![Paging Start settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/paging-start-4-scaled.webp)

## 2. Page Break

The **Page Break** marker creates new steps within the form. Each **Page Break** starts a new section for the next step.

Hover over the field and click the **Pencil Icon** to customize it.

1. **Previous Button:** Choose a **Text button** or an **Image icon** for the previous page button. You can customize the text or add an image link.
2. **Next Button:** Like the **Previous Button**, choose a **Text button** or an **Image icon** for the next page. You can customize the text or add an image link.
3. **Element Class:** Add custom CSS classes to style the input field.

![Page Break settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/5.-Edit-Page-Break-step-scaled.webp)

## 3. Paging End

The **Paging End** marker is the last part of the **Form Step**. It ends the multi-step form.

Hover over the field and click the **Pencil Icon** to customize it.

1. **Element Class:** Add custom CSS classes to style the input field.
2. **Previous Button:** Choose a **Text button** or an **Image icon** for the previous page button. With the **Default** option, the **Previous Button** field lets you customize the text. With the **Image** option, you can add an image link for the previous button.

![Paging End settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/6.-Edit-Page-Ending-steps-scaled.webp)

## Embed the Form into Frontend

Click **Save** to save your changes. Click the **Preview** (eye) icon to preview the form.

To display the form on a page or post, click the copy icon next to the **Shortcode** in the top bar and paste it there.

![Save multi-step form](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/Save-Form-05-8-scaled.webp)

## Preview of Added Form Step Field

This is the preview of the form with the **Form Step** field.

![Multi-step form preview](/images/creating-forms/specialized-form-types/creating-a-multi-step-form/preview-step-form.webp)

You can create as many **multi-step forms** as you need.
