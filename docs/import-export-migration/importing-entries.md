---
description: "Fluent Forms offers an impressive Import Entries feature that allows users to import form entries directly in JSON and CSV formats."
---

# Importing Entries

The **Import Entries** feature lets you import form entries in **JSON** and **CSV** formats. It helps you keep your data up to date with bulk entry uploads. This article shows you how to import entries into your WordPress site with Fluent Forms.

> [!Note]
> **Import Entries** is a Pro feature (Pro). It needs Fluent Forms Pro 5.1.7 or later. On the free plugin, the Tools screen shows an upgrade prompt. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Accessing the Import Entries

1. Go to **Fluent Forms** and open [**Tools**](/user-interface) from the top menu (under **More**).
2. Select **Import Entries** from the left sidebar. The **Entries Import Setup** page opens.

You can also import data from an individual form's [**Entries**](/managing-entries) page. Click the **three-dot** menu at the top right and choose **Import**.

![Access Import Entries](/images/import-export-migration/importing-entries/access-import-entries-01-scaled.webp)

### Choosing File Type and Source

1. In the **Entries Import Setup** section, choose the form that receives the entries in the **Target Form** dropdown.
2. Choose the **File Type**: **CSV** or **JSON (.json) Data**. A JSON file must come from a Fluent Forms entries export.
3. Under **Select File**, click the **Upload CSV** or **Upload JSON** box and upload the file from your computer.
4. Click **Map columns**.

![Select Importing Entries](/images/import-export-migration/importing-entries/select-form-02-scaled.webp)

### CSV File Import

For a CSV file, select **CSV** in **File Type** and upload the file with **Select File**.

Choose the **Csv Delimiter** (Comma or Semicolon) from the dropdown to match your file format. If you are unsure, use **Auto Guess** to detect it. Make sure the delimiter is correct and the file has unique column headers.

Click **Map columns** to continue.

![Tools Wordpress Fluent Forms](/images/import-export-migration/importing-entries/Tools-_-Demo-_-WordPress-04-09-2025_03_00_PM-scaled.webp)

### Mapping Fields for Import

After you click **Map columns**, both **JSON** and **CSV** files need **Field Mapping**. This step places the imported data in the correct form fields.

**Submission Info Mapping:** Check **Show Submission Info Mapping** to enable **Submission Info Mapping** for the import.

**Delete Existing Submissions:** Select this option to replace current submissions with the imported data.

Click **Import** to finish.

![Unnamed](/images/import-export-migration/importing-entries/unnamed-4-2.webp)

When the import completes, a **confirmation message** and a **View Entries** button appear. Click **View Entries** to review the imported data.

![View Entries](/images/import-export-migration/importing-entries/view-entries-04-1-scaled.webp)

To bring in forms from another plugin, see [Migrate to Fluent Forms](/migrator-wpforms-contact-form-7-gravity-forms-ninja-forms-caldera-forms).
