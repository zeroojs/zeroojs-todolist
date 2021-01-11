<template>
  <input ref="dateEl" class="z-date" />
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
  name: 'ZDate',
  setup() {
    const dateEl = ref()
    nextTick(() => {
      window.laydate.render({
        elem: dateEl.value
      })
    })
    return {
      dateEl
    }
  }
  })
</script>

<style>
.layui-laydate .layui-this {
  background-color: var(--theme)!important;
  border-radius: 2px;
}
.layui-laydate-header i:hover, .layui-laydate-header span:hover {
  color: var(--theme);
}
</style>