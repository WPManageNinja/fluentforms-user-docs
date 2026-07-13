# Changelog

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in **Fluent Forms**.

## Fluent Forms v6.2.6

_Released on July 10, 2026_

::: code-group

```markdown [⚡ Improvements]
• Improved the Other option in conversational forms so it can be activated with the keyboard
```

```markdown [🐞 Bug fixes]
• Fixed a manager privilege escalation via a delegated WordPress role
• Fixed a payment permission bypass that let form managers update transactions and cancel subscriptions
• Fixed an oEmbed JSONP path-traversal XSS vulnerability
• Fixed checkbox and radio Other option values not saving the translated label on multilingual sites
• Fixed the Other option requiring a double-click to select in conversational radio and checkbox questions
```

:::

## Fluent Forms v6.2.5

_Released on June 09, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added missing integrations to the addons list and global search
```

```markdown [⚡ Improvements]
• Improved authorization scope for entry deletion so bulk and single deletes stay within the authorized request
```

```markdown [🐞 Bug fixes]
• Fixed conditional logic for empty fields, restoring the v6.2.2 behavior
• Fixed quiz question scores being lost on save when settings start empty
• Fixed fatal error when opening the editor for a deleted form
• Fixed duplicate field keys and broken drag-and-drop reorder in the editor advanced options
• Fixed coupon not clearing when conditional logic hides the coupon field
• Fixed overly long entry export URLs
• Fixed full-URL smartcodes being double-encoded by the shortcode parser
• Fixed submission and payment smartcodes not resolving on email/notification resend
• Fixed scheduler temporary-file cleanup not honoring the temp_file_delete_time filter
```

:::

## Fluent Forms v6.2.4

_Released on May 25, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added image cropping support to the Featured Image field on Post forms (Pro)
• Added a notice when the Fluent Forms REST endpoints are unreachable so empty form and entry lists after an upgrade are easier to diagnose
```

```markdown [🐞 Bug fixes]
• Fixed conversational form pretty URLs rendering
• Fixed Pretty URL toggle not persisting when disabled
• Fixed multi-step form submit visibility and step-skip logic
```

:::

## Fluent Forms v6.2.3 Pro

_Released on May 22, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added Tabs style for multi-step forms with Top and Left layouts, clickable step navigation, and a compact progress bar option
• Added a new Ranking field for ranking options by drag and drop in list or grid layout with quiz and report support
• Added PayPal Orders API v2 and Subscriptions API support
• Added image cropping for file upload fields with ratio and exact-dimension options
• Added pretty URL support for Landing Page and Conversational Form share pages
• Added keyboard shortcut support for saving form settings
```

```markdown [⚡ Improvements]
• Improved Conversational Form share options with email and embed copy buttons
• Improved Landing Page share settings
• Improved the Advanced Entries Filter UX with cleaner labels, grouped operators, and tidier value inputs
• Improved the Advanced Entries Filter to support not-in and not-equal operators
• Upgraded HubSpot integration to CRM v3 and Lists v3 APIs
```

```markdown [🐞 Bug fixes]
• Fixed custom radio and checkbox styles not rendering correctly on Safari and iOS
• Fixed payment status filter on translated admin sites
• Fixed ACF grouped fields not showing in post feed mapping
• Fixed Google Sheets integration failing when a worksheet name contains special characters
• Fixed repeater field including non-input fields in its response table
• Fixed HubSpot checkbox values being sent with an extra semicolon
• Fixed long HubSpot custom field labels being cut off in the settings dropdown
• Fixed taxonomy field showing IDs instead of names in entries and notifications
• Fixed AmoCRM OAuth redirect for amocrm.ru users
• Fixed subscription description showing recurring text when billing is set to once with a signup fee
• Fixed Landing Page media-left layout cutting off form fields
• Fixed Save Progress email not respecting SMTP plugin reply-to settings
• Fixed Authorize.Net treating held-for-review payments as failures
• Fixed Authorize.Net payment failing due to phone number validation
• Fixed HubSpot field mapping incorrectly converting text values to dates
• Fixed Dynamic field startsWith and endsWith filter options being swapped
• Fixed Advanced entries filter returning no results for numeric, date, and text searches
• Fixed italic text not rendering in custom HTML fields in conversational forms
• Fixed multi-word Google Fonts not loading in conversational forms
• Fixed save-and-resume drafts being visible across logged-in users on shared accounts
• Fixed Pipedrive Persons feed duplicating the Marketing Status field
• Fixed Pipedrive failing the API call when Marketing Status is set to No Consent
• Fixed Pipedrive integration error when campaigns are active
• Fixed Pipedrive Lead field mappings sending wrong data types for date and numeric custom fields
• Fixed Brevo integration not sending boolean field values correctly
• Fixed Brevo integration not mapping multiple-choice and category attribute types from Checkbox and Multi-select form fields
• Fixed the Offline payment method label not translatable in notifications
```

:::

## Fluent Forms v6.2.3 Free

_Released on May 21, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added option group support for Dropdown and Multi-select fields
• Added pinned column support in the entries table
• Added new icon presets, SVG icon support, and active/inactive color options for the Ratings field
• Added search to the form switcher in entries
```

```markdown [⚡ Improvements]
• Improved keyboard navigation in the entries table
• Improved accessibility for fixed columns and action buttons in entries
• Updated DOMPurify to tighten security
```

```markdown [🐞 Bug fixes]
• Fixed conditional logic settings not showing for custom fields in the editor
• Fixed conditional logic not-equal check when the target field has no value
• Fixed Name field layout when a sub-field has no label
• Fixed text and list formatting differences between the editor and preview
• Fixed AI form builder losing field hints for non-English prompts
• Fixed missing submission date in Excel exports
• Fixed garbled export filenames for forms with non-Latin titles
• Fixed form import breaking confirmation and notification settings
• Fixed the Find feature missing forms inside page builder popups
• Fixed entries not sorting by actual submission date
• Fixed form import corrupting custom CSS and JavaScript code
• Fixed visual artifacts in the collapsed form settings sidebar
• Fixed Global Settings sidebar collapse toggle not working on desktop
• Fixed the Excel export option incorrectly labeled as xlsv
• Fixed entry Next and Previous navigation breaking on sites that use a custom database table prefix
• Fixed fatal error when a Textarea field receives an array value during submission processing
• Fixed multi-word Google Fonts not loading in conversational forms
• Fixed textdomain_just_in_time notice on WordPress 6.7 and later, including WP Staging staging environments
• Fixed several strings that could not be translated on non-English admin sites
• Fixed the Entries page label showing garbled text on German-language sites
• Fixed confirmation redirect URL losing query-string values with encoded characters
```

:::

## Fluent Forms v6.2.2

_Released on April 23, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added subscription field support in payment calculations
```

```markdown [⚡ Improvements]
• Hardens email attachment path resolution to keep notification attachments inside allowed paths
• Hardens predefined form payload handling and confirmation validation
• Improved compatibility for legacy predefined field option validation
• Improved form-scoped access for submission collection and print endpoints
• Tightens allowed-forms scope handling for form managers
• Ensured form settings are normalized before use
• Preserves post-feed draft values on the resume
• Respects user locale in the form editor
• Improved ACL permission checks and helper coverage for delegated and full-access flows
• Hardens form HTML sanitization by blocking event handlers and escaping permission message shortcode output
• Improved global integration settings access restriction and protects payment filters AJAX metadata endpoint
• Sanitizes form step settings while preserving safe HTML in step button text
• Improved entry export to honor submission info selection
• Improved multisite site setup until initialization
• Improved long entry content previews
```

```markdown [🐞 Bug fixes]
• Fixed raw cookie values for smartcodes
• Fixed the integration of the ActiveCampaign issue
```

:::

## Fluent Forms v6.2.1

_Released on April 16, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added opt-in legacy HMAC fallback for pre-6.2.0 encrypted tokens to ease upgrade compatibility
• Added filter hooks for honeypot, Akismet, and CAPTCHA spam/failed messages
• Added database indexes to the `form_analytics` table for faster reporting queries
• Added mbstring fallback for servers without the extension
```

```markdown [⚡ Improvements]
• Hardens form-scoped permissions
• Hardens entry, preview, webhook, Zapier, import, and resend actions with form-scoped authorization checks (Pro)
• Hardens payment bulk actions and legacy payment AJAX fallbacks against unauthorized form access (Pro)
```

```markdown [🐞 Bug fixes]
• Fixed public PDF download support for legacy links
• Fixed draft submissions table support in entry export
• Fixed entries search ACL issue
• Fixed All Entries page localStorage persistence
• Fixed character-limit validation showing the configured message instead of a raw field name
• Fixed numeric validation so numeric-looking text is no longer treated as a number
• Fixed WPML addon activation failing with an Invalid plugin error
• Fixed imported entries after framework v2 request namespace changes (Pro)
• Fixed imported form styles not being restored correctly (Pro)
```

:::

## Fluent Forms v6.2.0 Free

_Released on April 1, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added filter hook for conversational form extra inputs
```

```markdown [⚡ Improvements]
• Upgraded internal framework for better performance and PHP 8.4 support
• Improved Stripe payment confirmation security
• Improved data export security
• Improved database query performance for reports
• Improved overall plugin security and stability
• Dev: Upgrade Guide for developers
```

```markdown [🐞 Bug fixes]
• Fixed textarea line breaks not displaying correctly in entries
```

:::

## Fluent Forms v6.2.0 Pro

_Released on March 31, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added support for core update of fluentform core version
```

```markdown [⚡ Improvements]
• Updated Square payments to the latest Payment Links API
• Improved payment security across all gateways
```

```markdown [🐞 Bug fixes]
• Fixed Square payment by migrating from deprecated CreateCheckout to Payment Links API
• Fixed Square order ID validation to prevent tampering on payment callback
• Fixed Authorize.Net not sending full billing address with payments
• Fixed draft not clearing after submission via Save & Resume link
```

:::

## Fluent Forms v6.1.21

