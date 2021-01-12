<template>
  <transition name="slide-fade">
    <div class="child-view">
      <div class="boards-header">
        <h1 class="page-title flex between container">
          <router-link to="/profil" class="profil-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(255,255,255,1)"/>
            </svg>
          </router-link>
          <span>面板</span>
          <span></span>
        </h1>
        <Search />
        <router-link tag="div" to="/create" class="create-task-btn flex">
          <div class="create-task-btn-prefix">
            <svg class="icon-plus" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3684 8.36842H9.63158V1.63158C9.63158 1.28277 9.34881 1 9 1C8.65119 1 8.36842 1.28277 8.36842 1.63158V8.36842H1.63158C1.28277 8.36842 1 8.65119 1 9C1 9.34881 1.28277 9.63158 1.63158 9.63158H8.36842V16.3684C8.36842 16.7172 8.65119 17 9 17C9.34881 17 9.63158 16.7172 9.63158 16.3684V9.63158H16.3684C16.7172 9.63158 17 9.34881 17 9C17 8.65119 16.7172 8.36842 16.3684 8.36842Z" fill="white" stroke="white"/>
            </svg>
          </div>
          创建任务
        </router-link>
      </div>
      <div class="boards-body container">
        <ZDate v-model="date" />
        <ZSection title="我的任务">
          <template #append>
            <div class="date-selector">
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2.5" width="13.5" height="13.5" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.75 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.75 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 7H14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </template>
          <TaskRow 
            content="To Do"
            summary="8 Task Now - 2 Start"
          />
          <TaskRow 
            content="To Do"
            summary="8 Task Now - 2 Start"
            class="task-row-progress">
            <template #icon>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V4.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13.8V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.34399 3.34399L5.60799 5.60799" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3921 12.3921L14.6561 14.6561" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 9H4.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.8 9H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.34399 14.6561L5.60799 12.3921" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3921 5.60799L14.6561 3.34399" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </TaskRow>
          <TaskRow 
            content="To Do"
            summary="8 Task Now - 2 Start"
            class="task-row-done"
          >
          <template #icon>
            <span></span>
          </template>
          </TaskRow>
        </ZSection>
        <z-section title="制定中的计划">
          <div class="board-card-group">
            <BoardCard class="bord-card-progress"/>
            <BoardCard class="bord-card-important"/>
            <BoardCard class="bord-card-happy"/>
            <BoardCard class="bord-card-primary"/>
          </div>
        </z-section>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import TaskRow from '../components/TaskRow.vue'
import BoardCard from '../components/BoardCard.vue'
import ZSection from '../components/layout/ZSection.vue'

export default {
  name: 'Boards',
  components: {
    Search,
    TaskRow,
    ZSection,
    BoardCard
  },
  data() {
    return {
      isEnter: false,
      isLeave: false,
      date: new Date()
    }
  }
}
</script>

<style lang="less">
.boards-header {
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
}
.profil-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: var(--yellow);
}

.boards-body {
  padding: 24px 0;
  .task-row {
    margin-bottom: 24px;
  }
  .date-selector {
    width: 32px;
    height: 32px;
    background-color: var(--theme);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.task-row-progress {
  .task-row-icon {
    background-color: var(--yellow);
  }
}
.task-row-done {
  .task-row-icon {
    background-color: var(--theme);
  }
}

.icon-plus {
  width: 12px;
  height: 12px;
  transition: 1s ease;
  transform: rotate(0);
}
.create-task-btn-prefix {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
}
.create-task-btn {
  display: block;
  cursor: pointer;
  margin: 0 auto;
  padding: 6px;
  border-radius: 6px;
  user-select: none;
  transition: .3s ease;
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: var(--theme-l);
    .icon-plus {
      transform: rotate(180deg);
    }
  }
}

.board-card-group {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  column-gap: 24px;
  row-gap: 24px;
  .bord-card-important {
    background-color: var(--red);
  }
  .bord-card-happy {
    background-color: var(--pink);
  }
  .bord-card-primary {
    background-color: var(--theme);
  }
}

</style>