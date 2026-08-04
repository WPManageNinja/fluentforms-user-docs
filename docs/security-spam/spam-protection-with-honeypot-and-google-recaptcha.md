---
description: "Fluent Forms offers Honeypot Security and reCAPTCHA to protect your form entries from spambots and keep your contact lists spam-free."
---

# Spam Protection With Honeypot and Google reCAPTCHA

**Fluent Forms** offers **Honeypot Security** and **reCAPTCHA** to protect your form entries from spambots and keep your contact lists spam-free. This article will guide you through the process of **Spam Protection** using **Honeypot** **Security** and **reCAPTCHA**.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/w7xV1Mnt-EI" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Spam Protection using Honeypot

Honeypot is a clever cybersecurity strategy that acts like a digital decoy, designed to lure cybercriminals into a trap and keep them away from legitimate targets. Enable this setting if you want Fluent Forms to verify honeypot security for all Fluent Forms.

Basically, it prevents spam bots by incorporating a hidden field into your contact form. This field is invisible to genuine users, but bots lacking intelligence will still fill it out. By doing so, the honeypot can identify these bots and block their submissions.

Go to **Global Settings** from the fluent forms navbar, open the **General** tab from the left sidebar, and click the **Miscellaneous** option.

Now, turn on the **Enable Honeypot Security** toggle, and the security will be enabled to protect your forms from spambots. 

Don’t forget to click the **Save Settings** button to make all the setup functional. 

![Enable Honeypot From General Tab Global Settings Spam Protection With Honeypot](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/1.-Enable-Honeypot-from-General-tab-of-global-Settings-scaled.webp)

> [!Note]
> **Honeypot** blocks bots but not manual spam. Use **reCAPTCHA** or **hCaptcha** for human-submitted spam. See [Spam Protection With Honeypot and Google reCAPTCHA](/spam-protection-with-honeypot-and-google-recaptcha).

## Spam Protection using reCAPTCHA

**reCAPTCHA** is Google's **CAPTCHA** system. It uses machine learning to distinguish humans from bots and helps block spam submissions on your forms.

Go to **Global Settings** from the **Fluent Forms Navbar**, open the **General** tab, and select **Miscellaneous**.

Scroll to **Auto Load CAPTCHA**, turn on the toggle, and select **Google reCAPTCHA**. reCAPTCHA will then load on all Fluent Forms automatically.

Click **Save Settings** to apply the change.

![Auto Load Captcha Toggle From General Tab Global Settings](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/2.-Auto-load-CAPTCHA-toggle-from-General-tab-of-global-Settings-scaled.webp)

> [!Note]
> To enable this option, integrate **Google reCAPTCHA** with Fluent Forms first.

To do this, go to **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **reCAPTCHA** option.

Now, select the desired **Version** of reCAPTCHA, provide the **Site & Secret Keys,** and click the **Save Settings** button.

> [!Note]
> To collect the **Site Key** and **Secret Key** for reCAPTCHA, see [How to Integrate reCAPTCHA with Fluent Forms](/integrate-recaptcha).

![reCAPTCHA Settings Fluent Forms](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/3.-reCAPTCHA-Settings-scaled.webp)

## Spam protection in a specific Form

You can also add an extra layer of spam protection by enabling the settings option below inside any particular form.

To do this, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this protection. 

![Editor Fluent Forms](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/4.-desired-Form-Editor-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar, open the **Scheduling & Restrictions** tab, and turn on the [Login Requirement Settings](/user-login-requirement) and **Empty Submission Blocking** toggle.

- **Login Requirement Settings:** Once you enable this option, it will stop non-logged users from submitting the form.

- **Empty Submission Blocking:** Once you enable this option, it will prevent the form from empty submissions.

Don’t forget to click the **Save Settings** button to make all the setup functional. 

![Settings And Integration Tab Spam Protection With Honeypot](/images/security-spam/spam-protection-with-honeypot-and-google-recaptcha/5.-Settings-and-Integration-tab-in-a-form-scaled.webp)
