<template>
  <div>
    <div @click="increment">
      count: {{ count }}
    </div>
    <div @click="incrementCountState">
      countState: {{ countState }}
    </div>
  </div>
</template>

<script>
/*import { ref, watch } from '@nuxtjs/composition-api';*/
/*import { useState } from '#imports';*/

export default {
  name: 'IndexPage',
  setup() {
    const count = ref(0);
    const countState = useState('count', () => 0);
    watch(count, (a, b) => {
      console.log('watch changed', a, b);
    });
    const increment = () => {
      console.log('increment(). count.value', count.value);
      count.value = count.value + 1;
    };
    const incrementCountState = () => {
      console.log('increment(). count.value', count.value);
      countState.value = countState.value + 1;
    };
    return { count, increment, countState, incrementCountState };
  }
}
</script>
