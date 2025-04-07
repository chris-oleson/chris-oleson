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
    css: ['/assets/style.css'],
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/content'
    ],
    devtools: {
        enabled: false
    },
    content: {
        renderer: {
            anchorLinks: false
        }
    }
})
