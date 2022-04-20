/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import agent from '../../ApiCall/agent'
import { Cart } from '../../models/CartModel'
import getCookie from '../../utils/getCookie'

interface CartState {
  cart: Cart | null
  status: string
}

const initialState: CartState = {
  cart: null,
  status: 'idle',
}

export const fetchCartAsync = createAsyncThunk<Cart>(
  'cart/fetchCartAsync',
  async (_, thunkAPI) => {
    try {
      return await agent.Cart.get()
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  },
  {
    condition: () => {
      if (!getCookie('customerId')) return false
      return undefined
    },
  }
)

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
  { productId: number; quantity: number }
>('cart/removeCartItemAsync', async ({ productId, quantity }, thunkAPI) => {
  try {
    await agent.Cart.removeItem(productId, quantity)
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data })
  }
  return undefined
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
    builder.addCase(removeCartItemAsync.pending, (state, action) => {
      state.status = `pendingRemoveItem${action.meta.arg.productId}`
    })
    builder.addCase(removeCartItemAsync.fulfilled, (state, action) => {
      const { productId, quantity } = action.meta.arg
      const itemIndex = state.cart?.items.findIndex(
        (e) => e.productId === productId
      )
      if (itemIndex === -1 || itemIndex === undefined) return
      state.cart!.items[itemIndex].quantity -= quantity
      if (state.cart?.items[itemIndex].quantity === 0)
        state.cart.items.splice(itemIndex, 1)
      state.status = 'idle'
    })
    builder.addCase(removeCartItemAsync.rejected, (state) => {
      state.status = 'idle'
    })
    builder.addMatcher(
      isAnyOf(addCartItemAsync.fulfilled, fetchCartAsync.fulfilled),
      (state, action) => {
        state.cart = action.payload
        state.status = 'idle'
      }
    )
    builder.addMatcher(
      isAnyOf(addCartItemAsync.rejected, fetchCartAsync.rejected),
      (state, action) => {
        state.status = 'idle'
        console.log(action.payload)
      }
    )
  },
})

export const { setCart } = cartSlice.actions
