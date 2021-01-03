<template>
  <div class="z-search flex">
    <div class="z-search-prefix">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41667 11.8333C9.40821 11.8333 11.8333 9.40821 11.8333 6.41667C11.8333 3.42512 9.40821 1 6.41667 1C3.42512 1 1 3.42512 1 6.41667C1 9.40821 3.42512 11.8333 6.41667 11.8333Z" stroke="#CAADF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.9999 13.9999L10.2444 10.2444" stroke="#CAADF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <input 
      class="z-search-input" 
      v-model="keywords"
      placeholder="搜索任务"
      aria-placeholder="搜索任务"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Search',
  setup() {
    const keywords = ref<string>('')
    return {
      keywords
    }
  }
})
</script>

<style lang="less" scoped>
.z-search {
  width: 300px;
  max-width: 800px;
  padding: 6px 12px;
  background: var(--theme-l);
  box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  overflow: hidden;
  transition: .3s ease-in;
  &:focus-within {
    width: 100%;
  }
}
.z-search-input {
  background-color: transparent;
  border: unset;
  outline: none;
  display: inline-block;
  margin-left: 12px;
  width: calc(100% - 24px);
  color: #FFFFFF;
}
</style>