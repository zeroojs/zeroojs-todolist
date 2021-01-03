<template>
  <div class="z-input">
    <label v-if="label" class="z-input--label">
      <slot name="label">{{ label }}</slot>
    </label>
    <input 
      v-model="modelValue" 
      class="z-input--inner" 
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ZInput',
  props: {
    label: String,
    modelValue: String,
    placeholder: String
  },
  setup() {
    const inputVal = ref('')

    return {
      inputVal
    }
  }
})
</script>

<style lang="less" scoped>
.z-input ~ .z-input {
  margin-top: 48px;
}
.z-input--label {
  display: block;
  color: var(--theme-ls);
  font-size: 12px;
  margin-bottom: 6px;
}
.z-input--inner {
  outline: none;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  border: unset;
  color: #FFFFFF;
  border-bottom: 1px solid var(--theme-l);
  font-size: initial;
}
</style>