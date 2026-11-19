---
description: "The Fluent Forms Global Inventory Manager feature allows you to track and manage multiple forms efficiently."
---

# Global Inventory Manager

The Global Inventory Manager (Pro) lets you track one stock count across multiple forms.

Suppose you sell a **limited number of bus tickets**. You can manage that stock across different forms to keep the count accurate. When the tickets sell out, Fluent Forms can show users a message.

> [!Note]
> Global Inventory is a **Pro** feature. Before you use it, turn on the Inventory Module in Fluent Forms.

## Enabling the Inventory Module

Go to **Integrations** in the Fluent Forms Navbar and search for **Inventory Module** in the search bar.

Turn on the **Toggle** to enable the **Inventory** module.

![Enable Inventory Module Global Inventory Manager](/images/modules/global-inventory-manager/enable-inventory-module-01-scaled.webp)

## Accessing the Inventory Manager

Click the **Global Settings** gear icon in the top bar. In the left rail, open **Other Settings**, then select **Inventory Manager**. Click **Add Inventory** to add items.

![Access Inventory Manager](/images/modules/global-inventory-manager/access-inventory-manager-02-scaled.webp)

## Adding an Inventory Item

Click **Add Inventory**. In the pop-up, enter the **Inventory Name** and set the **Total Quantity**, which is the stock you have available. Set it to **0** to mark the item as sold out. Click **Save** to store the item in the **Inventory Manager**.

![Global Inventory Manager step](/images/modules/global-inventory-manager/10-scaled.webp)

## Adding a Global Inventory Item to a Form

Open the form where you want to use the **Global Inventory Item**.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Add a field that supports inventory tracking, such as:

- [Payment Item](/add-payment-item-field-in-payment-forms)

- Checkbox

- Radio Field

- Dropdown Field

This example uses the [**Checkbox Field**](/checkbox-field).

In the **Checkbox** field options, add items to connect with your **Global Inventory Items**.

![Global Inventory Manager step](/images/modules/global-inventory-manager/03-2-scaled.webp)

## Configuring Inventory Settings

Open the **Advanced Options** of the selected field. Under **Inventory Settings**, select **Global** to use Global Inventory items.

Select the **inventory item** from the **Global Inventory drop-down**. Then customize the **Stock Out Message** and the other settings.

For a detailed guide on every inventory setting, read the [Fluent Forms Inventory Module](/inventory-module) documentation.

![Glob Al Inventory Settings](/images/modules/global-inventory-manager/glob-al-inventory-settings-04-scaled.webp)

## Embed the Form into Frontend

Click **Save** to save your changes. Click the **Preview** (eye) icon in the top bar to preview the form.

To display the form on a page or post, **copy** the **Shortcode** from the top right and **paste** it into that page or post.

![Save Global Inventory Manager](/images/modules/global-inventory-manager/save-form-05-1-scaled-2.webp)

## Viewing Inventory Details

To monitor your inventory, go to **Global Settings > Other Settings > Inventory Manager**. Expand an item to show the items that use it.

The report shows the **remaining stock levels** and the forms that sold the items. You can also **reset the inventory** from this section.

![View Inventory Item](/images/modules/global-inventory-manager/view-inventory-item-06-scaled.webp)
