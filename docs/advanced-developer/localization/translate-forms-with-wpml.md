---
description: "Translate your Fluent Forms into multiple languages with WPML. Enable translation for a form, translate its fields and page, then preview it on the front end."
---

# Translate Forms with WPML

Translating your Fluent Forms into multiple languages is easy with **WPML**, and you need no technical expertise. This guide walks you through the steps to make your forms available to users in any language.

Before you begin, make sure you have the necessary plugins installed and activated on your WordPress site.

- Fluent Forms
- **WPML Core Plugin** (requires a paid license)
- **WPML String Translation Add-on** (requires a paid license)
- **Fluent Forms Connector for WPML**

Once everything is ready, you are just a few clicks away from a multilingual form experience.

## Add Languages in WPML

First, go to **WPML > Languages** in the WordPress sidebar. Under **Site Language Settings**, click **Add/Remove Languages**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/01-2.webp)

Here, you see a list of available languages. Select the language(s) you want to use for your form. You can choose more than one. Once done, click **Save** to apply the changes.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/02-3.webp)

Next, you see the **Language URL format** settings. Choose **Different languages in directories** and click **Save**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/03-2.webp)

## Enable Translation for Your Form

To enable translation for a specific form, go to **Forms** in the Fluent Forms top menu. Then open the form you want to translate and click its **Configuration** tab.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/04-2.webp)

In the left sidebar, open **Integrations & Add-ons** and click **WPML Translations**. Then turn on **Enable Translation for this form** and click **Save**.

You also see a **Reset WPML Translation** button on this page. It removes all existing translations for this form.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/05-3.webp)

## Send Your Form for Translation

To start translating your form, go to **WPML > Translation Management** in the WordPress sidebar. Here, you see a list of translatable pages, posts, and other content.

To focus only on Fluent Forms, use the filter in the top menu and choose **Fluent Forms**. This shows only the forms that are available for translation.

Next, select the form you want to translate. Then, under **Translation Options**, choose **Translate Myself** and click **Add to Translation Queue**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/06-2.webp)

## Translate the Form Fields

To open the Translation Queue, go to **WPML > Translations** in the WordPress sidebar. Here, you find the form you added to the queue. Click **Translate** next to the form to begin.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/07.webp)

On the left side, you see all the fields of your form. On the right side, enter the translation for each field. Save each field after you translate it by clicking **Save and Complete** in the pop-up.

When all fields are translated, the progress bar reaches 100%. Now click **Complete Translation** to finish.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/08-2.webp)

## Translate the Page Where the Form is Embedded

After you translate the form fields, you need to translate the page where your form is embedded. Go to **Pages** in your WordPress Dashboard and find the page that contains the form.

Next, click the **Plus (+)** icon to start translating that page.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/09-2.webp)

Now, you see an option to translate the page name. You might also see other fields here, depending on your page content.

Translate the page just like you did with the form. Enter your translation in the field on the right, then click **Save and Complete**. When you finish, click **Complete Translation**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/10.webp)

Great! Your translation is complete. Now you can preview it on the front end.

## See the Translated Form in Action

Go to the page where your form is embedded. At the bottom of the page, you see the language buttons that WPML adds. Click the language you prefer to switch languages.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/11.webp)

After that, you see your form in the language you provided.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/12.webp)

>[!Note]
> WPML does not handle the Datepicker UI (month names, weekdays, AM/PM). To localize it, see [Translate Datepicker Field](/translate-datepicker-field).

## Troubleshooting and Important Notes

### Translation Toggle Not Visible in Form Settings?

Make sure the **Fluent Forms Connector for WPML** plugin is installed and activated.

### Translated Form Not Showing on the Front End?

Double-check that both of these are true:

- The form fields are 100% translated.
- The page that contains the form is also translated and marked as **Complete**.

### Some Fields Not Showing in the Translation Editor?

Resave your form. Then make sure translation is enabled under **Configuration > Integrations & Add-ons > WPML Translations**.

### Resetting Translations?

Use the **Reset WPML Translation** button with care. It removes all existing translations for that form.
