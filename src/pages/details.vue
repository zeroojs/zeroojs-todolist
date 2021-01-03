<template>
<div class="details-header">
  <h1 class="page-title flex between container">
    <a href="#" @click="$router.back()">
      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 13L0 7L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <span>任务详情</span>
    <span></span>
  </h1>
  <div class="details-date-picker">
    <h4 class="details-date-picker__title">
      Today, {{ new Date().toLocaleDateString() }}
    </h4>
    <div class="details-date-picker__body flex">
      <div 
        v-for="(item, index) in ['一', '二', '三', '四', '五', '六', '天']"
        :key="`details-date-item-${item}`"
        class="details-date-item"
        :class="{ active: index === 0 }">
        <div class="details-date-week">星期{{ item }}</div>
        <div class="details-date-number">{{ index + 4 }}</div>
      </div>
    </div>
  </div>
</div>
<div class="details-body container">
  <div class="task-item">
    <div class="tarsk-progress-item">
      <span class="tarsk-progress__point"></span>
      <div class="tarsk-progress__line"></div>
    </div>
    <div class="details-card">
      <div class="details-card__header flex between">
        <h4 class="details-card__title">Wakeup</h4>
        <span class="details-card__time">08:00 AM</span>
      </div>
      <section class="details-card__body">
        Donec malesuada tempus erat, vitae placerat neque hendrerit et…Donec malesuada tempus erat, vitae placerat neque hendrerit et…
      </section>
    </div>
  </div>
  <div class="task-item">
    <div class="tarsk-progress-item">
      <span class="tarsk-progress__point"></span>
      <div class="tarsk-progress__line"></div>
    </div>
    <div class="details-card">
      <div class="details-card__header flex between">
        <h4 class="details-card__title">Wakeup</h4>
        <span class="details-card__time">08:00 AM</span>
      </div>
      <section class="details-card__body">
        Donec malesuada tempus erat, vitae placerat neque hendrerit et…Donec malesuada tempus erat, vitae placerat neque hendrerit et…
      </section>
    </div>
  </div>
  <div class="task-item active">
    <div class="tarsk-progress-item">
      <span class="tarsk-progress__point"></span>
      <div class="tarsk-progress__line"></div>
    </div>
    <div class="details-card">
      <div class="details-card__header flex between">
        <h4 class="details-card__title">Wakeup</h4>
        <span class="details-card__time">08:00 AM</span>
      </div>
      <section class="details-card__body">
        Donec malesuada tempus erat, vitae placerat neque hendrerit et…Donec malesuada tempus erat, vitae placerat neque hendrerit et…
      </section>
      <div class="details-card__footer flex">
        <div class="members-item"></div>
        <div class="members-item"></div>
        <div class="members-item"></div>
      </div>
    </div>
  </div>
  <div class="task-item">
    <div class="tarsk-progress-item">
      <span class="tarsk-progress__point"></span>
      <div class="tarsk-progress__line"></div>
    </div>
    <div class="details-card">
      <div class="details-card__header flex between">
        <h4 class="details-card__title">Wakeup</h4>
        <span class="details-card__time">08:00 AM</span>
      </div>
      <section class="details-card__body">
        Donec malesuada tempus erat, vitae placerat neque hendrerit et…Donec malesuada tempus erat, vitae placerat neque hendrerit et…
      </section>
    </div>
  </div>
</div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Details'
  })
</script>

<style lang="less" scoped>
.details-header {
  min-height: 154px;
  padding: 48px 24px;
  border-radius: 0 0 30px 30px;
  background-color: var(--theme);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
  .page-title {
    width: 100%;
  }
}
.details-date-picker__title {
  margin-bottom: 12px;
}
.details-date-item {
  text-align: center;
  &.active {
    .details-date-week {
      color: #FFFFFF;
    }
  }
  .details-date-week {
    color: var(--theme-ls);
    margin-bottom: 6px;
  }
}
.details-date-item ~ .details-date-item {
  margin-left: 24px;
}

.details-body {
  padding: 24px 0;
}

.task-item {
  display: flex;
  padding-bottom: 24px;
  &:last-child {
    padding-bottom: 0;
    .tarsk-progress__line {
      display: none;
    }
  }
  &.active {
    .details-card {
      color: #FFFFFF;
      background-color: var(--theme);
      .details-card__title {
        color:  #FFFFFF;
      }
    }
    .tarsk-progress-item {
      .tarsk-progress__point {
        position: relative;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tarsk-progress__point::before {
        content: " ";
        position: absolute;
        width: 12px;
        height: 12px;
        background-color: var(--theme);
        border-radius: 50%;
      }
      .tarsk-progress__line {
        min-height: calc(100% - 10px);
      }
    }
  }
}
.tarsk-progress-item {
  min-width: 26px;
  min-height: 100%;
  margin-right: 24px;
}
.tarsk-progress__point {
  width: 16px;
  height: 16px;
  border: 2px solid var(--theme);
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}
.tarsk-progress__line {
  width: 2px;
  min-height: 100%;
  background-color: var(--theme);
  transform: translateY(4px);
  margin: 0 auto;
}

.details-card {
  background-color: var(--grey-l);
  border-radius: 10px;
  padding: 12px;
  color: var(--grey);
}

.details-card__header {
  margin-bottom: 12px;
}
.details-card__title {
  color: initial;
}
.details-card__body {
  line-height: 24px;
}
.details-card__footer {
  margin-top: 12px;
}
.members-item {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: var(--grey-l);
}
.members-item ~ .members-item {
  margin-left: 12px;
}
</style>