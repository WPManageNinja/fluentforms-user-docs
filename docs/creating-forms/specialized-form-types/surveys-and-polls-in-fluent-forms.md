# Surveys and Polls in Fluent Forms

Fluent Forms offers a robust and user-friendly solution for creating surveys and polls in WordPress. With its drag-and-drop builder and pre-built templates, you can design responsive, mobile-friendly surveys with interactive features like [NPS surveys](/docs/net-promoter-score-in-fluent-forms), real-time polls, and many more.

This article will show how to create Surveys and Polls in Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/bupQGQm4Syg" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Add the Input Field

To build your survey or poll, add input fields such as:

- [Radio Fields](/docs/radio-field-in-fluent-forms)

- [Checkboxes](/docs/checkbox-field-in-fluent-forms)

- [Multiple Choice](/docs/multiple-choice-field-in-fluent-forms)

- [Dropdown Field](/docs/dropdown-field-in-fluent-forms)

- [Range Slider Field](/docs/range-slider-field-in-fluent-forms)

These fields will define the structure and interactivity of your survey or poll.

![Enable survey module](/images/creating-forms/specialized-form-types/surveys-and-polls-in-fluent-forms/01-scaled-2.webp)

### Configuring Survey Settings

Go to **Settings & Integration** from the top navbar. From the **Settings** section, scroll down to find the **Survey Result** options. 

![Add new form](/images/creating-forms/specialized-form-types/surveys-and-polls-in-fluent-forms/02-1-scaled.webp)

**Append:** Now enable the Append to append survey results to the confirmation message. 

- Append Results: Appends the survey results to the confirmation message after submission.

- Show Labels and Counts: Displays form labels and response counts when showing survey results.

If you want to display form labels and counts when displaying the survey results, turn on the **Show Label** & **Show Counts** option. Then click the **Save Settings** button.

![Survey form fields](/images/creating-forms/specialized-form-types/surveys-and-polls-in-fluent-forms/03-1-scaled-2.webp)

Copy and paste the form's shortcode into the desired page or post.

After submission, survey results will appear in **Chart** format, as shown in the screenshot below.

![Survey settings](/images/creating-forms/specialized-form-types/surveys-and-polls-in-fluent-forms/04-scaled-2.webp)

### Displaying Survey Results on a Page

You can customize how survey results appear on a dedicated page using shortcodes.

#### Single Field

Using a custom shortcode, you can create a new page showing the customized result. For example, if you want to show only the checkbox field, you can use the **checkbox field's name attribute** inside the **field_name quotation**.

Also, specify if you want to show the **Label** and **Total Count**. Below the shortcode, the label is hidden, and the total count will be displayed.

`[[fluentform_survey form_id="1" label='no' counts='yes' field_name='input_radio']]`

- form_id: The ID of the form.

- label: Set to 'yes' to display labels or 'no' to hide them.

- counts: Set to 'yes' to display response counts.

- field_name: The name attribute of the field to display results for.

Now, create a new page and paste customized shortcodes on that page.

#### Multiple Field

If you want to show multiple fields, you can use the **Name Attribute** of each field using a comma. 

See the below-customized shortcode, which includes multiple fields by separating their **Name Attributes** with commas.

`[[fluentform_survey form_id="89" label='yes' counts='yes' field_name='input_radio','checkbox']]`

![Survey form preview](/images/creating-forms/specialized-form-types/surveys-and-polls-in-fluent-forms/05.webp)
