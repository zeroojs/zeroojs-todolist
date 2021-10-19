<template>
  <ul class="member-list">
    <li class="member"></li>
  </ul>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    props: {
      members: {
        type: Array,
        default: () => []
      }
    }
  })
</script>

<style scoped>

</style>