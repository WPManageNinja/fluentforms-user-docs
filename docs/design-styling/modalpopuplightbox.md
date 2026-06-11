# Modal/Popup/Lightbox

Fluent Forms offers a built-in popup feature that makes displaying forms in a modal, popup, or lightbox easy. It also offers a button-based popup trigger for forms.

In this documentation you will learn how to create and customize a popup form using Fluent Forms.

> [!Note]
> **Modal/Popup/Lightbox** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Displaying the Popup Form

To display a form in a popup, first, you must use a unique shortcode that is different from the usual one. The basic shortcode format is: 

```
[ fluentform_modal form_id= "228" ] 
```

> [!Note]
> Replace the example form ID in the shortcode with your form’s ID.

Now, Replace "228" with the actual form ID of your form. You can find the form ID by navigating Fluent Forms and clicking **All Forms**. 
Then click the **fluent form ID** you want to replace and copy it.

![Editor Fluent Forms](/images/design-styling/modalpopuplightbox/Editor-Fluentform.webp)

Now paste it into the page or post where you want the popup to appear.

Then customize the text displayed on the popup trigger button and add btn_text="**Click Me**" to your shortcode:

```
[ fluentform_modal form_id="228" btn_text="Click Me" ]
```

Now, you will change the **Background Color.** To change the background color of the popup, add bg_color="**red**" (or your preferred color):

```
[ fluentform_modal form_id="27" btn_text="Subscribe" bg_color="green" ]
```

Next, add custom CSS classes to your popup. If you want to style the button with custom CSS, use the css_class parameter:

```
[ fluentform_modal form_id="228" btn_text="Subscribe" css_class="myClass myClassAgain" bg_color="red" ]
```

These will add the CSS class to the button, as shown in the screenshot below, so you can customize your button to your style.

![Contact Zoro Fluent Forms](/images/design-styling/modalpopuplightbox/Contact-zoro-04-22-2025_06_07_PM.webp)

>[!Note]
> You can use any popup builder, such as Popup Maker or Elementor Popup. You need to add the Fluent Forms shortcode inside the Popup builder.
