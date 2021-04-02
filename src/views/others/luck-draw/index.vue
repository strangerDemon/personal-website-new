<template>
  <div class="luck-draw">
    <a-layout class="container">
      <a-layout-header>何氏抽奖大厅</a-layout-header>
      <a-layout-content>
        <a-row class="luck-balloon">
          <a-col :span="18">
            {{getRed()}}..
            <balloon class="red-balloon" v-for="(balloon,index) in getRed()" :key="index" :lcukNumber="balloon"
              :color="'red'">
            </balloon>
          </a-col>
          <a-col :span="6">
            <balloon v-for="(balloon,index) in getBlue()" :key="index" :lcukNumber="balloon" :color="'blue'">
            </balloon>
          </a-col>
        </a-row>
        <a-row class="operation">
          <a-button class="reset-button" type="primary" @click="reset()"> again </a-button>
        </a-row>
      </a-layout-content>
      <a-layout-footer>
        design by demo &nbsp;<span>Vue 3.0 & TS & ant</span>&nbsp;
      </a-layout-footer>
    </a-layout>

  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import balloon from './balloon.vue'
export default {
  name: 'luck-draw',
  components: { balloon },
  data() {
    return {}
  },
  methods: {},
  setup() {
    const RED_NUMBER: number = 6
    const BLUE_NUMBER: number = 1
    const MAX_RED_RANGE: number = 36
    const MAX_BLUE_RANGE: number = 16

    const RED_RANGE: Array<number> = []
    const BLUE_RANGE: Array<number> = []

    let redLuckBalloon: Array<number> = []
    let blueLuckBalloon: Array<number> = []

    //=>mounted
    onMounted(() => {
      reset()
    })
    //=>unmounted
    onUnmounted(() => {})
    const methods = {
      init() {
        redLuckBalloon = []
        blueLuckBalloon = []

        for (let index = 0; index < MAX_RED_RANGE; index++) {
          RED_RANGE[index] = index + 1
        }
        for (let index = 0; index < MAX_BLUE_RANGE; index++) {
          BLUE_RANGE[index] = index + 1
        }
      },
      getBalloon(
        range: Array<number>,
        order: number,
        luckBalloon: Array<number>
      ) {
        if (order === 0) {
          return
        }
        let t = new Date().getTime()
        let luckNumber = t % range.length
        luckBalloon.push(range[luckNumber])
        range.splice(luckNumber, 1)
        this.getBalloon(range, order - 1, luckBalloon)
      },
    }
    const getRed = () => {
      return redLuckBalloon
    }
    const getBlue = () => {
      return blueLuckBalloon
    }
    const reset = () => {
      methods.init()
      methods.getBalloon(RED_RANGE, RED_NUMBER, redLuckBalloon)
      methods.getBalloon(BLUE_RANGE, BLUE_NUMBER, blueLuckBalloon)
      redLuckBalloon.sort((a, b) => {
        return a - b
      })
      console.log(redLuckBalloon, blueLuckBalloon)
    }
    return { getRed, getBlue, reset }
  },
}
</script>
<style lang="less">
@import './index.less';
</style>