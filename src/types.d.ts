export interface Product {
  id?: string
  name: string
  description: string
  category: string
  image: string
  price: number
  quantity: number
}

interface State {
  cart: Product[]
}

interface Actions {
  addToCart: (product: Product) => void
  removeAll: () => void
}
