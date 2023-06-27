console.log('executing plugins/demo.js');

import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin(nuxtApp => {
  console.log('defineNuxtPlugin callback executed');
  nuxtApp.provide('demo', () => 'my injected function');
  // now available on `nuxtApp.$demo`
});
