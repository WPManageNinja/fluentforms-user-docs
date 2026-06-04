# AmoCRM Integration with Fluent Forms

AmoCRM is an email marketing tool designed to help you manage customer leads, tasks, and sales teams. By integrating AmoCRM with Fluent Forms, you can collect leads and other essential information from user form submissions, streamlining your marketing strategies and meeting your business needs.

This article will guide you through integrating **amoCRM** with **Fluent Forms** on your **WordPress Site**.  

> [!Note]
> **amoCRM** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable the amoCRM Integration

To learn how to enable amoCRM integration, follow the step by step process below – 

First, go to **Integrations** from the Fluent Forms Navbar, search for **amoCRM** through the search bar, and get the **amoCRM integration module**.

Now, **toggle** to enable the **amoCRM** module and click the **Settings Icon** button on the right.

![Enable amoCRM Integrationj](/images/integrations/crm/amocrm-integration-with-fluent-forms/Enable-amoCRM-integrationj-01-scaled.webp)

Once you enable amoCRM, you will be asked for the **amoCRM Integration ID** and **amoCRM Secret Key** of your **amoCRM Account**.

Copy the **redirect URL** from the top for later use, as shown in the screenshot.

![Configure amoCRM](/images/integrations/crm/amocrm-integration-with-fluent-forms/configure-amocrm-02-scaled.webp)

### Get the amoCRM Integration Credentials

To learn how to get the amoCRM Integration ID and amoCRM Secret Key from amoCRM, follow the steps with screenshots below –

First, log in to your[ amoCRM Account](https://www.kommo.com/), go to **Settings** from the left sidebar, select the **Integrations** sections, and click the **Create Integration** button at the top right corner.

![Create Integration](/images/integrations/crm/amocrm-integration-with-fluent-forms/create-Integration-03-scaled.webp)

A popup will appear here. Now paste the **redirect URL** that **copied** you before and check the **Allow access: All.**

After that, set the **Integration Name** and enter a short **description**. Then, click the **Save** button.

![Set Redirect URL](/images/integrations/crm/amocrm-integration-with-fluent-forms/set-redirect-url-04.webp)

Here appears another popup. Here you will find the **Secret Key** and **Integration ID**.

Now **Copy** the Secret Key & Integration ID to use them in the next step.

![Copy Integration ID And Secret Key](/images/integrations/crm/amocrm-integration-with-fluent-forms/copy-integration-id-and-secret-key-05.webp)

### Connect amoCRM with Fluent Forms

Then, return to the **amoCRM Settings** page under the **Global Settings > Configure Integration** tab from the **Fluent Forms** navbar.

Now, paste the **Integration ID** and **Secret Key** that was copied before**.**

Press the **Save Settings** button to make your **amoCRM Integration** module functional.

![Credential Save](/images/integrations/crm/amocrm-integration-with-fluent-forms/credential-save-06-scaled.webp)

Now, you will automatically be redirected to the **AmoCRM Account** page. Select the account, and click on the **Allow** button. 

![amoCRM Account Select](/images/integrations/crm/amocrm-integration-with-fluent-forms/amocrm-account-select-06.webp)

Here, you can see your **API integration is up and running**.  To disconnect, click the **Disconnect Amocrm** button.

![Disconnect amoCRM](/images/integrations/crm/amocrm-integration-with-fluent-forms/disconnect-amocrm-7-scaled.webp)

### Integrate amoCRM into Forms

To learn how to integrate amoCRM into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your amoCRM and click the **Settings** button. 

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms) to create a new one.

![Setting amoCRM Fluent Forms](/images/integrations/crm/amocrm-integration-with-fluent-forms/Form-Setting-amoCRM-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **amoCRM Integration** feed from the dropdown list. 

![amoCRM Integration](/images/integrations/crm/amocrm-integration-with-fluent-forms/amocrm-integration-08-scaled.webp)

### Configure amoCRM Integration Feed

**A. Feed Name**: Enter a name for your amoCRM integration feed.

**B. Amocrm Services:** Select the Amocrm Services you want to map. Here, I will select amoCRM service **Contact** options. You can choose **Lead**, **Company**, **List**, **Task**, **Products** etc. For example, select contact amoCRM services here. Now, mapping the field with amoCRM.  

Click the **Dropdown Arrow** to add mapping values.

**C. Conditional Logic:** If you want to allow amoCRM integration conditionally based on your submission values, then **Enable Conditional Logic** options. To know more about this conditional logic read the [article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**D. Status:** Enable this feed option to activate the integration.

Now, click the **Save Feed** button to save the integration feed.

![Add amoCRM Integration Feed](/images/integrations/crm/amocrm-integration-with-fluent-forms/Add-New-Amocrm-Integration-Feed-09-scaled.webp)

After successful Integration, you will now see that your amoCRM Integration Feed has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the Trash Icon. Also, you can disable or enable this feed anytime by turning off the Toggle if needed.

### Preview of Integrated amoCRM

Here, you can see the preview of the added contacts of amoCRM through the Form entries that I set up during the integration.

You can see four form submissions from the **Entries** section of this particular form.

![amoCRM Preview](/images/integrations/crm/amocrm-integration-with-fluent-forms/amocrm-preview-10-scaled.webp)

Now, go to the **amoCRM Contacts** section from the left sidebar, open the **Lists** tab, and see the integrated contact list in Fluent Forms.

![Contact List amoCRM](/images/integrations/crm/amocrm-integration-with-fluent-forms/contact-list-amocrm-11-scaled.webp)

This way, you can easily integrate amoCRM with Fluent Forms!
