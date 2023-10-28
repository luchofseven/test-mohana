'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useProducts } from '@/context/products-context'
import { type Product } from '@/types'

export default function ProductForm ({ mode, productData }: { mode: string, productData?: Product }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { addProduct, updateProduct } = useProducts()
  const router = useRouter()

  useEffect(() => {
    if (mode === 'edit' && productData !== undefined) {
      setName(productData.name)
      setDescription(productData.description)
      setCategory(productData.category)
      setImage(productData.image)
      setPrice(productData.price)
      setQuantity(productData.quantity)
    }
  }, [mode, productData])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const product = {
      name,
      description,
      category,
      image,
      price: Math.trunc(price),
      quantity: Math.trunc(quantity)
    }

    if (mode === 'create') {
      addProduct(product)
    } else if (productData?.id !== undefined) {
      updateProduct(productData.id, product)
    }

    setName('')
    setDescription('')
    setCategory('')
    setImage('')
    setPrice(0)
    setQuantity(1)

    router.push('/admin/products')
  }

  return (
    <form onSubmit={handleSubmit} className="m-auto max-w-5xl w-full mt-8">
      <div className="flex flex-col gap-8">
        <label
          htmlFor="name"
          className="text-center font-bold flex flex-col gap-2 text-mohana"
        >
          Nombre del producto:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder="Remera mangas princesa"
            required
            className="rounded-lg text-bgMohana h-10 w-full text-center"
          />
        </label>

        <label
          htmlFor="description"
          className="text-center font-bold flex flex-col gap-4 text-mohana"
        >
          Descripción del producto:
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            placeholder="Remera manga corta con detalles bordados."
            required
            className="rounded-lg text-bgMohana px-2 h-10 w-full text-start [text-wrap:balance] min-h-[150px] resize-none placeholder:text-center"
          />
        </label>

        <label
          htmlFor="category"
          className="text-center font-bold flex flex-col gap-4 text-mohana"
        >
          Categoría:
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
            required
            className="rounded-lg text-bgMohana h-10 w-full text-center"
          >
            <option value="">- - - - - - - - - - - - - - - - -</option>
            <option value="Buzos">Blazers</option>
            <option value="Blusas">Blusas</option>
            <option value="Buzos">Bodys</option>
            <option value="Buzos">Buzos</option>
            <option value="Buzos">Calzas</option>
            <option value="Camisas">Camisas</option>
            <option value="Buzos">Camperas</option>
            <option value="Buzos">Corsets</option>
            <option value="Jeans">Jeans</option>
            <option value="Buzos">Joggers</option>
            <option value="Buzos">Medias</option>
            <option value="Buzos">Musculosas</option>
            <option value="Buzos">Poleras</option>
            <option value="Buzos">Polleras</option>
            <option value="Remeras">Remeras</option>
            <option value="Buzos">Sastreros</option>
            <option value="Buzos">Shorts</option>
            <option value="Buzos">Sweaters</option>
            <option value="Buzos">Tops</option>
          </select>
        </label>

        <label
          htmlFor="image"
          className="text-center font-bold flex flex-col gap-4 text-mohana"
        >
          URL de imagen:
          <input
            type="url"
            name="image"
            id="image"
            value={image}
            onChange={(e) => { setImage(e.target.value) }}
            placeholder="https://example.com/product/remera-mangas-princesa.jpg"
            className="rounded-lg text-bgMohana h-10 w-full text-center"
          />
        </label>

        <label
          htmlFor="price"
          className="text-center font-bold flex flex-col gap-4 text-mohana"
        >
          Precio:
          <input
            name="price"
            type="number"
            id="price"
            value={price}
            onChange={(e) => { setPrice(Number(e.target.value)) }}
            min={0}
            required
            className="rounded-lg text-bgMohana h-10 w-full text-center"
          />
        </label>

        <label
          htmlFor="quantity"
          className="text-center font-bold flex flex-col gap-4 text-mohana"
        >
          Cantidad:
          <input
            name="quantity"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => { setQuantity(Number(e.target.value)) }}
            min={1}
            required
            className="rounded-lg text-bgMohana h-10 w-full text-center"
          />
        </label>

        <button className="bg-mohana min-w-[200px] m-auto py-2 rounded-full lg:transition lg:duration-300 lg:hover:scale-105 font-bold text-sm">
          {mode === 'edit' ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  )
}
