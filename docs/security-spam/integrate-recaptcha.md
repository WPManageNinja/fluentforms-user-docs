---
description: "Fluent Forms integrates reCAPTCHA, a CAPTCHA system developed by Google, to protect websites from spam bots and automated abuse."
---

# Integrate reCAPTCHA

**Fluent Forms** integrates **reCAPTCHA**, a **CAPTCHA** system developed by **Google,** to protect websites from spam bots and automated abuse. It utilizes machine learning to ensure that a user is human.

This article will guide you through configuring reCAPTCHA in your WordPress Site through Fluent Forms. 

## Configuring reCAPTCHA Integration

First, go to **Global Settings** from the fluent forms navbar, open the **Security** tab from the left sidebar, click the **reCAPTCHA** option, and two options appear. These are: 

- **Version 2 (Visible reCAPTCHA):** This requires users to check a box indicating they are not a robot, i.e., it verifies the request with a challenge.

- **Version 3 (Invisible reCAPTCHA):** This operates in the background and scores the user’s interaction to determine if they are a bot, i.e., it verifies the request with a score.

Now, select the desired **Version** of **reCAPTCHA** and provide the **Site Key** and **Secret Key** of your chosen reCAPTCHA version. **For example**, I chose V3 to show the process. 

![Global Settings Security reCAPTCHA Settings](/images/security-spam/integrate-recaptcha/1.-Global-Settings-Security-reCAPTCHA-Settings-scaled.webp)

### Get the reCAPTCHA Site and Secret Key

First, go to the [Google reCAPTCHA Site](https://www.google.com/recaptcha/admin/), and click the **Plus Icon**.  

![Plus Icon Fluent Forms](/images/security-spam/integrate-recaptcha/2.-Plus-Icon-scaled.webp)

Now, put a **Name** into the **Label** field to identify your website in the future and choose the **reCAPTCHA type** you prefer (v2 or v3). For example, I have chosen reCAPTCHA V3. 

Then, enter your website/s address in the **Domains** field to register your domain for a reCAPTCHA verification. Also, you can choose your project from the **Google Cloud Platform** dropdown.

Once you provide all the necessary information, click the **Submit** button, and you will get your desired Site key and Secret key.

![Register Site Page](/images/security-spam/integrate-recaptcha/3.-Register-a-new-site-page.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

For additional settings, click the **Go To Settings** button, and the settings page will appear. 

![Copy Site And Secret Key](/images/security-spam/integrate-recaptcha/4.-copy-site-and-secret-key.webp)

## Connecting reCAPTCHA with Fluent Forms

Return to the **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **reCAPTCHA**. 

Now, paste the **Keys** you copied from the **Google reCAPTCHA Site** into the **Site Key** and **Secret Key** fields respectively. 

Finally, click the **Save Settings** button to make your **reCAPTCHA Integration** functional. 

![Paste Keys Fluent Forms](/images/security-spam/integrate-recaptcha/5.-paste-keys-scaled.webp)

## Integrating reCAPTCHA with Forms

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this reCAPTCHA protection.

![Editor Fluent Forms](/images/security-spam/integrate-recaptcha/6.-desired-Form-Editor-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the [reCAPTCHA input field](/recaptcha-field).

Finally, click the **Save Form** button to integrate your configured reCAPTCHA into this form.

> [!Note]
> You cannot add a per-form **reCAPTCHA** field when reCAPTCHA is already enabled globally for all forms.

![reCAPTCHA Input Field Save Button](/images/security-spam/integrate-recaptcha/7.-reCAptcha-input-field-Save-Form-button-scaled.webp)
