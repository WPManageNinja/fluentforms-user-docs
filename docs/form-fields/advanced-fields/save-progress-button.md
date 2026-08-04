---
description: "The Save & Resume field in Fluent Forms allows users to store their form progress in the database without being logged in."
---

# Save Progress Button

The **Save & Resume** field in Fluent Forms allows users to store their form progress in the database without being logged in. A unique link is generated, enabling users to continue filling out the form later from any device.

This guide will walk you through adding and customizing the **Save & Resume** field in Fluent Forms.

> [!Note]
> The **Save & Resume** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding a Save Progress Button Field

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Editor](/images/form-fields/advanced-fields/save-progress-button/Form-editor-01-5-scaled.webp)

Once on the **Editor** page, click the **Plus Icon** in your form editor and open the **Advanced Fields** module. You can also find this option in the right sidebar under the **Input Fields** tab.

Now, select the **Save & Resume** Input field by clicking or dragging it and dropping it into your editor.

![Adding Save Resume Field](/images/form-fields/advanced-fields/save-progress-button/Adding-Save-Resume-field-02-scaled.webp)

## Customizing the Save & Resume Input Field

Once you add the **Save & Resume** Input field, you can customize it by hovering over it and clicking the **Pencil Icon**. It will take you to the **Input Customization** tab on the right, which offers the following customization options.

- Save & Resume Field Options

- Advanced Options

![Input Customization Fluent Forms](/images/form-fields/advanced-fields/save-progress-button/Input-Customization-03-30-scaled.webp)

### Save & Resume Options

Under the Input Customization tab, you will find various settings options for customizing the field. These options allow you to configure essential aspects of the **Save & Resume** Input field.

**A. Button Text:** You can choose your button text **Default** or **Image**. Users can customize button text using this field if you keep button text by default. Whichever text is used for this field will be shown as the button text.

If you select the **Image** option, you can add an image as your button with the image **URL**. Also, you can add **Image Alt text** for your button.

**B. Button Style:**  You can choose the button style dropdown option from the right side. Also you can select **Custom** options to adjust predefined color schemes, position, and functionality. 

- **Background Color:** Choose a suitable background colour for the button according to your website's colour scheme. In my case, the default background color is blue.

- **Text Color:** Based on the background colour, you can give a smooth colour to the button text.

- **Border Color:** The button, by default, has a one-pixel border. You can also define a color for the border.

- **Border Radius:** Enter the border-radius that suits your forms.

- **Min-Width:** You can give a minimum width to the button in pixels and percentages, whichever suits your form. A 100% min-width will be a full-width button.

![Button Style Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/Button-Style-04-scaled.webp)

**C. Button Size:** Select the button size suitable for your form. There are three options: Small, Medium, and large. You can choose one option.

**D. Content Alignment:** This option defines how the content will be aligned.

**E. Success Message:** Enter a text that displays when the user sees their progress is saved.

**F. Allow Only for Logged-in Users:** If you select **Yes** option here, then **only** logged-in users can use Save & Resume. If you choose the **No** option, all users can save the progress.

**G. Enable Email Link**: You can allow users to get an **Email Resume Link** by selecting the **Yes** or **No** options.

**H. Email Subject:** You can use {form_name} placeholder to get the Form Name.

**I. Email Body:** Enter the email body text here.

> [!Tip]
> Style the **Hover** state the same way as the default state. Select **Hover** in the button style panel and apply matching colors, borders, and typography.

![Save Resume](/images/form-fields/advanced-fields/save-progress-button/Save-Resume-05-scaled.webp)

### Advanced Options

Advanced settings allow further customization to meet specific use cases. 

**A. Container Class:** Use this option to add your custom CSS classes to the field’s wrapper.

**B. Element Class:** Add custom CSS classes to the input field.

**C. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**D. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your set of conditional logics. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic). 

**E. Send Email on Partial Entry Created**: If you want to enable the user to receive an email when they initially save the progress as a [partial entry](/partial-entries-for-step-forms), select the **Yes** options, or if you don’t receive an email when they initially save progress, select the **No** options.

**F. Send Email on Partial Entry Updated**: If you want users not to receive an email when they update their saved progress, select the **No** option, or if you're going to receive an email when they update their saved progress, select the **Yes** option.

![Advanced Options](/images/form-fields/advanced-fields/save-progress-button/Advanced-Options-06-1-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific Page or Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**. 

> [!Note]
> **Save & Resume** also works on **multi-step forms**. See [Creating a Multi-Step Form in Fluent Forms](/creating-a-multi-step-form).

![Save](/images/form-fields/advanced-fields/save-progress-button/Save-Form-07-1-scaled.webp)

## Preview of Save & Resume Field

Here is the added **Save & Resume** field preview under the form.

![Preview Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/preview-01-08.webp)

Admin may now add this form's shortcode to any page. Users can see the form, and after hitting the **Save Progress Button**, a **link** will be generated so that they can use this link to view the form from any browser at any time. For a better understanding, see the screenshot below.

![Preview Save Progress Button](/images/form-fields/advanced-fields/save-progress-button/preview-of-save-progress-button.webp)

Congratulations! You have successfully added a Save & Resume field to your Fluent Forms form.
