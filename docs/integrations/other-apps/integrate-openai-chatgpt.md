---
description: "ChatGPT, developed by OpenAI, is an AI system chatbot trained to follow instructions in a prompt and provide detailed responses for various purposes, such…"
---

# Integrate OpenAI ChatGPT

ChatGPT, developed by OpenAI, is an AI chatbot trained to follow instructions in a prompt and give detailed responses. You can use it for conversation, insights, task automation, and more.

Fluent Forms integrates OpenAI ChatGPT so you can create forms with simple commands. You can also set up AI-generated confirmation messages, emails, and PDF feeds for form submissions.

This guide shows you how to connect [OpenAI ChatGPT](https://openai.com/) with Fluent Forms. To build an entire form from a prompt instead, see [How to Create a Form with OpenAI ChatGPT](/create-a-form-with-openai-chatgpt).

## Enable OpenAI ChatGPT Integration

> [!Note]
> **OpenAI ChatGPT** requires **Fluent Forms Pro**. See [Upgrade to Fluent Forms Pro Add-on](/upgrade-to-pro-add-on).

Click the gear icon in the Fluent Forms top bar to open **Global Settings**, open **Other Settings** in the left menu, and open the **OpenAI ChatGPT** settings.

![Enable OpenAI ChatGPT Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/1.-Enable-OpenAI-ChatGPT-scaled.webp)

Once you enable OpenAI ChatGPT, Fluent Forms asks for the **Access Code** of your **ChatGPT Account**.

> [!Tip]
> Click **Get OpenAI ChatGPT API Keys** to collect your API key and complete the integration.

![Access Code Fluent Forms](/images/integrations/other-apps/integrate-openai-chatgpt/2.-Access-Code-scaled.webp)

### Get the OpenAI ChatGPT Access Code

1. Open the [OpenAI API keys page](https://platform.openai.com/account/api-keys) and **Log in** or **Sign up** for the **OpenAI ChatGPT** **Account** that you want to connect to Fluent Forms.

![Login Or Signup ChatGPT Account](/images/integrations/other-apps/integrate-openai-chatgpt/3.-Login-or-Signup-to-ChatGPT-account-scaled.webp)

2. On your account’s **Dashboard**, go to **API keys** in the left menu and click **+ Create new secret key** in the top right corner.

![Create Secret Key](/images/integrations/other-apps/integrate-openai-chatgpt/4.-Create-New-Secret-Key-scaled.webp)

3. In the pop-up, fill in all the fields and click **Create secret key**.

![Create Secret Key Button](/images/integrations/other-apps/integrate-openai-chatgpt/5.-Create-secret-key-button.webp)

4. Click **Copy** to copy the **OpenAI API key.**

![Copy Access Code](/images/integrations/other-apps/integrate-openai-chatgpt/6.-Copy-access-code.webp)

## Connect OpenAI ChatGPT with Fluent Forms

1. Return to the **OpenAI ChatGPT Integration** page. To open it, go to **Integrations** in the top bar and click **Manage** next to the module.
2. Paste the **API Key** you copied from **OpenAI ChatGPT** into the **Access Code** field.
3. Click **Verify OpenAI ChatGPT** to activate the **ChatGPT Integration** module.

![Paste Access Code](/images/integrations/other-apps/integrate-openai-chatgpt/7.-Paste-access-code-scaled.webp)

Fluent Forms now shows that your **OpenAI ChatGPT** is connected. Click **Verify Connection Again** to verify the connection, or **Disconnect OpenAI ChatGPT** to disconnect it.

![Verify Or Disconnect ChatGPT Connection](/images/integrations/other-apps/integrate-openai-chatgpt/8.-Verify-or-Disconnect-chatgpt-connection-scaled.webp)

## Integrate OpenAI ChatGPT with Forms

Go to **Forms** in the **Fluent Forms Navbar**, select the form you want to connect to **OpenAI ChatGPT**, and open the **Configuration** tab.

> [!Note]
> If you do not have a form yet, see [Create a Form from Scratch](/create-a-form) or [Create a Form using Templates](/using-and-customizing-pre-built-quick-forms).

![Open Settings Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/9.-Open-desired-form-Settings-scaled.webp)

On the form's **Configuration** page, go to **Integrations & Add-ons** → **Integrations**, click **Add New Integration**, and select the **OpenAI ChatGPT** integration feed from the drawer.

![Add Integration Dropdown Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/10.-Add-new-integration-dropdown-scaled.webp)

The feed settings open with these options:

1. **Name:** Fluent Forms gives the integration a default name. Change it at any time.
2. **Select Role:** Click the Arrow Icon in the right corner and select a role from the dropdown list. The role sets the writing tone of your AI-generated confirmation texts.
3. **Write Query:** Enter instructions for how ChatGPT writes the confirmation message to your customers after each form submission. Use the ShortCode button in the right corner to fetch dynamic form data.
4. **Waiting Message with Loader:** Enter the message that shows with a loader while ChatGPT generates the result. Leave it empty to skip the loader.
5. **Conditional Logics:** Run the OpenAI ChatGPT integration only when your submission values match the conditions you set. See the [Conditional Logic guide](/set-up-forms-with-conditional-logic).
6. **Enable This Feed:** Check this option to keep the feed enabled so all its actions run.

Click **Save** when you are done. OpenAI ChatGPT is now connected to this form.

> [!Warning]
> Do not include passwords, API keys, or other sensitive data in **ChatGPT** query instructions.

![Save Feed Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/11.-Save-Feed-scaled.webp)

The **OpenAI ChatGPT Integration Feed** now appears in the list. Click the **Settings Icon** to modify it or the **Trash Icon** to delete it. Turn the **Toggle** off to disable the feed, and on to enable it again.

![Added OpenAI ChatGPT Integraton Feed](/images/integrations/other-apps/integrate-openai-chatgpt/12.-Added-OpenAI-ChatGPT-Integraton-Feed-scaled.webp)

## Add the Shortcode for Submission Confirmation

After you add the OpenAI ChatGPT feed, you get a shortcode. Add it to your confirmation so Fluent Forms sends the ChatGPT confirmation message after form submission.

> [!Tip]
> Use the **ChatGPT feed shortcode** in confirmation messages, email notifications, or PDF feeds.

1. Click **Configuration** in the form's top bar and open **Confirmation Settings** under **Responses** in the left menu.
2. Click the **Add Shortcodes** dropdown arrow in the right corner under the **Message to show** option.
3. Select **Chat GPT** and click the **ChatGPT Feed** you created.

![Confirmation Settings Fluent Forms](/images/integrations/other-apps/integrate-openai-chatgpt/13.-Confirmation-Settings-scaled.webp)

4. After the shortcode appears under **Message to Show**, click **Save** **Settings**.

![Save Settings Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/14.-Save-Settings-scaled.webp)

## Embed the Form on the Frontend

1. Open the form’s **Editor** from the top navbar.
2. **Copy** the **Shortcode** from the top right side and **paste** it into your Page or Post.
3. Click **Preview & Design** in the middle to preview the form.
4. Click **Save** **Form** to save all your changes.

![Save Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/15.-Save-Form-1-scaled.webp)

### Preview of Integrated OpenAI ChatGPT

This is the preview of the added form.

![Preview Integrate OpenAI ChatGPT](/images/integrations/other-apps/integrate-openai-chatgpt/16.-Form-Preview-scaled.webp)

When a customer orders food and submits the form, the customer gets the confirmation message shown below.

![ChatGPT Response Preview 1024x248](/images/integrations/other-apps/integrate-openai-chatgpt/17.-ChatGPT-response-preview-1024x248.webp)