_Released on March 17, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added subscription end date to auto-calculate `bill_times` for subscription payments
• Added transaction status validation (intended state) to prevent unauthorized payment confirmations
• Added payment amount verification after Stripe confirms payment
• Added centralized payment validation (BaseProcessor) with transaction status, ownership, and double-pay prevention
• Added nonce verification for RazorPay, Paystack, Paddle, and Authorize.Net payment confirmations
• Added payment amount verification for RazorPay, Paystack, and Paddle gateways
```

```markdown [⚡ Improvements]
• Hardens Stripe SCA payment confirmation endpoints against fraud and DoS
• Hardens payment confirmation endpoints against fraud and DoS across all gateways
```

```markdown [🐞 Bug fixes]
• Fixed spoofable `form_id` in SCA payment confirmation that could select wrong Stripe API key
• Fixed missing capability check on MailChimp interest groups endpoint
• Fixed unsanitized `sort_by` parameter in Logger and Submission queries
```

:::

## Fluent Forms v6.1.20

_Released on March 4, 2026_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Stripe coupon discount rounding losing cents on multi-quantity line items
• Fixed step form save and resume
```

:::

## Fluent Forms v6.1.19

_Released on February 25, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added backward-compatibility for deprecated classes
```

:::

## Fluent Forms v6.1.18

_Released on February 25, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added input sanitization to all report data endpoints
• Added sanitization to payment receipt shortcode request parameters
```

```markdown [⚡ Improvements]
• Improved file delete endpoint security
• Strengthens output escaping in payment receipt templates
• Tightens permissions to enforce view-only access for entry updates, partial-entry cleanup, and notification resends
• Expands entry editor sanitization with field-aware, type-specific handling and additional hardening
```

```markdown [🐞 Bug fixes]
• Fixed SQL LIKE wildcard injection in field uniqueness validation
• Fixed mixed SQL escaping patterns in post type queries
```

:::

## Fluent Forms v6.1.17

_Released on February 3, 2026_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed conversational form subscription plan not showing in payment summary when first option is selected
• Fixed Custom JS disappearing after reload
• Fixed conversational form "Other Option" field not appearing for radio buttons using Button Style
```

:::

## Fluent Forms v6.1.16

_Released on January 30, 2026_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed input image issue in conversational form
• Fixed form entries export issue
```

:::

## Fluent Forms v6.1.15

_Released on January 29, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added default form style option which auto-applies to all new forms with Form Styler (Pro) support
• Added dynamic autocomplete field type in dynamic field
• Added option to apply default style to imported forms
• Added prefix/suffix options for textarea, URL and password fields
• Added mobile keyboard type options for number and mask inputs
• Added verified plugins suggestions page
```

```markdown [⚡ Improvements]
• Improved AI form builder security
• Improved multiselect accessibility with Choices.js dropdown
• Improved form title generation in form history
• Improved form saving UX
```

```markdown [🐞 Bug fixes]
• Fixed repeater table generation in PDF
```

:::

## Fluent Forms v6.1.14

_Released on January 15, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added a form edit button in Elementor form widget
```

```markdown [🐞 Bug fixes]
• Fixed issue with numeric field
```

:::

## Fluent Forms v6.1.13

_Released on January 14, 2026_

::: code-group

```markdown [✨ Newly Added]
• Added mobile keyboard type option for numeric and Mask Input fields
• Added "Inherit Theme" option for Form Style Template in Elementor widget
• Added more string translation support for WPML
```

```markdown [⚡ Improvements]
• Improved country names according to the latest ISO 3166-1 alpha-2 list
```

```markdown [🐞 Bug fixes]
• Fixed Business Logo upload issue in payment settings
• Fixed Dynamic SmartCode not working for conversational forms
```

:::

## Fluent Forms v6.1.12

_Released on December 26, 2025_

::: code-group

```markdown [⚡ Improvements]
• Improved security and sanitization for confirmation messages
```

```markdown [🐞 Bug fixes]
• Fixed delay with condition and range slider field
• Fixed top performing form report count
• Fixed Button Style "Other Option" input issue with images
```

:::

## Fluent Forms v6.1.11

_Released on December 4, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed issue with saving showing invalid JSON
• Fixed default behavior of regex in advanced validation
```

:::

## Fluent Forms v6.1.10

_Released on December 2, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added "Other" option support in Conversational Form
```

```markdown [🐞 Bug fixes]
• Fixed global settings save issue
• Fixed form submission delay issue for a large condition set
```

:::

## Fluent Forms v6.1.8

_Released on December 1, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added reset button to Block form style customizer
```

```markdown [⚡ Improvements]
• Improved client IP detection
• Improved sanitization and security
```

:::

## Fluent Forms v6.1.7

_Released on November 21, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added autosave feature in global settings for Form Editor
```

```markdown [🐞 Bug fixes]
• Fixed button issue with payment shortcode
• Fixed date timezone issue with form schedule
```

:::

## Fluent Forms v6.1.6

_Released on November 12, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed block CSS issue
• Fixed conversational form shortcode warnings
```

:::

## Fluent Forms v6.1.5

_Released on November 12, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added Gutenberg Block Form Style Customization
• Added Conversational Form Editor shortcode support
• Added Custom CSS/JS support in form AI creation (beta)
• Added warning message for Name Attribute changes to prevent entry data loss
• Added a dropdown in permission manager selection
• Added signature field support in conversational form (for signature addon)
• Added collapsible areas (accordion & tab mode)
• Added Authorize.Net payment gateway integration
• Added Net Promoter Score field support in Conversational Forms
• Added "Other" option for Checkboxes allowing users to specify custom values
• Added conditional shortcode support in Double Opt-in email subject and body
• Added filter for image upload types customization
```

```markdown [⚡ Improvements]
• Updated export library to OpenSpout for better compatibility
• Updated Action Scheduler library to latest version
• Improved database query performance with optimized indexes
• Improved accessibility for screen readers
• Improved translations
• Improved Design Preview color handling with block themes
• Improved plugin security and escaping from Plugin Check suggestions
• Improved accessibility with proper aria-labels for next/prev/submit buttons
• Improved Double Opt-in confirmation error handling
• Improved Dynamic field documentation for AND/OR condition clarity
• Improved Dynamic field input customization to show all post authors
• Improved CleverReach integration documentation
• Improved Save and Continue feature compatibility with Repeater Container
• Improved Mailster integration to use `mailster_subscribe` function
```

```markdown [🐞 Bug fixes]
• Fixed Payment Form submission failures inside Elementor popups
• Fixed Custom style CSS backtick insertion issue
• Fixed country name from "Turkey" to "Türkiye"
• Fixed `{user.meta.meta_key}` shortcode for non-English languages
• Fixed Advanced Filter UX issue with persistent dialog box
• Fixed textarea line break in entry import/export
• Fixed Entries table showing option values instead of labels for radio/select fields
• Fixed Quantity field default value not working with conditional logic
• Fixed Range Slider duplication in Elementor popups
• Fixed Global Inventory module name display for single payments
• Fixed Rich Text Field mapping to ACF user fields
• Fixed `payment_total` showing extra digits in webhook integration
• Fixed reCAPTCHA V3 overlapping prev/next buttons
• Fixed JetEngine field mapping with conditional form fields
• Fixed Dropdown Field mapping with JetEngine meta fields default selection
• Fixed Country field issue with "Curaçao" special character handling
• Fixed inconsistent Dropdown field search behavior with synonyms
• Fixed grammar error in Multiselect field max selection message
• Fixed form reset not clearing field values
• Fixed Range Slider default value positioning in conditional container fields
• Fixed uploaded image file renaming by custom hooks affecting featured image names
• Fixed Inventory module null quantity rendering
• Fixed Telegram message formatting spacing issues
• Fixed multiple `payment_total` shortcode not reflecting coupon-adjusted prices
• Fixed Phone field validation conflicts with other plugins
```

:::

## Fluent Forms v6.1.4

_Released on September 23, 2025_

::: code-group

```markdown [⚡ Improvements]
• Updated language files
```

:::

## Fluent Forms v6.1.3

_Released on September 23, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Elementor backend editor not working when Fluent Forms was added
• Fixed the multiple choice field not working in Elementor popup
• Fixed Report Page UI not properly showing in RTL
• Fixed Stripe payment error when global auto-load CAPTCHA is enabled in conversational forms
• Fixed the Conversational Form Phone Field to return numbers in the full international format
• Fixed Custom User Meta Fields not populating
• Fixed the phone field search input style height
• Fixed email notification triggering for empty payment method form
• Fixed the PDF Download link in confirmation message
• Fixed PHP 8 compatibility issues with Excel exports
• Fixed the range slider in conversational forms causing incorrect progress percentage
```

:::

## Fluent Forms v6.1.3 Pro

_Released on September 2, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed plugin updater
```

:::

## Fluent Forms v6.1.2

_Released on August 29, 2025_

::: code-group

```markdown [⚡ Improvements]
• Changed IP location service for country restriction
```

```markdown [🐞 Bug fixes]
• Fixed subscription payment translation issue
```

:::

## Fluent Forms v6.1.0 Pro

_Released on August 28, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added one-time use functionality to Save and Resume links
• Added more report components to the Report Page
• Added HTML5 geolocation for address field autocomplete
• Added Location latitude and longitude to shortcode list
```

```markdown [⚡ Improvements]
• Improved phone field country flags responsiveness with upgraded intl-tel-input library
• Improved step form rendering
```

```markdown [🐞 Bug fixes]
• Fixed step form flickering issue on mobile devices and empty steps
• Fixed step form conditional logic with animation type "none"
• Fixed Save & Resume email field duplication on Enter key press
• Fixed post creation hook issue with user registration
• Fixed Rich Text rows configuration
• Fixed conditional logic for Repeat Container fields
• Fixed Star Rating and Dropdown field value retention in resumed forms
• Fixed inventory count display discrepancy between frontend and dashboard
• Fixed range slider default values in conversational forms
• Fixed quantity mapping in range slider for conversational forms
• Fixed checkable grid validation message for current field name
• Fixed JetEngine user meta textarea field mapping
• Fixed repeat container dropdown and multi-select searchable smart option
• Fixed step form per-step field population to multiple forms for single page
• Fixed repeater container with custom HTML formatting in submissions
• Fixed dynamic field data restoration with Save and Resume
• Fixed checkable grid error with multiple spaces in row labels
• Fixed user registration with password fields containing `%` character
• Fixed coupon code discount minimum purchase amount calculations in payment summary
• Fixed container conditional logic in mobile preview
• Fixed Square Payment Japanese Yen (JPY) decimal handling
• Fixed inconsistent USA state population in address autocomplete and adds `fluentform_googlemaps_address_parse` event
• Fixed multi-select and smart search enabled select options scrolling on mobile devices
• Fixed Mollie payment status update immediately after payment
```

:::

## Fluent Forms v6.1.2

_Released on August 27, 2025_

::: code-group

```markdown [⚡ Improvements]
• Synced offline payment email notification with payment status
```

```markdown [🐞 Bug fixes]
• Fixed phone field library issue
• Fixed repeater container condition validation issue
```

:::

## Fluent Forms v6.1.1 Free

_Released on August 27, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added Fluent Forms Report module
• Added conversational forms scroll-to-top option
• Added keyboard shortcut for delete input field in the editor
```

