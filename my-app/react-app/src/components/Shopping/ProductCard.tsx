import {
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
  mini?: boolean
}

const ProductCard: React.FC<IProps> = ({ product, mini }) => {
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
          height: mini ? '80px' : '200px',
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <CardContent>
        <Typography variant={mini ? 'subtitle2' : 'h6'} component="div">
          {product.name}
        </Typography>
        <Typography component="div">{`Price: ${product.price}`}</Typography>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            marginLeft: mini ? '0' : 'auto',
            marginRight: mini ? '0' : 'auto',
          }}
        >
          <Button size={mini ? 'small' : 'medium'}>+</Button>
          <Button size={mini ? 'small' : 'medium'}>-</Button>
          <Button component={Link} to={`/Products/${product.id}`} size="medium">
            View
          </Button>
          {!mini ? (
            <Button variant="contained" size="small">
              Share
            </Button>
          ) : undefined}
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCard
