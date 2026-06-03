# Category Reorganization + Short Sidebar Labels (for review)

**Status:** proposal only. Nothing in the real site has changed yet. Review this file; once
you approve, changes go into `.vitepress/sidebar.json`, `index.md`, `.vitepress/config.mjs`,
and a small `CLAUDE.md` note.

## What changes / what does NOT

- **Changes:** the sidebar group structure (28 flat → 16 journey sections, 2-level) **and**
  the sidebar item label (`text`) — shortened, e.g. *How to Install Fluent Forms* → **Install
  Fluent Forms**.
- **Does NOT change:** page H1 titles, slugs, URLs, file locations, images, or content.
- Local search uses the page **H1** (the full title), so search results stay descriptive even
  though the sidebar shows the short label.

## Shortening rules applied

1. Drop leading **"How to "** / **"Adding a "** / **"Setting up "** (keep the meaningful verb/noun).
2. Drop trailing **"in Fluent Forms" / "with Fluent Forms" / "in Fluent Form"** (redundant site-wide).
3. Field docs → just the field name (the group already says "Fields"): *Dropdown Field in
   Fluent Forms* → **Dropdown**.
4. Integration docs → just the service name (group says what kind): *How to Integrate Stripe
   with Fluent Forms* → **Stripe**.
5. Keep enough to stay unambiguous within the group.

Below, **bold** = the new sidebar label · *italic* = the unchanged page title it maps to.

---

## Proposed sidebar (preview)

### 1. Getting Started
- **Introduction** — *Getting Started With Fluent Forms*
- **Install Fluent Forms** — *How to Install Fluent Forms*
- **Upgrade to Pro** — *Upgrade to Fluent Forms Pro Add-on*
- **User Interface** — *Fluent Forms User Interface*
- **Glossary** — *Fluent Forms Glossary*

### 2. Creating Forms
**Form Builder Basics**
- **Create a Form** — *How to Create a Form with Fluent Forms*
- **Pre-built Quick Forms** — *Using and Customizing Pre-built Quick Forms in Fluent Forms*
- **Create with Fluent Forms AI** — *How to Create a Form with Fluent Forms AI*
- **Create with OpenAI ChatGPT** — *How to Create a Form with OpenAI ChatGPT*

**Conversational Forms**
- **Create a Conversational Form** — *How to create a conversational form*
- **Design a Conversational Form** — *How to Design a Conversational Form*

**Specialized Form Types**
- **Post Form** — *How to Create a Post Form with Fluent Forms*
- **User Registration Form** — *How to Create a WordPress User Registration Form With Fluent Forms*
- **User Update Form** — *How to Create a WordPress User Update Form With Fluent Forms*
- **Multi-Step Form** — *Creating a Multi-Step Form in Fluent Forms*
- **Surveys & Polls** — *Surveys and Polls in Fluent Forms*
- **Personality Quiz Form** — *Creating a Personality Quiz Form in Fluent Forms*
- **Inline Opt-in Form** — *Inline Opt-in Form using Fluent Forms*

### 3. Form Fields
**General Fields**
- **Simple Text** — *Adding a Simple Text Input Field*
- **Text Area** — *Adding a Text Area Input Field*
- **Name** — *Name Input Field in Fluent Forms*
- **Email Address** — *Email Address Input Field in Fluent Forms*
- **Numeric** — *Numeric Input Field in Fluent Forms*
- **Phone / Mobile** — *Phone/Mobile Input Field in Fluent Forms*
- **Address** — *Address Input Field in Fluent Forms*
- **Website URL** — *Website URL Input Field Guide*
- **Mask Input** — *Adding a Mask Input Field Guide*
- **Dropdown** — *Dropdown Field in Fluent Forms*
- **Radio** — *Radio Field in Fluent Forms*
- **Checkbox** — *CheckBox Field in Fluent Forms*
- **Multiple Choice** — *Multiple Choice Field in Fluent Forms*
- **Country List** — *Country List Field in Fluent Form*
- **Time & Date** — *Time & Date Input Field in Fluent Forms*
- **File Upload** — *File Upload Input Field in Fluent Forms*
- **Image Upload** — *Image Upload Input Field in Fluent Form*
- **Custom HTML** — *Custom HTML Field in Fluent Forms*

