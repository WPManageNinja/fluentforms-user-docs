---
description: "Translating your Fluent Forms into multiple languages is easy with WPML, no technical expertise required."
---

# Translate Forms with WPML

WPML lets you translate your Fluent Forms into multiple languages without technical expertise. This guide shows you how to make your forms available to users in any language.

**Requirements:** Install and activate these plugins on your WordPress site first.

- Fluent Forms
- WPML Core Plugin (requires a paid license)
- WPML String Translation Add-on (requires a paid license)
- Fluent Forms Connector for WPML

## Add Languages in WPML

1. Go to **WPML > Languages** in the WordPress sidebar.
2. Under **Site Language Settings**, click **Add/Remove Languages**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/01-2.webp)

3. Select the languages you want to use for your form. You can choose more than one.
4. Click **Save**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/02-3.webp)

5. In the **Language URL format** settings, choose **Different languages in directories**.
6. Click **Save**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/03-2.webp)

## Enable Translation for Your Form

1. Go to **Forms** in the Fluent Forms top menu.
2. Open the form you want to translate and go to its **Configuration** tab.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/04-2.webp)

3. Click **Translations using WPML** in the left sidebar.
4. Turn on **Enable Translation for this form** and save.

The page also shows a **Reset WPML Translation** button. It removes all existing translations for this form.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/05-3.webp)

## Send Your Form for Translation

1. Go to **WPML > Translation Management** in the WordPress sidebar. The page lists translatable pages, posts, and other content.
2. To see only forms, use the filter in the top menu and choose **Fluent Forms**.
3. Select the form you want to translate.
4. Under Translation Options, choose **Translate Myself**.
5. Click **Add to Translation Queue**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/06-2.webp)

## Translate the Form Fields

Go to **WPML > Translations** in the WordPress sidebar to open the Translation Queue. Click **Translate** next to the form you added.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/07.webp)

The left side lists all the fields of your form. Enter the translation for each field on the right side. Save each field after you translate it: click **Save and Complete** in the pop-up.

When all fields are translated, the progress bar reaches 100%. Click **Complete Translation** to finish.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/08-2.webp)

## Translate the Page Where the Form is Embedded

After you translate the form fields, translate the page where the form is embedded.

1. Go to **Pages** in your WordPress Dashboard and find the page with the embedded form.
2. Click the **Plus (+)** icon to start translating that page.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/09-2.webp)

The editor shows an option to translate the page name. Depending on your page content, you might see other fields too.

Translate the page the same way you translated the form. Enter your translation in the field on the right, then click **Save and Complete**. When you finish, click **Complete Translation**.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/10.webp)

Your translation is complete. Preview it on the front end.

## See the Translated Form in Action

Go to the page where your form is embedded. At the bottom of the page, WPML adds two language buttons. Click a language button to switch languages.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/11.webp)

The form now shows the translation you entered.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/12.webp)

> WPML does not handle the Datepicker UI (month names, weekdays, AM/PM). To localize it, see [Translate Datepicker Field of Fluent Forms](/translate-datepicker-field).

### Troubleshooting & Important Notes

#### 1. Translation Toggle Not Visible in Form Settings?

Make sure the **Fluent Forms Connector for WPML** plugin is installed and activated.

#### 2. Translated Form Not Showing on Frontend?

Check that both of these are true:

- The form fields are 100% translated.
- The page containing the form is also translated and marked as “Complete.”

#### 3. Some Fields Not Showing in Translation Editor?

Resave your form. Make sure translation is enabled under **Configuration > Translations using WPML**.

#### 4. Resetting Translations?

Use **Reset WPML Translation** in the Form Settings with care. It removes all existing translations for that form.
