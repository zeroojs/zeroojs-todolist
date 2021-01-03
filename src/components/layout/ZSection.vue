<template>
  <section class="z-section">
    <div class="z-section-header flex between">
      <h4 class="z-section-title">{{ title || '标题' }}</h4>
      <slot class="z-section-title--append" name="append"></slot>
    </div>
    <slot></slot>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    props: {
      title: String
    }
  })
</script>

<style lang="less" scoped>
.z-section-header {
  margin-bottom: 24px;
}
</style>