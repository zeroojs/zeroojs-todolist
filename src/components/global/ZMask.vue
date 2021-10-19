<template>
  <div class="z-mask">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ZMask'
}
</script>
<style>
.z-mask {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>