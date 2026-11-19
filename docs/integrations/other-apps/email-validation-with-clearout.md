---
description: "Clearout is an advanced platform that provides email validation, helping to filter out fake or disposable emails."
---

# Email Validation With ClearOut

Clearout is an email validation platform that filters out fake or disposable emails. This guide shows you how to connect ClearOut to Fluent Forms so every email address is validated automatically. You need a ClearOut API key first.

## Get the ClearOut API Key

1. Go to the [ClearOut website](https://clearout.io) and log in to your account.
2. Open **Apps** in the ClearOut dashboard.
3. Choose **Server** as the App Type.
4. Enter a name for the app and click **Create**.

![Create App](/images/integrations/other-apps/email-validation-with-clearout/create-app-01-scaled.webp)

ClearOut generates an **API** token when the app is created. Copy this token.

![API Token](/images/integrations/other-apps/email-validation-with-clearout/api-token-02-scaled.webp)

## Install the ClearOut Plugin

1. In your WordPress admin, go to **Plugins** and click **Add New**.
2. Search for **ClearOut Email Validator**, or download it from[ ClearOut's website](https://www.clearout.io).
3. **Install** and **activate** the plugin.

![Email Validation](/images/integrations/other-apps/email-validation-with-clearout/email-validation-03-scaled.webp)

Next, configure the plugin for Fluent Forms. Open the **ClearOut settings** in your WordPress admin and click the **ClearOut Email Validation** options. Paste the **API Token** you copied from ClearOut.

![Paste API Token](/images/integrations/other-apps/email-validation-with-clearout/paste-api-token-04-scaled.webp)

Choose **Fluent Forms** as the select form option, then click **Apply** to save the changes.

ClearOut now validates all [Email Address fields](/email-address-input-field) in Fluent Forms automatically.

![Enable Email Validation With ClearOut](/images/integrations/other-apps/email-validation-with-clearout/enable-fluent-form-05-scaled.webp)
