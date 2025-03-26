import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-02-10',
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.svg' }
            ],
            meta: [
                { name: 'description', content: 'Web developer - UI designer - Entrepreneur' }
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
