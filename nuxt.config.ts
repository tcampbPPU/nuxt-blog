// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  /**
   * @see https://nuxt.com/docs/guide/directory-structure/components
   */
  components: [
    '~/components',
    '~/components/Elements',
    '~/components/Forms',
    '~/components/Layouts',
    '~/components/Navigation',
  ],

  /**
   * @see https://nuxt.com/modules
   */
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  /**
   * @see https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
   */
  runtimeConfig: {
    //
  },

  /**
   * @see https://content.nuxtjs.org/api/configuration/
   */
  content: {
    //
  },

})
