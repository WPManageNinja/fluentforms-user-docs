---
description: "Fluent Forms allows you to translate the Datepicker UI of the Date/Time field (month names, weekdays, AM/PM) by adding custom code to your theme’s…"
---

# Translate Datepicker Field

You can **translate the Datepicker UI** of the [Date/Time field](/time-date-input-field) (month names, weekdays, AM/PM) with custom code in your **theme’s functions.php** file. This guide shows you how to translate the Datepicker into another language, such as German, French, or Spanish.

## Access the Theme Editor

1. Log in to your **WordPress Dashboard**.
2. Hover over **Appearance** and select **Theme File Editor**.
3. Open the **functions.php** file of your theme.

>[!Note]
> Use a child theme to avoid losing changes during updates.

> [!Warning]
> Each snippet in the next three sections replaces the result of the others. To translate months, weekdays, and AM/PM together, use only the snippet in **Combine All Translations**.

![functions.php File](/images/advanced-developer/localization/translate-datepicker-field/function.php-file-01-scaled.webp)

### Translate Month Names

To change the month names in the date picker, paste the code below at the end of your theme's **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'months'           => [

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

        ]

    ],

);

return $strings;

});
```

Change the shorthand and longhand month names as needed. For German, change “October” to “Oktober” for the longhand and “Oct” to **“Okt”** for the shorthand.

### Translate Weekdays

Translate the weekday shorthand and longhand forms the same way. Add the code below to your child theme's **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'weekdays'         => [

        'longhand'  => array(

            __('Sunday', 'fluentform'),

            __('Monday', 'fluentform'),

            __('Tuesday', 'fluentform'),

            __('Wednesday', 'fluentform'),

            __('Thursday', 'fluentform'),

            __('Friday', 'fluentform'),

            __('Saturday', 'fluentform')

        ),

        'shorthand' => array(

            __('Sun', 'fluentform'),

            __('Mon', 'fluentform'),

            __('Tue', 'fluentform'),

            __('Wed', 'fluentform'),

            __('Thu', 'fluentform'),

            __('Fri', 'fluentform'),

            __('Sat', 'fluentform')

        )

    ],

);

return $strings;

});
```

Change both the shorthand and longhand weekday names as needed. For German, change “Thursday” to “Donnerstag” for the longhand and “Thu” to “Do” for the shorthand.

### Translate AM and PM

Translate AM and PM the same way. Add the code below to your child theme's **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'amPM'             => [

    __('AM', 'fluentform'),

    __('PM', 'fluentform')

    ],

);

return $strings;

});
```

Change AM and PM to your language as needed. For German, use “vorm.” for “AM” and “nachm.” for “PM”.

### Combine All Translations

Combine the codes above into one filter. Use the code below once to translate the months, weekdays, and AM/PM together.

```
add_filter('fluentform/date_i18n', function ($strings) {

     $strings = array(

            'months'           => [

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

                ]

            ],

            'weekdays'         => [

                'longhand'  => array(

                    __('Sunday', 'fluentform'),

                    __('Monday', 'fluentform'),

                    __('Tuesday', 'fluentform'),

                    __('Wednesday', 'fluentform'),

                    __('Thursday', 'fluentform'),

                    __('Friday', 'fluentform'),

                    __('Saturday', 'fluentform')

                ),

                'shorthand' => array(

                    __('Sun', 'fluentform'),

                    __('Mon', 'fluentform'),

                    __('Tue', 'fluentform'),

                    __('Wed', 'fluentform'),

                    __('Thu', 'fluentform'),

                    __('Fri', 'fluentform'),

                    __('Sat', 'fluentform')

                )

            ],

            'amPM'             => [

                __('AM', 'fluentform'),

                __('PM', 'fluentform')

            ],

        );

    return $strings;

});
```

The `__()` function reads the plugin's text domain, so type your translated words in place of the English ones. The combined code needs only one **add_filter** function and one return statement.

Click **Update file** to save the **functions.php** file. The Fluent Forms Datepicker now displays in your selected language.

To translate the rest of your form fields and labels, see [Translate Forms with WPML](/translate-forms-with-wpml).
