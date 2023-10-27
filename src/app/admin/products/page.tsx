'use client'
import ProductCard from '@/components/product-card'
import useProducts from '@/hooks/use-products'
import Loader from '@/components/loader'
import Title from '@/components/title'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

export default function Products () {
  const { products, loading, error } = useProducts()

  return (
    <>
      <main className="max-w-[85%] ml-[15%] font-poppins min-h-screen w-full">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Title title="Lista de productos" />
        <section className="w-full flex flex-col gap-4 px-4 py-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {(!loading && error === null) && (
            <aside className="bg-mohana w-[200px] m-auto mt-4 py-2 rounded-full lg:transition lg:duration-300 lg:hover:scale-105 text-center text-sm font-bold">
              <Link href="/admin/products/new">Agregar un producto</Link>
            </aside>
          )}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            {loading && <Loader />}
            {products?.length === 0 && !loading && (
              <h2>No hay productos para mostrar.</h2>
            )}
            {error !== null && <h2>{error.message}</h2>}
          </div>
        </section>
      </main>
    </>
  )
}
