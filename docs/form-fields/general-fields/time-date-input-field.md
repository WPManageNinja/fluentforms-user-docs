---
description: "The Time & Date field in Fluent Forms allows users to select and submit date and time values."
---

# Time & Date Input Field

The **Time & Date** field in **Fluent Forms** lets users **select** and **submit date and time values**. You can customize the **date format, field behavior,** and **advanced options** to match your needs.

This guide shows you how to add and customize the **Time & Date Field** in Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/vvaIfZeSJm4" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Time & Date Field

Go to **Forms** in the Fluent Forms navbar. Click the title of the form you want to edit to open the form editor.

![Edit Time & Date Input](/images/form-fields/general-fields/time-date-input-field/form-edit-01-scaled.webp)

In the editor, click the **Plus Icon** and open the **General Fields** module. You can also find **General Fields** in the right sidebar under the **Input Fields** tab.

Click the **Time & Date** field, or drag and drop it into your editor.

![Adding Time Date](/images/form-fields/general-fields/time-date-input-field/adding-time-date-02-scaled.webp)

## Customizing the Time & Date Field

Hover over the field and click the **Pencil Icon**. The **Customize** tab opens on the right side with these options:

- Time & Date Field Options

- Advanced Options

![Customize Fluent Forms](/images/form-fields/general-fields/time-date-input-field/input-customization-03-20-scaled.webp)

### Time & Date Field options

These options in the **Customize** tab configure the **Time & Date** input field.

**A. Element Label:** The field title users see when they fill out the **Time & Date** field. Enter text that explains the field's purpose.

**B. Label Placement:** Set where the label appears. The options are **Default**, **Top**, **Right**, **Bottom**, **Left**, and **Hide Label**. **Default** uses your global label placement settings.

**C. Admin Field Label:** The admin field label is a title shown only to admins. Use it to show a different label when admins view form submissions.

**D. Placeholder:** Set the text shown while the field is empty, so users know what to enter. This is the HTML input placeholder attribute.

**E. Date Format:** Select a date format from the drop-down menu.

**F. Required:** Choose whether users can submit the form with this field empty.

![Time Date Options](/images/form-fields/general-fields/time-date-input-field/Time-Date-options-04-scaled.webp)

### Advanced Options

Advanced settings let you adapt the field to specific use cases.

**A. Autocomplete:** Choose a value that tells the browser what the field collects, so it can offer saved details. Options are **Automatic**, **off**, **None**, or a specific value. To learn more, read [Autocomplete for Form Fields](/autocomplete-for-form-fields).

**B. Default Value:** Set a fixed value, or use shortcodes to pre-fill the field dynamically. You can add default values with the **Three-Dot** option from the right side. To learn more, read [Dynamic Default Value in Fluent Forms](/dynamic-default-value).

**C. Container Class:** Add custom CSS classes to the field’s wrapper.

**D. Element Class:** Add custom CSS classes to the input field.

**E. Help Message:** Add text that appears as a help message for the user.

**F. Name Attribute:** The input field’s name attribute is the HTML equivalent of the same name. You do not need to change it.

**G. Advanced Date Configuration:** Fluent Forms uses the [**Flatpickr**](https://flatpickr.js.org/) **JavaScript library** for the **Date & Time Picker**. Advanced users can change field settings with a custom configuration object.

> [!Note]
> **Advanced Date Configuration** is a Pro feature. Only administrators can edit it. Enter a plain JSON object only. Functions and comments are not supported, and Fluent Forms removes any configuration that is not valid JSON when you save.

For example, you can set the first day of the week. By default, the week starts on **Sunday**. To start on **Monday**, use this custom code:

```
{
    "locale": {
        "firstDayOfWeek": 1
    }
}
```

**Available options** (options that take a function are not supported)

| Config Option | Type | Default | Description |
|---|---|---|---|
| altFormat | String | “F j, Y” | Exactly the same as date format, but for the altInput field |
| altInput | Boolean | false | Show the user a readable date (as per altFormat), but return something totally different to the server. |
| altInputClass | String | “” | This class will be added to the input element created by the altInput option.  Note that altInput already inherits classes from the original input. |
| allowInput | Boolean | false | Allows the user to enter a date directly into the input field. By default, direct entry is disabled. |
| ariaDateFormat | String | “F j, Y” | Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud. |
| clickOpens | Boolean | true | Whether clicking on the input should open the picker. You could disable this if you wish to open the calendar manually with.open() |
| dateFormat | String | “Y-m-d” | A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in the table below. |
| defaultDate | String | null | Sets the initial selected date(s).If you’re using mode: "multiple" or a range calendar, supply an Array of Date objects or an Array of date strings which follow your dateFormat.Otherwise, you can supply a single Date object or a date string. |
| defaultHour | Number | 12 | Initial value of the hour element. |
| defaultMinute | Number | 0 | Initial value of the minute element. |
| disable | Array | [] | See Disabling dates |
| disableMobile | Boolean | false | Set disableMobile to true to always use the non-native picker.By default, flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used. |
| enable | Array | [] | See Enabling dates |
| enableTime | Boolean | false | Enables time picker |
| enableSeconds | Boolean | false | Enables seconds in the time picker. |
| hourIncrement | Integer | 1 | Adjusts the step for the hour input (incl. scrolling) |
| inline | Boolean | false | Displays the calendar inline |
| maxDate | String/Date | null | The maximum date that a user can pick to (inclusive). |
| minDate | String/Date | null | The minimum date that a user can start picking from (inclusive). |
| minuteIncrement | Integer | 5 | Adjusts the step for the minute input (incl. scrolling) |
| mode | String | “single” | "single", "multiple", or "range" |
| nextArrow | String | > | HTML for the arrow icon, used to switch months. |
| noCalendar | Boolean | false | Hides the day selection in the calendar.Use it along with enableTime to create a time picker. |
| position | String | “auto” | Where the calendar is rendered relative to the input."auto", "above" or "below" |

**H. Conditional Logic:** Create rules that show or hide the field based on submission values. To learn more, read [Set up Forms with Conditional Logic in Fluent Forms](/set-up-forms-with-conditional-logic).

![Advanced Options Fluent Forms](/images/form-fields/general-fields/time-date-input-field/Advanced-Options-05-15-scaled.webp)

### Preview of Added Time & Date Field

Here is the form with the **Time & Date** field added.

![Preview Time & Date Input](/images/form-fields/general-fields/time-date-input-field/Preview-form-07-2.webp)
