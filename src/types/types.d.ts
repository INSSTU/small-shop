interface Product {
  id: number
  name: string
  descripting: string
  price: number
  stock: number
  image_url: string
  category_id: number
}

interface Page<T> {
  data: Array<T>
  totalItems: number
  totalPages: number
  currentPage: number
  itemsPerPage: number
}

type CartItem = Product & { count: number }

type NoticeStatus = 'success' | 'warning'
interface Notice {
  id: number
  msg: string
  status: NoticeStatus
  duration?: number
}

interface User {
  id: number
  username: string
  email: string
  avatar_url: string
}

interface LoginUser {
  token?: string
  user?: User
}

