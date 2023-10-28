export interface Product {
  id?: string
  name: string
  description: string
  category: string
  image: string
  price: number
  quantity: number
}

export interface ContextData {
  products: Product[]
  loading: boolean
  error: Error | null
  addProduct: (product: Product) => void
  updateProduct: (id: string, product: Product) => void
  deleteProduct: (id: string) => void
}
