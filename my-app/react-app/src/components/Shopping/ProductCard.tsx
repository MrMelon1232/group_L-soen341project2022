import { ProductionQuantityLimitsSharp } from '@mui/icons-material'
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
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../models/Product'
import Products from '../../pages/Products'

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

  const [amount, setAmount] = useState(1)

  const addAmount = () => {
    setAmount((count) => count + 1)
  }

  const subAmount = () => {
    if (amount > 1) {
      setAmount((count) => count - 1)
    }
  }

  return (
    <Card sx={{ minHeight: '400px' }}>
      <CardMedia
        component="img"
        image={tryRequire(product.imgUrl, 'Catalog/Laptops')}
        title={product.name}
        sx={{
          maxHeight: '200px',
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '200px',
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          overflow="hidden"
          sx={{ maxHeight: '60px' }}
        >
          {product.name}
        </Typography>
        <Typography component="div">{`Price: ${product.price}`}</Typography>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Button size="medium" onClick={addAmount}>
            +
          </Button>
          <span className="quantityCounter">{amount}</span>
          <Button size="medium" onClick={subAmount}>
            -
          </Button>
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
