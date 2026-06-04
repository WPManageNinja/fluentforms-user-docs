# HubSpot Integration with Fluent Forms

Fluent Form integrates with Hubspot, a popular marketing automation tool that helps you collect customer information and automatically adds it to your Hubspot list through Fluent Forms submission.

This article will guide you through integrating Hubspot with Fluent Forms on your WordPress Site.

> Remember, Hubspot is a Premium Feature of the Fluent Forms Plugin. So, to integrate this, you need to [upgrade to Fluent Forms Pro](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Hubspot Integration

To learn how to enable Hubspot integration, follow the steps with the screenshots below – 

First, go to **Integrations** from the Fluent Forms Navbar, search for **Hubspot** through the search bar, and get the **Hubspot** integration module.

Turn on the Hubspot **Enabled** button and now you will see the Hubspot’s **Settings Icon** on the right side, click on it.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/enable-hubspot-integration-01-scaled.webp)

Once you enable Hubspot, you will be asked for the **Hubspot Access token**.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-access-token-02-scaled.webp)

## Get the Hubspot Access Token

To learn how to get the Hubspot Access Token from Hubspot, follow the steps below – 

First, log in to your [HubSpot Account](https://www.hubspot.com/), click on the **Settings Icon** in the upper right corner, then click **Legacy Apps** from the left sidebar under the **Integration** sections.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/leggacy-app-01-scaled.webp)

Next, click on the **Create** button.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/Create-App-02-scaled.webp)

Here, a new pop-up will appear. Now, select the **Private** option to create an account.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/select-private-03.webp)

After selecting Private, you will be taken to a page with the options **Basic info** and **Scopes**.

#### Basic Info

In the basic info, you can enter any **Name** you wish in the Basic info. The **Name** will appear in your private apps. Here I entered **Fluent Forms**.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/401-scaled.webp)

#### Scopes

Now, navigate to the **Scopes** tab and click the **Add new scope** button to add a CRM contact.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/unnamed.png)

A pop-up will appear. Select the **crm.objects.contacts.read** and **crm.objects.contacts.write** checkboxes. Click the **Update** button to save it.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/2.png)

Now, click the Create app button in the top right corner.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/3.png)

A pop-up will also appear. Now, click the **Continue creating** button.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/4.png)

A new window will appear. Select **Auth** and copy the **Access Token**, as you’ll need it in the next step.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/Copy-access-token-04-scaled.webp)

### Connect Hubspot with Fluent Forms

Then, return to the **Hubspot Settings** page under the **Configure Integration** tab of the **Global Settings** from the **Fluent Forms Navbar**.

Now, paste the **HubSpot Access Token** here and click on the **Save Settings** button.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-api-access-token-10-scaled.webp)

Here you will see a success notice that shows the Hubspot Access Token has been verified successfully.

You can also **Disconnect** Hubspot API here by clicking the **Disconnect Hubspot** button.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/dissconnected-hubspot-11-scaled.webp)

### Configure the Form with Hubspot

After setting up the Access Token, go to **All Forms** and select the form you want to integrate with the HubSpot account or create a new One.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/Forms-Fluent-settings-y-scaled.webp)

Now, go to the particular form’s settings for the entries you want listed in **HubSpot**. Click on **Add New Integration** and select **HubSpot Integration** from the dropdown options.

> You will need static HubSpot lists to sync your fluent forms submissions. A HubSpot active list will not work with Fluent Forms.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/41.webp)

### Configure Hubspot Integration Feed

**A. Name:** Enter a unique feed name.

**B. Hubspot list:** Dropdown to select the HubSpot mailing list where the data from the form will be sent.

**C. Map Fields:** Use all the fields under this option to properly link your **Hubspot Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **Hubspot fields** using the **Shortcode Arrow**. 

**D. Other Fields:** Use the other field to add additional custom **Hubspot fields** to the **Form Fields**. Using the shortcode arrow, you can easily select the **value** for the **Form Fields** based on the **Hubspot fields**. 

Also, you can add multiple field values by clicking the **Plus Icon**.

**E. Conditional Logic:** If you want to allow Hubspot integration conditionally based on your submission values then **Enable Conditional Logic** options. To know more, read [Set up Forms with Conditional Logic in Fluent Forms](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**F. Update:** You can **Enable Contact Update** options. It helps to update existing HubSpot contacts with new data from the form.

**G. Status:** **Enable This Feed** option to activate the integration.

Once the setup is complete, click the **Save Feed** button.

Your Hubspot will be integrated into this specific form!

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-feed.webp)

After successful Integration, you will see your Hubspot integration Feed has been added here. 

Now you can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**.  Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/14-1-scaled.webp)

### Preview of Integrated Drip

Here, you can see a preview of the added Hubspot contacts through the Form entries that I set up during the integration.

You can see the form submissions from the **Entries** section of this particular form. Learn more about [managing entries in Fluent Forms](/docs/managing-entries-in-fluent-forms).

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/15-scaled.webp)

Go to the Hubspot accounts **CRM** section from the left sidebar and click the **Contacts** button to view contacts on the selected list you integrated into Fluent Forms.

![](/images/integrations/crm/hubspot-integration-with-fluent-forms/16-1-scaled.webp)

Following these simple steps, you can easily integrate Hubspot with Fluent Forms.
