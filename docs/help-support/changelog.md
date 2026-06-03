# Changelog

All notable changes to **Fluent Forms**. For the canonical, always-up-to-date changelog, see also:

- [fluentforms.com/changelog](https://fluentforms.com/changelog/)
- [WordPress.org plugin page](https://wordpress.org/plugins/fluentform/#developers)
- [GitHub releases](https://github.com/WPManageNinja/fluentform/releases)

---

## 6.2.2 — April 23, 2026

- Added subscription field support in payment calculations
- Fixed raw cookie values for smartcodes
- Hardens email attachment path resolution to keep notification attachments inside allowed paths
- Hardens predefined form payload handling and confirmation validation
- Improved compatibility for legacy predefined field option validation
- Improved form-scoped access for submission collection and print endpoints
- Tightens allowed-forms scope handling for form managers
- Ensured form settings are normalized before use
- Fixed the integration of the ActiveCampaign issue
- Preserves post-feed draft values on the resume
- Respects user locale in the form editor
- Improved ACL permission checks and helper coverage for delegated and full-access flows
- Hardens form HTML sanitization by blocking event handlers and escaping permission message shortcode output
- Improved global integration settings access restriction and protects payment filters AJAX metadata endpoint
- Sanitizes form step settings while preserving safe HTML in step button text
- Improved entry export to honor submission info selection
- Improved multisite site setup until initialization
- Improved long entry content previews

## 6.2.1 Pro — April 16, 2026

- Fixed imported entries after framework v2 request namespace changes
- Fixed imported form styles not being restored correctly
- Hardens entry, preview, webhook, Zapier, import, and resend actions with form-scoped authorization checks
- Hardens payment bulk actions and legacy payment AJAX fallbacks against unauthorized form access

## 6.2.1 Free — April 16, 2026

- Hardens form-scoped permissions
- Added opt-in legacy HMAC fallback for pre-6.2.0 encrypted tokens to ease upgrade compatibility
- Added filter hooks for honeypot, Akismet, and CAPTCHA spam/failed messages
- Added database indexes to the `form_analytics` table for faster reporting queries
- Added mbstring fallback for servers without the extension
- Fixed public PDF download support for legacy links
- Fixed draft submissions table support in entry export
- Fixed entries search ACL issue
- Fixed All Entries page localStorage persistence
- Fixed character-limit validation showing the configured message instead of a raw field name
- Fixed numeric validation so numeric-looking text is no longer treated as a number
- Fixed WPML addon activation failing with an Invalid plugin error

## 6.2.0 Free — April 1, 2026

- Upgraded internal framework for better performance and PHP 8.4 support
- Improved Stripe payment confirmation security
- Improved data export security
- Improved database query performance for reports
- Added filter hook for conversational form extra inputs
- Fixed textarea line breaks not displaying correctly in entries
- Improved overall plugin security and stability
- Dev: Upgrade Guide for developers

## 6.2.0 Pro — March 31, 2026

- Fixed Square payment by migrating from deprecated CreateCheckout to Payment Links API
- Fixed Square order ID validation to prevent tampering on payment callback
- Updated Square payments to the latest Payment Links API
- Fixed Authorize.Net not sending full billing address with payments
- Fixed draft not clearing after submission via Save & Resume link
- Improved payment security across all gateways
- Added support for core update of fluentform core version

## 6.1.21 — March 17, 2026

- Added subscription end date to auto-calculate `bill_times` for subscription payments
- Hardens Stripe SCA payment confirmation endpoints against fraud and DoS
- Fixed spoofable `form_id` in SCA payment confirmation that could select wrong Stripe API key
- Added transaction status validation (intended state) to prevent unauthorized payment confirmations
- Added payment amount verification after Stripe confirms payment
- Fixed missing capability check on MailChimp interest groups endpoint
- Fixed unsanitized `sort_by` parameter in Logger and Submission queries
- Hardens payment confirmation endpoints against fraud and DoS across all gateways
- Added centralized payment validation (BaseProcessor) with transaction status, ownership, and double-pay prevention
- Added nonce verification for RazorPay, Paystack, Paddle, and Authorize.Net payment confirmations
- Added payment amount verification for RazorPay, Paystack, and Paddle gateways

## 6.1.20 — March 4, 2026

- Fixed Stripe coupon discount rounding losing cents on multi-quantity line items
- Fixed step form save and resume

## 6.1.19 — February 25, 2026

- Added backward-compatibility for deprecated classes

## 6.1.18 — February 25, 2026

- Improved file delete endpoint security
- Added input sanitization to all report data endpoints
- Added sanitization to payment receipt shortcode request parameters
- Fixed SQL LIKE wildcard injection in field uniqueness validation
- Fixed mixed SQL escaping patterns in post type queries
- Strengthens output escaping in payment receipt templates
- Tightens permissions to enforce view-only access for entry updates, partial-entry cleanup, and notification resends
- Expands entry editor sanitization with field-aware, type-specific handling and additional hardening

## 6.1.17 — February 3, 2026

- Fixed conversational form subscription plan not showing in payment summary when first option is selected
- Fixed Custom JS disappearing after reload
- Fixed conversational form "Other Option" field not appearing for radio buttons using Button Style

## 6.1.16 — January 30, 2026

- Fixed input image issue in conversational form
- Fixed form entries export issue

## 6.1.15 — January 29, 2026

- Added default form style option which auto-applies to all new forms with Form Styler (Pro) support
- Added dynamic autocomplete field type in dynamic field
- Added option to apply default style to imported forms
- Added prefix/suffix options for textarea, URL and password fields
- Added mobile keyboard type options for number and mask inputs
- Added verified plugins suggestions page
- Improved AI form builder security
- Improved multiselect accessibility with Choices.js dropdown
- Improved form title generation in form history
- Improved form saving UX
- Fixed repeater table generation in PDF

## 6.1.14 — January 15, 2026

- Fixed issue with numeric field
- Added a form edit button in Elementor form widget

## 6.1.13 — January 14, 2026

- Added mobile keyboard type option for numeric and Mask Input fields
- Added "Inherit Theme" option for Form Style Template in Elementor widget
- Added more string translation support for WPML
- Improved country names according to the latest ISO 3166-1 alpha-2 list
- Fixed Business Logo upload issue in payment settings
- Fixed Dynamic SmartCode not working for conversational forms

## 6.1.12 — December 26, 2025

- Fixed delay with condition and range slider field
- Fixed top performing form report count
- Fixed Button Style "Other Option" input issue with images
- Improved security and sanitization for confirmation messages

## 6.1.11 — December 4, 2025

- Fixed issue with saving showing invalid JSON
- Fixed default behavior of regex in advanced validation

## 6.1.10 — December 2, 2025

- Fixed global settings save issue
- Added "Other" option support in Conversational Form
- Fixed form submission delay issue for a large condition set

## 6.1.8 — December 1, 2025

- Improved client IP detection
- Improved sanitization and security
- Added reset button to Block form style customizer

## 6.1.7 — November 21, 2025

- Added autosave feature in global settings for Form Editor
- Fixed button issue with payment shortcode
- Fixed date timezone issue with form schedule

## 6.1.6 — November 12, 2025

- Fixed block CSS issue
- Fixed conversational form shortcode warnings

## 6.1.5 — November 12, 2025

- Added Gutenberg Block Form Style Customization
- Added Conversational Form Editor shortcode support
- Added Custom CSS/JS support in form AI creation (beta)
- Added warning message for Name Attribute changes to prevent entry data loss
- Added a dropdown in permission manager selection
- Added signature field support in conversational form (for signature addon)
- Added collapsible areas (accordion & tab mode)
- Added Authorize.Net payment gateway integration
- Added Net Promoter Score field support in Conversational Forms
- Added "Other" option for Checkboxes allowing users to specify custom values
- Added conditional shortcode support in Double Opt-in email subject and body
- Added filter for image upload types customization
- Updated export library to OpenSpout for better compatibility
- Updated Action Scheduler library to latest version
- Improved database query performance with optimized indexes
- Improved accessibility for screen readers
- Improved translations
- Improved Design Preview color handling with block themes
- Improved plugin security and escaping from Plugin Check suggestions
- Improved accessibility with proper aria-labels for next/prev/submit buttons
- Improved Double Opt-in confirmation error handling
- Improved Dynamic field documentation for AND/OR condition clarity
- Improved Dynamic field input customization to show all post authors
- Improved CleverReach integration documentation
- Improved Save and Continue feature compatibility with Repeater Container
- Improved Mailster integration to use `mailster_subscribe` function
- Fixed Payment Form submission failures inside Elementor popups
- Fixed Custom style CSS backtick insertion issue
- Fixed country name from "Turkey" to "Türkiye"
- Fixed `{user.meta.meta_key}` shortcode for non-English languages
- Fixed Advanced Filter UX issue with persistent dialog box
- Fixed textarea line break in entry import/export
- Fixed Entries table showing option values instead of labels for radio/select fields
- Fixed Quantity field default value not working with conditional logic
- Fixed Range Slider duplication in Elementor popups
- Fixed Global Inventory module name display for single payments
- Fixed Rich Text Field mapping to ACF user fields
- Fixed `payment_total` showing extra digits in webhook integration
- Fixed reCAPTCHA V3 overlapping prev/next buttons
- Fixed JetEngine field mapping with conditional form fields
- Fixed Dropdown Field mapping with JetEngine meta fields default selection
- Fixed Country field issue with "Curaçao" special character handling
- Fixed inconsistent Dropdown field search behavior with synonyms
- Fixed grammar error in Multiselect field max selection message
- Fixed form reset not clearing field values
- Fixed Range Slider default value positioning in conditional container fields
- Fixed uploaded image file renaming by custom hooks affecting featured image names
- Fixed Inventory module null quantity rendering
- Fixed Telegram message formatting spacing issues
- Fixed multiple `payment_total` shortcode not reflecting coupon-adjusted prices
- Fixed Phone field validation conflicts with other plugins

## 6.1.4 — September 23, 2025

- Updated language files

## 6.1.3 — September 23, 2025

- Fixed Elementor backend editor not working when Fluent Forms was added
- Fixed the multiple choice field not working in Elementor popup
- Fixed Report Page UI not properly showing in RTL
- Fixed Stripe payment error when global auto-load CAPTCHA is enabled in conversational forms
- Fixed the Conversational Form Phone Field to return numbers in the full international format
- Fixed Custom User Meta Fields not populating
- Fixed the phone field search input style height
- Fixed email notification triggering for empty payment method form
- Fixed the PDF Download link in confirmation message
- Fixed PHP 8 compatibility issues with Excel exports
- Fixed the range slider in conversational forms causing incorrect progress percentage

## 6.1.3 Pro — September 2, 2025

- Fixed plugin updater

## 6.1.2 — August 29, 2025

- Changed IP location service for country restriction
- Fixed subscription payment translation issue

## 6.1.0 Pro — August 28, 2025

- Added one-time use functionality to Save and Resume links
- Added more report components to the Report Page
- Added HTML5 geolocation for address field autocomplete
- Added Location latitude and longitude to shortcode list
- Improved phone field country flags responsiveness with upgraded intl-tel-input library
- Improved step form rendering
- Fixed step form flickering issue on mobile devices and empty steps
- Fixed step form conditional logic with animation type "none"
- Fixed Save & Resume email field duplication on Enter key press
- Fixed post creation hook issue with user registration
- Fixed Rich Text rows configuration
- Fixed conditional logic for Repeat Container fields
- Fixed Star Rating and Dropdown field value retention in resumed forms
- Fixed inventory count display discrepancy between frontend and dashboard
- Fixed range slider default values in conversational forms
- Fixed quantity mapping in range slider for conversational forms
- Fixed checkable grid validation message for current field name
- Fixed JetEngine user meta textarea field mapping
- Fixed repeat container dropdown and multi-select searchable smart option
- Fixed step form per-step field population to multiple forms for single page
- Fixed repeater container with custom HTML formatting in submissions
- Fixed dynamic field data restoration with Save and Resume
- Fixed checkable grid error with multiple spaces in row labels
- Fixed user registration with password fields containing `%` character
- Fixed coupon code discount minimum purchase amount calculations in payment summary
- Fixed container conditional logic in mobile preview
- Fixed Square Payment Japanese Yen (JPY) decimal handling
- Fixed inconsistent USA state population in address autocomplete and adds `fluentform_googlemaps_address_parse` event
- Fixed multi-select and smart search enabled select options scrolling on mobile devices
- Fixed Mollie payment status update immediately after payment

## 6.1.2 — August 27, 2025

- Fixed phone field library issue
- Fixed repeater container condition validation issue
- Synced offline payment email notification with payment status

## 6.1.1 Free — August 27, 2025

- Added Fluent Forms Report module
- Added conversational forms scroll-to-top option
- Added keyboard shortcut for delete input field in the editor
- Improved Export entries fields by remembering last selected fields
- Improved IP detection
- Improved consistency of settings deletion notifications
- Fixed form API empty title retrieval issue
- Fixed WPForm Migrator with empty forms
- Fixed radio field customization UI default value selection
- Fixed video playback in Support section
- Fixed CleanTalk/Akismet protection spam submitting forms twice
- Fixed integrations page sidebar menu selection indication on reload
- Fixed conversational forms GDPR checkbox implementation
- Fixed CAPTCHA conflict when global and form-specific settings differ
- Fixed hide-after-submission option setting for conversational forms
- Fixed Terms & Conditions field validation error messages for "not accepted"
- Removed non-functional Reset Form button from conversational forms
- Fixed payment method showing "Test" instead of "Offline" in payments shortcode
- Fixed multiple address field autocomplete in conversational forms
- Fixed submission on Enter key press with selected radio/checkbox using keyboard
- Fixed entries chart date range filtering
- Fixed database creation errors in WordPress Studio environments
- Fixed trailing comma in keyword restriction that incorrectly blocked all submissions
- Fixed WP Text Editor sanitizer removing links in success messages with search parameters
- Fixed Object Injection Vulnerability unserialize issue when using user-profile-specific shortcodes
- Closed payment summary items rendering issue

## 6.0.4 — May 29, 2025

- Added submission view page for users to see their own submissions
- Added smartcode to embed submission view page link
- Added Square payment SDK locale support for multiple languages
- Added filter `fluentform/double_optin_invalid_confirmation_url_message` to customize double opt-in confirmation URL messages
- Improved step form animations for better user experience
- Improved ChatGPT integration with HTML code support and loading indicators
- Improved honeypot condition check
- Added support for WPML translation with the Multilingual Forms for Fluent Forms with WPML addon
- Fixed the net promoter score field's zero (0) value in the visual report
- Fixed the multi-select values in the submission including commas
- Fixed tooltip/help message
- Fixed conversational form address field default value meta smartcode
- Fixed conversational form section break image layout position
- Fixed email attachment missing for WordPress subdirectory
- Fixed conversational form name and address fields prefilled using URL params
- Fixed keyword-based restriction if IPInfo access key is provided
- Fixed conversational form invisible turnstile autoload
- Fixed email notification/integration sending after payment status change to paid
- Fixed turnstile with WP Rocket compatibility
- Fixed issue where removing coupons didn't update payment summary
- Fixed Paddle payment redirection problems
- Fixed Paddle catalog and price items update issues
- Fixed Paddle customer creation during payment
- Fixed file attachments not working in Resend Email Notifications
- Fixed `fluentform_payments` shortcode for subscription filtering by type/status
- Fixed simple inventory counting inaccuracies when quantity is increased
- Fixed file upload errors not clearing after subsequent uploads
- Fixed missing files in save and resume functionality
- Fixed conversational form per-step data saving issues with custom HTML fields
- Fixed Weglot translation AJAX issue with file upload URL

## 6.0.3 — April 16, 2025

- Added filter hooks for disable CAPTCHA validation
- Added filter hooks to control response as HTML on checkable field
- Added filter hooks to control Mailchimp timeout
- Improved rating field accessibility
- Fixed Cross-Site Scripting vulnerability (CVE-2025-3615)
- Fixed CleanTalk toggle in misc settings
- Fixed analytics visual report showing empty
- Fixed aria-label separately in address field
- Fixed early textdomain loading issue
- Fixed global inventory tracking for refunded payments
- Fixed AffiliateWP referral amounts with applied coupons
- Fixed step scrolling with Custom HTML fields
- Fixed style unit values disappearing when switching unit types
- Fixed placeholder issue for Rich Text Input

## 6.0.2 — April 7, 2025

- Fixed Stripe 3DS payment issue
- Fixed form entry delete issue

## 6.0.1 — March 20, 2025

- Fixed container conditional logic issue

## 6.0.0 — March 19, 2025

- Added Payment fields
- Added Stripe payment gateway
- Added Advanced Conditionals group for enhanced form logic
- Added Fluent Forms AI for creating AI-assisted forms
- Added New Form Templates
- Improved hCaptcha settings saving method
- Improved CAPTCHAs loading after first interactions on popups
- Improved CleanTalk API
- Improved spam processing logs
- Fixed Stripe fields language issues
- Fixed `customer_name` issue for Stripe
- Fixed conditional `{dynamic.}` shortcode in Custom HTML fields
- Fixed frontend `site_url` with `home_url`

## 5.2.12 — February 18, 2025

- Added token-based spam protection for enhanced form security
- Added Italian Translation
- Improved Honeypot Security for better bot detection
- Improved Turnstile appearance option names for clarity

## 5.2.11 — February 10, 2025

- Added CleanTalk Spam Protection with API
- Added Hungarian Language Translation
- Added options for reCAPTCHA V3 badge rendering
- Improved Honeypot spam protection
- Fixed WordFence vulnerability IP-Spoofing (CVE-2024-13666)
- Fixed `fluentform/load_default_public` filter not affecting Block Editor

## 5.2.10 — January 7, 2025

- Fixed unsupported field disappears inside container
- Fixed name/address fields "0" required validation
- Fixed custom button style reset border radius 0px

## 5.2.9 — January 6, 2025

- Added CleanTalk Spam Protection
- Added Repeater Container Field
- Added User Map Location in Submission
- Improved Step Form accessibility
- Updated Akismet option with spam submission skips integration
- Fixed WP Forms multi-page form migration
- Fixed container drop inside another container
- Fixed radio selection on the entry editor
- Fixed dropdown field smart choose long options width
- Fixed ChatGPT form creation empty label and name
- Fixed taxonomy field placeholder
- Fixed radio buttons layout with smart UI
- Fixed user registration & update with admin approval by choosing bulk action "mark as approved"
- Fixed user registration payment status change manually

## 5.2.8 — December 18, 2024

- Fixed hidden field with empty value conditional logic issue in Conversational Forms
- Fixed range slider validation issue in Conversational Forms
- Improved & Fixed space issue in Checkable Grid

## 5.2.7 — December 5, 2024

- Added all forms export button
- Fixed WordFence vulnerability CVE-2024-10646
- Fixed hidden field with empty value conditional logic in Conversational Forms
- Fixed `post.permalink` editor shortcode link in RTL
- Fixed `ff-read-only` class with accessibility
- Fixed watermark inactive issue (PDF Addon)
- Fixed stop getting PDF if submission is trashed (PDF Addon)

## 5.2.6 — November 19, 2024

- Fixed radio field image issue
- Fixed conversational dynamic shortcode issue

## 5.2.5 — November 19, 2024

- Added form editor undo/redo functionality (Beta)
- Added global option to select date and time format for admin page views
- Added submission & field-specific shortcode
- Added "Go to page" feature for pagination
- Added global settings sidebar custom links sub-menu style
- Added "DELETE" input prompt on form deletion
- Added landing page share option on All Forms page
- Added hook for injecting custom payment method subscription cancellation message
- Added API log for non-async integration
- Improved Security by working with Plugin Security Certification (PSC) by CleanTalk
- Improved accessibility (focus on radio buttons, T&C text screen reader support)
- Improved translations
- Improved integrations API logs bulk replay actions functionality
- Improved submission logs API calls retry action
- Improved synchronization of "All Entries" chart with form ID and date range
- Improved initial disabling of analytics
- Improved Mailchimp date field with more format options
- Improved checkable field bulk options in the editor (supports `:` on value & label)
- Improved Constant Contact to V3
- Fixed shortcode copy message showing multiple times on entry page
- Fixed screen reading issue with name fields
- Fixed mobile responsiveness of tools page sidebar navigation
- Fixed double submission when submit button is clicked twice with custom URL redirection setup
- Fixed undefined shortcode key for conditionally hidden fields
- Fixed FluentCRM dynamic tag selection based on subscriptions plan
- Fixed Visual Report filter issue
- Fixed Square live mode script
- Fixed big integer payment item price
- Fixed duplicate post created on post form with admin-approval & double opt-in
- Fixed partial entries file upload populate date
- Fixed missing paragraph on ChatGPT form generation
- Fixed Salesforce integration sandbox selection not changing
- Fixed Airtable integration long text with rich text enabled

## 5.2.4 — October 1, 2024

- Fixed calculation issue

## 5.2.3 — September 30, 2024

- Added form edit history (Beta)
- Added editor keyboard navigation and shortcuts
- Added form-specific permissions in the permission manager
- Added Paddle payment method
- Added Square inline payment integration
- Added MetaBox for user registration and updates
- Added dynamic default values for dynamic fields
- Improved condition change event handling
- Improved All Forms page form ordering to retain on reload
- Improved dynamic fields CSV with a delimiter option
- Improved dynamic repeater field SmartCode
- Improved repeater field accessibility
- Fixed exposing the conversational form URL
- Fixed empty URL GET parameters in conversational form shortcodes
- Fixed all-form filter selections being retained on page reload
- Fixed Next button trapping keyboard focus
- Fixed confirmation redirect URL handling for spaces
- Fixed entries export issue for forms with a large number of fields (250+ fields)
- Fixed Dynamic SmartCodes in conditional fields
- Fixed checkable field "not-equal" condition on conversational form
- Fixed exporting numeric fields to Excel
- Fixed label asterisk style with Elementor widget
- Fixed conditional logic with numeric formatting
- Fixed Checkable Grid submission issue
- Fixed rich text data handling for partial entries
- Fixed issue with Zapier entry action resends
- Fixed SmartCode issue with post permalinks
- Fixed issue with TranslatePress shortcode in double opt-in confirmation messages
- Fixed validation error on single payment stockout messages
- Fixed required validation for featured images in post updates
- Fixed issue with temporary directory files not being deleted on AWS S3
- Fixed image preview style issues in 4, 5, and 6-column layouts
- Fixed radio field button-type custom style

## 5.2.2 — September 11, 2024

- Updated tested WordPress Version
- Fixed Gutenberg block widget

## 5.2.1 — September 10, 2024

- Fixed custom error messages vulnerability (allowing admin to inject script in custom error messages)
- Fixed dropdown field in conversational forms after conditional multi-select
- Fixed checkbox field "not-equal" condition in conversational forms

## 5.2.0 — August 7, 2024

- Added print entries
- Added context menu in editor
- Added Advanced Search Filter on Entries Page
- Added Dynamic Field
- Added Image/File Dropzone
- Added Save & Resume Button for logged-in users and Send Notification
- Added Vietnamese Language Support
- Fixed PDF feed watermarks
- Fixed inactive conversational form pretty permalink
- Fixed address field country hide label
- Fixed GDPR attribute `target=_blank`
- Fixed Cloudflare Turnstile multiple widget
- Fixed PHP 8.3 deprecation warning
- Fixed Inherit theme style for submit button preview
- Fixed timezone change deprecated message
- Fixed Featured Image reloading on the Post Update form
- Fixed Phone field validation for Hong Kong's phone numbers
- Fixed Inventory Management "Show Available Stock" issue
- Fixed JetEngine checkbox meta issue
- Fixed Phone Number & Number failure on Airtable integration
- Fixed PayPal subscription pending due to EUR currency
- Fixed Payment info for Stripe embedded checkout if conditions are applied
- Fixed `u_name()` function disabled on the server
- Fixed Stripe embedded checkout Link option removal
- Fixed Address single subfield Google Maps retrieval
- Fixed User Update repopulate meta key with subfields like Address, Name
- Fixed typo on Subscription
- Fixed Custom submit button color picker uniform design
- Fixed Quantity mapping of payment items if the label is empty
- Fixed spout package conflict on entries export
- Fixed status change of subscription from entry
- Fixed Radio button size not showing on styler
- Added ACF & JetEngine meta on User Registration & Update
- Improved User Update
- Improved OnePageCRM integration
- Improved Quiz Setting (Delete Option)

## 5.1.20 — July 25, 2024

- Fixed vulnerability in checkboxes (CVE-2024-6518, CVE-2024-6520) reported by WordFence
- Fixed textarea fields sanitization and output vulnerability (CVE-2024-6521) reported by WordFence
- Fixed conversational form welcome field `description` and `btn_txt` field vulnerability (CVE-2024-6703) reported by WordFence

## 5.1.19 — June 15, 2024

- Added injectable custom Vue component on form settings and global settings
- Fixed integration update authorization vulnerability
- Fixed dynamic default values default options
- Fixed Elementor v3.0.0 deprecated class
- Fixed phone field country container z-index
- Fixed hidden turnstile margin
- Fixed numeric-field name hyphen format

## 5.1.18 — May 23, 2024

- Added Form creation using AI (ChatGPT)
- Added submission confirmation message using AI (ChatGPT)
- Added post shortcodes
- Added support for Kenyan shilling for Paystack
- Fixed unselected radio payment field validation
- Fixed repeater field data on Trello board
- Fixed cross-form CAPTCHA error

## 5.1.17 — May 17, 2024

- Improved capability check for global settings & manager settings (security issue reported by Patchstack)
- Added label shortcode support in global default message
- Changed type of `source_url` database column from varchar to text
- Improved UX of form active/inactive loader
- Improved keyword-based restriction

## 5.1.16 — May 6, 2024

- Fixed editor vulnerability for attacker with contributor level access (WordPress version 6.4.0)
- Fixed conversational design settings sanitization & escaping
- Fixed conversational form save and resume preview form
- Fixed conversational form conditional-based calculation field error

## 5.1.15 — April 25, 2024

- Fixed nested condition

## 5.1.14 — April 19, 2024

- Improved conversational form sanitization & escaping
- Fixed entry action for post feed

## 5.1.13 — April 18, 2024

- Fixed conversational form shortcode issue

## 5.1.12 — April 18, 2024

- Added "Name Field" on conversational form
- Added label shortcode
- Added JetEngine CPT compatibility
- Added conversational form "Save and Resume"
- Added entries API logs retry action
- Added CSS variable support
- Improved repeater and name field on entry update
- Improved CleverReach all scopes message check
- Improved container action UI
- Improved accessibility on repeater field
- Improved filter hook to change Stripe inline custom style
- Added support for multiple emails in email routing
- Fixed mask input on Elementor popup
- Fixed coupon skip button text on conversational form
- Fixed query string email `@` symbol encode on redirect URL
- Fixed redirect URL parameter anchor
- Fixed checkbox and radio smart choices tab navigation
- Fixed name fields individual label placement
- Fixed checkbox & radio field issue with condition
- Fixed HubSpot checkbox on custom field
- Fixed GetResponse integration empty name
- Fixed custom mask input on repeater field
- Fixed repeat field default value on new row
- Fixed multiple choice user meta dynamic default value
- Fixed subscription user input minimum value with conditions
- Fixed empty name on Stripe subscription payment
- Fixed global inventory same radio options remaining count
- Fixed inventory same label name conflict on Inventory page
- Fixed Quiz score value mapping on FluentCRM dynamic tag section
- Fixed border on custom style
- Fixed post update for current user on logout session
- Fixed HTML tag on Zoho CRM text area field
- Fixed checkable grid data on Trello description
- Fixed checkable grid data on Discord
- Fixed file upload on entry update
- Upgraded jQuery UI Widget to 1.13.2 to fix vulnerability
- Removed non-essential `required` attributes from Pipedrive integration

## 5.1.11 — February 26, 2024

- Fixed URL escaping bug

## 5.1.10 — February 26, 2024

- Added turnstile for conversational form
- Improved turnstile with appearance modes
- Fixed Inventory Module hiding empty stock
- Fixed URL escaping issue of form redirect
- Fixed sanitization issue for HTML-supported fields
- Fixed Entry Export with user submission IP
- Fixed PDF feed watermark image
- Fixed Name Field aria-required attribute
- Fixed PDF Feeds on duplicate form
- Fixed Numeric min-max Field bug

## 5.1.9 — January 19, 2024

- Updated Custom HTML field sanitization
- Improved server-side conditional settings validation

## 5.1.8 — January 19, 2024

- Fixed step navigation button issue
- Improved sanitization on form import

## 5.1.7 — January 17, 2024

- Added Contact Form 7 Migration
- Added Global Inventory
- Added Import Entries
- Added Admin Approval
- Added Inherit theme style support in form Styler
- Added Form Title smartcode on confirmation
- Added more translation strings
- Added filter to skip validation of selectable inputs
- Improved Admin Mobile responsiveness
- Improved Address Field Sub Field Label Placement
- Improved Custom Styler
- Fixed background color not showing on landing preview page
- Fixed quiz field condition on the conditional confirmation
- Fixed Conversational form Custom HTML automatically scrolls to bottom of page
- Fixed range slider default value with required option
- Fixed multiple subscription plan minimum value
- Fixed showing trashed entries on Survey Result
- Fixed Airtable phone field validation
- Fixed subscription plan custom input min value
- Fixed predefined form filter issue on form creation
- Fixed CC/BCC email on Email Notification Routing
- Fixed hidden field mapping on integration
- Fixed Sync visual report order with form fields order
- Fixed nested conditional field

## 5.1.5 — November 23, 2023

- Fixed max length validation
- Improved options validation
- Improved date validation
- Improved conditional logic

## 5.1.4 — November 22, 2023

- Fixed advanced country list issue

## 5.1.3 — November 22, 2023

- Added support for ACF field on Post revision & ACF rich-text value on Post Update Form
- Improved Gravity Forms migration entries by status
- Improved WP Forms migration fetch webhook feed
- Improved Airtable integration
- Fixed null value on mapping Post create feed
- Fixed inventory quantity field issue
- Fixed range slider required field value on render
- Fixed temp attachment files deletion
- Fixed checkable grid and repeater field data format on webhook
- Fixed Google address autocomplete on Elementor popup

## 5.1.0 — November 1, 2023

- Added Global Search
- Added Global Default Validation Messages
- Added support for Fluent Booking in Conversational Form
- Added theme style inherit option
- Added Form submission restriction based on Keyword
- Added a refresh button on form entries
- Improved WPForms and Gravity Forms migration support for conditional logic mapping
- Fixed URL cut-off on the Entries page
- Fixed pagination in Forms and Entries pages
- Fixed attachment preview in email notification
- Fixed multiple numeric calculations in conversational forms
- Removed total views from exported forms
- Added `esc_*` for dynamic properties

## 5.0.12 — October 19, 2023

- Fixed theme selection bug

## 5.0.10 — October 18, 2023

- Added form preview in Gutenberg block
- Added form theme change support in Gutenberg block
- Added theme style inherit option
- Fixed Form finder

## 5.0.9 — September 8, 2023

- Inactive form submission prevented
- Fixed compact mode entries view

## 5.0.8 — August 24, 2023

- Added address field in conversational form with Google Map Support
- Added entries sort by column
- Fixed integration "Others" field add or remove behavior
- Fixed `{all_data}` and `{all_data_without_hidden_fields}` shortcode using together
- Fixed global enabled CAPTCHA issue in conversational Form
- Fixed form title update
- Fixed Slack integration toggle
- Fixed forms submission next & preview order

## 5.0.7 — July 18, 2023

- Fixed LiteSpeed caching issue
- Fixed dynamic shortcode bug
- Fixed style issues
- Fixed PDF issue for the checkbox field
- Fixed post update issue for block conditional issues for payment items
- Fixed Double Opt-In save issue
- Fixed entry export filter issue
- Improved email on iOS devices

## 5.0.5 — June 28, 2023

- Fixed Form Editor Update Error due to Old API

## 5.0.4 — June 28, 2023

- Styling Improvement for Gutenberg Editor
- Fixed ModSec issues for Form Builder & Settings Update
- Fixed Compatibility Issue with WP Fusion

## 5.0.3 — June 26, 2023

- Form Restrictions check improved
- Email Notification improved
- Visual Reporting issues fixed
- Fixed issues with the REST API endpoints
- Fixed Compatibility issue with Caching Plugins and few other servers
- Styling issues fixed
- Deprecated hooks notices fixed
- LiteSpeed cache compatibility issue fixed

## 5.0.1 — June 22, 2023

- Hotfix: custom Editor shortcode compatibility issue fixed

## 5.0.0 — June 22, 2023

- Revamped UI and better UX
- Global Styler Improvement
- New framework for faster response
- Fixed issue with repeat
- Fixed issue with WPForm Migrator not properly transferring text fields
- Text input fields with correct maximum text length
- Fixed issue with entry migration
- Fixed number format in PDF files
- Fixed radio field label issue
- Updated AJAX routes to REST Routes
- Updated filter & action hooks naming convention with older hooks support
- Updated translation strings
- Stripe Keys are now encrypted and more secured
- Security Enhancement with Framework upgrade

## 4.3.25 — March 15, 2023

- Fixed aria-label issue
- Fixed iframe tag issue
- Security: SQL orderby issues fixed

## 4.3.24 — February 3, 2023

- Fixed Accessibility CSS issue

## 4.3.23 — February 2, 2023

- Added Landing Page Layout Design & Shadow Configurator
- Added Copy Button & Email option for Save & Resume Form Link
- Added Clickable Form Step
- Improved RazorPay Modal (color config)
- Updated File Upload Library
- Fixed Inventory Issues with Conversational Form
- Fixed BuddyBoss issue for textarea field
- Fixed Twilio SMS Format
- Fixed Translation Issue For File Upload
- Fixed Google Sheet & Excel Export Format Issue for Repeater Field
- Fixed Excel and CSV Format Issue for Checkable Grid
- Fixed Payment Info on `{all.data}` shortcode when Product display type is set as Checkbox
- Fixed Resume Step Form Multiple Choice Field Issue
- Fixed Address Field's Country List Mapping with FluentCRM
- Fixed User Registration Integration's username issues in URL Slug
- Fixed Post Update Field's Placeholder
- Fixed Range Slider Field's Required Option
- Fixed Tags and Lists webhook to work with FluentCRM
- Fixed Mailjet Custom Field
- Fixed Post Update Field's Conditional Logic Issue
- Fixed Country restriction in Google address autocomplete
- Added WPForms Form & Entry Migrator
- Added Form shortcode page finder
- Improved Form Accessibility
- Fixed Mp3 File issue in Conversational Form
- Fixed Oxygen Builder Popup Form
- Fixed Elementor v3.9.1 popup
- Fixed Numeric Field US format negative value
- Fixed URL validation for Conversational Form
- Fixed Asterisk Position for Conversational Forms
- Fixed Conditional Shortcode contains `&` character
- Fixed Conversational Form Duplicated Form's Design Issue
- Fixed Conditional Logic Empty Ruleset for Conversational Form
- Fixed Text Input field's Max Text Length for Conversational Form
- Fixed Conditional Logic with Calculation for Conversational Form
- Fixed Conditional Logic Enabled Icon on Conversational Form Fields
- Fixed Payment Quantity Field issue on Conversational Form Editor
- Fixed Error Message instant Trigger For Numeric Field on Conversational Form

## 4.3.22 — November 11, 2022

- Added Conversational form to Regular form converter
- Fixed conditional field for EU number style
- Fixed rating field for conditional
- Fixed file upload preview

## 4.3.21 — October 27, 2022

- Added Ninja Forms entry migrator
- Added Gravity Forms entry migrator
- Improved Sanitization
- Improved Conversational Forms responsiveness
- Improved UX

## 4.3.20 — October 22, 2022

- Fixed Date/Time field config bug

## 4.3.18 — October 19, 2022

- Improved Turnstile
- Fixed condition checker nullable bug
- Fixed ZohoCRM tags support (Pro)
- Fixed Multi-Select upgrade bug

## 4.3.17 — October 18, 2022

- Added GDPR field in Conversational Form
- Fixed Email Feed duplicate bug
- Fixed Custom Button style in Containers
- Added HubSpot error handler (Pro)
- Fixed Custom Button style in Step Form
- Improved Multi-Select field
- Improved Conversational Form calculation

## 4.3.16 — October 16, 2022

- Added footer text customization for Slack
- Improved Custom Button styles
- Fixed conditional field rendering

## 4.3.15 — October 10, 2022

- Fixed conditional support

## 4.3.14 — October 8, 2022

- Fixed calculation module

## 4.3.13 — October 7, 2022

- Added Cloudflare Turnstile
- Added full-page styles
- Improved label placement settings
- Improved Slack integration for Checkable Grid (Pro)
- Improved Password truncate module (Pro)
- Improved AJAX calls
- Fixed CSV export issue (Pro)
- Fixed multiple success message issue
- Fixed conditional logic for Containers (Pro)
- Fixed long file names issue for file upload (Pro)

## 4.3.12 — September 1, 2022

- Added manual control for Container width
- Improved PHP 8 compatibility
- Improved translation for receipt page (Pro)
- Fixed Resend email notification custom recipient bug (Pro)
- Fixed BuddyBoss nickname issue (Pro)
- Improved field deletion UX
- Improved Conversational Forms CAPTCHA
- Fixed Zoho CRM Customized Lead Status Issue (Pro)
- Fixed Step Form previous session bug (Pro)
- Fixed popup issue for Elementor with conversational form (Pro)
- Fixed user update password issue (Pro)
- Fixed Global Default settings not being applied
- Fixed form submission search for accented characters
- Fixed Rich Text input not working in modal (Pro)
- Fixed CAPTCHA Label placement
- Fixed image upload button issue (Pro)
- Fixed Conversational form Phone field country code issue (Pro)
- Fixed Conversational form payment bug (Pro)
- Fixed iPhone image upload issue conversational form (Pro)
- Fixed `http_referer` shortcode
- Fixed pending payment entry count of additional shortcode (Pro)
- Fixed URL field issue
- Fixed Rating field option editing bug (Pro)
- Fixed additional shortcode Entry Count
- Fixed Quiz field randomize issue (Pro)
- Fixed Conversational form auto-validation message issue
- Fixed Step form issue with submit button (Pro)
- Fixed Conversational form long "Custom HTML Field" issue

## 4.3.10 — August 4, 2022

- Added Forms type filter
- Improved data sanitization
- Added Save & Resume form submission (Pro)
- Added Rich Text Input (Pro)
- Added Insightly Integration (Pro)
- Added Mailster Integration (Pro)
- Added Airtable Multiple table connection (Pro)
- Improved Post Update with ACF (Pro)
- Improved User Update with meta fields (Pro)
- Improved failed integration notification email (Pro)
- Fixed Signature field placement issue (Pro)
- Fixed HubSpot API update issue (Pro)
- Improved email summary
- Improved Resizeable Container
- Fixed Conversational Form issue with Elementor popup
- Fixed User Registration password reset email issue (Pro)
- Fixed Step form data save issue with Checkable Grid field (Pro)
- Fixed Coupon Code issue (Pro)
- Fixed ACF image upload with media upload (Pro)
- Fixed Constant Contact Issue (Pro)
- Fixed `<br>` tag issue in Twilio (Pro)

## 4.3.9 — July 4, 2022

- Added Resizeable Container Width
- Added hCaptcha in conversational form
- Improved Regex pattern Condition
- Added User Profile Update with Fluent Forms (Pro)
- Added Partial Entry bulk delete (Pro)
- Fixed confirmation message responsive issue
- Fixed conditional logic empty issue
- Fixed form duplicate issue
- Fixed auto CAPTCHA option tooltip issue
- Fixed Range Slider broken issue for multiple uses on the same page (Pro)

## 4.3.8 — June 2, 2022

- Added Oxygen 4.0 support
- New: Mailjet Integration (Pro)
- Added auto-include CAPTCHA support
- Fixed footer credit HTML tag issue
- Fixed Post update taxonomy issue
- Fixed Pipedrive custom field issue
- Fixed zero custom payment issue

## 4.3.7 — May 20, 2022

- Fixed error notice display issue
- Fixed file location settings issue (Pro)
- Fixed smart dropdown style issue

## 4.3.6 — May 19, 2022

- Added public PDF downloadable option
- Improved Slack integration (Pro)
- Fixed Caldera migrator
- Fixed CSS issue for multiple-choice field options
- Fixed email footer HTML issue
- Fixed Numeric field formatting issue

## 4.3.5 — April 22, 2022

- Added CLI support
- Added Oxygen builder native widget support
- Added support for programmatically form rendering
- Added digits validation for a numeric field
- Added mechanism for adding count hidden fields shortcode
- Improved payment status translations
- Improved deactivated form styles
- Fixed help message tooltip position issue
- Fixed tooltip behavior in Elementor Popup
- Fixed reCAPTCHA v3 issue in Elementor Popup
- Fixed entries table style
- Fixed dropdown open style issue
- Fixed Elementor widget issue

## 4.3.4 — March 21, 2022

- Added Quiz module (Pro)
- Added amoCRM integration (Pro)
- Added OnePageCRM integration (Pro)
- Added Pipedrive integration (Pro)
- Added phone number support for ZohoCRM (Pro)
- Added other data center support for ZohoCRM (Pro)
- Added email notification support for failed integrations (Pro)
- Added resubscribe option for MailerLite (Pro)
- Added dynamic default value for payment item (Pro)
- Added support for programmatically license management (Pro)
- Added smart search for the chained select field (Pro)
- Improved payment item display for radio fields (Pro)
- Fixed payment item value zero issues (Pro)
- Fixed payment method selection issue (Pro)
- Fixed Stripe donation issue (Pro)

## 4.3.4 — March 18, 2022

- Added configuration option for email summary subject
- Added RTL support for backend
- Added Datepicker field language support
- Added integration search option on form settings
- Added Elementor popup support for Conversational Forms
- Added quick form deactivation toggle option
- Added Timezone preset for Dropdown field
- Improved calculation module
- Improved chained select CSV upload
- Improved conditional rendering module
- Improved Select field data rendering
- Improved entry user update module
- Fixed US style numerical value calculation
- Fixed shareable link bug
- Fixed mask field bug

## 4.3.3 — February 25, 2022

- Fixed multiple calculated custom payment issue

## 4.3.2 — February 24, 2022

- Added address field inputs reordering option
- Added reCAPTCHA to Conversational Forms
- Added line break support for textarea field
- Added warning modal for Conversational form reset issue
- Fixed calculation field initial state issue
- Fixed file upload issue in PHP 8.1
- Fixed country list issue in address field

## 4.3.1 — February 14, 2022

- Added AffiliateWP integration (Pro)
- Added Zoho CRM integration (Pro)
- Added ClickSend integration (Pro)
- Added CleverReach integration (Pro)
- Added Phone Number validation message configuration (Pro)
- Added conditional block support in PDF Feed
- Fixed payment hooks for FluentCRM
- Fixed custom payment issue for one-time billing
- Fixed Phone Field country settings (Pro)
- Fixed Range Slider width
- Fixed Stripe Subscription metadata
- Fixed Stripe Inline customer information
- Fixed Checkable Grid stat in Entries' Visual Data Report
- Fixed payment issue in Elementor Popup
- Fixed PayPal empty cart issue
- Fixed Salesflare custom fields issue (Pro)
- Improved partial entry sorting

## 4.3.0 — January 18, 2022

- New: Other form plugins migrator
- New: hCaptcha field
- New: Discord & Salesflare integrations and File/Image upload field in Conversational Forms (Pro)
- Malicious attack prevention mechanism
- Support for advanced date configuration in Conversational Forms
- Placeholder settings input for Conversational Forms
- Advanced configuration of country field for Conversational Forms
- Validation rule message settings for Email and URL fields
- Fixed PDF Feed issue on form duplication
- Fixed URL validation regex
- Fixed Gutenberg block CSS class issue
- Fixed Gutenberg block shortcode issue for Conversational Forms
- Fixed PHP 8 warning issue
- Improved backend translations
- Removed file & images link from parser when auto-delete enabled
- Improved Helper Shortcode for submission count of payments
- Improved Step forms for Auto-slider with HTML input

## 4.2.1 — September 1, 2021

- Improvements on Conversational Forms
- RTL Improvements
- UI Improvements
- New developer APIs
- Performance improvements for form submissions

## 4.2.0 — September 1, 2021

- Autocomplete with Google Maps
- New gateway (Paystack)
- On-site payment via Stripe without redirection
- Subscription payment option
- New "Connect to Stripe" button (no API key needed)
- Modal Checkout for RazorPay
- Calculate values with Repeater Field
- Filterable API Logs
- Payment Pages & Subscription Management

## 4.1.5 — July 13, 2021

- Improvements on Conversational Forms
- Help Message positioning
- Predefined Data Set for Checkable Input Fields
- Raw HTML Email Templates
- Regex on conditional Logic
- Other Improvements

## 4.1.0 — June 30, 2021

- New Payment Methods – RazorPay and Mollie
- Improvements on Conversational Forms
- MetaBox Plugin integration
- Sharable Landing Page
- Introducing reCAPTCHA V3
- Elementor Integration Widget Improvements
- Other Improvements

## 4.0.0 — June 8, 2021

- Introducing Conversational Forms
- Customizing Form Layout
- Overall Form Design
- Social Sharing Meta for Landing page
- Form Sharing (even on another site)
- PHP API (new)
- Other Improvements
- Payment Modules Improvement
- PHP 8.0 Support
- Various Integration Improvement
- Custom Submit Button
- UI & UX Improvement

## 3.6.74 — May 27, 2021

- Hotfix: Form hide issue fixed after submission
- A big update is coming soon

## 3.6.72 — May 22, 2021

- Fixed Sanitize Data and Escaping on render for custom CSS and JS
- Sub-Page Slug URL escaping issue fixed
- Mailchimp Data Sanitization Fixed
- Includes Licenses txt files
- Fixed smart filter UI saving
- Added Column Re-order and show and hide data for form entries
- Added Re-Subscribe option for Mailchimp

## 3.6.70 — March 9, 2021

- Fixed Form Scheduling
- Fixed Preview Page Slug

## 3.6.68 — March 6, 2021

- PHP 8 deprecated issue fixed
- Export and Import Form/Entries Nonce issue fixed
- Added Date range selection on entries chart

## 3.6.67 — March 5, 2021

- Refactored Vue.js build system, Form editor is now 40% faster
- Nonce check issue fixed on admin AJAX
- Coupon issue fixed
- Added Hooks for Smart Codes
- Added Week-days to Date Field
- PHP 8 compatibility issue fixed

## 3.6.65 — February 9, 2021

- Payment Coupon: Add coupon field to your payment form
- Added Multiple Stripe and PayPal account to Form level
- Telegram Messenger feed added
- Randomize/Shuffle checkable options
- PHP 8.0 support – Fluent Forms is now 100% compatible with PHP 8
- Limit how many options a user can select for a select field
- UI improvements
- Elementor Widget improvement
- Better CSS loading time
- FluentSMTP support
- Replace icon fonts with SVG

## 3.6.62 — December 20, 2020

- New: Added Post/CPT selection
- Payment Integration Improvement
- Step Form Improvement
- SendInBlue improvement
- Database Improvement
- Smartcode improvement
- UI Improvement

## 3.6.61 — December 1, 2020

- New: Ability to delete old entries
- Calculation Performance boost
- Live calculation value update on the slider element
- Form Builder screen improvement
- Smartcode parser improvement
- Non-ASCII chars handling when redirecting fix

## 3.6.60 — November 23, 2020

- NEW: Built-in Double Opt-in Confirmation (Bye Bye Spams)
- NEW: Replay to any integration feeds manually
- New: BuddyBoss integration
- New: Number formats on the fly for numeric fields
- New: Import Global Styles from another form
- New: Dynamic Input Values as Label HTML (Live Update)
- New: Inline Conditional Tags on CRM integration Feeds
- Improvement: Oxygen Builder & ACF Integration
- File Upload and Step Form improvements
- Many other small bug fixes and improvements
- Overall UI/UX improvement

## 3.6.51 — August 24, 2020

- UI/UX improvement
- Conditional Logic Improvement
- Added Advanced Conditions
- Plain Text Email issue fixed
- Elementor Popup integration issue fixed
- Email Notification issue fixed

## 3.6.42 — July 28, 2020

- Email sending issue has been fixed
- Input background issue has been fixed
- Cleaner All entries chart

## 3.6.41 — July 27, 2020

- New Integration – Automizy
- Conditional Text Blocks for Email/Success Message
- Conditional Email Routing based on input values
- Validate Uniqueness for Text Input values
- See more details for API calls and retry if not successful
- MailerLite issue fixed
- Translation Issue fix
- Partial entries issue fixed
- Twilio SMS issue fix
- Replaced select2 with Choices.js library (cool)
- Enable Search option for single select options
- Reset selects after form submission bug fix
- Popup issue fix for Elementor
- Added new tooltip style for better visibility
- Translation loading issue fixed
- Slack Notification issue has been fixed
- Internal Improvements and Performance increase

## 3.6.31 — July 3, 2020

- Conditional Logic improvement (Now you can add Conditional Logic to Containers)
- Query String PHP notice fixed
- `wp_date()` support for older versions
- Added "Mark as Favorite" in the entry details page
- Email Summary Error Issue fixed
- Taxonomies issue has been fixed for container fields

## 3.6.0 — June 18, 2020

- Brand new UI for Form Builder
- Introducing Partial Entries for Step Forms
- Advanced ACF Fields Support for Post Creation Feed
- Additional Regional Payment Methods for Stripe
- Introducing Weekly Email Summary for all of your forms
- See All the Entries aggregated from all the forms
- Better Oxygen Page Builder Support
- Advanced Form Validation (Less Spam)
- Introducing Elementor widget
- Added German Language File
- Mobile-friendly Admin Panel
- Conditional logic issues for "less than" and "less than equal"
- Added priority-based country selection
- Added Kosovo to the country list
- Elementor and Oxygen popup issues for step forms
- Option to position input labels below the fields
- Added layout option to make Radio/Checkbox as Button Selection style
- Passwords will be now truncated after feeds and API calls completed
- Added conditional source support for Hidden Fields
- Many Bug fixes and added improvements

## 3.5.6 — April 29, 2020

- BIG: PDF module has been added, now you can send PDF via email or download
- BIG: Added Payment Summary Field
- Added "Not Contains" conditional Logic
- Field Improvements, now you can use repeater field for calculations
- Auto Delete Files on Submission entry – you can see all the integration calls and responses
- Lots of improvement under the hood
- More than 150+ human hours + 50+ coffees (sorry, we lost count)

## 3.5.5 — April 17, 2020

- BIG: Show payment summary as dynamic cart
- BIG: Added Dynamic input values in the form steps
- Conditional Logic on Payment Method Bug fix
- Refactored Frontend JavaScript, for a basic form it will load only 12KB JS
- 3rd Party Integrations Bug fix
- Awesome goodies under the hood!

## 3.5.4 — April 9, 2020

- Quantity Bug Fix for Payments
- Added Color Input Field
- Refactored Conditional Logics JS
- Form Builder Improvement

## 3.5.3 — April 3, 2020

- Conditional Logic improvement
- T&C and GDPR UI improvement
- Submission JS improvement

## 3.5.1 — April 2, 2020

- PayPal Sandbox issue fixed
- Payment Calculation Bug Fix

## 3.5.0 — March 30, 2020

- Payment Features added
- Stripe Payment Method
- PayPal Payment method
- Payment and Donation Management
- CRM Integration – Drip
- Editor improvement
- MailChimp tags update issue fixed
- Internal Architecture Improvement
- Akismet Integration
- CleanTalk Integration Bug Fix
- Other bug fixes and improvements

## 3.2.3 — February 29, 2020

- Added Landing Page Feature for Forms
- Step Form improvement
- Google Sheet Integration Improvement
- User Signup role selection fixed
- Post Submission Meta Fixed
- Added `round()` function to calculations and other improvement
- Other improvement

## 3.2.1 — February 15, 2020

- Chained select upload issue fixed
- Form Calculation issue fixed
- It's a very minor update so no new features (sorry)

## 3.2.0 — February 10, 2020

- New integration: Trello
- User Registration Module on form submission
- Post/CPT Creation on Form Submission
- New CRM Integration: SendinBlue
- New Field: Chained Select
- Added Unique feature to Email Field
- Prefix and Suffix feature in numeric field
- Added options to add container class
- Resend Email Notifications
- Overall performance improvement
- Editor and Form rendering improvement
- Constant Contact version change to v2

## 3.1.5 — December 31, 2019

- Advanced Form Styler
- Graphics-enabled radio/select fields (Yes! You can add photo to a check option now)
- Advanced Polls/Survey Fields and Reporting
- Advanced Calculation for checkable fields
- New Field: Net Promoter Score
- New CRM Integration: Platform.ly
- Interest Group Field added to MailChimp integration
- Added Media uploader to HTML fields
- Several Typo Fixes
- Reset Form Analytics
- Ability to send email as Plain Text
- Improved Email Delivery process
- Date-Time Field improvement
- Form init JavaScript Refactored
- File Upload button UI improvement
- Sorting issue fixed from checkable options
- Improved form validation message for checkable fields
- +28 issues have been resolved in this release
- Total ~180 commits submitted to git (in this version alone)

## 3.1.1 — December 4, 2019

- Security update for jQuery File upload Library

## 3.1.0 — November 19, 2019

- Added Google Sheet integration
- Added Custom submit button for inline forms
- Added Slider input type
- Added Gutenberg block
- Added native form widget for sidebars and widget areas
- Added advanced options to date input
- Added step attribute to numeric field
- Fixed form permission and role issue
- CSV/Excel export issue fixed
- File attachment list view improved
- Added hidden fields to conditional logics
- Fixed submission error handler
- Added global activity logs
- Improved Form Editor UX
- Added success message for redirect type confirmations
- Integration improvements
- Internal improvements

## 3.0.8 — November 6, 2019

- Form PopUp shortcode added
- Empty form submission issue resolved
- Admin UI improvement
- File Upload issue resolved
- Added extra CSS class to containers
- Fixed `'` and `"` in value issue
- Editor Improvement
- Added more hooks for developers
- Elementor Pro Popup issue fix for reCAPTCHA

## 3.0.6 — November 3, 2019

- Email sending issue fix
- ActiveCampaign Integration fix and form attachment added
- Added input field's index
- MooSend Integration Fix
- Conditional Logics improvements
- Dynamic Error Message fix
- Elementor PopUp Compatibility
- Compliance Settings improvement
- Section Break alignment fix
- JS Duplicate event fix
- Export-Import Forms fix
- Use WP timestamp as default
- Checkbox value parse fix
- Help messages added to name fields

## 3.0.5 — October 20, 2019

- Email sending improvement
- Step Text improvement and Translatable
- Added HIPAA & GDPR Compliance option for deleting entries on form submission
- Added User meta as default value
- Fixed element attributes special chars
- Added RTL support
- Fixed submit button styling issue
- Fixed Multi-site Update Issue
- Internal Improvements
- Shortcode Parser Improvements
- Improved Default values
- Added More hooks for developers
- Ability to hide name field's label

## 3.0.3 — October 16, 2019

- Email sending bug fix
- Typo fix
- Added Submission Properties to Smart Codes
- Added symmetric HTML to file upload
- Added option to hide labels
- Multi-site installation fix
- Honeypot added
- Webhook integration improvement
- Added GIST integration

## 3.0.0 — October 13, 2019

- All new form editor screen with simple, powerful and clean interface
- Built-in Data analysis tool for form submissions
- Email bug fix
- Added new db table for advanced reporting
- Submit button styling and customization option
- Improved form security
- Form Preview re-engineered now. In any theme, it will work fine
- Exporting data issue fixed
- Entry status management improvement
- File upload issue fixed
- Lots of integration added
- Global Integration and Module manager

## 2.8.0 — April 10, 2019

- Improved Integrations
- Improved File upload features

## 2.7.0 — June 28, 2018

- Added Lots of Integrations
- Added New Form Fields

## 2.0.1 — June 1, 2019

- Added lots of UI improvement
- Added option to add custom CSS and JS
- Added response filter options
- Added an option to export data
- Added Dashboard widget for a quick look
- Fixed several bugs

## 1.8.0 — April 10, 2019

- Fixed conditional logic for multiple dropdown fields
- Added clean, responsive HTML email templates
- Improved integrations
- Added few filter and action hooks for developers
- Improved backend performance
- Added pre-written email on default forms

## 1.7.5 — November 19, 2018

- Small Fixes for Conditional Logic
- Added option to give access of Fluent Forms to other user roles
- Fixed editor Sidebar Elements disorder
- Added More hooks for developers

## 1.7.4 — October 31, 2018

- Fix for some theme compatibility
- CSS fix for rating field
- Minor fix for CSV export for contact forms

## 1.7.3 — October 27, 2018

- Conditional Logic Bug fix for Internet Explorer
- CSS fix for other browsers

## 1.7.2 — October 20, 2018

- Minor Bug Fixes
- Changed Form Submission Process, now the form submission process is more faster

## 1.7.0 — October 11, 2018

- Added Lots of New features
- Added Brand New Fields
- Improved Performance — Conditional Fields have more options

## 1.6.0 — June 28, 2018

- Added More Integrations
- Added Rating fields
- Improved Export Entries
- Added GDPR Compliance

## 1.5.3 — April 30, 2018

- Improved Conditional Logics
- Fixed Builder Drag and Drop Bug

## 1.5.2 — April 24, 2018

- Support for PHP 5.4

## 1.5.1 — April 20, 2018

- Fixed Admin Screen bug fix for special directory names for some servers

## 1.5.0 — April 19, 2018

- Added Mask Input Field
- Added Submit Button Customization
- Added Dynamic Default Value from `$_GET` Parameter
- Added `+` icon on Form Editor for faster Form Create and Edit
- Placement of Required Items `*`
- Added Ratings component
- Added dynamic fields on Redirects

## 1.4.3 — March 24, 2018

- Added Name Input Field transformer
- Made the input fields settings more User Friendly
- Added Admin Label for all the elements
- Fixed reCAPTCHA on Form Submission
- Restricts special chars on name attributes
- Terms and Conditions field
- Sort the entries latest first
- Added compact mode on all entries page

## 1.4.0 — March 19, 2018

- Whole New Form Builder Editor
- Improved the overall performance
- Added More Input Fields
- Reviewing form entries is more easy by going next and previous
- Added capability to add custom fields for 3rd party developers

## 1.3.4 — February 20, 2018

- Fixed conflict with Jetpack
- Added loading at form submission
- Improved entry view

## 1.3.0 — February 17, 2018

- Refactoring Form Builder for better performance
- Added Image as Submit Button on form
- Fixed conflict with Jetpack
- 20% performance increase at backend

## 1.2.5

- Google reCAPTCHA iOS UX Improvement (thanks to Antonio Lucio)
- Unread Entries Navigation Improvement

## 1.2.4

- Fixed Google reCAPTCHA Conflict with Contact Form 7
- Form Builder Fixed for Safari

## 1.2.3

- Fixed Google reCAPTCHA
- Added Next and Previous Button on Form Entry
- Simple Hidden Fields Editor

## 1.1.3

- Added More options
- Fixed select and radio fields
- Mailchimp double opt-in support

## 1.1.3

- Fixed Mailchimp List Selection

## 1.1.2

- Fixed Mailchimp Double Opt-In issue

## 1.1.0

- Added Mailchimp Integration
- Added Slack Integration
- Added Label positioning for each form element
- Added Country Field
- Improvements of Conditional Logic rendering
- Lots of Improvement in Form Builder

## 1.0.0

- Initial release of the most Advanced form builder plugin
