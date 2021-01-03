<template>
  <div ref="draLeft" class="dragula-left">
    <div 
      v-for="num in 5"
      :key="`dragula-left-${num}`"
      class="dragula-item">
      dragula-letf-item-{{ num + 1 }}  
    </div>
  </div>
  <div ref="draRight" class="dragula-right">
    <div 
      v-for="num in 5"
      :key="`dragula-right-${num}`"
      class="dragula-item">
      dragula-right-item-{{ num + 1 }}  
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue'

  export default defineComponent({
    name: 'App',
    setup() {
      const draLeft = ref()
      const draRight = ref()
      nextTick(() => {
        window.dragula([draLeft.value, draRight.value])
      })
      return {
        draLeft,
        draRight
      }
    }
  })
</script>

<style scoped>
.dragula-left,
.dragula-right {
  margin: 24px auto;
  max-width: 500px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  min-height: 100px;
}
.dragula-item {
  padding: 12px;
  text-align: center;
  box-shadow: 0 0 2px rgb(66, 185, 131) inset;
}
</style>