<script setup lang="ts">
const props = defineProps<{ count: number }>()
const emit = defineEmits<{
  'update:count':[count:number]
}>()
const count = computed({
  get() {
    return props.count
  },
  set(value:number) {
    emit('update:count', value)
  },
})
</script>

<template>
  <div class="counter">
    <button @click="count--" :disable="count <= 1">
      <SvgIcon name="icon-remove"></SvgIcon>
    </button>
    <input type="text" v-model="count">
    <button @click="count++">
      <SvgIcon name="icon-add"></SvgIcon>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  button {
    width: 20rem;
    height: 20rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--border-color);
    border-radius: 4px;
    font-size: 18rem;
  }

  input {
    outline: none;
    border: none;
    text-align: center;
    font-size: 14rem;
    width: 36rem;
  }
}
</style>