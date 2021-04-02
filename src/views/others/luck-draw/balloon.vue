<template>
  <div class="balloon" :style="{'background-color':color}">
    {{luckNumber}}
  </div>
</template>
<script lang="ts">
import { onMounted, onUnmounted } from 'vue'
export default {
  name: 'balloon',
  props: {
    luckNumber: Number,
    color: String,
  },
  setup() {
    //=>mounted
    onMounted(() => {})
    //=>unmounted
    onUnmounted(() => {})
    const methods = {}
    return {}
  },
}
</script>
<style lang="less">
.balloon {
  color: #fff;
  width: 10%;
  margin: 10px;
  font-size: 20px;
  font-weight: 700;
}
</style>
