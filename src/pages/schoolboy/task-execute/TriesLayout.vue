<template>
  <div class="tries-layout">
    <div class="tries-layout-title">
      Мои попытки
    </div>
    <try-info></try-info>
    <try-info></try-info>
  </div>
</template>

<script>
import TryInfo from '@/pages/schoolboy/task-execute/TryInfo';

export default {
  name: 'TriesLayout',
  components: {TryInfo}
};
</script>

<style lang="sass" scoped>
.tries-layout
  width: 20vw
  padding: 20px
  background: #120D26
  line-height: 40px
  overflow: auto

.tries-layout-title
  font-weight: 600
  font-size: 18px
  line-height: 50px

</style>