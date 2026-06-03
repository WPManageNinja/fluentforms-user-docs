# Post Selection Module in Fluent Forms

The Post/CPT (Custom Post Type) Selection module in Fluent Forms is a powerful tool that fetches and displays post-type data from your WordPress site in a dropdown field. This feature is great for scenarios like letting users select a post to edit or perform an action based on available posts.

This article will show you the details of the **Post Selection Module** feature with Fluent Forms.

### What is Post/CPT Selection?

This feature lets users view and select posts from your site directly in a form dropdown. For example:

- If you create a post-edit form, you can display all posts authored by the logged-in user for selection.

- Users can choose a specific post and submit additional data.

You can even customize the posts displayed in the dropdown using **Query Parameters**.

## Add the Post/CPT Selection Field

Go to your form in **Fluent Forms**. Add the **Post/CPT Selection** field from the **Advanced Fields** section. 

![](/images/modules/post-selection-module-in-fluent-forms/post-selection-module-01-scaled.webp)

A dropdown showing all posts on your site will appear by default. However, you can select any other post-type data on your site.

![](/images/modules/post-selection-module-in-fluent-forms/select-post-type-02-scaled.webp)

Use the Extra Query Parameter field to display specific posts based on author, category, or tags.

## Using the Extra Query Parameter

The Extra Query Parameter field allows you to filter posts using **WP_Query**. You can see the WP_Query [documentation here](https://developer.wordpress.org/reference/classes/wp_query/).

But to run the same queries inside the Extra Query Parameter field, you need to write the queries in a specific format. Go to the WordPress [wp query documentation](https://developer.wordpress.org/reference/classes/wp_query/) and choose how to display your post, such as author name, category name, tag, etc.

Now, assume I have a post-author named Kevin. We want to show all his posts so we can use this in our query.

#### Single Parameter

In wp_query, it works as below-

We will also convert it in our own way. We will grab the key and value from above.

![](/images/modules/post-selection-module-in-fluent-forms/WP_Query-03-scaled.webp)

You can write this way.

![](/images/modules/post-selection-module-in-fluent-forms/04-4-scaled.webp)

#### Multiple Parameter

To display posts by a specific author in a category:

- WP_Query example:

`array(

    'author_name' => 'kevin',

    'category_name' => 'news'

)

Format for Fluent Forms:

author_name=kevin&category_name=news`

#### Array Parameters

For queries with array values, such as posts in multiple categories:

- WP_Query Example:

`array(

    'category_name' => array('news', 'blog')

)

Format for Fluent Forms:

category_name[]=news&category_name[]=blog`

#### Nested Array Parameters

For nested arrays, such as meta queries:

- WP_Query Example

`array(

    'meta_query' => array(

        array(

            'key' => 'views',

            'value' => '100',

            'compare' => '>='

        )

    )

)`

- Format for Fluent Forms

`meta_query[0][key]=views&meta_query[0][value]=100&meta_query[0][compare]=>=`

Now, you can use the Post Selection module to create dynamic and user-friendly forms in Fluent Forms!
