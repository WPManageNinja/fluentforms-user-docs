---
description: "The Range Slider Field allows users to select a number from a pre-defined range by dragging a handle or rating marker."
---

# Range Slider Field

The **Range Slider** field lets users select a number from a pre-defined range by dragging a handle or rating marker.

This guide shows you how to add and customize the **Range Slider Field** in Fluent Forms.

> [!Note]
> The **Range Slider** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/RaY2VcPWk6I" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Range Slider Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

> [!Note]
> If you have no forms yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Editor](/images/form-fields/advanced-fields/range-slider-field/Form-Editor-01-3-scaled.webp)

In the editor, click the **Plus Icon** and open the **Advanced Fields** module. You can also find **Advanced Fields** in the right sidebar under the **Input Fields** tab.

Click the **Range Slider** field, or drag and drop it into your editor.

![Adding Range Slider](/images/form-fields/advanced-fields/range-slider-field/Adding-Range-Slider-02-scaled.webp)

## Customizing the Range Slider Field

After you add the **Range Slider** field, hover over it and click the **Pencil Icon**. The **Customize** tab opens on the right with these options:

- Range Slider Options

- Advanced Options

![Customize Fluent Forms](/images/form-fields/advanced-fields/range-slider-field/Input-Customization-scaled.webp)

### Range Slider Options

These options in the **Customize** tab configure the **Range Slider** field.

**A. Element Label:** The field title users see when they fill out the **Range Slider** field. Enter text that explains the purpose of the field.

**B. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read the [Dynamic Default Value documentation](/dynamic-default-value). 

Click the **Three-Dot** option on the right to add a default value.

**E. Min Value:** Define the starting **Minimum** value for the range slider. For example, setting **200 (Min)** allows users to select a value within this range.

**F. Max Value:** Define the ending **Maximum** values for the range slider. For example, setting 1000 (Max) allows users to select a value within this range.

**G. Step:** Set the step attribute for this field. Enter “any” to allow floating values.

**H. Required:** Turn on **Required** to make users fill in this field before they submit.

**I. Enable Quantity Mapping:** Select **Yes** to enable Quantity Mapping. This maps the field to a [product quantity](/add-item-quantity-field-in-payment-forms). Then use **Choose a Target Product Field** to pick the product.

> [!Note]
> When **Quantity Mapping** is on, the slider accepts only whole numbers between its **Min Value** and **Max Value**. Keep **Step** at a whole number such as 1, not "any". A decimal or out-of-range value stops the submission with the message "This payment item is invalid".

![Rage Slider](/images/form-fields/advanced-fields/range-slider-field/Rage-Slider-03-1-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**B. Help Message:** Add text that appears as a help message for the user.

**C. Container Class:** Add custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read the [Conditional Logic documentation](/set-up-forms-with-conditional-logic). 

![Advanced Options](/images/form-fields/advanced-fields/range-slider-field/Advanced-Options-04-1-scaled.webp)

## Embed the Form into Front

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Range Slider Field](/images/form-fields/advanced-fields/range-slider-field/Save-Form-05-4-scaled.webp)

### Preview of Added Range Slider Field

Here is the form with the **Range Slider** field added.

![Preview Range Slider Field](/images/form-fields/advanced-fields/range-slider-field/preview-06-2.webp)
