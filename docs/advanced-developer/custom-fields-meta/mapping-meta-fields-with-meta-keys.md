---
description: "Fluent Forms offers a powerful Meta Fields Mapping feature that allows you to map post meta fields into your form."
---

# Mapping Meta Fields with Meta Keys

The **Meta Fields Mapping** feature maps **post meta fields** into your form. Post meta fields are WordPress objects that store additional data about a post. This guide shows you how to map meta fields for both **Post Forms** and **Product Forms**.

## Mapping Meta Fields with a Post Form

### Create or Use an Existing Post Form

Create a **Custom Post Form** or use an existing one. Make sure the **Field Group** is set to **Post Type**. To learn more about post forms, read the [Post Form guide](/create-a-post-form).

A post form can include fields like:

- Post Title
- Post Content
- Categories
- Simple Text
- Numeric Field

> [ACF (Advanced Custom Fields)](/use-acf-to-add-a-custom-field-in-the-post-form) mapping requires the use of mapped meta fields.

![Create Post](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/Create-post-form-01-scaled.webp)

### Setup Custom Meta Fields with ACF

1. Use a plugin like **Advanced Custom Fields (ACF)** to create a field group for your WordPress posts.
2. Copy the **Field Name** of each field from the **Custom Fields plugin**. This is the meta key.

![Unnamed Fluent Forms](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/unnamed-7.webp)

### Map Meta Fields in Fluent Forms

1. In your form, open the **Configuration** tab. Then open **Integrations & Add-ons** and click **Post Feeds**.
2. Open your post feed, or click **Add Post Feed** to create one.
3. In the **Meta Fields Mapping** section, click **Add Meta Field** and paste the copied meta key into the field.
4. Make sure standard post fields, such as **Post Title** and **Post Content**, are mapped in **Post Fields Mapping** before you add custom meta fields.
5. Click **Save**.
6. Fill out and submit the form.

![Post Field And Meta Field](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/post-field-and-meta-field-02-scaled.webp)

### Verify Submission

Go to **Posts** in WordPress and find the new post. Open the post and check that the **Post Title**, **Post Content**, and your custom field values, such as **Event Venue** and **Event Capacity**, are mapped correctly.

![Meta Key Field](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/MEta-Key-Field-03-scaled.webp)

## Mapping Meta Fields with a Product Form

First, create or use an existing Product Form. Follow the same steps as the post form and create a **Product Form** with the fields you need.

Add the product-specific fields, such as:

- Product Title
- Product Description
- Product Price
- Product SKU

![Product Fluent Forms](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/product-form-04-scaled.webp)

### Add Custom Fields with ACF

1. Use a plugin like **Advanced Custom Fields (ACF)** to create a field group for your WordPress posts.
2. Copy the **Field Name** of each field from the **Custom Fields plugin**. This is the meta key.
3. In the **Configuration** tab of your Fluent Form, open **Integrations & Add-ons** and click **Post Feeds**.
4. Open your post feed and click **Add Meta Field** in the **Meta Fields Mapping** section. Paste the copied meta key into the field.
5. Make sure default post fields, such as **Post Title** and **Post Content**, are mapped in **Post Fields Mapping** before you add custom meta fields.

![Add Product Field Mapping Meta Fields with](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/add-product-field-05-scaled.webp)

![Add Meta Field Mapping Meta Fields with](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/add-meta-field-06-scaled.webp)

After you add all the meta keys, click **Save**. Then fill out and submit the form.

![Unnamed](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/unnamed-1-4.webp)

### Verify Submission

Go to **Posts** in the WordPress dashboard. Open the new product and check that the **Product Title**, **Product Price**, and **Product SKU** appear correctly.

![Preview Product Meta Key Mapping Meta Fields with](/images/advanced-developer/custom-fields-meta/mapping-meta-fields-with-meta-keys/preview-product-meta-key-07-scaled.webp)