**Advanced Fields**
- **Action Hook** — *Action Hook Field in Fluent Forms*
- **Chained Select** — *Chained Select Field in Fluent Forms*
- **Checkable Grid** — *Checkable Grid Input Field in Fluent Forms*
- **Color Picker** — *Color Picker Field in Fluent Forms*
- **Custom Submit Button** — *Custom Submit Button in Fluent Forms*
- **Dynamic Field** — *Dynamic Field in Fluent Form*
- **FluentBooking** — *FluentBooking Field in Fluent Form*
- **GDPR Agreement** — *GDPR Agreement Field in Fluent Forms*
- **Hidden** — *Hidden Input Field in Fluent Forms*
- **Net Promoter Score (NPS)** — *Net Promoter Score in Fluent Forms*
- **Password** — *Password Input Field in Fluent Forms*
- **Quiz Score** — *Quiz Score in Fluent Forms*
- **Range Slider** — *Range Slider Field in Fluent Forms*
- **Ratings** — *Ratings Input Field in Fluent Forms*
- **Repeat Field** — *Repeat Input Field in Fluent Forms*
- **Rich Text** — *Rich Text Input Field in Fluent Forms*
- **Save Progress Button** — *Save Progress Button in Fluent Forms*
- **Section Break** — *Section Break in Fluent Forms*
- **Shortcode** — *Shortcode Input Field in Fluent Forms*
- **Terms & Conditions** — *Terms & Conditions Field in Fluent Forms*

**Container Fields**
- **Container** — *Add Container Fields in Fluent Forms*
- **Accordion Container** — *Add Accordion Container Fields in Fluent Forms*
- **Repeat Container** — *Add Repeat Container Field in Fluent Forms*
- **Resizeable Container** — *Resizeable Container in Fluent Forms*

**Post & Taxonomy Fields**
- **Post Title** — *Add Post Title Field in Post Forms*
- **Post Content** — *Add Post Content Field in Post Forms*
- **Post Excerpt** — *Add Post Excerpt Field in Post Forms*
- **Featured Image** — *Add Featured Image Field in Post Forms*
- **Post Update** — *Add Post Update Field in Post Forms*
- **Categories** — *Add Categories Taxonomy Field in Post Forms*
- **Tags** — *Add Tags Taxonomy Field in Post Forms*

### 4. Configuring Forms
**Form Settings**
- **Error Messages** — *Error Message Customization with Fluent Forms*
- **Help Messages** — *Help Message Customization in Fluent Forms*
- **Restrict Blank Submission** — *Restrict Blank Form Submission with Fluent Forms*
- **Require User Login** — *User Login Requirement in Fluent Forms*
- **Form Restrictions** — *Form Restrictions Feature in Fluent Forms*
- **Form Scheduling** — *Form Scheduling Feature in Fluent Forms*
- **Keyboard Navigation & Shortcuts** — *Keyboard Navigation & Shortcuts in Fluent Forms*

**Conditional Logic & Dynamic Values**
- **Conditional Logic** — *Set up Forms with Conditional Logic in Fluent Forms*
- **Dynamic Default Value** — *Dynamic Default Value in Fluent Forms*
- **Default Value from URL** — *Set Default Form Value from URL Parameters*
- **Dynamic Values in Steps** — *Dynamic Input Values In Form Steps*
- **Unique Field Validation** — *Unique Field Validation*
- **Step Scroll Offset** — *Set Scroll Offset of Form Steps*

**Calculations**
- **Numeric Calculation** — *Numeric Calculation in Fluent Forms*
- **Calculations on Repeat Field** — *How to add Calc Values on the Repeat Field*

