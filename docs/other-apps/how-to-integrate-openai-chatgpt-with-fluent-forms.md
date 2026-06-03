# How to Integrate OpenAI ChatGPT with Fluent Forms

ChatGPT, developed by OpenAI, is an AI system chatbot trained to follow instructions in a prompt and provide detailed responses for various purposes, such as engaging in conversation, gaining insights, automating tasks, and many more.

Fluent Forms now integrates OpenAI ChatGPT, making it easier for users to create Forms effortlessly with simple commands and set up AI-generated confirmation messages or emails and even PDF feeds for form submissions.

This article will guide you through integrating [OpenAI ChatGPT](https://openai.com/) with [Fluent Forms](https://fluentforms.com/).

## Enabling OpenAI ChatGPT Integration

To learn how to enable OpenAI ChatGPT integration, follow the steps with the screenshots below – 

> Before starting the process, ensure you installed and activated the Fluent Forms Pro plugin on your WordPress site.

First, go to **Integrations** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **OpenAI ChatGPT** through the search bar, and get the **OpenAI ChatGPT** integration module.

Now, turn on the **Toggle** to enable the **OpenAI ChatGPT** module, and click the **Settings Icon** on the right side. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/1.-Enable-OpenAI-ChatGPT-scaled.webp)

Once you enable OpenAI ChatGPT, you will be asked for the **Access Code** of your **ChatGPT Account**.

> Click the Get OpenAI ChatGPT API Keys link to collect the Access Code and integrate the ChatGPT successfully.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/2.-Access-Code-scaled.webp)

### Getting the OpenAI ChatGPT Access Code

To learn how to get the OpenAI ChatGPT **Access Code**, follow the steps with screenshots below –

First, [click here](https://platform.openai.com/account/api-keys), it will redirect to a page where you need to **Log in** or **Sign up** for your **OpenAI ChatGPT** **Account** that you want to integrate with Fluent Forms.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/3.-Login-or-Signup-to-ChatGPT-account-scaled.webp)

Once you are on your account’s **Dashboard**, go to the **API keys** from the left menu, and click the **+ Create new secret key** button in the top right corner.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/4.-Create-New-Secret-Key-scaled.webp)

Now, a pop-up will appear where you need to fill in all the fields with the necessary information and click the **Create secret key** button.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/5.-Create-secret-key-button.webp)

Finally, you will get the **OpenAI API key.** Copy it by clicking the **Copy** button to integrate the OpenAI ChatGPT with Fluent Forms.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/6.-Copy-access-code.webp)

## Connecting OpenAI ChatGPT with Fluent Forms

Return to the **OpenAI ChatGPT Integration** page under the **Configure Integrations** tab of the **Global Settings** section from the **Fluent Forms** **Navbar**. Now, paste the **API Key** you copied from **OpenAI ChatGPT** into the **Access Code** field.

Finally, press the **Verify OpenAI ChatGPT** button to make your **ChatGPT Integration** module functional. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/7.-Paste-access-code-scaled.webp)

You can see that your **OpenAI ChatGPT** is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the **Verify Connection Again/Disconnect OpenAI ChatGPT** button.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/8.-Verify-or-Disconnect-chatgpt-connection-scaled.webp)

## Integrating OpenAI ChatGPT with Forms

To learn how to integrate OpenAI ChatGPT into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select** the **Desired Form** where you want to integrate your **OpenAI ChatGPT,** and click the **Settings** button. 

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/9.-Open-desired-form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **OpenAI ChatGPT** integration feed from the dropdown list. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/10.-Add-new-integration-dropdown-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the OpenAI ChatGPT.  

**All the settings options mentioned in the screenshot below are briefly explained:**

1. Name: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. Select Role: Select a role from the dropdown list by clicking the Arrow Icon in the right corner as per your needs to set the writing tone of your AI-generated confirmation texts.

1. Write Query: Here, provide the proper instructions on how you want ChatGPT to send a confirmation message to your customers after each form submission. You can also use shortcodes to fetch dynamic form data using the ShortCode button in the right corner.

1. Conditional Logics: This option allows OpenAI ChatGPT integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this Documentation.

1. Enable This Feed: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once you are done, click the **Save Feed** button, and your OpenAI ChatGPT will be integrated into this specific form!

> Remember, never pass any sensitive information on Query instructions given for ChatGPT.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/11.-Save-Feed-scaled.webp)

After successful Integration, you will now see that your **OpenAI ChatGPT Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Settings Icon,** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/12.-Added-OpenAI-ChatGPT-Integraton-Feed-scaled.webp)

## Adding Shortcode for Submission Confirmation

After integrating the OpenAI ChatGPT Feed, you will receive a shortcode that must be added to ensure the ChatGPT confirmation message is sent after form submission.

> Remember, using the Shortcode of Chat GPT Feed, you can send the Confirmation message after Submission through Email Notification or PDF Feed as well.

To learn how to add Shortcode for Submission Confirmation, follow the steps below – 

First, go to **Settings & Integrations** and open the **Confirmation Settings** option under **Settings** from the left menu.

Now, click the **Add Shortcodes** dropdown arrow in the right corner under the **Message to show** the option. Then, select **Chat GPT** and click the **ChatGPT Feed** you created a while ago. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/13.-Confirmation-Settings-scaled.webp)

Once the shortcode is added under the **Message to Show** option, click the **Save** **Settings** to save all your changes.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/14.-Save-Settings-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, go to the form’s **Editor** from the top navbar to embed and display the form on a specific Page/Post on your site.

Now**, copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design** button in the middle.

Once you are done, click the **Save** **Form** button to save all your changes. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/15.-Save-Form-1-scaled.webp)

## Preview of Integrated OpenAI ChatGPT

Here, you can see the preview of the added form. 

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/16.-Form-Preview-scaled.webp)

Now, when a customer orders food and submits the Form, he/she will get the confirmation message as shown below.

![](/images/other-apps/how-to-integrate-openai-chatgpt-with-fluent-forms/17.-ChatGPT-response-preview-1024x248.webp)

This way, you can easily integrate OpenAI ChatGPT with Fluent Forms!
