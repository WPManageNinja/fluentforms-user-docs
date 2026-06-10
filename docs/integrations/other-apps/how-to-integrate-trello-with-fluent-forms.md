# How to Integrate Trello with Fluent Forms

Trello is an integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation. Use Fluent Forms to collect customer information and automatically add it to your Trello list. 

This article will guide you through integrating **Trello** with **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **Trello** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enabling Trello Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Trello** through the search bar, and get the **Trello** integration module.

Now, turn on the **Toggle** to enable **Trello**, and click the **Settings Icon** on the right side. 

![Enabled Trello Module](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/1.-enabled-Trello-module-scaled.webp)

Once you enable Trello, you will be asked for the **Trello Access Key** of your **Trello Account**.

> [!Note]
> If you do not have a Trello account, [create one here](https://trello.com/signup).

![Trello API Settings](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/2.-Trello-API-Settings-scaled.webp)

### Getting the Trello API Access Key

To learn how to get the  **Trello API URL** and **Trello API Key** from **Trello**, follow the steps with screenshots below –

To start, click the [Get Access Token](https://trello.com/1/authorize?expiration=never&name=FluentForm%20Pro&scope=read,write,account&response_type=token&key=f79dfb43d0becc887dc488e99bed0687) to authenticate Trello. This will redirect you to Trello’s page, where you need to press the **Allow** button to grant access to your account.

![Allow Button Fluent Forms](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/3.-Allow-button.webp)

Once you click allow, Trello will provide the access key. Now, simply copy it. 

![Copy API Key](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/4.-Copy-API-Key-2.webp)

## Connecting Trello with Fluent Forms

Return to the **Trello API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **Access Key** you copied from **Trello** into the **Trello Access Key** field.
Finally, press the **Save Settings** button to make your **Trello Integration** functional. 

![Paste API Key](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/5.-Paste-API-Key-scaled.webp)

You can see that your Trello is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Trello** button.

![Verify Or Disconnect Button](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/6.-Verify-or-Disconnect-button-scaled-2.webp)

## Integrating Trello with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Trello** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Trello](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/7.-Open-desired-Form-Settings-1-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Trello Integration** feed from the dropdown list. 

![Add Integration Button Integrate Trello](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/8.-Add-New-Integration-button-1-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Trello.

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Trello Configuration:** Using the Arrow Icon, you need to select the Trello Board and  List/s where you want to send the submission data of Fluent Forms. Also, you can set the color for your newly created Card Labels & Member/s who can view the cards.

3. **Card Title:** Here, you can specify the title for your newly created cards. You can also use shortcodes to use the dynamic data as the title.

4. **Card Content:** With this option, you can specify the content you want to add to your cards. Here, you can also use shortcodes for your content.

5. **Card Position:** Here, you can set the desired position for your cards.

6. **Conditional Logics:** This option allows Trello integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

7. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Trello will be integrated into this specific form! 

![Save Feed Button Integrate Trello](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/9.-Save-Feed-button-2-scaled.webp)

After successful Integration, you will now see that your **Trello Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Trello Integration Feed](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/10.-Added-Trello-Integration-Feed-scaled.webp)

### Preview of Integrated Trello

Here, you can see the preview of the added Trello Contacts through the Form Entries based on the Integration.

**For example**, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/11.-Entries-tab.webp)

Now, go to the **Trello** **Workspace** section from the left sidebar, open the desired **Board**, and view the desired **List** you integrated with **Fluent Forms**.

Then, you can see that the **users who submitted the forms** in **Fluent Forms** are automatically added to the selected **Trello List**. 

![Preview Added Cards Integrate Trello](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/12.-preview-of-Added-cards-scaled.webp)

You can also see the details of one user by clicking the desired card of that user.

![Preview Details Specific Card Integrate Trello](/images/integrations/other-apps/how-to-integrate-trello-with-fluent-forms/13.-Preview-of-details-of-a-specific-card.webp)

This way, you can easily integrate Trello with Fluent Forms!
