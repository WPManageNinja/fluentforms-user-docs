---
description: "Integrating Notion with Fluent Forms allows you to automate data collection and organize your Notion workspace."
---

# Integrate Notion

Integrating [Notion](http://notion.com) with **Fluent Forms** allows you to automate data collection and organize your Notion workspace. This article will guide you through integrating **Notion** with **Fluent Forms** on your **WordPress Site**. 

> [!Note]
> **Notion** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enabling Notion Integration

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Notion** through the search bar, and get the **Notion** integration module. 

Now, turn on the **Toggle** to enable the **Notion** module, and click the **Settings Icon** on the right side. 

![Enable Notion Integrate Notion](/images/integrations/other-apps/integrate-notion/1.-Enable-Notion-scaled.webp)

## Connecting Notion with Fluent Forms

Notion connects in one click. You no longer need to copy and paste an access code. Each site gets its own secure, dedicated connection to your Notion workspace.

### Step 1: Start the Connection

The **Notion Integration** settings page opens under **Global Settings** → **Configure Integrations** → **Notion**. Until you connect, it shows the message **Your Notion connection is not valid**.

Click the **Connect Notion** button.

![Connect Notion Button](/images/integrations/other-apps/integrate-notion/2.-Connect-Notion.webp)

### Step 2: Confirm and Continue to Notion

Fluent Forms opens the **Connect a new integration** page. It lists what this connection does:

- Uses secure OAuth through Notion, the official provider.
- Returns access tokens to your WordPress admin only.
- Lets you revoke access anytime from your Notion account.

Under **You'll be returned to**, check that the address shown is your own WordPress site. Only continue if it is. Then click **Continue with Notion**. To stop, click **Cancel** or **Back to website**.

![Continue with Notion](/images/integrations/other-apps/integrate-notion/3.-Continue-with-Notion.webp)

### Step 3: Sign in to Notion

If you aren't signed in to Notion, sign in first. The screenshots below show signing in with a Google account. If you're already signed in, skip to Step 4.

- On **Choose an account**, select the account you use for Notion. If it isn't listed, click **Use another account**.

![Choose Google Account for Notion](/images/integrations/other-apps/integrate-notion/4.-Choose-Google-Account.webp)

- On **Sign in to Notion**, Google shows the details Notion receives: your name, profile picture, and email address. Click **Continue**.

![Sign in to Notion](/images/integrations/other-apps/integrate-notion/5.-Sign-in-to-Notion.webp)

### Step 4: Review the Permissions

Notion shows **Connect with FluentForm Notion Integration**. The integration asks for permission to:

- View pages you select.
- Edit pages you select.
- Create new content within pages you select.
- View workspace users and their emails.

To connect a different workspace, use the workspace dropdown in the top right corner. Then click **Select pages**.

![Select Pages Integrate Notion](/images/integrations/other-apps/integrate-notion/6.-Select-Pages.webp)

### Step 5: Allow Access to Your Pages

Notion lists your pages under **Select pages**. Use **Search pages** to find a page quickly. Check the box for each page that holds the database you want to send form submissions to. Fluent Forms can only reach the pages you check.

Click **Allow access**.

![Allow Access Fluent Forms](/images/integrations/other-apps/integrate-notion/7.-Allow-Access.webp)

### Step 6: Confirm the Connection

Notion sends you back to the **Notion Integration** settings page in Fluent Forms. A green check and the message **Your Notion integration is up and running** confirm the connection.

To remove the connection later, click the **Disconnect Notion** button.

![Notion Connected](/images/integrations/other-apps/integrate-notion/8.-Notion-Connected.webp)

### Reconnecting an Older Connection

If you connected Notion with an access code before, the settings page shows a notice asking you to reconnect. Older connections use a shared app credential that is being retired for security reasons.

Your existing feeds keep working and no data is at risk. Still, reconnect when you can: click **Connect Notion** and follow the steps above. Reconnecting takes about a minute and does not change your feed settings.

## Integrating Notion with Forms

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **Notion,** and click the **Settings** button. 

> [!Note]
> If you do not have an existing form, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Notion](/images/integrations/other-apps/integrate-notion/9.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Notion Integration** feed from the dropdown list. 

![Add Integration Dropdown Integrate Notion](/images/integrations/other-apps/integrate-notion/10.-Add-new-integration-dropdown-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the Notion.  

1. **Name:** Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

2. **Notion Database:** Using the Arrow Icon, you can select the Notion Database where you want to add your form submission information. You can also change this anytime if needed. A database without a title appears as **(Untitled)** in the list.

Once you select the database, all the columns from your chosen Notion Database will appear here as fields (e.g., you can see the Email, Country, and Name fields). 

Now, use all the fields under this option to properly link your Notion Databases with the Form Fields. You can easily select the value for the form fields based on the Notion fields using the **Shortcode Arrow**.

3. **Conditional Logics:** This option allows Notion integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read the [Conditional Logic guide](/set-up-forms-with-conditional-logic).

4. **Enable This Feed:** Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Notion will be integrated into this specific form!

![Save Feed Integrate Notion](/images/integrations/other-apps/integrate-notion/11.-Save-Feed-scaled.webp)

After successful Integration, you will now see that your **Notion Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![Added Notion Integration Feed](/images/integrations/other-apps/integrate-notion/12.-Added-Notion-Integration-Feed-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, go to the form’s **Editor** from the top navbar to embed and display the form on a specific Page/Post on your site. 

Now, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design** button in the middle.

Once you are done, click the **Save** **Form** button to save all your changes. 

![Save Integrate Notion](/images/integrations/other-apps/integrate-notion/13.-Save-Form-scaled.webp)

### Preview of Integrated Notion

Here, you can see the preview of the added Notion Contacts through the Form Entries based on the Integration.

For example, you can see four new **Six Submissions** under the **Entries** tab on this particular form.

![Entries Fluent Forms](/images/integrations/other-apps/integrate-notion/14.-form-Entries-scaled.webp)

Now, go to Notion and open the **Database** you configured with **Fluent Forms** from the left sidebar.

Here, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Notion Database**. 

![Notion Preview Fluent Forms](/images/integrations/other-apps/integrate-notion/15.-Notion-Preview-scaled.webp)

## Connecting Notion Page directly with Fluent Forms

You also have the option to connect any newly created page to Fluent Forms directly from Notion.

To do this, simply open the desired page, click the **Three-Dot Icon** in the top right corner, scroll down to **Connections**, and press the **Fluent Forms** option. Your selected page will be connected to Fluent Forms!

![Connect Notion Page With](/images/integrations/other-apps/integrate-notion/16.-Connect-New-Notion-Page-with-Fluent-Forms-scaled.webp)

This way, you can easily integrate Notion with Fluent Forms!
