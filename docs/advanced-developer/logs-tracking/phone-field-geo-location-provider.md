---
description: "Fluent Forms supports GEO-location detection for phone number fields, allowing the form to automatically detect a user's country based on their IP…"
---

# Phone Field GEO-Location Provider (Pro)

Fluent Forms supports **GEO-location detection** for [phone number fields](/phonemobile-input-field). The form detects a user's country from their IP address and selects it for them. This improves the user experience and helps you collect more accurate data. This page shows you how to set up the provider.

This feature needs Fluent Forms Pro.

## Get an IPinfo API Token

Fluent Forms uses ipinfo.io to detect users' locations. The token is optional for a general form. For a high volume of users, add an API token for more reliable results.

1. Log in to your [ipinfo.io](https://ipinfo.io/dashboard) account. The free plan includes up to 50,000 validations per month. If you expect more, consider a paid plan.
2. Open the **Dashboard**.
3. Find the **API Access** card.
4. Copy the **API Token**.

![Copy the API token from the IPinfo dashboard](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/01-ipinfo-api-token.webp)

## Configure the GEO-Location Provider in Fluent Forms

1. Click the **Settings** (gear) icon at the top right of Fluent Forms.
2. In the left menu, open **Other Settings** and click **Geo-Location Provider**.
3. Select **ipinfo.io** as the **Geo-Location Provider**.
4. Paste the token you copied from your **IPinfo** account into the **Geo API Token** field.
5. Click **Save**.

![Geo-Location Provider settings in Fluent Forms](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/02-geo-location-provider-settings.webp)

Turn on **Enable Auto Country Select** in your [phone field](/phonemobile-input-field) settings. Phone fields then suggest the correct country code from the user's IP location.
