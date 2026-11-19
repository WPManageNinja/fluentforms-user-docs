---
description: "Fluent Forms allows you to integrate with Google Sheets to manage and organize form responses efficiently."
---

# Integrate Google Sheets

**Fluent Forms** connects to **Google Sheets** so you can manage and organize form responses in a spreadsheet. This guide shows you how to connect **Google Sheets** to **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Google Sheets** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Google Sheets Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Google Sheets**, and open the **Google Sheets** integration module.

Turn on the **Toggle** to enable **Google Sheets**, then click **Manage** on the right to open its configuration.

![Enabled Google Sheet Module](/images/integrations/other-apps/integrate-google-sheets/1.-Enabled-Google-Sheet-module-scaled.webp)

## Connect Google Sheets with Fluent Forms

Google Sheets connects in one click. You no longer need to copy and paste an access code. Each site gets its own secure, dedicated connection to your Google account.

### Step 1: Start the Connection

To open the **Google Sheets** settings page, go to **Integrations** in the top bar and click **Manage** next to **Google Sheets**. Until you connect, the page shows the message **Your Google Sheets connection is not valid**.

Click **Connect Google Sheets**.

![Connect Google Sheets Button](/images/integrations/other-apps/integrate-google-sheets/2.-Connect-Google-Sheets.webp)

### Step 2: Confirm and Continue to Google

Fluent Forms opens the **Connect a new integration** page. It lists what this connection does:

- Uses secure OAuth through Google, the official provider.
- Returns access tokens to your WordPress admin only.
- Lets you revoke access anytime from your Google account.

Under **You'll be returned to**, check that the address shown is your own WordPress site. Continue only if it is. Then click **Continue with Google**. To stop, click **Cancel** or **Back to website**.

![Continue with Google](/images/integrations/other-apps/integrate-google-sheets/3.-Continue-with-Google.webp)

### Step 3: Choose Your Google Account

Google asks you to **Choose an account** to continue to Fluent Forms. Select the **Google Account** that owns your **Google Sheet**. If it isn't listed, click **Use another account** and sign in.

![Choose Google Account](/images/integrations/other-apps/integrate-google-sheets/4.-Choose-Google-Account.webp)

### Step 4: Allow Access

Google shows the access Fluent Forms asks for: permission to see, edit, create, and delete your Google Sheets spreadsheets. Fluent Forms needs this to add your form submissions as rows in your sheet.

Click **Continue** to allow access.

![Allow Access Google Sheets](/images/integrations/other-apps/integrate-google-sheets/5.-Allow-Access.webp)

### Step 5: Confirm the Connection

Google sends you back to the **Google Sheets** settings page in Fluent Forms. A green check and the message **Your Google Sheets integration is up and running** confirm the connection.

To remove the connection later, click **Disconnect Google Sheets**.

![Google Sheets Connected](/images/integrations/other-apps/integrate-google-sheets/6.-Google-Sheets-Connected.webp)

### Reconnect an Older Connection

If you connected Google Sheets with an access code before, the settings page shows a notice asking you to reconnect. Older connections use a shared app credential that is being retired for security reasons.

Your existing feeds keep working and no data is at risk. Still, reconnect when you can: click **Connect Google Sheets** and follow the steps above. Reconnecting takes about a minute and does not change your feed settings.

## Integrate Google Sheets with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Google Sheets**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/7.-Open-desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Google Sheet** integration feed from the drawer.

![Add Integration Button Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/8.-Add-new-integration-button-scaled.webp)

The feed settings open with the options below. When you finish the setup, click **Save** to add the feed to your form.

> [!Note]
> For **Google Sheets** to work, enter the **Spreadsheet ID**, **Worksheet Name**, and map **Spreadsheet Fields** in the feed.

![Save Feed Button Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/9.-Save-Feed-button-1-scaled.webp)

### A. Name

Enter a name for your feed. This field is required.

### B. Spreadsheet ID and Worksheet Name

Enter the Spreadsheet ID and Worksheet Name of the Google Sheet you want to connect to the form. Both are required.

The steps below show how to get the **Spreadsheet ID** and **Worksheet Name** from Google.

#### Get the Spreadsheet ID

Open the Google Sheet that receives the entries of your form.

The **Spreadsheet ID** is inside the **Spreadsheet URL**. Copy the marked portion as it is the **ID** of this **Spreadsheet**.

**For example**, if the spreadsheet URL is “https://docs.google.com/spreadsheets/d/1MsMecMYrSi1A4dYiHH_0bMQD-vflitL2gtw3OKgLZ24/edit?gid=0#gid=0”, the **ID** of this spreadsheet is “**1MsMecMYrSi1A4dYiHH_0bMQD-vflitL2gtw3OKgLZ24**”.

#### Get the Worksheet Name

Copy the **Worksheet Name** of the worksheet that receives the entries of your form.

You can name your **Worksheet** as you like. A single spreadsheet can contain multiple worksheets, so select one specific worksheet and copy only its name.

![Copy Spreadsheet ID And Worsheet Name](/images/integrations/other-apps/integrate-google-sheets/10.-Copy-Spreadsheet-ID-and-Worsheet-Name-scaled.webp)

### C. Spreadsheet Fields

This field is also required. It sends the form entries to the worksheet you chose in the Google spreadsheet.

Enter a label for each field and use the **Shortcode** button to map its value.

**For example**, to send only the **Name** and **Email** inputs from the form to the sheet, add these fields and map their values to the labels.

Click the **Plus Icon** to add fields, and the **Minus Icon** to delete a field.

### D. Conditional Logics

Run the Google Sheets integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

### E. Enable This Feed

Check this option to keep the feed enabled so all its actions run.

After you set up everything and click **Save**, the **Google Sheets Integration Feed** appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Google Sheets Integration Feed](/images/integrations/other-apps/integrate-google-sheets/11.-Added-Google-Sheets-Integration-Feed-scaled.webp)

### Preview of Integrated Google Sheets

You can see the form submissions that add rows to Google Sheets in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Tab Fluent Forms](/images/integrations/other-apps/integrate-google-sheets/12.-Entries-tab-scaled.webp)

Open the Google Sheet you connected to see the entries from the form.

![Preview Added Entries Integrate Google Sheets](/images/integrations/other-apps/integrate-google-sheets/13.-Preview-of-added-entries-scaled.webp)
