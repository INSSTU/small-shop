<script setup lang="ts">
const scrollEle = ref(null)

provide(SCROLL_ELE, scrollEle)
</script>

<template>
  <div class="main" ref="scrollEle">
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}
</style>
