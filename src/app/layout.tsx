import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ProductsProvider } from '@/context/products-context'
import { FilterProvider } from '@/context/category-context'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--poppins'
})

export const metadata: Metadata = {
  title: 'Mohana Indumentaria',
  description: 'Tienda online de Mohana Indumentaria.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <ProductsProvider>
        <FilterProvider>
          <body className={`${poppins.variable}`}>{children}</body>
        </FilterProvider>
      </ProductsProvider>
    </html>
  )
}
