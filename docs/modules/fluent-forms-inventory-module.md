# Fluent Forms Inventory Module

The **Inventory Module** in Fluent Forms allows you to manage your order forms and predefined item numbers. This powerful feature is ideal for event booking, reservations, product sales, or ticketing, and also it helps to keep track of inventory. 

This article will guide you in creating a successful Inventory Module with fluent forms.

> [!Note]
> The Fluent Form Inventory Module is only available for the Fluent Form Pro version.

## Enabling the Inventory Module

Go to **Integrations** from the **Fluent Forms Navbar**, search for **Inventory Module** in the search bar, and open the **Inventory** module.

Turn on the **Toggle** to enable the **Inventory** module.

![Enable Module Fluent Forms Inventory Module](/images/modules/fluent-forms-inventory-module/enable-module-01-scaled.webp)

## Setting Up Inventory in a Form

Once the module is enabled, you can create a new form or edit an existing one to add inventory-related fields such as:

- [Payment items](/docs/add-payment-item-field-in-payment-forms)

- Radio buttons

- Dropdowns

- Multi-select options

- Checkboxes

You can use a [Checkbox Field](/docs/checkbox-field-in-fluent-forms) to demonstrate Inventory Management.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

![Inventory Fluent Forms](/images/modules/fluent-forms-inventory-module/inventory-02-scaled.webp)

## Configuring Inventory Settings

**Inventory Settings** will appear in the **Advanced Options** field when the **Inventory Module** is active. By default, these settings are **Disabled**. You will also see **Simple** and **Global** options. You can choose any of them.

![Inventory Settings](/images/modules/fluent-forms-inventory-module/Inventory-Settings-03-scaled.webp)

### Simple Inventory Settings

The Inventory Settings will be visible in the **Advanced Options** field when selecting the **Simple** option. More options will appear in the dropdown.

**A. Stock Quantity:** You may easily customize the inventory quantity of your item via this option.

**B. Stock-Out Message:** Set up your Stock-Out Message according to your needs.

**C. Hide Choice When Stock is Out:** When you enable this option, you can hide the item when it is out of stock.

**D. Hide Input When Stock is Out:** The items in your input field will be removed if this option is checked on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** This option is turned off by default. When it is enabled, items from the available Stock will be shown.

**G. Inventory Label:** Set up your inventory label using this **{remaining_quantity}** shortcode. This shortcode will show how many of the items are still available.

![Simple Inventory Settings](/images/modules/fluent-forms-inventory-module/Simple-Inventory-Settings-04-scaled.webp)

### Global Inventory Settings

When you select the Global option, the Inventory Settings will be visible in the field’s Advanced Options. A drop-down with more options will appear. Global inventory lets you share stock across multiple forms; see [Global Inventory Manager in Fluent Forms](/docs/global-inventory-manager-in-fluent-forms) to set it up.

**A. Global Inventory:** You can select your item Global Inventory from the dropdown options.

**B. Stock-Out Message:** Set up your Stock-Out Message according to your needs.

**C.** **Hide Choice When Stock is Out:** When you enable this option, you can hide the item when it is out of stock.

**D. Hide Input When Stock is Out:** The items in your input field will be removed if this option is turned on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** This option is turned off by default. When it is enabled, items from the available Stock will be shown.

**G. Inventory Label:** Set up your inventory label using this **{remaining_quantity}** shortcode. This shortcode will show how many of the items are still available.

![Unnamed Fluent Forms](/images/modules/fluent-forms-inventory-module/unnamed-6.webp)

### View Inventory Item

To view the inventory items, click the **Entries** option at the top bar of the form. Here, you will see the inventory items in **Stock** and their **Total** **Numbers**.

![View Inventory Fluent Forms](/images/modules/fluent-forms-inventory-module/view-inventory--scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**. 

![Save Fluent Forms Inventory Module](/images/modules/fluent-forms-inventory-module/save-form-05-scaled-2.webp)

## Preview of the Inventory Module Form

Consider a form with Story Book, Kids Story Book, and Fantasy Story Book as Checkbox options, each having inventory quantities of 15, 13, and 21, respectively.

Consider a form with Story Book, Kids Story Book, and Fantasy Story Book as Checkbox options, each having inventory quantities of 15, 13, and 21, respectively.

- A user selects Story Book and Kids Story Book.

- After a form is submitted, the number of storybooks available is reduced to 14. The kid's Storybook is stocked out.

- If Hide Choice When Stock is Out is enabled, Orange will no longer appear in the form.

![Preview Fluent Forms Inventory Module](/images/modules/fluent-forms-inventory-module/preview.webp)

With these settings, you can easily track orders and manage inventory in real time! Start using Fluent Forms Inventory Management today to streamline your order process.
