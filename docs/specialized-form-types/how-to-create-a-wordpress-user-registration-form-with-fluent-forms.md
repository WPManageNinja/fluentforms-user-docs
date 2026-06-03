# How to Create a WordPress User Registration Form With Fluent Forms

Create a user-friendly registration form with Fluent Forms to make the WordPress user registration process as simple as possible. This will allow people to enter their information into a beautiful form and create user accounts in WordPress through this form. 

This article will guide you through creating a **User Registration Form** with **Fluent Forms** on your WordPress site step by step.

> Remember, for testing the user registration fucntionality, you need to submit the form in logged-out or incognito mode.

## Enable the User Registration Module

To learn how to enable the WordPress user registration form, follow the easy steps with the screenshots below- 

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **User Registration** through the search bar, and get the **User Registration or Update** module. Now, Enable the **User Registration or Update** module.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/User-Registration-01-scaled.webp)

## Create a Registration Form

Once you enable the user registration form, now create a registration form.  Go to the **Fluent Forms Dashboard** and **Create a new form**.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Now, we recommend to add the following fields to the form:

**Email**: Required for user registration.
**Name**: Optional but recommended.
**Password**: Required for account creation.

You can add additional fields as needed, but these three fields are essential.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/registration-form-02-scaled.webp)

## Add the User Registration Feed

Once created, a registration form is configured for the user registration form. Click the forms **Settings & Integration** section. Then click the **Configure Integrations** section from the left side menu.

Now, hover over the **Add New Integration** button and select the **User Registration or Update** **Integration** option shown in the screenshot below.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/Configure-the-user-registration-03-scaled.webp)

### Configure the User Registration Feed

A new Window page will appear. Now, customize the User Registration feed according to your needs by setting up the **Name**, **Password**, **Email Address** fields, etc.

**A. Name:** Enter the name that specifies the name of the registration feed.

**B. Service**: Select the type of service that feeds **User Registration** or **User Update.**

**C. Map Fields:**  Use all the fields under this option to properly link your **user registration field or user update** with the **Form Fields**. You can easily select the **value** for the **Form Fields** based on the **user registration or user update** using the **Shortcode Arrow**. 

**D. Default User Role:** Select the user role assigned upon registration.

**E. User Meta**: Use the **User Meta** section to add custom user meta fields. In the first column, type the **meta key**. In the second column, select the corresponding **form field value**. You can add multiple meta keys by clicking the **Plus Icon.**

> Remember, User Meta Key is the form field’s name attribute!

**F. Auto Login:** If you want to allow the user to log in automatically after submitting the form, enable the option "**Allow the user to log in automatically after registration**."

**G. Email Notification:** If you want to send the default WordPress welcome email after registration, then enable the **Send default WordPress welcome email to user after registration** options.

**H. Form Validation:** Enabling this option prevents duplicate registrations by checking if the user already exists in the database.

**I. Conditional Logics**: This option allows Mailjet integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](/docs/set-up-forms-with-conditional-logic-in-fluent-forms). 

**J. Status:** Enable this feed option to activate the integration.

Once the setup is done, finally, click the **Save Feed** button.

Your **User Registration** form or **Update** will be integrated into this specific form!
The users can register and Update in a single form.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/Add-New-User-Registration-Integration-Feed-Fluent-Forms-02-26-2025_05_17_PM-scaled.webp)

After successful Integration, you will see that your **User Registration** or **Update Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon** and **Delete** it by clicking the **Trash Icon**. 
Also, you can **disable** or **enable** this feed anytime by turning off the **Toggle** if needed.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/user-registration-enabled-07-scaled.webp)

## Preview the User Registration Form

Here, you can see the preview of the added contacts for the **User Registration** form through the form entries I set up during the integration. 

You can see form submissions from the **Entries** section of this particular form.

![](/images/specialized-form-types/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/demo-08-scaled.webp)

Following this guide, you can easily enable user registrations and updates while customizing the form to fit your specific requirements.
