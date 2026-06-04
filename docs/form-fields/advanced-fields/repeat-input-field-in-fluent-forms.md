# Repeat Input Field in Fluent Forms

The **Repeat Field** in [Fluent Forms](https://wordpress.org/plugins/fluentform) allows users to duplicate an input field dynamically. This is useful for forms where users may need to add multiple entries, such as contact details, addresses, or product lists. You can even [add calculation values on the Repeat field](/docs/how-to-add-calc-values-on-the-repeat-field) to total up rows automatically.

This guide will walk you through adding and customizing the **Repeat Input** field in Fluent Forms.

> The Repeat Input field is an advanced feature of the Fluent Forms plugin. To use it, you require the Fluent Forms Pro Add-on.

## Adding a Repeat Input Field

To add the **Repeat Input Field** in Fluent Forms, follow the simple steps below:

First, go to the **Forms** section from the Fluent Forms Navbar, choose a desired form, and click the **Edit** **Icon** to open the Editor page of that form.

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Form-Edit-01-1-scaled.webp)

Once on the **Editor** page, click the **Plus Icon** in your form editor and open the **Advanced Fields** module. You can also find this option in the right sidebar under the **Input Fields** tab.

Now, select the **Repeat Input** field by **clicking** or **dragging** it and **dropping** it into your editor.

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Adding-Repeat-Field-02-scaled.webp)

## Customizing the Repeat Input Field

Once you add the **Repeat Input** field, you can customize it by hovering over it and clicking the **Pencil Icon**. It will take you to the **Input Customization** tab on the right, which offers the following customization options.

- Repeat Field Options

- Advanced Options

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Input-Customization-03-28-scaled.webp)

### Repeat Field Options

Under the Input Customization tab, you will find various settings options for customizing the field. These options allow you to configure essential aspects of the **Repeat Input** field.

All the settings under the **Repeat Input Field** mentioned above are briefly explained below-

**A. Element Label:** This is the field title the users will see when filling out the **Repeat Input** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Label Placement:** This option allows you to determine the position of the label title where the user will see it. The available options are **Top**, **Left**, **Right**, and **Default**. All of those are self-explanatory except the **Default**. 

**C. Admin Field Label:** The admin field label is a field title displayed only to admin users. You can configure this option to show a different field label for your admin users when they view the form submissions.

**D. Repeat Field Columns:** To add multiple columns, click the **Plus Icon**, and to remove any column, click the **Minus Icon** from the **Column’s** right side. Click on the **Chevron Down Icon** to configure column settings.

- Filed Type: Choose the Field Type dropdown options.

- Label: Name the Label of the Column.

- Default: Using our shortcodes, you can manually set any fixed value in your field and pre-filled your input field dynamically. To get a better understanding, read the [Dynamic Default Value documentation](/docs/dynamic-default-value-in-fluent-forms).

You can add the **Default** value by clicking the **Three-Dot** option from the right side.

- Placeholder: When the input field is empty, a message is usually shown to the users so they can understand what the field expects from them. This is the equivalent of the HTML input placeholder attribute.

- Required: Decide whether users must select at least one option before submission.

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/unnamed-1-2.webp)

### Advanced Options

Advanced settings allow further customization to meet specific use cases. All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below –

**A. Container Class:** Use this option to add your custom CSS classes to the field’s wrapper.

**B. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**C. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your set of conditional logics. To learn more, read the [Conditional Logic documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

**D. Max Repeat Inputs:** Set the maximum number of rows users can add to this repeated field. Leave blank or set to 0 for unlimited entries.

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Advanced-Options-04-3-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**. 

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Save-Form-05-6-scaled.webp)

## Preview of Repeat Input Field

Here is the preview of the added **Repeat Input** field under the Form. 

![](/images/form-fields/advanced-fields/repeat-input-field-in-fluent-forms/Preview-06-3.webp)

Congratulations! You have successfully added a repeat field to your Fluent Forms form.
