import { useCart } from '@/context/cart-context'
import { AddToCartIcon } from '@/icons/icons'
import { type Product } from '@/types'

export default function ProductCardFront ({ product }: { product: Product }) {
  const { image, name, price } = product
  const { addToCart } = useCart()

  return (
        <article className='min-w-[150px] max-w-[150px] flex flex-col overflow-hidden'>
            <picture className='h-full'>
                <img
                    src={image}
                    alt={name}
                    className='w-full max-h-[250px] h-full object-cover'
                    />
            </picture>
            <div className='w-full flex flex-col font-jost gap-2 py-4 px-2 text-center'>
                <h3 className='text-xs text-bgMohana'>{name.toLocaleUpperCase()}</h3>
                <h5 className='text-xs font-bold text-bgMohana'>${price}</h5>
            </div>
            <button
            onClick={() => { addToCart(product) }}
            className='bg-mohana/10 border border-mohana py-2 flex justify-center items-center w-full text-mohana'>
                <AddToCartIcon />
            </button>
        </article>
  )
}
