<template>
  <div class="list-container">
    <div v-if="isShowGrid" class="header">
      <div class="title">
        Домашние задания
        <span>{{`(${taskList.length})`}} </span>
      </div>
      <div class="filter">
          Показывать выполненные
        <custom-switcher @click="filterTaskList"/>
      </div>
    </div>
    <div v-if="isShowGrid"
         class="task-grid"
    >
      <task-card
          v-for="(task, key) in taskList"
          :task="task" :key="key" />
    </div>
    <div v-else class="none-task">У вас еще нет домашних заданий</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TaskCard from '@/pages/schoolboy/task-list/TaskCard';

export default {
  name: 'TaskList',
  components: {
    TaskCard,
  },
  data() {
    return {
      firstDumpTaskList: [],
      isDumpComplete: false,
      taskList: [],
    }
  },
  computed: {
    isShowGrid() {
      return this.SCHOOLBOY_TASK_LIST.length > 0;
    },
    ...mapGetters(['SCHOOLBOY_TASK_LIST', 'USER'])
  },
  methods: {
    filterTaskList(isChecked) {
      if (isChecked) {
        this.taskList = this.taskList.filter(task => task.bestResult > 50);
      } else {
        this.taskList = this.firstDumpTaskList;
      }
    }
  },
  watch: {
    SCHOOLBOY_TASK_LIST: {
      immediate: true,
      handler(val) {
        if (val.length > 0  && !this.isDumpComplete) {
          this.firstDumpTaskList = JSON.parse(JSON.stringify(val));
          this.taskList = JSON.parse(JSON.stringify(val));
          this.isDumpComplete = true;
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>

  .list-container
    width: 1100px
    margin: 0 auto

  .header
    display: flex
    align-items: center
    justify-content: space-between
    padding: 20px 17px
    margin-bottom: 20px


  .title
    font-weight: bold
    font-size: 34px
    line-height: 29px
    color: #000000
    text-align: center

    span
      opacity: 0.5

  .task-grid
    display: grid
    grid-template-columns:  1fr 1fr 1fr 1fr
    justify-items: center

  .none-task
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    font-size: 18px
    line-height: 22px
    color: #000000

  .filter
    font-size: 14px
    line-height: 17px
    color: #000000
    display: flex
    align-items: center

    *
      &:last-child
        margin-left: 14px
</style>