<template>
  <div class="board-card">
    <h4 class="board-card-title">Social Media App</h4>
    <div class="progress-percent">55%</div>
    <p class="board-card-status">已完成</p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BoardCard'
  })
</script>

<style lang="less" scoped>
.board-card {
  text-align: center;
  border-radius: 18px;
  background-color: var(--yellow);
  color: #FFFFFF;
  padding: 20px;
}
.progress-percent {
  font-size: 30px;
  margin-top: 48px;
  margin-bottom: 6px;
}

@media screen and (max-width: 500px){
  .progress-percent {
    margin-top: 24px;
  }
}
</style>