<template>
  <div>
    <!-- 头部 -->
    <my-header></my-header>

    <!-- 内容 -->
    <router-view />

    <!-- 尾部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter }
};
</script>

<style lang="scss" scoped>
</style>