<template>
  <!-- <router-view/> -->
  <!-- <transition name="slide-right">
    <div class="slide-right">
      <router-view/>
    </div>
  </transition> -->
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component class="child-view" :is="Component" />
    </transition>
  </router-view>
</template>