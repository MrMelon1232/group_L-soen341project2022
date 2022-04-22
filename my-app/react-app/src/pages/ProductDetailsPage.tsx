import { LoadingButton } from '@mui/lab'
import {
  Button,
  CardMedia,
  Divider,
  Grid,
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { EntityId } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import agent from '../ApiCall/agent'
import {
  removeCartItemAsync,
  addCartItemAsync,
} from '../components/Shopping/cartSlice'
import { Product } from '../models/Product'
import { useAppDispatch, useAppSelector } from '../store/configureStore'
import { fetchProductAsync, productSelectors } from './Products/catalogSlice'

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  //const [product, setProduct] = React.useState<Product | null>(null)
  const product = useAppSelector((state) =>
    productSelectors.selectById(state, id as EntityId)
  )

  const [loading, setLoading] = React.useState(true)
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)
  const { status: productStatus } = useAppSelector((state) => state.catalog)

  const arr = parseInt('5', 10)

  React.useEffect(() => {
    if (id) if (!product) dispatch(fetchProductAsync(parseInt(id, 10)))
  }, [dispatch, id, product])

  const addOneItem = () => {
    if (product?.id) dispatch(addCartItemAsync({ productId: product.id }))
  }

  const subOneItem = () => {
    if (product?.id)
      dispatch(removeCartItemAsync({ productId: product.id, quantity: 1 }))
  }

  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../images/${folder}/${path}`)
    } catch (err) {
      console.log('error importing image', err)
      return null
    }
  }

  const quantity = cart?.items.find(
    (item) => item.productId === product?.id
  )?.quantity

  if (!product) return <h3>Product not found</h3>

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardMedia
          component="img"
          image={tryRequire(product.imgUrl, 'Catalog/Laptops')}
          title={product.name}
          sx={{
            height: '480px',
            width: 'auto',
            marginLeft: '5%',
            maxHeight: '480px',
            maxWidth: '900px',
          }}
        />
      </Grid>
      <Grid item xs={4} sx={{ marginLeft: '5%' }}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4">${product.price.toFixed(2)}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>{product.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity</TableCell>
                <TableCell>{product.quantity}</TableCell>
              </TableRow>
              <TableRow>
                <Box display="flex">
                  <Button size="medium" onClick={addOneItem}>
                    +
                  </Button>
                  {quantity}
                  <Button size="medium" onClick={subOneItem}>
                    -
                  </Button>
                </Box>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ProductDetailsPage
