import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import { Product } from '../../models/Product'
import ProductCard from './ProductCard'

interface IProps {
  products: Product[] | null
  addProduct?: () => void
}

const Catalog: React.FC<IProps> = ({ products, addProduct }) => (
  <Box>
    <Grid spacing={4} container rowSpacing={2} columnSpacing={2}>
      {products?.map((item) => (
        <Grid item spacing={2} xs={3}>
          <ProductCard product={item} key={item.id} />
        </Grid>
      ))}
    </Grid>
    <Button onClick={addProduct} type="button">
      Add Products
    </Button>
  </Box>
)

export default Catalog
