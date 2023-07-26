import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // Nuxt Bridge Feature Flags https://github.com/nuxt/bridge#feature-flags
  bridge: {
    // -- Opt-in features --

    // Use Vite as the bundler instead of webpack 4
    // vite: true,

    // Enable Nuxt 3 compatible useHead
    // meta: true,


    // -- Default features --

    // Use legacy server (nuxt dev) instead of Nitro (nuxi dev)
    // If opting out of Nitro server, restore the original script tasks to use nuxt, not nuxi.
    nitro: false,

    // Use legacy generator rather than new nitro prerenderer
    // nitroGenerator: false,

    // Disable nuxt 3 compatible `nuxtApp` interface
    // app: false,

    // Disable Composition API support
    // capi: false,

    // ... or just disable legacy Composition API support
    // capi: {
    //   legacy: false
    // },

    // Do not transpile modules
    // transpile: false,

    // Disable composables auto importing
    // It is recommended not to change `imports` but instead to set `imports.autoImport` to false (see below)
    // imports: false,

    // Do not warn about module incompatibilities
    // constraints: false
  },
  // Disabling auto-imports this way allows you to import nuxt composables explicitly from `#imports`
  // imports: {
  //   autoImport: false
  // },
});
