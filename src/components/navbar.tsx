'use client'
import Link from 'next/link'
import { BoardIcon, PlusIcon } from '@/icons/icons'
import Filter from './filter'
import { useProducts } from '@/context/products-context'

export default function NavbarAdmin () {
  const { products } = useProducts()

  return (
    <header className="bg-white text-bgMohana font-poppins py-4 lg:w-[15%] lg:fixed lg:top-0 lg:left-0 lg:bottom-0 overflow-hidden">
      <section>
        <h1 className="text-3xl font-bold text-center lg:mt-4 lg:transition lg:hover:scale-105 p-2">
          <Link href="/admin">
            ADMIN <span className="text-mohana block">MOHANA</span>
          </Link>
        </h1>
      </section>
      <section className="mt-2 lg:mt-4 w-full flex flex-col items-center">
        <h2 className="font-bold mb-8 text-sm text-center">
          ¿Qué acción deseas realizar?
        </h2>
        <article className="w-full flex flex-col gap-2 justify-center items-center">
          <Link
            href="/admin/products"
            className="bg-mohana text-white font-bold text-sm w-full h-[50px] flex justify-center items-center gap-2 transition hover:bg-mohana/50"
          >
            <BoardIcon />
            Ver productos
          </Link>
          <Link
            href="/admin/products/new"
            className="bg-mohana text-white font-bold text-sm w-full h-[50px] flex justify-center items-center gap-2 transition hover:bg-mohana/50"
          >
            <PlusIcon />
            Agregar nuevo producto
          </Link>
        </article>
      </section>
      {products.length > 0 && <Filter />}
    </header>
  )
}
