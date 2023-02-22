// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // target: 'static',

  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],

  /**
   * @see https://nuxt.com/docs/guide/directory-structure/components
   */
  components: [
    '~/components',
    '~/components/content',
    '~/components/elements',
    '~/components/forms',
    '~/components/icons',
    '~/components/layouts',
    '~/components/navigation',
  ],

  /**
   * @see https://nuxt.com/modules
   */
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    'nuxt-headlessui',
  ],

  /**
   * @see https://color-mode.nuxtjs.org
   */
  colorMode: {
    classSuffix: '',
  },

  /**
   * @see https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
   */
  runtimeConfig: {
    public: {

      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },

  /**
   * @see https://content.nuxtjs.org/api/configuration/
   */
  content: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },

  headlessui: {
    prefix: 'Headless',
  },

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: [
  //       '/',
  //       '/about',
  //       '/uses',
  //       '/articles',
  //       '/articles/test',
  //       '/sitemap.xml',
  //     ],
  //   },
  // },

  // sitemap: {
  //   // provide dynamic URLs to be included
  //   urls: async () => {
  //     const blogPages = await getBlogPages()
  //     return blogPages.map(page => ({
  //       url: `/blog/${page.slug}`,
  //       lastmod: page.updatedAt,
  //       changefreq: 'daily',
  //       priority: 0.8,
  //     }))
  //   },
  // },

})
