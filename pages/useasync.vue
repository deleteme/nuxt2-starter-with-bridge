<template>
  <div>
    <h1>useAsync() => useLazyAsyncData() demo</h1>
    <p>Importing from @nuxtjs/composition-api or #app</p>
    <p>
      <strong>useAsync Response:</strong>
      <br />
      {{ asyncData }}
    </p>
    <p>
      <strong>useLazyAsyncData Response:</strong>
      <br />
      {{ asyncLazyData }}
    </p>
  </div>
</template>
<script>
import { /*computed, defineComponent, useContext, */useAsync } from '@nuxtjs/composition-api'
import { useNuxtApp as useContext, defineComponent, useLazyAsyncData } from '#app'
export default defineComponent({
  name: 'UseAsync',
  setup() {
    const { $axios } = useContext();
    const asyncData = useAsync(async () => {
      const response = await $axios.get("https://echo.deleteme.workers.dev/api/hello")
      return response.data;
    });
    const { data: asyncLazyData } = useLazyAsyncData('hello', async () => {
      const response = await $axios.get("https://echo.deleteme.workers.dev/api/hello")
      return response.data;
    });

    return { asyncData, asyncLazyData };
  }
});
</script>

