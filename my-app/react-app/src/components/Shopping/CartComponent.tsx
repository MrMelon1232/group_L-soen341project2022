import {
  Button,
  CircularProgress,
  Grid,
  Link,
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
import agent from '../../ApiCall/agent'
import { useECommerceContext } from '../../Context/ECommerceContext'
import { Cart } from '../../models/CartModel'
import { Product } from '../../models/Product'
import { useAppSelector } from '../../store/configureStore'
import ProductCard from './ProductCard'

interface IProps {
  updateCart?: React.ReactNode
}

const CartComponent: React.FC<IProps> = (props) => {
  const { cart } = useAppSelector((state) => state.cart)

  const subtotal =
    cart?.items
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => prev + curr, 0) ?? 0

  const subtotalStr = `Subtotal: ${subtotal.toFixed(2)}`
  const cartRedirectStr = 'Proceed to checkout'

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart
            ? cart?.items?.map((item) => (
                <TableRow>
                  <TableCell>
                    <ProductCard
                      product={{
                        id: item.productId,
                        name: item.name,
                        price: item.price,
                        description: '',
                        category: '',
                        quantity: item.quantity,
                        imgUrl: item.imgUrl,
                      }}
                      key={item.productId}
                      mini
                    />
                  </TableCell>
                </TableRow>
              ))
            : undefined}
          <TableRow>
            <Typography textAlign="left" variant="subtitle1">
              {subtotalStr}
            </Typography>
          </TableRow>
          <TableRow>
            <Link href="/Cart">
              <Button variant="contained" size="small">
                {cartRedirectStr}
              </Button>
            </Link>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartComponent
