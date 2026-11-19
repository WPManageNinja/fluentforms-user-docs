---
description: "Fluent Forms integrates Google Maps to allow your users to auto-fill the Address field with the help of Google Maps."
---

# Integrate Google Maps

The **Google Maps** integration lets your users **auto-fill** the [Address field](/address-input-field) in **Fluent Forms**. This guide shows you how to connect **Google Maps** to **Fluent Forms** on your **WordPress site**.

> [!Note]
> **Google Maps** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

## Integrate Google Maps with Fluent Forms

Click the gear icon in the Fluent Forms top bar to open **Global Settings**, open **Other Settings** in the left menu, and click **Google Maps Integration**.

On the **Google Maps Integration Settings** page, Fluent Forms asks for the **Google Maps API Key** from your Google Account. Enter the key and click **Save** to connect Google Maps to Fluent Forms.

![Google Maps Integration Settings Page](/images/integrations/other-apps/integrate-google-maps/1.-Google-Maps-Integration-Settings-page-scaled.webp)

### Get the Google Map API Key

1. Go to your [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **drop-down** **box** in the top left corner and select an existing project to connect with **Fluent Forms**.

![My Project Fluent Forms](/images/integrations/other-apps/integrate-google-maps/2.-My-Project-scaled.webp)

You can also click **NEW PROJECT** in the top right corner to create a new project. This example uses an existing project called Google Map Integration.

![Project Fluent Forms](/images/integrations/other-apps/integrate-google-maps/3.-New-Project-scaled.webp)

3. After you select the project, click the **APIs & Services** tab.

![Apis Services Fluent Forms](/images/integrations/other-apps/integrate-google-maps/4.-APIs-Services-scaled.webp)

4. Click **+ ENABLE APIS AND SERVICES** at the top.

![Enable Apis And Services Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/5.-Enable-APIs-and-Services--scaled.webp)

5. Select **Maps JavaScript API** and **Places API** and enable them. If you plan to use **Use Google Places API (New)**, enable **Places API (New)** instead of **Places API**.

![Maps Javascript Place API](/images/integrations/other-apps/integrate-google-maps/6.-Maps-Javascript-Place-API-scaled.webp)

6. Click **ENABLE** for the Maps JavaScript API.

![Enable Maps Javascript API Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/7.-Enable-Maps-Javascript-API--scaled.webp)

7. Click **ENABLE** for Places API.

![Enable Places API Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/8.-Enable-Places-APi-scaled.webp)

8. Return to the **APIs & Services** tab and go to **Credentials** in the left menu.
9. Click **+ CREATE CREDENTIALS** at the top and click **API key**.

![Credentials API Key](/images/integrations/other-apps/integrate-google-maps/9.-Credentials-API-Key-scaled.webp)

10. In the **Create API key** popup, enter a name for the key. Under **API restrictions**, select **Maps JavaScript API** and **Places API**. Click **Create**.

![Create API Key](/images/integrations/other-apps/integrate-google-maps/Create-API-key-10.webp)

11. Click **Copy** to copy the key.

![Copy Goggle Map API Key](/images/integrations/other-apps/integrate-google-maps/10.-copy-Goggle-map-API-key.webp)

### Connect Google Maps with Fluent Forms

Return to the **Google Maps Integration Settings** page. To open it, click the gear icon in the top bar for **Global Settings** and go to **Other Settings** → **Google Maps Integration**.

Paste the **API Key** you copied from **Google** into the **Google Map API Key** field.

Optional settings:

- **Use Google Places API (New):** Turn this on to use the new Places API for address autocomplete. It needs **Places API (New)** enabled in Google Cloud Console.
- **Use Advanced Marker for the map:** Turn this on to use the advanced map marker. It appears only when **Use Google Places API (New)** is on and needs a **Google Map ID**.
- **Google Map ID:** Enter a Map ID that you create in the **Map Management** section of Google Cloud Console.

Click **Save** to enable the **Google Map Integration** module.

![Paste API Key](/images/integrations/other-apps/integrate-google-maps/11.-Paste-API-Key-scaled.webp)

Fluent Forms now shows that Google Map is connected. Click **Disconnect Google Map API** to disconnect it.

![Disconnect Google Map API](/images/integrations/other-apps/integrate-google-maps/12.-Disconnect-Google-Map-API-scaled.webp)

## Integrate Google Maps with the Address Field

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/qwibDvaUoUo" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Go to **Forms** in the **Fluent Forms Navbar**, select a **Form** that has an **Address** field, and click **Editor**.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

> [!Tip]
> For the **Address** field, see [Address Input Field in Fluent Forms](/address-input-field).

![Open Editor Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/13.-Open-desired-form-Editor-scaled.webp)

In the form **Editor**, hover over the **Address** field and click the **Pencil Icon**. The **Input Customization** tab opens on the right side with the **Autocomplete Feature** options for Google Maps.

Check **Enable Autocomplete(Google Map)** to turn it on. Three more options appear:

- **Show Map:** Check **Enable Map (Google Map)** to show the Google Map on your form.
- **Save Coordinates:** Enable **See User Location on Map (Latitude & Longitude)** to save your users’ location coordinates. You can view these coordinates later in the form entries.
- **Auto locate:** Choose how the form detects the user’s location: Page Load, On Click, or Disable.
  - **Page Load:** Fluent Forms detects the user’s location as soon as the page loads.
  - **On Click:** A Click Icon appears next to the Address box. Fluent Forms detects the user’s location when the user clicks that icon.
  - **Disable:** Turns off Auto Locate.

![Input Customization Tab Address Field](/images/integrations/other-apps/integrate-google-maps/14.-Input-Customization-tab-of-Address-field-scaled.webp)

## Embed the Form on the Frontend

Click **Save** **Form** to save all your changes.

To display the form on the front end, **copy** the **Shortcode** from the top right side and **paste** it into your Page or Post. To preview the form, click **Preview & Design** in the middle.

![Save Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/15.-Save-Form-scaled.webp)

### Preview of Integrated Google Maps

On the form preview, the Address field is empty and the **Click Icon** appears in the right corner of the Address box.

![Preview Integrate Google Maps](/images/integrations/other-apps/integrate-google-maps/16.-Form-Preview--scaled.webp)

When you click the icon, Fluent Forms fills in the address field automatically and the Google Map location appears below.

![Map Preview Fluent Forms](/images/integrations/other-apps/integrate-google-maps/17.-Map-preview-scaled.webp)
