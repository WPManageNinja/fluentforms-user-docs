import { defineConfig } from 'vitepress';

import sidebar from './sidebar.json' with { type: 'json' };

export default defineConfig({
  title: 'Fluent Forms',
  description: 'Documentations for Fluent Forms by WPManageNinja.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/brand-images/fluentforms_primary_icon.png',
        type: 'image/png',
      },
    ],
  ],
  cleanUrls: true,
  srcExclude: ['README.md', 'CLAUDE.md', '*-PLAN.md', 'docs/public/**'],
  lastUpdated: true,

  // URL flattening: docs/<category>/<slug>.md → /docs/<slug>
  // Keeps the on-disk category-folder layout while hiding the category from URLs.
  rewrites: {
    'docs/:category/:doc.md': 'docs/:doc.md',
  },

  // Images live at docs/public/images/<category>/<doc-slug>/<basename>.ext
  // Vite serves anything under publicDir at the site root, so /images/<...> resolves correctly.
  vite: {
    publicDir: 'docs/public',
  },

  themeConfig: {
    logo: {
      light: '/brand-images/fluentforms_primary_logo.png',
      dark: '/brand-images/fluentforms_secondary_logo.png',
      alt: 'Fluent Forms',
    },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/docs/getting-started-with-fluent-forms' },
      {
        text: 'Guides',
        items: [
          { text: 'Creating Forms', link: '/docs/how-to-create-a-form-with-fluent-forms' },
          { text: 'Form Fields', link: '/docs/adding-a-simple-text-input-field' },
          { text: 'Payments', link: '/docs/how-to-create-a-payment-form-with-fluent-form' },
          { text: 'Integrations', link: '/docs/how-to-integrate-mailchimp-with-fluent-forms' },
          { text: 'Managing Submissions', link: '/docs/managing-entries-in-fluent-forms' },
        ],
      },
      { text: 'Website', link: 'https://fluentforms.com/' },
      { text: 'Changelog', link: '/docs/changelog' },
    ],
    sidebar: {
      '/docs/': sidebar,
    },
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Copyright © WPManageNinja',
    },
  },
});
