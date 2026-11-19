---
description: "Fluent Forms offers a solution for creating surveys and polls in WordPress."
---

# Surveys and Polls

Fluent Forms lets you create surveys and polls in WordPress. With the drag-and-drop builder and pre-built templates, you can design responsive, mobile-friendly surveys with features like [NPS surveys](/net-promoter-score) and real-time polls.

This guide shows you how to build a survey or poll, show the results after submission, and display results on a page.

> [!Note]
> **Survey results (charts and the `[fluentform_survey]` shortcode)** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/bupQGQm4Syg" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add the Input Field

Add input fields to build your survey or poll, such as:

- [Radio Fields](/radio-field)
- [Checkboxes](/checkbox-field)
- [Multiple Choice](/multiple-choice-field)
- [Dropdown Field](/dropdown-field)
- [Range Slider Field](/range-slider-field)

These fields define the structure of your survey or poll.

![Enable survey module](/images/creating-forms/specialized-form-types/surveys-and-polls/01-scaled-2.webp)

## Configuring Survey Settings

Click **Configuration** in the top bar of your form, open **Privacy & Data** from the left menu, and select **Survey Analytics**.

![Add new form](/images/creating-forms/specialized-form-types/surveys-and-polls/02-1-scaled.webp)

Turn on **Show Survey Results after Submission** to let respondents see the combined results after they submit the form.

Under **Result Display Options**, choose what to show:

- **Show labels:** Shows each option's text label with its result.
- **Show counts:** Shows how many respondents selected each option.

Click **Save**.

![Survey form fields](/images/creating-forms/specialized-form-types/surveys-and-polls/03-1-scaled-2.webp)

Copy the form's shortcode and paste it into a page or post.

After submission, the survey results appear as a **Chart**.

![Survey settings](/images/creating-forms/specialized-form-types/surveys-and-polls/04-scaled-2.webp)

## Displaying Survey Results on a Page

Use a shortcode to show survey results on a dedicated page.

### Single Field

A custom shortcode shows the result for one field. For example, to show only the checkbox field, put the **checkbox field's name attribute** in the **field_name** value.

You can also choose whether to show the **Label** and **Total Count**. In the example below, labels are hidden and response counts are shown.

Copy this shortcode into your page or post (replace `1` with your form ID and `input_radio` with your field’s **name attribute**):

```
[fluentform_survey form_id="1" label='no' counts='yes' field_name='input_radio']
```

* **form_id:** Your form ID.
* **label:** `yes` to show labels, `no` to hide them.
* **counts:** `yes` to show response counts, `no` to hide them.
* **field_name:** The field’s **name attribute** (for example `input_radio`).

Create a new page and paste your customized shortcode into it.

### Multiple Field

To show several fields, list the **name attribute** of each field, separated by commas.

Copy this shortcode to show results for multiple fields:

```
[fluentform_survey form_id="89" label='yes' counts='yes' field_name='input_radio,checkbox']
```

![Survey form preview](/images/creating-forms/specialized-form-types/surveys-and-polls/05.webp)
