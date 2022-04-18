import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'
import { cartSlice } from '../components/Shopping/cartSlice'
import { counterSlice } from '../pages/Contact/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
