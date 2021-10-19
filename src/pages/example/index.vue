<template>
  <div class="example">
    <div>
      <h2>组件切换过渡</h2>
      <Trans />
    </div>
    <div class="router-example">
      <h2>页面切换过渡</h2>
      <p>
        <router-link to="/example/a" class="router-link-btn">页面 A</router-link>
        <router-link to="/example/b" class="router-link-btn">页面 B</router-link>
      </p>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" class="z-child" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Trans from '../../components/Trans.vue'

export default defineComponent({
  components: {
    Trans
  }
})
</script>

<style lang="less" scoped>
.example {
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  .router-example {
    margin-top: 30px;
  }
  .router-link-btn {
    display: inline-block;
    padding: 10px 15px;
    border: 2px solid #ccc;
    text-decoration: none;
    color: initial;
    margin-top: 20px;
    border-radius: 4px;
    &.router-link-active {
      color: seagreen;
      border-color: seagreen;
    }
    &:last-of-type {
      margin-left: 20px;
    }
  }
  .v-enter-from {
    opacity: 0; // 组件初始先隐藏
    transform: translateX(50px); // 出现的时候向左滑一下的效果
  }
  .v-leave-to {
    opacity: 0; // 组件离开的时候要隐藏掉
    transform: translateX(-50px); // 离开的时候向左滑一下
  }
  .z-child {
    // 可在此处将动画时间值设置大一点，方便在devtools中查看class增删过程
    transition: .8s cubic-bezier(.55,0,.1,1);
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 60vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
  .expamle-a {
    background: linear-gradient(270deg, #10311F, seagreen);
    text-shadow: 5px 5px 5px fade(black, 50);
  }
  .expamle-b {
    color: seagreen;
    background: linear-gradient(90deg, #10311F, black);
    text-shadow: 5px 5px 5px fade(seagreen, 30);
  }
}
</style>
