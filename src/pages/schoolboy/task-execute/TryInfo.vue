<template>
  <div class="try-info">
    Попытка 1
    <span class="result"> 70%</span>
  </div>
</template>

<script>
export default {
  name: 'TryInfo',
  props: {
    // TODO
  },

}
</script>

<style lang="sass" scoped>

.try-info
  margin-top: 10px
  padding-bottom: 10px
  font-weight: 600
  font-size: 18px
  line-height: 49px
  display: flex
  justify-content: space-between
  border-bottom: 1px solid #595667
  cursor: pointer
  opacity: .7

  &.active, &:hover
    opacity: 1

.result
  color: #8DCF00

</style>