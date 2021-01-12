<template>
  <div class="date-picker-body flex" :class="`date-picker-${type}`">
    <div class="date-picker-icon">
      <svg v-if="type === 'default'" width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2.80005" width="16.2" height="16.2" rx="2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.5 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 8.19995H17.2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2.5" width="13.5" height="13.5" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.75 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.75 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 7H14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <input 
      ref="dateEl" 
      class="z-date date-picker-text" 
      :class="`z-date--${type}`"
      v-bind="$attrs"
      readonly
    />
  </div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'
// v-on="$listeners"
export default defineComponent({
  name: 'ZDate',
  props: {
    type: {
      type: String,
      default: 'default' // button | default
    },
    mark: Object, // { '2020-01-01': '生日' }
    modelValue: [String, Date]
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const dateEl = ref()
    nextTick(() => {
      window.laydate.render({
        elem: dateEl.value,
        theme: '#4404AC',
        trigger: 'click',
        mark: props.mark,
        value: props.modelValue,
        done(val) {
          console.log(val)
          ctx.emit('update:modelValue', val)
        }
      })

    })
    return {
      dateEl
    }
  }
  })
</script>

<style>
.z-date.z-date--default {
  border: unset;
  outline: none;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  padding-left: 27px;
  z-index: 3;
  background-color: transparent;
}

.date-picker-body {
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.date-picker-button {
  width: 32px;
  height: 32px;
  background-color: var(--theme);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.date-picker-button .date-picker-text {
  width: 32px;
  height: 32px;
  opacity: 0;
  cursor: pointer;
}
.date-picker-button .date-picker-icon {
  z-index: -1;
}
.date-picker-text {
  font-size: 13px;
  color: var(--grey);
}
.date-picker-default .date-picker-icon {
  position: absolute;
  z-index: 1;
}
</style>