# Phone Field GEO-Location Provider

Fluent Forms supports **GEO-location detection** for phone number fields, allowing the form to **automatically detect a user's country** based on their IP address. This improves user experience and ensures more accurate data collection.

Follow this simple step by step process to enable this feature.

## Get an IPinfo Access Token

Fluent Forms uses ipinfo.io to verify users’ GEO Locations which just works fine for a general form.

Now login to [ipinfo.io](http://ipinfo.io) account. The free plan includes up to **50,000 validations per month**. If you expect more, consider upgrading to a paid plan.

Once logged in, navigate to the **Token** section in the left sidebar. Now, copy your **Access Token** displayed on the page.

![Access Token Ipinfo](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/Access-token-ipinfo-01-scaled.webp)

### Configure GEO-Location Provider in Fluent Forms

To configure GEO-Location, go to your Fluent Forms and click on **Global Settings**. Scroll down to the settings page until you find the **Geo-Location provider** option.

Now, paste the **Access Token** that you copied from the **IPinfo** account and click **Save Settings** to apply the GEO-location functionality.

![Geo Location](/images/advanced-developer/logs-tracking/phone-field-geo-location-provider/GEO-location-02-scaled.webp)

Once configured, phone fields in your forms will automatically suggest the correct country code based on the user’s IP location.
