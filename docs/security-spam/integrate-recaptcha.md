---
description: "Fluent Forms integrates reCAPTCHA, a CAPTCHA system developed by Google, to protect websites from spam bots and automated abuse."
---

# Integrate reCAPTCHA

**Fluent Forms** integrates **reCAPTCHA**, a **CAPTCHA** system developed by **Google,** to protect websites from spam bots and automated abuse. It uses machine learning to check that a user is human.

This guide shows you how to configure reCAPTCHA in Fluent Forms.

## Configuring reCAPTCHA Integration

Go to **Global Settings** in the Fluent Forms navbar, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **reCAPTCHA** tab. Two options appear:

- **Version 2 (Visible reCAPTCHA):** Users check a box to show they are not a robot. It verifies the request with a challenge.

- **Version 3 (Invisible reCAPTCHA):** It runs in the background and scores the user’s interaction to decide whether they are a bot. It verifies the request with a score.

Select the **Version** of **reCAPTCHA** and enter the **Site Key** and **Secret Key** for that version. This guide uses V3 as an example.

![Global Settings Security reCAPTCHA Settings](/images/security-spam/integrate-recaptcha/1.-Global-Settings-Security-reCAPTCHA-Settings-scaled.webp)

### Get the reCAPTCHA Site and Secret Key

Go to the [Google reCAPTCHA Site](https://www.google.com/recaptcha/admin/) and click the **Plus Icon**.

![Plus Icon Fluent Forms](/images/security-spam/integrate-recaptcha/2.-Plus-Icon-scaled.webp)

Enter a **Name** in the **Label** field to identify your website later. Choose the **reCAPTCHA type** (v2 or v3). This guide uses reCAPTCHA V3 as an example.

Enter your website address in the **Domains** field to register your domain for reCAPTCHA verification. You can also choose your project from the **Google Cloud Platform** dropdown.

Click **Submit**. Google shows your Site key and Secret key.

![Register Site Page](/images/security-spam/integrate-recaptcha/3.-Register-a-new-site-page.webp)

Copy the keys with the **Copy Site Key** and **Copy Secret Key** buttons.

For additional settings, click **Go To Settings**.

![Copy Site And Secret Key](/images/security-spam/integrate-recaptcha/4.-copy-site-and-secret-key.webp)

## Connecting reCAPTCHA with Fluent Forms

Return to **Global Settings** in the **FluentForms Navbar**, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **reCAPTCHA** tab.

Paste the keys you copied from the **Google reCAPTCHA Site** into the **Site Key** and **Secret Key** fields.

Click **Save** to activate your **reCAPTCHA Integration**.

To load reCAPTCHA on every form automatically, turn on **Auto Load Captcha** and choose **reCAPTCHA** as the **Captcha Type**.

![Paste Keys Fluent Forms](/images/security-spam/integrate-recaptcha/5.-paste-keys-scaled.webp)

## Integrating reCAPTCHA with Forms

Go to **Forms** in the top navbar. Click the form you want to protect with reCAPTCHA to open its **Editor**.

![Editor Fluent Forms](/images/security-spam/integrate-recaptcha/6.-desired-Form-Editor-scaled.webp)

In the **Editor**, open the **Input Fields** tab on the right, expand **Advanced Fields**, and click the [reCAPTCHA input field](/recaptcha-field).

Click **Save** to add the configured reCAPTCHA to this form.

> [!Note]
> You cannot add a per-form **reCAPTCHA** field when reCAPTCHA is already enabled globally for all forms.

![reCAPTCHA Input Field Save Button](/images/security-spam/integrate-recaptcha/7.-reCAptcha-input-field-Save-Form-button-scaled.webp)
