---
description: "Fluent Forms offers an impressive Import Entries feature that allows users to import form entries directly in JSON and CSV formats."
---

# Importing Entries

The **Import Entries** feature lets you import form entries in **JSON** and **CSV** formats. It helps you keep your data up to date with bulk entry uploads. This article shows you how to import entries into your WordPress site with Fluent Forms.

> [!Note]
> **Import Entries** is a Pro feature. It needs Fluent Forms Pro 5.1.7 or later. On the free plugin, the Tools screen shows an upgrade prompt. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Accessing the Import Entries

First, go to the Fluent Forms dashboard and open [**Tools**](/user-interface) from the top navigation bar. Then, select **Import Entries** from the left sidebar. It opens the **Entries Import Setup** page.

Alternatively, you can import data from an individual form's [**Entries**](/managing-entries) page. Click the **three-dot** menu at the top right and choose **Import**. Only users who can manage Fluent Forms settings see this option.

![Entries Import Setup page under Tools](/images/import-export-migration/importing-entries/access-import-entries-01-scaled.webp)

### Choosing File Type and Source

On the **Entries Import Setup** page, use the **Target Form** dropdown to choose the form where you want to add entries. Next, choose the **File Type**, either **CSV** or **JSON (.json) Data**. Then upload the file from your computer by clicking the **Upload CSV** or **Upload JSON** box under **Select File**.

The file type must match the option you selected. Once the form is selected and the file is uploaded, click the **Map columns** button.

![JSON (.json) Data file type selected with the Upload JSON box](/images/import-export-migration/importing-entries/select-form-02-scaled.webp)

### CSV File Import

If you import entries from a **CSV file**, select the **CSV** option in **File Type**. The **Csv Delimiter** dropdown appears only for CSV files.

Choose the **Csv Delimiter** (**Comma Separated (,)** or **Semicolon Separated (;)**) to match your file. If you are unsure, keep **Auto Guess** so Fluent Forms detects it for you. Make sure the CSV file has unique column headers, or the import may fail.

Click **Upload CSV** and choose your file. When the file shows **ready to import**, click the **Map columns** button to continue.

![CSV file type selected and the file ready to import](/images/import-export-migration/importing-entries/Tools-_-Demo-_-WordPress-04-09-2025_03_00_PM-scaled.webp)

### Mapping Fields for Import

After you click **Map columns**, the **Map responsible fields to import** popup opens. Both **JSON** and **CSV** files need this step so the data goes into the correct form fields. Under **Form Fields**, use the dropdown next to each field to choose the matching column from your file under **Mapping Fields**.

**Submission Info Mapping:** To also map the submission details, check **Show Submission Info Mapping**. A **Submission Info Fields** list appears under it.

**Delete Existing Submissions:** Check this option to delete the form's current submissions before the import.

Click **Import** to finish. Click **Cancel** to close the popup without importing.

![Map responsible fields to import popup](/images/import-export-migration/importing-entries/unnamed-4-2.webp)

Once the import completes, an **Entries imported.** message appears and a **View Entries** link shows below the **Map columns** button. Click it to review the imported data.

![Imported entries in the form's Entries list](/images/import-export-migration/importing-entries/view-entries-04-1-scaled.webp)

To bring in forms from another plugin, see [Migrate to Fluent Forms](/migrator-wpforms-contact-form-7-gravity-forms-ninja-forms-caldera-forms).
