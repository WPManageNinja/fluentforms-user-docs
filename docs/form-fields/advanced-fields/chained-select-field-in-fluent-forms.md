# Chained Select Field in Fluent Forms

The Chained Select in Fluent Form is a powerful feature that allows you to create dependent [dropdowns](/docs/dropdown-field-in-fluent-forms) from CSV data that dynamically populate a set of select elements based on the previous selection. It is particularly useful for creating **category-based selection forms**, such as **Country State City** or **Make Model Variant** selections.

This guide will walk you through adding and customizing the **Chained Select** field in Fluent Forms.

> The Chained Select Input field is an advanced feature of the Fluent Forms plugin. To use it, you require the Fluent Forms Pro Add-on.

### Adding a Chained Select Field

To learn how to add the **Chained Select Field** to Fluent Forms, follow the steps below:

First, go to the **Forms** section from the Fluent Forms Navbar, choose a desired form, and click the **Edit** **Icon** to open the Editor page of that form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/edit-form-01-17-scaled.webp)

Once on the **Editor** page, click the **Plus Icon** in your form editor and open the **Advanced Fields** module. You can also find this option in the right sidebar under the **Input Fields** tab.

Now, select the **Chained Select** field by **clicking** or **dragging** it and **dropping** it into your editor.

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/Adding-chained-select-field-02-scaled.webp)

Chained Select Field gives you **three drop-down fields**. There are **Parent**, **Child**, and **Grand** **Child**. When the **Parent** drop-down is selected, the **Child** drop-down will only show options that belong to the **Parent** field.

On the other hand, it is the same for a Grandchild. After selecting the child drop-down, the **Grandchild** will only show those options under the selected child field. 

The field will reset automatically when a parent dropdown is changed and the child option does not match.

## Customizing the Chained Select Field

Once you add the **Chained Select** field, you can customize it by hovering over it and clicking the **Pencil Icon**.
It will take you to the **Input Customization** tab on the right, which offers the following customization options.

- Chained Select Options

- Advanced Options

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/Input-Customization-03-26-scaled.webp)

### Chained Select Field Options

You will find various settings options for customizing the field under the **Input Customization** tab. These options allow you to configure essential aspects of the **Chained Select** field.

All the settings under the **Chained Select Field** mentioned above are briefly explained below-

**A. Element Label:** This is the field title the users will see when filling out the **Chained Select** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Admin Field Label:** The admin field label is a field title displayed only to admin users. You can configure this option to show a different field label for your admin users when they view the form submissions. 

**C. Default Value:** Using our shortcodes, you can manually set any fixed value in your field and pre-filled your input field dynamically. To get a better understanding of **Dynamic Default** Value, [read this article.](/docs/dynamic-default-value-in-fluent-forms) 

You can add the default value by clicking the **Three-Dot** option from the right side.

**D. Label Placement:** This option allows you to determine the position of the label title where the user will see it. The available options are **Top**, **Left**, **Right**, and **Default**. All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**E. Required:** Decide whether users must select at least one option before submission.

**F. CSV Data Source:** **Click** the **"upload**" button to upload a **CSV** file from the dropdown under the **File Upload** options. If the data is hosted externally, provide a remote **CSV URL**.

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/chained-csv-options-05-scaled.webp)

If you want to download the Sample CSV file, click **Download Sample CSV** options.

Here is a screenshot of the demo data. First-column names are placeholders for drop-down fields.

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/CSV-data-file-04.webp)

#### Advanced Options

Advanced settings allow further customization to meet specific use cases. All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below –

**A. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**B. Help Message:** This option allows you to guide your user thoroughly. Add your text here, which will be shown as a help message to the user.

**C. Container Class:** Use this option to add your custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Enable Searchable Smart Options:** When you have a long dropdown list, you should give users the search option to select a field. Just **enable** the **Searchable Smart options** to allow users to search in dropdown fields. 

A search option appears when this option is selected, allowing the user to search manually.

**F. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your set of conditional logics. To learn more, read the [Conditional Logic documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/Advanced-Options-06-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**. 

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/save-form-07-scaled.webp)

## Preview of Chained Select Field

Here is the preview of the added **Chained Select** field under the Form. 

![](/images/form-fields/advanced-fields/chained-select-field-in-fluent-forms/Preview-form-08.webp)

Congratulations! You have successfully added a chained select field to your Fluent Forms form.
