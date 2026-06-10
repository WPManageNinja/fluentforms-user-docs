# Email Validation With ClearOut

Clearout is an advanced platform that provides email validation, helping to filter out fake or disposable emails. First, you will need a ClearOut API key for those validations.

Here's a step-by-step guide to integrating ClearOut with Fluent Forms for email validation.

## Get ClearOut API Key

To get the Clearout API Key, go to the[ ClearOut website](https://clearout.io) and log in to your account. 

Now, navigate to **Apps** in the ClearOut dashboard. Then, choose **Server** as the App Type. Provide a name for the app and click the **Create** button.

![Create App](/images/integrations/other-apps/email-validation-with-clearout/create-app-01-scaled.webp)

Once the app is created, an **API** token will be generated. **Copy** this token for later use.

![API Token](/images/integrations/other-apps/email-validation-with-clearout/api-token-02-scaled.webp)

## Install the ClearOut Plugin

To install the ClearOut plugin, go to the Plugins section of your WordPress admin dashboard **and click** on the **Add New** button. 

Search for the "**ClearOut Email Validator**" plugin or download it directly from[ ClearOut's website](https://www.clearout.io).

After that, **Install** and **activate** the plugin.

![Email Validation](/images/integrations/other-apps/email-validation-with-clearout/email-validation-03-scaled.webp)

Now, Configure the plugin with Fluent Forms. After activation, go to the **ClearOut settings** in your WordPress admin panel and click the **ClearOut Email Validation** options.

Here, **Paste** the **API Token** that was copied before from ClearOut.

![Paste API Token](/images/integrations/other-apps/email-validation-with-clearout/paste-api-token-04-scaled.webp)

Ensure that you choose **Fluent Forms** as the select form option. Click the **Apply** button to save the changes.

This connection ensures all [Email Address fields](/email-address-input-field) in Fluent Forms are automatically validated by ClearOut's service.

![Enable Email Validation With ClearOut](/images/integrations/other-apps/email-validation-with-clearout/enable-fluent-form-05-scaled.webp)

That's it. Now, your emails will be validated by ClearOut Services automatically.
