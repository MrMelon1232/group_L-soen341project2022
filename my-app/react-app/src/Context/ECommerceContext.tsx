import React, { createContext, PropsWithChildren, useContext } from 'react'
import { Cart } from '../models/CartModel'

interface ECommerceContextValue {
  cart: Cart | null
  setCart: (cart: Cart) => void
  removeItem: (productId: number, quantity: number) => void
}

export const ECommerceContext = createContext<
  ECommerceContextValue | undefined
>(undefined)

export function useECommerceContext() {
  const context = useContext(ECommerceContext)

  if (context === undefined) {
    throw Error('Error using the context')
  }

  return context
}

// eslint-disable-next-line react/function-component-definition
export function ECommerceProvider({ children }: PropsWithChildren<any>) {
  const [cart, setCart] = React.useState<Cart | null>(null)

  function removeItem(productId: number, quantity: number) {
    if (!cart) return
    const items = [...cart.items]
    const itemIndex = items.findIndex((i) => i.productId === productId)
    if (itemIndex >= 0) {
      items[itemIndex].quantity -= quantity
      if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1)
      setCart((prevState) => ({ ...prevState!, items }))
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ECommerceContext.Provider value={{ cart, setCart, removeItem }}>
      {children}
    </ECommerceContext.Provider>
  )
}
