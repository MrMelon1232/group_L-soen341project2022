import {
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import agent from '../../ApiCall/agent'
import { useECommerceContext } from '../../Context/ECommerceContext'
import { Cart } from '../../models/CartModel'
import { Product } from '../../models/Product'
import ProductCard from './ProductCard'

interface IProps {
  updateCart?: React.ReactNode
}

const CartComponent: React.FC<IProps> = (props) => {
  const { cart, setCart, removeItem } = useECommerceContext()

  console.log('listCart', cart)

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
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartComponent
