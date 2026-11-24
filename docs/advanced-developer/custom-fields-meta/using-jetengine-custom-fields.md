---
description: "Fluent Forms integrates with JetEngine, allowing you to create and map custom fields for your Post Forms."
---

# Using JetEngine Custom Fields

Fluent Forms integrates with JetEngine, so you can create and map custom fields for your [Post Forms](/create-a-post-form). This article shows you how to set up custom fields with JetEngine in Fluent Forms Post Forms.

To create a custom field in your WordPress Post Form, install the [JetEngine Premium](https://crocoblock.com/plugins/jetengine/) plugin on your website.

## Enable the Post/CPT Creation Module

1. In your WordPress dashboard, go to **Fluent Forms** and open **Integrations** from the top menu.
2. Search for **Post** in the search box and find **Post/CPT Creation**. Then **enable** the module.

![Post CPT Creation](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/PostCPT-creation-01-scaled.webp)

## Create a Custom Meta Box

1. In the WordPress sidebar, go to **JetEngine** and select **Meta Boxes**. The **Meta Boxes List** page opens.
2. Click **Add New** to add a custom meta box for the **Post**.

![Add Meta Boxes Using JetEngine Custom Fields](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/Add-Meyta-boxes-02-scaled.webp)

## Configure Meta Box Settings

The Meta Box field settings open. Start with the **General Settings**, where you set the **Meta Box Title** and **Meta Box Type**.

Then, under **Visibility Conditions**, open **Enable for Post Types** and select **Post**. This applies the custom fields to your posts.

![Meta Box Settings](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/Meta-box-settings-03-1-scaled.webp)

## Create Custom Meta Fields

The **Meta Field** settings section lets you create multiple custom meta fields for your post.

1. Enter the **Label Name**. JetEngine generates the **Name ID** from the label.
2. Choose the **Field Type** from the dropdown, such as **Text**, **Number**, **Date**, or another type you need.
3. Click **Update Meta Box** to create the custom meta box field.

![Meta Field 1024x793](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/meta-field-04-1024x793.webp)

## Create a Post Form

1. Go to **Forms** in the Fluent Forms top menu and click **Add Form**.

![Add Using JetEngine Custom Fields](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/add-new-form-05-scaled.webp)

2. In the popup, select **Create a Post Form**.

![Create Post](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/create-a-post-form-06.webp)

3. In the **Select Post Type** popup, choose **post** from the **Post Type** dropdown and click **Continue**.

![Post Type](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/post-type-07.webp)

4. In the **Form Editor**, edit your Post form and open the **Configuration** tab.

![Setting Integration Using JetEngine Custom Fields](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/setting-integration-form-08-scaled.webp)

5. In the left sidebar, open **Integrations & Add-ons**, select **Post Feeds**, and click **Add Post Feed**.

![Add Post Feed Using JetEngine Custom Fields](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/add-post-feed-09-scaled.webp)

## Set Up the Meta Mapping

The **Create New Feed** page opens. Here you manage and map your custom meta field feed.

1. Enter a **Feed Name**.
2. In the **Jetengine Meta Mapping** section, select your JetEngine field in the **Jetengine Field** dropdown. Then map it to the matching Fluent Forms field in **Form Field (Value)**. The **{ }** icon inserts [smart codes](/form-editor-smart-codes) for mapping.
3. To add more fields, click **Add Another General Field**.
4. Click **Save**.
5. Submit a test post form.

For example, to fill the ‘**Job Title**’ custom field with data from the ‘**Post Title**’ form field, select the ‘**{inputs.post_title}**’ smart code in **Form Field (Value)**.

![Create Feed](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/create-new-feed-10-scaled.webp)

After you submit the post form, the post shows the custom meta field.

![JetEngine Post 1024x511](/images/advanced-developer/custom-fields-meta/using-jetengine-custom-fields/jetengine-post-11-1024x511.webp)