```markdown [⚡ Improvements]
• Improved Export entries fields by remembering last selected fields
• Improved IP detection
• Improved consistency of settings deletion notifications
• Removed non-functional Reset Form button from conversational forms
```

```markdown [🐞 Bug fixes]
• Fixed form API empty title retrieval issue
• Fixed WPForm Migrator with empty forms
• Fixed radio field customization UI default value selection
• Fixed video playback in Support section
• Fixed CleanTalk/Akismet protection spam submitting forms twice
• Fixed integrations page sidebar menu selection indication on reload
• Fixed conversational forms GDPR checkbox implementation
• Fixed CAPTCHA conflict when global and form-specific settings differ
• Fixed hide-after-submission option setting for conversational forms
• Fixed Terms & Conditions field validation error messages for "not accepted"
• Fixed payment method showing "Test" instead of "Offline" in payments shortcode
• Fixed multiple address field autocomplete in conversational forms
• Fixed submission on Enter key press with selected radio/checkbox using keyboard
• Fixed entries chart date range filtering
• Fixed database creation errors in WordPress Studio environments
• Fixed trailing comma in keyword restriction that incorrectly blocked all submissions
• Fixed WP Text Editor sanitizer removing links in success messages with search parameters
• Fixed Object Injection Vulnerability unserialize issue when using user-profile-specific shortcodes
• Closed payment summary items rendering issue
```

:::

## Fluent Forms v6.0.4

_Released on May 29, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added submission view page for users to see their own submissions
• Added smartcode to embed submission view page link
• Added Square payment SDK locale support for multiple languages
• Added filter `fluentform/double_optin_invalid_confirmation_url_message` to customize double opt-in confirmation URL messages
• Added support for WPML translation with the Multilingual Forms for Fluent Forms with WPML addon
```

```markdown [⚡ Improvements]
• Improved step form animations for better user experience
• Improved ChatGPT integration with HTML code support and loading indicators
• Improved honeypot condition check
```

```markdown [🐞 Bug fixes]
• Fixed the net promoter score field's zero (0) value in the visual report
• Fixed the multi-select values in the submission including commas
• Fixed tooltip/help message
• Fixed conversational form address field default value meta smartcode
• Fixed conversational form section break image layout position
• Fixed email attachment missing for WordPress subdirectory
• Fixed conversational form name and address fields prefilled using URL params
• Fixed keyword-based restriction if IPInfo access key is provided
• Fixed conversational form invisible turnstile autoload
• Fixed email notification/integration sending after payment status change to paid
• Fixed turnstile with WP Rocket compatibility
• Fixed issue where removing coupons didn't update payment summary
• Fixed Paddle payment redirection problems
• Fixed Paddle catalog and price items update issues
• Fixed Paddle customer creation during payment
• Fixed file attachments not working in Resend Email Notifications
• Fixed `fluentform_payments` shortcode for subscription filtering by type/status
• Fixed simple inventory counting inaccuracies when quantity is increased
• Fixed file upload errors not clearing after subsequent uploads
• Fixed missing files in save and resume functionality
• Fixed conversational form per-step data saving issues with custom HTML fields
• Fixed Weglot translation AJAX issue with file upload URL
```

:::

## Fluent Forms v6.0.3

_Released on April 16, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added filter hooks for disable CAPTCHA validation
• Added filter hooks to control response as HTML on checkable field
• Added filter hooks to control Mailchimp timeout
```

```markdown [⚡ Improvements]
• Improved rating field accessibility
```

```markdown [🐞 Bug fixes]
• Fixed Cross-Site Scripting vulnerability (CVE-2025-3615)
• Fixed CleanTalk toggle in misc settings
• Fixed analytics visual report showing empty
• Fixed aria-label separately in address field
• Fixed early textdomain loading issue
• Fixed global inventory tracking for refunded payments
• Fixed AffiliateWP referral amounts with applied coupons
• Fixed step scrolling with Custom HTML fields
• Fixed style unit values disappearing when switching unit types
• Fixed placeholder issue for Rich Text Input
```

:::

## Fluent Forms v6.0.2

_Released on April 7, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Stripe 3DS payment issue
• Fixed form entry delete issue
```

:::

## Fluent Forms v6.0.1

_Released on March 20, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed container conditional logic issue
```

:::

## Fluent Forms v6.0.0

_Released on March 19, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added Payment fields
• Added Stripe payment gateway
• Added Advanced Conditionals group for enhanced form logic
• Added Fluent Forms AI for creating AI-assisted forms
• Added New Form Templates
```

```markdown [⚡ Improvements]
• Improved hCaptcha settings saving method
• Improved CAPTCHAs loading after first interactions on popups
• Improved CleanTalk API
• Improved spam processing logs
```

```markdown [🐞 Bug fixes]
• Fixed Stripe fields language issues
• Fixed `customer_name` issue for Stripe
• Fixed conditional `{dynamic.}` shortcode in Custom HTML fields
• Fixed frontend `site_url` with `home_url`
```

:::

## Fluent Forms v5.2.12

_Released on February 18, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added token-based spam protection for enhanced form security
• Added Italian Translation
```

```markdown [⚡ Improvements]
• Improved Honeypot Security for better bot detection
• Improved Turnstile appearance option names for clarity
```

:::

## Fluent Forms v5.2.11

_Released on February 10, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added CleanTalk Spam Protection with API
• Added Hungarian Language Translation
• Added options for reCAPTCHA V3 badge rendering
```

```markdown [⚡ Improvements]
• Improved Honeypot spam protection
```

```markdown [🐞 Bug fixes]
• Fixed WordFence vulnerability IP-Spoofing (CVE-2024-13666)
• Fixed `fluentform/load_default_public` filter not affecting Block Editor
```

:::

## Fluent Forms v5.2.10

_Released on January 7, 2025_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed unsupported field disappears inside container
• Fixed name/address fields "0" required validation
• Fixed custom button style reset border radius 0px
```

:::

## Fluent Forms v5.2.9

_Released on January 6, 2025_

::: code-group

```markdown [✨ Newly Added]
• Added CleanTalk Spam Protection
• Added Repeater Container Field
• Added User Map Location in Submission
```

```markdown [⚡ Improvements]
• Improved Step Form accessibility
• Updated Akismet option with spam submission skips integration
```

```markdown [🐞 Bug fixes]
• Fixed WP Forms multi-page form migration
• Fixed container drop inside another container
• Fixed radio selection on the entry editor
• Fixed dropdown field smart choose long options width
• Fixed ChatGPT form creation empty label and name
• Fixed taxonomy field placeholder
• Fixed radio buttons layout with smart UI
• Fixed user registration & update with admin approval by choosing bulk action "mark as approved"
• Fixed user registration payment status change manually
```

:::

## Fluent Forms v5.2.8

_Released on December 18, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed hidden field with empty value conditional logic issue in Conversational Forms
• Fixed range slider validation issue in Conversational Forms
• Improved & Fixed space issue in Checkable Grid
```

:::

## Fluent Forms v5.2.7

_Released on December 5, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added all forms export button
```

```markdown [🐞 Bug fixes]
• Fixed WordFence vulnerability CVE-2024-10646
• Fixed hidden field with empty value conditional logic in Conversational Forms
• Fixed `post.permalink` editor shortcode link in RTL
• Fixed `ff-read-only` class with accessibility
• Fixed watermark inactive issue (PDF Addon)
• Fixed stop getting PDF if submission is trashed (PDF Addon)
```

:::

## Fluent Forms v5.2.6

_Released on November 19, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed radio field image issue
• Fixed conversational dynamic shortcode issue
```

:::

## Fluent Forms v5.2.5

_Released on November 19, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added form editor undo/redo functionality (Beta)
• Added global option to select date and time format for admin page views
• Added submission & field-specific shortcode
• Added "Go to page" feature for pagination
• Added global settings sidebar custom links sub-menu style
• Added "DELETE" input prompt on form deletion
• Added landing page share option on All Forms page
• Added hook for injecting custom payment method subscription cancellation message
• Added API log for non-async integration
```

```markdown [⚡ Improvements]
• Improved Security by working with Plugin Security Certification (PSC) by CleanTalk
• Improved accessibility (focus on radio buttons, T&C text screen reader support)
• Improved translations
• Improved integrations API logs bulk replay actions functionality
• Improved submission logs API calls retry action
• Improved synchronization of "All Entries" chart with form ID and date range
• Improved initial disabling of analytics
• Improved Mailchimp date field with more format options
• Improved checkable field bulk options in the editor (supports `:` on value & label)
• Improved Constant Contact to V3
```

```markdown [🐞 Bug fixes]
• Fixed shortcode copy message showing multiple times on entry page
• Fixed screen reading issue with name fields
• Fixed mobile responsiveness of tools page sidebar navigation
• Fixed double submission when submit button is clicked twice with custom URL redirection setup
• Fixed undefined shortcode key for conditionally hidden fields
• Fixed FluentCRM dynamic tag selection based on subscriptions plan
• Fixed Visual Report filter issue
• Fixed Square live mode script
• Fixed big integer payment item price
• Fixed duplicate post created on post form with admin-approval & double opt-in
• Fixed partial entries file upload populate date
• Fixed missing paragraph on ChatGPT form generation
• Fixed Salesforce integration sandbox selection not changing
• Fixed Airtable integration long text with rich text enabled
```

:::

## Fluent Forms v5.2.4

_Released on October 1, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed calculation issue
```

:::

## Fluent Forms v5.2.3

_Released on September 30, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added form edit history (Beta)
• Added editor keyboard navigation and shortcuts
• Added form-specific permissions in the permission manager
• Added Paddle payment method
• Added Square inline payment integration
• Added MetaBox for user registration and updates
• Added dynamic default values for dynamic fields
```

