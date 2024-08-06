<script setup lang="ts">
const props = defineProps<{
  msg: string
  status: NoticeStatus
  index: number
}>()
</script>

<template>
  <div class="item">
    <SvgIcon name="icon-check" v-if="status === 'success'"></SvgIcon>
    <SvgIcon class="warning" name="icon-cancel" v-if="status === 'warning'"></SvgIcon>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 335rem;
  height: 50rem;
  position: fixed;
  z-index: 9999;
  border-radius: 8px;
  background-color: var(--primary-color);
  left: 20rem;
  margin-top: 20rem;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  // 加两条通知的边距
  top: calc(v-bind(index) * 70rem);

  svg {
    font-size: 34rem;
    color: var(--success-color);

    &.warning {
      color: var(--warning-color);
    }
  }

  .msg {
    font-size: 20rem;
    margin-left: 10rem;
    color: var(--secondary-color);
  }
}
</style>