# AffiliateWP Integration with Fluent Forms

**AffiliateWP** is a powerful affiliate management plugin for WordPress that helps you track and manage your site’s affiliates. By integrating **AffiliateWP** with **Fluent Forms**, you can automatically create referral records whenever a customer visits your site through an affiliate link and makes a submission.

This guide will show you how to connect **AffiliateWP** with **Fluent** **Forms** step by step.

> [!Note]
> **AffiliateWP** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/docs/upgrade-to-fluent-forms-pro-add-on).

## Enable AffiliateWP Integration

To learn how to enable AffiliateWP integration, follow the steps with the screenshots below – 

First, navigate to **Integrations** from the **Fluent Forms** Navbar, search for [**AffiliateWP**](https://affiliatewp.com/) using the search bar, and get the **AffiliateWP** integration module. Now, **toggle** on the module to enable AffiliateWP.

![Enable AffiliateWP Integration](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/enable-affiliatewp-integration-01-scaled.webp)

### Enable Fluent Forms in AffiliateWP

Now, navigate to your WordPress dashboard and go to AffiliateWP. From the **AffiliateWP settings** under the **Integrations** **Tab**, enable the **Fluent** **Forms** option and click on the **Save** **Changes** button.

![AffiliateWP Settings](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/AffiliateWP-Settings-02.webp)

### Get the Affiliate ID

Now, go to the **AffiliateWP** Plugin from the left menu of the dashboard, and you will see an **Affiliate** option here. Get the **Affiliate** **ID** here.

![Affiliates ID](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/affiliates-id-04-scaled.webp)

### Integrate AffiliateWP into Fluent Forms

To learn how to integrate AffiliateWP into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your AffiliateWP, and click the **Settings** button. 

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![Settings AffiliateWP Integration](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/Form-Settings-03-scaled.webp)

Once you are on the **Settings & Integrations**, scroll to the **Affiliate** section at the bottom. **Enable** **Allow Referrals** and configure the referral settings from the dropdown as needed.

![Allow Referral](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/allow-referral-04-scaled.webp)

### Add the Form to a Page

To add the form to a page, first, **copy** your Fluent Form’s **shortcode**. Create a new page (you can open it in an incognito window for testing). **Paste** the shortcode on the page.

Then, add your affiliate link to the URL using this format: **?ref=1** — where **1** is your Affiliate’s unique ID.

For example: **https://yourwebsite.com/form-page/?ref=1**

### Test and View the Referral

Submit the form using the affiliate link. When a customer submits the form, **AffiliateWP will automatically generate a referral** for the corresponding affiliate. 

To view the generated referrals, go to **AffiliateWP → Referrals** in your WordPress dashboard.

![Referral Submit](/images/integrations/other-apps/affiliatewp-integration-with-fluent-forms/referral-submit-05-scaled.webp)

By following this guide, you can easily integrate AffiliateWP with Fluent Forms!
