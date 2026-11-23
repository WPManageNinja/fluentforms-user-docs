---
description: "Fluent Forms lets you translate the Datepicker of the Date/Time field (month names, weekdays, AM/PM, and other text) with a filter in your theme’s functions.php file."
---

# Translate Datepicker Field

You can **translate the Datepicker UI** of the [Date/Time field](/time-date-input-field) (month names, weekdays, AM/PM) with custom code in your **theme’s functions.php** file. This guide shows you how to translate the Datepicker into another language, such as German, French, or Spanish.

## Access the Theme Editor

1. Log in to your **WordPress Dashboard**.
2. Hover over **Appearance** and select **Theme File Editor**.
3. Open the **functions.php** file of your theme.

>[!Note]
> Use a child theme to avoid losing changes during updates.

![functions.php File](/images/advanced-developer/localization/translate-datepicker-field/function.php-file-01-scaled.webp)

### How the Filter Works

The `fluentform/date_i18n` filter gives you the full list of Datepicker text. You change only the parts you need and return the list. Each snippet below changes one part, so you can use them together.

### Translate Month Names

To change the name of the months in the date picker, add the code below to your theme's **functions.php** file. You can paste the code at the end.

```
add_filter('fluentform/date_i18n', function ($strings) {
    $strings['months'] = [
        'shorthand' => [
            __('Jan', 'fluentform'),
            __('Feb', 'fluentform'),
            __('Mar', 'fluentform'),
            __('Apr', 'fluentform'),
            __('May', 'fluentform'),
            __('Jun', 'fluentform'),
            __('Jul', 'fluentform'),
            __('Aug', 'fluentform'),
            __('Sep', 'fluentform'),
            __('Oct', 'fluentform'),
            __('Nov', 'fluentform'),
            __('Dec', 'fluentform')
        ],
        'longhand'  => [
            __('January', 'fluentform'),
            __('February', 'fluentform'),
            __('March', 'fluentform'),
            __('April', 'fluentform'),
            __('May', 'fluentform'),
            __('June', 'fluentform'),
            __('July', 'fluentform'),
            __('August', 'fluentform'),
            __('September', 'fluentform'),
            __('October', 'fluentform'),
            __('November', 'fluentform'),
            __('December', 'fluentform')
        ],
    ];

    return $strings;
});
```

You can change the months' shorthand and longhand as needed. You can also replace the month names (“January”) with translations in your language.

For example, if you want to translate this into German, you might change “October” to “Oktober” for the longhand and “Oct” to “Okt” for the shorthand.

### Translate Weekdays

Let's translate the weekday shorthand and longhand forms. This is identical to changing the months above. Add the code below to your child theme's **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {
    $strings['weekdays'] = [
        'longhand'  => [
            __('Sunday', 'fluentform'),
            __('Monday', 'fluentform'),
            __('Tuesday', 'fluentform'),
            __('Wednesday', 'fluentform'),
            __('Thursday', 'fluentform'),
            __('Friday', 'fluentform'),
            __('Saturday', 'fluentform')
        ],
        'shorthand' => [
            __('Sun', 'fluentform'),
            __('Mon', 'fluentform'),
            __('Tue', 'fluentform'),
            __('Wed', 'fluentform'),
            __('Thu', 'fluentform'),
            __('Fri', 'fluentform'),
            __('Sat', 'fluentform')
        ],
    ];

    return $strings;
});
```

Change both the shorthand and longhand weekdays as needed. If you want to translate this into German, you might change “Thursday” to “Donnerstag” for the longhand and “Thu” to “Do” for the shorthand.

### Translate AM and PM

Let's look at the AM and PM translations. They work the same way as the months and weekdays. Add the code below to your child theme's **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {
    $strings['amPM'] = [
        __('AM', 'fluentform'),
        __('PM', 'fluentform'),
    ];

    return $strings;
});
```

Now change AM and PM to your language as needed. For the German translation, you might change “AM” to “vorm.” and “PM” to “nachm.”.

### Translate Other Datepicker Text

The Datepicker also shows a few other text items, such as the separator in a date range, the week label, and the hover tips. Add the code below to translate them.

```
add_filter('fluentform/date_i18n', function ($strings) {
    $strings['rangeSeparator']   = __(' to ', 'fluentform');
    $strings['weekAbbreviation'] = __('Wk', 'fluentform');
    $strings['scrollTitle']      = __('Scroll to increment', 'fluentform');
    $strings['toggleTitle']      = __('Click to toggle', 'fluentform');
    $strings['yearAriaLabel']    = __('Year', 'fluentform');

    return $strings;
});
```

Replace each English text with your own language. For German, you might change “ to ” to “ bis ” and “Wk” to “KW”.

>[!Note]
> The first day of the week comes from your WordPress settings. To change it, go to **Settings** → **General** and choose a day in **Week Starts On**.

### Combine All Translations

After that, you can combine the codes above into one filter for simplicity. Use the code below once to translate the months, weekdays, AM/PM, and the other text without adding each code individually.

```
add_filter('fluentform/date_i18n', function ($strings) {
    $strings['months'] = [
        'shorthand' => [
            __('Jan', 'fluentform'),
            __('Feb', 'fluentform'),
            __('Mar', 'fluentform'),
            __('Apr', 'fluentform'),
            __('May', 'fluentform'),
            __('Jun', 'fluentform'),
            __('Jul', 'fluentform'),
            __('Aug', 'fluentform'),
            __('Sep', 'fluentform'),
            __('Oct', 'fluentform'),
            __('Nov', 'fluentform'),
            __('Dec', 'fluentform')
        ],
        'longhand'  => [
            __('January', 'fluentform'),
            __('February', 'fluentform'),
            __('March', 'fluentform'),
            __('April', 'fluentform'),
            __('May', 'fluentform'),
            __('June', 'fluentform'),
            __('July', 'fluentform'),
            __('August', 'fluentform'),
            __('September', 'fluentform'),
            __('October', 'fluentform'),
            __('November', 'fluentform'),
            __('December', 'fluentform')
        ],
    ];

    $strings['weekdays'] = [
        'longhand'  => [
            __('Sunday', 'fluentform'),
            __('Monday', 'fluentform'),
            __('Tuesday', 'fluentform'),
            __('Wednesday', 'fluentform'),
            __('Thursday', 'fluentform'),
            __('Friday', 'fluentform'),
            __('Saturday', 'fluentform')
        ],
        'shorthand' => [
            __('Sun', 'fluentform'),
            __('Mon', 'fluentform'),
            __('Tue', 'fluentform'),
            __('Wed', 'fluentform'),
            __('Thu', 'fluentform'),
            __('Fri', 'fluentform'),
            __('Sat', 'fluentform')
        ],
    ];

    $strings['amPM'] = [
        __('AM', 'fluentform'),
        __('PM', 'fluentform'),
    ];

    $strings['rangeSeparator']   = __(' to ', 'fluentform');
    $strings['weekAbbreviation'] = __('Wk', 'fluentform');
    $strings['scrollTitle']      = __('Scroll to increment', 'fluentform');
    $strings['toggleTitle']      = __('Click to toggle', 'fluentform');
    $strings['yearAriaLabel']    = __('Year', 'fluentform');

    return $strings;
});
```

When you use the combined code, you don't need multiple **add_filter** functions and return statements. The `__()` function reads the plugin's text domain, so type your translated words in place of the English ones.

After adding the code, click the **Update file** button to save the **functions.php** file.

Now your Fluent Forms Datepicker displays in your selected language! To translate the rest of your form fields and labels, see [Translate Forms with WPML](/translate-forms-with-wpml).
