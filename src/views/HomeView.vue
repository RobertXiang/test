<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <van-picker
      show-toolbar
      title="标题"
      v-model="columns"
      @click="onConfirm()"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
    };
  },

  methods: {
    onConfirm(event) {
      const { picker, value, index } = event.detail;
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
  },
};
</script>
