<template>
  <div class="trans">
    <transition name="slide-fade">
      <div
        v-if="isNext"
        @click="toggle"
        class="green-box"
      >
        Green（点我）
      </div>
    </transition>
    <transition name="slide-fade">
      <div
        v-if="!isNext"
        @click="toggle"
        class="yellow-box"
      >
        Yellow（点我）
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Trans',
  data() {
    return {
      isNext: true
    }
  },
  methods: {
    toggle() {
      this.isNext = !this.isNext
    }
  }
})
</script>

<style scoped>
.trans {
  position: relative;
  max-width: 500px;
  margin: 24px auto;
  overflow: hidden;
  min-height: 200px;
}
.green-box,
.yellow-box {
  width: 100%;
  min-height: 200px;
  max-width: 500px;
  background-color: seagreen;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  /* opacity: 0; */
  position: absolute;
}
.yellow-box {
  background-color: yellow;
}
/* 离开 */
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px)
}
/* 进入 */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px)
}
</style>