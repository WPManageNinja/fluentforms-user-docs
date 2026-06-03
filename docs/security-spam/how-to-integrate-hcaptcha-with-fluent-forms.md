# How to Integrate hCaptcha with Fluent Forms

**Fluent Forms** integrates **hCaptcha**, one of the most popular independent CAPTCHA services. Preventing bot submissions using hCaptcha is a contemporary, privacy-conscious solution.

This article will guide you through configuring hCaptcha in your WordPress Site through Fluent Forms.  

## Configuring hCaptcha Integration

To learn how to configure hCaptcha integration, follow the steps with screenshots below – 

First, go to **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **hCaptcha** option.

Now, you will be asked to provide the **Site Key** and **Secret Key** of your **hCaptcha Account** for the configuration.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/1.-hCAPTCHA-Settings-page-scaled.webp)

### Getting the hCaptcha Site and Secret Key

To learn how to get the hCaptcha Site and Secret keys, follow the steps with the screenshots below – 

First, log in to your [hCaptcha Account](https://www.hcaptcha.com/). If you don’t have an hCaptcha account, [sign up here](https://www.hcaptcha.com/).

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/2.-signup-here-.webp)

Now, select the option **Add hCaptcha to my website or app** option. Then you will see a login page to log in to your account using the desired email.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/3.-Add-hCAPTCHA-to-my-website-or-app.webp)

Once you log in to the account, click the **Generate** button to generate the **Secret Key**.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/4.-Generate-button.webp)

Now, copy the **Secret Key** and click the **Continue** button to get the Site Key.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/5.-Copy-Secret-Key-Continue-button.webp)

Click on the **Add Site** button to add your desired site where you want to add hCaptcha.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/6.-Add-Site-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address in the **Domains** field to register your domain for hCaptcha verification.

Also, for additional **Settings**, you can select the **hCaptcha Behavior** and **Passing Threshold** according to your needs. 

Once you provide all the necessary information, click the **Save** button, and you will get your desired Site key.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/7.-Name-Domain-Settings-Save-button.webp)

Now, copy the **Site Key** by clicking the **Copy** button under the desired added site.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/8.-copy-Site-Key-button.webp)

## Connecting hCaptcha with Fluent Forms

Return to the **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **hCaptcha**. 

Now, paste the **Keys** you copied from the **hCaptcha** into the **Site Key** and **Secret Key** fields respectively.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/9.-Paste-site-key-and-secret-key-scaled.webp)

After you provide the keys, a pop-up will appear to **Verify** their validity.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/10.-Verify-button.webp)

Finally, press the **Save Setting**s button to make your **hCaptcha Integration** functional. 

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/11.-Save-Settings-button-scaled.webp)

## Integrating hCaptcha with Forms

To learn the process of integrating the hCaptcha in a specific form, follow the steps with screenshots below – 

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this hCaptcha protection.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/12.-Desired-form-Edit-button-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **hCaptcha** input field.

Finally, click the **Save Form** button to integrate your configured hCaptcha into this form.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/13.-Added-hCAPTCHA-input-field-Save-Form-button-scaled.webp)

Here is the preview of the integrated hCaptcha in a specific form.

![](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/14.-Preview-of-hCAPTCHA-field-in-a-form.webp)
