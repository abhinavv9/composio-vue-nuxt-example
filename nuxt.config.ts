import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      composioApiKey: process.env.COMPOSIO_API_KEY
    }
  },
  css: ['~/assets/css/main.css']
});
