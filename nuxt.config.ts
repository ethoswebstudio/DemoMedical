// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  css: [
    '@/assets/css/main.css',   // contiene gli at-rule Tailwind
    '@/assets/css/theme.css'   
  ]
})