# Fluent Forms Styling/Custom CSS

Fluent Forms lets you easily style your forms using custom CSS and JavaScript. Whether it’s adjusting buttons, fonts, or input fields, you have full control over how your forms look and behave.

In this guide, you’ll learn how to apply custom CSS and JavaScript to your Fluent Forms.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/KlstfZbyVuw" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Accessing Custom CSS/JS Settings

Go to **Forms** from the top menu and open the **Editor** page of your desired form by clicking the **Edit** button. 

![Accessing Custom CSS/JS Settings](/images/form-style-template/fluent-forms-stylingcustom-css/Form-Edit-1-scaled.webp)

In the **Settings & Integrations** tab (top right of the editor), select **Custom CSS/JS**. You’ll see a field for adding custom CSS, along with your form's **unique class** (e.g. `.fluent_form_40`)

![Custom CSS/JS](/images/form-style-template/fluent-forms-stylingcustom-css/02-5-scaled.webp)

### Using the Unique Form Class

Each form is assigned a unique CSS class (for example, `.fluent_form_40`), which is displayed in the Custom CSS section. Use this to target one form without affecting others.

**Example:** Copy the CSS below, replace `40` with your form ID, and paste it into the **Custom CSS** field.

```css
.fluent_form_40 .ff_submit_btn {
    background-color: #0073e6;
    color: white;
    border-radius: 5px;
}
```

## Customization Examples

Replace `.fluent_form_149` in every snippet below with your form’s unique class (shown in **Custom CSS/JS**). Copy a block, paste it into the **Custom CSS** field, adjust values, then click **Save Settings**.

Here are styling ideas you can apply using CSS:

**Submit Button Styling:** Change the button’s background color, border, or hover effects.

```css
/* Change button style */
form.fluent_form_149 .ff-btn-submit {
    background-color: #000000; /* change button background color */
    color: #ffffff; /* change button font color */
    border-radius: 10px; /* change button round corners */
}

/* Change button hover style */
form.fluent_form_149 .ff-btn-submit:hover {
    background-color: #ff0606; /* change button background color on hover */
    color: #000000; /* change button font color on hover */
}
```

**Input Fields Styling:** Customize text boxes, dropdowns, or radio buttons.

```css
/* Input style */
form.fluent_form_149 .ff-el-form-control {
    padding: 6px 12px; /* change padding */
    background-color: #fff; /* change background color */
    border: 1px solid #ced4da; /* change border width and color */
    border-radius: 10px; /* change corner round / border radius */
}
```

**Font styles:** Modify fonts to match your website’s branding.

```css
form.fluent_form_149 .ff-el-form-control {
    font-size: 16px; /* change font size */
    line-height: 1.5; /* change line height */
    color: #495057; /* change font color */
}
```

**Label styles:** Modify labels to match your website’s branding.

```css
/* Change label styles */
form.fluent_form_149 .ff-el-input--label {
    font-size: 22px; /* change label font size */
    color: red; /* change label color */
}
```

**Input Focus Color:** Highlight input fields when focused.

```css
/* Change input border color when input is selected/focused */
.ff-el-form-control:focus {
    border-color: red;
    outline: none;
    -webkit-box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
    box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
}
```

**Step Button and Rating:** Redesign multi-step navigation buttons and rating stars.

```css
/* Change Rating Star Color */
form.fluent_form_149 .ff-el-ratings label.active svg {
    fill: red;
}
```

You can also restyle multi-step navigation buttons:

```css
/* Change Step button styles */
form.fluent_form_149 .step-nav button {
    background-color: #000000; /* change step button background color */
    color: #ffffff; /* change step button font color */
    border-radius: 10px; /* change step button round corners */
}

/* Change Step button styles on hover */
form.fluent_form_149 .step-nav button:hover {
    background-color: #ff0606; /* change step button background color on hover */
    color: #000000; /* change step button font color on hover */
}
```

After adding your custom styles, click the **Save Settings** button, and then preview your form on the front end to see the changes live.
