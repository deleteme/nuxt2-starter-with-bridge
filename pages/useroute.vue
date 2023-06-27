<template>
  <div>
    <h1>useRoute() demo</h1>
    <p>Importing from @nuxtjs/composition-api or #app</p>
    <h4>fullPath</h4>
    <pre>{{fullPath}}</pre>
    <h4>hash</h4>
    <pre>{{hash}}</pre>
    <h4>meta</h4>
    <pre>{{meta}}</pre>
    <h4>name</h4>
    <pre>{{name}}</pre>
    <h4>path</h4>
    <pre>{{path}}</pre>
    <h4>redirectedFrom</h4>
    <pre>{{redirectedFrom}}</pre>
  </div>
</template>
<script>
/*import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'*/
import { computed, useRoute, defineComponent } from '#app'
export default defineComponent({
  name: 'UseRoute',
  setup() {
    const route = useRoute();
    const { fullPath, hash, meta, name, path, redirectedFrom } = route;

    return { fullPath, hash, meta, name, path, redirectedFrom };
  }
});
</script>

