<template>
  <div class="create-card">
    <div class="page-header create-card-header">
      <h1 class="page-title flex between container">
        <a href="#" @click="$router.back()">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7H0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 13L0 7L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <span>创建一个任务卡片</span>
        <span></span>
      </h1>
    </div>
    <div class="create-card-input-group container">
      <z-input 
        v-model="title"
        label="标题"
        placeholder="请输入标题"/>
      <z-input label="创建时间" placeholder="2020/12/31"/>
    </div>
    <div class="create-card-body">
      <!-- 时间段选择 -->
      <div class="date-picker container flex center">
        <div class="date-picker-start">
          <h4 class="date-picker-title">开始任务时间</h4>
          <div class="date-picker-body flex">
            <div class="date-picker-icon">
              <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2.80005" width="16.2" height="16.2" rx="2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 8.19995H17.2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="date-picker-text">
              2020/12/31
            </div>
          </div>
        </div>
        <div class="date-picker-end">
          <h4 class="date-picker-title">结束任务时间</h4>
          <div class="date-picker-body flex">
            <div class="date-picker-icon">
              <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2.80005" width="16.2" height="16.2" rx="2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 1V4.6" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 8.19995H17.2" stroke="#DDB90E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="date-picker-text">
              2021/01/03
            </div>
          </div>
        </div>
      </div>
      <!-- 任务描述 -->
      <div class="desc container" :class="{ 'hide-drag': !!desc }">
        <h4 class="create-card-title">任务描述</h4>
        <z-textarea
          v-model:modelValue="desc"
          :rows="5"
          maxlength="100"
          class="desc-textarea"
          :class="{ 'no-empty': !!desc }"
          placeholder="请输入任务描述（100字以内）"
        />
      </div>
      <!-- 任务类型 -->
      <div class="category container">
        <h4 class="create-card-title">任务类型</h4>
        <div class="category-body">
          <div class="category-tag">Desgin</div>
          <div class="category-tag active">Social Media Design</div>
          <div class="category-tag">Dashboard Design</div>
          <div class="category-tag">Dashboard Design</div>
          <div class="category-tag">Backend</div>
          <div class="category-tag">Backend</div>
          <div class="category-tag">Backend</div>
          <div class="category-tag">Backend</div>
          <div class="category-tag">Backend</div>
        </div>
      </div>
      <!-- 任务成员 -->
      <div class="members container">
        <h4 class="create-card-title">任务成员</h4>
        <div class="members-body flex">
          <div class="members-item"></div>
          <div class="members-item"></div>
          <div class="members-item"></div>
          <div class="members-item add">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3684 8.36842H9.63158V1.63158C9.63158 1.28277 9.34881 1 9 1C8.65119 1 8.36842 1.28277 8.36842 1.63158V8.36842H1.63158C1.28277 8.36842 1 8.65119 1 9C1 9.34881 1.28277 9.63158 1.63158 9.63158H8.36842V16.3684C8.36842 16.7172 8.65119 17 9 17C9.34881 17 9.63158 16.7172 9.63158 16.3684V9.63158H16.3684C16.7172 9.63158 17 9.34881 17 9C17 8.65119 16.7172 8.36842 16.3684 8.36842Z" fill="#4404AC" stroke="#4404AC"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="btn">立即创建一个任务</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Create',
  components: {
  },
  setup() {
    const state = reactive({
      title: '',
      createDate: new Date().toLocaleDateString(),
      startDate: '',
      endDate: '',
      desc: '',
      category: [],
      members: []
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.create-card {
  background-color: var(--theme);
  min-height: 100vh;
}
.create-card-body {
  min-height: calc(100vh - (170px + 138px - 48px) - 96px);
  padding: 24px 12px;
  background-color: #FFFFFF;
  border-radius: 30px 30px 0 0;
  margin-top: 48px;
}
.create-card-title {
  margin-bottom: 12px;
}

.desc,
.category,
.date-picker {
  margin-bottom: 24px;
}
.members {
  margin-bottom: 48px;
}

// 时间选择器
.date-picker {
  .date-picker-start {
    margin-right: 24px;
  }
  .date-picker-end {
    margin-left: 24px;
  }
  .date-picker-title {
    margin-bottom: 12px;
  }
  .date-picker-body {
    cursor: pointer;
  }
  .date-picker-icon {
    margin-right: 12px;
  }
  .date-picker-text {
    font-size: 13px;
    color: var(--grey);
  }
}

.desc.hide-drag {
  position: relative;
  &::before  {
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    bottom: 4px;
    right: 0;
    transition: .2s ease;
  }
  &:focus-within::before {
    background-color: transparent;
    z-index: -1;
  }
}
// 描述文本域
textarea.desc-textarea {
  border: 1px solid var(--theme-l);
  overflow: auto;
  max-width: 100%;
  &.no-empty {
    border-color: transparent;
    color: var(--grey);
  }
  &.no-empty:focus {
    border: 1px solid var(--theme-l);
  }
}

// 任务种类
.category {
  .category-body {
    flex-wrap: wrap;
  }
  .category-tag {
    display: inline-block;
    color: var(--grey);
    background-color: var(--grey-l);
    border-radius: 10px;
    padding: 6px 24px;
    user-select: none;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .category-tag.active {
    color: #FFFFFF;
    background-color: var(--theme);
  }
  .category-tag:first-child {
    margin-right: 8px;
  }
  .category-tag ~ .category-tag {
    margin-right: 8px;
  }
}

// 成员
.members {
  .members-item {
    background-color: var(--grey-l);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
  .members-item ~ .members-item {
    margin-left: 12px;
  }
  .members-item.add {
    background-color: transparent;
    border: 1px dashed var(--theme);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>