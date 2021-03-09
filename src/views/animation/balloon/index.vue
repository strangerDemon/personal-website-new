<template>
  <div class="balloons" id="balloons"></div>
</template>

<script lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from 'vue'
export default {
  name: 'balloon',
  //=>beforeCreate created
  setup() {
    const number: number = 10 //初始化数量,都是random
    const speed: number = 8 //速度
    const size: number = 240 //宽度
    const rotationTime: number = 500 //创建时间间隔
    const isLoop: boolean = true //是否循环

    onMounted(() => {
      console.log('component mounted!')
      methods.init()
    })
    //=>unmounted
    onUnmounted(() => {
      console.log('un mounted component!')
    })
    const methods = {
      init() {
        let vm = this
        //无线生成气球
        let timer = setInterval(function () {
          vm.createBalloon()
        }, rotationTime)
        if (isLoop) {
          setTimeout(function () {
            clearInterval(timer)
          }, rotationTime * 10)
        }
      },
      //初始化
      createBalloon() {
        let fragment = document.createDocumentFragment()
        //number
        let _number: number = Math.max(~~(Math.random() * number), 1)
        for (let i = 0; i < _number; i++) {
          //size
          let _size = Math.max(~~(Math.random() * size), 80)
          let radiusL = ~~(0.8 * _size)
          let radiusM = ~~(0.3 * _size)
          let shadowL = ~~(0.5 * _size)
          let shadowM = ~~(-0.05 * _size)
          //speed
          let _speed = Math.max(~~(Math.random() * speed), 2)
          //left
          let left = ~~(Math.random() * window.innerWidth - _size)
          //loop
          let loop = isLoop ? ' infinite' : ''
          let balloon = document.createElement('span')
          balloon.setAttribute('class', 'balloon')
          balloon.setAttribute(
            'style',
            'z-index:' +
              size +
              ';' + //大球至于前
              'left:' +
              left +
              'px;' +
              'width:' +
              _size +
              'px;' +
              'height:' +
              _size +
              'px;' +
              'border-radius:' +
              radiusL +
              'px ' +
              radiusL +
              'px ' +
              radiusM +
              'px ' +
              radiusL +
              'px ;' +
              'box-shadow:' +
              shadowM +
              'px ' +
              shadowM +
              'px ' +
              shadowL +
              'px ' +
              shadowM +
              'px #873940 inset;' +
              'animation:' +
              'balloonFloat ' +
              _speed +
              's' +
              loop +
              ';' +
              '-webkit-animation:' +
              'balloonFloat ' +
              _speed +
              's' +
              loop
          )
          //点击隐藏|爆炸
          balloon.onclick = (evt) => {
            balloon.setAttribute('class', 'hide-balloon')
          }
          fragment.appendChild(balloon)
        }
        document.getElementById('balloons')?.appendChild(fragment)
      },
    }
    return {}
  },
}
</script>
<style lang="less">
.balloons {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;

  & .balloon {
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: #faf9f9;
    z-index: 1;
    /*显示前后*/
    top: -300px;
    /*最终隐藏*/
    /*圆角属性，顺时针*/
    border-radius: 128px 128px 64px 128px;
    /*旋转 顺时针*/
    transform: rotate(45deg);
    /*盒子阴影 box-shadow: h-shadow v-shadow blur spread color inset;
    水平阴影的位置 垂直阴影的位置 模糊距离 阴影的尺寸 阴影的颜色 将外部阴影 (outset) 改为内部阴影
    */
    box-shadow: -8px -8px 80px -8px #873940 inset;

    /*动画*/
    animation: balloonFloat 5s;
    -webkit-animation: balloonFloat 5s;
  }
  /*伪标签 要用content 激活*/

  & .balloon::after {
    content: '';
    position: absolute;
    border: 8px solid transparent;
    /* 无色*/
    transform: rotate(45deg);
    bottom: -6px;
    right: -6px;
    border-radius: 4px;
    border-right-color: #eaabb0; /*border分为4块，可以单独赋色*/
  }

  & .hide-balloon {
    display: none;
  }
}

/*动画*/
@keyframes balloonFloat {
  from {
    top: 100vh;
  }
  to {
    top: -300px;
  }
}
</style>