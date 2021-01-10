<template>
  <div class="trans">
    <transition name="slide-fade">
      <div v-if="greenShow" @click="toggle" class="green-box">Green</div>
    </transition>
    <transition name="slide-fade">
      <div v-if="!greenShow" @click="toggle" class="yellow-box">Yellow</div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Trans',
  data() {
    return {
      greenShow: true,
      yellowShow: true
    }
  },
  methods: {
    toggle() {
      this.greenShow = !this.greenShow
      this.yellowShow = !this.yellowShow
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
  /* opacity: 0; */
  position: absolute;
}
.yellow-box {
  background-color: yellow;
}

.slide-fade-enter-active {
  /* transition: all 2s ease-out; */
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  /* transform: translateX(20px); */
}

.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  /* transform: translateX(20px); */
  /* opacity: 0; */
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateX(20px);
  opacity: 0; */
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