<template>
  <div>
    <!-- 头部 -->
    <my-header></my-header>

    <!-- 内容 -->
    <router-view />

    <!-- 回到顶部 -->
    <v-back-top style="bottom: 150px"></v-back-top>

    <!-- 尾部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>