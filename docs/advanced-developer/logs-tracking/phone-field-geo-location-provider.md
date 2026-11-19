---
description: "Fluent Forms supports GEO-location detection for phone number fields, allowing the form to automatically detect a user's country based on their IP…"
---

# Phone Field GEO-Location Provider (Pro)

Fluent Forms supports **GEO-location detection** for [phone number fields](/phonemobile-input-field). The form detects a user's country from their IP address and selects it for them. This page shows you how to set up the provider.

This feature needs Fluent Forms Pro.

## Get an IPinfo Access Token (Optional)

Fluent Forms uses ipinfo.io to detect users’ locations. The token is optional. Without it, Fluent Forms falls back to another provider. For a high volume of users, add an API token for more reliable results.

1. Log in to your [ipinfo.io](http://ipinfo.io) account.
2. Open the **Token** section in the left sidebar.
3. Copy the **Access Token** shown on the page.

![Access Token Ipinfo](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/Access-token-ipinfo-01-scaled.webp)

### Configure GEO-Location Provider in Fluent Forms

1. Click the **Global Settings** (gear) icon at the top right of Fluent Forms.
2. In the left menu, open **Other Settings** and click **Geo-Location Provider**.
3. Paste the **Access Token** from your **IPinfo** account into the **Geo API Token** field.
4. Click **Save**.

![Geo Location](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/GEO-location-02-scaled.webp)

Turn on **Enable Auto Country Select** in your [phone field](/phonemobile-input-field) settings. Phone fields then suggest the correct country code from the user’s IP location.
