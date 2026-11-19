---
description: "Fluent Forms integrates with Platformly, a marketing automation and CRM platform that helps you grow your…"
---

# Integrate Platformly

[Platformly](http://platformly.com) is a marketing automation and CRM platform that helps you grow your business. With the Platformly integration, **Fluent Forms** collects customer information and adds it to your Platformly account automatically. This guide shows you how to connect **Platformly** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Platformly** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Platformly Integration

Go to **Integrations** in the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **Platformly**, and find the **Platformly** integration module.

Turn on the **Toggle** to enable the **Platformly** module, then click **Manage** on the right side.

![Enable Platformly Integrate Platformly](/images/integrations/automation/integrate-platformly/1.-Enable-Platformly--scaled.webp)

Once you enable Platformly, Fluent Forms asks for the **Platformly API Key** and **Platformly Project ID** of your **Platformly Account**.

> [!Note]
> If you do not have a Platform.ly account, [create one here](https://www.platform.ly/).

![Platformly API Settings](/images/integrations/automation/integrate-platformly/2.-Platformly-API-Settings-scaled.webp)

### Get the Platformly API Key

1. Log in to your [Platformly Account](https://www.platform.ly/login.php).
2. Click the **Profile Icon** in the top right corner, open the **Dropdown Arrow**, and click **APIs and Docs**.

![Apis Docs Keys](/images/integrations/automation/integrate-platformly/3.-APIs-Docs-Keys-scaled.webp)

3. Click the **Plus Icon** on the top right side or **Add First API Key** in the middle to create an API Key.

![Add Frst API Key Or Plus Icon Integrate Platformly](/images/integrations/automation/integrate-platformly/4.-Add-frst-API-Key-or-Plus-icon-scaled.webp)

4. Enter a **Name** for the **API Key** and click **Submit**.

![Name API Key](/images/integrations/automation/integrate-platformly/5.-Name-API-Key-scaled.webp)

5. Copy the API Key. To edit or delete it later, click the **Three-Dot Icon** on the right side under the **Action** column.

![Copy API Key](/images/integrations/automation/integrate-platformly/6.-Copy-API-Key-scaled.webp)

### Get the Platformly Project ID

1. Click the **Profile Icon** in the top right corner, open the **Dropdown Arrow**, and click **Setup**.

![Setup Option Fluent Forms](/images/integrations/automation/integrate-platformly/7.-Setup-option-scaled.webp)

2. Copy your **Project ID** from the **ID** column on the left side.

To create a new project, click the **Plus Icon** in the top right corner. To edit a project, click the **Three-Dot Icon** under the **Action** column.

![Copy Project ID](/images/integrations/automation/integrate-platformly/8.-Copy-Project-ID-scaled.webp)

## Connect Platformly with Fluent Forms

1. Return to the **Platformly API Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** and **Project ID** you copied from **Platformly** into the **Platformly API Key** and **Platformly Project ID** fields.
3. Click **Save** to activate the **Platformly Integration** module.

![Paste API Key And Project ID](/images/integrations/automation/integrate-platformly/9.-Paste-the-API-Key-and-Project-ID-scaled.webp)

Fluent Forms now shows that your Platformly is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Platformly** to disconnect it.

![Verify Or Disconnect Platformly](/images/integrations/automation/integrate-platformly/10.-Verify-or-Disconnect-Platformly-scaled.webp)

## Integrate Platformly with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Platformly**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Platformly](/images/integrations/automation/integrate-platformly/11.-Open-desired-form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Platformly Integration** feed from the drawer.

![Add Integration Dropdown Integrate Platformly](/images/integrations/automation/integrate-platformly/12.-Add-new-integration-dropdown-scaled.webp)

Enter a **Name** for your integration feed. This field is required. Then click the **Arrow Icon** on the right side and select the **Platformly Segment** that receives the submitted form data.

![Select Platformly Segment Integrate Platformly](/images/integrations/automation/integrate-platformly/13.-Select-Platformly-Segment-scaled.webp)

After you select the segment, the feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Platformly Segment:** Use the Arrow Icon to select the Platformly segment that receives your contacts. You can change it at any time.
3. **Map Fields:** Link your Platformly fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Other Fields:** Add extra fields and map them to the matching Platformly fields. Use the Shortcode Arrow to select the value for each field. Click the Plus/Minus Icon in the right corner to add or delete custom fields.
5. **Contact Tags:** Add tags to your Platformly contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value create a single tag. You can also use shortcodes as the tag.

   **Enable Dynamic Tag Input:** Lets you add customized tags for specific Platformly contacts based on your submission values and the conditions you set.

6. **Note:** Write a note for the contacts. You can also use shortcodes to send dynamic data to Platformly.
7. **Conditional Logics:** Run the Platformly integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
8. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Platformly is now connected to this form.

![Save Feed Button Integrate Platformly](/images/integrations/automation/integrate-platformly/14.-Save-Feed-button-scaled.webp)

The **Platformly Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Platformly Integration Feed](/images/integrations/automation/integrate-platformly/15.-Added-Platformly-Integration-Feed-scaled.webp)

### Preview of Integrated Platformly

You can see the form submissions that add Platformly contacts in the **Entries** tab of the form. In this example, the form has three new **Form Submissions**.

![Entries Fluent Forms](/images/integrations/automation/integrate-platformly/16.-Form-Entries-scaled.webp)

In the **Platformly Dashboard**, hover over **CRM** in the top navbar, hover over **Segmentation**, and click **Segments**. On the **Segments** page, click the **Number** of **Contacts** for the **Segment** you connected to **Fluent Forms**.

![Added Contacts Under Selected Segment](/images/integrations/automation/integrate-platformly/17.-Added-contacts-under-the-selected-segment-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Platformly Segment**.

![Contacts Preview Fluent Forms](/images/integrations/automation/integrate-platformly/18.-Contacts-preview-scaled.webp)