```markdown [⚡ Improvements]
• Improved condition change event handling
• Improved All Forms page form ordering to retain on reload
• Improved dynamic fields CSV with a delimiter option
• Improved dynamic repeater field SmartCode
• Improved repeater field accessibility
```

```markdown [🐞 Bug fixes]
• Fixed exposing the conversational form URL
• Fixed empty URL GET parameters in conversational form shortcodes
• Fixed all-form filter selections being retained on page reload
• Fixed Next button trapping keyboard focus
• Fixed confirmation redirect URL handling for spaces
• Fixed entries export issue for forms with a large number of fields (250+ fields)
• Fixed Dynamic SmartCodes in conditional fields
• Fixed checkable field "not-equal" condition on conversational form
• Fixed exporting numeric fields to Excel
• Fixed label asterisk style with Elementor widget
• Fixed conditional logic with numeric formatting
• Fixed Checkable Grid submission issue
• Fixed rich text data handling for partial entries
• Fixed issue with Zapier entry action resends
• Fixed SmartCode issue with post permalinks
• Fixed issue with TranslatePress shortcode in double opt-in confirmation messages
• Fixed validation error on single payment stockout messages
• Fixed required validation for featured images in post updates
• Fixed issue with temporary directory files not being deleted on AWS S3
• Fixed image preview style issues in 4, 5, and 6-column layouts
• Fixed radio field button-type custom style
```

:::

## Fluent Forms v5.2.2

_Released on September 11, 2024_

::: code-group

```markdown [⚡ Improvements]
• Updated tested WordPress Version
```

```markdown [🐞 Bug fixes]
• Fixed Gutenberg block widget
```

:::

## Fluent Forms v5.2.1

_Released on September 10, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed custom error messages vulnerability (allowing admin to inject script in custom error messages)
• Fixed dropdown field in conversational forms after conditional multi-select
• Fixed checkbox field "not-equal" condition in conversational forms
```

:::

## Fluent Forms v5.2.0

_Released on August 7, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added print entries
• Added context menu in editor
• Added Advanced Search Filter on Entries Page
• Added Dynamic Field
• Added Image/File Dropzone
• Added Save & Resume Button for logged-in users and Send Notification
• Added Vietnamese Language Support
• Added ACF & JetEngine meta on User Registration & Update
```

```markdown [⚡ Improvements]
• Improved User Update
• Improved OnePageCRM integration
• Improved Quiz Setting (Delete Option)
```

```markdown [🐞 Bug fixes]
• Fixed PDF feed watermarks
• Fixed inactive conversational form pretty permalink
• Fixed address field country hide label
• Fixed GDPR attribute `target=_blank`
• Fixed Cloudflare Turnstile multiple widget
• Fixed PHP 8.3 deprecation warning
• Fixed Inherit theme style for submit button preview
• Fixed timezone change deprecated message
• Fixed Featured Image reloading on the Post Update form
• Fixed Phone field validation for Hong Kong's phone numbers
• Fixed Inventory Management "Show Available Stock" issue
• Fixed JetEngine checkbox meta issue
• Fixed Phone Number & Number failure on Airtable integration
• Fixed PayPal subscription pending due to EUR currency
• Fixed Payment info for Stripe embedded checkout if conditions are applied
• Fixed `u_name()` function disabled on the server
• Fixed Stripe embedded checkout Link option removal
• Fixed Address single subfield Google Maps retrieval
• Fixed User Update repopulate meta key with subfields like Address, Name
• Fixed typo on Subscription
• Fixed Custom submit button color picker uniform design
• Fixed Quantity mapping of payment items if the label is empty
• Fixed spout package conflict on entries export
• Fixed status change of subscription from entry
• Fixed Radio button size not showing on styler
```

:::

## Fluent Forms v5.1.20

_Released on July 25, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed vulnerability in checkboxes (CVE-2024-6518, CVE-2024-6520) reported by WordFence
• Fixed textarea fields sanitization and output vulnerability (CVE-2024-6521) reported by WordFence
• Fixed conversational form welcome field `description` and `btn_txt` field vulnerability (CVE-2024-6703) reported by WordFence
```

:::

## Fluent Forms v5.1.19

_Released on June 15, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added injectable custom Vue component on form settings and global settings
```

```markdown [🐞 Bug fixes]
• Fixed integration update authorization vulnerability
• Fixed dynamic default values default options
• Fixed Elementor v3.0.0 deprecated class
• Fixed phone field country container z-index
• Fixed hidden turnstile margin
• Fixed numeric-field name hyphen format
```

:::

## Fluent Forms v5.1.18

_Released on May 23, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added Form creation using AI (ChatGPT)
• Added submission confirmation message using AI (ChatGPT)
• Added post shortcodes
• Added support for Kenyan shilling for Paystack
```

```markdown [🐞 Bug fixes]
• Fixed unselected radio payment field validation
• Fixed repeater field data on Trello board
• Fixed cross-form CAPTCHA error
```

:::

## Fluent Forms v5.1.17

_Released on May 17, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added label shortcode support in global default message
```

```markdown [⚡ Improvements]
• Improved capability check for global settings & manager settings (security issue reported by Patchstack)
• Changed type of `source_url` database column from varchar to text
• Improved UX of form active/inactive loader
• Improved keyword-based restriction
```

:::

## Fluent Forms v5.1.16

_Released on May 6, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed editor vulnerability for attacker with contributor level access (WordPress version 6.4.0)
• Fixed conversational design settings sanitization & escaping
• Fixed conversational form save and resume preview form
• Fixed conversational form conditional-based calculation field error
```

:::

## Fluent Forms v5.1.15

_Released on April 25, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed nested condition
```

:::

## Fluent Forms v5.1.14

_Released on April 19, 2024_

::: code-group

```markdown [⚡ Improvements]
• Improved conversational form sanitization & escaping
```

```markdown [🐞 Bug fixes]
• Fixed entry action for post feed
```

:::

## Fluent Forms v5.1.13

_Released on April 18, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed conversational form shortcode issue
```

:::

## Fluent Forms v5.1.12

_Released on April 18, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added "Name Field" on conversational form
• Added label shortcode
• Added JetEngine CPT compatibility
• Added conversational form "Save and Resume"
• Added entries API logs retry action
• Added CSS variable support
• Added support for multiple emails in email routing
```

```markdown [⚡ Improvements]
• Improved repeater and name field on entry update
• Improved CleverReach all scopes message check
• Improved container action UI
• Improved accessibility on repeater field
• Improved filter hook to change Stripe inline custom style
• Removed non-essential `required` attributes from Pipedrive integration
```

```markdown [🐞 Bug fixes]
• Fixed mask input on Elementor popup
• Fixed coupon skip button text on conversational form
• Fixed query string email `@` symbol encode on redirect URL
• Fixed redirect URL parameter anchor
• Fixed checkbox and radio smart choices tab navigation
• Fixed name fields individual label placement
• Fixed checkbox & radio field issue with condition
• Fixed HubSpot checkbox on custom field
• Fixed GetResponse integration empty name
• Fixed custom mask input on repeater field
• Fixed repeat field default value on new row
• Fixed multiple choice user meta dynamic default value
• Fixed subscription user input minimum value with conditions
• Fixed empty name on Stripe subscription payment
• Fixed global inventory same radio options remaining count
• Fixed inventory same label name conflict on Inventory page
• Fixed Quiz score value mapping on FluentCRM dynamic tag section
• Fixed border on custom style
• Fixed post update for current user on logout session
• Fixed HTML tag on Zoho CRM text area field
• Fixed checkable grid data on Trello description
• Fixed checkable grid data on Discord
• Fixed file upload on entry update
• Upgraded jQuery UI Widget to 1.13.2 to fix vulnerability
```

:::

## Fluent Forms v5.1.11

_Released on February 26, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed URL escaping bug
```

:::

## Fluent Forms v5.1.10

_Released on February 26, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added turnstile for conversational form
```

```markdown [⚡ Improvements]
• Improved turnstile with appearance modes
```

```markdown [🐞 Bug fixes]
• Fixed Inventory Module hiding empty stock
• Fixed URL escaping issue of form redirect
• Fixed sanitization issue for HTML-supported fields
• Fixed Entry Export with user submission IP
• Fixed PDF feed watermark image
• Fixed Name Field aria-required attribute
• Fixed PDF Feeds on duplicate form
• Fixed Numeric min-max Field bug
```

:::

## Fluent Forms v5.1.9

_Released on January 19, 2024_

::: code-group

```markdown [⚡ Improvements]
• Updated Custom HTML field sanitization
• Improved server-side conditional settings validation
```

:::

## Fluent Forms v5.1.8

_Released on January 19, 2024_

::: code-group

```markdown [⚡ Improvements]
• Improved sanitization on form import
```

```markdown [🐞 Bug fixes]
• Fixed step navigation button issue
```

:::

## Fluent Forms v5.1.7

_Released on January 17, 2024_

::: code-group

```markdown [✨ Newly Added]
• Added Contact Form 7 Migration
• Added Global Inventory
• Added Import Entries
• Added Admin Approval
• Added Inherit theme style support in form Styler
• Added Form Title smartcode on confirmation
• Added more translation strings
• Added filter to skip validation of selectable inputs
```

```markdown [⚡ Improvements]
• Improved Admin Mobile responsiveness
• Improved Address Field Sub Field Label Placement
• Improved Custom Styler
```

```markdown [🐞 Bug fixes]
• Fixed background color not showing on landing preview page
• Fixed quiz field condition on the conditional confirmation
• Fixed Conversational form Custom HTML automatically scrolls to bottom of page
• Fixed range slider default value with required option
• Fixed multiple subscription plan minimum value
• Fixed showing trashed entries on Survey Result
• Fixed Airtable phone field validation
• Fixed subscription plan custom input min value
• Fixed predefined form filter issue on form creation
• Fixed CC/BCC email on Email Notification Routing
• Fixed hidden field mapping on integration
• Fixed Sync visual report order with form fields order
• Fixed nested conditional field
```

:::

## Fluent Forms v5.1.5

_Released on November 23, 2023_

::: code-group

```markdown [⚡ Improvements]
• Improved options validation
• Improved date validation
• Improved conditional logic
```

```markdown [🐞 Bug fixes]
• Fixed max length validation
```

:::

## Fluent Forms v5.1.4

