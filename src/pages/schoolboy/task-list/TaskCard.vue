<template>
  <div class="task-card" v-if="task">
    <div class="task-title"> {{ task.name }}  </div>
    <div class="task-description"> {{ task.description }} </div>
    <task-result :result="task.bestResult"/>
    <div class="button" @click="goToTask(task.id)">{{ buttonLabel }}</div>
  </div>
</template>

<script>
import TaskResult from '@/pages/schoolboy/task-list/TaskResult';
export default {
  name: 'TaskCard',
  components: { TaskResult },
  props: {
    task: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      result: 0,
    }
  },
  computed: {
    buttonLabel() {
      if (this.task) {
        const bestResult = this.task.bestResult;
        if (bestResult === 100) {
          return 'Продолжить';
        } else if (bestResult > 0) {
          return 'Посмотреть';
        }
      }
      return 'Приступить';
    },
  },
  methods: {
    goToTask(taskId) {
      this.$router.push({ name: 'schoolboy-task', params: { id: taskId} });
    }
  }
};
</script>

<style lang="sass" scoped>

.task-card
  width: 240px
  margin-bottom: 20px
  padding: 20px 40px
  border: 1px solid #5843BE
  box-sizing: border-box
  border-radius: 10px
  color: #5843BE

.task-title
  font-weight: 500
  font-size: 14px
  line-height: 20px
  margin-bottom: 10px

.task-description
  font-size: 10px
  line-height: 15px
  margin-bottom: 10px

.button
  padding: 17px
  background: #5843BE
  color: #FFFFFF
  border-radius: 10px
  display: flex
  justify-content: center
  align-items: center
  font-weight: bold
  font-size: 14px
  line-height: 17px
  text-transform: capitalize
  cursor: pointer


</style>