<script setup lang="ts">
import type { ValidateError } from 'async-validator';

const props = withDefaults(
  defineProps<{
    type?: 'text' | 'password'
    label: string
    error?: ValidateError[]
    modelValue?: string
    toggle?: boolean //小眼睛切换 
  }>(),
  { type: 'text' },
)

const type = ref(props.type)
</script>

<template>
  <form>
      <div :class="{'inp-wrap': true, error: error }">
        <input :type="type" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
        <ul v-if="error">
          <li v-for="e in error" :key="e.message">{{ e.message }}</li>
        </ul>
        <SvgIcon v-show="toggle && type === 'text'" name="icon-eye" @click="type='password'"></SvgIcon>
      </div>
    </form>
</template>

<style lang="scss" scoped>
.inp-wrap {
  margin: 30rem 0;
  position: relative;
  input {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--border-color);
    height: 50rem;
    font-size: 20rem;
  }

  svg{
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: 15rem;

  }
}

.error {
  input {
    border-color: var(--hilight-color);
  }

  ul {
    padding: 0;
    list-style: none;
    font-size: 14rem;
    color: var(--hilight-color);
  }
}
</style>