_Released on November 22, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed advanced country list issue
```

:::

## Fluent Forms v5.1.3

_Released on November 22, 2023_

::: code-group

```markdown [✨ Newly Added]
• Added support for ACF field on Post revision & ACF rich-text value on Post Update Form
```

```markdown [⚡ Improvements]
• Improved Gravity Forms migration entries by status
• Improved WP Forms migration fetch webhook feed
• Improved Airtable integration
```

```markdown [🐞 Bug fixes]
• Fixed null value on mapping Post create feed
• Fixed inventory quantity field issue
• Fixed range slider required field value on render
• Fixed temp attachment files deletion
• Fixed checkable grid and repeater field data format on webhook
• Fixed Google address autocomplete on Elementor popup
```

:::

## Fluent Forms v5.1.0

_Released on November 1, 2023_

::: code-group

```markdown [✨ Newly Added]
• Added Global Search
• Added Global Default Validation Messages
• Added support for Fluent Booking in Conversational Form
• Added theme style inherit option
• Added Form submission restriction based on Keyword
• Added a refresh button on form entries
• Added `esc_*` for dynamic properties
```

```markdown [⚡ Improvements]
• Improved WPForms and Gravity Forms migration support for conditional logic mapping
• Removed total views from exported forms
```

```markdown [🐞 Bug fixes]
• Fixed URL cut-off on the Entries page
• Fixed pagination in Forms and Entries pages
• Fixed attachment preview in email notification
• Fixed multiple numeric calculations in conversational forms
```

:::

## Fluent Forms v5.0.12

_Released on October 19, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed theme selection bug
```

:::

## Fluent Forms v5.0.10

_Released on October 18, 2023_

::: code-group

```markdown [✨ Newly Added]
• Added form preview in Gutenberg block
• Added form theme change support in Gutenberg block
• Added theme style inherit option
```

```markdown [🐞 Bug fixes]
• Fixed Form finder
```

:::

## Fluent Forms v5.0.9

_Released on September 8, 2023_

::: code-group

```markdown [⚡ Improvements]
• Inactive form submission prevented
```

```markdown [🐞 Bug fixes]
• Fixed compact mode entries view
```

:::

## Fluent Forms v5.0.8

_Released on August 24, 2023_

::: code-group

```markdown [✨ Newly Added]
• Added address field in conversational form with Google Map Support
• Added entries sort by column
```

```markdown [🐞 Bug fixes]
• Fixed integration "Others" field add or remove behavior
• Fixed `{all_data}` and `{all_data_without_hidden_fields}` shortcode using together
• Fixed global enabled CAPTCHA issue in conversational Form
• Fixed form title update
• Fixed Slack integration toggle
• Fixed forms submission next & preview order
```

:::

## Fluent Forms v5.0.7

_Released on July 18, 2023_

::: code-group

```markdown [⚡ Improvements]
• Improved email on iOS devices
```

```markdown [🐞 Bug fixes]
• Fixed LiteSpeed caching issue
• Fixed dynamic shortcode bug
• Fixed style issues
• Fixed PDF issue for the checkbox field
• Fixed post update issue for block conditional issues for payment items
• Fixed Double Opt-In save issue
• Fixed entry export filter issue
```

:::

## Fluent Forms v5.0.5

_Released on June 28, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Form Editor Update Error due to Old API
```

:::

## Fluent Forms v5.0.4

_Released on June 28, 2023_

::: code-group

```markdown [⚡ Improvements]
• Styling Improvement for Gutenberg Editor
```

```markdown [🐞 Bug fixes]
• Fixed ModSec issues for Form Builder & Settings Update
• Fixed Compatibility Issue with WP Fusion
```

:::

## Fluent Forms v5.0.3

_Released on June 26, 2023_

::: code-group

```markdown [⚡ Improvements]
• Form Restrictions check improved
• Email Notification improved
```

```markdown [🐞 Bug fixes]
• Visual Reporting issues fixed
• Fixed issues with the REST API endpoints
• Fixed Compatibility issue with Caching Plugins and few other servers
• Styling issues fixed
• Deprecated hooks notices fixed
• LiteSpeed cache compatibility issue fixed
```

:::

## Fluent Forms v5.0.1

_Released on June 22, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: custom Editor shortcode compatibility issue fixed
```

:::

## Fluent Forms v5.0.0

_Released on June 22, 2023_

::: code-group

```markdown [✨ Newly Added]
• New framework for faster response
```

```markdown [⚡ Improvements]
• Revamped UI and better UX
• Global Styler Improvement
• Text input fields with correct maximum text length
• Updated AJAX routes to REST Routes
• Updated filter & action hooks naming convention with older hooks support
• Updated translation strings
• Stripe Keys are now encrypted and more secured
• Security Enhancement with Framework upgrade
```

```markdown [🐞 Bug fixes]
• Fixed issue with repeat
• Fixed issue with WPForm Migrator not properly transferring text fields
• Fixed issue with entry migration
• Fixed number format in PDF files
• Fixed radio field label issue
```

:::

## Fluent Forms v4.3.25

_Released on March 15, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed aria-label issue
• Fixed iframe tag issue
• Security: SQL orderby issues fixed
```

:::

## Fluent Forms v4.3.24

_Released on February 3, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Accessibility CSS issue
```

:::

## Fluent Forms v4.3.23

_Released on February 2, 2023_

::: code-group

```markdown [✨ Newly Added]
• Added Landing Page Layout Design & Shadow Configurator
• Added Copy Button & Email option for Save & Resume Form Link
• Added Clickable Form Step
• Added WPForms Form & Entry Migrator
• Added Form shortcode page finder
```

```markdown [⚡ Improvements]
• Improved RazorPay Modal (color config)
• Updated File Upload Library
• Improved Form Accessibility
```

```markdown [🐞 Bug fixes]
• Fixed Inventory Issues with Conversational Form
• Fixed BuddyBoss issue for textarea field
• Fixed Twilio SMS Format
• Fixed Translation Issue For File Upload
• Fixed Google Sheet & Excel Export Format Issue for Repeater Field
• Fixed Excel and CSV Format Issue for Checkable Grid
• Fixed Payment Info on `{all.data}` shortcode when Product display type is set as Checkbox
• Fixed Resume Step Form Multiple Choice Field Issue
• Fixed Address Field's Country List Mapping with FluentCRM
• Fixed User Registration Integration's username issues in URL Slug
• Fixed Post Update Field's Placeholder
• Fixed Range Slider Field's Required Option
• Fixed Tags and Lists webhook to work with FluentCRM
• Fixed Mailjet Custom Field
• Fixed Post Update Field's Conditional Logic Issue
• Fixed Country restriction in Google address autocomplete
• Fixed Mp3 File issue in Conversational Form
• Fixed Oxygen Builder Popup Form
• Fixed Elementor v3.9.1 popup
• Fixed Numeric Field US format negative value
• Fixed URL validation for Conversational Form
• Fixed Asterisk Position for Conversational Forms
• Fixed Conditional Shortcode contains `&` character
• Fixed Conversational Form Duplicated Form's Design Issue
• Fixed Conditional Logic Empty Ruleset for Conversational Form
• Fixed Text Input field's Max Text Length for Conversational Form
• Fixed Conditional Logic with Calculation for Conversational Form
• Fixed Conditional Logic Enabled Icon on Conversational Form Fields
• Fixed Payment Quantity Field issue on Conversational Form Editor
• Fixed Error Message instant Trigger For Numeric Field on Conversational Form
```

:::

## Fluent Forms v4.3.22

_Released on November 11, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Conversational form to Regular form converter
```

```markdown [🐞 Bug fixes]
• Fixed conditional field for EU number style
• Fixed rating field for conditional
• Fixed file upload preview
```

:::

## Fluent Forms v4.3.21

_Released on October 27, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Ninja Forms entry migrator
• Added Gravity Forms entry migrator
```

```markdown [⚡ Improvements]
• Improved Sanitization
• Improved Conversational Forms responsiveness
• Improved UX
```

:::

## Fluent Forms v4.3.20

_Released on October 22, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Date/Time field config bug
```

:::

## Fluent Forms v4.3.18

_Released on October 19, 2022_

::: code-group

```markdown [⚡ Improvements]
• Improved Turnstile
```

```markdown [🐞 Bug fixes]
• Fixed condition checker nullable bug
• Fixed ZohoCRM tags support (Pro)
• Fixed Multi-Select upgrade bug
```

:::

## Fluent Forms v4.3.17

_Released on October 18, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added GDPR field in Conversational Form
• Added HubSpot error handler (Pro)
```

```markdown [⚡ Improvements]
• Improved Multi-Select field
• Improved Conversational Form calculation
```

```markdown [🐞 Bug fixes]
• Fixed Email Feed duplicate bug
• Fixed Custom Button style in Containers
• Fixed Custom Button style in Step Form
```

:::

## Fluent Forms v4.3.16

_Released on October 16, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added footer text customization for Slack
```

```markdown [⚡ Improvements]
• Improved Custom Button styles
```

```markdown [🐞 Bug fixes]
• Fixed conditional field rendering
```

:::

## Fluent Forms v4.3.15

_Released on October 10, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed conditional support
```

:::

## Fluent Forms v4.3.14

_Released on October 8, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed calculation module
```

:::

## Fluent Forms v4.3.13

_Released on October 7, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Cloudflare Turnstile
• Added full-page styles
```

```markdown [⚡ Improvements]
• Improved label placement settings
• Improved Slack integration for Checkable Grid (Pro)
• Improved Password truncate module (Pro)
• Improved AJAX calls
```

```markdown [🐞 Bug fixes]
• Fixed CSV export issue (Pro)
• Fixed multiple success message issue
• Fixed conditional logic for Containers (Pro)
• Fixed long file names issue for file upload (Pro)
```

:::

## Fluent Forms v4.3.12

