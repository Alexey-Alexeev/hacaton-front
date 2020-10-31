<template>
  <div id="app">
    <app-header v-if="isShowHeader"/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/pages/app/AppHeader';
import schoolboy from "@/mixins/schoolboy";

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mixins: [ schoolboy ],
  async created() {
    this.routeName = this.$route.name;
    await this.getSchoolboy();
  },
  data() {
    return {
      routeName: ''
    };
  },
  computed: {
    isShowHeader() {
      const pageList = [
          'schoolboy',
          'schoolboy-task',
      ];

      return pageList.includes(this.routeName);
    }
  },
  watch: {
    '$route' (to) {
      this.routeName = to.name;
    },
  }
};
</script>
