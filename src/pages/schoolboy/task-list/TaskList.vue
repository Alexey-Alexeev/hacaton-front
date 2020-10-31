<template>
  <div>
    <div class="title">
      Домашние задания
      <span>{{`()`}} </span>
    </div>
    <task-card v-for="key in 5" :key="key"></task-card>
  </div>
</template>

<script>
import TaskCard from "@/pages/schoolboy/task-list/TaskCard";
export default {
  name: 'TaskList',
  components: {TaskCard}
}
</script>

<style lang="sass" scoped>

.title
  font-weight: bold
  font-size: 24px
  line-height: 29px
  color: #000000
  padding: 20px 90px 20px 30px
  margin-bottom: 20px

  span
    opacity: 0.5

</style>