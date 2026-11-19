---
description: "The PDF Module in Fluent Forms turns form submissions into PDF files you can download from an entry or attach to email notifications."
---

# PDF Module

The **PDF Module** turns form submissions into **PDF** files. Create a PDF feed for a form, design the layout, and then download the file from an entry or attach it to your email notifications. Use it for receipts, contact lists, certificates, and any record you want to save or share.

This guide shows you how to install the PDF add-on, set global PDF styles, create a PDF feed, and download or email the PDF.

## Install and Activate the PDF Generator Plugin

PDF export comes from the free **Fluent Forms PDF Generator** plugin. Install it from the WordPress plugin directory.

In your WordPress dashboard, go to **Plugins**, click **Add New Plugin**, and search for **Fluent Forms PDF Generator**. Click **Install Now**, then **Activate**.

![PDF Generator Plugin](/images/modules/pdf-module/pdf-generator-plugin-01-scaled.webp)

## Open the PDF Module

After you activate the plugin, click **Integrations** in the Fluent Forms navigation bar and open the **Fluent Forms** tab. **Fluent Forms PDF** appears in the list with an **Installed** label. Click **Configure** to open its settings.

If you see **Install** instead, click it to install the add-on from here.

![Fluent Forms PDF listed on the Integrations page with the Configure button highlighted](/images/modules/pdf-module/PDF-module-integration-02-scaled.webp)

Wait for any font installation to finish before you leave the page.

> [!Note]
> If the page shows an **Install Missing Fonts** button, click it to download the fonts the PDF needs. Do not close the window until the installation finishes.

## Configure Global PDF Settings

**Configure** opens the **Fluent PDF** settings page. You can also reach it from the Fluent Forms navigation bar. Click the **Settings** (gear) icon, expand **Other Settings** in the left sidebar, and select **PDF Settings**.

The **Fluent PDF Settings** card sets the default layout and typography for every PDF feed. Each form's PDF feed can override these defaults.

- **Page Layout:** Choose the **Paper size**, the **Orientation** (**Portrait** or **Landscape**), and the **Language Direction**. Select **RTL** for right-to-left languages such as Arabic or Hebrew.
- **Typography:** Choose the **Font Family** and set the **Font size**. Only installed fonts appear in the list. Use **Download more fonts** to add others.
- **Colors:** Set the **Font color**, **Heading color**, and **Accent color**. Fluent Forms uses the accent color for borders and breaks.

Click **Save** at the top right to keep your changes.

![Fluent PDF Settings page with Page Layout, Typography, and Colors](/images/modules/pdf-module/PDF-Setting-05-scaled.webp)

## Add a PDF Feed to a Form

Open the form and click **Configuration** in the top bar. Expand **Integrations & Add-ons** in the left sidebar and click **PDF Feeds**. Then click **Add PDF Feed** at the top right.

> [!Note]
> If you do not have a form yet, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![PDF Feeds page with the Add PDF Feed button highlighted](/images/modules/pdf-module/enable-PDF-Settings-06-1-scaled.webp)

The **Create new PDF Feed** popup asks you to select a template.

- **General:** A basic layout for any form.
- **Certificate:** A bordered layout for certificates.
- **Invoice:** An invoice layout. This template appears only for forms that collect payments.

Click a template to open the feed settings.

![Create new PDF Feed popup with the General template highlighted](/images/modules/pdf-module/Select-a-PDf-Template-07-scaled.webp)

## Customize the PDF Feed

