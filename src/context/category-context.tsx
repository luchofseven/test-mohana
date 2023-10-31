'use client'
import { type ReactNode, createContext, useState, useContext } from 'react'
import { type ContextCategoryData } from '@/types'

// Este es el que tenemos que consumir
export const CategoryContext = createContext<ContextCategoryData | undefined>(
  undefined
)

export const useCategory = () => {
  const context = useContext(CategoryContext)
  if (context == null) {
    throw new Error('useProducts must used within a provider.')
  }
  return context
}

// Este es el que nos provee de acceso al contexto
export function FilterProvider ({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState('All')

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