_Released on September 1, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added manual control for Container width
```

```markdown [⚡ Improvements]
• Improved PHP 8 compatibility
• Improved translation for receipt page (Pro)
• Improved field deletion UX
• Improved Conversational Forms CAPTCHA
```

```markdown [🐞 Bug fixes]
• Fixed Resend email notification custom recipient bug (Pro)
• Fixed BuddyBoss nickname issue (Pro)
• Fixed Zoho CRM Customized Lead Status Issue (Pro)
• Fixed Step Form previous session bug (Pro)
• Fixed popup issue for Elementor with conversational form (Pro)
• Fixed user update password issue (Pro)
• Fixed Global Default settings not being applied
• Fixed form submission search for accented characters
• Fixed Rich Text input not working in modal (Pro)
• Fixed CAPTCHA Label placement
• Fixed image upload button issue (Pro)
• Fixed Conversational form Phone field country code issue (Pro)
• Fixed Conversational form payment bug (Pro)
• Fixed iPhone image upload issue conversational form (Pro)
• Fixed `http_referer` shortcode
• Fixed pending payment entry count of additional shortcode (Pro)
• Fixed URL field issue
• Fixed Rating field option editing bug (Pro)
• Fixed additional shortcode Entry Count
• Fixed Quiz field randomize issue (Pro)
• Fixed Conversational form auto-validation message issue
• Fixed Step form issue with submit button (Pro)
• Fixed Conversational form long "Custom HTML Field" issue
```

:::

## Fluent Forms v4.3.10

_Released on August 4, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Forms type filter
• Added Save & Resume form submission (Pro)
• Added Rich Text Input (Pro)
• Added Insightly Integration (Pro)
• Added Mailster Integration (Pro)
• Added Airtable Multiple table connection (Pro)
```

```markdown [⚡ Improvements]
• Improved data sanitization
• Improved Post Update with ACF (Pro)
• Improved User Update with meta fields (Pro)
• Improved failed integration notification email (Pro)
• Improved email summary
• Improved Resizeable Container
```

```markdown [🐞 Bug fixes]
• Fixed Signature field placement issue (Pro)
• Fixed HubSpot API update issue (Pro)
• Fixed Conversational Form issue with Elementor popup
• Fixed User Registration password reset email issue (Pro)
• Fixed Step form data save issue with Checkable Grid field (Pro)
• Fixed Coupon Code issue (Pro)
• Fixed ACF image upload with media upload (Pro)
• Fixed Constant Contact Issue (Pro)
• Fixed `<br>` tag issue in Twilio (Pro)
```

:::

## Fluent Forms v4.3.9

_Released on July 4, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Resizeable Container Width
• Added hCaptcha in conversational form
• Added User Profile Update with Fluent Forms (Pro)
• Added Partial Entry bulk delete (Pro)
```

```markdown [⚡ Improvements]
• Improved Regex pattern Condition
```

```markdown [🐞 Bug fixes]
• Fixed confirmation message responsive issue
• Fixed conditional logic empty issue
• Fixed form duplicate issue
• Fixed auto CAPTCHA option tooltip issue
• Fixed Range Slider broken issue for multiple uses on the same page (Pro)
```

:::

## Fluent Forms v4.3.8

_Released on June 2, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Oxygen 4.0 support
• New: Mailjet Integration (Pro)
• Added auto-include CAPTCHA support
```

```markdown [🐞 Bug fixes]
• Fixed footer credit HTML tag issue
• Fixed Post update taxonomy issue
• Fixed Pipedrive custom field issue
• Fixed zero custom payment issue
```

:::

## Fluent Forms v4.3.7

_Released on May 20, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed error notice display issue
• Fixed file location settings issue (Pro)
• Fixed smart dropdown style issue
```

:::

## Fluent Forms v4.3.6

_Released on May 19, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added public PDF downloadable option
```

```markdown [⚡ Improvements]
• Improved Slack integration (Pro)
```

```markdown [🐞 Bug fixes]
• Fixed Caldera migrator
• Fixed CSS issue for multiple-choice field options
• Fixed email footer HTML issue
• Fixed Numeric field formatting issue
```

:::

## Fluent Forms v4.3.5

_Released on April 22, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added CLI support
• Added Oxygen builder native widget support
• Added support for programmatically form rendering
• Added digits validation for a numeric field
• Added mechanism for adding count hidden fields shortcode
```

```markdown [⚡ Improvements]
• Improved payment status translations
• Improved deactivated form styles
```

```markdown [🐞 Bug fixes]
• Fixed help message tooltip position issue
• Fixed tooltip behavior in Elementor Popup
• Fixed reCAPTCHA v3 issue in Elementor Popup
• Fixed entries table style
• Fixed dropdown open style issue
• Fixed Elementor widget issue
```

:::

## Fluent Forms v4.3.4

_Released on March 21, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added Quiz module (Pro)
• Added amoCRM integration (Pro)
• Added OnePageCRM integration (Pro)
• Added Pipedrive integration (Pro)
• Added phone number support for ZohoCRM (Pro)
• Added other data center support for ZohoCRM (Pro)
• Added email notification support for failed integrations (Pro)
• Added resubscribe option for MailerLite (Pro)
• Added dynamic default value for payment item (Pro)
• Added support for programmatically license management (Pro)
• Added smart search for the chained select field (Pro)
```

```markdown [⚡ Improvements]
• Improved payment item display for radio fields (Pro)
```

```markdown [🐞 Bug fixes]
• Fixed payment item value zero issues (Pro)
• Fixed payment method selection issue (Pro)
• Fixed Stripe donation issue (Pro)
```

:::

## Fluent Forms v4.3.4

_Released on March 18, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added configuration option for email summary subject
• Added RTL support for backend
• Added Datepicker field language support
• Added integration search option on form settings
• Added Elementor popup support for Conversational Forms
• Added quick form deactivation toggle option
• Added Timezone preset for Dropdown field
```

```markdown [⚡ Improvements]
• Improved calculation module
• Improved chained select CSV upload
• Improved conditional rendering module
• Improved Select field data rendering
• Improved entry user update module
```

```markdown [🐞 Bug fixes]
• Fixed US style numerical value calculation
• Fixed shareable link bug
• Fixed mask field bug
```

:::

## Fluent Forms v4.3.3

_Released on February 25, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed multiple calculated custom payment issue
```

:::

## Fluent Forms v4.3.2

_Released on February 24, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added address field inputs reordering option
• Added reCAPTCHA to Conversational Forms
• Added line break support for textarea field
• Added warning modal for Conversational form reset issue
```

```markdown [🐞 Bug fixes]
• Fixed calculation field initial state issue
• Fixed file upload issue in PHP 8.1
• Fixed country list issue in address field
```

:::

## Fluent Forms v4.3.1

_Released on February 14, 2022_

::: code-group

```markdown [✨ Newly Added]
• Added AffiliateWP integration (Pro)
• Added Zoho CRM integration (Pro)
• Added ClickSend integration (Pro)
• Added CleverReach integration (Pro)
• Added Phone Number validation message configuration (Pro)
• Added conditional block support in PDF Feed
```

```markdown [⚡ Improvements]
• Improved partial entry sorting
```

```markdown [🐞 Bug fixes]
• Fixed payment hooks for FluentCRM
• Fixed custom payment issue for one-time billing
• Fixed Phone Field country settings (Pro)
• Fixed Range Slider width
• Fixed Stripe Subscription metadata
• Fixed Stripe Inline customer information
• Fixed Checkable Grid stat in Entries' Visual Data Report
• Fixed payment issue in Elementor Popup
• Fixed PayPal empty cart issue
• Fixed Salesflare custom fields issue (Pro)
```

:::

## Fluent Forms v4.3.0

_Released on January 18, 2022_

::: code-group

```markdown [✨ Newly Added]
• New: Other form plugins migrator
• New: hCaptcha field
• New: Discord & Salesflare integrations and File/Image upload field in Conversational Forms (Pro)
```

```markdown [⚡ Improvements]
• Malicious attack prevention mechanism
• Support for advanced date configuration in Conversational Forms
• Placeholder settings input for Conversational Forms
• Advanced configuration of country field for Conversational Forms
• Validation rule message settings for Email and URL fields
• Improved backend translations
• Removed file & images link from parser when auto-delete enabled
• Improved Helper Shortcode for submission count of payments
• Improved Step forms for Auto-slider with HTML input
```

```markdown [🐞 Bug fixes]
• Fixed PDF Feed issue on form duplication
• Fixed URL validation regex
• Fixed Gutenberg block CSS class issue
• Fixed Gutenberg block shortcode issue for Conversational Forms
• Fixed PHP 8 warning issue
```

:::

## Fluent Forms v4.2.1

_Released on September 1, 2021_

::: code-group

```markdown [✨ Newly Added]
• New developer APIs
```

```markdown [⚡ Improvements]
• Improvements on Conversational Forms
• RTL Improvements
• UI Improvements
• Performance improvements for form submissions
```

:::

## Fluent Forms v4.2.0

_Released on September 1, 2021_

::: code-group

```markdown [✨ Newly Added]
• New gateway (Paystack)
• New "Connect to Stripe" button (no API key needed)
```

```markdown [⚡ Improvements]
• Autocomplete with Google Maps
• On-site payment via Stripe without redirection
• Subscription payment option
• Modal Checkout for RazorPay
• Calculate values with Repeater Field
• Filterable API Logs
• Payment Pages & Subscription Management
```

:::

## Fluent Forms v4.1.5

_Released on July 13, 2021_

::: code-group

```markdown [⚡ Improvements]
• Improvements on Conversational Forms
• Help Message positioning
• Predefined Data Set for Checkable Input Fields
• Raw HTML Email Templates
• Regex on conditional Logic
• Other Improvements
```

:::

## Fluent Forms v4.1.0

_Released on June 30, 2021_

::: code-group

```markdown [✨ Newly Added]
• New Payment Methods – RazorPay and Mollie
• Introducing reCAPTCHA V3
```

```markdown [⚡ Improvements]
• Improvements on Conversational Forms
• MetaBox Plugin integration
• Sharable Landing Page
• Elementor Integration Widget Improvements
• Other Improvements
```

:::

## Fluent Forms v4.0.0

_Released on June 8, 2021_

::: code-group

```markdown [✨ Newly Added]
• Introducing Conversational Forms
```

```markdown [⚡ Improvements]
• Customizing Form Layout
• Overall Form Design
• Social Sharing Meta for Landing page
• Form Sharing (even on another site)
• PHP API (new)
• Other Improvements
• Payment Modules Improvement
• PHP 8.0 Support
• Various Integration Improvement
• Custom Submit Button
• UI & UX Improvement
```

:::

## Fluent Forms v3.6.74

_Released on May 27, 2021_

::: code-group

```markdown [⚡ Improvements]
• A big update is coming soon
```

```markdown [🐞 Bug fixes]
• Hotfix: Form hide issue fixed after submission
```

:::

## Fluent Forms v3.6.72

_Released on May 22, 2021_

::: code-group

```markdown [✨ Newly Added]
• Added Column Re-order and show and hide data for form entries
• Added Re-Subscribe option for Mailchimp
```

```markdown [⚡ Improvements]
• Includes Licenses txt files
```

```markdown [🐞 Bug fixes]
• Fixed Sanitize Data and Escaping on render for custom CSS and JS
• Sub-Page Slug URL escaping issue fixed
• Mailchimp Data Sanitization Fixed
• Fixed smart filter UI saving
```

:::

## Fluent Forms v3.6.70

_Released on March 9, 2021_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Form Scheduling
• Fixed Preview Page Slug
```

