'use client'
import ProductForm from '@/components/product-form'
import toast, { Toaster } from 'react-hot-toast'
import Title from '@/components/title'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { type Product } from '@/types'

export default function Edit () {
  const [product, setProduct] = useState<Product[]>([])
  const productData = product[0]
  const { id }: { id: string } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5555/products/${id}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.')
        }
        return await response.json()
      })
      .then((data) => {
        setProduct(data)
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }, [id])

  return (
    <main className="max-w-[85%] ml-[15%] font-poppins min-h-screen w-full">
      <Toaster position="bottom-right" reverseOrder={false}/>
      <Title title="Editar producto" />
      <ProductForm mode="edit" productData={productData} />
    </main>
  )
}
