export interface Product {
  id?: string
  name: string
  description: string
  category: string
  image: string
  price: number
  quantity: number
}

export interface ContextProductData {
  products: Product[]
  loading: boolean
  error: Error | null
  addProduct: (product: Product) => void
  updateProduct: (id: string, product: Product) => void
  deleteProduct: (id: string) => void
}

export interface ContextCategoryData {
  category: string
  setCategory: Dispatch<SetStateAction<object>>
}
