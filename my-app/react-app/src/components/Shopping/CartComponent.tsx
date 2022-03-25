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
import agent from '../../ApiCall/agent'
import { Cart } from '../../models/CartModel'
import { Product } from '../../models/Product'
import ProductCard from './ProductCard'

interface IProps {
  listOfProducts?: React.ReactNode
}

const CartComponent: React.FC<IProps> = (props) => {
  const [listCart, setListCart] = React.useState<Cart | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    agent.Cart.get()
      .then((list) => setListCart(list))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listCart?.items?.map((item) => (
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
}

export default CartComponent
