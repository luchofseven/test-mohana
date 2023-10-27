import { BoardIcon, PlusIcon } from '@/icons/icons'
import Link from 'next/link'

export default function NavbarAdmin () {
  return (
    <header className="bg-white text-bgMohana font-poppins w-[15%] fixed top-0 left-0 bottom-0">
      <section>
        <h1 className="text-3xl font-bold text-center mt-4">
          ADMIN <span className="text-mohana block">MOHANA</span>
        </h1>
      </section>
      <section className="mt-4 w-full flex flex-col items-center">
        <h2 className="font-bold mb-8 text-sm text-center">
          ¿Qué acción deseas realizar?
        </h2>
        <article className="w-full flex flex-col gap-2 justify-center items-center">
          <Link
            href="/admin/products"
            className="bg-mohana text-white text-sm w-full h-[50px] flex justify-center items-center gap-2 transition hover:bg-mohana/50"
          >
            <BoardIcon />
            Ver productos
          </Link>
          <Link
            href="/admin/products/new"
            className="bg-mohana text-white text-sm w-full h-[50px] flex justify-center items-center gap-2 transition hover:bg-mohana/50"
          >
            <PlusIcon />
            Agregar nuevo producto
          </Link>
        </article>
      </section>
    </header>
  )
}
