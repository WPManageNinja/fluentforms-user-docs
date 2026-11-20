---
description: "The Inventory Module in Fluent Forms allows you to manage your order forms and predefined item numbers."
---

# Inventory Module

The **Inventory Module** in Fluent Forms lets you manage your order forms and predefined item numbers. Use it for event booking, reservations, product sales, or ticketing to keep track of inventory.

This guide shows you how to set up the Inventory Module.

> [!Note]
> The Inventory Module is available in **Fluent Forms Pro**.

## Enabling the Inventory Module

Go to **Integrations** in the **Fluent Forms Navbar**. Search for **Inventory Module** in the search bar. Turn on the toggle to enable the module. An **Enabled** badge appears next to its name.

![Enable Module Fluent Forms Inventory Module](/images/modules/inventory-module/enable-module-01-scaled.png)

## Setting Up Inventory in a Form

After you enable the module, create a new form or edit an existing one. Add inventory-related fields such as:

- [Payment items](/add-payment-item-field-in-payment-forms)

- Radio buttons

- Dropdowns

- Multi-select options

- Checkboxes

This guide uses a **Radio Field** with **Yes** and **No** options to demonstrate inventory management.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Inventory Fluent Forms](/images/modules/inventory-module/inventory-02-scaled.png)

## Configuring Inventory Settings

Click a field in the editor, then open the **Customize** tab in the right panel. The panel for that field has two sections:

- **General** (named after the field, for example **Radio Field**): Element Label, Label Placement, Admin Field Label, and the field **Options**. You do not set inventory here.
- **Advanced Options**: Dynamic Default Value, Container Class, Help Message, Name Attribute, Conditional Logic, and **Inventory Settings**.

Click **Advanced Options** to expand it. **Inventory Settings** appear here when the **Inventory Module** is active.

![Inventory Settings](/images/modules/inventory-module/Inventory-Settings-03-scaled.png)

Inventory Settings have three options: **Disable**, **Simple**, and **Global**. By default, **Disable** is selected. Each option shows its own settings, as described below.

### Disable

**Disable** turns inventory off for the field. No stock settings appear, and Fluent Forms does not track or limit the options in that field.

### Simple Inventory Settings

Select **Simple** to set the stock for the options of this field only. The stock is not shared with other fields or forms.

**A. Stock Quantity:** Set the inventory quantity for each option. In the example below, **Yes** and **No** each have a stock of 1.

**B. Stock Out Message:** Set the message visitors see when an item is out of stock. The default is **This Item is Stock Out**.

**C. Hide Choice When Stock is Out:** Hides the item when it is out of stock.

**D. Hide Input When Stock is Out:** Removes the items from your input field when this option is on.

> [!Note]
> Stock reserved by a payment that fails or is never completed is released back to your inventory.
>
> If **conditional logic** hides a sold-out item, the form still submits. Only items the user can see are checked against your stock.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** Off by default. When on, Fluent Forms shows the available stock for each item.

**G. Inventory Label:** Set your inventory label with the **{remaining_quantity}** shortcode. It shows how many of the items are still available. The default is **- {remaining_quantity} available**.

![Simple Inventory Settings](/images/modules/inventory-module/simple-inventory-settings-8.png)

### Global Inventory Settings

Select **Global** to share one stock across multiple forms. Global inventory items live in the **Inventory Manager**, so create them before you connect them to a field. For the full guide, see [Global Inventory Manager in Fluent Forms](/global-inventory-manager).

**Step 1: Open the Inventory Manager.** Click the **Settings** (gear) icon in the top right. Open **Other Settings**, select **Inventory Manager**, and click **Add Inventory**.

![Open the Inventory Manager](/images/modules/inventory-module/global-access-inventory-manager-12.webp)

**Step 2: Create the item.** Enter an **Inventory Name** and the **Total Quantity**, then click **Save**.

![Create a Global Inventory Item](/images/modules/inventory-module/global-add-inventory-13.webp)

**Step 3: Connect the item to your field.** Back in the form, select **Global** under **Inventory Settings**. Then set the options below.

**A. Global Inventory:** For each option, select a global inventory item from the dropdown. The stock comes from that item, so you do not enter a quantity here.

**B. Stock Out Message:** Set the message visitors see when an item is out of stock.

**C. Hide Choice When Stock is Out:** Hides the item when it is out of stock.

**D. Hide Input When Stock is Out:** Removes the items from your input field when this option is on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:** Off by default. When on, Fluent Forms shows the available stock for each item.

**G. Inventory Label:** Set your inventory label with the **{remaining_quantity}** shortcode. It shows how many of the items are still available.

![Global Inventory](/images/modules/inventory-module/unnamed-6.webp)

**Step 4: Track the stock.** Return to the **Inventory Manager** to see the remaining **Stock** of each item. Click the **arrow** at the start of a row to see the form options that use it. Use the **edit** and **delete** icons to change or remove an item.

![Track Global Inventory](/images/modules/inventory-module/global-viewing-inventory-14.webp)

### View Inventory Item

Click **Entries** in the top bar of the form. The page shows the inventory items in **Stock** and their **Total Numbers**.

![View Inventory Fluent Forms](/images/modules/inventory-module/view-inventory--scaled.webp)

## Embed the Form into Frontend

Click **Save** to save your changes. Then add the form to a page in one of three ways.

In the top bar, the **shortcode** (for example **[...34]**) and the **embed** (`</>`) icon sit next to each other. Click the **embed** icon to open the **Embed in a Page** window.

![Embed Form Icons](/images/modules/inventory-module/embed-form-icons-06.webp)

The window gives you three options: **Select Existing Page**, **Create New Page**, and **Use a Shortcode**.

![Embed in a Page](/images/modules/inventory-module/embed-in-a-page-07.webp)

### Select Existing Page

- Click **Select Existing Page**.
- Choose a page from the **Which page?** dropdown. Fluent Forms adds the form to the end of the page content.
- Click **Embed Form**.

![Select Existing Page](/images/modules/inventory-module/select-existing-page-08.webp)

### Create New Page

- Click **Create New Page**.
- Enter a name in the **Name your new page** field. The **Page URL** appears below it.
- Click **Embed Form**.

![Create New Page](/images/modules/inventory-module/create-new-page-09.webp)

WordPress opens the new page in the editor with your form inside it. Click **Publish** to make the page live.

![Embedded Form in the Page Editor](/images/modules/inventory-module/embedded-form-page-editor-10.webp)

### Use a Shortcode

Click **Copy** next to the shortcode in the **Embed in a Page** window, or copy the shortcode from the top bar. Paste it into any page, post, or widget area.

## Preview of the Inventory Module Form

Consider a form with a **Radio Field** named **Choose Your Book**. It has Story Book, Kids Story Book, and Fantasy Story Book as options. Their inventory quantities are 15, 13, and 21, respectively. **Show Available Stock** is on, so each option shows its remaining stock.

- A visitor selects **Story Book** and submits the form.

- After the submission, the available Story Books drop from 15 to 14.

- When an item reaches zero and **Hide Choice When Stock is Out** is enabled, that item no longer appears in the form.

![Preview Fluent Forms Inventory Module](/images/modules/inventory-module/inventory-form-preview-11.webp)

With these settings, Fluent Forms updates your stock after every order.
