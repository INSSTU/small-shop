<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const { data, error } = useFetch(`products/${props.id}`).json<Product>()

const count = ref(1)

const cart = useCartStore()
const router = useRouter()
const notification = useNotificationStore()
const addCartHandler = (product:Product) => {
  cart.addItems(product, count.value)
  router.push("/cart")
  notification.addNotice({
    id: Date.now(),
    msg: "添加成功!",
    status: "success",
  })
}



</script>

<template>
  <div class="product">
    <BackButton></BackButton>
    <template v-if="!error && data">
      <div class="img-wrap">
        <img :src="data.image_url" :alt="data.name" />
      </div>
      <div class="desc-wrap">
        <h2 class="name">{{ data.name }}</h2>
        <h3 class="price">{{ data.price.toFixed(2) }}</h3>
        <counter v-model:count="count">- <input type="text" /> +</counter>
        <p class="desc">{{ data.descripting }}</p>
      </div>
      <BottomButton class="cart" @click="addCartHandler(data)">加入购物车</BottomButton>
    </template>
    <p v-else-if="error">数据异常...</p>
  </div>
</template>

<style lang="scss" scoped>
.product {
  .desc-wrap {
    padding: 20rem;
  }
  .name {
    font-size: 20rem;
  }

  .price {
    font-size: 14rem;
    &::before {
      content: '￥';
    }
  }

  .desc {
    color: var(--light-color);
    font-size: 12rem;
  }
}
</style>
