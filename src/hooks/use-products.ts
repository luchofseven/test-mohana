'use client'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { type Product } from '@/types'

export default function useProducts () {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('http://localhost:5555/products')
      .then(async response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.')
        }

        return await response.json()
      })
      .then(data => {
        setProducts(data)
        console.log('GET', data)
      })
      .catch(err => {
        setError(err)
        toast.error(`${err}`)
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
      })
      .catch((error) => {
        toast.error(error.message)
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
      })
      .catch((error) => {
        toast.error(error.message)
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
        getProducts()
        toast.success('¡Producto eliminado con éxito!')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct
  }
}
