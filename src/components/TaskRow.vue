<template>
  <div class="task-row flex">
    <div class="task-row-icon">
      <slot name="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 4.19995V8.99995L11.4 11.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </div>
    <div class="task-row-body">
      <div class="task-row-content">{{ content }}</div>
      <div class="task-row-summary">{{ summary }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TaskRow',
    props: {
      content: String,
      summary: String
    }
  })
</script>

<style lang="less" scoped>
.task-row {
  cursor: pointer;
}
.task-row-icon {
  width: 44px;
  height: 44px;
  background-color: var(--red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}
.task-row-summary,
.task-row-content {
  letter-spacing: 1px;
  font-size: 18px;
}
.task-row-content {
  margin-bottom: 6px;
}
.task-row-summary {
  color: var(--grey);
  font-size: 12px;
}
</style>