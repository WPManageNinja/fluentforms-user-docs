# How to Integrate Constant Contact with Fluent Forms

In **Fluent Forms**, integrating **Constant Contact**, an integrated email marketing, marketing automation, and small business CRM, allows you to grow your Constant Contact list through the users of Fluent Forms.  This article will guide you through integrating **Constant Contact** with **Fluent Forms** on your **WordPress Site**.

> [!Note]
> **Constant Contact** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable Constant Contact Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Constant Contact V3** through the search bar, and get the **Constant Contact V3** integration module.

Now, turn on the **Toggle** to enable **Constant Contact V3**. Then, you will see the Constant Contact’s **Settings Icon** on the right side, click on it. 

![Enable Constant Contact V3 Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/1.-Enable-Constant-Contact-V3-scaled.webp)

Once you enable **Constant Contact V3**, you will be asked for the **Constant Contact Client ID** and **the Constant Contact Client Secret** of your **Constant Contact Account**.

> [!Tip]
> Follow the **Instructions Guide** at the top of **Constant Contact V3 API** settings to get your credentials.

![Constant Contact V3 API Settings Page](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/2.-Constant-Contact-V3-API-Settings-page-scaled.webp)

### Get the Constant Contact Client ID and Client Secret

To learn how to get the  **Constant Contact Client ID** and **Constant Contact Client Secret** from **Constant Contact**, follow the steps with screenshots below – 

First, click this [Link](https://app.constantcontact.com/pages/dma/portal/), log into your **Constant Contact Account**, go to **My Applications** from the top navbar, and click the **New Application** button.

> [!Note]
> If you do not have a Constant Contact account, [create one here](https://www.constantcontact.com/).

![Application Button Fluent Forms](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/3.-New-Application-Button-scaled.webp)

Now, give your **New** **Application** a **Name**, choose “**Authentication Code Flow and Implicit Flow”** and **Rotating Refresh Token** options from the **Application OAuth2 Settings**, and press the **Create** button. 

![Create Button Fluent Forms](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/4.-Create-button-scaled.webp)

Once you created the new app, click the **Edit** button in the right corner. 

![Edit Button Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/5.-Edit-button-scaled.webp)

Now go to the **Details** tab and copy the **Client ID** from the **API Key (Client ID)** field by clicking the **Copy Icon**. 

Then, click the **Generate** **Client Secret** button next to the Client ID to generate the Client Secret.

![Copy Client ID Generate Client Secret](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/6.-Copy-Client-ID-Generate-Client-Secret-scaled.webp)

Now, copy the **Client Secret** by clicking the **Copy Icon** on the right side, and press the Close button.

> [!Warning]
> **Client Secret** is shown only once. Copy and store it securely before leaving the page.

![Copy Client Secret](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/7.-Copy-Client-Secret.webp)

Now it is time to enter the **Redirect URL** provided in **Fluent Forms** by clicking the **Pencil Icon** and opening the editor page of the **Redirect URL** field.

![Edit Icon Redirect URL Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/8.-Edit-Icon-of-Redirect-URL.webp)

#### Collecting the Redirect URL from Fluent Forms

First, go to the **Constant Contact V3 API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Then copy the **Redirect URL** provided under the **Constant Contact V3 API** instruction guide at the top. 

![Copy Redirect URL](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/9.-Copy-Redirect-URL-scaled.webp)

Finally, **paste** the copied **Redirect URL** from the **Constant Contact V3 API Settings** page in **Fluent Forms**, and click the **Confirm** button. 

![Paste Redirect URL](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/10.-Paste-Redirect-URL.webp)

After copying the Client ID & Client Secret, setting up the Redirect URL, click the **Save** button to make the integration functional.

![Save Button Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/11.-Save-button-scaled.webp)

## Connect Constant Contact with Fluent Forms

Now, return to the **Constant Contact V3 API Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Then, paste the **Client ID** and **Client Secret** you copied from **Constant Contact** into the **Constant Contact** **Client ID** and the **Constant Contact Client Secret** fields respectively.

Finally, press the **Verify Constant Contact** button to save all your changes.

![Paste Client ID And Client Secret](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/12.-Paste-Client-ID-and-Client-Secret-scaled.webp)

Once you click the **Verify Constant Contact**, it will redirect you to the **Constant Contact** page again asking for **permission** to connect it with **Fluent Forms**. Now, click the **Allow Access** button to make the integration functional. 

![Allow Access Fluent Forms](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/13.-Allow-access.webp)

Now, you can see, your **Constant Contact** is connected to your **Fluent Forms** successfully.

You can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect Constant Contact** button.  

![Verfy Or Disconnect Button](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/14.-Verfy-or-Disconnect-button-scaled.webp)

## Integrate Constant Contact in Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Constant Contact,** and click the **Settings** button. 

<<<<<<< HEAD
=======
> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/docs/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

>>>>>>> tajulauthlab
![Open Settings Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/15.-Open-Desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Constant Contact V3 Integration** feed from the dropdown list. 

![Add Integration Feed Dropdown Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/16.-Add-new-integration-feed-dropdown-scaled.webp)

Now, a page will appear with various settings options for configuring the Constant Contact. 

1. **Name:** From here, you can change the name anytime if needed.

2. **Constant Contact List:** From here, you need to select your desired Contact List of Constant Contact to which you want to send the form submission data from Fluent Forms. Once you select the list the Map Fields option will appear. You can also change the contact list anytime if needed.

3. **Constant Contact Tag:** From here, you need to select your desired single or multiple Tag of Constant Contact to which you want to send the form submission data from Fluent Forms.  You can also change the tag/s anytime if needed.

4. **Map Fileds:** Use all the fields under this option to properly link your Constant Contact Fields with the Form Fields. Also, you can easily select the Value for the Form Fields according to the Constant Contact Fields by using the Shortcode button.

5. **Custom Fields:** Using this option, you can also link the Fluent Forms fields with their respective Constant Contact Custom fields. Click the **Plus/Minus** icon in the right corner to add or delete custom fields as needed.

> [!Note]
> **Custom date fields** accept only the **MM/DD/YYYY** format.

<<<<<<< HEAD
1. Conditional Logics: This option allows Constant Contact integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read [this documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms).
=======
6. **Conditional Logics:** This option allows Constant Contact integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.
>>>>>>> tajulauthlab

7. **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Save Feed** button. And, your Constant Contact will be integrated into this specific form!

![Save Feed Button Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/17.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **Constant Contact V3 Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Constant Contact V3 Integration Feed](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/18.-Added-Constant-Contact-V3-Integration-Feed-scaled.webp)

## Preview of Integrated Constant Contact

Here, you can see the preview of added **Contacts** of **Constant Contact** through the Form Entries based on the Integration.

**For example**, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Fluent Forms](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/19.-Form-Entries-scaled.webp)

Now, go to your [Constant Contact](http://constantcontact.com) account, open the **Contacts** dropdown from the left sidebar, click the **Lists** tab, and press the desired **List** you integrated into **Fluent Forms**.

![Constant Contact List](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/20.-Desired-Constant-Contact-List-scaled.webp)

You can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Contact List**. 

![Preview Contact List Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/21.-Preview-of-Contact-List.webp)

Similarly, go to the desired **Tag/s** you integrated into **Fluent Forms**.

![Tag List Fluent Forms](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/22.-Desired-Tag-list-scaled.webp)

You can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Tag/s**. 

![Preview Tag List Integrate Constant Contact](/images/integrations/email-marketing/how-to-integrate-constant-contact-with-fluent-forms/23.-Preview-of-Tag-list.webp)

This way you can easily integrate Constant Contact with Fluent Forms!
