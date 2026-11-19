---
description: "The Post/CPT (Custom Post Type) Selection module in Fluent Forms is a powerful tool that fetches and displays post-type data from your WordPress site in a…"
---

# Post Selection Module

The Post/CPT (Custom Post Type) Selection module in Fluent Forms is a Pro field that fetches and displays post-type data from your WordPress site in a dropdown. Use it to let users select a post to edit or act on.

This guide shows you how to add the field and filter its posts.

> [!Note]
> The Post/CPT Selection field is available in **Fluent Forms Pro**. It needs no separate module toggle.

## What is Post/CPT Selection?

This field lets users view and select posts from your site in a form dropdown. For example:

- In a [post-edit form](/create-a-post-form), you can display all posts authored by the logged-in user for selection.

- Users can choose a specific post and submit additional data.

You can also customize the posts shown in the dropdown with **Query Parameters**.

## Add the Post/CPT Selection Field

Open your form in **Fluent Forms**. Add the **Post/CPT Selection** field from the [**Advanced Fields**](/form-fields-overview) section of the **Input Fields** panel, or search for it in the field search box.

![Post Selection Module](/images/modules/post-selection-module/post-selection-module-01-scaled.webp)

By default, the dropdown shows all posts on your site. You can select any other post type on your site.

![Select Post Type](/images/modules/post-selection-module/select-post-type-02-scaled.webp)

Use the Extra Query Parameter field to show specific posts by author, category, or tag.

## Using the Extra Query Parameter

The Extra Query Parameter field filters posts with **WP_Query**. See the [WP_Query documentation](https://developer.wordpress.org/reference/classes/wp_query/) for all options.

The field needs the query in a specific format. In the [WP_Query documentation](https://developer.wordpress.org/reference/classes/wp_query/), choose how to filter your posts, such as by author name, category name, or tag.

Assume your site has a post author named Kevin. To show all of Kevin's posts, build a query for the author.

## Single Parameter

In WP_Query, you write the author as `'author_name' => 'kevin'`. In the Extra Query Parameter field, join the key and the value with an equals sign.

![WP Query](/images/modules/post-selection-module/WP_Query-03-scaled.webp)

Enter it as `author_name=kevin`.

![Post Selection Module step](/images/modules/post-selection-module/04-4-scaled.webp)

## Multiple Parameters

To display posts by a specific author in a category:

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

For queries with array values, such as posts in multiple categories:

- WP_Query Example:

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

For nested arrays, such as meta queries:

- WP_Query Example

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

- Format for Fluent Forms

```
meta_query[0][key]=views&meta_query[0][value]=100&meta_query[0][compare]=>=
```

To create a form that edits posts, see [Create a Post Form](/create-a-post-form).
