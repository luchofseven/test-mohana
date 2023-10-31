'use client'
import { useEffect } from 'react'
import ProductForm from '@/components/product-form'
import Title from '@/components/title'
import { Toaster } from 'react-hot-toast'

export default function New () {
  useEffect(() => {
    document.title = 'Admin Mohana - Agregar nuevo producto'
  }, [])

  return (
    <main className="lg:max-w-[85%] lg:ml-[15%] font-poppins min-h-screen w-full px-4 lg:px-0 pb-6 lg:pb-0">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Title title="Agregar nuevo producto" />
      <ProductForm mode="create" />
    </main>
  )
}
