---
description: "Fluent Forms integrates Cloudflare Turnstile to provide website visitors with a frustration-free, CAPTCHA-free browsing experience."
---

# Integrate Cloudflare Turnstile

**Fluent Forms** integrates **Cloudflare Turnstile** to give website visitors a CAPTCHA-free browsing experience. It stops abuse and confirms visitors are real without the privacy concerns of traditional CAPTCHAs.

This guide shows you how to configure Cloudflare Turnstile in Fluent Forms. Fluent Forms also supports [Google reCAPTCHA](/integrate-recaptcha) and hCaptcha.

## Configuring CloudFlare Turnstile

Go to **Global Settings** in the **FluentForms Navbar**, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **Turnstile** tab.

The page asks for the **Site Key** and **Secret Key** of your **Turnstile Account**.

![Cloudefare Turnstile Settings Page](/images/security-spam/integrate-cloudflare-turnstile/1.-Cloudefare-Turnstile-Settings-page-scaled.webp)

### Get the Turnstile Site and Secret Key

Log in to your [Turnstile Account](https://dash.cloudflare.com/), go to **Turnstile** in the left menu, and click **Add widget**.

> [!Note]
> If you do not have a Turnstile account, [sign up on Cloudflare](https://dash.cloudflare.com/sign-up).

![Add Widget Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/2.-Add-Widget-button-scaled.webp)

Enter a **Name** to identify your website later. Register your domain for Turnstile verification with the **+ Add Hostnames** button.

![Add Widget And Host Name Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/3.-Add-Widget-and-Host-Name--scaled.webp)

Enter your site domain in the **Add a Custom Hostname** field and click **Add**.

Your domain appears under **Selected Hostnames**. You can remove it at any time. Click the **Add** button below.

![Add Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/4.-Add-button.webp)

Choose your **Widget Mode** and **Pre-clearance**.

Click **Create**. Cloudflare shows the Site and Secret keys.

![Create Button Fluent Forms](/images/security-spam/integrate-cloudflare-turnstile/5.-Create-button.webp)

Copy the keys by clicking the **Site Key** and **Secret Key** buttons.

![Copy Site Secret Key](/images/security-spam/integrate-cloudflare-turnstile/6.-Copy-Site-Secret-Key-.webp)

## Connecting Turnstile with Fluent Forms

Return to **Global Settings** in the **FluentForms Navbar**, expand **Security** in the left sidebar, click **CAPTCHA services**, and open the **Turnstile** tab.

Paste the keys you copied from **Turnstile** into the **Site Key** and **Secret Key** fields.

Select the **Theme** (Auto, Light, or Dark) and the **Appearance Mode** (Managed, Non-interactive, or Invisible). After you enter the keys, a popup asks you to **Verify** their validity.

![Paste Keys And Validate Turnstile](/images/security-spam/integrate-cloudflare-turnstile/7.-Paste-keys-and-validate-turnstile-scaled.webp)

After you verify the keys, click **Save** to activate your **Turnstile Integration**.

![Save Settings Button Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/8.-Save-Settings-button-scaled.webp)

## Integrating Turnstile with Forms

Go to **Forms** in the top navbar. Click the form you want to protect with Turnstile to open its **Editor**.

![Editor Fluent Forms](/images/security-spam/integrate-cloudflare-turnstile/6.-desired-Form-Editor-1-scaled.webp)

In the **Editor**, open the **Input Fields** tab on the right, expand **Advanced Fields**, and click the **Turnstile** input field.

Click **Save** to add the configured Turnstile to this form.

![Add Turnstile Input Field Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/10.-Add-Turnstile-input-field-scaled.webp)

This is the preview of Turnstile in the form.

![Preview Added Turnstile Field Integrate Cloudflare Turnstile](/images/security-spam/integrate-cloudflare-turnstile/11.-Preview-of-added-Turnstile-field.webp)
