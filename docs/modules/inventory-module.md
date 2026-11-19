---
description: "The Inventory Module in Fluent Forms allows you to manage your order forms and predefined item numbers."
---

# Inventory Module

The **Inventory Module** in Fluent Forms lets you manage your order forms and predefined item numbers. Use it for event booking, reservations, product sales, or ticketing to keep track of inventory.

This guide shows you how to set up the Inventory Module.

> [!Note]
> The Inventory Module is available in **Fluent Forms Pro**.

## Enabling the Inventory Module

Go to **Integrations** in the **Fluent Forms Navbar**. Search for **Inventory Module** in the search bar and open the **Inventory** module.

Turn on the **Toggle** to enable the **Inventory** module.

![Enable Module Fluent Forms Inventory Module](/images/modules/inventory-module/enable-module-01-scaled.webp)

## Setting Up Inventory in a Form

After you enable the module, create a new form or edit an existing one. Add inventory-related fields such as:

- [Payment items](/add-payment-item-field-in-payment-forms)

- Radio buttons

- Dropdowns

- Multi-select options

- Checkboxes

This guide uses a [Checkbox Field](/checkbox-field) to demonstrate inventory management.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Inventory Fluent Forms](/images/modules/inventory-module/inventory-02-scaled.webp)

## Configuring Inventory Settings

When the **Inventory Module** is active, **Inventory Settings** appear in the **Advanced Options** section of the **Customize** panel. By default, they are **Disabled**. You can also choose **Simple** or **Global**.

![Inventory Settings](/images/modules/inventory-module/Inventory-Settings-03-scaled.webp)

### Simple Inventory Settings

When you select the **Simple** option, more settings appear under **Advanced Options**.

**A. Stock Quantity:** Set the inventory quantity of your item.

**B. Stock Out Message:** Set the message visitors see when an item is out of stock.

**C. Hide Choice When Stock is Out:** Hides the item when it is out of stock.

**D. Hide Input When Stock is Out:** Removes the items from your input field when this option is on.

> [!Note]
> Stock reserved by a payment that fails or is never completed is released back to your inventory.
>
> If **conditional logic** hides a sold-out item, the form still submits. Only items the user can see are checked against your stock.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** Off by default. When on, Fluent Forms shows the available stock for each item.

**G. Inventory Label:** Set your inventory label with the **{remaining_quantity}** shortcode. It shows how many of the items are still available.

![Simple Inventory Settings](/images/modules/inventory-module/Simple-Inventory-Settings-04-scaled.webp)

### Global Inventory Settings

When you select the **Global** option, more settings appear in the field’s **Advanced Options**. Global inventory lets you share stock across multiple forms. To set it up, see [Global Inventory Manager in Fluent Forms](/global-inventory-manager).

**A. Global Inventory:** Select your global inventory item from the dropdown.

**B. Stock Out Message:** Set the message visitors see when an item is out of stock.

**C. Hide Choice When Stock is Out:** Hides the item when it is out of stock.

**D. Hide Input When Stock is Out:** Removes the items from your input field when this option is on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** Off by default. When on, Fluent Forms shows the available stock for each item.

**G. Inventory Label:** Set your inventory label with the **{remaining_quantity}** shortcode. It shows how many of the items are still available.

![Unnamed Fluent Forms](/images/modules/inventory-module/unnamed-6.webp)

### View Inventory Item

Click **Entries** in the top bar of the form. The page shows the inventory items in **Stock** and their **Total Numbers**.

![View Inventory Fluent Forms](/images/modules/inventory-module/view-inventory--scaled.webp)

## Embed the Form into Frontend

Click **Save** to save your changes. Click the **Preview** (eye) icon in the top bar to preview the form.

To display the form on a page or post, **copy** the **Shortcode** from the top right and **paste** it into that page or post.

![Save Fluent Forms Inventory Module](/images/modules/inventory-module/save-form-05-scaled-2.webp)

## Preview of the Inventory Module Form

Consider a form with Story Book, Kids Story Book, and Fantasy Story Book as Checkbox options. Their inventory quantities are 15, 13, and 21, respectively.

- A user selects Story Book and Kids Story Book.

- After the user submits the form, the available Story Books drop to 14 and the available Kids Story Books drop to 12.

- When an item reaches zero and **Hide Choice When Stock is Out** is enabled, that item no longer appears in the form.

![Preview Fluent Forms Inventory Module](/images/modules/inventory-module/preview.webp)

With these settings, Fluent Forms updates your stock after every order.
