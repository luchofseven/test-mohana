import { useCategory } from '@/context/category-context'
import { type Product } from '@/types'

export function useFilters () {
  const { category, setCategory } = useCategory()

  const filterProducts = (products: Product[]) => {
    if (category !== 'All') {
      return products.filter((product) => {
        return product.category === category
      })
    }

    return products
  }

  return { category, filterProducts, setCategory }
}