:::

## Fluent Forms v3.6.68

_Released on March 6, 2021_

::: code-group

```markdown [✨ Newly Added]
• Added Date range selection on entries chart
```

```markdown [🐞 Bug fixes]
• PHP 8 deprecated issue fixed
• Export and Import Form/Entries Nonce issue fixed
```

:::

## Fluent Forms v3.6.67

_Released on March 5, 2021_

::: code-group

```markdown [✨ Newly Added]
• Added Hooks for Smart Codes
• Added Week-days to Date Field
```

```markdown [⚡ Improvements]
• Refactored Vue.js build system, Form editor is now 40% faster
```

```markdown [🐞 Bug fixes]
• Nonce check issue fixed on admin AJAX
• Coupon issue fixed
• PHP 8 compatibility issue fixed
```

:::

## Fluent Forms v3.6.65

_Released on February 9, 2021_

::: code-group

```markdown [✨ Newly Added]
• Added Multiple Stripe and PayPal account to Form level
```

```markdown [⚡ Improvements]
• Payment Coupon: Add coupon field to your payment form
• Telegram Messenger feed added
• Randomize/Shuffle checkable options
• PHP 8.0 support – Fluent Forms is now 100% compatible with PHP 8
• Limit how many options a user can select for a select field
• UI improvements
• Elementor Widget improvement
• Better CSS loading time
• FluentSMTP support
• Replace icon fonts with SVG
```

:::

## Fluent Forms v3.6.62

_Released on December 20, 2020_

::: code-group

```markdown [✨ Newly Added]
• New: Added Post/CPT selection
```

```markdown [⚡ Improvements]
• Payment Integration Improvement
• Step Form Improvement
• SendInBlue improvement
• Database Improvement
• Smartcode improvement
• UI Improvement
```

:::

## Fluent Forms v3.6.61

_Released on December 1, 2020_

::: code-group

```markdown [✨ Newly Added]
• New: Ability to delete old entries
```

```markdown [⚡ Improvements]
• Calculation Performance boost
• Live calculation value update on the slider element
• Form Builder screen improvement
• Smartcode parser improvement
```

```markdown [🐞 Bug fixes]
• Non-ASCII chars handling when redirecting fix
```

:::

## Fluent Forms v3.6.60

_Released on November 23, 2020_

::: code-group

```markdown [✨ Newly Added]
• NEW: Built-in Double Opt-in Confirmation (Bye Bye Spams)
• NEW: Replay to any integration feeds manually
• New: BuddyBoss integration
• New: Number formats on the fly for numeric fields
• New: Import Global Styles from another form
• New: Dynamic Input Values as Label HTML (Live Update)
• New: Inline Conditional Tags on CRM integration Feeds
```

```markdown [⚡ Improvements]
• Improvement: Oxygen Builder & ACF Integration
• File Upload and Step Form improvements
• Overall UI/UX improvement
```

```markdown [🐞 Bug fixes]
• Many other small bug fixes and improvements
```

:::

## Fluent Forms v3.6.51

_Released on August 24, 2020_

::: code-group

```markdown [✨ Newly Added]
• Added Advanced Conditions
```

```markdown [⚡ Improvements]
• UI/UX improvement
• Conditional Logic Improvement
```

```markdown [🐞 Bug fixes]
• Plain Text Email issue fixed
• Elementor Popup integration issue fixed
• Email Notification issue fixed
```

:::

## Fluent Forms v3.6.42

_Released on July 28, 2020_

::: code-group

```markdown [⚡ Improvements]
• Cleaner All entries chart
```

```markdown [🐞 Bug fixes]
• Email sending issue has been fixed
• Input background issue has been fixed
```

:::

## Fluent Forms v3.6.41

_Released on July 27, 2020_

::: code-group

```markdown [✨ Newly Added]
• New Integration – Automizy
• Added new tooltip style for better visibility
```

```markdown [⚡ Improvements]
• Conditional Text Blocks for Email/Success Message
• Conditional Email Routing based on input values
• Validate Uniqueness for Text Input values
• See more details for API calls and retry if not successful
• Replaced select2 with Choices.js library (cool)
• Enable Search option for single select options
• Internal Improvements and Performance increase
```

```markdown [🐞 Bug fixes]
• MailerLite issue fixed
• Translation Issue fix
• Partial entries issue fixed
• Twilio SMS issue fix
• Reset selects after form submission bug fix
• Popup issue fix for Elementor
• Translation loading issue fixed
• Slack Notification issue has been fixed
```

:::

## Fluent Forms v3.6.31

_Released on July 3, 2020_

::: code-group

```markdown [✨ Newly Added]
• Added "Mark as Favorite" in the entry details page
```

```markdown [⚡ Improvements]
• Conditional Logic improvement (Now you can add Conditional Logic to Containers)
• `wp_date()` support for older versions
```

```markdown [🐞 Bug fixes]
• Query String PHP notice fixed
• Email Summary Error Issue fixed
• Taxonomies issue has been fixed for container fields
```

:::

## Fluent Forms v3.6.0

_Released on June 18, 2020_

::: code-group

```markdown [✨ Newly Added]
• Introducing Partial Entries for Step Forms
• Introducing Weekly Email Summary for all of your forms
• Introducing Elementor widget
• Added German Language File
• Added priority-based country selection
• Added Kosovo to the country list
• Added layout option to make Radio/Checkbox as Button Selection style
• Added conditional source support for Hidden Fields
```

```markdown [⚡ Improvements]
• Brand new UI for Form Builder
• Advanced ACF Fields Support for Post Creation Feed
• Additional Regional Payment Methods for Stripe
• See All the Entries aggregated from all the forms
• Better Oxygen Page Builder Support
• Advanced Form Validation (Less Spam)
• Mobile-friendly Admin Panel
• Conditional logic issues for "less than" and "less than equal"
• Elementor and Oxygen popup issues for step forms
• Option to position input labels below the fields
• Passwords will be now truncated after feeds and API calls completed
```

```markdown [🐞 Bug fixes]
• Many Bug fixes and added improvements
```

:::

## Fluent Forms v3.5.6

_Released on April 29, 2020_

::: code-group

```markdown [✨ Newly Added]
• Added "Not Contains" conditional Logic
```

```markdown [⚡ Improvements]
• BIG: PDF module has been added, now you can send PDF via email or download
• BIG: Added Payment Summary Field
• Field Improvements, now you can use repeater field for calculations
• Auto Delete Files on Submission entry – you can see all the integration calls and responses
• Lots of improvement under the hood
• More than 150+ human hours + 50+ coffees (sorry, we lost count)
```

:::

## Fluent Forms v3.5.5

_Released on April 17, 2020_

::: code-group

```markdown [⚡ Improvements]
• BIG: Show payment summary as dynamic cart
• BIG: Added Dynamic input values in the form steps
• Refactored Frontend JavaScript, for a basic form it will load only 12KB JS
• Awesome goodies under the hood!
```

```markdown [🐞 Bug fixes]
• Conditional Logic on Payment Method Bug fix
• 3rd Party Integrations Bug fix
```

:::

## Fluent Forms v3.5.4

_Released on April 9, 2020_

::: code-group

```markdown [✨ Newly Added]
• Added Color Input Field
```

```markdown [⚡ Improvements]
• Refactored Conditional Logics JS
• Form Builder Improvement
```

```markdown [🐞 Bug fixes]
• Quantity Bug Fix for Payments
```

:::

## Fluent Forms v3.5.3

_Released on April 3, 2020_

::: code-group

```markdown [⚡ Improvements]
• Conditional Logic improvement
• T&C and GDPR UI improvement
• Submission JS improvement
```

:::

## Fluent Forms v3.5.1

_Released on April 2, 2020_

::: code-group

```markdown [🐞 Bug fixes]
• PayPal Sandbox issue fixed
• Payment Calculation Bug Fix
```

:::

## Fluent Forms v3.5.0

_Released on March 30, 2020_

::: code-group

```markdown [⚡ Improvements]
• Payment Features added
• Stripe Payment Method
• PayPal Payment method
• Payment and Donation Management
• CRM Integration – Drip
• Editor improvement
• Internal Architecture Improvement
• Akismet Integration
```

```markdown [🐞 Bug fixes]
• MailChimp tags update issue fixed
• CleanTalk Integration Bug Fix
• Other bug fixes and improvements
```

:::

## Fluent Forms v3.2.3

_Released on February 29, 2020_

::: code-group

```markdown [✨ Newly Added]
• Added Landing Page Feature for Forms
• Added `round()` function to calculations and other improvement
```

```markdown [⚡ Improvements]
• Step Form improvement
• Google Sheet Integration Improvement
• Other improvement
```

```markdown [🐞 Bug fixes]
• User Signup role selection fixed
• Post Submission Meta Fixed
```

:::

## Fluent Forms v3.2.1

_Released on February 15, 2020_

::: code-group

```markdown [⚡ Improvements]
• It's a very minor update so no new features (sorry)
```

```markdown [🐞 Bug fixes]
• Chained select upload issue fixed
• Form Calculation issue fixed
```

:::

## Fluent Forms v3.2.0

_Released on February 10, 2020_

::: code-group

```markdown [✨ Newly Added]
• New integration: Trello
• New CRM Integration: SendinBlue
• New Field: Chained Select
• Added Unique feature to Email Field
• Added options to add container class
```

```markdown [⚡ Improvements]
• User Registration Module on form submission
• Post/CPT Creation on Form Submission
• Prefix and Suffix feature in numeric field
• Resend Email Notifications
• Overall performance improvement
• Editor and Form rendering improvement
• Constant Contact version change to v2
```

:::

## Fluent Forms v3.1.5

_Released on December 31, 2019_

::: code-group

```markdown [✨ Newly Added]
• New Field: Net Promoter Score
• New CRM Integration: Platform.ly
• Added Media uploader to HTML fields
```

