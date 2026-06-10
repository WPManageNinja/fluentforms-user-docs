# Translate Datepicker Field

Fluent Forms allows you to **translate the Datepicker UI** of the [Date/Time field](/time-date-input-field) (month names, weekdays, AM/PM) by adding custom code to your **theme’s functions.php** file.

This guide walks you through translating the Datepicker into your desired language (e.g., German, French, Spanish, etc.).

## Access the Theme Editor

First, log in to your **WordPress Dashboard**. Then, hover over the **Appearance** and select the **Theme file Editor** options.

Now, open the functions.php file of your theme. 

>[!Note]
> Use a child theme to avoid losing changes during updates.

![functions.php File](/images/advanced-developer/localization/translate-datepicker-field/function.php-file-01-scaled.webp)

### Translate Month Names

To change the name of the months of the date picker, add the code below to your theme's **functions.php** file. You can paste the code at the end.

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

You can change the months' shorthand and longhand as needed. You can also replace the month names ( "January") with translations in your language.

For example, if you want to translate this into German, you might want to change “October” to “Oktober” for the longhand and “Oct” to **“Okt”** for the shorthand.

### Translate Weekdays

Let's translate the weekday shorthand and longhand forms. This is identical to changing the months above. Add the code below to your child themes **function.php** file.

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

Change both shorthand and longhand on the weekdays as needed. So if you want to translate this to German, you might want to change “Thursday” to “Donnerstag” for the longhand and “Sun” as “Don” for the shorthand.

You can also replace the weekday names ( "Sunday") with translations in your language.

### Translate AM and PM

Let's take a look at the AM and PM translations. They're also identical to the months and weekdays translation described earlier. Add the code below to your child themes' **functions.php** file.

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

Now, change the AM and PM to your language as needed. For the German translation, you might want to change “AM” to “Uhr morgens” and “PM” to “Uhr.”

You can replace "AM" and "PM" with your preferred terms ( "Uhr morgens" and "Uhr" in German).

### Combine All Translations

After that, you can combine the above codes into one filter for simplicity. You can use the code below once to translate all of the months, weeks, and AM-PM without using the code for them individually.

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

When using combined code, you don’t need to write multiple **add_filter** functions and return statements.

After adding the code, click the **Update file** button to save the **functions.php** file.

Now your Fluent Forms Datepicker will display in your selected language! To translate the rest of your form fields and labels, see [Translate Forms with WPML](/translate-forms-with-wpml).
