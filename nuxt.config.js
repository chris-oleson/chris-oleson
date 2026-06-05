import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-02-10',

    app: {
        head: {
            link: [
                { rel: 'icon', href: '/favicon.svg' },
                { rel: 'icon', href: '/favicon.png' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    },

    css: [
        '/assets/variables.css',
        '/assets/global.css'
    ],

    modules: [
      '@nuxtjs/color-mode',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxt/content',
      '@nuxt/fonts',
      'nuxt-aos',
    ],

    devtools: {
        enabled: false
    },

    content: {
        renderer: {
            anchorLinks: false
        }
    },

    fonts: {
        defaults: {
            weights: [300, 400, 500, 900],
        }
    },

    aos: {
        duration: 600
    }
})
