# Integrate hCaptcha

**Fluent Forms** integrates **hCaptcha**, one of the most popular independent CAPTCHA services. Preventing bot submissions using hCaptcha is a contemporary, privacy-conscious solution.

This article will guide you through configuring hCaptcha in your WordPress Site through Fluent Forms.  

## Configuring hCaptcha Integration

First, go to **Global Settings** from the fluent forms navbar, open the **Security** tab from the left sidebar, and click the **hCaptcha** option.

Now, you will be asked to provide the **Site Key** and **Secret Key** of your **hCaptcha Account** for the configuration.

![hCaptcha Settings Page](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/1.-hCAPTCHA-Settings-page-scaled.webp)

### Getting the hCaptcha Site and Secret Key

First, log in to your [hCaptcha Account](https://www.hcaptcha.com/). If you don’t have an hCaptcha account, [sign up here](https://www.hcaptcha.com/).

![Signup Here Fluent Forms](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/2.-signup-here-.webp)

Now, select the option **Add hCaptcha to my website or app** option. Then you will see a login page to log in to your account using the desired email.

![Add hCaptcha My Website Or App Integrate hCaptcha](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/3.-Add-hCAPTCHA-to-my-website-or-app.webp)

Once you log in to the account, click the **Generate** button to generate the **Secret Key**.

![Generate Button Fluent Forms](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/4.-Generate-button.webp)

Now, copy the **Secret Key** and click the **Continue** button to get the Site Key.

![Copy Secret Key Continue Button](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/5.-Copy-Secret-Key-Continue-button.webp)

Click on the **Add Site** button to add your desired site where you want to add hCaptcha.

![Add Site Button Integrate hCaptcha](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/6.-Add-Site-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address in the **Domains** field to register your domain for hCaptcha verification.

Also, for additional **Settings**, you can select the **hCaptcha Behavior** and **Passing Threshold** according to your needs. 

Once you provide all the necessary information, click the **Save** button, and you will get your desired Site key.

![Name Domain Settings Save Button](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/7.-Name-Domain-Settings-Save-button.webp)

Now, copy the **Site Key** by clicking the **Copy** button under the desired added site.

![Copy Site Key Button](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/8.-copy-Site-Key-button.webp)

## Connecting hCaptcha with Fluent Forms

Return to the **Global Settings** from the **FluentForms Navbar**, open the **Security** tab from the left sidebar, and click the **hCaptcha**. 

Now, paste the **Keys** you copied from the **hCaptcha** into the **Site Key** and **Secret Key** fields respectively.

![Paste Site Key And Secret Key](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/9.-Paste-site-key-and-secret-key-scaled.webp)

After you provide the keys, a pop-up will appear to **Verify** their validity.

![Verify Button Fluent Forms](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/10.-Verify-button.webp)

Finally, press the **Save Settings** button to make your **hCaptcha Integration** functional. 

![Save Settings Button Integrate hCaptcha](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/11.-Save-Settings-button-scaled.webp)

## Integrating hCaptcha with Forms

Go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form** by clicking the **Edit** button where you want to set this hCaptcha protection.

![Edit Button Integrate hCaptcha](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/12.-Desired-form-Edit-button-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the [hCaptcha input field](/hcaptcha-in-fluent-forms).

Finally, click the **Save Form** button to integrate your configured hCaptcha into this form.

![Added hCaptcha Input Field Save Button](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/13.-Added-hCAPTCHA-input-field-Save-Form-button-scaled.webp)

Here is the preview of the integrated hCaptcha in a specific form.

![Preview hCaptcha Field Integrate hCaptcha](/images/security-spam/how-to-integrate-hcaptcha-with-fluent-forms/14.-Preview-of-hCAPTCHA-field-in-a-form.webp)
