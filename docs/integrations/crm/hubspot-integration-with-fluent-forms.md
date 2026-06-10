# HubSpot Integration

Fluent Forms integrates with **HubSpot** so form submissions can create or update HubSpot contacts and add them to your lists automatically.

This guide covers enabling the integration, creating a HubSpot private app, connecting your access token, and configuring a form feed.

> [!Note]
> **HubSpot** integration requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-fluent-forms-pro-add-on).

## Enable HubSpot Integration

Go to **Integrations** in the Fluent Forms navbar, search for **HubSpot**, and open the HubSpot integration module.

Turn on the **Enabled** toggle, then click the **Settings** icon.

![Enable HubSpot integration module](/images/integrations/crm/hubspot-integration-with-fluent-forms/enable-hubspot-integration-01-scaled.webp)

After enabling HubSpot, you are prompted for a HubSpot **Access Token**.

![HubSpot access token prompt](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-access-token-02-scaled.webp)

## Get the HubSpot Access Token

Log in to your [HubSpot account](https://www.hubspot.com/), click the **Settings** icon in the upper right, then open **Legacy Apps** under **Integrations**.

![HubSpot Legacy Apps settings](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-setting-2-scaled.webp)

Click **Create**.

![Create a HubSpot legacy app](/images/integrations/crm/hubspot-integration-with-fluent-forms/create-legacy-app-3-scaled.webp)

In the pop-up, select **Private**.

![Select Private app type](/images/integrations/crm/hubspot-integration-with-fluent-forms/private-4.webp)

Click **Continue with the legacy private app**.

![Continue with legacy private app](/images/integrations/crm/hubspot-integration-with-fluent-forms/create-leggacy-app-5-1-scaled.webp)

You are taken to a page with **Basic Info** and **Scopes**.

### Basic Info

Enter a **Name** for the private app (for example, *Fluent Forms*).

![HubSpot app basic info](/images/integrations/crm/hubspot-integration-with-fluent-forms/create-app-6-scaled.webp)

### Scopes

Open the **Scopes** tab and click **Add new scope**.

![Add new HubSpot scopes](/images/integrations/crm/hubspot-integration-with-fluent-forms/add-new-scopes-7-scaled.webp)

Select these contact scopes:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.schemas.contacts.read`

![HubSpot CRM contact scopes](/images/integrations/crm/hubspot-integration-with-fluent-forms/add-crm-scope-8-scaled.webp)

![HubSpot CRM schemas scope](/images/integrations/crm/hubspot-integration-with-fluent-forms/crm-schemas-scaled.webp)

For list syncing, also add:

- `crm.lists.read`
- `crm.lists.write`

![HubSpot CRM lists scopes](/images/integrations/crm/hubspot-integration-with-fluent-forms/crm-lists-scaled.webp)

Click **Create app** in the top right.

![Create HubSpot app](/images/integrations/crm/hubspot-integration-with-fluent-forms/create-app-scaled.webp)

In the confirmation pop-up, click **Continue creating**.

![Continue creating HubSpot app](/images/integrations/crm/hubspot-integration-with-fluent-forms/continue-creating-scaled.webp)

Open **Auth** and copy the **Access Token**.

![Copy HubSpot access token](/images/integrations/crm/hubspot-integration-with-fluent-forms/access-token-scaled.webp)

### Connect HubSpot with Fluent Forms

Return to **HubSpot Settings** under **Configure Integration** in Fluent Forms global settings.

Paste the **HubSpot Access Token** and click **Save Settings**.

![Paste HubSpot API access token](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-api-access-token-10-scaled.webp)

A success notice confirms the token is verified. You can disconnect HubSpot anytime with **Disconnect HubSpot**.

![Disconnect HubSpot integration](/images/integrations/crm/hubspot-integration-with-fluent-forms/dissconnected-hubspot-11-scaled.webp)

## Configure the Form with HubSpot

Go to **All Forms** and open the form you want to connect, or create a new one.

> [!Note]
> If you do not have any existing forms, see [How to Create a Form with Fluent Forms](/how-to-create-a-form-with-fluent-forms) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms-in-fluent-forms).

![Open form settings for HubSpot integration](/images/integrations/crm/hubspot-integration-with-fluent-forms/Forms-Fluent-settings-y-scaled.webp)

In the form's **Settings & Integrations**, click **Add New Integration** and select **HubSpot Integration**.

> [!Note]
> You need a static HubSpot list to sync submissions. In the Lists v3 flow, list membership updates work only with list types that support manual membership changes (**MANUAL** and **SNAPSHOT** lists). Dynamic or active lists do not work with Fluent Forms.

![Add HubSpot integration to the form](/images/integrations/crm/hubspot-integration-with-fluent-forms/41.webp)

## Configure HubSpot Integration Feed

**A. Name:** Enter a unique feed name.

**B. HubSpot list:** Select the HubSpot list that receives form data.

**C. Map Fields:** Map HubSpot fields to form fields using the shortcode picker.

**D. Other Fields:** Add extra custom HubSpot fields. Click the **Plus** icon to add more mappings.

**E. Conditional Logic:** Run the integration only when specific conditions are met. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic-in-fluent-forms).

**F. Update:** Enable **Contact Update** to update existing HubSpot contacts with new form data.

**G. Status:** Enable the feed to activate the integration.

Click **Save Feed**.

![Configure HubSpot integration feed](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-feed.webp)

After saving, your HubSpot feed appears in the integrations list. Edit it with the **Settings** icon, delete it with the **Trash** icon, or toggle it on or off as needed.

![Saved HubSpot integration feed](/images/integrations/crm/hubspot-integration-with-fluent-forms/14-1-scaled.webp)

### Legacy Feed Migration Note

If you configured HubSpot feeds before the CRM v3 and Lists v3 update, Fluent Forms tries to migrate the old list ID automatically.

If the old list ID cannot be mapped to a Lists v3 ID, open the feed, re-select the HubSpot list manually, and save again.

## Preview of Integrated HubSpot

View form submissions in the form's **Entries** section. Learn more about [managing entries in Fluent Forms](/managing-entries-in-fluent-forms).

![Form entries after HubSpot integration](/images/integrations/crm/hubspot-integration-with-fluent-forms/15-scaled.webp)

In HubSpot, open **CRM → Contacts** to see contacts added to your integrated list.

![HubSpot contacts from Fluent Forms submissions](/images/integrations/crm/hubspot-integration-with-fluent-forms/hubspot-contact-14-scaled.webp)
