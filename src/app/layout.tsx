import './globals.css'
import type { Metadata } from 'next'
import { Jost, Poppins, Libre_Franklin } from 'next/font/google'

const franklin = Libre_Franklin({
  weight: ['300', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--franklin'
})

const jost = Jost({
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  variable: '--jost'
})

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
      <body className={`${jost.variable} ${poppins.variable} ${franklin.variable}`}>{children}</body>
    </html>
  )
}
