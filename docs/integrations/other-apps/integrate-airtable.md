---
description: "Fluent Forms integrates with Airtable, a cloud-based platform for creating and sharing relational databases to help organize and collaborate on various…"
---

# Integrate Airtable

[Airtable](http://airtable.com) is a cloud-based platform that combines spreadsheets with a database to organize and share information, such as employee directories and product inventories. This guide shows you how to connect **Airtable** with **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Airtable** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

> [!Note]
> The Integrations page lists two Airtable cards: **Airtable** and **Airtable Legacy**. This guide covers **Airtable**.

## Enable Airtable Integration

Go to **Integrations** in the **Fluent Forms Navbar**, search for **Airtable**, and find the **Airtable** integration module.

Turn on the **Toggle** to enable the **Airtable** module, then click **Manage** on the right side.

![Enabled Airtable Module](/images/integrations/other-apps/integrate-airtable/1.-Enabled-Airtable-module-scaled.webp)

Once you enable Airtable, Fluent Forms asks for the **Airtable Access Token** of your **Airtable Account**.

> [!Tip]
> Follow the authorization steps at the top of the **Airtable** settings page to complete the integration.

![Airtable Settings Page](/images/integrations/other-apps/integrate-airtable/2.-Airtable-Settings-page-scaled.webp)

### Get the Airtable Access Token

1. Log in to your [Airtable Account](https://airtable.com/login).
2. Open the **Profile** **Menu** in the top right corner and click **Builder Hub**.

![Profile Builder Hub Option](/images/integrations/other-apps/integrate-airtable/3.-Profile-Builder-Hub-option-scaled.webp)

3. Open **Personal Access tokens** under the **Developers** tab and click **+Create new token**.

![Create Token](/images/integrations/other-apps/integrate-airtable/4.-Create-New-Token-scaled-2.webp)

4. Enter a **Name** for your token.
5. Click **+ Add a scope** and add these **Scopes**:
   - **Data.records:read**
   - **Data.records:write**
   - **schema.bases:read**
6. Under **Access**, click **+ Add a base** and select the workspace you want to add.
7. Click **Create token**.

![Name Scope Base Create Token Button](/images/integrations/other-apps/integrate-airtable/5.-Name-scope-base-Create-Token-button.webp)

8. Copy the access token from the pop-up.

![Copy Token Fluent Forms](/images/integrations/other-apps/integrate-airtable/6.-Copy-Token.webp)

## Connect Airtable with Fluent Forms

1. Return to the **Airtable Settings** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **Token** you copied from **Airtable** into the **Airtable Access Token** field.
3. Click **Save** to activate the **Airtable Integration** module.

![Paste Access Token](/images/integrations/other-apps/integrate-airtable/7.-Paste-Access-Token-scaled.webp)

Fluent Forms now shows that your Airtable is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect Airtable** to disconnect it.

![Verify Or Disconnect Button](/images/integrations/other-apps/integrate-airtable/8.-Verify-or-Disconnect-button-scaled-3.webp)

## Integrate Airtable with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **Airtable**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate Airtable](/images/integrations/other-apps/integrate-airtable/9.-Open-desired-Form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **Airtable Integration** feed from the drawer.

![Add Integration Button Integrate Airtable](/images/integrations/other-apps/integrate-airtable/10.-Add-New-Integration-button-scaled-2.webp)

Enter a **Feed** **Name** for your integration feed. This field is required. Then select the **Base** and **Table** under **Airtable Configuration** that receive the submitted form data.

![Select Table Integrate Airtable](/images/integrations/other-apps/integrate-airtable/11.-Select-Table-scaled.webp)

After you select the table, the feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Airtable Configuration:** Use the Arrow Icon to select the **Base** and **Table** that receive your records. You can change them at any time.
3. **Map Fields:** Link your Airtable fields with the form fields. Use the Shortcode Arrow to select the value for each field.
4. **Enable Typecast:** Choose whether Airtable converts the submitted values to the matching field types automatically.
5. **Conditional Logics:** Run the Airtable integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when the setup is done. Airtable is now connected to this form.

![Save Feed Button Integrate Airtable](/images/integrations/other-apps/integrate-airtable/12.-Save-Feed-button-scaled-3.webp)

The **Airtable Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added Airtable Integration Feed](/images/integrations/other-apps/integrate-airtable/13.-Added-Airtable-Integration-Feed-scaled.webp)

## Preview of Integrated Airtable

You can see the form submissions that add Airtable records in the **Entries** tab of the form. In this example, the form has four new **Form Submissions**.

![Entries Tab Fluent Forms](/images/integrations/other-apps/integrate-airtable/14.-Entries-tab-scaled.webp)

In Airtable, open **All Workspaces** in the left sidebar and open the **Workspace** you connected to **Fluent Forms**.

![Worspace Fluent Forms](/images/integrations/other-apps/integrate-airtable/15.-Desired-worspace-scaled.webp)

The **users who submitted forms** in **Fluent Forms** now appear in the selected **Airtable Table**.

![Preview Added Contacts Integrate Airtable](/images/integrations/other-apps/integrate-airtable/16.-Preview-of-added-contacts-scaled.webp)
