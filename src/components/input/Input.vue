<template>
  <input
      :type="type"
      :placeholder="placeholder"
      :value="internalValue"
      class="input"
      @input="handleInput"
  >
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default() {
        return null;
      },
    },
    placeholder: {
      type: String,
      default() {
        return ''
      },
    },
    type: {
      type: String,
      default() {
        return 'text'
      },
    },
  },
  data() {
    return {
      internalValue: null,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.internalValue = val;
      },
    },
  },
};
</script>

<style lang="sass" scoped>
  .input
    padding-left: 30px
    background: rgba(0, 0, 0, 0.1)
    border: 2px solid rgba(0, 0, 0, 0.3)
    border-radius: 10px
    text-transform: uppercase
    outline: none
    font-weight: bold
    font-size: 14px
    line-height: 17px

    &:focus
      background: white


</style>