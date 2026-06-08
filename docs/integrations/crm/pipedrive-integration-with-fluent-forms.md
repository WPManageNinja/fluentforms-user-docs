# Pipedrive Integration with Fluent Forms

Pipedrive is a deal-driven CRM solution designed to manage the entire sales process effectively. By integrating Pipedrive with Fluent Forms, you can automatically send form submissions to your Pipedrive account, streamlining your lead management process.

This article will guide you through integrating Pipedrive with Fluent Forms on your WordPress Site.

> [!Note]
> **Pipedrive** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable the Pipedrive Integration

First, go to **Integrations** from the Fluent Forms Navbar, search for **Pipedrive** through the search bar, and get the **Pipedrive integration module**.

Now, turn on the **Toggle** to enable the **Pipedrive** module, and click the **Settings Icon** on the right side.

![Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/Pipedrive-integration-01-scaled.webp)

Once you enable Pipedrive, you will be asked for the **Pipedrive API Token** of your **Pipedrive Account**.

> [!Note]
> If you do not have a Pipedrive account, [create one here](https://www.pipedrive.com/).

![Configure Pipedrive](/images/integrations/crm/pipedrive-integration-with-fluent-forms/Configure-pipedrive-02-scaled.webp)

### Get the Pipedrive API Token

To learn how to get the **Api Token** from Pipedrive, follow the steps with screenshots below –

First, log in to your [Pipedrive Account](https://www.pipedrive.com/en/register), go to **Profile** from the top right corner, and select the **Company Settings** sections. 

Now, click **Personal preferences** and then select the **API** sections. Here, you will find the **API Token**. **Copy** the API token for later use. 

![API Token](/images/integrations/crm/pipedrive-integration-with-fluent-forms/API-Token-03-scaled.webp)

### Connect Pipedrive with Fluent Forms

Then, return to the **Pipedrive Settings** page under the **Configure Integration** tab of the **Global Settings** from the **Fluent Forms Navbar**.

Now, paste the **API Token** that you copied before.

Press the **Verify Pipedrive API Token** button to make your **Pipedrive Integration** module functional.

![Paste Pipedrive API Token](/images/integrations/crm/pipedrive-integration-with-fluent-forms/paste-pipedrive-api-token-04-scaled.webp)

Here you can see your **Pipedrive API integration is up and running**. Also you can disconnect to click the **Disconnect Pipedrive** button.

![Disconnect Pipedrive](/images/integrations/crm/pipedrive-integration-with-fluent-forms/Disconnect-pipedrive-05-scaled.webp)

### Integrate Pipedrive into Fluent Forms

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your Pipedrive and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Settings Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/Settings-06-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Pipedrive Integration** feed from the dropdown list. 

![Add Integration Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/add-new-integration-07-1-scaled.webp)

### Configure Pipedrive Integration Feed

**A. Feed Name**: Enter a name for your Pipedrive integration feed.
**B. Services:** Select the **Pipedrive** Services you want to map to. Click the **Dropdown Arrow** to add mapping values. Here, you can choose one of the options below: **Person**, **Leads**, **Organization**, **Deal**, **Activity**, etc. 

Use all the fields under this option to properly link your **Pipedrive Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **Pipedrive fields** using the **Shortcode Arrow**. 

![Add Integration Feed Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/add-new-integration-feed-08-scaled.webp)

**C. Conditional Logic:** If you want to allow **Pipedrive** integration conditionally based on your  submission values, **Enable Conditional Logic** options. To learn more about conditional logic, read the[ article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**D. Status:** Enable this feed option to activate the integration.

Now, click the **Save Feed** button to save the integration feed.

![Add Integration Feed Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/add-new-integration-feed-09-scaled.webp)

After successful Integration, you will see your Pipedrive integration Feed has been added here. You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Enable Or Disable Integration Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/Enable-or-disable-integration-10-scaled.webp)

### Preview of Integrated Pipedrive

Here, you can see a preview of the added Pipedrive contacts through the Form entries that I set up during the integration.

You can see the forms submissions from the **Entries** section of this particular form.

![Preview Entries Pipedrive Integration](/images/integrations/crm/pipedrive-integration-with-fluent-forms/preview-entries-11-scaled.webp)

This way you can easily integrate Pipedrive with Fluent Forms!
