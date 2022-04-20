/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import agent from '../../ApiCall/agent'
import { Cart } from '../../models/CartModel'

interface CartState {
  cart: Cart | null
  status: string
}

const initialState: CartState = {
  cart: null,
  status: 'idle',
}

export const addCartItemAsync = createAsyncThunk<
  Cart,
  { productId: number; quantity?: number }
>('cart/addCartItemAsync', async ({ productId, quantity = 1 }) => {
  try {
    return await agent.Cart.addItem(productId, quantity)
  } catch (error) {
    console.log(error)
  }
  return undefined
})

export const removeCartItemAsync = createAsyncThunk<
  void,
  { productId: number; quantity?: number }
>('cart/removeCartItemAsync', async ({ productId, quantity = 1 }) => {
  try {
    await agent.Cart.removeItem(productId, quantity)
  } catch (error) {
    console.log(error)
  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCartItemAsync.pending, (state, action) => {
      console.log(action)
      state.status = 'pendingAddItem'
    })
    builder.addCase(addCartItemAsync.fulfilled, (state, action) => {
      state.cart = action.payload
      state.status = 'idle'
    })
    builder.addCase(addCartItemAsync.rejected, (state) => {
      state.status = 'idle'
    })
    builder.addCase(removeCartItemAsync.pending, (state, action) => {
      state.status = `pendingRemoveItem${action.meta.arg.productId}`
    })
    builder.addCase(removeCartItemAsync.fulfilled, (state, action) => {
      const { productId, quantity } = action.meta.arg
      const itemIndex = state.cart?.items.findIndex(
        (e) => e.productId === productId
      )
      if (itemIndex === 1 || itemIndex === undefined) return
      state.cart!.items[itemIndex].quantity -= quantity!
      if (state.cart?.items[itemIndex].quantity === 0)
        state.cart.items.splice(itemIndex, 1)
    })
    builder.addCase(removeCartItemAsync.rejected, (state) => {
      state.status = 'idle'
    })
  },
})

export const { setCart } = cartSlice.actions
