import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../models/Product'

interface IProps {
  product: Product
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const tryRequire = (path, folder) => {
    console.log(`../../images/${folder}/${path}`)
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../images/${folder}/${path}`)
    } catch (err) {
      console.log('hello')
      return null
    }
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={tryRequire(product.imgUrl, 'Catalog/Laptops')}
        title={product.name}
        sx={{
          height: '200px',
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography component="div">{`Price: ${product.price}`}</Typography>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Button size="medium">+</Button>
          <Button size="medium">-</Button>
          <Button component={Link} to={`/Products/${product.id}`} size="medium">
            View
          </Button>
          <Button variant="contained" size="small">
            Share
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCard
