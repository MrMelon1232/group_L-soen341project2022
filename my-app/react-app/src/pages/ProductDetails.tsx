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
import { Product } from '../models/Product'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = React.useState<Product | null>(null)
  const [loading, setLoading] = React.useState(true)

  const tryRequire = (path, folder) => {
    console.log(`../images${folder}/${path}`)
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../images/${folder}/${path}`)
    } catch (err) {
      console.log('hello')
      return null
    }
  }

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

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
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      m: '5px',
                      flexDirection: 'row-reverse',
                    }}
                  >
                    +
                  </Button>
                  <Button size="large" variant="contained">
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

export default ProductDetails
