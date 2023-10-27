'use client'
import { create } from 'zustand'
import { type Product, type State, type Actions } from '@/types'
import { devtools, persist } from 'zustand/middleware'

export const useCart = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product: Product) => {
          set((state) => ({ cart: [...state.cart, product] }))
        },
        removeAll: () => { set({ cart: [] }) }
      }),
      { name: 'bearStore' }
    )
  )
)
