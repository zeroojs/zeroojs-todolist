<template>
  <textarea
    v-model="textareaValue"
    @input="autoLine"
    v-bind="$attrs"
    class="z-textarea"></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'ZTextarea',
  props: {
    modelValue: String
  },
  setup(props, ctx) { 
    const textareaValue = ref()
    const autoLine = (e: Event) => {
      const target: HTMLElement = (e.currentTarget as HTMLElement)
      const { scrollHeight, clientHeight } = target
      if (clientHeight < scrollHeight) {
        (e.target as HTMLElement).style.height = `${scrollHeight}px`
      }
      ctx.emit('input', e)
    }

    watch(() => textareaValue.value, (val) => {
      ctx.emit('update:modelValue', val)
    })

    watch(() => props.modelValue, (val) => {
      textareaValue.value = val
    }, { immediate: true })
    
    return {
      autoLine,
      textareaValue
    }
  }
})
</script>

<style lang="less" scoped>
.z-textarea {
  width: 100%;
  padding: 6px;
  outline: none;
  border: 1px solid var(--grey-l);
  transition: .2s ease;
  overflow: hidden;
  box-sizing: border-box;
}
</style>