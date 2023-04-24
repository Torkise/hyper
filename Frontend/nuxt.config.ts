// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],
    ssr: true,
    runtimeConfig: {
        public:{
            serverURL: "http://localhost:3001" // URL of your local server
        }
    },
    app: {
        baseURL: '/Test-pages'  // Name of your GitHub Repository
    }
})
