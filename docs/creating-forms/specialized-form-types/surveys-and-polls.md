# Surveys and Polls

Fluent Forms offers a robust and user-friendly solution for creating surveys and polls in WordPress. With its drag-and-drop builder and pre-built templates, you can design responsive, mobile-friendly surveys with interactive features like [NPS surveys](/net-promoter-score), real-time polls, and many more.

This article will show how to create Surveys and Polls in Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/bupQGQm4Syg" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add the Input Field

To build your survey or poll, add input fields such as:

- [Radio Fields](/radio-field)
- [Checkboxes](/checkbox-field)
- [Multiple Choice](/multiple-choice-field)
- [Dropdown Field](/dropdown-field)
- [Range Slider Field](/range-slider-field)

These fields will define the structure and interactivity of your survey or poll.

![Enable survey module](/images/creating-forms/specialized-form-types/surveys-and-polls/01-scaled-2.webp)

## Configuring Survey Settings

Go to **Settings & Integration** from the top navbar. From the **Settings** section, scroll down to find the **Survey Result** options. 

![Add new form](/images/creating-forms/specialized-form-types/surveys-and-polls/02-1-scaled.webp)

**Append:** Now enable the Append to append survey results to the confirmation message. 

- **Append Results:** Appends the survey results to the confirmation message after submission.

- **Show Labels and Counts:** Displays form labels and response counts when showing survey results.

If you want to display form labels and counts when displaying the survey results, turn on the **Show Label** & **Show Counts** option. Then click the **Save Settings** button.

![Survey form fields](/images/creating-forms/specialized-form-types/surveys-and-polls/03-1-scaled-2.webp)

**Copy** and **paste** the form's shortcode into the desired page or post.

After submission, survey results will appear in **Chart** format, as shown in the screenshot below.

![Survey settings](/images/creating-forms/specialized-form-types/surveys-and-polls/04-scaled-2.webp)

## Displaying Survey Results on a Page

You can customize how survey results appear on a dedicated page using shortcodes.

### Single Field

Using a custom shortcode, you can create a new page showing the customized result. For example, if you want to show only the checkbox field, you can use the **checkbox field's name attribute** inside the **field_name quotation**.

Also, specify if you want to show the **Label** and **Total Count**. In the example below, labels are hidden and response counts are shown.

Copy and paste this shortcode into your page or post (replace `1` with your form ID and `input_radio` with your field’s **name attribute**):

```
[fluentform_survey form_id="1" label='no' counts='yes' field_name='input_radio']
```

* **form_id:** Your form ID.
* **label:** `yes` to show labels, `no` to hide them.
* **counts:** `yes` to show response counts, `no` to hide them.
* **field_name:** The field’s **name attribute** (for example `input_radio`).

Now, create a new page and paste customized shortcodes on that page.

### Multiple Field

If you want to show multiple fields, you can use the **Name Attribute** of each field using a comma. 

Copy and paste this shortcode to show results for multiple fields (separate **name attributes** with commas):

```
[fluentform_survey form_id="89" label='yes' counts='yes' field_name='input_radio','checkbox']
```

![Survey form preview](/images/creating-forms/specialized-form-types/surveys-and-polls/05.webp)
