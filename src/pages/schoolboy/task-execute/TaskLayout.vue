<template>
 <div v-if="task" class="container">
   <div class="main-info">
       <task-parameters-layout :task="task"/>
       <textarea
           v-if="trySchoolboy"
           class="code-space"
           v-model="trySchoolboy.code"
           @keydown="handleTab($event)"
           :disabled="isTextAreaDisabled"  />
       <tries-layout
           :tries-list="triesList"
           @setActiveTry="putCodeInArea($event)" />
   </div>
   <div class="task-action">
       <div
           v-if="isShowReviewButton"
           class="button-review"
           @click="isTryComplete=true"
       >
         <custom-icon
             name="eye"
             color="#00D1FF"
         />
         Проверить код
       </div>
       <modal-result
           v-model="isTryComplete"
           :try-schoolboy="trySchoolboy"
           @save="saveTry"
       />
       <div
           v-if="isShowClearButton"
           class="button-clear"
           @click="clearCode"
       >
         Сбросить
       </div>
   </div>
 </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TrySchoolboy from "@/domain/TrySchoolboy";
import TaskParametersLayout from '@/pages/schoolboy/task-execute/TaskParametersLayout';
import TriesLayout from '@/pages/schoolboy/task-execute/TriesLayout';
import schoolboy from "@/mixins/schoolboy";
import http from "@/http/http";
import ModalResult from "@/pages/schoolboy/task-execute/ModalResult";

export default {
  name: 'TaskLayout',
  components: {
    ModalResult,
    TriesLayout,
    TaskParametersLayout
  },
  mixins: [ schoolboy ],
  data() {
    return {
      isTryComplete: false,
      task: null,
      trySchoolboy: null,
      isTextAreaDisabled: false,
      triesList: [],
      isModalShow: false,
    }
  },
  async created() {
    setTimeout(async () => {
      this.task = this.SCHOOLBOY_TASK_LIST.find(task => task.id === this.$route.params.id);
      this.initializeTry();

      await this.setTriesList();
    }, 60);
  },
  computed: {
    isShowReviewButton() {
      return !this.isTryComplete && this.trySchoolboy.code && !this.isTextAreaDisabled;
    },
    isShowClearButton() {
      return !this.isTryComplete && this.trySchoolboy.code
    },
    ...mapGetters(['SCHOOLBOY_TASK_LIST', 'SCHOOLBOY']),
  },
  methods: {
    handleTab(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        this.trySchoolboy.code = this.trySchoolboy.code.concat('  ');
      }
    },
    clearCode() {
      this.trySchoolboy.code = '';
      this.isTextAreaDisabled = false;
      this.CLEAR_ACTIVE_TRY();
    },
    putCodeInArea(taskTry) {
      this.trySchoolboy.code = taskTry.code;
      this.isTextAreaDisabled = true;
    },
    async setTriesList() {
      this.triesList = await http.getAllTries(this.SCHOOLBOY.id, this.task.id)
          .catch(() => console.log('Хьюстон у нас проблемы'));
    },
    async saveTry() {
      const arrLength = this.triesList.length;
      this.trySchoolboy.tryNumber = arrLength + 1;

      // TODO
      this.trySchoolboy.result = 0;

      const newTry = await http.saveTry(this.trySchoolboy);
      if (newTry) {
        this.triesList.push(newTry);
        this.initializeTry();
        this.isTryComplete = false;
      }
    },
    initializeTry() {
      this.trySchoolboy = new TrySchoolboy({ schoolboyId: this.SCHOOLBOY.id, taskId: this.task.id });
    },
    ...mapMutations(['CLEAR_ACTIVE_TRY']),
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
   font-size: 14px
   line-height: 17px

 .code-space
   width: 55vw
   padding: 30px 20px
   background: #352872
   color: #FFFFFF
   outline: none
   border: none
   resize: none

 .task-action
   height: 9.7vh
   margin-left: 25vw
   display: flex
   align-items: center
   column-gap: 20px


</style>