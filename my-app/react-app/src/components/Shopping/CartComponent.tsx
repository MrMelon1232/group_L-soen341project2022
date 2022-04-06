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
import { Cart } from '../../models/CartModel'
import { Product } from '../../models/Product'
import ProductCard from './ProductCard'

interface IProps {
  updateCart?: React.ReactNode
}

const CartComponent: React.FC<IProps> = (props) => {
  const [listCart, setListCart] = React.useState<Cart | undefined>(undefined)
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    agent.Cart.get()
      .then((list) => setListCart(list))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [loading])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <CircularProgress />
          ) : listCart ? (
            listCart?.items?.map((item) => (
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
          ) : undefined}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartComponent
