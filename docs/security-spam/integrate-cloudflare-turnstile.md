---
description: "Fluent Forms integrates Cloudflare Turnstile to provide website visitors with a frustration-free, CAPTCHA-free browsing experience."
---

# Integrate Cloudflare Turnstile

**Fluent Forms** integrates **Cloudflare Turnstile** to provide website visitors with a frustration-free, CAPTCHA-free browsing experience. It stops abuse and confirms visitors are real without the data privacy concerns or awful UX that CAPTCHAs thrust on users.

This article will guide you through configuring Cloudflare Turnstile in your WordPress Site through Fluent Forms. Fluent Forms also supports other anti-spam tools like [Google reCAPTCHA](/integrate-recaptcha) and [hCaptcha](/integrate-hcaptcha).  

## Configuring CloudFlare Turnstile

First, go to **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **Turnstile** option.

Now, you will be asked to provide the **Site Key** and **Secret Key** of your **Turnstile Account** for the configuration.

![Cloudefare Turnstile Settings Page](/images/security-spam/integrate-cloudflare-turnstile/1.-Cloudefare-Turnstile-Settings-page-scaled.webp)

### Get the Turnstile Site and Secret Key

Log in to your [Turnstile Account](https://dash.cloudflare.com/login?lang=en-gb&_gl=1*1urh3iz*_gcl_au*MjEwNTA1MTg0Ni4xNzM2NzYyNDI2*_ga*MTU3NDUxODMwMC4xNzM2NzYyNDU2*_ga_SQCRB0TXZW*MTczNjc3MTAxOC4yLjAuMTczNjc3MTAxOS41OS4wLjA.), go to **Turnstile** from the left-side menu, and click the **Add widget** button. 

> [!Note]
> If you do not have a Turnstile account, [sign up on Cloudflare](https://dash.cloudflare.com/sign-up).

![Add Widget Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/2.-Add-Widget-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address using the **+ Add Hostnames** button to register your domain for Turnstile verification. 

![Add Widget And Host Name Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/3.-Add-Widget-and-Host-Name--scaled.webp)

Now, enter your site domain in the **Add a Custom Hostname** field and click the **Add** button.

Then, your domain will be added under the **Selected Hostnames**. You can remove it anytime if needed. Again, click the **Add** button below. 

![Add Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/4.-Add-button.webp)

Now, you can choose your **Widget Mode** and **Pre-clearance** according to your preference.

Once you are done, click the **Create** button, and the Site and Secret keys will be shown.

![Create Button Fluent Forms](/images/security-spam/integrate-cloudflare-turnstile/5.-Create-button.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Site Key** and **Secret Key** buttons.

![Copy Site Secret Key](/images/security-spam/integrate-cloudflare-turnstile/6.-Copy-Site-Secret-Key-.webp)

## Connecting Turnstile with Fluent Forms

Return to the **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **Turnstile**. 

Now, paste the **Keys** you copied from the **Turnstile** into the **Site Key** and **Secret Key** fields respectively.

Then, select the turnstile’s **Appearance Mode** and **Theme** according to your preference. Also, after providing the keys, a popup will appear to **Verify** their validity.

![Paste Keys And Validate Turnstile](/images/security-spam/integrate-cloudflare-turnstile/7.-Paste-keys-and-validate-turnstile-scaled.webp)

Once you have verified the keys, press the **Save Settings** button to make your **Turnstile Integration** functional. 

![Save Settings Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/8.-Save-Settings-button-scaled.webp)

## Integrating Turnstile with Forms

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this Turnstile protection.

![Editor Fluent Forms](/images/security-spam/integrate-cloudflare-turnstile/6.-desired-Form-Editor-1-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **Turnstile** input field.

Finally, click the **Save Form** button to integrate your configured Turnstile into this form.

![Add Turnstile Input Field Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/10.-Add-Turnstile-input-field-scaled.webp)

Here is the preview of the integrated Turnstile in a specific form.

![Preview Added Turnstile Field Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/11.-Preview-of-added-Turnstile-field.webp)
