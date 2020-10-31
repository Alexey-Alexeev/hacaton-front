<template>
  <div
    ref="modal"
    class="cs-modal-overlay"
    :class="{
    'cs-modal-overlay-showed': visible
  }">
    <span class="modal-title">Результат</span>
    <div class="result">
      <div class="value-result"> 70% </div>
    </div>
    <div>
      ЗДЕСЬ БУДЕТ ВЫВВВООООД
    </div>
    <div class="button-container">
        <div class="button-review" @click="save">
          Сохранить результат
        </div>
        <div class="button-review" @click="visible=false">
          Закрыть
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalResult',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    trySchoolboy: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    save(){
      this.$emit('save');
      this.visible = false;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.visible = val;
      },
    },
    visible: {
      handler(val) {
        const modal = this.$refs.modal;
        this.$emit('input', val);

        if (val) {
          document.body.appendChild(modal);
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'unset';
          modal.remove();
        }
      },
    },
  },
}
</script>

<style lang="sass" scoped>

  .cs-modal
    position: relative

    &-overlay
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 2000
      display: none
      align-items: center
      justify-content: center
      overflow: hidden

      &-showed
        display: flex
        flex-direction: column
        background: #5843BE
        border-radius: 10px
        width: 600px
        height: fit-content
        max-height: 600px
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 20px 30px


  .result
    height: 4.5vh
    width: 100%
    border: 1px solid #8DCF00
    box-sizing: border-box
    border-radius: 10px
    margin-bottom: 20px

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


  .button-container
    display: flex
    width: 100%
    column-gap: 20px

  .modal-title
    font-weight: 600
    font-size: 28px
    line-height: 30px
    margin-bottom: 30px


</style>