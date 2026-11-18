---
description: "An inline opt-in form lets you collect email subscribers directly inside your page content no popup, no redirect, just a clean horizontal form embedded…"
---

# Inline Opt-in Form

An inline opt-in form lets you collect email subscribers directly inside your page content no popup, no redirect, just a clean horizontal form embedded wherever you need it. With Fluent Forms, you can set one up in minutes using a pre-built template and connect it to your favorite email marketing platform. 

This guide walks you through importing the form, connecting your email service, and embedding it on any page.

## Import the Pre-built Opt-in Form

First, download the **Opt-in Form JSON file** from the provided [link](https://share.getcloudapp.com/rRunQgWj). Then, open **More → Tools** in the Fluent Forms top bar and click **Import Forms** in the left menu. Now, click **Upload JSON** to choose the downloaded file under **Select Forms**. After that, click the **Import JSON** button to import your downloaded form. For more details, see [How to Import and Export Fluent Forms](/import-and-export-fluent-forms). 

![Import inline form](/images/creating-forms/specialized-form-types/inline-opt-in-form/import-inline-01-scaled.webp)

## Connect to Your Email Service

Open the imported form in the **Form Editor**. Click **Configuration** in the top bar, then open **Integrations & Add-ons**. Choose your preferred email marketing platform, such as [Mailchimp](/integrate-mailchimp), [Kit (formerly ConvertKit)](/integrate-kit-former-convertkit), [FluentCRM](/fluentcrm-integration), or others. Complete the integration process with your account details. 

After saving, **copy** the **form shortcode** from the top bar of the editor.

![Inline opt-in preview](/images/creating-forms/specialized-form-types/inline-opt-in-form/02-1-scaled-2.webp)

## Add the Form to Your Page or Template

After that, open the **Page Editor** (or Template Editor) where you'd like to display the form.

#### Add a Section

Insert a new section into your layout and use the following CSS styles to give it a clean background and center alignment-

```
.section {

    background-color: #f0f0f0;

    align-items: center;

}
```

#### Add a Heading

Now it’s time to add a **Heading**. You can use an `<h2>` or `<h3>` tag styled like this:

```
.heading {

    color: #566d8f;

    font-size: 20px;

}
```

#### Insert the Form Shortcode

Now add a shortcode block or component to the section. **Paste** the shortcode you copied earlier. Style the container for better layout control-

```
.shortcode {

    margin-top: 20px;

    width: 100%;

    max-width: 600px;

}
```

Once you’re done, **save your page** to apply the changes. Your horizontal opt-in form should now be live and styled to fit your page.
