---
description: "Protect your Fluent Forms from spam bots with Honeypot Security and Google reCAPTCHA, plus form rules that block logged-out and empty submissions."
---

# Spam Protection With Honeypot and Google reCAPTCHA

**Fluent Forms** offers **Honeypot Security** and **reCAPTCHA** to protect your form entries from spambots and keep your contact lists spam-free. This guide shows you how to set up **Spam Protection** with **Honeypot** **Security** and **reCAPTCHA**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/w7xV1Mnt-EI" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Spam Protection using Honeypot

A honeypot is a decoy that traps bots. Enable this setting to apply honeypot security to all your forms.

A honeypot adds a hidden field to your form. Genuine users cannot see this field, but simple bots fill it out. The honeypot then identifies these bots and blocks their submissions.

Click the **Settings** (gear) icon in the Fluent Forms navbar to open **Global Settings**, expand **Security** in the left sidebar, and click **Built-in protections**.

Turn on the **Honeypot Security** toggle to protect your forms from spambots.

Click **Save**.

![Enable Honeypot From General Tab Global Settings Spam Protection With Honeypot](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/1.-Enable-Honeypot-from-General-tab-of-global-Settings-scaled.webp)

> [!Note]
> **Honeypot** blocks bots but not manual spam. Use **reCAPTCHA** or **hCaptcha** for human-submitted spam. See [How to Integrate reCAPTCHA](/integrate-recaptcha) and [How to Integrate hCaptcha](/integrate-hcaptcha).

## Spam Protection using reCAPTCHA

**reCAPTCHA** is Google's **CAPTCHA** system. It uses machine learning to distinguish humans from bots and helps block spam submissions on your forms.

Go to **Global Settings** in the **Fluent Forms Navbar**, expand **Security**, and select **CAPTCHA services**.

Turn on the **Auto Load Captcha** toggle. Then select **Google reCAPTCHA** in the **Captcha Type** dropdown. The toggle stays off until you save valid CAPTCHA keys. Fluent Forms then loads the selected captcha on all forms automatically. You can choose Google reCAPTCHA, hCaptcha, or Cloudflare Turnstile.

Click **Save**.

![Auto Load Captcha Toggle From General Tab Global Settings](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/2.-Auto-load-CAPTCHA-toggle-from-General-tab-of-global-Settings-scaled.webp)

> [!Note]
> To enable this option, integrate **Google reCAPTCHA** with Fluent Forms first.

> [!Tip]
> If **Auto Load CAPTCHA** is on but the selected captcha type has no valid keys saved, Fluent Forms shows an admin notice with a direct link to add the missing keys.

To integrate it, go to **Global Settings** in the **FluentForms Navbar**, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **reCAPTCHA** tab.

Select the **Version** of reCAPTCHA, enter the **Site & Secret Keys**, and click **Save**.

> [!Note]
> To collect the **Site Key** and **Secret Key** for reCAPTCHA, see [How to Integrate reCAPTCHA with Fluent Forms](/integrate-recaptcha).

![reCAPTCHA Settings Fluent Forms](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/3.-reCAPTCHA-Settings-scaled.webp)

## Other Built-in Protections

The **Built-in protections** page has more toggles:

- **Token Based Spam Protection:** Adds a token check to form submissions.
- **No-Conflict Mode:** Prevents conflicts caused by scripts from other plugins.
- **Akismet:** See [Integrate Akismet](/integrate-akismet).
- **CleanTalk:** Requires the Anti-Spam by CleanTalk plugin.

## Spam protection in a specific Form

You can add an extra layer of spam protection inside any single form.

Go to **Forms** in the top navbar. Click the form you want to protect to open its **Editor**.

![Editor Fluent Forms](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/4.-desired-Form-Editor-scaled.webp)

Click **Configuration** in the form's top bar, open **Scheduling & Restrictions** in the left menu, and turn on the [Require user to be logged in](/user-login-requirement) and **Deny empty submission** toggles.

- **Require user to be logged in:** Stops users who are not logged in from submitting the form.

- **Deny empty submission:** Stops the form from accepting empty submissions.

Click **Save**.

![Settings And Integration Tab Spam Protection With Honeypot](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/5.-Settings-and-Integration-tab-in-a-form-scaled.webp)
