<template>
  <div class="home">
    <demo-list></demo-list>
  </div>
</template>

<script lang="ts">
import demoList from './demo-list.vue'

export default {
  name: 'home',
  components: {
    demoList,
  },
  setup() {
    return {}
  },
}
</script>