```markdown [⚡ Improvements]
• Advanced Form Styler
• Graphics-enabled radio/select fields (Yes! You can add photo to a check option now)
• Advanced Polls/Survey Fields and Reporting
• Advanced Calculation for checkable fields
• Interest Group Field added to MailChimp integration
• Reset Form Analytics
• Ability to send email as Plain Text
• Improved Email Delivery process
• Date-Time Field improvement
• Form init JavaScript Refactored
• File Upload button UI improvement
• Improved form validation message for checkable fields
• Total ~180 commits submitted to git (in this version alone)
```

```markdown [🐞 Bug fixes]
• Several Typo Fixes
• Sorting issue fixed from checkable options
• +28 issues have been resolved in this release
```

:::

## Fluent Forms v3.1.1

_Released on December 4, 2019_

::: code-group

```markdown [⚡ Improvements]
• Security update for jQuery File upload Library
```

:::

## Fluent Forms v3.1.0

_Released on November 19, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added Google Sheet integration
• Added Custom submit button for inline forms
• Added Slider input type
• Added Gutenberg block
• Added native form widget for sidebars and widget areas
• Added advanced options to date input
• Added step attribute to numeric field
• Added hidden fields to conditional logics
• Added global activity logs
• Added success message for redirect type confirmations
```

```markdown [⚡ Improvements]
• File attachment list view improved
• Improved Form Editor UX
• Integration improvements
• Internal improvements
```

```markdown [🐞 Bug fixes]
• Fixed form permission and role issue
• CSV/Excel export issue fixed
• Fixed submission error handler
```

:::

## Fluent Forms v3.0.8

_Released on November 6, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added extra CSS class to containers
• Added more hooks for developers
```

```markdown [⚡ Improvements]
• Form PopUp shortcode added
• Admin UI improvement
• Editor Improvement
```

```markdown [🐞 Bug fixes]
• Empty form submission issue resolved
• File Upload issue resolved
• Fixed `'` and `"` in value issue
• Elementor Pro Popup issue fix for reCAPTCHA
```

:::

## Fluent Forms v3.0.6

_Released on November 3, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added input field's index
```

```markdown [⚡ Improvements]
• Conditional Logics improvements
• Elementor PopUp Compatibility
• Compliance Settings improvement
• Use WP timestamp as default
• Help messages added to name fields
```

```markdown [🐞 Bug fixes]
• Email sending issue fix
• ActiveCampaign Integration fix and form attachment added
• MooSend Integration Fix
• Dynamic Error Message fix
• Section Break alignment fix
• JS Duplicate event fix
• Export-Import Forms fix
• Checkbox value parse fix
```

:::

## Fluent Forms v3.0.5

_Released on October 20, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added HIPAA & GDPR Compliance option for deleting entries on form submission
• Added User meta as default value
• Added RTL support
• Added More hooks for developers
```

```markdown [⚡ Improvements]
• Email sending improvement
• Step Text improvement and Translatable
• Internal Improvements
• Shortcode Parser Improvements
• Improved Default values
• Ability to hide name field's label
```

```markdown [🐞 Bug fixes]
• Fixed element attributes special chars
• Fixed submit button styling issue
• Fixed Multi-site Update Issue
```

:::

## Fluent Forms v3.0.3

_Released on October 16, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added Submission Properties to Smart Codes
• Added symmetric HTML to file upload
• Added option to hide labels
• Added GIST integration
```

```markdown [⚡ Improvements]
• Honeypot added
• Webhook integration improvement
```

```markdown [🐞 Bug fixes]
• Email sending bug fix
• Typo fix
• Multi-site installation fix
```

:::

## Fluent Forms v3.0.0

_Released on October 13, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added new db table for advanced reporting
```

```markdown [⚡ Improvements]
• All new form editor screen with simple, powerful and clean interface
• Built-in Data analysis tool for form submissions
• Submit button styling and customization option
• Improved form security
• Form Preview re-engineered now. In any theme, it will work fine
• Entry status management improvement
• Lots of integration added
• Global Integration and Module manager
```

```markdown [🐞 Bug fixes]
• Email bug fix
• Exporting data issue fixed
• File upload issue fixed
```

:::

## Fluent Forms v2.8.0

_Released on April 10, 2019_

::: code-group

```markdown [⚡ Improvements]
• Improved Integrations
• Improved File upload features
```

:::

## Fluent Forms v2.7.0

_Released on June 28, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added Lots of Integrations
• Added New Form Fields
```

:::

## Fluent Forms v2.0.1

_Released on June 1, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added lots of UI improvement
• Added option to add custom CSS and JS
• Added response filter options
• Added an option to export data
• Added Dashboard widget for a quick look
```

```markdown [🐞 Bug fixes]
• Fixed several bugs
```

:::

## Fluent Forms v1.8.0

_Released on April 10, 2019_

::: code-group

```markdown [✨ Newly Added]
• Added clean, responsive HTML email templates
• Added few filter and action hooks for developers
• Added pre-written email on default forms
```

```markdown [⚡ Improvements]
• Improved integrations
• Improved backend performance
```

```markdown [🐞 Bug fixes]
• Fixed conditional logic for multiple dropdown fields
```

:::

## Fluent Forms v1.7.5

_Released on November 19, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added option to give access of Fluent Forms to other user roles
• Added More hooks for developers
```

```markdown [🐞 Bug fixes]
• Small Fixes for Conditional Logic
• Fixed editor Sidebar Elements disorder
```

:::

## Fluent Forms v1.7.4

_Released on October 31, 2018_

::: code-group

```markdown [🐞 Bug fixes]
• Fix for some theme compatibility
• CSS fix for rating field
• Minor fix for CSV export for contact forms
```

:::

## Fluent Forms v1.7.3

_Released on October 27, 2018_

::: code-group

```markdown [🐞 Bug fixes]
• Conditional Logic Bug fix for Internet Explorer
• CSS fix for other browsers
```

:::

## Fluent Forms v1.7.2

_Released on October 20, 2018_

::: code-group

```markdown [⚡ Improvements]
• Changed Form Submission Process, now the form submission process is more faster
```

```markdown [🐞 Bug fixes]
• Minor Bug Fixes
```

:::

## Fluent Forms v1.7.0

_Released on October 11, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added Lots of New features
• Added Brand New Fields
```

```markdown [⚡ Improvements]
• Improved Performance — Conditional Fields have more options
```

:::

## Fluent Forms v1.6.0

_Released on June 28, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added More Integrations
• Added Rating fields
• Added GDPR Compliance
```

```markdown [⚡ Improvements]
• Improved Export Entries
```

:::

## Fluent Forms v1.5.3

_Released on April 30, 2018_

::: code-group

```markdown [⚡ Improvements]
• Improved Conditional Logics
```

```markdown [🐞 Bug fixes]
• Fixed Builder Drag and Drop Bug
```

:::

## Fluent Forms v1.5.2

_Released on April 24, 2018_

::: code-group

```markdown [⚡ Improvements]
• Support for PHP 5.4
```

:::

## Fluent Forms v1.5.1

_Released on April 20, 2018_

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Admin Screen bug fix for special directory names for some servers
```

:::

## Fluent Forms v1.5.0

_Released on April 19, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added Mask Input Field
• Added Submit Button Customization
• Added Dynamic Default Value from `$_GET` Parameter
• Added `+` icon on Form Editor for faster Form Create and Edit
• Added Ratings component
• Added dynamic fields on Redirects
```

```markdown [⚡ Improvements]
• Placement of Required Items `*`
```

:::

## Fluent Forms v1.4.3

_Released on March 24, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added Name Input Field transformer
• Added Admin Label for all the elements
• Added compact mode on all entries page
```

```markdown [⚡ Improvements]
• Made the input fields settings more User Friendly
• Restricts special chars on name attributes
• Terms and Conditions field
• Sort the entries latest first
```

```markdown [🐞 Bug fixes]
• Fixed reCAPTCHA on Form Submission
```

:::

## Fluent Forms v1.4.0

_Released on March 19, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added More Input Fields
• Added capability to add custom fields for 3rd party developers
```

```markdown [⚡ Improvements]
• Whole New Form Builder Editor
• Improved the overall performance
• Reviewing form entries is more easy by going next and previous
```

:::

## Fluent Forms v1.3.4

_Released on February 20, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added loading at form submission
```

```markdown [⚡ Improvements]
• Improved entry view
```

```markdown [🐞 Bug fixes]
• Fixed conflict with Jetpack
```

:::

## Fluent Forms v1.3.0

_Released on February 17, 2018_

::: code-group

```markdown [✨ Newly Added]
• Added Image as Submit Button on form
```

```markdown [⚡ Improvements]
• Refactoring Form Builder for better performance
• 20% performance increase at backend
```

```markdown [🐞 Bug fixes]
• Fixed conflict with Jetpack
```

:::

## Fluent Forms v1.2.5

::: code-group

```markdown [⚡ Improvements]
• Google reCAPTCHA iOS UX Improvement (thanks to Antonio Lucio)
• Unread Entries Navigation Improvement
```

:::

## Fluent Forms v1.2.4

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Google reCAPTCHA Conflict with Contact Form 7
• Form Builder Fixed for Safari
```

:::

## Fluent Forms v1.2.3

::: code-group

```markdown [✨ Newly Added]
• Added Next and Previous Button on Form Entry
```

```markdown [⚡ Improvements]
• Simple Hidden Fields Editor
```

```markdown [🐞 Bug fixes]
• Fixed Google reCAPTCHA
```

:::

## Fluent Forms v1.1.3

::: code-group

```markdown [✨ Newly Added]
• Added More options
```

```markdown [⚡ Improvements]
• Mailchimp double opt-in support
```

```markdown [🐞 Bug fixes]
• Fixed select and radio fields
```

:::

## Fluent Forms v1.1.3

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Mailchimp List Selection
```

:::

## Fluent Forms v1.1.2

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Mailchimp Double Opt-In issue
```

:::

## Fluent Forms v1.1.0

::: code-group

```markdown [✨ Newly Added]
• Added Mailchimp Integration
• Added Slack Integration
• Added Label positioning for each form element
• Added Country Field
```

```markdown [⚡ Improvements]
• Improvements of Conditional Logic rendering
• Lots of Improvement in Form Builder
```

:::

## Fluent Forms v1.0.0

::: code-group

```markdown [⚡ Improvements]
• Initial release of the most Advanced form builder plugin
```

:::
