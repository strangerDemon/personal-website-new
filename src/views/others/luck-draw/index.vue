<template>
  <div class="luck-draw">
    <a-layout class="container">
      <a-layout-header>何氏抽奖大厅</a-layout-header>
      <a-layout-content>
        <a-row class="luck-balloon">
          <a-col :span="18">
            <balloon
              class="red-balloon"
              v-for="(balloon, index) in redLuckBalloon"
              :key="index"
              :luckNumber="balloon"
              :color="'red'"
            ></balloon>
          </a-col>
          <a-col :span="6">
            <balloon
              v-for="(balloon, index) in blueLuckBalloon"
              :key="index"
              :luckNumber="balloon"
              :color="'blue'"
            ></balloon>
          </a-col>
        </a-row>
        <a-row class="operation">
          <a-button class="reset-button" type="primary" @click="reset()">
            again
          </a-button>
        </a-row>
      </a-layout-content>
      <a-layout-footer>
        design by demo &nbsp;<span>Vue 3.0 & TS & ant</span>&nbsp;
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, reactive } from "vue";
import balloon from "./balloon.vue";
export default {
  name: "luck-draw",
  components: {
    balloon,
  },
  data() {
    return {};
  },
  methods: {},
  setup() {
    const RED_NUMBER: number = 6;
    const BLUE_NUMBER: number = 1;
    const MAX_RED_RANGE: number = 36;
    const MAX_BLUE_RANGE: number = 16;
    const RED_RANGE: number[] = [];
    const BLUE_RANGE: number[] = [];
    const redLuckBalloon = ref<number[]>();
    const blueLuckBalloon = ref<number[]>();
    onMounted(() => {
      reset();
    });
    const methods = {
      init() {
        for (let index = 0; index < MAX_RED_RANGE; index++) {
          RED_RANGE[index] = index + 1;
        }
        for (let index = 0; index < MAX_BLUE_RANGE; index++) {
          BLUE_RANGE[index] = index + 1;
        }
      },
      getBalloon(range: number[], order: number, luckBalloon: number[]) {
        if (order === 0) {
          return;
        }
        const luckNumber = new Date().getTime() % range.length;
        luckBalloon.push(range[luckNumber]);
        range.splice(luckNumber, 1);
        this.getBalloon(range, order - 1, luckBalloon);
      },
    };
    const reset = () => {
      methods.init();
      const redBalloon: number[] = [];
      const blueBalloon: number[] = [];
      methods.getBalloon(RED_RANGE, RED_NUMBER, redBalloon);
      methods.getBalloon(BLUE_RANGE, BLUE_NUMBER, blueBalloon);
      redBalloon.sort((a, b) => {
        return a - b;
      });
      redLuckBalloon.value = redBalloon;
      blueLuckBalloon.value = blueBalloon;
    };
    return {
      redLuckBalloon,
      blueLuckBalloon,
      reset,
    };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>
