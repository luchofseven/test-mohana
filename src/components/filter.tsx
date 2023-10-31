'use client'
import { CATEGORYS } from '@/const/categorys'
import { useCategory } from '@/context/category-context'

export default function Filter () {
  const { setCategory } = useCategory()

  return (
    <section className="w-full flex flex-col items-center mt-10 gap-4 text-sm">
      <h4 className="font-bold">Filtrar por tipo</h4>
      <select
        onChange={(e) => {
          setCategory(e.target.value)
        }}
        className="border border-mohana text-mohana font-bold px-4 py-2 rounded-md"
      >
        <option value="All">Todos</option>
        {CATEGORYS.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          )
        })}
      </select>
    </section>
  )
}
