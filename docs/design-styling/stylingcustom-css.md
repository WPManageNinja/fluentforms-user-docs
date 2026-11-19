---
description: "Fluent Forms lets you style your forms using custom CSS and JavaScript. Whether it’s adjusting buttons, fonts, or input fields, you have full…"
---

# Styling/Custom CSS

Fluent Forms lets you style your forms with custom CSS and JavaScript. You can adjust buttons, fonts, input fields, and more. If you prefer a no-code approach, use the visual [Form Styler](/official-form-styler) instead.

This guide shows you how to apply custom CSS and JavaScript to your forms. You can also use the `{form_id}` placeholder when you save CSS as part of a Default Style Template in **Global Settings**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/KlstfZbyVuw" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Accessing Custom CSS/JS Settings

Go to **Forms** in the top menu and click **Edit** on your form to open the **Editor** page.

![Edit Fluent Forms Styling/Custom CSS](/images/design-styling/stylingcustom-css/Form-Edit-1-scaled.webp)

Click **Configuration** in the top bar, expand **Appearance** in the left rail, and select **Custom CSS & JS**. You see a field for custom CSS and your form's **unique class** (for example, `.fluent_form_40`).

![Fluent Forms Styling/Custom CSS step](/images/design-styling/stylingcustom-css/02-5-scaled.webp)

## Using the Unique Form Class

Each form has a unique CSS class (`fluent_form_40`), shown in the Custom CSS section. Use it to style one form without affecting others.

```
/* Example */
.fluent_form_40 .ff_submit_btn {
    background-color: #0073e6;
    color: white;
    border-radius: 5px;
}
```

## Customization Examples

Replace `.fluent_form_40` in the code with your own form’s unique class.

Here are some styling ideas you can apply with CSS:

**Submit Button Styling:** Change the button's background color, border, or hover effect.

```

/*Change button style*/
form.fluent_form_40 .ff-btn-submit {
    background-color: #000000; /*change button background color*/
    color: #ffffff; /*change button font color*/
    border-radius: 10px; /*change button round corners*/
    
}

/*Change button hover style*/
form.fluent_form_40 .ff-btn-submit:hover {
    background-color: #ff0606; /*change button background color on hover*/
    color: #000000; /*change button font color on hover*/
}
```

**Input Fields Styling:** Style text boxes, dropdowns, or radio buttons.

```

/*input style*/
form.fluent_form_40 .ff-el-form-control{
    padding: 6px 12px;  /*change padding*/
    background-color: #fff; /*change background color*/
    border: 1px solid #ced4da; /*change border width and color*/
    border-radius: 10px; /*change corner round/ border radius*/
}
```

**Font styles:** Change fonts to match your site’s branding.

```

form.fluent_form_40 .ff-el-form-control {
    font-size: 16px; /*change font size*/
    line-height: 1.5; /*change line height*/
    color: #495057; /*change font color*/
}
```

**Label styles:** Change labels to match your site’s branding.

```
/*Change label styles*/
form.fluent_form_40 .ff-el-input--label{
    font-size:22px; /*change label font size*/
    color:red; /*change label color*/
}
```

**Input Focus Color:** Highlight input fields when they have focus.

```
/*Change input border color when input is selected/focused*/
.ff-el-form-control:focus {
    border-color:red; 
    outline: none;
    -webkit-box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
    box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
}
```

**Step Button and Rating:** Restyle [multi-step](/creating-a-multi-step-form) navigation buttons and rating stars.

```
/*Change Rating Star Color*/
form.fluent_form_40 .ff-el-ratings label.active svg {
    fill: red;
}
```

To restyle the step buttons, use this code:

```
/*Change Step button styles*/
form.fluent_form_40 .step-nav button{
    background-color: #000000; /*change step button background color*/
    color: #ffffff; /*change step button font color*/
    border-radius: 10px; /*change step button round corners*/
}

/*Change Step button styles on hover*/
form.fluent_form_40 .step-nav button:hover{
    background-color: #ff0606; /*change step button background color on hover*/
    color: #000000; /*change step button font color on hover*/
}
```

Click **Save**, then preview your form on the front end to see the changes.
