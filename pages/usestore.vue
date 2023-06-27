<template>
  <div>
    <h1>useStore() demo</h1>
    <p>Importing from @nuxtjs/composition-api or #app</p>
    <button type="button" @click="increment">
      Increment
    </button>
    <input type="number" :value="counter" disabled />
  </div>
</template>
<script>
/*import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'*/
import { computed, useNuxtApp, defineComponent } from '#app'
const useStore = () => useNuxtApp().$store;
export default defineComponent({
  name: 'UseRoute',
  setup() {
    const store = useStore();
    const { state, dispatch } = store;
    const counter = computed(() => state.counter);
    const increment = () => dispatch('increment');

    return { counter, increment };
  }
});
</script>

