---
description: "Numeric calculation in Fluent Forms runs math on Numeric fields in real time as users fill out your form."
---

# Numeric Calculation

**Numeric calculation** in Fluent Forms runs math on **Numeric** fields in real time as users fill out your form. Use it for order totals, quotes, scoring, or any case where one field should update automatically from others.

This guide shows you how to enable a **calculation expression**, build a formula with field shortcodes and operators (`+`, `-`, `*`, `/`), and preview the result on your site. For field basics, see [Numeric Input Field in Fluent Forms](/numeric-input-field).

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/iWxLhcaQDD0" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adding Numeric Fields

First, go to the **Forms** section from the **Fluent Forms Navbar,** choose a desired **Form,** and click the **Edit** icon to open the **Editor** page of that form.

> [!Note]
> If you do not have any existing forms, read [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms) to create a new one.

If you want to learn more about the **Numeric Input Field**, read the [Numeric Input Field](/numeric-input-field) documentation.

![Editor Fluent Forms](/images/configuring-forms/calculations/numeric-calculation/editor-form-scaled.webp)

Now add **two numeric fields** ( "Number One" and "Number Two"). Then, add a **third numeric field** to display the calculation result ("Result").

![Three Numeric Field](/images/configuring-forms/calculations/numeric-calculation/three-numeric-field-02-scaled.webp)

## Enable Calculation Expression

Now hover over the **Result** field (where you want to show the result) and click the **Edit (pencil) Icon**. In the right sidebar, go to **Advanced Options**.

Now, click on the **Enable Calculation option** from the **Advanced Option** to activate the calculation box.

![Enable Calculations Expression Numeric Calculation](/images/configuring-forms/calculations/numeric-calculation/Enable-calculations-expression-03-scaled.webp)

## Define the Calculation

Now, click on the **Document Icon**, and it will show all the available input fields.

Select the numeric fields to be used in the calculation ( Number One, Number Two).

 Now add a mathematical operator between them ( +, -, *, /).

- Example: Number One + Number Two

> Avoid spaces between fields and operators. For a better understanding, see the screenshot below.

![Document Icon](/images/configuring-forms/calculations/numeric-calculation/Document-icon-04-scaled.webp)

## Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design** button in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**. 

![Save Numeric Calculation](/images/configuring-forms/calculations/numeric-calculation/save-form-05-3-scaled.webp)

### Preview of Added Numeric Calculation

Here is a preview of the form with the Numeric calculation.

![Preview Numeric Calculation](/images/configuring-forms/calculations/numeric-calculation/preview-of-numeric-calculation-06.webp)

### Conversational Forms Support

Fluent Forms also supports calculations in [Conversational Forms](/create-a-conversational-form), enabling dynamic responses based on user input.

**Example**

If you have an order form where a user selects the number of items, you can calculate the total price dynamically:
Quantity * Price Per Item = Total Price

**Supported Symbols**

| Symbol | Explanation |
|---|---|
| + | Addition Operator eg. 2+3 results 5 |
| – | Subtraction Operator eg. 2-3 results -1 |
| / | Division operator eg 3/2 results in 1.5 |
|  *| Multiplication Operator eg. 2*3 results 6 |
| Mod | Modulus Operator eg. 3 Mod 2 results 1 |
| ( | Opening Parenthesis |
| ) | Closing Parenthesis |
| Sigma | Summation eg. Sigma(1,100,n) results 5050 |
| Pi | Product eg. Pi(1,10,n) results 3628800 |
| n | Variable for Summation or Product |
| pi | Math constant pi returns 3.14 |
| e | Math constant e returns 2.71 |
| C | Combination operator eg. 4C2 returns 6 |
| P | Permutation operator eg. 4P2 returns 12 |
| ! | factorial operator eg. 4! returns 24 |
| log | logarithmic function with base 10 eg. log 1000 returns 3 |
| ln | natural log function with base e eg. ln 2 returns .3010 |
| pow | power function with two operator pow(2,3) returns 8 |
| ^ | power operator eg. 2^3 returns 8 |
| root | underroot function root 4 returns 2 |
| sin | Sine function |
| cos | Cosine function |
| tan | Tangent function |
| asin | Inverse Sine function |
| acos | Inverse Cosine funtion |
| atan | Inverse Tangent funtion |
| sinh | Hyperbolic Sine function |
| cosh | Hyperbolic Cosine function |
| tanh | Hyperbolic Tangent function |
| asinh | Inverse Hyperbolic Sine function |
| acosh | Inverse Hyperbolic Cosine function |
| atanh | Inverse Hyperbolic Tangent function |
| round | Make a number a decimal/integer.Use case: round(3.235723663, 2) = 3.24 and round(3.235723663, 0) = 3 |
| ceil | Use case: ceil(3.235723663) = 4 |
| floor | Use case: floor(3.235723663) = 3 |
| max | Use case: max(10, 15) = 15 |
| min | Use case: min(10, 15) = 10 |

So, this is the easy process of adding Numeric Calculation of your form.
