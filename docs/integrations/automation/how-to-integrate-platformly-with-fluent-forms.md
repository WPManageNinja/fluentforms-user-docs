# How to Integrate Platformly with Fluent Forms

**Fluent Forms** integrates with [Platformly](http://platformly.com), an integrated email marketing, marketing automation, and small business CRM tool that helps you grow your business by collecting customer information and automatically adding it to your Platformly through Fluent Forms.

This article will guide you through integrating **Platformly** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Platformly** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Platformly Integration

Go to **Integrations** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **Platformly** through the search bar, and get the **Platformly** integration module.

Now, turn on the **Toggle** to enable the **Platformly** module, and click the **Settings Icon** on the right side. 

![Enable Platformly Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/1.-Enable-Platformly--scaled.webp)

Once you enable Platformly, you will be asked for the **Platformly API Key** and **Platformly Project ID** of your **Platformly Account**.

> [!Note]
> If you do not have a Platform.ly account, [create one here](https://www.platform.ly/).

![Platformly API Settings](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/2.-Platformly-API-Settings-scaled.webp)

### Getting the Platformly API Key

To learn how to get the  **Platformly API Key** from **Platformly**, follow the steps with screenshots below – 

First, log into your [Platformly Account](https://www.platform.ly/login.php), go to the **Profile Icon** in the top right corner, open the **Dropdown Arrow**, and click the **APIs and Docs** option. 

![Apis Docs Keys](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/3.-APIs-Docs-Keys-scaled.webp)

Now, to create an API Key, click either the **Plus Icon** on the top right side or the **Add First API Key** button in the middle.     

![Add Frst API Key Or Plus Icon Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/4.-Add-frst-API-Key-or-Plus-icon-scaled.webp)

Here, provide a **Name** for the **API Key** you are creating and click the **Submit** button.     

![Name API Key](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/5.-Name-API-Key-scaled.webp)

Here, your API Key is created! Now, copy this API Key for later use. 

Also, you can **Edit/Delete** the API Key anytime by clicking the **Three-Dot Icon** on the right side under the **Action** column. 

![Copy API Key](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/6.-Copy-API-Key-scaled.webp)

### Getting the Platformly Project ID

From the **Profile Icon** in the top right corner, open the **Dropdown Arrow**, and click the **Setup** option.   

![Setup Option Fluent Forms](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/7.-Setup-option-scaled.webp)

Here, you can get your newly created **Project ID** on the left side under the **ID** column. Copy this as well. 

You can create new projects by clicking the **Plus Icon** in the top right corner if needed. You can also edit this by clicking the **Three-Dot Icon** under the **Action** column.  

![Copy Project ID](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/8.-Copy-Project-ID-scaled.webp)

## Connect Platformly with Fluent Forms

Return to the **Platformly API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** and **Project ID** you copied from **Platformly** into the **Platformly API Key** and **Platformly Project ID** fields respectively.

Finally, press the **Save Settings** button to make your **Platformly Integration** module functional.  

![Paste API Key And Project ID](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/9.-Paste-the-API-Key-and-Project-ID-scaled.webp)

You can see that your Platformly is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Platformly** buttons.

![Verify Or Disconnect Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/10.-Verify-or-Disconnect-Platformly-scaled.webp)

## Integrate Platformly with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Platformly,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/11.-Open-desired-form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Platformly Integration** feed from the dropdown list. 

![Add Integration Dropdown Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/12.-Add-new-integration-dropdown-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference. 

Also, you must select the **Platformly Segment** from the dropdown by clicking the **Arrow Icon** on the right side where you want to send the submitted form data.

![Select Platformly Segment Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/13.-Select-Platformly-Segment-scaled.webp)

Once you select the segment, a pop-up page will appear with various settings options for configuring the Platformly.

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Platformly Segment:** Using the Arrow Icon, you can select the Platformly Segment where you want to add your contacts. You can also change this anytime if needed.

3. **Map Fields:** Use all the fields under this option to properly link your Platformly Fields with the Form Fields. You can easily select the value for the form fields based on the Platformly fields using the Shortcode Arrow.

4. **Other Fields:** Using this option, you can also add the extra fields and map them to the Fluent Forms fields with their respective Platformly fields. You can easily select the value for the form fields based on the Platformly fields using the Shortcode Arrow. Also, by clicking the Plus/Minus Icon in the right corner, you can Add/Delete custom fields as per your needs.

5. **Contact Tags:** With this option, you can add tags to your Platformly contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use ShortCodes as the tag. Enable Dynamic Tag Input: This option allows you to add customized tags for specific Platformly contacts based on your submission values according to your set conditions.

6. **Note:** With this option, you can write a note for the contacts. You can also use Shortcodes to send dynamic data to Platformly.

7. **Conditional Logics:** This option allows Platformly integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

8. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Platformly will be integrated into this specific form!

![Save Feed Button Integrate Platformly](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/14.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **Platformly Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon,** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Platformly Integration Feed](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/15.-Added-Platformly-Integration-Feed-scaled.webp)

### Preview of Integrated Platformly

Here, you can see the preview of the added Platformly Segments through the Form Entries based on the Integration.

For example, you can see three new **Form Submissions** under the **Entries** tab on this particular form. 

![Entries Fluent Forms](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/16.-Form-Entries-scaled.webp)

Now, go to the **Platformly Dashboard**, hover over **CRM** from the top navbar, again hover over **Segmentation**, and click the **Segments** option.  

Once you are on the **Segments** page, click on the **Number** of the **Contacts** of your integrated **Segment** that you integrated into **Fluent Forms**.

![Added Contacts Under Selected Segment](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/17.-Added-contacts-under-the-selected-segment-scaled.webp)

Finally, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Platformly Segment**. 

![Contacts Preview Fluent Forms](/images/integrations/automation/how-to-integrate-platformly-with-fluent-forms/18.-Contacts-preview-scaled.webp)

This way you can easily integrate Platformly with Fluent Forms!
