<script setup lang="ts">
const loginUser = useLoginUserStore()
const router = useRouter()
const logoutHandler = () => {
  loginUser.logout()
  router.push('/')
}
</script>

<template>
  <div class="user">
    <div class="title">
      <h2>用户信息</h2>
      <SvgIcon @click="logoutHandler" class="logout" name="icon-logout"></SvgIcon>
    </div>
    <div class="info">
      <div class="avatar">
        <img :src="loginUser.loginUser.user?.avatar_url">
      </div>
      <div class="username">
        <div class="name">{{ loginUser.loginUser.user?.username }}</div>
        <div class="email">{{ loginUser.loginUser.user?.email }}</div>
      </div>
    </div>
    <div class="info">
      <div class="holder">订单信息</div>
    </div>
    <div class="info">
      <div class="holder">地址信息</div>
    </div>
    <div class="info">
      <div class="holder">支付方式</div>
    </div>
    <div class="info">
      <div class="holder">联系客服</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
  h2 {
    font-size: 16rem;
    text-align: center;
  }

  .logout {
    position: absolute;
    font-size: 24rem;
    right: 20rem;
    top: 0;
    bottom: auto;
  }
}

.info {
    display: flex;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
    border-radius: 10px;
    margin: 20rem;
    padding: 10rem;

    .holder{
      height: 40rem;
    }
    .avatar{
      width: 60rem;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
      margin-right: 20rem;
    }

    .username {
      div{
        margin: 10rem 0;
      }

      .name {
        font-size: 14rem;
      }

      .email{
        color: var(--light-color);
        font-size: 10rem;
      }
    }
  }
</style>