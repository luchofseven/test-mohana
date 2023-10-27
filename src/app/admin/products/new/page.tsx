'use client'
import ProductForm from '@/components/product-form'
import Title from '@/components/title'
import { Toaster } from 'react-hot-toast'

export default function New () {
  return (
      <main className="max-w-[85%] ml-[15%] font-poppins min-h-screen w-full">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Title title="Agregar nuevo producto" />
        <ProductForm mode="create" />
      </main>
  )
}