### 5. Design & Styling
- **Official Form Styler** — *Official Form Styler of Fluent Forms*
- **Layout Settings** — *Form Layout Settings in Fluent Forms*
- **Custom CSS** — *Fluent Forms Styling/Custom CSS*
- **Modal / Popup / Lightbox** — *Modal/Popup/Lightbox in Fluent Forms*
- **CSS Ready Classes** — *How to use CSS Ready Classes*

### 6. Notifications & Confirmations
**Email Notifications**
- **Admin & User Notifications** — *How to Setup Admin/User Email Notifications*
- **Conditional Notifications** — *Conditional Email Notification in Fluent Forms*
- **Conditional Email Routing** — *Conditional Email Routing*
- **Weekly Email Summary** — *Weekly Email Summary*
- **Double Opt-in Emails** — *Set up Double Opt-in emails in Fluent Forms*
- **Emails Not Sending (Troubleshooting)** — *Fluent Forms Not Sending Email Confirmations*

**Confirmations**
- **Confirmation Message** — *Setup Form Submission Confirmation Message in Fluent Forms*
- **Conditional Confirmation** — *Conditional Confirmation Message in Fluent Forms*
- **Shortcodes in Confirmations** — *Shortcodes in Confirmation Settings*

### 7. Publishing & Embedding
- **Dedicated Landing Page** — *Dedicated Landing Page in Fluent Forms*
- **Embed in Gutenberg** — *How to embed your forms directly in Gutenberg layout*
- **Embed in Elementor** — *How to embed your forms using Elementor Widget*
- **Embed in Oxygen Builder** — *Fluent Forms with Oxygen Builder Widget*
- **Sidebar / Footer Widget** — *How to Use Your Forms as Widget on your Sidebar or Footer*

### 8. Payments
**Getting Started with Payments**
- **Create a Payment Form** — *How to Create a Payment Form with Fluent Form*
- **Payment Settings** — *Configure Payment Settings with Fluent Forms*

**Payment Fields**
- **Payment Item** — *Add Payment Item Field in Payment Forms*
- **Custom Amount** — *Add Custom Payment Amount Field in Payment Forms*
- **Item Quantity** — *Add Item Quantity Field in Payment Forms*
- **Subscription** — *Add Subscription Field in Payment Forms*
- **Coupon** — *Add Coupon Field in Payment Forms*
- **Payment Method** — *Add Payment Method Field in Payment Forms*
- **Payment Summary** — *Add Payment Summary Field in Payment Forms*

**Payment Gateways**
- **Stripe** — *How to Integrate Stripe with Fluent Forms*
- **PayPal** — *How to Integrate PayPal with Fluent Forms*
- **Mollie** — *How to Integrate Mollie with Fluent Forms*
- **Razorpay** — *How to Integrate Razorpay with Fluent Forms*
- **Square** — *How to Integrate Square with Fluent Forms (Inline Payment Integration)*
- **Paddle** — *How to Integrate Paddle with Fluent Forms*
- **Paystack** — *How to Integrate Paystack with Fluent Forms*
- **Authorize.Net** — *How to integrate Authorize.Net with Fluent Forms*

**Payment Reports**
- **Payment Reports** — *Payment Reports*

### 9. Managing Submissions
**Entries**
- **Managing Entries** — *Managing Entries in Fluent Forms*
- **Search & Filter Entries** — *How to Search and Filter Form Entries*
- **Frontend Entry View** — *Frontend Entry View*
- **Edit Submitted Entries** — *Edit User Submitted Entries With Fluent Forms*
- **Date & Time Stamp** — *How to Add a Date and Time Stamp to Form Entries*
- **Partial Entries** — *Partial Entries for Step Forms*
- **Auto-Delete Entries** — *Automatically Delete Form Entries*
- **Entry Visualizations** — *Visual Representation of Form Entries in Fluent Forms*
- **Edit History** — *Edit History Feature in Fluent Forms*
- **Admin Approval** — *Admin Approval Feature in Fluent Forms*
- **Show Entries with Ninja Tables** — *Show Fluent Forms Entries in Frontend using Ninja Tables*

**Reports**
- **Reports Dashboard** — *Reports Dashboard Overview*
- **Submission Reports** — *Submission Reports*

