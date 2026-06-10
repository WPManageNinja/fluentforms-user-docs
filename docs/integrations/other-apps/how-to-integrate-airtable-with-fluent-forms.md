# How to Integrate Airtable

**Fluent Forms** integrates with [Airtable](http://airtable.com), a cloud-based platform for creating and sharing relational databases to help organize and collaborate on various information about anything, like employee directories, product inventories, and even apartment hunting.

This article will guide you through integrating **Airtable** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Airtable** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Enabling Airtable Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Airtable** through the search bar, and get the **Airtable** integration module.

Now, turn on the **Toggle** to enable the **Airtable** module, and click the **Settings Icon** on the right side. 

![Enabled Airtable Module](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/1.-Enabled-Airtable-module-scaled.webp)

Once you enable Airtable, you will be asked for the **Airtable Access Token** of your **Airtable Account**.

> [!Tip]
> Follow the authorization steps at the top of the **Airtable** settings page to complete the integration.

![Airtable Settings Page](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/2.-Airtable-Settings-page-scaled.webp)

### Getting the Airtable Access Token

First, log in to your [Airtable Account](https://airtable.com/login), go to the **Profile** **Menu** from the top right corner, and click the **Builder Hub** button. 

![Profile Builder Hub Option](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/3.-Profile-Builder-Hub-option-scaled.webp)

Now, open the **Personal Access tokens** under the **Developers** tab and click the **+Create new token** button.

![Create Token](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/4.-Create-New-Token-scaled-2.webp)

Now, provide a **Name** for your token. Then, add the following **Scopes** by clicking the **+ Add a scope** button.

- **Data.records:read**

- **Data.records:write**

- **schema.bases:read**

Also, select the workspace where you want to add from the **Access** section by clicking the **+ Add a base** button. Once you are done, click the **Create token** button.

![Name Scope Base Create Token Button](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/5.-Name-scope-base-Create-Token-button.webp)

Now, a pop-up will come with your access token. Simply, copy it from here.

![Copy Token Fluent Forms](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/6.-Copy-Token.webp)

## Connecting Airtable with Fluent Forms

Return to the **Airtable Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **Token** you copied from **Airtable** into the **Airtable Access Token** field.
Finally, press the **Save Settings** button to make your **Airtable Integration** module functional. 

![Paste Access Token](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/7.-Paste-Access-Token-scaled.webp)

You can see your Airtable is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Airtable** button.

![Verify Or Disconnect Button](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/8.-Verify-or-Disconnect-button-scaled-3.webp)

## Integrating Airtable with Forms

Go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Airtable,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open Settings Integrate Airtable](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/9.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Airtable Integration** feed from the dropdown list. 

![Add Integration Button Integrate Airtable](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/10.-Add-New-Integration-button-scaled-2.webp)

Here, you will find a required field to set a **Feed** **Name** for your integration feed according to your preference.

Also, you must select the **Workspace** and **Table** under **Airtable Configuration** from the dropdown where you want to send the submitted form data.

![Select Table Integrate Airtable](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/11.-Select-Table-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the Airtable.  

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Airtable Configuration:** Using the Arrow Icon, you can select the Airtable Mailing List where you want to add your contacts. You can also change this anytime if needed

3. **Airtable Table Dropdown:** Use all the fields under this option to properly link your Airtable Fields with the Form Fields. You can easily select the value for the form fields based on the Airtable fields using the Shortcode Arrow.

4. **Enable Instant Responder:** Check this option, and Airtable will send any instant responders set up when the contact is added to the list. This option is not available to users on a free trial.

5. **Conditional Logics:** This option allows Airtable integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic-in-fluent-forms).

6. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Airtable will be integrated into this specific form!

![Save Feed Button Integrate Airtable](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/12.-Save-Feed-button-scaled-3.webp)

After successful Integration, you will now see that your **Airtable Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Airtable Integration Feed](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/13.-Added-Airtable-Integration-Feed-scaled.webp)

## Preview of Integrated Airtable

Here, you can see the preview of the added Airtable Contacts through the Form Entries based on the Integration.

For example, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/14.-Entries-tab-scaled.webp)

Now, go to the Airtable **All Workspaces** section from the left sidebar and open the **Desired Workspace** you integrated into **Fluent Forms**.

![Worspace Fluent Forms](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/15.-Desired-worspace-scaled.webp)

Here, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Airtable Table**. 

![Preview Added Contacts Integrate Airtable](/images/integrations/other-apps/how-to-integrate-airtable-with-fluent-forms/16.-Preview-of-added-contacts-scaled.webp)

This way, you can easily integrate Airtable with Fluent Forms!
