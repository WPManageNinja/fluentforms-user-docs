---
description: "Fluent Forms integrates with HubSpot so form submissions can create or update HubSpot contacts and add them to your lists automatically."
---

# HubSpot Integration

Fluent Forms integrates with **HubSpot** so form submissions can create or update HubSpot contacts and add them to your lists automatically.

This guide covers enabling the integration, creating a HubSpot **Service Key**, connecting it to Fluent Forms, preparing a static list, configuring a form feed, and testing the connection.

> [!Note]
> **HubSpot** integration requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Before You Start

- **Fluent Forms Pro** is installed, activated, and updated to the latest version.
- You are a **Super Admin** in your HubSpot account, or you have **Developer tools** access. Only these users can create Service Keys.

> [!Note]
> **Already connected with a private app token?** You don't need to change anything. HubSpot keeps existing legacy private apps working. Use this guide when you connect for the first time or need a new key.

## Enable HubSpot Integration

Go to **Integrations** in the Fluent Forms navbar, search for **HubSpot**, and turn on its **Enabled** toggle. Then click the **Settings** icon on the HubSpot card.

![Enable HubSpot integration module](/images/integrations/crm/hubspot-integration/enable-hubspot-integration-01-scaled.webp)

Fluent Forms asks for a **HubSpot Access Token**. You create it in HubSpot in the next step.

![HubSpot access token prompt](/images/integrations/crm/hubspot-integration/hubspot-access-token-02-scaled.webp)

## Create a HubSpot Service Key

Fluent Forms connects to HubSpot with a **Service Key**. The key gives Fluent Forms access to your HubSpot contacts and lists.

