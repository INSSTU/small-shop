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