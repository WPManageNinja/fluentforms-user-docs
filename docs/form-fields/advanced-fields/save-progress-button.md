---
description: "The Save & Resume field in Fluent Forms allows users to store their form progress in the database without being logged in."
---

# Save Progress Button

The **Save & Resume** field in Fluent Forms lets users store their form progress in the database without logging in. Fluent Forms generates a unique link, so users can continue the form later from any device.

This guide shows you how to add and customize the **Save & Resume** field in Fluent Forms.

> [!Note]
> The **Save & Resume** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding a Save Progress Button Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Editor](/images/form-fields/advanced-fields/save-progress-button/Form-editor-01-5-scaled.webp)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Save & Resume** field, or drag and drop it into your editor.

![Adding Save Resume Field](/images/form-fields/advanced-fields/save-progress-button/Adding-Save-Resume-field-02-scaled.webp)

## Customizing the Save & Resume Input Field

After you add the **Save & Resume** field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right with these options:

- Save & Resume Field Options

- Advanced Options

![Customize Fluent Forms](/images/form-fields/advanced-fields/save-progress-button/Input-Customization-03-30-scaled.webp)

### Save & Resume Options

These options in the **Customize** tab configure the **Save & Resume** field.

**A. Button Text:** Choose **Default** or **Image**. With **Default**, enter the text to show on the button.

With **Image**, add the image **URL**. You can also add **Image Alt text** for the button.

**B. Button Style:** Choose a button style from the dropdown on the right. Select **Custom** to adjust the predefined color schemes, position, and functionality.

- **Background Color:** Choose a background color that fits your website's color scheme.

- **Text Color:** Choose a button text color that reads well on the background color.

- **Border Color:** The button has a one-pixel border by default. Set a color for the border.

- **Border Radius:** Enter the border radius you want.

- **Min-Width:** Set a minimum width for the button in pixels or percentages. A 100% min-width makes a full-width button.

![Button Style Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/Button-Style-04-scaled.webp)

**C. Button Size:** Choose one of three sizes: **Small**, **Medium**, or **Large**.

**D. Content Alignment:** Set how the button content is aligned.

**E. Success Message:** Enter the text users see when their progress is saved.

**F. Allow Only for Logged-in Users:** Select **Yes** to let **only** logged-in users use Save & Resume. Select **No** to let all users save their progress.

**G. Enable Email Link:** Select **Yes** to let users get an **Email Resume Link**, or **No** to turn it off.

**H. Email Subject:** Use the {form_name} placeholder to add the form name.

**I. Email Body:** Enter the email body text. Use the `{email_resume_link}` placeholder to add the resume link.

**J. Allow use the link only once:** Select **Yes** to make the resume link work one time only. After that, no one can use it.

> [!Tip]
> Style the **Hover** state the same way as the default state. Select **Hover** in the button style panel and apply matching colors and borders.

![Save Resume](/images/form-fields/advanced-fields/save-progress-button/Save-Resume-05-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Container Class:** Add custom CSS classes to the field’s wrapper.

**B. Element Class:** Add custom CSS classes to the input field.

**C. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**D. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic). 

**E. Send Email on Partial Entry Created:** Select **Yes** to send the user an email when they first save progress as a [partial entry](/partial-entries-for-step-forms). Select **No** to send no email.

**F. Send Email on Partial Entry Updated:** Select **Yes** to send the user an email when they update their saved progress. Select **No** to send no email.

When you turn on either email option, these fields appear:

- **Email Address:** The address that gets the email. If you leave it empty, the email goes to the admin.
- **Email Subject:** The subject line. Use the `{form_name}` placeholder to add the form name.
- **Email Body:** The email text. Use the `{partial_entry_link}` placeholder to add the partial entry details.

![Advanced Options](/images/form-fields/advanced-fields/save-progress-button/Advanced-Options-06-1-scaled.webp)

## Embed the Form into Frontend

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

> [!Note]
> **Save & Resume** also works on **multi-step forms**. See [Creating a Multi-Step Form in Fluent Forms](/creating-a-multi-step-form).

![Save](/images/form-fields/advanced-fields/save-progress-button/Save-Form-07-1-scaled.webp)

## Preview of Save & Resume Field

Here is the form with the **Save & Resume** field added.

![Preview Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/preview-01-08.webp)

Add the form's shortcode to any page. Users see the form. When they click the **Save Progress Button**, Fluent Forms generates a **link**. Users can open this link in any browser at any time to continue the form. The screenshot below shows the result.

![Preview Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/preview-of-save-progress-button.webp)
