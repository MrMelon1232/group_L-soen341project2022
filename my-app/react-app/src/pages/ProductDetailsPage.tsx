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
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import agent from '../ApiCall/agent'
import { useECommerceContext } from '../Context/ECommerceContext'
import { Product } from '../models/Product'

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = React.useState<Product | null>(null)
  const [loading, setLoading] = React.useState(true)
  const { cart, setCart, removeItem } = useECommerceContext()

  React.useEffect(() => {
    if (id)
      agent.Catalog.details(parseInt(id, 10))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  }, [id])

  const addOneItem = () => {
    setLoading(true)
    if (product) {
      agent.Cart.addItem(product?.id, 1)
        .then((item) => setCart(item))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }

  const subOneItem = () => {
    setLoading(true)
    if (product) {
      agent.Cart.removeItem(product?.id, 1)
        .then(() => removeItem(product?.id, 1))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
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

  if (loading) return <h3>Loading...</h3>

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
                <Box>
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
