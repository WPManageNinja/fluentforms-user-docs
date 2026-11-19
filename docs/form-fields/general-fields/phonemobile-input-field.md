---
description: "The Phone/Mobile input field in Fluent Forms is essential for collecting users' contact information."
---

# Phone/Mobile Input Field

The **Phone/Mobile** input field in Fluent Forms collects users' contact information. Users enter phone numbers, and you can set validation and formatting options.

This article shows you how to add the **Phone/Mobile** field to your form.

> [!Note]
> The **Phone/Mobile** field requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Adding Phone/Mobile Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Edit Phone/Mobile Input Field](/images/form-fields/general-fields/phonemobile-input-field/edit-form-01-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Drag and drop the **Phone/Mobile** field into your editor.

![Phone/Mobile Input Field step](/images/form-fields/general-fields/phonemobile-input-field/new-2-scaled.webp)

## Customizing the Phone/Mobile Field

Hover over the field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

- Phone/Mobile Field Options

- Advanced Options

![Customize](/images/form-fields/general-fields/phonemobile-input-field/input-customization-03-scaled-2.webp)

### Phone/Mobile Field Options

These options in the **Customize** tab configure the **Phone/Mobile** field.

**A. Element Label:** The field title users see when they fill out the **Phone/Mobile** field. Enter text that explains the field's purpose.

**B. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**E. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. To learn more, read [Dynamic Default Value in Fluent Forms](/dynamic-default-value).

Click the **Three-Dot** option on the right to add a default value with a shortcode.

**F. Required:** Turn on **Required** to make users enter a phone number before they submit.

![Basic Options](/images/form-fields/general-fields/phonemobile-input-field/Basic-options-04-1-scaled.webp)

**G. Validate Phone Number:** Validate a phone number using the country code.

Select **Yes** to show an Error message when a user enters an invalid phone number. Select **No** to skip this check.

**Global Error Message:** This message shows when phone number validation fails.

**Enable Auto Country Select:** Selects the country based on the user’s IP address. Fluent Forms uses the ipinfo.io service for this. To configure the IP lookup service, see [Phone Field Geo Location Provider](/phone-field-geo-location-provider).

**Default Country:** Set a country that is selected unless the user changes it. A default country overrides the placeholder set in General Settings and shows as the placeholder.

**Country List:** Choose one of four options:

- **Show all:** Shows all the countries on the list.

- **Hide these:** Hides certain countries from the list and shows the others.

- **Only show these:** Shows only the countries you pick.

- **Priority Based:** Choose the countries to prioritize. These countries rank first in the search results. Two more options exist: **Primary Countries Label** and **Other Countries Label**. Use them to label the primary and other countries on the priority list.

![Phone/Mobile Input Field step](/images/form-fields/general-fields/phonemobile-input-field/012.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Autocomplete:** Choose a value that tells the browser this field collects a phone number, so it can offer saved details. Options are **Automatic**, **off**, **None**, or a specific value. To learn more, read [Autocomplete for Form Fields](/autocomplete-for-form-fields).

**B. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**C. Help Message:** Add text that appears as a help message for the user.

**D. Container Class:** Add custom CSS classes to the field’s wrapper.

**E. Element Class:** Add custom CSS classes to the input field.

**F. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic). 

![Advanced Options](/images/form-fields/general-fields/phonemobile-input-field/Advanced-options-05-2-scaled.webp)

## Embed the Form into the Front

Click **Save** to keep your changes. Click the **Preview** (eye) icon at the top right to see the form preview.

To show the form on a page or post, copy the **Shortcode** from the top right and paste it into that page or post.

![Save Phone/Mobile Input Field](/images/form-fields/general-fields/phonemobile-input-field/Save-Form-06-2-scaled.webp)

### Preview of Added Phone/Mobile Field

Here is the **Preview** of the **Form** to test the phone/mobile field functionality.

![Preview Phone/Mobile Input Field](/images/form-fields/general-fields/phonemobile-input-field/preview-07.webp)
