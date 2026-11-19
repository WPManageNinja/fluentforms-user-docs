---
description: "The PDF Module in Fluent Form is an amazing feature that allows you to export form entries as PDF files. It is easy to save, share, and manage submissions."
---

# PDF Module

The PDF Module lets you export form entries as **PDF** files. Use it to save, share, and manage submissions.

This guide shows you how to export an entry as a PDF.

## Install and Activate the PDF Generator Plugin

Install the **Fluent Forms PDF Generator** extension to enable PDF export.

In your WordPress dashboard, go to **Plugins**, click **Add New Plugin**, and search for **Fluent Forms PDF Generator**. Install and activate the plugin. A **Fluent Forms PDF** tab appears in the modules section. The extension installs from WordPress.org automatically.

![PDF Generator Plugin](/images/modules/pdf-module/pdf-generator-plugin-01-scaled.webp)

## Install and Activate the PDF Feed

After you activate the PDF generator plugin, click **Integrations** in the Fluent Forms navbar and search for **Fluent Forms PDF**. Click **Configure** next to it to see the **Fluent Form PDF Modules**. Click **Install Fonts** to set up the required fonts and elements.

Wait for the installation to finish. A success message confirms the setup.

> [!Note]
> Do not close the window until the installation finishes.

![PDF Module Integration](/images/modules/pdf-module/PDF-module-integration-02-scaled.webp)

Your **Fluent PDF Module** is now active, and you can use the **PDF Feed** in Fluent Forms.

![PDF](/images/modules/pdf-module/Fluent-Form-PDF-04-1-scaled.webp)

## Configure Global PDF Settings

In your WordPress dashboard, click the **Settings** (gear) icon in the Fluent Forms navbar to open **Global Settings**.

Expand **Other Settings** and click **PDF Settings**. Configure the **PDF** settings for all forms here. Each form can override these settings.

![PDF Setting](/images/modules/pdf-module/PDF-Setting-05-scaled.webp)

## Setting Up a PDF Feed for a Form

To enable PDF export for a specific form, open the form and click **Configuration** in the top bar.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

Expand **Integrations & Add-ons** in the left sidebar and click **PDF Feeds**. Then click **Add PDF Feed** at the top right.

![Enable PDF Settings Fluent Forms PDF Module](/images/modules/pdf-module/enable-PDF-Settings-06-1-scaled.webp)

## Customizing the PDF Feed

A **Create new PDF Feed** popup asks you to choose a **PDF Template**. Select **General**, **Invoice**, or **Certificate**. The **Invoice** template appears only for payment forms.

![Select PDF Template Fluent Forms PDF Module](/images/modules/pdf-module/Select-a-PDf-Template-07-scaled.webp)

### PDF Content

**A. Feed Title:** Set the title of the PDF Feed. You can also add a shortcode from the dropdown on the right side.

**B. Header Content:** Enter custom header text. You can also **Add Shortcode** here.

**C. PDF Body Content:** Design the main content of your PDF here.

For example, **{all_data}** includes all submitted form data in the PDF. Click **Add Shortcode** to insert dynamic content with shortcodes. This lets you format the content and show your form data exactly as you need.

Fluent Forms also provides an HTML editor for full control over the PDF layout and design. Click the **Code** view to open it.

**D. Footer Content:** Enter custom footer text.

**E. Allow Download:** Select **Yes** or **No** to enable **PDF** downloads.

**F. Shortcode:** Use this shortcode in the submission message to generate a **PDF** link.

![Fluent Forms PDF Module step](/images/modules/pdf-module/3333-scaled.webp)

### Appearance

Use the Appearance tab to override the PDF appearance you set globally.

**A. Paper Size:** Select the page format from the dropdown.

**B. Orientation:** Choose Portrait or Landscape from the dropdown.

**C. Font Family:** Select a font for the PDF text from the dropdown.

**D. Font Size:** Adjust the font size with the **Plus** or **Minus** icon.

**E. Font Color:** Select the font color from the color palette.

**F. Heading color:** Select the heading color from the color palette.

**G. Accent Color:** Select the accent color from the color palette. Fluent Forms uses the accent color for borders, breaks, and similar elements.

**H. Language Direction:** Scripts like Arabic and Hebrew are written right to left. For Arabic or Hebrew, select **RTL**. For other languages, keep the default **LTR**.

**I. Watermark Image:** Upload an image as a **background watermark**.

**J. Watermark Text:** Enter text to use as a **watermark**.

**K. Watermark Opacity:** Controls the transparency of the watermark (**1-100**). The recommended value is 50.

**L. Watermark Position:** Sets the watermark as a background.

**M. PDF Password:** Set a password for protected PDF access. Leave it empty if you do not want a password.

Click **Save Feed**. Fluent Forms adds the **PDF Feed** to your form.

![Appearance Fluent Forms](/images/modules/pdf-module/Appearance-09-scaled.webp)

## Downloading a Form Entry as a PDF

After you add the PDF Feed, go to the [**Entries**](/managing-entries) section of the form.

Select an entry and click its **ID** to open it.

![Entries Fluent Forms](/images/modules/pdf-module/entries-10-scaled.webp)

The entry shows the Download option for your PDF Feed preview. Click **Download PDF** to generate and save the file.

![PDF Download](/images/modules/pdf-module/PDf-download-10-1-scaled.webp)

## Sending Form Entries as PDFs via Email

To send form entries as PDFs in emails automatically, open **Email Notifications Settings** for your form. Scroll down to **PDF Attachments** (above the Advanced tab).

Select the **PDF feed** you want to attach to emails. Recipients then get a **PDF version of the form submission** by email.

When a user submits the form, Fluent Forms sends this PDF Feed to the **Admin Email**.

To learn more, read [How to Setup Admin/User Email Notifications](/setup-adminuser-email-notifications).

![Fluent Forms PDF Module step](/images/modules/pdf-module/11-scaled.webp)

You can now create, download, and email a PDF feed from your form.
