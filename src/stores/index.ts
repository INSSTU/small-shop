export const useLoginUserStore = defineStore('loginUser', {
  state: () => {
    return {
      loginUser: useLocalStorage<LoginUser>('loginUser', {})
    }
  },
  getters: {
    isLogin: (state) => {
      return 'token' in state.loginUser && 'user' in state.loginUser
    }
  },
  actions: {
    login(loginUser: LoginUser) {
      this.loginUser = loginUser
    },
    logout() {
      this.loginUser={}
    }
  }
})

export const useNotificationStore = defineStore("notification", {
  state: () => {
    return {
      items: [] as Notice[],
    }
  },
  actions: {
    addNotice(notice:Notice) {
      this.items.push(notice)
      setTimeout(() => {
        this.removeNotice(notice.id)
      }, notice.duration ? notice.duration : 3000,)
    },
    removeNotice(id:number) {
      this.items = this.items.filter((item) => item.id !== id)
    }
  },
})

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: useLocalStorage<CartItem[]>('cart', []),
    }
  },
  getters: {
    totalCount: (state) => {
      return state.items.reduce((a, b) => a + b.count, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((a, b) => a + b.price*b.count, 0)
    },
  },
  actions: {
    addItems(product: Product, count: number) {
      if(count <= 0) return
      const cartItem = this.items.find((item) => item.id === product.id)
      if(cartItem) {
        const newCount = cartItem.count + count
        if(newCount <= cartItem.stock) {
          cartItem.count = newCount
        } else {
          cartItem.count = cartItem.stock
        }
      } else {
        count = count <= product.stock ? count:product.stock
        this.items.push({...product, count})
      }
    },
    removeItems(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  },
})