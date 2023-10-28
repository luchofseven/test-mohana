import Hero from '@/components/hero-front'
import Navbar from '@/components/navbar-front'
import ProductsContainer from '../containers/products'
import Footer from '@/components/footer-front'

export default function Home () {
  return (
    <>
      <Navbar />
      <main className="mt-20 w-full font-poppins min-w-[330px] max-w-[350px] max-w-auto my-4 m-auto">
        <Hero />
        <ProductsContainer />
      </main>
      <Footer />
    </>
  )
}
