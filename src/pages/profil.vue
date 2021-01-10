<template>
<transition name="slide-fade">
  <div class="profil">
    <div class="page-header profil-header">
      <h1 class="page-title flex between container">
        <a href="#" @click="$router.back()">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7H0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 13L0 7L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <span>个人中心</span>
        <span></span>
      </h1>
    </div>
    <div class="profil-body">
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="user-avatar">
          <div class="user-avatar-inner"></div>
        </div>
        <h4 class="user-name">Luckyoung</h4>
        <div class="user-position">Fontender</div>
      </div>
      <!-- 统计信息 -->
      <div class="profil-info flex between container">
        <div class="profil-info-item">
          <div class="profil-info__title">已关闭</div>
          <span>115</span>
        </div>
        <div class="profil-info-item">
          <div class="profil-info__title">进行中</div>
          <span>23</span>
        </div>
        <div class="message-btn btn">消息</div>
      </div>
      <!-- tab -->
      <div class="profil-tab flex between container">
        <a href="#" class="profil-tab-item active">任务列表</a>
        <a href="#" class="profil-tab-item">联系人</a>
        <a href="#" class="profil-tab-item">关于你</a>
      </div>
      <ul class="task-list container">
        <li class="task-list-item">
          <div class="task-list-item__header flex between">
            <span class="task-status">进行中</span>
            <span class="task-since">1 天 4小时</span>
          </div>
          <section class="task-list-item__body">
            Dashboard Design
          </section>
          <div class="task-list-item__footer flex between">
            <div class="comments flex">
              <div class="comments-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.08336C15.0029 8.18325 14.7459 9.26826 14.25 10.25C13.0508 12.6495 10.5991 14.1657 7.91667 14.1667C6.81678 14.1696 5.73176 13.9126 4.75 13.4167L0 15L1.58333 10.25C1.08744 9.26826 0.830466 8.18325 0.833334 7.08336C0.834372 4.40094 2.35056 1.94923 4.75 0.750024C5.73176 0.254133 6.81678 -0.00284397 7.91667 2.37401e-05H8.33334C11.9298 0.19844 14.8016 3.07018 15 6.66669V7.08336V7.08336Z" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="comments-count">5</div>
            </div>
            <div class="participants flex">
              <div class="participants-item"></div>
              <div class="participants-item"></div>
              <div class="participants-item"></div>
            </div>
          </div>
        </li>
        <li class="task-list-item">
          <div class="task-list-item__header flex between">
            <span class="task-status">进行中</span>
            <span class="task-since">1 天 4小时</span>
          </div>
          <section class="task-list-item__body">
            Dashboard Design
          </section>
          <div class="task-list-item__footer flex between">
            <div class="comments flex">
              <div class="comments-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.08336C15.0029 8.18325 14.7459 9.26826 14.25 10.25C13.0508 12.6495 10.5991 14.1657 7.91667 14.1667C6.81678 14.1696 5.73176 13.9126 4.75 13.4167L0 15L1.58333 10.25C1.08744 9.26826 0.830466 8.18325 0.833334 7.08336C0.834372 4.40094 2.35056 1.94923 4.75 0.750024C5.73176 0.254133 6.81678 -0.00284397 7.91667 2.37401e-05H8.33334C11.9298 0.19844 14.8016 3.07018 15 6.66669V7.08336V7.08336Z" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="comments-count">5</div>
            </div>
            <div class="participants flex">
              <div class="participants-item"></div>
              <div class="participants-item"></div>
              <div class="participants-item"></div>
            </div>
          </div>
        </li>
        <li class="task-list-item">
          <div class="task-list-item__header flex between">
            <span class="task-status">进行中</span>
            <span class="task-since">1 天 4小时</span>
          </div>
          <section class="task-list-item__body">
            Dashboard Design
          </section>
          <div class="task-list-item__footer flex between">
            <div class="comments flex">
              <div class="comments-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.08336C15.0029 8.18325 14.7459 9.26826 14.25 10.25C13.0508 12.6495 10.5991 14.1657 7.91667 14.1667C6.81678 14.1696 5.73176 13.9126 4.75 13.4167L0 15L1.58333 10.25C1.08744 9.26826 0.830466 8.18325 0.833334 7.08336C0.834372 4.40094 2.35056 1.94923 4.75 0.750024C5.73176 0.254133 6.81678 -0.00284397 7.91667 2.37401e-05H8.33334C11.9298 0.19844 14.8016 3.07018 15 6.66669V7.08336V7.08336Z" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="comments-count">5</div>
            </div>
            <div class="participants flex">
              <div class="participants-item"></div>
              <div class="participants-item"></div>
              <div class="participants-item"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</transition>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Profil',
    data() {
      return {
        isLeave: false
      }
    }
  })
</script>

<style lang="less" scoped>
.profil {
  background-color: var(--theme);
  min-height: 100vh;
  li {
    list-style-type: none;
  }
}
.page-header {
  min-height: 220px;
}
.profil-body {
  min-height: calc(100vh - 220px);
  padding: 0 12px 24px;
  background-color: #FFFFFF;
  border-radius: 30px 30px 0 0;
}

.user-info {
  transform: translateY(-55px);
  margin-bottom: -55px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.user-avatar {
  width: 110px;
  height: 110px;
  border-radius: 18px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  .user-avatar-inner {
    width: 100px;
    height: 100px;
    background-color: var(--grey-l);
    border-radius: 18px;
  }
}
.user-name {
  margin-bottom: 12px;
}
.user-position {
  color: var(--grey);
}

.profil-info {
  margin-top: 48px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--grey-l);
}
.profil-info-item {
  text-align: center;
}
.profil-info__title {
  color: var(--grey);
  margin-bottom: 6px;
}
.message-btn.btn {
  min-width: 120px;
  background-color: var(--yellow);
}

.profil-tab {
  margin-bottom: 24px;
}
.profil-tab-item {
  text-decoration: none;
  color: var(--theme);
  font-weight: 600;
  position: relative;
  padding-bottom: 20px;
  &.active::before {
    content: " ";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--theme);
    position: absolute;
    bottom: 0;
    left: calc(50% - 4px);
  }
}

.task-list-item {
  background: #FFFFFF;
  box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: 18px 12px;
}
.task-list-item ~ .task-list-item {
  margin-top: 24px;
}
.task-status {
  color: var(--red);
}
.task-list-item__body {
  margin: 12px 0 24px;
}
.comments-icon {
  margin-right: 6px;
}
.participants-item {
  background-color: var(--grey-l);
  border-radius: 8px;
  width: 30px;
  height: 30px;
}
.participants-item ~ .participants-item {
  margin-left: 12px;
}
</style>