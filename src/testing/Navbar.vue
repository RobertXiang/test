<template>
  <div>
    <!-- src/testing/Navbar.vue -->
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">推荐
            <img src="../assets/001.png" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="2">军事
            <img src="@/assets/004.png" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="3">科技
            <img src="/icon/007.png" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="4">数码
            <img src="/icon/025.png" slot="icon">
        </mt-tab-item>
    </mt-navbar>
    <!-- <img src="data:image/jpeg;base64,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"> -->
  </div>
</template>
<script>
export default {
    data() {
        return {
            selected: '1'
        }
    },
}
</script>