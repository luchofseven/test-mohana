'use client'
import { useState } from 'react'
import { OpenIcon, CloseIcon, CartIcon } from '@/icons/icons'
import Link from 'next/link'
import { useCart } from '@/context/cart-context'

export default function Navbar () {
  const [menu, setMenu] = useState(false)
  const { cart } = useCart()

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <>
      <header className="bg-white text-bgMohana w-full h-20 fixed top-0 left-0 right-0 flex justify-between items-center px-6 border-b border-bgMohana/20">
        <button onClick={handleClick}>
          {menu ? <CloseIcon /> : <OpenIcon />}
        </button>
        <picture>
          <Link
            href="/"
            onClick={() => {
              setMenu(false)
            }}
          >
            <img
              src="/logo-sticker.png"
              alt="Mohana Logo"
              className="w-[50px] h-[50px]"
            />
          </Link>
        </picture>
          <Link href="/cart" className='relative flex justify-center items-center'>
            <CartIcon />
            <span className='font-poppins absolute left-6'>{cart.length}</span>
          </Link>
      </header>
      <nav
        className={`bg-white/50 backdrop-blur-md fixed top-20 bottom-0 left-0 right-0 flex flex-col items-center font-poppins ${
          menu ? 'translate-y-[0]' : 'translate-y-[100%]'
        } transition duration-500`}
      >
        <div className="flex flex-col items-center mt-10 gap-12 w-full h-full overflow-y-auto text-bgMohana">
          <Link
            href="/"
            className="w-full text-center font-bold text-sm"
            onClick={() => {
              setMenu(false)
            }}
          >
            INICIO
          </Link>
          <Link
            href="/products"
            className="w-full text-center font-bold text-sm"
            onClick={() => {
              setMenu(false)
            }}
          >
            PRODUCTOS
          </Link>
          <Link
            href="/contact"
            className="w-full text-center font-bold text-sm"
            onClick={() => {
              setMenu(false)
            }}
          >
            CONTACTO
          </Link>
        </div>
      </nav>
    </>
  )
}
