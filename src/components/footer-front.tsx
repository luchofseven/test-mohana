import Link from 'next/link'
import { AtIcon, InstagramIcon, PhoneIcon } from '@/icons/icons'

export default function Footer () {
  return (
    <>
      <footer className="bg-mohana/20 px-6 py-4 w-full text-bgMohana font-poppins">
        <h2 className="uppercase font-bold text-sm">Navegación</h2>
        <div className="w-full flex flex-wrap gap-y-4 my-4">
          <Link href="/" className="w-[50%] text-sm">
            Inicio
          </Link>
          <Link href="/products" className="w-[50%] text-sm">
            Productos
          </Link>
          <Link href="/contact" className="w-[50%] text-sm">
            Contacto
          </Link>
        </div>
        <h2 className="uppercase font-bold text-sm">Contactanos</h2>
        <div className="w-full flex flex-col justify-center items-start my-4 gap-y-4">
          <a
            href="tel:+543483490526"
            className="flex items-center gap-2 text-sm"
          >
            <PhoneIcon />
            +543483490526
          </a>
          <a
            href="mailto:contacto@mohanaindumentaria.com.ar"
            className="flex items-center gap-2 text-sm overflow-hidden"
          >
            <AtIcon />
            contacto@mohanaindumentaria.com.ar
          </a>
        </div>
        <h2 className="uppercase font-bold text-sm">Redes Sociales</h2>
        <div className="w-full mt-4">
          <a
            href="https://instagram.com/mohana.indum"
            rel="noreferrer"
            target="_blank"
            className="bg-white rounded-full w-8 h-8 flex justify-center items-center text-mohana/50"
          >
            <InstagramIcon />
          </a>
        </div>
      </footer>
      <aside className="bg-white w-full text-center text-xs font-poppins py-1">
        <span>
          Creado por{' '}
          <a
            href="https://www.luchofseven.com.ar"
            rel="noreferrer"
            target="_blank"
            className="font-bold text-mohana/50"
          >
            @luchofseven
          </a>
        </span>
      </aside>
    </>
  )
}
