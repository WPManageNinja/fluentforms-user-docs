# Creating a Multi-Step Form in Fluent Forms

Multi-step forms are an effective way to collect more data from users without overwhelming them. Breaking down the form into multiple steps makes the process less daunting and more manageable for users. This article will guide you through creating a multi-step form with Fluent Forms.

> [!Note]
> **Multi-step forms** require the **Fluent Forms Pro Add-on**. Install and activate the free Fluent Forms plugin first, then add Pro. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VQTWnM6BbRU" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Creating a Multi-Step Form

Initially, you can choose [Pre-built Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) or start with a [Blank Form](/docs/how-to-create-a-form-with-fluent-forms). Let's begin with a **Blank Form** so you can build it from scratch.

Once you are on the **Editor** page, click the **Plus** **Icon**, open the **Advanced Fields** section, and choose the **Form Step** field.

The **Advanced Fields** option is also in the right sidebar under the **Input Fields** tab. To set it up, click on the **Form Step** field you want or drag and drop it into your editor.

![Add Form Step field](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/1.-Adding-Form-Step-field-1-scaled.webp)

The **Form Steps** are divided into **three** steps:

- **PAGING START**
- **PAGE BREAK**
- **PAGING END**

![Multi-step paging fields](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/2.-Paging-Start-Break-End-steps-scaled.webp)

The form steps mentioned above are explained below.

## 1. Paging Start

The **Paging Start** block controls the global indicator behavior and styles for the multi-step sequence. Hover over the **PAGING START** bar in your editor and click the **Pencil Icon** to open the **Input Customization** settings.

### Progress Indicator

The **Progress Indicator** setting controls how step progress is shown at the top of a multi-step form. You can choose between four layout styles:

- **Progress Bar:** Displays a standard progress bar that gives users a numeric percentage indication of their progress (e.g., "1 of 2 steps completed").
- **Steps:** Displays a numbered list of structural step titles with the current active step highlighted.
- **Tabs:** Renders step titles as interactive, clickable tab buttons. Visitors can jump back to any previously completed step in a single click.
- **None:** Completely hides all progress indicators from the form interface.

> [!Tip]
> Whichever indicator you pick, the values you enter in **Step Titles** become the labels. If left blank, Fluent Forms falls back to Step 1, Step 2, etc.

### Tabs Indicator Settings

**A) Element Class:** Add custom CSS classes to the input field itself. See [How to Use CSS Ready Classes](/docs/how-to-use-css-ready-classes) for available options.

**Tab Position:** Determines the layout orientation of your step tabs:

- **Top** (Default): Tabs align horizontally above the form. If they overflow the screen width, they scroll horizontally rather than wrapping.
- **Left:** Tabs render vertically in a sidebar column to the left of the form body. This works well for a large number of steps or long step titles.

**Show Progress Bar Under Tabs:** Toggle this checkbox to position a compact visual progress bar directly beneath the horizontal tab strip. This is disabled by default.

### Animation & Page Controls

- **Animation Type:** Choose the transition style when moving between steps (**Slide Left/Right**, **Fade In/Out**, **Slide Down/Up**, or **None**).
- **Step Titles:** Enter personalized text labels for **Step 1**, **Step 2**, etc., to replace the default step text.
- **Disable auto focus when changing each page:** Check this to stop the page from automatically scrolling to the top of the form when a user changes steps.
- **Enable auto page change for single radio field:** When enabled, the form automatically transitions to the next step immediately after a user selects an option in the last radio field of the current step.
- **Enable Per-step data save (Save and Continue):** Saves form input data locally step-by-step as the user proceeds, letting them safely resume if they leave mid-session.
- **Resume Step from last form session:** If your website has a sticky header menu, the form may be hidden beneath it while [auto-scroll](/docs/set-scroll-offset-of-form-steps) is enabled.

> [!Tip]
> Watch this [video tutorial](https://youtu.be/TQAw19OoCSU) to learn how multi-step forms automatically advance to the next step.

![Paging Start settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/paging-start-4-scaled.webp)

## 2. Page Break

The **Page Break** section creates new steps within the form. Each time you add a **Page Break**, a new section is created for the next step.

You can customize this part by clicking the **Pencil/Edit Icon** when hovering over the field.

1. **Previous Button:** Choose between a **Text button** or an **Image icon** for the previous page button. You can customize the text or add an image link.
2. **Next Button:** Like the **Previous Button**, choose between a **Text button** or an **Image icon** for the next page. You can customize the text or add an image link.
3. **Element Class:** Add custom CSS classes to style the input field.

![Page Break settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/5.-Edit-Page-Break-step-scaled.webp)

## 3. Paging End

The last portion of the **Form Step** is the **Paging End** section. It determines the ending of the multiple-page form.

You can customize this part by clicking the **Pencil/Edit Icon** when hovering over the field.

1. **Element Class:** Add custom CSS classes to style the input field.
2. **Previous Button:** Choose between a **Text button** or an **Image icon** for the previous page button. If you choose the **Default** option, you get the **Previous Button** field to customize the text. If you select the **Image** option, you can add an image link for the previous button.

![Paging End settings](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/6.-Edit-Page-Ending-steps-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific page or post, copy the **Shortcode** from the top right side and paste it into your desired page or post.

![Save multi-step form](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/Save-Form-05-8-scaled.webp)

## Preview of Added Form Step Field

Here is the preview of the added **Form Step** field under the form.

![Multi-step form preview](/images/creating-forms/specialized-form-types/creating-a-multi-step-form-in-fluent-forms/preview-step-form.webp)

This way, you can create as many **multi-step forms** as you want with Fluent Forms.