The feed settings page has two tabs, **PDF Content** and **Appearance**. The fields on the **PDF Content** tab depend on the template you chose. The steps below cover the **General** template. For the **Certificate** template, see [Certificate Template](#certificate-template).

### PDF Content

**Feed Title:** Enter a name for the feed. This name also becomes the PDF file name. Click the `{ }` icon to insert a shortcode.

**Header Content:** Enter the text or media that appears at the top of every page.

**PDF Body Content:** Design the main part of the PDF. The default `{all_data}` shortcode adds every submitted field. Use the toolbar to format the text, or switch to the **Code** view for full HTML control.

**Footer Content:** Enter the text that appears at the bottom of every page.

![PDF Content tab with the Feed Title, Header Content, and PDF Body Content](/images/modules/pdf-module/3333-scaled.webp)

To add dynamic data, click **Add Shortcodes** above any editor. Pick a group on the left, such as **Input Options**, **Label Options**, **General SmartCodes**, **Entry Attributes**, **PDF**, **Post**, or **Quiz**. Then click a shortcode on the right to insert it. You can also search by name.

Below the body content, you can use conditional content in the PDF body. Select the **Documentation** link there to learn more.

![Add Shortcodes menu in the footer content](/images/modules/pdf-module/pdf-content-shortcodes-07.webp)

At the bottom of the tab, set the download options.

**Allow Download:** Select **Yes** to let users download the PDF when they submit the form. Only logged-in users can download it.

**Shortcode:** Copy this shortcode into the form's confirmation message to show a PDF download link.

### Appearance

Open the **Appearance** tab to override the global PDF settings for this feed.

- **Page layout:** Set the **Paper size**, **Orientation**, and **Language Direction**.
- **Typography:** Set the **Font Family** and **Font size**. Use the **Plus** and **Minus** buttons to change the size.
- **Colors:** Set the **Font color**, **Heading color**, and **Accent color**.

![Appearance tab with page layout, typography, and colors](/images/modules/pdf-module/Appearance-09-scaled.webp)

Scroll down for the **Watermark** and **Security** options.

- **Watermark Image:** Click **Upload Media** to add an image as a watermark.
- **Watermark Text:** Enter text to use as a watermark.
- **Watermark Opacity:** Enter a value between **1** and **100**.
- **Watermark Position:** Check **Set as background** to place the watermark behind the content.
- **PDF Password:** Enter a password to protect the PDF. Leave it empty for no password.

Click **Save** at the top right to add the feed to your form.

![Appearance tab with the Watermark and Security options](/images/modules/pdf-module/Appearance-09-scaled-2.webp)

### Certificate Template

The **Certificate** template builds a ready-made certificate from each submission. Its **PDF Content** tab has its own fields, grouped in cards, instead of the header, body, and footer editors. Fluent Forms fills most fields with default text, so you only change what you need.

Start with the **Feed Title**, then fill in each card.

**Header**

- **Logo:** Click **Upload Media** to add an optional logo at the top.
- **Title:** The main heading. The default is **Certificate of Achievement**.
- **Intro Line:** The line above the recipient's name. The default is **This certificate is proudly presented to**.

**Recipient & Award**

- **Recipient:** The name on the certificate. It accepts shortcodes, such as `{inputs.name_1}`, so each certificate shows the name the user entered.
- **Reason Line:** The line above the subject. The default is **For successfully completing**.
- **Subject:** The course, award, or subject name.
- **Score Line:** Fluent Forms fills this in automatically for quiz forms. Clear it to hide the score.
- **Description:** An optional paragraph under the subject.

![Certificate template with the Header and Recipient & Award cards](/images/modules/pdf-module/certificate-template-settings-01.webp)

**Signature & Issuer**

- **Issuer / Organisation:** An optional organization name above the date and signature.
- **Signature Image:** Upload a signature image.
- **Signature Label:** The text under the signature. The default is **Authorized Signature**.
- **Date:** The default `{submission.created_at}` shows the submission date. Clear it to hide the date.
- **Seal / Badge:** An optional seal or badge image beside the signature.
- **Certificate ID:** An optional certificate number at the bottom. Use a shortcode such as `{inputs.certificate_no}` to pull it from a form field. Leave it empty to hide it.

**Border & Background**

- **Certificate Border:** Choose **Double**, **Single**, or **None**.
- **Divider Style:** Choose **Diamonds**, **Line**, or **None**.
- **Background Image:** Upload an image to use as the certificate background.
- **Background Opacity:** Enter a value between **1** and **100**.
- **Background Fit:** Choose **Stretch**, **Contain**, or **Repeat**.

**Download & Shortcode**

- **Allow Download:** Select **Yes** to let users download the certificate. Only logged-in users can download it.
- **Shortcode:** Copy this shortcode into the confirmation message to show a download link.

![Certificate template with the Signature & Issuer and Border & Background cards](/images/modules/pdf-module/certificate-template-settings-02.webp)

Open the **Appearance** tab to change the paper size, fonts, and colors. A certificate defaults to **Landscape**, the **Dejavu Sans** font, and a gold accent color. Click **Save** to add the feed.

### Edit or Delete a PDF Feed

Your new feed appears under **PDF Feeds** with its template name below it. Click the **Edit** (pencil) icon to change the feed. Click the **Delete** (trash) icon to remove it.

![PDF Feeds list with the Edit and Delete icons highlighted](/images/modules/pdf-module/edit-and-delete-pdf-feed-10.webp)

## Download a Form Entry as a PDF

After you add a PDF feed, open the [**Entries**](/managing-entries) page. Click the **three-dot** menu at the end of an entry row and select **View entry**.

![Entries page with the three-dot menu and View entry highlighted](/images/modules/pdf-module/entries-10-scaled.webp)

On the entry page, the **PDF Downloads** card in the right column lists each PDF feed for the form. Click a feed name to generate and download the PDF.

![PDF Downloads card on the entry page with the feed link highlighted](/images/modules/pdf-module/PDf-download-10-1-scaled.webp)

## Send Form Entries as PDFs by Email

To attach the PDF to an email notification, open the form and click **Configuration**. Expand **Responses** in the left sidebar, click **Email Notifications**, and edit the notification you want.

Scroll to **PDF Attachments** and check the PDF feed you want to attach. Recipients then get the PDF with the notification email. For example, the **Admin Notification** sends the PDF to the admin email each time someone submits the form.

Click **Save** to apply the change. To learn more about notifications, read [How to Setup Admin/User Email Notifications](/setup-adminuser-email-notifications).

![PDF Attachments option in the Admin Notification settings](/images/modules/pdf-module/11-scaled.webp)

You can now create, download, and email a PDF from your form entries.
