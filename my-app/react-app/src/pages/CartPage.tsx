import { Add, Delete, Remove } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import agent from '../ApiCall/agent'
import CartComponent from '../components/Shopping/CartComponent'
import ProductCard from '../components/Shopping/ProductCard'
import {
  addCartItemAsync,
  removeCartItemAsync,
  setCart,
} from '../components/Shopping/cartSlice'
import { Cart } from '../models/CartModel'
import { useAppDispatch, useAppSelector } from '../store/configureStore'

const CartPage = () => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)

  const [loading, setLoading] = React.useState<boolean>(false)

  function handleAddItem(productId: number) {
    dispatch(addCartItemAsync({ productId }))
  }

  function handleRemoveItem(productId: number, quantity = 1) {
    dispatch(removeCartItemAsync({ productId, quantity }))
  }

  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../images/${folder}/${path}`)
    } catch (err) {
      console.log('error occured', err)
      return null
    }
  }

  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`
  }

  const TAX_RATE = 0.07

  const subtotal =
    cart?.items
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => prev + curr, 0) ?? 0

  const invoiceTaxes = TAX_RATE * subtotal
  const invoiceTotal = invoiceTaxes + subtotal

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart ? (
            cart?.items?.map((item) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  <CardMedia
                    component="img"
                    image={tryRequire(item.imgUrl, 'Catalog/Laptops')}
                    title={item.name}
                    sx={{
                      height: '100px',
                      width: 'auto',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <LoadingButton
                    loading={loading}
                    onClick={() => handleAddItem(item.productId)}
                    color="secondary"
                  >
                    <Add />
                  </LoadingButton>
                  {item.quantity}
                  <LoadingButton
                    loading={loading}
                    onClick={() => handleRemoveItem(item.productId)}
                    color="secondary"
                  >
                    <Remove />
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">
                  {(item.quantity * item.price).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="error">
                    <LoadingButton
                      loading={loading}
                      onClick={() =>
                        handleRemoveItem(item.productId, item.quantity)
                      }
                      color="secondary"
                    >
                      <Delete />
                    </LoadingButton>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography>Your Cart is empty</Typography>
          )}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartPage
