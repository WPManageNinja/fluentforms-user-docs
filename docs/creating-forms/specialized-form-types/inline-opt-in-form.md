---
description: "An inline opt-in form lets you collect email subscribers directly inside your page content: no popup, no redirect, just a clean horizontal form embedded…"
---

# Inline Opt-in Form

An inline opt-in form collects email subscribers inside your page content, with no popup and no redirect. It is a horizontal form that you embed where you need it. You set it up from a pre-built template and connect it to your email marketing platform.

This guide shows you how to import the form, connect your email service, and embed it on a page.

## Import the Pre-built Opt-in Form

1. Download the **Opt-in Form JSON file** from the provided [link](https://share.getcloudapp.com/rRunQgWj).
2. Open **More → Tools** in the Fluent Forms top bar and click **Import Forms** in the left menu.
3. Click **Upload JSON** and choose the downloaded file under **Select Forms**.
4. Click **Import JSON**.

For more details, see [How to Import and Export Fluent Forms](/import-and-export-fluent-forms).

![Import inline form](/images/creating-forms/specialized-form-types/inline-opt-in-form/import-inline-01-scaled.webp)

## Connect to Your Email Service

Open the imported form in the **Form Editor**. Click **Configuration** in the top bar, then open **Integrations & Add-ons**. Choose your email marketing platform, such as [Mailchimp](/integrate-mailchimp), Kit (formerly ConvertKit), FluentCRM, or others. Complete the integration with your account details.

After you save, copy the **form shortcode** from the top bar of the editor.

![Inline opt-in preview](/images/creating-forms/specialized-form-types/inline-opt-in-form/02-1-scaled-2.webp)

## Add the Form to Your Page or Template

Open the **Page Editor** (or Template Editor) where you want to display the form.

### Add a Section

Insert a new section into your layout. Use this CSS to give it a light background and center alignment:

```
.section {

    background-color: #f0f0f0;

    align-items: center;

}
```

### Add a Heading

Add a **Heading**. Use an `<h2>` or `<h3>` tag styled like this:

```
.heading {

    color: #566d8f;

    font-size: 20px;

}
```

### Insert the Form Shortcode

Add a shortcode block or component to the section and paste the shortcode you copied earlier. Style the container to control the layout:

```
.shortcode {

    margin-top: 20px;

    width: 100%;

    max-width: 600px;

}
```

Save your page to apply the changes. Your horizontal opt-in form is now live and styled to fit your page.
