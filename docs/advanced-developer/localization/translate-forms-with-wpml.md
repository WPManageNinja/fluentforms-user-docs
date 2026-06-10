# Translate Forms with WPML

Translating your Fluent Forms into multiple languages is easy with WPML, no technical expertise required. This guide will walk you through the straightforward steps to make your forms accessible to users in any language.

Before you begin: ensure that you have the necessary plugins installed and activated on your WordPress site.

**Add Languages in WPML:**

- Fluent Forms

- WPML Core Plugin (requires a paid license)

- WPML String Translation Add-on (requires a paid license)

- Fluent Forms Connector for WPML

Once everything is ready, you’re just a few clicks away from creating a seamless multilingual form experience.

## Add Languages in WPML

First, go to **WPML > Languages** from the WordPress sidebar. Under the **Site Language Settings**, click on **Add/Remove Languages** and choose the language(s) you want to use for translating your form.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/01-2.webp)

Here, you’ll see a list of available languages. Simply select the language(s) you want to use for your form. You can choose multiple languages if needed. Once done, click the **Save** button to apply the changes.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/02-3.webp)

Next, you’ll see the **Language URL format** settings. From here, choose the **Different languages in directories** option and click **Save** to apply the changes.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/03-2.webp)

### Enable Translation for Your Form

To enable translation for a specific form, first go to **Forms** from the Fluent Forms navbar. Then, open the **Settings** of the form you want to translate.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/04-2.webp)

When you’re in the form’s settings, click on **WPML Translations** from the left sidebar. Then, toggle on the **Enable Translation for this Form** option and hit the **Save Settings** button.

You’ll also see a **Reset WPML Translation** button here. Clicking it will remove all existing translations for this form.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/05-3.webp)

### Send Your Form for Translation

Start translating your form into another language, go to **WPML > Translation Management** from the WordPress sidebar. Here, you’ll see a list of translatable pages, posts, and other content.

To focus only on Fluent Forms, you can use the filter at the top menu and choose **Fluent Forms**. This will display only the forms that are available for translation.

Next, select the form you want to translate. Then, under the Translation Options, choose **Translate Myself** and click the **Add to Translation Queue** button.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/06-2.webp)

### Translate the Form Fields

To access the Translation Queue, navigate to **WPML > Translations** from the WordPress sidebar. Here, you’ll find the form you previously added to the queue. Click the **Translate** button next to the form to begin translating it.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/07.webp)

Now, on the left side, you’ll see all the fields of your form. On the right side, enter the translation for each field. Make sure to save each field individually after translating it by clicking on the **Save and Complete** button in the pop-up. 

Once all fields are translated, the progress bar will reach 100%. Now, click the **Complete Translation** button to finish the translation. 

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/08-2.webp)

### Translate the Page Where the Form is Embedded

After translating the form fields, you’ll need to translate the page where your Fluent Forms form is embedded. To do this, go to **Pages** in your WordPress Dashboard and find the page containing the embedded form.

Next, click the **Plus (+)** icon button to start translating that page.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/09-2.webp)

Now, you’ll see an option to translate the page name. (You might also see other fields here, depending on your page content.)

Translate the page just like you did with the form. Enter your translation in the field on the right, then click **Save and Complete**.

If you’ve finished translating the page, click the **Complete Translation** button to finalize.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/10.webp)

Great! Your translation is complete. Now you can preview it on the frontend to see how it looks.

### See the Translated Form in Action

Go to the page where your form is embedded. At the bottom of the page, you’ll see two buttons that WPML adds for language selection. Simply click on the language button you prefer to switch languages.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/11.webp)

After that, you’ll see that your form has been translated into the language you provided in the form.

![Translate Forms with WPML step](/images/advanced-developer/localization/translate-forms-with-wpml/12.webp)

> The Datepicker UI (month names, weekdays, AM/PM) is not handled by WPML. To localize it, see [Translate Datepicker Field of Fluent Forms](/translate-datepicker-field).

### Troubleshooting & Important Notes

#### 1. Translation Toggle Not Visible in Form Settings?

Make sure the **Fluent Forms Connector for WPML** plugin is installed and activated.

#### 2. Translated Form Not Showing on Frontend?

Double-check that both:

- The form fields are 100% translated.

- The page containing the form is also translated and marked as “Complete.”

#### 3. Some Fields Not Showing in Translation Editor?

Resave your form and ensure it’s enabled for WPML translation under **Form Settings > WPML Translations**.

#### 4. Resetting Translations?

Use the **Reset WPML Translation** option inside the Form Settings carefully. It will remove all existing translations for that form.
