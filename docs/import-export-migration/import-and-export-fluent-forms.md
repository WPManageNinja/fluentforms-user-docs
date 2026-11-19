---
description: "The Fluent Forms import/export feature allows you to migrate your forms to another site with a few clicks, saving you the need to create a form again from…"
---

# Import and Export Fluent Forms

The Fluent Forms import/export feature allows you to migrate your forms to another site with a few clicks, saving you the need to [create a form](/create-a-form) again from scratch. 

Follow these simple steps to migrate your forms efficiently.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/nTJ1gm5s5OM" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Export Fluent Form

Go to the Fluent Forms dashboard, open [**Tools**](/user-interface) from the top navigation bar, and click **Export Forms** in the left menu.

On the **Export Forms** page, you see the **JSON Export** card. Click the **Select Forms** dropdown arrow and choose the forms you want to export. You can search the list by form name or ID, and you can choose more than one form.

To export every form at once, click **Select All**. The button changes to **Deselect All** so you can clear the selection.

Once you select at least one form, click **Export JSON** to download the file. The button stays disabled until you select a form.

![Export Forms page with the Select Forms dropdown highlighted](/images/import-export-migration/import-and-export-fluent-forms/export-form-01-1-scaled.webp)

## Import Fluent Forms

To import Fluent Forms, navigate to the **Fluent Forms** dashboard, open **Tools** from the top navigation bar, and click **Import Forms** in the left menu.

On the **JSON Import** card, click **Upload JSON** to choose a Fluent Forms export file (.json) from your computer. Fluent Forms rejects any file that is not a .json file.

If you have turned on a default form style, the **Apply default form style to imported forms** option appears. Check it to make the imported forms match your site's style instantly.

> [!Note]
> To learn more about **form style templates**, see [Official Form Styler of Fluent Forms](/official-form-styler).

After selecting the file and configuring your options, click the **Import JSON** button. The button stays disabled until you choose a file.

![Imported Fluent Forms](/images/import-export-migration/import-and-export-fluent-forms/Imported-Forms-scaled.webp)

> [!Note]
> An import can't give a form a higher user role than your own. If a form's user registration settings use a higher role, Fluent Forms limits the role to the one you have.

When the import finishes, a **Forms imported.** message appears. The card then shows how many forms were imported and lists each one with its **ID**, **Title**, and an **Edit Form** link. Click **Import another file** to import more forms. You can also find all imported forms on the **Forms** page.

If your account can't add custom code, Fluent Forms skips custom JS, CSS, and advanced date settings in the imported forms and shows a notice. Ask an administrator to add them. If nothing is imported, check that the file is a Fluent Forms export and try again.

![Imported Fluent Forms](/images/import-export-migration/import-and-export-fluent-forms/imported-forms-03-scaled.webp)

With these steps, you can easily migrate your forms between sites without needing to recreate them from scratch.
