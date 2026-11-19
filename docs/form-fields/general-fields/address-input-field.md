---
description: "The Address input field in Fluent Forms offers a suitable way to collect a user's complete address information, such as Street, City, State, Zip code, and…"
---

# Address Input Field

The Address input field in Fluent Forms collects a user's complete address, such as Street, City, State, Zip code, and Country, in one structured field. You can also collect multiple address text boxes.

This guide shows you how to add and customize the **Address Input Field** in Fluent Forms.

> [!Note]
> Autocomplete the **Address** field with **Google Maps** or **OpenStreetMap** (Fluent Forms Pro). See [Autocomplete Provider](#autocomplete-provider-pro) below and [How to Integrate Google Maps with Fluent Forms](/integrate-google-maps).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/qlYfmqCujKE" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding the Address Input Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Edit Address Input Field](/images/form-fields/general-fields/address-input-field/edit-form-01-8-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Click the **Address Input** field, or drag and drop it into your editor.

![Address Input Field step](/images/form-fields/general-fields/address-input-field/new-13-scaled.webp)

## Customizing the Address Input Field

Hover over the field and click the **Edit** icon to customize the **Address** field. Or select the field and click the **Customize** tab in the right corner.

The **Customize** area has these options:

- Address Input Options

- Advanced options

![Customize Fluent Forms](/images/form-fields/general-fields/address-input-field/Input-Customization-03-13-scaled.webp)

### Address Input Options

These options in the **Customize** tab configure the **Address Input** field.

**A. Element Label:** The field title users see when they fill out the **Address** field. Enter text that explains the purpose of the field.

**B. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**C. Address Field:** Each part of the address appears here. There are **six** parts. Click the drop-down button beside a part to set its **Input Field Label**, **Default**, **Placeholder**, **Help Message**, and **Required** choices. If you do not want a part, uncheck its checkbox.

![Adress Line](/images/form-fields/general-fields/address-input-field/Adress-line-05-scaled.webp)

- **Label:** Change the field label.

- **Label Placement:** Set where the label appears. The options are Top, Left, Right, and Default. **Default** uses your global label placement settings.

- **Default:** Set a default value that pre-populates the field when the form loads.

Click the **Three Vertical Dots** menu on the right side to clear the field, use a [dynamic value](/dynamic-default-value), or select another advanced setting.

![Adrees Line1](/images/form-fields/general-fields/address-input-field/adrees-line1-06-scaled.webp)

- **Placeholder:** Add placeholder text, like “Enter your street address,” to guide users on what to enter.

- **Help Message:** Add text that appears as a help message for the user.

- **Required:** Turn on **Required** to make users fill in this line before they submit. It is off by default.

![Address Line1](/images/form-fields/general-fields/address-input-field/address-line1-07-scaled.webp)

### Autocomplete Provider (Pro)

The **Autocomplete Provider** setting fills in the address for your users. You find it below the **Address Fields** list in the **Customize** tab. Click the dropdown and choose one of these options:

- **None:** No address autocomplete. This is the default.
- **Google Maps:** Suggests addresses as the user types. This option stays grayed out until you add a Google Maps API key. See [How to Integrate Google Maps with Fluent Forms](/integrate-google-maps).
- **OpenStreetMap Geolocation (Nominatim):** Detects the user's location in the browser and fills in the address from OpenStreetMap. No API key is needed.

![Autocomplete Provider Options](/images/form-fields/general-fields/address-input-field/autocomplete-provider-options.webp)

When you choose **OpenStreetMap Geolocation (Nominatim)**, the **OpenStreetMap Locate** option appears. Use it to decide when the address is detected:

- **On Page Load:** The browser asks for the user's location as soon as the form loads.
- **On Click:** The user clicks the locate icon in the address field. The field shows **Please wait ...** while it looks up the address.
- **Disable:** Turns location lookup off.

OpenStreetMap fills in **Address Line 1**, **City**, **State**, **Zip Code**, and **Country**. If a location has no city, the **City** field uses the town or village name instead. An OpenStreetMap attribution line appears below the field.

> [!Note]
> OpenStreetMap (Nominatim) allows only 1 request per second across all users, and requires attribution. It suits forms with low traffic. For high-traffic forms, use **Google Maps**. The editor shows this same notice below the dropdown.

**Save Coordinates:** With Google Maps or OpenStreetMap, check **Save User Location (Latitude & Longitude)** to save the user's latitude and longitude with the address.

![OpenStreetMap Locate Settings](/images/form-fields/general-fields/address-input-field/openstreetmap-locate-settings.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Element Class:** Add custom CSS classes to the input field.

**B. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**C. Autocomplete:** Choose how browsers autofill the whole Address field. The options are **Automatic**, **On (autofill this address)**, **off**, and **None**. Address autofill stays off until you choose **On (autofill this address)**. The field then gives each input, such as street, city, and zip code, its matching value. To learn more, read [Autocomplete for Form Fields](/autocomplete-for-form-fields).

**D. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

![Advanced Options](/images/form-fields/general-fields/address-input-field/Advanced-options-08-1-scaled.webp)

## Embed the Form into the front

Click **Save** to apply your changes.

To show the form on a page or post, copy the **Shortcode** from the top-right corner and paste it into that page or post.

Click the **Preview** (eye) icon at the top right to preview the form.

![Save Address Input Field](/images/form-fields/general-fields/address-input-field/Save-Form-09-scaled.webp)

### Preview of Added Address Input Field

Here is a preview of the form with the **Address Input** field:

![Preview Address Input Field](/images/form-fields/general-fields/address-input-field/Preview-10.webp)
