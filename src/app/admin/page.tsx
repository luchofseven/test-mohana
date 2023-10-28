'use client'
import { useEffect } from 'react'

export default function Admin () {
  useEffect(() => {
    document.title = 'Admin Mohana - Bienvenido'
  }, [])

  return (
    <main className="min-h-screen w-full overflow-hidden ml-[15%] max-w-[85%] flex justify-center items-center">
      <h1 className="text-center text-5xl font-poppins font-bold bg-mohana px-20 py-6 rounded-full">
        ¡Bienvenido!
      </h1>
    </main>
  )
}
