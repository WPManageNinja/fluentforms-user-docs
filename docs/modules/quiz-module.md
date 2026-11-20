---
description: "The Quiz Module in Fluent Forms lets you create quizzes, calculate scores, and display results as grades, points, fractions, or percentages."
---

# Quiz Module

The **Quiz Module** in Fluent Forms lets you create quizzes, calculate scores, and display results as grades, points, fractions, or percentages. Use it for tests, assessments, and educational content. 

To score traits instead of right answers, see [Creating a Personality Quiz Form in Fluent Forms](/creating-a-personality-quiz-form).

This guide shows you how to set up the **Quiz Module**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/bPjDXR0y_Oo" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Activating the Quiz Module

Go to **Integrations** in the Fluent Forms navbar, search for **quiz**, and turn on the **Quiz Module** toggle. The module shows an **Enabled** badge when it is active.

> [!Note]
> The Quiz Module is available in **Fluent Forms Pro**.

![Enable Quiz Module Fluent Forms Quiz Module](/images/modules/quiz-module/enable-quiz-module-01-scaled.png)

Create a new form or edit an existing one. Add the questions you want to score, such as **Dropdown**, **Radio Field**, **Checkbox**, or **Multi-select** fields. The example form below is a customer satisfaction quiz with a dropdown, a checkbox group, and a radio question.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

![Edit Fluent Forms Quiz Module](/images/modules/quiz-module/edit-form-01-2-scaled-2.webp)

## Quiz Score Field

**Quiz Score** is a hidden advanced field that calculates quiz scores.

Search for **quiz** in the **Input Fields** panel and add **Quiz Score** to your form. Only the admin can see this field. You can use it in confirmation messages or email notifications. To learn more, read the [Quiz Score in Fluent Forms](/quiz-score) guide.

![Quiz Score](/images/modules/quiz-module/quiz-score-02-scaled.png)

## Configuring Quiz Settings

Open your form, click **Configuration**, and click **Quiz Settings** in the left menu. Turn on the **Enable Quiz Module** toggle for the form. It scores each submission against the correct answers you set below.

![Enable Quiz Setting Fluent Forms Quiz Module](/images/modules/quiz-module/enable-quiz-setting-03-scaled.png)

**A. Append Result:** Check the **Show Result on confirmation page** option. It appends the score and grade to the [confirmation message](/setup-form-submission-confirmation-message) after submission.

**B. Randomize Questions:** When on, the order of the questions is random each time the quiz loads.

**C. Randomize Options:** When on, the answer options for each question are random on every load.

**D. Grade System:** Map score percentages to grade labels by setting a minimum and maximum range for each grade. Use the **+** button to add a grade level and the **trash** icon to remove one.

- **Grade Label:** Set grade labels such as A, B, C, or D.

- **Minimum Range / Max Range:** Set the score range for each grade level.

![Grade System](/images/modules/quiz-module/Grade-system-04-04-10-2025_05_58_PM-scaled.png)

### Simple Scoring

Your quiz questions appear under **Quiz Questions**. Set the correct answer and points for each question.

To set a score, turn on the toggle next to the question. Choose the **Condition**, set the **Correct Answer**, and enter the **Score**. In the example below, the condition is **Equal**, the correct answer is **Website**, and the score is 1.

Click **Save**. To reset the quiz, click **Reset Settings**.

![Simple Scoring](/images/modules/quiz-module/Simple-scoring-05-scaled.png)

After submission, the Confirmation Page shows the result as in the screenshot below. Without the result option, it shows only a Thank You message.

![Simple Scoring](/images/modules/quiz-module/simple-scoring-02.webp)

### Advanced Scoring

Check the **Advance Scoring** option on a question to assign a score to each option. Advanced Scoring has no option to mark an answer right or wrong.

![Advanced Scoring](/images/modules/quiz-module/advanced-scoring-02.png)

After submission, the Confirmation Page shows the result as in the screenshot below. Without the result option, it shows only a Thank You message.

Point 13 means New York scored 10, and Dallas scored 03. (10+3=13)

![Advanced Scoring](/images/modules/quiz-module/advanced-scorin-06-1.webp)

