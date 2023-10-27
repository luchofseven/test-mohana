import Link from 'next/link'
import { type Product } from '@/types'
import useProducts from '@/hooks/use-products'

export default function ProductCard ({ product }: { product: Product }) {
  const { id, name, image, price, quantity } = product
  const { deleteProduct } = useProducts()

  if (id == null) throw new Error('id no encotrada.')

  return (
    <>
      <article className="bg-white text-bgMohana w-full max-h-[60px] flex items-center rounded-lg overflow-hidden">
        <div className="w-[60px] h-[60px] overflow-hidden flex justify-center items-center">
          <img src={image} alt={name} className="object-contain w-full h-full" />
        </div>
        <div className="h-full w-full flex items-center justify-between px-4">
          <h2 className=" text-sm font-bold text-start w-[20%] overflow-hidden">{name}</h2>
          <p className="text-sm w-[15%] text-start font-bold">
            <span className="text-mohana font-bold">Precio:</span> $ {price}
          </p>
          <p className="text-sm w-[15%] text-start font-bold">
            <span className="text-mohana font-bold">Stock:</span> {quantity}{' '}
            unidades
          </p>
        </div>
        <div className="flex justify-end items-center gap-4 px-4 font-bold text-white">
          <Link
            href={`/admin/products/edit/${id}`}
            className="bg-green-500 py-2 px-4 rounded-lg text-sm hover:scale-105 transition"
          >
            Editar
          </Link>
          <button
            className="bg-red-500 py-2 px-6 rounded-lg text-sm hover:scale-105 transition"
            onClick={() => { deleteProduct(id) }}
          >
            Eliminar
          </button>
        </div>
      </article>
    </>
  )
}
