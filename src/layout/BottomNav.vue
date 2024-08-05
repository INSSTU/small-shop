<script setup lang="ts"></script>

<template>
  <div class="bottom-nav">
    <router-link to="/home"><SvgIcon name="icon-home"></SvgIcon></router-link>
    <router-link to="/search"><SvgIcon name="icon-search"></SvgIcon></router-link>
    <router-link to="/cart"><SvgIcon name="icon-cart"></SvgIcon></router-link>
    <router-link to="/user"><SvgIcon name="icon-user"></SvgIcon></router-link>
  </div>
</template>

<style lang="scss" scoped>
.bottom-nav{
  width: 375rem;
  height: var(--bottom-nav-height);
  position: fixed; //固定定位
  bottom: 0;
  display: flex;
  border-top: 1px var(--border-color) solid;
  background-color: var(--secondary-color);
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    font-size: 26rem;

    &.router-link-active{
    color: var(--hilight-color);
   }
 }
}
</style>