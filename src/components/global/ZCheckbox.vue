<template>
  <div @click="checked = !checked" class="z-checkbox" :class="{ active: checked }">
    <svg v-show="checked" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8944 0.230855L6.03218 8.09303L1.32751 3.38836C1.01649 3.09854 0.53181 3.10709 0.231203 3.4077C-0.0694034 3.7083 -0.077955 4.19298 0.21186 4.504L5.47436 9.7665C5.78255 10.0743 6.28182 10.0743 6.59001 9.7665L15.01 1.34651C15.3178 1.03831 15.3178 0.539046 15.01 0.230855C14.7018 -0.0769518 14.2025 -0.0769518 13.8944 0.230855Z" fill="white"/>
    </svg>
  </div>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue'

  export default defineComponent({
    name: 'ZCheckbox',
    props: {
      modelValue: Boolean
    },
    setup(props, ctx) {
      const checked = ref(false)

      watch(() => checked.value, (val) => {
        ctx.emit('update:modelValue', val)
      })

      watch(() => props.modelValue, (val) => {
        checked.value = val
      }, { immediate: true })
      return {
        checked
      }
    }
  })
</script>

<style scoped>
.z-checkbox {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--grey-l);
  transition: .2s ease;
}
.z-checkbox.active {
  background-color: var(--yellow);
  border-color: transparent;
}
</style>