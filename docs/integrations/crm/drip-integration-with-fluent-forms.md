# Drip Integration with Fluent Forms

Fluent Forms integrates with Drip, a robust e-commerce CRM (ECRM) designed for personalized customer engagement. This integration allows Fluent Forms submissions to automatically add collected customer information to your Drip list.

This article will guide you through integrating **Drip** with **Fluent Forms** on your WordPress Site.

> [!Note]
> **Drip** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable the Drip Integration

First, go to **Integrations** from the Fluent Forms Navbar, search for **Drip** through the search bar, and get the **Drip integration module**.

Now, turn on the **Toggle** to enable the **Drip** module and click the **Settings Icon** on the right.

![Enable Drip Integration](/images/integrations/crm/drip-integration-with-fluent-forms/enable-drip-integration-01-scaled.webp)

Once you enable **Drip**, you will be asked for the **Drip API Token** and **Drip Account ID** of your **Drip Account**.

![Drip Integration](/images/integrations/crm/drip-integration-with-fluent-forms/Drip-integration-02-scaled.webp)

## Get the Drip Credentials

Log in to your [Drip account](https://www.drip.com/), go to **Settings** from the left sidebar, select the **Integrations** sections, and click the **Create Integration** button at the top right corner. 

Now, Click the **Setting** section from the bottom left corner and click the **User settings** options.

![User Settings](/images/integrations/crm/drip-integration-with-fluent-forms/user-settings-03-scaled.webp)

You can get the API token from the User Info page. **Copy** the **API Token** for future use.

![API Token](/images/integrations/crm/drip-integration-with-fluent-forms/api-token-900.webp)

Next, **Back to the Dashboard** and click the **Accounts** options from the **Settings** sections. 

![Account Settings](/images/integrations/crm/drip-integration-with-fluent-forms/account-settings-04-2-scaled.webp)

Now, scroll down and you will find the **Account ID** here. Just **Copy** it for **later** use.

![Account ID X515](/images/integrations/crm/drip-integration-with-fluent-forms/account-ID-05-2-1024x515.webp)

## Connect Drip with Fluent Forms

Then, return to the **Drip Settings** page under the **Configure Integration** tab of the **Global Settings** from the **Fluent Forms Navbar**.

Now, paste the **Drip API Token** and **Drip Account ID** that was copied before.

Press the **Save Settings** button to make your **Drip Integration** module functional.

![Paste API And ID](/images/integrations/crm/drip-integration-with-fluent-forms/paste-api-and-id-06-scaled.webp)

Here, you can see your **Drip API integration is up and running**. To disconnect, click the **Disconnect Drip** button.

![Drip Success](/images/integrations/crm/drip-integration-with-fluent-forms/drip-success-06-1-scaled.webp)

### Integrate Drip into Fluent Forms

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your Drip and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Setting Drip Integration](/images/integrations/crm/drip-integration-with-fluent-forms/form-setting-07-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Drip Integration** feed from the dropdown list. 

![Drip Integration](/images/integrations/crm/drip-integration-with-fluent-forms/drip-inttegration-02.webp)

### Configure Drip Integration Feed

**A. Feed Name**: Enter a name for your Drip integration feed.

**B. Map Fields:** Use all the fields under this option to properly link your **Drip Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **Drip fields** using the **Shortcode Arrow**. 

**C. Other Fields:** Use the other field to add additional custom **Drip fields** with the **Form Fields**.You can easily select the **value** for the **Form Fields** based on the **Drip fields** using the **Shortcode Arrow**. 

Also you can add multiple fields dynamically with click the **Plus Icon**.

**D. Custom Fields:** Allows custom mapping of Drip fields similar to Other Fields options.

**E. Contact Tags:** Enter the custom tag that is separated on the Drip Contact list (e.g., new lead, FluentForms, web source). Commas within a merge tag value will be created as a single tag. These tags can be added manually or dynamically using form field values.

**F. Remove Tags:** Choose the specific tags to remove from contacts during the sync.

**G. Conditional Logic:**  If you want to allow Drip integration conditionally based on your submission values then **Enable Conditional Logic** options. To know more about this conditional logic, read the [article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**H. EU Consent:** If you select the Default option, your GDPR consent is not granted. If you select the Granted option, your GDPR consent is granted.

I. **Status:** Enable this feed option to activate the integration.

Once the setup is done, finally, click the **Save Feed** button.

Now, your Drip will be integrated into this specific form!

![Add Configuration Drip Integration](/images/integrations/crm/drip-integration-with-fluent-forms/add-new-configuration-08-1.webp)

After successful Integration, you will see your Drip integration Feed has been added here. You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Done Integration Fields](/images/integrations/crm/drip-integration-with-fluent-forms/Done-integration-fields-09-scaled.webp)

### Preview of Integrated Drip

Here, you can see a preview of the added Drip contacts through the Form entries that I set up during the integration.

You can see the form submissions from the **Entries** section of this particular form.

![Entries Fluent Forms](/images/integrations/crm/drip-integration-with-fluent-forms/Entries-10-scaled.webp)

Go to the **People** section from the left sidebar and click the **Active** button to view contacts on the selected list you integrated into Fluent Forms.

![Drip Active](/images/integrations/crm/drip-integration-with-fluent-forms/Drip-active-11-scaled.webp)

Here, you can see that the **users who submitted forms** in **Fluent Form** are automatically added to the selected **Drip Contact List**.

![Contact List Drip](/images/integrations/crm/drip-integration-with-fluent-forms/Contact-list-of-drip-12-scaled.webp)

Following this guide, you can easily integrate Drip with Fluent Forms!
