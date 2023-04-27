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
        // Checking environment variable to decide whether the link 
        baseURL: process.env.DEV? '' : '/Name-of-Repo'  // Name of your GitHub Repository
    }
})
