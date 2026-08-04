import { defineConfig } from 'vitepress';

import sidebar from './sidebar.json' with { type: 'json' };

// Production origin, shared by the sitemap and the per-page canonical tags.
const HOSTNAME = 'https://docs.fluentforms.com';

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
  lastUpdated: false,

  // Production origin. Must match exactly where the site is served — a canonical or sitemap
  // URL pointing elsewhere tells search engines to index a different page.
  sitemap: {
    hostname: HOSTNAME,
  },

  // VitePress does not emit canonical tags on its own, so add one per page. `relativePath`
  // is already the rewritten path (`changelog.md`, not `docs/help-support/changelog.md`),
  // so this matches the sitemap URLs and the cleanUrls form actually served.
  transformHead({ pageData }) {
    // The 404 page is not a real URL — it must not claim one.
    if (pageData.relativePath === '404.md') return [];
    const path = pageData.relativePath.replace(/(?:^|\/)index\.md$/, '/').replace(/\.md$/, '');
    return [['link', { rel: 'canonical', href: `${HOSTNAME}/${path}`.replace(/\/+$/, '/') }]];
  },

  // URL flattening: the on-disk tree is docs/<section>/[<sub-group>/]<slug>.md (2 or 3 levels),
  // but every page is served at /<slug> — the docs/section/sub-group folders are all hidden from URLs.
  // Two patterns cover sub-grouped (3-level) and flat (2-level) sections.
  rewrites: {
    'docs/:section/:sub/:doc.md': ':doc.md',
    'docs/:section/:doc.md': ':doc.md',
  },

  // Images live at docs/public/images/<section>/[<sub-group>/]<slug>/<basename>.ext (mirrors the docs tree).
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
      { text: 'Get Started', link: '/getting-started' },
      { text: 'Website', link: 'https://fluentforms.com/' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: {
      '/': sidebar,
    },
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Copyright © WPManageNinja',
    },
  },
});
