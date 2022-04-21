export interface ShippingAddress {
  fullName: string
  country: string
  detailedAddress: string
  city: string
  province: string
  postalCode: string
}

export interface OrderItem {
  productId: number
  name: string
  imgUrl: string
  price: number
  quantity: number
}

export interface RootObject {
  id: number
  customerId: string
  shippingAddress: ShippingAddress
  orderDate: Date
  orderItems: OrderItem[]
  subtotal: number
  orderStatus: string
  total: number
}
