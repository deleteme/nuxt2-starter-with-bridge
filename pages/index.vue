<template>
  <p>data: {{ data }}</p>
</template>

<script>
/*import { useLazyAsyncData, useLazyFetch } from '#app';*/

export default {
  name: 'IndexPage',
  setup() {
    const endpoint = 'https://echo.deleteme.workers.dev/api/hello';
    /*const { data } = useLazyAsyncData('posts', () => $fetch(endpoint))*/
    const { data } = useLazyFetch(endpoint);
    return { data };
  }
}
</script>
