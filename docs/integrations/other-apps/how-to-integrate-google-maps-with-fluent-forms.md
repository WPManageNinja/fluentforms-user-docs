# How to Integrate Google Maps with Fluent Forms

**Fluent Forms** integrates **Google Maps** to allow your users to **auto-fill** the [Address field](/docs/address-input-field-in-fluent-forms) with the help of Google Maps. This article will guide you through integrating **Google Maps** in **Fluent Forms** on your **WordPress Site**.

> Remember, Google Maps is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Integrating Google Maps with Fluent Forms

To learn how to integrate with Google Maps, follow the steps with the screenshots below – 

First, go to the **Global Settings** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, open the **Configure Integrations** tab in the left menu, and click the **Google Maps Integration**. 

Once you are on the **Google Maps Integration Settings,** you will be asked for the **Google Maps API Key** from your Google Account. Then, click the **Save Settings** button, and Google Maps will be connected to Fluent Forms.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/1.-Google-Maps-Integration-Settings-page-scaled.webp)

### Getting the Google Map API Key

To learn how to get the Google Map API Key from Google, follow the steps with screenshots below –

First, go to your [Google Cloud Console](https://console.cloud.google.com/) and select an existing project you want to connect with **Fluent Forms** by clicking the **drop-down** **box** in the top left corner.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/2.-My-Project-scaled.webp)

Or, to get the API Key, you can create a new project by clicking the **NEW PROJECT** button in the top right corner.

**For example**, I selected an existing project called Google Map Integration to show you the whole process.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/3.-New-Project-scaled.webp)

After selecting the project, click the **APIs & Services** tab.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/4.-APIs-Services-scaled.webp)

Now, click the **+ ENABLE APIS AND SERVICES** option at the top.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/5.-Enable-APIs-and-Services--scaled.webp)

Then, select the **Maps JavaScript API** and **Places API** options respectively, and enable them.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/6.-Maps-Javascript-Place-API-scaled.webp)

Click the **ENABLE** button of the Maps JavaScript API.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/7.-Enable-Maps-Javascript-API--scaled.webp)

Click the **ENABLE** button of Places API.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/8.-Enable-Places-APi-scaled.webp)

Now, return to the **APIs & Services** tab, go to the **Credentials** from the left menu, click the **+ CREATE CREDENTIALS** option at the top, and press the **API key** button. 

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/9.-Credentials-API-Key-scaled.webp)

A pop-up box will appear with the Google Map API Key. Simply copy it by clicking the **Copy** **Icon**. 

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/10.-copy-Goggle-map-API-key.webp)

### Connecting Google Maps with Fluent Forms

Go back to the **Google Maps Integration Settings** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. 

Paste the **API Key** you copied from **Google** into the **Google Map API Key** field.

Finally, press the **Save Settings** button, and your **Google Map Integration** module will be enabled.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/11.-Paste-API-Key-scaled.webp)

Now, you can see that the Google Map has been successfully connected to your **Fluent Forms**. You can disconnect it anytime by clicking the **Disconnect Google Map API** button.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/12.-Disconnect-Google-Map-API-scaled.webp)

## Integrating Google Maps with Address Field

To learn how to integrate Google Maps into any specific Form in Fluent Forms, follow the steps with the screenshots below –

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/qwibDvaUoUo" title="YouTube video player" frameborder="0" allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

First, go to **Forms** from the **Fluent Forms Navbar**, **select** a **Form** that has an **Address** field where you want to integrate your **Google Maps,** and click the **Editor** button.

> If you do not have any existing forms, read the [Create a Form with Fluent Forms](/docs/how-to-create-a-form-with-fluent-forms) documentation to create a new one. Also, to learn more detail about the process of adding and customizing the Address field, read the Address field documentation linked above.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/13.-Open-desired-form-Editor-scaled.webp)

Once you are on the form **Editor**, go to the **Address**, hover over it, and click the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer the **Autocomplete Feature** options for integrating Google Maps into this field. 

Simply **enable** it by checking the **Enable Autocomplete (Google API)** box, and you will get three more options. These are:

**1. Show Map**: If you want to show the Google Map option on your Form, check the **Enable Map (Google Map)** option.

**2. Save Coordinates**: Enable the **See User Location on Map (Latitude & Longitude)** option to save your users’ location coordinates. You can view these coordinates later in the form entries.

**3. Auto Locate**: Using this option, you can define how you want to display the user’s location if someone accesses the form. Three options are available here: Page Load, On Click & Disable. 

- Page Load: When you choose this option, the moment the page loads, the user’s location will be immediately detected.

- On Click: If you choose this option, a Click Icon will be next to the Address box. Users’ location will start to be located once they click on that icon.

- Disable: You can select this option if you want to disable the Auto Locate option.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/14.-Input-Customization-tab-of-Address-field-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, click the **Save** **Form** button to save all your changes. 

To embed and display the form in the front end, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design** button in the middle.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/15.-Save-Form-scaled.webp)

## Preview of Integrated Google Maps

Here, you can see the preview of the integrated Google Maps through the Form Entry based on the Integration.

For example, you can see the Address field is empty and the **Click Icon** is in the right corner of the Address box.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/16.-Form-Preview--scaled.webp)

Once you click the Icon, the address field is filled in automatically and the Google Map location also appears below.

![](/images/integrations/other-apps/how-to-integrate-google-maps-with-fluent-forms/17.-Map-preview-scaled.webp)

This way, you can easily integrate Google Maps with Fluent Forms!
