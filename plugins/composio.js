import { Composio } from '@composio/composio-js';

export default defineNuxtPlugin((nuxtApp) => {
  const apiKey = nuxtApp.$config.public.composioApiKey;

  if (!apiKey) {
    console.error('Composio API key not found. Please set COMPOSIO_API_KEY in your .env file.');
    // You might want to throw an error or handle this case more robustly
    return;
  }

  const composio = new Composio({ apiKey });

  // Inject composio into the Nuxt app instance
  nuxtApp.provide('composio', composio);
});
