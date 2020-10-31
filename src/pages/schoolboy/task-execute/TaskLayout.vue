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
           v-if="!isTryComplete && trySchoolboy.code"
           class="button-review"
           @click="isTryComplete=true"
       >
         <custom-icon
             name="eye"
             color="#00D1FF"
         />
         Проверить код
       </div>
       <div
           v-if="!isTryComplete && trySchoolboy.code"
           class="button-clear"
           @click="clearCode"
       >
         Сбросить
       </div>
       <div class="result" v-if="isTryComplete">
          <div class="value-result"> 70% </div>
       </div>
       <div
           v-if="isTryComplete"
           class="button-review"
           @click="saveTry"
       >
         Сохранить результат
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

export default {
  name: 'TaskLayout',
  components: {
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
      triesList: []
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

 .button-review
   border: 2px solid #00D1FF
   border-radius: 10px
   color: #00D1FF
   font-size: 12px
   height: 4vh
   padding: 0 46px
   display: inline-flex
   flex-wrap: nowrap
   align-items: center
   column-gap: 10px
   overflow: hidden
   cursor: pointer

   &:hover
     color: #00F0FF
     border: 2px solid #00F0FF

   &:active
     background: rgba(0, 163, 255, 0.1)
     border: 2px solid #00A3FF
     color: #00A3FF


 .button-clear
   border: 1px solid #FFA800
   border-radius: 10px
   color: #FFA800
   font-size: 12px
   height: 4vh
   padding: 0 46px
   display: inline-flex
   align-items: center
   column-gap: 10px
   cursor: pointer

   &:hover
     color: #FFD600
     border: 1px solid #FFD600

   &:active
     background: rgba(255, 138, 0, 0.1)
     border: 1px solid #FF8A00
     color: #FF8A00


 .result
   height: 4.5vh
   width: 31vw
   border: 1px solid #8DCF00
   box-sizing: border-box
   border-radius: 10px

 .value-result
   background: #8DCF00
   border-radius: 10px 0px 0px 10px
   width: 22vw
   height: 100%
   display: flex
   justify-content: center
   align-items: center
   font-weight: bold
   font-size: 18px
   line-height: 22px



</style>