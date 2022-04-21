import { Cart } from './CartModel'

export interface User {
  email: string
  token: string
  cart?: Cart
  roles?: string[]
}
