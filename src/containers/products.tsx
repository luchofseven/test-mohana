'use client'
import ProductCardFront from '@/components/product-card-front'
import useProducts from '@/hooks/use-products'

export default function ProductsContainer () {
  const { products } = useProducts()

  return (
    <>
      <section className='w-full flex flex-wrap justify-center gap-4 py-4'>
        <h2 className='text-center w-full'>Nuestros productos</h2>
          {
           products?.map(product => <ProductCardFront key={product.id} product={product} />)
          }
      </section>
    </>
  )
}