Log in to your [HubSpot account](https://www.hubspot.com/). In the left sidebar, go to **Development** > **Keys** > **Service Keys**. If you don't see **Development**, open **More** at the bottom of the sidebar.

Click **Create service key** in the top right.

![Create a HubSpot Service Key](/images/integrations/crm/hubspot-integration/create-service-key.webp)

Enter a **Name** for the key, for example *Fluent Forms*. Then click **Add new scope**.

![Enter a name and add scopes to the Service Key](/images/integrations/crm/hubspot-integration/enter-name-and-add-scope.webp)

In the **Add new scope** panel, search for and tick each scope from the table below, then click **Update**.


| Scope | Needed for |
| --- | --- |
| `crm.objects.contacts.read` | Required: reading and matching contacts |
| `crm.objects.contacts.write` | Required: creating and updating contacts |
| `crm.schemas.contacts.read` | Required: loading contact fields for mapping |
| `crm.lists.read` | List syncing only: showing your lists in Fluent Forms |
| `crm.lists.write` | List syncing only: adding contacts to a list |


![Select scopes for the HubSpot Service Key](/images/integrations/crm/hubspot-integration/add-new-scope.webp)

Check that all selected scopes are listed under **Selected scopes**, then click **Create** in the top right.

![Selected scopes and Create button](/images/integrations/crm/hubspot-integration/create.webp)

In the confirmation pop-up, click **Create** again.

![Confirm Service Key creation](/images/integrations/crm/hubspot-integration/click-create.webp)

On the key's page, click **Copy** next to the **Service Key**. The key starts with `pat-`.

> [!Warning]
> Keep the Service Key private, like a password. If it is ever exposed, click **Rotate** on the same page and paste the new key into Fluent Forms.

![Copy the HubSpot Service Key](/images/integrations/crm/hubspot-integration/copy-service-key.webp)


## Connect HubSpot with Fluent Forms

Go to **Fluent Forms** > **Global Settings** > **Configure Integrations** > **HubSpot**.

Paste the Service Key into the **HubSpot Access Token** field and click **Save Settings**.

![Paste HubSpot API access token](/images/integrations/crm/hubspot-integration/hubspot-api-access-token-10-scaled.webp)

When the key is accepted, you see **Your HubSpot API integration is up and running**. You can remove the connection anytime with **Disconnect HubSpot**.

![Disconnect HubSpot integration](/images/integrations/crm/hubspot-integration/disconnect-api-key.webp)

## Prepare a Static List (Optional)

Skip this step if you only want to create contacts. HubSpot now calls lists **Segments**, and Fluent Forms can add contacts only to **Static** segments.

- In HubSpot, go to **Segments** in the left sidebar.
- Click **Create segment** > **Manually**.
- Choose **Contacts** and click **Next**.
- Name the segment. No filters are needed.
- Click **Next**. Under **Choose processing type**, select **Static**.
- Click **Save and process segment**.

> [!Note]
> **Active** segments don't appear in Fluent Forms, because HubSpot adds and removes their members automatically.

## Configure the Form with HubSpot

Go to **All Forms** and open the form you want to connect, or create a new one.

> [!Note]
> If you do not have any existing forms, see [How to Create a Form with Fluent Forms](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open form settings for HubSpot integration](/images/integrations/crm/hubspot-integration/Forms-Fluent-settings-y-scaled.webp)

In the form's **Settings & Integrations**, open **Configure Integrations**, click **Add New Integration**, and select **HubSpot Integration**.

![Add HubSpot integration to the form](/images/integrations/crm/hubspot-integration/41.webp)

## Configure HubSpot Integration Feed

**A. Name:** Enter a name for this feed.

**B. HubSpot List:** Select the static segment that receives form data, or leave it empty to only create contacts.

**C. Map Fields:** Choose the form field for **Email Address** (required). Optionally map **First Name**, **Last Name**, **Website**, **Company**, **Phone**, and address fields.

**D. Other Fields:** Click the **Plus** icon to map any other HubSpot contact property.

**E. Conditional Logics:** Send data to HubSpot only when your conditions match. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

**F. Update:** Tick **Enable Contact Update** so a returning email updates the existing contact instead of failing.

**G. Status:** Keep **Enable This feed** ticked to activate the integration.

Click **Save Feed**.

![Configure HubSpot integration feed](/images/integrations/crm/hubspot-integration/hubspot-feed.webp)

After saving, your HubSpot feed appears in the integrations list. Edit it with the **Settings** icon, delete it with the **Trash** icon, or toggle it on or off as needed.

![Saved HubSpot integration feed](/images/integrations/crm/hubspot-integration/14-1-scaled.webp)

### Legacy Feed Migration Note

If you configured HubSpot feeds before the CRM v3 and Lists v3 update, Fluent Forms tries to migrate the old list ID automatically.

If the old list ID cannot be mapped to a Lists v3 ID, open the feed, re-select the HubSpot list manually, and save again.

## Test the Integration

- Submit the form once with a test email address.
- In Fluent Forms, open the entry under **Entries**. Its **Submission Logs** show the HubSpot feed result. The feed runs in the background, so the log can take a moment to appear. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Form entries after HubSpot integration](/images/integrations/crm/hubspot-integration/15-scaled.webp)

- In HubSpot, go to **CRM** > **Contacts** and find the test contact.

![HubSpot contacts from Fluent Forms submissions](/images/integrations/crm/hubspot-integration/hubspot-contact-14-scaled.webp)

- If you chose a list, open the segment and check that the contact is listed. The segment's **Size** number can lag a few minutes behind the member list.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| No **Development** > **Keys** menu in HubSpot | Ask a HubSpot Super Admin to create the key, or to give you Developer tools access. |
| "Your HubSpot token is missing required contact permissions" | Add `crm.objects.contacts.read` and `crm.objects.contacts.write` to the key, then save again in Fluent Forms. |
| List dropdown shows **No data** | Create a Static segment and make sure the key has `crm.lists.read` and `crm.lists.write`. |
| Contact is created but not added to the list | Check that the segment is Static and the key has `crm.lists.write`. |
| The connection stopped working | The key may have been rotated or deleted in HubSpot. Paste the current key and save again. |

## FAQ

**Do existing private app tokens still work?**
Yes. HubSpot keeps existing legacy private apps working, so connected sites need no change.

**Do I need the list scopes?**
Only if you add contacts to a HubSpot list. Contact-only setups need the three required scopes.
