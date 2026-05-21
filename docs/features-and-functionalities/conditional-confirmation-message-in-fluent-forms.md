# Conditional Confirmation Message in Fluent Forms

Sometimes, you can display confirmation messages based on user input. Fluent Forms allows you to set up **Conditional Confirmation Messages** so that users receive individualized feedback based on specific conditions.

In this documentation, we will walk you through setting up a conditional confirmation message with fluent Forms.

So, let's get started.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/IfU4TZzZhD8" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Access the Form Settings

To learn how to set conditional confirmation message, follow the steps below – 

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set the conditional confirmation message.

> If you do not have any existing forms, read  Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Once inside the form editor, click on **Settings & Integrations** tab for the selected form. Now from the left sidebar, select **Conditional Confirmation** under the **Settings** section.

![](/images/features-and-functionalities/conditional-confirmation-message-in-fluent-forms/Confirmation-Settings-01-scaled.webp)

## Add a New Confirmation Message

Here appears a new window. Now click the **Add Confirmation** button in the top right corner.

![](/images/features-and-functionalities/conditional-confirmation-message-in-fluent-forms/Add-confirmation-02-scaled.webp)

Here also appears a new window. Now enter the details below-

**Confirmation Name:** Give a confirmation name that describes its purpose. 

**Confirmation Type:**  Choose where you want the confirmation message to appear. There are three Confirmation types. 

- Same Page: Displays the confirmation message on the same page as the form.

- To a page:  Redirects the user to a specific page after form submission.

- To custom URL: Redirects the user to a custom URL after form submission.

**Message to Show:** Here enter the custom message you want to display when the condition met. You can also add shortcode or image to your message.

![](/images/features-and-functionalities/conditional-confirmation-message-in-fluent-forms/confirmation-message-03-scaled.webp)

**Redirect Query String:** The field where you can enter the custom URL with query parameters.

- Pass Field Data Via Query String: This allows you to pass form field data as query parameters in the redirect URL.

> For this option to be enabled you must check the Pass Field Data Via Query String box below.

![](/images/features-and-functionalities/conditional-confirmation-message-in-fluent-forms/pass-string-query-04.webp)

Suppose If you select **To a Custom URL** and enable **Pass Field Data Via Query String**, you can enter a URL like this: https://example.com/thank-you?email={email}&phone={phone}

Then it will redirect the user to the **https://example.com/thank-you** page and pass the values of the phone and email fields as base of query parameters. 

You can use these query parameters on the thank-you page to display personalized information or perform other actions.

**After Form Submission:** Now choose what should happen after the form is submitted. Options are **Hide Form** and **Reset Form**. 

> This option only shows the message when you select the Same Page option in Confirmation Type.

### Enable Conditional Logic

First enable the [Conditional logic](/docs/set-up-forms-with-conditional-logic-in-fluent-forms) by clicking the check box. Now decide whether all conditions must be met select **All** or if any single condition is sufficient select **Any**.

Then Select the specific form fields on which the condition will depend. For example, you might choose a rating or numeric input field.

Now define the logic that needs to be satisfied for the confirmation message to appear. You can set conditions like**:**

- Equal to / Not equal to: Exact match or mismatch.

- Greater than / Less than: Numerical comparison.

- Contains: The text field contains a specific word or phrase.

- Starts with / Ends with: The text field starts or ends with certain characters.

- Advanced Operator: Equal,Less,Greater, and Regex match data length.

Next, provide the specific value or condition that triggers the message. For instance, if you want to display a message when the user's score is less than 3, you would set the logic to "less than 3."

If you want to add multiple conditional logic then click the plus icon on the left side.

Once your message and logic are set, click **Save Notification** button to apply the changes.

![](/images/features-and-functionalities/conditional-confirmation-message-in-fluent-forms/confirmation-logic-05-scaled.webp)

Users will see a message that matches their input by setting up these conditional confirmations, creating a more personalized and responsive experience.

And that’s it! You’ve successfully set up Conditional Confirmation Messages in Fluent Forms, ensuring users receive appropriate feedback based on their form submissions.
