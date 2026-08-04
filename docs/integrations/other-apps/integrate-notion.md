---
description: "Integrating Notion with Fluent Forms allows you to automate data collection and organize your Notion workspace."
---

# Integrate Notion

Integrating [Notion](http://notion.com) with **Fluent Forms** allows you to automate data collection and organize your Notion workspace. This article will guide you through integrating **Notion** with **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **Notion** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enabling Notion Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Notion** through the search bar, and get the **Notion** integration module. 

Now, turn on the **Toggle** to enable the **Notion** module, and click the **Settings Icon** on the right side. 

![Enable Notion Integrate Notion](/images/integrations/other-apps/integrate-notion/1.-Enable-Notion-scaled.webp)

Once you enable Notion, you will be asked for the **Access Code** of your **Notion Account**.

> [!Tip]
> Click **Get Notion Code** to authorize Fluent Forms and complete the Notion integration.

![Get Acess Code](/images/integrations/other-apps/integrate-notion/2.-Get-Acess-Code-scaled.webp)

### Getting the Notion Access Code

First, [click here](https://api.notion.com/v1/oauth/authorize?client_id=a7d866f8-cdfe-477d-8cce-9e363355c6b2&response_type=code&owner=user&redirect_uri=https://fluentforms.com/gapi), it will redirect to a page where you can specify which **Notion Account** you want to integrate with **Fluent Forms** by clicking the **Arrow Icon** in the top right corner. 

Then, click the **Select Pages** button to choose the Notion Pages you want to integrate with Fluent Forms.

![Select Pages Integrate Notion](/images/integrations/other-apps/integrate-notion/3.-Select-Pages.webp)

Here, you will see all of your available Notion Pages. Now, **check the box** of those pages that you want to integrate and click the **Allow Access** button.

![Allow Access Fluent Forms](/images/integrations/other-apps/integrate-notion/4.-Allow-Access.webp)

Now, a pop-up will come with the **Access Code** of Notion and a picture showing the **Instruction** for providing that code. Simply, copy it from here by clicking the **Copy** button. 

![Copy Access Code](/images/integrations/other-apps/integrate-notion/5.-Copy-access-code.webp)

## Connecting Notion with Fluent Forms

Return to the **Notion Integration** page under the **Configure Integrations** tab of the **Global Settings** section from the fluent forms navbar. 

Now, paste the **Code** you copied from **Notion** into the **Access Code** field.
Finally, press the **Verify Notion** button to make your **Notion Integration** module functional. 

![Paste Access Code](/images/integrations/other-apps/integrate-notion/6.-Paste-access-code-scaled.webp)

You can see that your Notion is connected to your **Fluent Forms** successfully!
You can disconnect it anytime by clicking the **Disconnect Notion** button.

![Disconnect Notion Fluent Forms](/images/integrations/other-apps/integrate-notion/7.-Disconnect-Notion-scaled.webp)

## Integrating Notion with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Notion,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Notion](/images/integrations/other-apps/integrate-notion/8.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Notion Integration** feed from the dropdown list. 

![Add Integration Dropdown Integrate Notion](/images/integrations/other-apps/integrate-notion/9.-Add-new-integration-dropdown-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the Notion.  

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Notion Database:** Using the Arrow Icon, you can select the Notion Database where you want to add your form submission information. You can also change this anytime if needed.

Once you select the database, all the columns from your chosen Notion Database will appear here as fields (e.g., you can see the Email, Country, and Name fields). 

Now, use all the fields under this option to properly link your Notion Databases with the Form Fields. You can easily select the value for the form fields based on the Notion fields using the **Shortcode Arrow**.

3. **Conditional Logics:** This option allows Notion integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

4. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Notion will be integrated into this specific form!

![Save Feed Integrate Notion](/images/integrations/other-apps/integrate-notion/10.-Save-Feed-scaled.webp)

After successful Integration, you will now see that your **Notion Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Notion Integration Feed](/images/integrations/other-apps/integrate-notion/11.-Added-Notion-Integration-Feed-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, go to the form’s **Editor** from the top navbar to embed and display the form on a specific Page/Post on your site. 

Now, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design** button in the middle.

Once you are done, click the **Save** **Form** button to save all your changes. 

![Save Integrate Notion](/images/integrations/other-apps/integrate-notion/12.-Save-Form-scaled.webp)

### Preview of Integrated Notion

Here, you can see the preview of the added Notion Contacts through the Form Entries based on the Integration.

For example, you can see four new **Six Submissions** under the **Entries** tab on this particular form.

![Entries Fluent Forms](/images/integrations/other-apps/integrate-notion/13.-form-Entries-scaled.webp)

Now, go to Notion and open the **Database** you configured with **Fluent Forms** from the left sidebar.

Here, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Notion Database**. 

![Notion Preview Fluent Forms](/images/integrations/other-apps/integrate-notion/14.-Notion-Preview-scaled.webp)

## Connecting Notion Page directly with Fluent Forms

You also have the option to connect any newly created page to Fluent Forms directly from Notion.

To do this, simply open the desired page, click the **Three-Dot Icon** in the top right corner, scroll down to **Connections**, and press the **Fluent Forms** option. Your selected page will be connected to Fluent Forms!

![Connect Notion Page With](/images/integrations/other-apps/integrate-notion/15.-Connect-New-Notion-Page-with-Fluent-Forms-scaled.webp)

This way, you can easily integrate Notion with Fluent Forms!
