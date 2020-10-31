<template>
 <div class="container">
   <div class="title">
     <span class="project-logo">REMOTE SHOOL</span>
     <span class="task">Задание 12</span>
     <div class="user-menu">
       <custom-icon name="user" container-size="medium" color="#7F7F7F"/>
       <custom-icon name="check" color="#7F7F7F"/>
     </div>
   </div>
   <div class="main-info">
     <task-parameters-layout />
     <textarea class="code-space"/>
     <tries-layout />
   </div>
   <div class="task-action">
     <div v-if="!test" class="button-review" @click="test=true">
       <custom-icon name="eye" color="#00D1FF"/>
       Проверить код
     </div>
     <div v-if="!test" class="button-clear">
       Сбросить
     </div>
     <div class="result" v-if="test">
        <div class="value-result"> 70% </div>
     </div>
     <div v-if="test" class="button-clear">
       Следующее задание
     </div>
   </div>
 </div>
</template>

<script>
import TaskParametersLayout from '@/pages/schoolboy/task-execute/TaskParametersLayout';
import TriesLayout from '@/pages/schoolboy/task-execute/TriesLayout';

export default {
  name: 'TaskLayout',
  components: {
    TriesLayout,
    TaskParametersLayout
  },
  data() {
    return {
      test: false,
    }
  }

}
</script>

<style lang="sass" scoped>
 .container
   width: 100vw
   background: #000000

 .title
   height: 9.7vh
   display: flex
   justify-content: space-between
   align-items: center
   padding: 0 80px 0 40px

 .project-logo
   font-weight: bold
   font-size: 14px
   line-height: 17px

 .task
   font-weight: 600
   font-size: 18px
   line-height: 22px

 .user-menu
   background: #404040
   border-radius: 10px
   display: flex
   align-items: center
   justify-content: space-between
   column-gap: 20px
   padding: 1.15vh 20px

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