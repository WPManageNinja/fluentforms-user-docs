# Add Post Update Field in Post Forms

In **Fluent Forms**, the **Post Update** field allows users to select any of your existing posts and update them directly through the form. This article will guide you through adding the **Post Update** field in your Fluent Forms for your WordPress Site. 

## Add Post Update Field

To learn how to add the Post Update field to the Post Forms in Fluent Forms, follow the steps with the screenshots below –  

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Post Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form. 

> If you don’t have an existing Post Form, read [How to Create a Post Form with Fluent Forms](/docs/how-to-create-a-post-form-with-fluent-forms) to create a new one. For example, I choose an existing Post Form to show the whole process. Remember, you will only get the Post Update field under the Post Forms.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/1.-Open-desired-Post-form-4-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right sidebar and open the **Post Fields** dropdown list by clicking the **Arrow Icon**. Now, choose the **Post Update** field by clicking on it or **Drag & Drop** it into your editor.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/2.-Add-Post-Update-field-scaled.webp)

## Customize Post Update Field

You can see that a **Post Update** field is added to the form. You can Edit or Customize this field by **hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the field.  

1. Post Update

2. Advanced Options

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/3.-Input-Customization-6-scaled.webp)

### 1. Post Update

All the **Settings** under the **Post Update** tab mentioned in the screenshot are briefly explained below – 

**A. Element Label**: This is the field Update the users will see when filling out the **Post Update** field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Admin Field Label**: The admin field label is a field Update displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option**.**

**C. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**D. Label Placement**: Using this option, you can determine the position of the label Update where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings. 

**E. Filter Posts**: Here, you can select which Posts you want to show in your form. 

**F. Extra Query Parameter**: Here, you can provide the **Post Query Parameter** for further filtering. To learn more details about the Extra Query Parameter, see the [Post Selection Module in Fluent Forms](/docs/post-selection-module-in-fluent-forms).

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/4.-Post-Update-option-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options** tab mentioned in the screenshot are briefly explained below – 

**A. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**B. Dynamic Default Value**: You can set a default value here to pre-populate the value of a field and enter it here. You can also set the value by using the **SamrtCodes**. To learn the details about SmartCodes, read [Form Editor Smart Codes](/docs/form-editor-smart-codes). 

**C. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**D. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**E. Element Class**: Add custom CSS classes to the input field itself. This is used for adding Custom CSS/JS for a specific input field of a form.

**F. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**G. Enable Searchable Smart Options**: If you enable this option, it will be searchable by the select2 js library.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/5.-Advanced-Options-7-scaled.webp)

## Configure Post Feed Settings

Lastly, **configuring** the **Post Feed** is **mandatory** to make your **Post Form** functional. It helps you map your added post fields for data collection and allows users to create more customized posts.

**But**, remember, the **Post Update** field will only work when the post feeds’ **Submission Type** is set to **Update Post**. To learn how to do this, follow the steps below – 

First, go to **Settings & Integrations** from the **Editor** page, open the **Post Feeds** tab from the left sidebar, and click the **Settings Icon** to open the existing added feed.

> If you don’t have an existing post feed, you can add a new one by clicking the + Add Post Feed button. For example, I used an existing Feed to show the process.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/6.-Add-Post-Feed-scaled.webp)

Then, a pop-up page will appear with various settings options for configuring the Post Feed.

**Remember**, here, you need to select **"Update Post"** as the **Submission Type** to access all existing posts from your WordPress Site and make the form functional. Otherwise, the **Post Update** field won’t appear in your **Post Form**.

> See the Post Feed configuration steps above to learn how to use the other settings options and complete the Post Feed Configuration process.

Once the setup is done, click the **Save Feed** button and your **Post Feed** will be configured. Now, your Post Update will function successfully!

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/7.-Update-Post-option-scaled.webp)

## Embed the Form into Frontend

To embed and display the form on a specific Page/Post on your site, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.  

Once you complete the customization, click the **Save** **Form** button to save all your changes.
Also, to see the form preview, click the **Preview & Design** button in the middle.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/8.-Save-Form-scaled-2.webp)

## Preview of Post Update field

Here is the preview of the added **Post Update** field in a Post Form.
Now, click the **Arrow Icon** to view all available posts on your site and select the one you need.

![](/images/form-fields/post-taxonomy-fields/add-post-update-field-in-post-forms/9.-Form-Preview-scaled.webp)

This way you can easily add the **Post Update** fields in Fluent Forms!
