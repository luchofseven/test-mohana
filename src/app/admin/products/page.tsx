'use client'
import { useEffect } from 'react'
import { useProducts } from '@/context/products-context'
import { useFilters } from '@/hooks/useFilter'
import ProductCard from '@/components/product-card'
import Loader from '@/components/loader'
import Title from '@/components/title'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

export default function Products () {
  const { products, loading, error } = useProducts()
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  useEffect(() => {
    document.title = 'Admin Mohana - Productos'
  }, [])

  return (
    <>
      <main className="lg:max-w-[85%] lg:ml-[15%] font-poppins min-h-screen w-full">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Title title="Lista de productos" />
        <section className="w-full flex flex-col gap-4 px-4 py-4">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            {loading && <Loader />}
            {filteredProducts?.length === 0 && !loading && error === null && (
              <h2>No hay productos para mostrar.</h2>
            )}
            {error !== null && <h2>{error.message}</h2>}
          </div>
          {!loading && error === null && (
            <Link
              href="/admin/products/new"
              className="bg-mohana w-[200px] m-auto mt-4 py-2 rounded-full lg:transition lg:duration-300 lg:hover:scale-105 text-center text-sm font-bold"
            >
              Agregar un producto
            </Link>
          )}
        </section>
      </main>
    </>
  )
}
