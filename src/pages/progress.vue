<template>
  <div class="task-progress">
    <div class="page-header task-progress-header">
      <h1 class="page-title flex between container">
        <a href="#" @click="$router.back()">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7H0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 13L0 7L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <span>任务进度</span>
        <span></span>
      </h1>
      <div class="task-progress-date container flex">
        <div class="task-progress-date-icon">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2.8999" width="17.1" height="17.1" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.35 1V4.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.75 1V4.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 8.6001H18.1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="task-progress-date-content">
          <p>{{ new Date().toLocaleDateString() }}</p>
          <p>10:00 - 11:00</p>
        </div>
      </div>
    </div>
    <div class="task-progress-body">
      <!-- 参与者 -->
      <div class="container task-progress-participants">
        <h4 class="task-progress-title">参与者</h4>
        <div class="participants-body flex">
          <div class="participants-item"></div>
          <div class="participants-item"></div>
          <div class="participants-item"></div>
          <div class="participants-item add">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3684 8.36842H9.63158V1.63158C9.63158 1.28277 9.34881 1 9 1C8.65119 1 8.36842 1.28277 8.36842 1.63158V8.36842H1.63158C1.28277 8.36842 1 8.65119 1 9C1 9.34881 1.28277 9.63158 1.63158 9.63158H8.36842V16.3684C8.36842 16.7172 8.65119 17 9 17C9.34881 17 9.63158 16.7172 9.63158 16.3684V9.63158H16.3684C16.7172 9.63158 17 9.34881 17 9C17 8.65119 16.7172 8.36842 16.3684 8.36842Z" fill="#4404AC" stroke="#4404AC"/>
            </svg>
          </div>
        </div>
      </div>
      <!-- 事项 -->
      <div class="container task-progress-agenda">
        <h4 class="task-progress-title">事项</h4>
        <ul class="agenda-list">
          <li class="agenda-item flex" :class="{ active: checked }">
            <z-checkbox v-model="checked"/>
            <p class="agenda-content">Nullam ullamcorper hendrerit interdum.</p>
          </li>
          <li class="agenda-item flex">
            <z-checkbox />
            <p class="agenda-content">Nullam ullamcorper hendrerit interdum.</p>
          </li>
          <li class="agenda-item flex">
            <z-checkbox />
            <p class="agenda-content">Nullam ullamcorper hendrerit interdum.</p>
          </li>
          <li class="agenda-item flex">
            <z-checkbox />
            <p class="agenda-content">Nullam ullamcorper hendrerit interdum.</p>
          </li>
          <li class="agenda-item flex">
            <z-checkbox />
            <p class="agenda-content">Nullam ullamcorper hendrerit interdum.</p>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="btn">编辑任务</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Progress',
    setup() {
      const checked = ref(true)
      return {
        checked
      }
    }
  })
</script>

<style lang="less" scoped>
.task-progress {
  background-color: var(--theme);
  min-height: 100vh;
}
.task-progress-body {
  min-height: calc(100vh - 232px);
  padding: 48px 12px 24px;
  background-color: #FFFFFF;
  border-radius: 30px 30px 0 0;
}
.task-progress-title {
  margin-bottom: 12px;
}
.task-progress-date {
  margin-top: 48px;
}
.task-progress-date-icon {
  width: 46px;
  height: 46px;
  background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 12px;
}
.task-progress-date-content {
  p:first-child {
    margin-bottom: 6px;
  }
}

.task-progress-participants {
  margin-bottom: 24px;
}
.participants-item {
  background-color: var(--grey-l);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
.participants-item ~ .participants-item {
  margin-left: 12px;
}
.participants-item.add {
  background-color: transparent;
  border: 1px dashed var(--theme);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.task-progress-agenda {
  margin-bottom: 48px;
}
.agenda-item {
  cursor: pointer;
  &.active {
    .agenda-content {
      margin-left: 12px;
      text-decoration: line-through;
    }
  }
  .agenda-content {
    margin-left: 12px;
  }
}
.agenda-item ~ .agenda-item {
  margin-top: 24px;
}
</style>