# Action Hook Field in Fluent Forms

The **Action Hook** field in Fluent Forms allows [developers](/docs/advanced-developer-overview) to insert dynamic elements into forms.  

This guide will walk you through adding and customizing the **Action Hook Field** in Fluent Forms for your WordPress site.

> The Action Hook field is an advanced feature of the Fluent Forms plugin. To use it, you need the Fluent Forms Pro Add-on.

### Adding Action Hook Field

To learn how to add the **Action Hook** field to Fluent Forms, follow the steps below:

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Form,** and click the **Edit** icon to open the **Editor** page of that form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/form-editor-01.png)

Once on the **Editor** page, click the **Plus** **Icon** in your form editor and open the **Advanced Fields** module. The **Advanced Fields** option is also in the right sidebar under the **Input** **Fields** tab. 

yYou can select the desired **Action Hook** **Input** field by **clicking** on it or **Dragging** and **Dropping** it into your editor.

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/add-action-hook-02-1024x500.png)

## Customizing the Action Hook Field

Once you add the action hook field, you can customize it by hovering over it and clicking the **Pencil Icon.** It will take you to the **Input Customization** tab on the right side and offer the following options for customizing the field. 

- Action Hook Input Options

- Advanced Options

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/AD_4nXcfzLitBhLasEJrZHRSs-EtWGfmnRGGbzuXeqthf4HW-fG6ukOrNURYJMYtbJC1YqrZx462LjYmx59rSvlwn1tg3mDTtO03_DasAJg-zAgMmmu7_15sDP-BkzggW0i9EK-AKzCWFQ.png)

#### Action Hook Input Options

Located in the **Input Customization Tab**, these options allow you to configure essential aspects of the **Action Hook** input field.

**A. Hook Name:** Enter a unique hook name to trigger custom functionality at this location.

You’ll be given 1 parameter to play with: $form.

add_action(‘HOOK_NAME’, ‘your_function_name’, 10, 3 );
function your_function_name( $form ) {
  // do whatever you want
}

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/action-Hook-options-04.png)

#### Advanced Options

Advanced settings allow further customization to meet specific use cases. All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below –

**A. Element Class:** Add custom CSS classes to the input field.

**B. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your set of conditional logics. To learn more, read the [Conditional Logic documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/Advanced-option-05.png)

## Embed the Form into the Front

Once you have customized the action hook field, click the **Save Form** button to apply the changes.

To display the form on a specific page or post, **Copy** the **Shortcode** from the top-right corner and **Paste** it into your desired page or post.

To preview the form, click **Preview & Design** in the middle of the page.

![](/images/form-fields/advanced-fields/action-hook-field-in-fluent-forms/Save-Form-06.png)

Your **Action Hook** field is now successfully integrated into your Fluent Form.
