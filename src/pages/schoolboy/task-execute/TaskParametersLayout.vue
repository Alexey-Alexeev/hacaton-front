<template>
  <div class="parameters-layout" v-if="task">
    <div class="param-title">
      Задание
      <custom-checker v-model="isTaskShow" />
    </div>
    <p class="param-description" v-if="isTaskShow">
      {{ task.description }}
    </p>
    <div class="param-title">
      Входные данные
      <custom-checker v-model="isInputShow" />
    </div>
    <p class="param-description" v-if="isInputShow">
      {{ task.input }}
    </p>
    <div class="param-title">
      Выходные данные
      <custom-checker v-model="isOutputShow" />
    </div>
    <p class="param-description" v-if="isOutputShow">
      {{ task.output }}
    </p>
  </div>

</template>

<script>
export default {
  name: 'TaskParametersLayout',
  props: {
    task: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      isTaskShow: true,
      isInputShow: false,
      isOutputShow: false,
    }
  }
}
</script>

<style lang="sass" scoped>

.parameters-layout
  width: 25vw
  padding: 30px
  background: #463698
  display: flex
  flex-direction: column
  overflow: auto

.param-title
  padding-left: 10px
  margin-bottom: 15px
  font-weight: 600
  font-size: 18px
  line-height: 22px
  display: flex
  justify-content: space-between
  align-items: center

.param-description
  padding: 20px
  background: #5843BE
  border-radius: 10px
  font-size: 14px
  line-height: 17px
  margin: 0 0 30px
  overflow: auto


</style>