'use client'
import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode
} from 'react'
import { type Product, type ContextData } from '@/types'
import toast from 'react-hot-toast'

export const ProductsContext = createContext<ContextData | undefined>(
  undefined
)

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (context == null) { throw new Error('useProducts must used within a provider.') }
  return context
}

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('http://localhost:5555/products')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.')
        }

        return await response.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        setError(error)
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const addProduct = (product: Product) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }

    fetch('http://localhost:5555/products', requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Error al agregar el producto.')
        }
        return await response.json()
      })
      .then(() => {
        toast.success('¡Producto agregado con éxito!')
        getProducts()
      })
      .catch((error) => {
        setError(error)
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const updateProduct = (id: string, product: Product) => {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }

    fetch(`http://localhost:5555/products/${id}`, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Error al actualizar el producto.')
        }
        return await response.json()
      })
      .then(() => {
        toast.success('¡Producto actualizado con éxito!')
        getProducts()
      })
      .catch((error) => {
        setError(error)
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const deleteProduct = (id: string) => {
    const confirm = window.confirm('¿Realmente desea eliminar este producto?')

    if (!confirm) return

    const requestOptions = {
      method: 'DELETE'
    }

    fetch(`http://localhost:5555/products/${id}`, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Error al eliminar el producto.')
        }
        return await response.json()
      })
      .then(() => {
        toast.success('¡Producto eliminado con éxito!')
        getProducts()
      })
      .catch((error) => {
        setError(error)
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
