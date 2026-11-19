---
description: "FluentCRM is a popular self-hosted CRM plugin for WordPress, designed to help small businesses manage their subscribers effectively."
---

# FluentCRM Integration

[FluentCRM](https://fluentcrm.com/) is a self-hosted CRM plugin for WordPress that helps small businesses manage their subscribers. With the FluentCRM integration, you grow your subscriber list from form submissions. This guide walks you through connecting FluentCRM with Fluent Forms on your WordPress site. You can also [pre-fill form fields with FluentCRM data](/pre-fill-form-fields-with-fluentcrm-data) for logged-in contacts.

> [!Note]
> Install and activate both **Fluent Forms** and **FluentCRM**. No extra global setup is required to connect them.

## Enable the FluentCRM Integration

Go to **Integrations** in the Fluent Forms Navbar, search for **FluentCRM**, and find the **FluentCRM Module**.

Turn on the **Toggle** to enable the **FluentCRM** module. Use the **FluentCRM** module under the **CRM** tab, not the plugin card. The module needs no further configuration.

![FluentCRM Integration With](/images/integrations/crm/fluentcrm-integration/fluentcrm-integration-with-fluent-form-01-scaled.webp)

## Integrate FluentCRM with FluentForms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to FluentCRM, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings FluentCRM integration](/images/integrations/crm/fluentcrm-integration/Form-Settings-02-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **FluentCRM Integration** feed from the drawer.

![Add FluentCRM Integration](/images/integrations/crm/fluentcrm-integration/Add-FluentCRM-Integration-03-scaled.webp)

## Configure FluentCRM Integration Feed

After you select the FluentCRM integration, configure these options:

- **Feed Name:** Enter a name for your FluentCRM integration feed.
- **FluentCRM List:** Select the FluentCRM contact list you want to connect. You can change it at any time.
- **Primary Fields:** Link your **FluentCRM Fields** with the **Form Fields**. Use the **Shortcode Arrow** to select the value for each field.
- **Other fields:** Map additional Fluent Forms fields to FluentCRM fields. Click the **Plus (+) Icon** to add more fields.
- **Contact Tag:** Select one or more tags for the contact from your FluentCRM contact tags.
  - **Enable Dynamic Tag Selection:** Check this option to add dynamic tags based on conditions, then apply conditions from the dropdown list.
  - **Skip contact already exists in FluentCRM:** Check this option to prevent duplicate contacts in FluentCRM.
  - **Skip name update if existing contact has old data:** Check this option (per primary) to keep existing contact names even when new data is submitted.
  - **Enable Double Opt-In for a new Contact:** Enable this option to send a [double opt-in email](/set-up-double-opt-in-emails) to new contacts.
  - **Enable Force subscribe if contact is not in subscribed status:** Check this option to subscribe existing contacts that are not already subscribed.
- **Conditional logic:** Turn on **Enable Conditional Logic** to run the integration only when your submission values match the conditions you set. See [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).
- **Remove Contact Tags:** Select the tags to remove from a contact in FluentCRM.
- **Status:** Enable this option to activate the feed.

Click **Save** to finish your FluentCRM integration.

![FluentCRM integration step](/images/integrations/crm/fluentcrm-integration/5-2.webp)

The **FluentCRM** **Integration** **Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Enable FluentCRM integration](/images/integrations/crm/fluentcrm-integration/enable-06-scaled.webp)

## Automation Trigger with Fluent Form

[FluentCRM](https://fluentcrm.com/) lets you set up automation funnels that Fluent Forms triggers. These triggers automate tasks based on user behavior, such as form submissions, subscription cancellations, or payment receipts.

In the **Fluent CRM** Navbar, go to **Automation** and click **+ New Automation**. For detailed steps on creating an automation funnel, see the FluentCRM automation [documentation](https://fluentcrm.com/docs/automation-editor/).

The **Fluent Forms triggers** for an automation funnel appear under the **Fluent** **Form** plugin categories in the left sidebar:

- Subscription Cancelled (Fluent Form)
- Subscription Payment Received
- New Form Submission

After you select a **Trigger**, click **Continue** and enter a **Title** in the **Internal Label** field so you can find the automation funnel later.

![Automation Funnels FluentCRM](/images/integrations/crm/fluentcrm-integration/Automation-Funnels-FluentCRM-04-08-2025_01_17_PM-scaled.webp)

### Subscription Cancelled (Fluent Form) Automation

This trigger starts the automation when a subscription is canceled. After you select it, a tab opens on the right-hand side with the trigger options.

## Settings of Subscription Cancelled Funnel

- **Automation Name:** Enter a name so you can find the automation later.
- **Internal Description:** Enter a description. It appears as a subtitle in the block diagram in the Automation Editor.
- **Subscription Status:** Use the dropdown list to change the subscription status of the contact who submits the form, based on the FluentCRM contact statuses.
- **Run the automation actions even if contact status is not in subscribed status:** Check this option to run the automation even when the contact’s status is not subscribed.
- **Target Forms:** Select the form that triggers this automation funnel. Leave it blank to run the funnel for all forms on your website.
- **Restart:** Check this option to restart the automation multiple times for the same contact that triggers it.

Click **Save** to save all your changes.

![Subscription Cancelled Funnel](/images/integrations/crm/fluentcrm-integration/Subscription-cancelled-funnel-05-scaled.webp)

## Subscription Payment Received (Fluent Form)

This trigger starts the automation when a subscription payment is received. After you select it, a tab opens on the right-hand side with the trigger options.

### Settings Payment Received (Fluent Form)

- **Automation Name:** Enter a name so you can find the automation later.
- **Internal Description:** Enter a description. It appears as a subtitle in the block diagram in the Automation Editor.
- **Select your form:** Choose the form from the dropdown.
- **Map Primary Data:** Map the FluentCRM data (First Name, Last Name, Email) by selecting values from the dropdown.
- **Map Other Data:** Select contact properties and form fields for additional data mapping.
- **Subscription Status:** Use the dropdown list to change the subscription status of the contact who submits the form, based on the FluentCRM contact statuses.
- **Conditions:** Check the box to run this automation only once per contact. If you leave it unchecked, the automation overwrites an existing flow.

Click **Save** to save all your changes.

![FluentCRM integration step](/images/integrations/crm/fluentcrm-integration/555-scaled.webp)

### New Form Submission (Fluent Form)

This automation funnel starts when a New Form Submission (Fluent Forms) is submitted. After you select this trigger, a tab opens on the right-hand side with the trigger options.

>[!Note]
> The settings of the New Form Submission (Fluent Form) trigger work the same way as the Subscription Payment Received (Fluent Form) trigger. See the previous section for all the settings.

### Preview of Integrated FluentCRM

You can preview the contacts added to **FluentCRM** from the form entries in the **Entries** section of the form. Learn more about [managing entries in Fluent Forms](/managing-entries).

![Entries Fluent Forms](/images/integrations/crm/fluentcrm-integration/entries-form-07-scaled.webp)

With this integration, you sync user submissions with your CRM, manage subscribers, and trigger automation workflows based on user actions.
