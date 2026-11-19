---
description: "The Fluent Forms import/export feature allows you to migrate your forms to another site with a few clicks, saving you the need to create a form again from…"
---

# Import and Export Fluent Forms

The Fluent Forms import/export feature moves your forms to another site with a few clicks. You do not need to [create a form](/create-a-form) again from scratch. This page shows you how to export forms and import them on the new site.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/nTJ1gm5s5OM" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Export Fluent Form

<<<<<<< Updated upstream
Go to the Fluent Forms dashboard, open [**Tools**](/user-interface) from the top navigation bar, and click **Export Forms** in the left menu.

On the **Export Forms** page, you see the **JSON Export** card. Click the **Select Forms** dropdown arrow and choose the forms you want to export. You can search the list by form name or ID, and you can choose more than one form.

To export every form at once, click **Select All**. The button changes to **Deselect All** so you can clear the selection.

Once you select at least one form, click **Export JSON** to download the file. The button stays disabled until you select a form.
=======
1. Go to the Fluent Forms dashboard and open [**Tools**](/user-interface) from the top menu bar (under **More**).
2. Click **Export Forms** in the left menu.
3. Click the **Select forms** dropdown and choose the forms you want to export.
4. Click **Export JSON**.

Use **Select All** or **Deselect All** to change the selection at once. **Select All** exports every form.
>>>>>>> Stashed changes

![Export Forms page with the Select Forms dropdown highlighted](/images/import-export-migration/import-and-export-fluent-forms/export-form-01-1-scaled.webp)

## Import Fluent Forms

<<<<<<< Updated upstream
To import Fluent Forms, navigate to the **Fluent Forms** dashboard, open **Tools** from the top navigation bar, and click **Import Forms** in the left menu.

On the **JSON Import** card, click **Upload JSON** to choose a Fluent Forms export file (.json) from your computer. Fluent Forms rejects any file that is not a .json file.

If you have turned on a default form style, the **Apply default form style to imported forms** option appears. Check it to make the imported forms match your site's style instantly.
=======
1. Go to the **Fluent Forms** dashboard and open **Tools** from the top menu bar (under **More**).
2. Click **Import Forms** in the left menu.
3. Click **Upload JSON** and choose a Fluent Forms export file (.json) from your computer.
4. Click **Import JSON**.

If you enabled a Default Style Template in **Global Settings**, an **Apply default form style to imported forms** option appears. Check it to make the imported forms match your site's style.
>>>>>>> Stashed changes

> [!Note]
> To learn more about **form style templates**, see [Official Form Styler of Fluent Forms](/official-form-styler).

<<<<<<< Updated upstream
After selecting the file and configuring your options, click the **Import JSON** button. The button stays disabled until you choose a file.

=======
>>>>>>> Stashed changes
![Imported Fluent Forms](/images/import-export-migration/import-and-export-fluent-forms/Imported-Forms-scaled.webp)

> [!Note]
> An import can't give a form a higher user role than your own. If a form's user registration settings use a higher role, Fluent Forms limits the role to the one you have.

<<<<<<< Updated upstream
When the import finishes, a **Forms imported.** message appears. The card then shows how many forms were imported and lists each one with its **ID**, **Title**, and an **Edit Form** link. Click **Import another file** to import more forms. You can also find all imported forms on the **Forms** page.

If your account can't add custom code, Fluent Forms skips custom JS, CSS, and advanced date settings in the imported forms and shows a notice. Ask an administrator to add them. If nothing is imported, check that the file is a Fluent Forms export and try again.
=======
A success message confirms the import, as the screenshot below shows. All **Imported** forms also appear in the **Forms** list.
>>>>>>> Stashed changes

![Imported Fluent Forms](/images/import-export-migration/import-and-export-fluent-forms/imported-forms-03-scaled.webp)

## Related Tools

- Import submissions: [Importing Entries](/importing-entries).
- Move forms from another form plugin: [Migrate to Fluent Forms](/migrator-wpforms-contact-form-7-gravity-forms-ninja-forms-caldera-forms).
