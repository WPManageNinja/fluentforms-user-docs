---
description: "The Fluent Forms Global Inventory Manager lets you track one stock count across multiple forms and manage it from a single place."
---

# Global Inventory Manager

The **Global Inventory Manager** (Pro) lets you track one stock count across multiple forms. You create inventory items once, then connect them to the options of any form. This guide shows you how to create, connect, and monitor Global Inventory items.

Suppose you sell a **limited number of bus tickets** through several forms. Create one inventory item for the tickets and connect it to every form. Each sale lowers the same stock count. When the tickets sell out, Fluent Forms shows visitors a stock out message.

> [!Note]
> Global Inventory is a **Pro** feature. Before you use it, turn on the Inventory Module in Fluent Forms.

## Enabling the Inventory Module

Go to **Integrations** in the Fluent Forms navbar. Search for **inventory**, then turn on the **Inventory Module** toggle. An **Enabled** badge appears next to its name.

![Enable Inventory Module Global Inventory Manager](/images/modules/global-inventory-manager/enable-inventory-module-toggle-01.webp)

## Accessing the Inventory Manager

Click the **Settings** (gear) icon in the top right of the navbar. In the left menu, open **Other Settings**, then select **Inventory Manager**. The **Global Inventory** table lists all your inventory items.

The table has these columns:

- **Name:** The name of the inventory item.
- **Slug:** The unique ID Fluent Forms creates from the name.
- **Quantity:** The total stock you set.
- **Stock:** The stock still available.
- **Items in Use:** The number of form options connected to the item.

![Access Inventory Manager](/images/modules/global-inventory-manager/access-inventory-manager-gear-02.webp)

## Adding an Inventory Item

Click **Add Inventory**. In the pop-up, fill in the following:

- **Inventory Name:** Enter a name you can recognize, such as **Bus Ticket**.
- **Total Quantity:** Enter the stock you have available. Set it to **0** to mark the item as sold out.

Click **Save** to add the item to the **Inventory Manager**.

![Add Inventory](/images/modules/global-inventory-manager/add-inventory-03.webp)

## Managing Inventory Items

Each row in the **Global Inventory** table has action icons on the right:

- **Edit** (pencil icon): Change the name or the total quantity.
- **Reset** (circular arrow icon): Clear the recorded sales so the item returns to its full quantity.
- **Delete** (trash icon): Remove the item from the Inventory Manager.

To see which forms use an item, click the **arrow** at the start of its row. The row expands and shows the form options connected to it. The **Stock** column shows how much stock is left, so you can track sales across all your forms in one place.

![Viewing Inventory](/images/modules/global-inventory-manager/viewing-inventory-04.webp)

> [!Note]
> Delete an item only when no form needs it. To restart the stock, use **Reset** instead.

## Adding a Global Inventory Item to a Form

Open the form where you want to use the **Global Inventory** item.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Add a field that supports inventory tracking, such as:

- [Payment Item](/add-payment-item-field-in-payment-forms)

- Checkbox

- Radio Field

- Dropdown Field

This example uses a **Radio Field** with **Yes** and **No** options.

Click the field and open the **Customize** tab. Expand **Advanced Options**. Under **Inventory Settings**, select **Global**. A **Global Inventory** dropdown appears for each option of the field.

Select an **inventory item** for each option. Then customize the **Stock Out Message** and the other settings.

For a detailed guide on every inventory setting, read the [Fluent Forms Inventory Module](/inventory-module) documentation.

![Global Inventory Settings](/images/modules/global-inventory-manager/glob-al-inventory-settings-04-scaled.webp)

## Embed the Form into Frontend

Click **Save** to save your changes. In the top bar, click the **embed** (`</>`) icon to open the **Embed in a Page** window.

![Embed Form Icons](/images/modules/global-inventory-manager/embed-form-icons-05.webp)

Choose **Select Existing Page**, **Create New Page**, or copy the shortcode under **Use a Shortcode**. For the full steps, see the [Inventory Module](/inventory-module) guide.

![Embed in a Page](/images/modules/global-inventory-manager/embed-in-a-page-06.webp)
