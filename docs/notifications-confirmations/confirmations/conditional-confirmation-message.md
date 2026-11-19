---
description: "Sometimes, you can display confirmation messages based on user input. Fluent Forms allows you to set up Conditional Confirmation Messages so that users…"
---

# Conditional Confirmation Message

Conditional confirmations show different confirmation messages based on what visitors enter (Pro). Set up **Conditional Confirmation Messages** so visitors get feedback that matches their answers. If you are new to confirmations, start with the [form submission confirmation message](/setup-form-submission-confirmation-message) setup.

This guide shows you how to set up a conditional confirmation message.

> [!Note]
> This feature is available in **Fluent Forms Pro**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/IfU4TZzZhD8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Access the Form Settings

Go to **Forms** in the top navbar. Click **Edit** on the form where you want the conditional confirmation message to open its **Editor**.

In the form editor, click **Configuration** in the top bar. Open **Conditional Confirmation** under **Responses** in the left rail.

![Confirmation Settings](/images/notifications-confirmations/confirmations/conditional-confirmation-message/Confirmation-Settings-01-scaled.webp)

## Add a New Confirmation Message

Click **Add Confirmation** in the top right corner.

![Add Confirmation Conditional Confirmation Message](/images/notifications-confirmations/confirmations/conditional-confirmation-message/Add-confirmation-02-scaled.webp)

Enter the details:

 **Confirmation Name:** Enter a name that describes the purpose of the confirmation.

 **Confirmation Type:** Choose where the confirmation message appears. There are three confirmation types:

   - **Same Page:** Displays the confirmation message on the same page as the form.
   - **To a page:** Redirects the user to a specific page after form submission. Choose the page in **Select Page**.
   - **To custom URL:** Redirects the user to a custom URL after form submission. Enter it in **Redirect URL**.

 **Message to Show:** Enter the custom message to display when the condition is met. You can also add a shortcode or an image to the message.

![Confirmation Message](/images/notifications-confirmations/confirmations/conditional-confirmation-message/confirmation-message-03-scaled.webp)

 For the **To a page** and **To custom URL** types, you also see these fields:

   - **Redirect Query String:** Turn on **Pass Field Data Via Query String** to add field values to the redirect URL as query parameters.
   - **Redirection Message:** Enter the text visitors see before the redirect.

![Pass String Query](/images/notifications-confirmations/confirmations/conditional-confirmation-message/pass-string-query-04.webp)

If you select **To custom URL** and enable **Pass Field Data Via Query String**, you can enter a URL like this: `https://example.com/thank-you?email={email}&phone={phone}`

This redirects the user to the **https://example.com/thank-you** page and passes the values of the phone and email fields as query parameters. You can use these parameters on the thank-you page to show personalized information or run other actions.

**After Form Submission:** Choose what happens after the form is submitted. The options are **Hide Form** and **Reset Form**.

>[!Note]
> This option shows the message only when you select **Same Page** as the Confirmation Type.

### Enable Conditional Logic

Turn on [Conditional logic](/set-up-forms-with-conditional-logic) with the checkbox. The sentence **Run this confirmation if All/Any of the following match** appears. Select **All** if every condition must be met, or **Any** if one condition is enough.

Select the form field the condition depends on. For example, choose a rating or numeric input field.

Define the logic that must be met for the confirmation message to appear. The operators are:

- Equal / Not equal: Exact match or mismatch.

- Greater than / Less than: Numerical comparison.

- Contains / Does not contain: The text field includes, or does not include, a specific word or phrase.

- Starts with / Ends with: The text field starts or ends with certain characters.

- Matches regex: The value matches a regular expression.

- Advanced operators: Equal to, Less than, and Greater than Data Length, and Regex Match.

Enter the value that triggers the message. For example, to show a message when the user's score is less than 3, set the logic to "less than 3."

To add more conditions, click the plus icon on the right side of the condition row.

Click **Save**.

![Confirmation Logic](/images/notifications-confirmations/confirmations/conditional-confirmation-message/confirmation-logic-05-scaled.webp)

Visitors now see the message that matches their input.
