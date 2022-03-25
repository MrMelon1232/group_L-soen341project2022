export interface CartItem {
  productId: number
  name: string
  price: number
  category: string
  quantity: number
  imgUrl: string
}

export interface Cart {
  id: number
  customerId: string
  items: CartItem[]
}
