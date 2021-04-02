<template>
  <div class="balloon" :style="{ 'background-color': color }">
    {{ luckNumber }}
  </div>
</template>
<script lang="ts">
export default {
  name: "balloon",
  props: {
    luckNumber: Number,
    color: String,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="less">
.balloon {
  position: relative;
  top: 200px;
  display: inline-block;
  color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 10px;
  font-size: 60px;
  font-weight: 700;
  line-height: 150px;
}
.balloon::after {
  content: " ";
  width: 80px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-box-shadow: 0 0 25px 20px rrgba(255, 255, 255, 0.1);
  -moz-box-shadow: 0 0 25px 20px rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 25px 20px rgba(255, 255, 255, 0.1);
  -webkit-transform: scaleY(0.3);
  -moz-transform: scaleY(0.3);
  -ms-transform: scaleY(0.3);
  -o-transform: scaleY(0.3);
  transform: scaleY(0.3);
}
</style>
