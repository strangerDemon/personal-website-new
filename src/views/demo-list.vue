<template>
  <div class="demo-groups">
    <div class="demos" v-for="(groups,index) in demoGroups" :key="index">
      <div class="group-title">{{groups.type}}: </div>
      <a-carousel autoplay>
        <div class="demo" v-for="(demo,index) in groups.list" :key="index">
          <img @click="toDemo(demo)" class="frame" :src="!demo.image?basePath+'1.jpg':basePath+demo.image" />
          <div class="title">{{demo.name}}</div>
          <div class="description">{{demo.description}}</div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { list } from './config'
import { DemoTypeGroup, DemoInfo } from '@/types/demoInfo'
export default {
  name: 'demo-list',
  setup() {
    const router = useRouter()
    const basePath: string = 'images/demos/'
    const demoGroups: DemoTypeGroup[] = list()
    //=>mounted
    onMounted(() => {})
    //=>unmounted
    onUnmounted(() => {})
    const methods = {
      toDemo(demo: DemoInfo) {
        router.push({
          name: demo.path,
        })
      },
    }
    return {
      basePath,
      demoGroups,
      ...methods,
    }
  },
}
</script>
<style lang="less">
.demo-groups {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.5);
  & .demos {
    display: block;
    width: 100%;
    height: 50%;
    & .group-title {
      display: block;
      font-size: 18px;
      margin-left: 25px;
      font-weight: 700;
    }
    & .demo {
      position: relative;
      display: inline-block;
      text-align: center;
      margin: 0px auto;
      width: 100%;
      height: 100%;
      & .frame {
        margin: 10px auto;
        border: 2px solid black;
        height: 100%;
        width: auto;
        position: relative;
        min-height: 300px;
        min-width: 300px;
      }
      & .title,
      .description {
        position: absolute;
        width: 100%;
        text-align: center;
      }
      & .title {
        bottom: 32px;
        font-size: 2em;
        font-weight: 700;
      }
      & .description {
        bottom: 12px;
      }
    }
  }
}
</style>