---
description: "Integrating Notion with Fluent Forms allows you to automate data collection and organize your Notion workspace."
---

# Integrate Notion

The [Notion](http://notion.com) integration lets you automate data collection and organize your Notion workspace from **Fluent Forms**. This guide shows you how to connect **Notion** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Notion** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable Notion Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Notion**, and find the **Notion** integration module.

Turn on the **Toggle** to enable the **Notion** module, then click **Manage** on the right side.

![Enable Notion Integrate Notion](/images/integrations/other-apps/integrate-notion/1.-Enable-Notion-scaled.webp)

## Connect Notion with Fluent Forms

Notion connects in one click. You no longer need to copy and paste an access code. Each site gets its own secure, dedicated connection to your Notion workspace.

### Step 1: Start the Connection

To open the **Notion Integration** settings page, go to **Integrations** in the top bar and click **Manage** next to **Notion**. Until you connect, the page shows the message **Your Notion connection is not valid**.

Click **Connect Notion**.

![Connect Notion Button](/images/integrations/other-apps/integrate-notion/2.-Connect-Notion.webp)

### Step 2: Confirm and Continue to Notion

Fluent Forms opens the **Connect a new integration** page. It lists what this connection does:

- Uses secure OAuth through Notion, the official provider.
- Returns access tokens to your WordPress admin only.
- Lets you revoke access anytime from your Notion account.

Under **You'll be returned to**, check that the address shown is your own WordPress site. Continue only if it is. Then click **Continue with Notion**. To stop, click **Cancel** or **Back to website**.

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

To remove the connection later, click **Disconnect Notion**.

![Notion Connected](/images/integrations/other-apps/integrate-notion/8.-Notion-Connected.webp)

### Reconnect an Older Connection

If you connected Notion with an access code before, the settings page shows a notice asking you to reconnect. Older connections use a shared app credential that is being retired for security reasons.

Your existing feeds keep working and no data is at risk. Still, reconnect when you can: click **Connect Notion** and follow the steps above. Reconnecting takes about a minute and does not change your feed settings.

## Integrate Notion with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Notion**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Notion](/images/integrations/other-apps/integrate-notion/9.-Open-desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Notion Integration** feed from the drawer.

![Add Integration Dropdown Integrate Notion](/images/integrations/other-apps/integrate-notion/10.-Add-new-integration-dropdown-scaled.webp)

The feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Notion Databases:** Use the Arrow Icon to select the Notion database that receives your form submission information. You can change it at any time. A database without a title appears as **(Untitled)** in the list.

   After you select the database, all the columns of that Notion database appear as fields (for example, Email, Country, and Name). Link these fields with your form fields. Use the **Shortcode Arrow** to select the value for each field.

3. **Conditional Logics:** Run the Notion integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
4. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Notion is now connected to this form.

![Save Feed Integrate Notion](/images/integrations/other-apps/integrate-notion/11.-Save-Feed-scaled.webp)

The **Notion Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Notion Integration Feed](/images/integrations/other-apps/integrate-notion/12.-Added-Notion-Integration-Feed-scaled.webp)

## Embed the Form on the Frontend

1. Open the form’s **Editor** from the top navbar.
2. **Copy** the **Shortcode** from the top right side and **paste** it into your Page or Post.
3. Click **Preview & Design** in the middle to preview the form.
4. Click **Save** **Form** to save all your changes.

![Save Integrate Notion](/images/integrations/other-apps/integrate-notion/13.-Save-Form-scaled.webp)

### Preview of Integrated Notion

You can see the form submissions that add Notion entries in the **Entries** tab of the form.

![Entries Fluent Forms](/images/integrations/other-apps/integrate-notion/14.-form-Entries-scaled.webp)

In Notion, open the **Database** you configured with **Fluent Forms** from the left sidebar. The **users who submitted forms** in **Fluent Forms** now appear in the selected **Notion Database**.

![Notion Preview Fluent Forms](/images/integrations/other-apps/integrate-notion/15.-Notion-Preview-scaled.webp)

## Connect a Notion Page Directly with Fluent Forms

You can also connect a newly created page to Fluent Forms directly from Notion.

Open the page, click the **Three-Dot Icon** in the top right corner, scroll down to **Connections**, and click **Fluent Forms**. Notion connects your selected page to Fluent Forms.

![Connect Notion Page With](/images/integrations/other-apps/integrate-notion/16.-Connect-New-Notion-Page-with-Fluent-Forms-scaled.webp)