### 10. Integrations
**Email Marketing**
- **Mailchimp** — *How to Integrate Mailchimp with Fluent Forms*
- **ActiveCampaign** — *How to Integrate ActiveCampaign with Fluent Forms*
- **Brevo** — *How to Integrate Brevo (Formerly Sendinblue) with Fluent Forms*
- **Campaign Monitor** — *How to Integrate Campaign Monitor with Fluent Forms*
- **CleverReach** — *How to Integrate CleverReach with Fluent Forms*
- **Constant Contact** — *How to Integrate Constant Contact with Fluent Forms*
- **GetResponse** — *How to Integrate GetResponse with Fluent Forms*
- **Gist** — *Gist Integration with Fluent Forms*
- **Gist (How-to)** — *How to Integrate Gist with Fluent Forms*   ⚠ near-duplicate, see note
- **iContact** — *How to Integrate iContact with Fluent Forms*
- **Kit (ConvertKit)** — *How to Integrate Kit (Former ConvertKit) with Fluent Forms*
- **MailerLite** — *How to Integrate MailerLite with Fluent Forms*
- **Mailjet** — *How to Integrate Mailjet with Fluent Forms*
- **Mailster** — *How to Integrate Mailster with Fluent Forms*
- **MooSend** — *How to Integrate MooSend with Fluent Forms*
- **SendFox** — *How to Integrate SendFox with Fluent Forms*
- **Mailpoet** — *Mailpoet Integration with Fluent Forms*
- **Mautic** — *Mautic Integration with Fluent Forms*
- **Automizy** — *Automizy Integration with Fluent Forms*
- **ClickSend SMS** — *ClickSend SMS Integration with Fluent Forms*

**CRM**
- **FluentCRM** — *FluentCRM integration with Fluent Forms*
- **HubSpot** — *HubSpot Integration with Fluent Forms*
- **Salesforce** — *Salesforce Integration with Fluent Forms*
- **Zoho CRM** — *Zoho CRM Integration with Fluent Forms*
- **Pipedrive** — *Pipedrive Integration with Fluent Forms*
- **Drip** — *Drip Integration with Fluent Forms*
- **AmoCRM** — *AmoCRM Integration with Fluent Forms*
- **Insightly** — *Insightly Integration with Fluent Forms*
- **OnePageCRM** — *OnePageCRM Integration with Fluent Forms*
- **Salesflare** — *Salesflare Integration with Fluent Forms*

**Automation**
- **Zapier** — *How to Integrate Zapier with Fluent Forms*
- **Webhook** — *How to Integrate Webhook with Fluent Forms*
- **Platformly** — *How to Integrate Platformly with Fluent Forms*

**Team & Chat**
- **Slack** — *How to Integrate Slack with Fluent Forms*
- **Discord** — *How to Integrate Discord with Fluent Forms*
- **Telegram** — *How to Integrate Telegram with Fluent Forms*

**Other Apps**
- **AffiliateWP** — *AffiliateWP Integration with Fluent Forms*
- **Airtable** — *How to Integrate Airtable with Fluent Forms*
- **BuddyBoss** — *How to Integrate BuddyBoss with Fluent Forms*
- **Google Maps** — *How to Integrate Google Maps with Fluent Forms*
- **Google Sheets** — *How to Integrate Google Sheets with Fluent Forms*
- **Notion** — *How to Integrate Notion with Fluent Forms*
- **Trello** — *How to Integrate Trello with Fluent Forms*
- **Twilio** — *Twilio Integration with Fluent Forms*
- **OpenAI ChatGPT** — *How to Integrate OpenAI ChatGPT with Fluent Forms*
- **ClearOut (Email Validation)** — *Email Validation With ClearOut*

