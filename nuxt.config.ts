import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  srcDir: 'src',
  /*
   ** Headers of the page
   */
  head: {
    title: 'potato4d.me',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'HANATANI Takuma a.k.a. potato4d',
      },
      { name: 'theme-color', content: '#f06a6a' },
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  modules: ['@nuxtjs/pwa'],
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
  ],
}

export default config
