import NavbarAdmin from '@/components/navbar-admin'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Mohana',
  description: 'Administrador de productos de Mohana Indumentaria.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <NavbarAdmin />
        {children}
      </body>
    </html>
  )
}
