<template>
  <div>
    <h1>useContext => useNuxtApp</h1>
    <p>Importing from @nuxtjs/composition-api</p>
    <p>
      <strong>app.$demo:</strong>
      {{ demo() }}
    </p>
    <p>
      Nuxt 2 /plugins must be manually included in the nuxt config. This differs how Nuxt 3 will automatically detect and include what's in the /plugins directory.
    </p>
  </div>
</template>
<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'
/*import { useNuxtApp as useContext, defineComponent } from '#app'*/

export default defineComponent({
  name: 'UseContext',
  setup() {
    const app = useContext();
    console.log('app', app);
    console.log('app.$demo', app.$demo);
    return { demo: app.$demo };
  }
});
</script>