### 11. Security & Spam Protection
- **Honeypot & reCAPTCHA** — *Spam Protection With Honeypot and Google reCAPTCHA in Fluent Forms*
- **reCAPTCHA (Setup)** — *How to Integrate reCAPTCHA with Fluent Forms*
- **reCAPTCHA Field** — *reCAPTCHA Field in Fluent Forms*
- **hCaptcha (Setup)** — *How to Integrate hCaptcha with Fluent Forms*
- **hCaptcha Field** — *hCaptcha in Fluent Forms*
- **Cloudflare Turnstile** — *How to Integrate Cloudflare Turnstile with Fluent Forms*
- **Akismet** — *Integrate Akismet with Fluent Forms*

### 12. Modules & Special Features
- **PDF Module** — *Fluent Forms PDF Module*
- **Quiz Module** — *Fluent Forms Quiz Module*
- **Inventory Module** — *Fluent Forms Inventory Module*
- **Global Inventory Manager** — *Global Inventory Manager in Fluent Forms*
- **Post Selection Module** — *Post Selection Module in Fluent Forms*

### 13. Advanced & Developer
**Shortcodes & Smart Codes**
- **Shortcodes Overview** — *Fluent Forms Shortcodes Overview*
- **Helper Shortcodes** — *Using Helper Shortcodes in Fluent Forms*
- **Conditional Shortcodes** — *Conditional Shortcodes in Fluent Forms*
- **Smart Codes** — *Form Editor Smart Codes*
- **Pre-Fill from FluentCRM** — *Pre-Fill Form Fields with FluentCRM Data*

**Custom Fields & Meta**
- **Meta Box** — *How to use Meta Box Custom Fields with Fluent Forms*
- **Mapping Meta Fields** — *Mapping Meta Fields with Meta Keys in Fluent Forms*
- **ACF Custom Fields** — *Use ACF to Add a Custom Field in the Post Form*
- **JetEngine** — *Using JetEngine Custom Fields with Fluent Forms*

**Logs, Tracking & Utilities**
- **API Logs** — *Fluent Form API Logs*
- **Activity Logs** — *Fluent Forms Activity Logs*
- **Event Tracking (GA4)** — *Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager*
- **Global Search** — *Fluent Forms Global Search*
- **Phone Geo-Location** — *Phone Field GEO-Location Provider*

**Localization**
- **Translate with WPML** — *Translate Forms with WPML*
- **Translate Datepicker** — *Translate Datepicker Field of Fluent Forms Plugin*

### 14. Import, Export & Migration
- **Import & Export Forms** — *How to Import and Export Fluent Forms*
- **Migrate from Other Plugins** — *Fluent Forms Migrator (WPForms, Contact Form 7, Gravity Forms, Ninja Forms & Caldera Forms)*
- **Import Entries** — *Importing Entries in Fluent Forms*

### 15. Account & License
- **Managers & Access Control** — *Setting up Managers in Fluent Forms (Access Control)*
- **Transfer License** — *How to Transfer a License to a New Domain*
- **Cross-Domain FluentCRM** — *Connecting Fluent Forms from one domain with Fluent CRM to another domain*

### 16. Help & Support
- **FAQ** — *Frequently Asked Questions*
- **Get Support** — *How to Get Support*
- **Changelog** — *Changelog*

---

**Section totals:** 5 + 13 + 49 + 15 + 5 + 9 + 5 + 18 + 13 + 46 + 7 + 5 + 16 + 3 + 3 + 3 = **215** ✓

## What else changes (besides the sidebar)
- **Homepage cards** (`index.md`): repoint the 6 cards to the new journey (Getting Started,
  Creating Forms, Form Fields, Payments, Integrations, Managing Submissions).
- **Top nav** (`config.mjs`): journey entry points + a "Guides" dropdown.
- **CLAUDE.md**: (a) document the 2-level sidebar shape; (b) revise the "H1 must match sidebar
  text" rule — sidebar now uses a short label, intentionally different from the full page H1.

## Notes / open items
- **Two near-duplicate Gist docs** are both kept, labeled **Gist** and **Gist (How-to)**.
  Recommend merging into one later — tell me if you'd rather merge now.
- Labels are easy to tweak — flag any that feel too short or ambiguous and I'll adjust before
  applying.

*(This review file lives at the repo root and can be deleted after approval.)*
