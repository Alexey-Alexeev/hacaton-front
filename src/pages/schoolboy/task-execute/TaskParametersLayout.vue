<template>
  <div class="parameters-layout">
    <div class="param-title">
      Задание
      <custom-checker v-model="isTaskShow" />
    </div>
    <p class="param-description" v-if="isTaskShow">
      Добавьте в созданный на предыдущем уроке "sppstudio" новый подпроект lesson_2(Qt Widget).
      Очистите его от посторонних файлов, оставив в нём main.cpp.Создайте в нем файлы myclass.h и myclass.cpp.

      Давайте придумаем функциональность для нашей программы.
      Пусть она при нажатии на кнопку создаёт окна и если число созданных окон превысит 5, то она закончит выполнение
    </p>
    <div class="param-title">
      Входные данные
      <custom-checker v-model="isOutputShow" />
    </div>
    <div class="param-title">
      Выходные данные
      <custom-checker v-model="isOutputShow" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'TaskParametersLayout',
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


</style>