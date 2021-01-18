<template>
  <z-mask
    v-show="dialog"
    @click.stop="toggle()">
    <div 
      @click.stop="() => {}" 
      class="z-dialog__body container"
      :class="{'z-dialog__show': dialog, 'z-dialog__hide': addHideStyle}">
      <slot></slot>
    </div>
  </z-mask>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'

export default {
  name: 'ZDialog',
  props: {
    modelValue: Boolean
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const dialog = ref(props.modelValue)
    const addHideStyle = ref(false)
    let timer = 0

    const toggle = () => {
      if (dialog.value) {
        addHideStyle.value = true
        timer = setTimeout(() => {
          dialog.value = false
          addHideStyle.value = false
          clearTimeout(timer)
        }, 400)
      } else {
        dialog.value = true
      }
    }
    watch(() => dialog.value, (val) => {
      ctx.emit('update:modelValue', val)
    })
    watch(() => props.modelValue, (val) => {
      dialog.value = val
    })

    onUnmounted(() => {
      timer && clearTimeout(timer)
    })
    return {
      dialog,
      toggle,
      addHideStyle
    }
  }
}
</script>

<style>
.z-dialog__body {
  width: 50%;
  min-width: 300px;
  min-height: 500px;
  background-color: #FFFFFF;
  margin: 0 auto;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}
.z-dialog__body.z-dialog__show {
  opacity: 1;
  top: 20vh;
  animation: fadeIn .4s ease;
}
.z-dialog__body.z-dialog__hide {
  animation: fadeOut .2s ease;
  opacity: 0;
  top: 30vh;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    top: 30vh;
  }
  100% {
    opacity: 1;
    top: 20vh;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    top: 20vh;
  }
  100% {
    opacity: 0;
    top: 30vh;
  }
}
@media screen and (max-width: 768px){
  .z-dialog__body {
    width: calc(100% - 48px);
    min-width: unset;
  }
}
</style>
