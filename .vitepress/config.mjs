import { defineConfig } from 'vitepress';

import sidebar from './sidebar.json' with { type: 'json' };
import { zoomablePlugin } from './theme/markdown-plugin-zoomable.js';

// Production origin, shared by the sitemap, canonical tags and social cards.
const HOSTNAME = 'https://docs.fluentforms.com';

// Fallback preview image for social cards. Replace with a purpose-made 1200x630 image —
// a logo scales poorly into the 1.91:1 card that Slack, X and Facebook render.
const SOCIAL_IMAGE = '/brand-images/fluentforms_primary_logo.png';

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

  // Every markdown image is rendered as a client-only <ZoomableImage> so readers can
  // click a screenshot to enlarge it. See theme/markdown-plugin-zoomable.js.
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin);
    },
  },
  srcExclude: ['README.md', 'CLAUDE.md', '*-PLAN.md', 'docs/public/**'],

  // Production origin. Must match exactly where the site is served — a canonical or sitemap
  // URL pointing elsewhere tells search engines to index a different page.
  sitemap: {
    hostname: HOSTNAME,
  },

  // VitePress emits none of these on its own: canonical URLs, social cards, or structured
  // data. `relativePath` is already the rewritten path (`changelog.md`, not
  // `docs/help-support/changelog.md`), so URLs here match the sitemap and what is served.
  transformHead({ pageData, siteData }) {
    // The 404 page is not a real URL — it must not claim one or be shared as a card.
    if (pageData.relativePath === '404.md') return [];

    const path = pageData.relativePath.replace(/(?:^|\/)index\.md$/, '/').replace(/\.md$/, '');
    const url = `${HOSTNAME}/${path}`.replace(/\/+$/, '/');
    const title = pageData.frontmatter.title || pageData.title || siteData.title;
    const description =
      pageData.frontmatter.description || pageData.description || siteData.description;
    const image = `${HOSTNAME}${SOCIAL_IMAGE}`;

    return [
      ['link', { rel: 'canonical', href: url }],

      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:site_name', content: siteData.title }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],

      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],

      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: title,
          description,
          url,
          inLanguage: 'en-US',
          publisher: {
            '@type': 'Organization',
            name: 'WPManageNinja',
            url: 'https://fluentforms.com/',
            logo: `${HOSTNAME}${SOCIAL_IMAGE}`,
          },
        }),
      ],
    ];
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
