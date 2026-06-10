# Integrate Google Sheets

**Fluent Forms** allows you to integrate with **Google Sheets** to manage and organize form responses efficiently. This article will guide you through integrating **Google Sheets** in **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **Google Sheets** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enabling Google Sheets Integration

Go to **Integrations** from the **Fluent Forms Navbar**, search for **Google Sheets** in the search bar, and open the **Google Sheets** integration module.

Turn on the **Toggle** to enable **Google Sheets**, then click the **Settings Icon** on the right to open its configuration.

![Enabled Google Sheet Module](/images/integrations/other-apps/integrate-google-sheets/1.-Enabled-Google-Sheet-module-scaled.webp)

Once you enable Google Sheets, you will be asked for the **Access Code** from your Google account and the **Verify Code**.

> [!Tip]
> Click **Get Google Sheet Access Code** to authorize Fluent Forms. Follow the steps below to finish setup.

![Access Code Fluent Forms](/images/integrations/other-apps/integrate-google-sheets/2.-Access-Code--scaled.webp)

### Getting the Access Code from Google

To get the Access Code from Google, [click here](https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=157785030834-7bkpc1olhgp9kd683c78dclei5elhoku.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffluentforms.com%2Fgapi%2F&response_type=code&scope=https%3A%2F%2Fspreadsheets.google.com%2Ffeeds%2F), and select the desired **Google Account** where your desired **Google Sheet** exists.

![Gmail Fluent Forms](/images/integrations/other-apps/integrate-google-sheets/3.-Desired-gmail.webp)

Once you continue with the desired Google Account, it will take you to the **Fluent Forms Server** and generate an **Access Code**. Simply, copy the access code by clicking on the **Copy** button.

![Copy Access Code](/images/integrations/other-apps/integrate-google-sheets/4.-Copy-access-code.webp)

## Connecting Google Sheets with Fluent Forms

Return to the **Google Sheets** settings page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Finally, paste the **access code** you copied from **Google** into the **Access Code** field, press the **Verify Code** button, and your **Google Sheet Integration** module will be enabled. 

![Paste Code Fluent Forms](/images/integrations/other-apps/integrate-google-sheets/5.-Paste-code-scaled.webp)

Now, you can see that the Google Sheet has been successfully connected to your **Fluent Forms**. You can disconnect it anytime by clicking the **Disconnect Google Sheet** button. 

![Disconnect Goggle Sheet](/images/integrations/other-apps/integrate-google-sheets/6.-Disconnect-Goggle-Sheet-scaled.webp)

## Integrating Google Sheets with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Google Sheets,** and click the **Settings** button.

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/7.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Google Sheet** integration feed from the dropdown list. 

![Add Integration Button Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/8.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Google Sheet.

Once you set up the page, click the **Save Feed** button, and the feed will be integrated into your form.

> [!Note]
> For **Google Sheets** to work, enter the **Spreadsheet ID**, **Worksheet Name**, and map **Spreadsheet Fields** in the feed.

![Save Feed Button Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/9.-Save-Feed-button-1-scaled.webp)

### A. Name

Here, you can set a name for your feed according to your preference. This field is required to be filled in.

### B. Spreadsheet ID and Worksheet Name

Here, you need to provide the Spreadsheet ID and Worksheet Name of your Google Sheets Account that you want to integrate with the form, as it's required to be filled in.

To learn how to get the **Spreadsheet ID** and **Worksheet Name** from Google, follow the steps in the screenshot below – 

#### Getting Spreadsheet ID

First, open your Google Sheet where you want to receive the entries of your form.

Now you will get the **Spreadsheet ID** inside the **Spreadsheet URL**. Copy the marked portion as it is the **ID** of this particular **Spreadsheet**.

**For example**, if the spreadsheet URL is “https://docs.google.com/spreadsheets/d/19BXmmGQUB8v_jBNJZydbos-sFIzysSFTgeKmDsh-XLc/edit?gid=0#gid=0”, the **ID** of this spreadsheet will be “**19BXmmGQUB8v_jBNJZydbos-sFIzysSFTgeKmDsh-XLc/edit**”.

#### Worksheet Name

Now, copy the specific **Worksheet Name** where you want to receive the entries of your form. 

Feel free to name your **Worksheet** as you like. A single spreadsheet can contain multiple Worksheets, but you should select a specific one and copy only that worksheet’s name to receive the form entries.

![Copy Spreadsheet ID And Worsheet Name](/images/integrations/other-apps/integrate-google-sheets/10.-Copy-Spreadsheet-ID-and-Worsheet-Name-scaled.webp)

### C. Spreadsheet Fields

This field is also required to be filled in to send the form entries to your selected worksheet under the chosen Google spreadsheet. 

You can name the field label as you want and map the value according to the field label by using the **Shortcode** button. 

**For example**, I just wanted to send the **Name** and **Email** inputs from the form to the sheets. So, I added these fields and values according to the field label.

You can add as many fields as you need by clicking the **Plus Icon**, and delete any field by clicking the **Minus Icon**.

### D. Conditional Logics

This option allows Google Sheets integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic). 

### E. Enable This Feed

Check this option to ensure this integration feed remains enabled and all its actions function properly. 

Once you set up everything and click the **Save Feed** button, you can see that your **Google Sheets Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Google Sheets Integration Feed](/images/integrations/other-apps/integrate-google-sheets/11.-Added-Google-Sheets-Integration-Feed-scaled.webp)

### Preview of Integrated Google Sheets

Here, you can see the preview of the added Users in Google Sheets through the Form Entries based on the Integration.

For example, you can see four new **Form Submissions** under the **Entries** tab on this particular form.

![Entries Tab Fluent Forms](/images/integrations/other-apps/integrate-google-sheets/12.-Entries-tab-scaled.webp)

Now, go to the **Google Sheets Channel** you integrated and you can see the preview of the notification messages of Google Sheets through the Form entries.

![Preview Added Entries Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/13.-Preview-of-added-entries-scaled.webp)

This way, you can easily integrate Google Sheets with Fluent Forms!
