# Insightly Integration with Fluent Forms

Fluent Forms integrates with Insightly, an email marketing tool that helps you collect customer leads, tasks, and sales teams marketing automation tool that helps businesses collect personalized customer information and automatically add it to your Insightly list through Fluent Forms Submissions.

This article will guide you through integrating **Insightly** with **Fluent Forms** on your WordPress Site.

> Remember, Insightly is a Premium Feature of the Fluent Forms Plugin. So, to integrate it, you need the Fluent Forms Pro plugin.

## Enable the Insightly Integration

To learn how to enable Insightly integration, follow the steps with the screenshots below – 

First, navigate to **Integrations** from the Fluent Forms Navbar, search for **Insightly** using the search bar, and install the **Insightly integration module**.

Now, turn on the **Toggle** to enable the **Insightly** module and click the **Settings Icon** on the right.

![](/images/crm/insightly-integration-with-fluent-forms/Enable-the-integration-01.webp)

Once you enable **Insightly**, you will be asked for the **Insightly API URL** and **Insightly API Key** of your **Insightly Account**.

![](/images/crm/insightly-integration-with-fluent-forms/Configuratrioin-insighjtly-02.webp)

### Get the Insightly API URL and Insightly API Key

To learn how to get the **API URL** and **API Key** from Insightly, follow the steps with screenshots below –

First, log in to your[ ](https://www.drip.com/)[Insightly Account](https://crm.na1.insightly.com/users/usersettings), then go to **User** **Settings** from the profile icon in the top right corner.

Now, scroll down, and you will get the **API URL** and **API Key** here. If you want, you can also generate a new API Key by clicking on the **Generate new API Key** button.

![](/images/crm/insightly-integration-with-fluent-forms/User-Settings-03-scaled.webp)

Now, copy the **API Key** & **API URL** **( https://api.na1.insightly.com/ )** like this to use in the next step.

![](/images/crm/insightly-integration-with-fluent-forms/Copy-API-keyAPI-URl-04.webp)

### Connect Insightly with Fluent Forms

Then, return to the **Insightly Settings** page under the **Global Settings Configure Integration tab** from the **Fluent Forms Navbar**.

Now, paste the Integration **API URL** and **API Key** that were copied before**.**

Press the **Save Settings** button to activate your **Insightly Integration** module.

![](/images/crm/insightly-integration-with-fluent-forms/Paste-API-URL-API-Key-05.webp)

Here, you can see your **Insightly API integration is up and running**. To disconnect, click the **Disconnect Insightly** button.

![](/images/crm/insightly-integration-with-fluent-forms/Disconnect-Insightly-06.webp)

### Integrate Insightly into Fluent Forms

To learn how to integrate Insightly into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your Insightly, and click the **Settings** button. 

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/crm/insightly-integration-with-fluent-forms/Edit-Form-07-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Insightly Integration** feed from the dropdown list. 

![](/images/crm/insightly-integration-with-fluent-forms/Add-new-Integration-08-scaled.webp)

### Configure Insightly Integration Feed

**A. Feed Name**: Enter a name for your Insightly integration feed.
**B. Insightly Services:** Select the **Insightly** Services you want to map to. Click the **Dropdown Arrow** to add mapping values. Here, you can choose one of the options below: **Contact**, **Opportunity**, **Lead, Organization**, **Project**, **Task**, etc. 

![](/images/crm/insightly-integration-with-fluent-forms/Add-New-Integration-Feed-09-scaled.webp)

Use all the fields under this option to properly link your **Insightly Fields** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **Insightly fields** using the **Shortcode Arrow**. 

**C. Conditional Logic:** If you want to allow **Insightly** integration conditionally based on your submission values, **Enable Conditional Logic** options. To learn more about conditional logic, read the [article](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).

**D. Status:** Enable this feed option to activate the integration.

Now, click the **Save Feed** button to save the integration feed.

![](/images/crm/insightly-integration-with-fluent-forms/Add-New-Insightly-Integration-Feed-10-scaled.webp)

After successful Integration, you will see your Insightly integration Feed has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 

Additionally, you can disable or enable this feed at any time by turning off the **Toggle** if needed.

![](/images/crm/insightly-integration-with-fluent-forms/All-Form-Integration-11-scaled.webp)

### Preview of Integrated Insightly

Here, you can see a preview of the added Insightly contacts through the Form entries that I set up during the integration.

You can see the form submissions from the **Entries** section of this particular form.

![](/images/crm/insightly-integration-with-fluent-forms/Entries-12-scaled.webp)

Go to the **Insightly Contacts** section from the left sidebar to see the integrated contact list in Fluent Forms.

![](/images/crm/insightly-integration-with-fluent-forms/Insightly-Contact-12-scaled.webp)

This way, you can easily integrate Insightly with Fluent Forms!
