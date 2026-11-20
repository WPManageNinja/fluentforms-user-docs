---
description: "The Post/CPT Selection field in Fluent Forms shows posts, pages, or custom post types from your site in a dropdown, and lets you filter them with query parameters."
---

# Post Selection Module

The **Post/CPT (Custom Post Type) Selection** field in Fluent Forms fetches post data from your WordPress site and shows it in a dropdown. Use it to let users select a post to edit or to take an action on.

This guide shows you how to add the field, choose a post type, and filter the posts with the **Extra Query Parameter** option.

> [!Note]
> The Post/CPT Selection field is available in **Fluent Forms Pro**. It needs no separate module toggle.

## What is Post/CPT Selection?

This field lets users view and select posts from your site in a form dropdown. For example:

- In a [post-edit form](/create-a-post-form), you can display all posts authored by the logged-in user for selection.

- Users can choose a specific post and submit additional data.

You can also customize the posts shown in the dropdown with **Query Parameters**.

## Adding the Post/CPT Selection Field

Open your form in **Fluent Forms**. In the **Input Fields** panel, search for **post**, or find the field in the [**Advanced Fields**](/form-fields-overview) section. Click or drag **Post/CPT Selection** to add it to your form.

![Add the Post/CPT Selection Field](/images/modules/post-selection-module/add-post-cpt-selection-field-05.webp)

By default, the dropdown shows all posts on your site. The label is **Post Selection** and the placeholder is **- Select -**.

> [!Note]
> When a user submits the form, Fluent Forms saves the selected post. The entry shows the post title.

## Configuring the Field

Click the field, then open the **Customize** tab. The panel has two parts.

### General Settings

- **Element Label:** Set the label that appears above the dropdown.

- **Admin Field Label:** Set a label that only you see in the form entries.

- **Placeholder:** Set the text that appears before a user selects a post.

- **Label Placement:** Choose where the label appears. **Default** uses your form's global setting.

- **Required:** Turn on the toggle to make users select a post before they submit.

- **Select Post Type:** Choose which type of content appears in the dropdown.

- **Extra Query Parameter:** Filter the posts that appear in the dropdown.

### Advanced Options

Open **Advanced Options** to set the **Name Attribute**, **Dynamic Default Value**, **Help Message**, **Container Class**, and **Conditional Logic**. Turn on **Enable Select2** to make the dropdown searchable.

## Selecting a Post Type

Click the **Select Post Type** dropdown. The list shows every public post type on your site, such as **Post**, **Page**, and any custom post types. The dropdown then shows only the content of the type you choose.

![Select Post Type](/images/modules/post-selection-module/select-post-type-field-06.webp)

## Using the Extra Query Parameter

Use the **Extra Query Parameter** field to show specific posts, for example by author, category, or tag.

The field filters posts with **WP_Query**. See the [WP_Query documentation](https://developer.wordpress.org/reference/classes/wp_query/) for all options.

You cannot paste a WP_Query array directly. Write each parameter as a **key=value** pair. In the WP_Query documentation, choose how you want to filter your posts, such as by author name, category name, or tag. Then convert it to the Fluent Forms format described below.

### Single Parameter

Suppose your site has an author named Kevin and you want to show only his posts. In WP_Query, you write the author as `'author_name' => 'kevin'`. In the Extra Query Parameter field, join the key and the value with an equals sign.

![WP Query](/images/modules/post-selection-module/WP_Query-03-scaled.webp)

Enter it as `author_name=kevin`. The screenshot below uses `author_name=rami`.

![Extra Query Parameter](/images/modules/post-selection-module/extra-query-parameter-07.webp)

### Multiple Parameters

To show posts by a specific author in a category, join the parameters with an ampersand (&).

- WP_Query example:

```
array(

    'author_name' => 'kevin',

    'category_name' => 'news'

)
```

- Format for Fluent Forms:

```
author_name=kevin&category_name=news
```

### Array Parameters

For queries with array values, such as posts in multiple categories, add square brackets after the key.

- WP_Query example:

```
array(

    'category_name' => array('news', 'blog')

)
```

- Format for Fluent Forms:

```
category_name[]=news&category_name[]=blog
```

### Nested Array Parameters

For nested arrays, such as meta queries, add an index and the inner key in square brackets.

- WP_Query example:

```
array(

    'meta_query' => array(

        array(

            'key' => 'views',

            'value' => '100',

            'compare' => '>='

        )

    )

)
```

- Format for Fluent Forms:

```
meta_query[0][key]=views&meta_query[0][value]=100&meta_query[0][compare]=>=
```

### Using Smart Codes in the Query

You can use [smart codes](/form-editor-smart-codes) in the Extra Query Parameter field. For example, `author={user.ID}` shows only the posts of the logged-in user.

To create a form that edits posts, see [Create a Post Form](/create-a-post-form).
