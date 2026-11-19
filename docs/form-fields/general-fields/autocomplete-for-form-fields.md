---
description: "Use the Autocomplete setting in Fluent Forms to let browsers fill in a visitor's saved details and to identify each input's purpose for accessibility (WCAG 1.3.5)."
---

# Autocomplete for Form Fields

The **Autocomplete** setting tells the browser what kind of information a field collects. Browsers can then offer a visitor's saved details, such as their name, email, or address, and assistive technology can identify the purpose of each input. This meets the **WCAG 1.3.5 (Identify Input Purpose)** requirement. This guide shows you where to find the setting and how each option works.

## Fields That Support Autocomplete

You can set **Autocomplete** on these fields:

- [Name](/name-input-field)
- [Email Address](/email-address-input-field)
- [Simple Text](/adding-a-simple-text-input-field)
- [Text Area](/adding-a-text-area-input-field)
- [Address](/address-input-field)
- [Numeric](/numeric-input-field)
- [Dropdown](/dropdown-field)
- [Multiple Choice](/multiple-choice-field)
- [Mask Input](/adding-a-mask-input-field-guide)
- [Website URL](/website-url-input-field-guide)
- [Password](/password-input-field)
- [Time & Date](/time-date-input-field)
- [Phone / Mobile](/phonemobile-input-field) (Pro)

## Set Autocomplete on a Field

To enable and configure autocomplete for a field:

1. Open your form in the **Editor**.
2. Click the field you want to change, then click the **Pencil Icon** to open the **Customize** tab in the right sidebar.
3. Scroll down and expand **Advanced Options**.
4. Open the **Autocomplete** dropdown.
5. Choose a value, such as Automatic, off, None, or a specific value like given-name.
6. Click **Save** in the top right corner.

![Setup Auto-Complete Field](/images/form-fields/general-fields/autocomplete/setup-autocomplete-1.webp)

## Autocomplete Options

- **Automatic:** Fluent Forms picks the value for you. Email, Website URL, and Phone fields use `email`, `url`, and `tel`. Each input in a Name field uses the matching name value, such as `given-name` and `family-name`. Other fields add no value.
- **off:** Turns off browser autofill for the field.
- **None:** Adds no autocomplete attribute at all.
- **A specific value:** Choose a value such as `name`, `email`, `tel`, `organization`, `postal-code`, or `country`. You can also type a scoped value, for example `billing postal-code`.

> [!Note]
> Browsers ignore values outside the standard HTML autofill list. Fluent Forms drops those values when the form is displayed. It also blocks credit card values, `one-time-code`, and `current-password`.

## Autocomplete for Name and Address Fields

The Name and Address fields hold several inputs, so one **Autocomplete** setting applies to every input in the field.

- **Name:** **Automatic** gives each input its matching value. **off** turns off autofill for the whole field. **None** adds no attribute.
- **Address:** Autofill stays off until you choose **On (autofill this address)**. This option gives each input, such as street, city, state, and zip code, its matching value. Choose **off** or **None** to keep autofill disabled.
