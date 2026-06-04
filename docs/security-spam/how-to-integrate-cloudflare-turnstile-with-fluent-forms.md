# How to Integrate Cloudflare Turnstile with Fluent Forms

**Fluent Forms** integrates **Cloudflare Turnstile** to provide website visitors with a frustration-free, CAPTCHA-free browsing experience. It stops abuse and confirms visitors are real without the data privacy concerns or awful UX that CAPTCHAs thrust on users.

This article will guide you through configuring Cloudflare Turnstile in your WordPress Site through Fluent Forms.  

## Configuring CloudFlare Turnstile

To learn how to configure Turnstile integration, follow the steps with screenshots below – 

First, go to **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **Turnstile** option.

Now, you will be asked to provide the **Site Key** and **Secret Key** of your **Turnstile Account** for the configuration.

![Cloudefare Turnstile Settings Page](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/1.-Cloudefare-Turnstile-Settings-page-scaled.webp)

### Get the Turnstile Site and Secret Key

To learn how to get the Turnstile Site and Secret keys, follow the steps with the screenshots below – 

First, log in to your [Turnstile Account](https://dash.cloudflare.com/login?lang=en-gb&_gl=1*1urh3iz*_gcl_au*MjEwNTA1MTg0Ni4xNzM2NzYyNDI2*_ga*MTU3NDUxODMwMC4xNzM2NzYyNDU2*_ga_SQCRB0TXZW*MTczNjc3MTAxOC4yLjAuMTczNjc3MTAxOS41OS4wLjA.), go to **Turnstile** from the left-side menu, and click the **Add widget** button. 

> If you don’t have a Turnstile account, you can sign up here.

![Add Widget Button Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/2.-Add-Widget-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address using the **+ Add Hostnames** button to register your domain for Turnstile verification. 

![Add Widget And Host Name Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/3.-Add-Widget-and-Host-Name--scaled.webp)

Now, enter your site domain in the **Add a Custom Hostname** field and click the **Add** button.

Then, your domain will be added under the **Selected Hostnames**. You can remove it anytime if needed. Again, click the **Add** button below. 

![Add Button Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/4.-Add-button.webp)

Now, you can choose your **Widget Mode** and **Pre-clearance** according to your preference.
Once you are done, click the **Create** button, and the Site and Secret keys will be shown.

![Create Button Fluent Forms](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/5.-Create-button.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Site Key** and **Secret Key** buttons.

![Copy Site Secret Key](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/6.-Copy-Site-Secret-Key-.webp)

## Connecting Turnstile with Fluent Forms

Return to the **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **Turnstile**. 

Now, paste the **Keys** you copied from the **Turnstile** into the **Site Key** and **Secret Key** fields respectively.

Then, select the turnstile’s **Appearance Mode** and **Theme** according to your preference. Also, after providing the keys, a popup will appear to **Verify** their validity.

![Paste Keys And Validate Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/7.-Paste-keys-and-validate-turnstile-scaled.webp)

Once you have verified the keys, press the **Save Setting**s button to make your **Turnstile Integration** functional. 

![Save Settings Button Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/8.-Save-Settings-button-scaled.webp)

## Integrating Turnstile with Forms

To learn the process of integrating the Turnstile in a specific form, follow the steps with screenshots below – 

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this Turnstile protection.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![Editor Fluent Forms](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/6.-desired-Form-Editor-1-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **Turnstile** input field.

Finally, click the **Save Form** button to integrate your configured Turnstile into this form.

![Add Turnstile Input Field Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/10.-Add-Turnstile-input-field-scaled.webp)

Here is the preview of the integrated Turnstile in a specific form.

![Preview Added Turnstile Field Integrate Cloudflare Turnstile](/images/security-spam/how-to-integrate-cloudflare-turnstile-with-fluent-forms/11.-Preview-of-added-Turnstile-field.webp)
