import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('demo', () => 'my injected function');
  // now available on `nuxtApp.$demo`
});
