'use client'
import { useEffect } from 'react'

export default function Admin () {
  useEffect(() => {
    document.title = 'Admin Mohana - Bienvenido'
  }, [])

  return (
      <main className="min-h-screen w-full overflow-hidden lg:ml-[15%] lg:max-w-[85%] flex items-start justify-center lg:items-center">
        <h1 className="text-center lg:text-5xl font-poppins font-bold bg-mohana  px-10 py-4 mt-20 lg:mt-0 lg:px-20 lg:py-6 rounded-full">
          ¡Bienvenido!
        </h1>
      </main>
  )
}
