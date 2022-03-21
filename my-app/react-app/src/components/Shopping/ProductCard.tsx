import { ProductionQuantityLimitsSharp } from '@mui/icons-material'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
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

  const cardStyle = (theme) => ({
    Card: {
      height: 200,
      margin: 'auto',
    },
    Media: {
      height: '100%',
      width: '100%',
    },
  })

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
        <Button size="medium" onClick={addAmount}> + </Button>
        <span className="quantityCounter">{amount}</span>
        <Button size="medium" onClick={subAmount}>-</Button>
        <Button variant="contained">Add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
