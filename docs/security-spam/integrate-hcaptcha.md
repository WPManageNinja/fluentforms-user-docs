---
description: "Fluent Forms integrates hCaptcha, one of the most popular independent CAPTCHA services. Preventing bot submissions using hCaptcha is a contemporary…"
---

# Integrate hCaptcha

**Fluent Forms** integrates **hCaptcha**, one of the most popular independent CAPTCHA services. hCaptcha helps stop bot submissions and protects visitor privacy.

This guide shows you how to configure hCaptcha in Fluent Forms.

## Configuring hCaptcha Integration

Go to **Global Settings** in the Fluent Forms navbar, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **hCaptcha** tab.

Fluent Forms asks for the **Site Key** and **Secret Key** of your **hCaptcha Account**. You can also use **Clear settings** to remove saved keys.

![hCaptcha Settings Page](/images/security-spam/integrate-hcaptcha/1.-hCAPTCHA-Settings-page-scaled.webp)

### Getting the hCaptcha Site and Secret Key

Log in to your [hCaptcha Account](https://www.hcaptcha.com/). If you do not have one, [sign up here](https://www.hcaptcha.com/).

![Signup Here Fluent Forms](/images/security-spam/integrate-hcaptcha/2.-signup-here-.webp)

After you log in, hCaptcha creates your first **Sitekey** for you. Click **Generate Secret** to generate the **Secret Key**.

![Generate Button Fluent Forms](/images/security-spam/integrate-hcaptcha/4.-Generate-button.webp)

Click **Copy Secret** to copy the **Secret Key**. Store it safely, because hCaptcha does not show it again.

![Copy Secret Key Continue Button](/images/security-spam/integrate-hcaptcha/5.-Copy-Secret-Key-Continue-button.webp)

To add another site, open **Overview** and click **Add Site**.

![Add Site Button Integrate hCaptcha](/images/security-spam/integrate-hcaptcha/6.-Add-Site-button-scaled.webp)

Enter a **Name** to identify your website later. To limit the sitekey to your website, turn on **Domain allowlisting** and add your website address.

For additional **Settings**, select the **hCaptcha Behavior** and **Passing Threshold**.

Click **Save**.

![Name Domain Settings Save Button](/images/security-spam/integrate-hcaptcha/7.-Name-Domain-Settings-Save-button.webp)

Your new site appears in the **Sites** list. Copy its **Site Key** from there.

![Copy Site Key Button](/images/security-spam/integrate-hcaptcha/8.-copy-Site-Key-button.webp)

## Connecting hCaptcha with Fluent Forms

Return to **Global Settings** in the **FluentForms Navbar**, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **hCaptcha** tab.

Paste the keys you copied from **hCaptcha** into the **Site Key** and **Secret Key** fields.

![Paste Site Key And Secret Key](/images/security-spam/integrate-hcaptcha/9.-Paste-site-key-and-secret-key-scaled.webp)

After you provide the keys, a pop-up asks you to solve the hCaptcha challenge to **Verify** the keys. Fluent Forms stores the keys only after you solve it.

![Verify Button Fluent Forms](/images/security-spam/integrate-hcaptcha/10.-Verify-button.webp)

Click **Save** to activate your **hCaptcha Integration**.

To load hCaptcha on every form automatically, turn on **Auto Load Captcha** and choose **hCaptcha** as the **Captcha Type**.

![Save Settings Button Integrate hCaptcha](/images/security-spam/integrate-hcaptcha/11.-Save-Settings-button-scaled.webp)

## Integrating hCaptcha with Forms

Go to **Forms** in the top navbar. Click the form you want to protect with hCaptcha to open its **Editor**.

![Edit Button Integrate hCaptcha](/images/security-spam/integrate-hcaptcha/12.-Desired-form-Edit-button-scaled.webp)

In the **Editor**, open **Input Fields** on the right, expand the **Advanced Fields** list, and click the [hCaptcha input field](/hcaptcha).

Click **Save** to add the configured hCaptcha to this form.

![Added hCaptcha Input Field Save Button](/images/security-spam/integrate-hcaptcha/13.-Added-hCAPTCHA-input-field-Save-Form-button-scaled.webp)

This is the preview of hCaptcha in the form.

![Preview hCaptcha Field Integrate hCaptcha](/images/security-spam/integrate-hcaptcha/14.-Preview-of-hCAPTCHA-field-in-a-form.webp)
