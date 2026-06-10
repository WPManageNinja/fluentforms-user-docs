# Image Upload Input Field in Fluent Form

The **Image Upload** input field in Fluent Forms lets users submit images in different formats directly through a form. Use it for applications, registrations, profile photos, and other image submissions.

> [!Note]
> The **Image Upload** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Adding Image Upload Field

Go to **Forms** from the Fluent Forms navbar, select the form you want to edit, and click **Edit** to open the form editor.

> [!Note]
> If you do not have any existing forms, see [How to Create a Form with Fluent Forms](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Edit form to add Image Upload field](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/Edit-Form-01-3-scaled.webp)

On the **Editor** page, click the **Plus** icon and open **General Fields**. You can also find **General Fields** in the right sidebar under **Input Fields**.

Select **Image Upload** by clicking it or dragging it into the editor.

![Add Image Upload field to the form](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/new-7-scaled.webp)

## Customizing the Image Upload Field

Hover over the field and click the **Pencil** icon to open **Input Customization** on the right. Available tabs:

- Image Upload Options
- Advanced Options

![Image Upload field customization options](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/customize-the-image-upload-3-scaled.webp)

### Image Upload Options

**A. Element Label:** The field title users see on the form.

**B. Button Text:** The label on the browse/upload button (for example, *Choose File* or *Upload Image*).

**C. Upload Button Interface:** Choose a standard **Button** or an interactive **Dropzone**.

**D. Label Placement:** Set label position to **Top**, **Left**, **Right**, or **Default** (uses your global label placement).

**E. Admin Field Label:** A label shown only to admins when viewing submissions.

**F. Required:** Require at least one image before submission.

**G. Max File Size:** Set a size limit in **KB** or **MB**. Customize the error message shown when a file exceeds the limit, or disable the global message to enter a custom one.

**H. Max File Count:** Set how many images a user can upload. Customize the error message for exceeding the limit.

**I. Allowed Images:** Allow **JPG**, **PNG**, and/or **GIF**. Set a validation error message for disallowed formats.

**J. File Location Type:** Choose **As Per Global Settings** or **Custom**. With **Custom**, store uploads in the Fluent Forms default location, the WordPress **Media Library**, or both.

![Image Upload field options](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/image-upload-option-1-scaled.webp)

### Image Crop

**Image Crop** lets users crop images before submitting. Only the cropped image is uploaded and validated on the server. Enable **Enable Crop** to reveal crop settings. This option is off by default, so existing forms are unchanged.

#### Select a Crop Type

**Crop Type** controls how the image can be cropped:

- **Crop Ratio (Aspect Ratio):** Choose a predefined ratio from the **Crop Ratio** dropdown:
  - **Free (Default):** Crop freely without fixed proportions
  - **1:1:** Square crop for profile or avatar images
  - **4:3:** Standard landscape ratio
  - **16:9:** Widescreen landscape format
  - **3:4 / 9:16:** Portrait-oriented ratios
- **Width and Height:** Define exact dimensions. Enter **Width (px)** and **Height (px)** so users crop to a fixed pixel size.

![Image Crop settings](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/image-upload-option-2-scaled.webp)

### Advanced Options

**A. Container Class:** Add custom CSS classes to the field wrapper.

**B. Element Class:** Add custom CSS classes to the input field.

**C. Help Message:** Short guidance text shown below the field.

**D. Name Attribute:** The HTML name attribute. You usually do not need to change this.

**E. Conditional Logic:** Show or hide the field based on other field values. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic-in-fluent-forms).

![Image Upload advanced options](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/Advanced-Options-05-5-scaled.webp)

## Embed the Form into Frontend

Click **Save Form**, then **Preview & Design** to preview your changes.

Copy the form **Shortcode** from the top right and paste it into a **Page** or **Post** to display the form on the frontend.

![Save and embed the form](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/Save-Form-06-6-scaled.webp)

## Preview of Added Image Upload Field

Here is a preview of the form with the **Image Upload** field.

![Image Upload field frontend preview](/images/form-fields/general-fields/image-upload-input-field-in-fluent-form/Preview-07-2.webp)
