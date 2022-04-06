import {
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
import { Cart } from '../../models/CartModel'
import ProductCard from './ProductCard'

interface IProps {
  listOfProducts?: Cart
}

const CartComponent: React.FC<IProps> = ({ listOfProducts }: IProps) => (
  <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 300 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Products</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listOfProducts?.items?.map((item) => (
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
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default CartComponent
