import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardMedia,
} from '@mui/material'
import React from 'react'
import { CartItem } from '../../models/CartModel'
import { useAppDispatch, useAppSelector } from '../../store/configureStore'

interface IProps {
  items: CartItem[]
  isCart?: boolean
}

const CartTable = ({ items, isCart }: IProps) => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)

  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../images/${folder}/${path}`)
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
    <Table sx={{ maxWidth: 200 }} aria-label="simple table">
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
        {items?.map((item) => (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">
              <CardMedia
                component="img"
                image={tryRequire(item.imgUrl, 'Catalog/Laptops')}
                title={item.name}
                sx={{
                  height: '50px',
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
            <TableCell align="right">{item.quantity}</TableCell>
            <TableCell align="right">
              {(item.quantity * item.price).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
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
      </TableBody>
    </Table>
  )
}

export default CartTable
