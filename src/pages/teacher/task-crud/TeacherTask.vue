<template>
  <div v-if="task" class="container">

    <div class="main-info">
      <div class="task-info">
        Задание
        <textarea
            class="description input"
            v-model="task.description"
            placeholder="Опишите задачу"
            @keydown="handleTab"/>
      </div>
      <div class="test-data-space">
        <div
            v-for="(data, key) in testData"
            class="test-data"
            :key="`input_${data.input}_${key}_output_${data.output}_${key}`"
        >
          <span class="test-data-title"> {{ `Чекер ${key + 1}` }} </span>
          Входные данные
          <input
              class="input input-task"
              :value="data.input"
              @change="data.input = $event.target.value"
              :key="`input_${data.input}_${key}`"
          >
          Выходные данные
          <input
              class="input input-task"
              :value="data.output"
              @change="data.output = $event.target.value"
              :key="`output_${data.output}_${key}`"
          >
        </div>
        <div class="icon-add-overlay add-first" @click.stop="addNewTestData()">
          <custom-icon name="plus" color="#00D1FF" />
        </div>
      </div>
      <div class="class-select">
        <tree-select
            valueFormat="Object"
            v-model="task.classSchoolboyList"
            :options="classList"
            multiple
            placeholder="Выберите класс">
          <div slot="value-label" slot-scope="{ node }">{{ node.raw.name }}</div>
          <label slot="option-label" slot-scope="{ node, labelClassName}" :class="labelClassName">
            {{ node.raw.name }}
          </label>
        </tree-select>
      </div>
    </div>

    <div class="task-action">
      <div
          class="button-review"
          @click="saveTask"
      >
        Сохранить
      </div>
      <div
          class="button-clear"
          @click="clear"
      >
        Сбросить
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import http from '@/http/http';

import TeacherTask from '@/domain/TeacherTask';

export default {
  name: 'TeacherTask',
  data() {
    return {
      task: null,
      testData: [
        { input: null, output: null }
      ],
      classList: [],
    }
  },
  async created() {
    this.classList = await http.getClassList();
    if (this.$route.params.id) {
      setTimeout(() => {
        this.task = this.TEACHER_TASK_LIST.find(task => task.id === this.$route.params.id);
      }, 60);
    } else {
      this.task = new TeacherTask();
    }
  },
  computed: {
    ...mapGetters(['TEACHER_TASK_LIST', 'TEACHER']),
  },
  methods: {
    clear() {
    },
    async saveTask() {
      // TODO
      this.task.name = 'АУЕ БРАТУХА БЛЯ ПОЕХАЛОООО';
      this.task.output = this.outputs.filter(v => !!v).join(';');
      this.task.input = this.inputs.filter(v => !!v).join(';');
      this.task.teacherId = this.TEACHER.id;
      const isSaved = await http.saveTask(this.task);
      if (isSaved) {
        await this.$router.push('teacher');
      }


    },
    handleTab(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        this.task.description = this.task.description.concat('  ');
      }
    },
    addNewTestData() {
      this.testData.push({ input: null, output: null });
    }
  },
}
</script>

<style lang="sass" scoped>
  .container
    width: 100vw
    background: #000000

  .main-info
    display: flex
    flex-wrap: nowrap
    height: 80.6vh
    font-weight: 600
    font-size: 18px
    line-height: 22px

  .task-info
    width: 25vw
    padding: 30px
    background: #463698
    display: flex
    flex-direction: column
    overflow: auto

  .description
    margin-top: 10px
    padding: 20px
    min-height: 300px

  .test-data-space
    width: 55vw
    padding: 30px 20px
    background: #352872
    overflow: auto

  .test-data
    display: flex
    flex-direction: column
    &:not(:first-child)
      margin-top: 20px

  .test-data-title
    font-size: 22px
    margin-bottom: 20px



  .input-task
    width: 460px
    margin-top: 15px
    line-height: 48px
    padding-left: 20px

  .class-select
    width: 20vw
    padding: 20px
    background: #120D26
    line-height: 40px

  .task-action
    height: 9.7vh
    margin-left: 25vw
    display: flex
    align-items: center
    column-gap: 20px


  .input
    background: #5843BE
    border-radius: 10px
    outline: none
    border: none
    resize: none
    color: #FFFFFF
    margin-bottom: 10px

    &::placeholder
      color: #FFFFFF
      opacity: 0.8

  .icon-add-overlay
    border-radius: 10px
    border: 2px solid #00D1FF
    padding: 10px
    width: fit-content
    cursor: pointer

  .add-first
    margin-bottom: 60px
</style>