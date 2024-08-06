<script setup lang="ts">
const products = ref<Product[]>([])

const pageNumber = ref(1)
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE)

const route = useRoute()

const props = defineProps<{
  keyword?:string
}>()

const url = computed(() => {
  if (route.params.categoryId) {
    return `products/category/${route.params.categoryId}?page=${pageNumber.value}&limit=5`
  } else if(props.keyword) {
    return `products/search?name=${props.keyword}&page=${pageNumber.value}`
  } else {
    return `products?page=${pageNumber.value}`
  }
})
const { data, isFetching } = useFetch(url).json<Page<Product>>()

watchEffect(() => {
  if (data.value) {
    if (data.value.currentPage === 1) {
      products.value = data.value.data
    } else {
      products.value.push(...data.value.data)
    }
  }
})


watch(
  () => props.keyword,
  () => {
    pageNumber.value = 1
  },
)

onBeforeRouteUpdate(() => {
  pageNumber.value = 1
})

useInfiniteScroll(
  scrollEle,
  () => {
    if (data.value && pageNumber.value < data.value.totalPages) {
      pageNumber.value++
    }
  },
  { distance: 100, interval: 200 },
)
</script>

<template>
  <div class="product-list">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="price">{{ item.price }}</h3>
    </div>
  </div>
  <p class="msg" v-show="!isFetching && products.length === 0">没有数据</p>
  <p class="msg" v-show="isFetching">---- 加载中 ----</p>
  <p class="msg" v-show="!isFetching && data?.totalPages === pageNumber">
    ---- 已经加载到最后 ----
  </p>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .product {
    padding: 20rem;
    .img-wrap {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .name {
      font-size: 15rem;
      color: var(--light-color);
    }

    .price {
      &::before {
        content: '￥';
      }
    }
  }
}

.msg {
  text-align: center;
  font-size: 14rem;
}
</style>
