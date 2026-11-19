---
description: "AffiliateWP is a powerful affiliate management plugin for WordPress that helps you track and manage your site’s affiliates."
---

# AffiliateWP Integration

**AffiliateWP** is an affiliate management plugin for WordPress that helps you track and manage your site’s affiliates. With the **AffiliateWP** integration, Fluent Forms creates a referral record whenever a customer visits your site through an affiliate link and submits a form. This guide shows you how to connect **AffiliateWP** with **Fluent** **Forms** step by step.

> [!Note]
> **AffiliateWP** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Enable AffiliateWP Integration

Go to **Integrations** in the **Fluent Forms** Navbar, search for [**AffiliateWP**](https://affiliatewp.com/), and find the **AffiliateWP** module. **Toggle** the module on.

![Enable AffiliateWP Integration](/images/integrations/other-apps/affiliatewp-integration/enable-affiliatewp-integration-01-scaled.webp)

## Enable Fluent Forms in AffiliateWP

In your WordPress dashboard, go to AffiliateWP. Open the **AffiliateWP settings**, select the **Integrations** **Tab**, enable the **Fluent** **Forms** option, and click **Save** **Changes**.

![AffiliateWP Settings](/images/integrations/other-apps/affiliatewp-integration/AffiliateWP-Settings-02.webp)

### Get the Affiliate ID

In the left menu of the dashboard, open the **AffiliateWP** plugin and click **Affiliate**. Copy the **Affiliate** **ID** from there.

![Affiliates ID](/images/integrations/other-apps/affiliatewp-integration/affiliates-id-04-scaled.webp)

## Integrate AffiliateWP into Fluent Forms

Go to **Forms** in the Fluent Forms Navbar, select the form you want to connect to AffiliateWP, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Settings AffiliateWP Integration](/images/integrations/other-apps/affiliatewp-integration/Form-Settings-03-scaled.webp)

On the form's **Configuration** page, scroll to the **Affiliate** section at the bottom. This section appears only when AffiliateWP is active. **Enable** **Allow Referrals** and set the referral options from the dropdown as needed. Fluent Forms also rejects the referral when a payment is refunded or a subscription payment is canceled.

![Allow Referral](/images/integrations/other-apps/affiliatewp-integration/allow-referral-04-scaled.webp)

### Add the Form to a Page

1. **Copy** your Fluent Form’s **shortcode**.
2. Create a new page. For testing, you can open it in an incognito window.
3. **Paste** the shortcode on the page.
4. Add your affiliate link to the URL in this format: **?ref=1**, where **1** is your Affiliate’s unique ID.

For example: **https://yourwebsite.com/form-page/?ref=1**

### Test and View the Referral

Submit the form using the affiliate link. When a customer submits the form, **AffiliateWP automatically generates a referral** for the matching affiliate.

To view the referrals, go to **AffiliateWP → Referrals** in your WordPress dashboard.

![Referral Submit](/images/integrations/other-apps/affiliatewp-integration/referral-submit-05-scaled.webp)
