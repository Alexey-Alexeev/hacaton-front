<template>
  <div class="user-menu">
    <custom-icon
        name="user"
        container-size="medium"
        color="#7F7F7F" />
    <header-checker v-model="isUserMenuShow"/>
    <div class="menu" v-show="isUserMenuShow">
      <span v-for="(row, key) in menuRows" :key="key" @click="goTo(row)">
        {{ row.label }}
      </span>
    </div>
  </div>
</template>

<script>
import HeaderChecker from '@/components/checker/HeaderChecker';
import { mapGetters, mapMutations } from 'vuex';

const menuValues = {
  schoolboyTaskList: { routeName: 'schoolboy', label: 'Вернуться к списку' },
  exit: { routeName: 'login', label: 'Выйти' },
}

export default {
  name: 'UserMenu',
  components: {
    HeaderChecker
  },
  data() {
    return {
      isUserMenuShow: false,
    };
  },
  computed: {
    menuRows() {
      let menuRows = [];
      if (this.SCHOOLBOY && this.$route.name === 'schoolboy-task') {
        menuRows.push(menuValues.schoolboyTaskList);
      }
      menuRows.push(menuValues.exit);
      return menuRows;
    },
    ...mapGetters(['SCHOOLBOY']),
  },
  methods: {
    goTo(row) {
      if (row.label === 'login') {
        this.CLEAR_USER();
        this.CLEAR_SCHOOLBOY();
      }
      this.$router.push({ name: row.routeName });
      this.isUserMenuShow = false;
    },
    ...mapMutations(['CLEAR_USER', 'CLEAR_SCHOOLBOY'])
  }
};
</script>

<style lang="sass" scoped>

.user-menu
  position: relative
  background: #404040
  border-radius: 10px
  display: flex
  align-items: center
  justify-content: space-between
  column-gap: 20px
  padding: 1.15vh 20px

.menu
  position: absolute
  left: 0
  top: 8.5vh
  padding: 5px
  background: #352872
  border: 2px solid #404040
  border-radius: 5px
  display: flex
  flex-direction: column
  z-index: 10

  span
    cursor: pointer
    opacity: 0.6
    &:hover
      opacity: 1
    &:not(:last-child)
      padding-bottom: 10px

</style>