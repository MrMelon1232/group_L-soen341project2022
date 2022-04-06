import { ProductionQuantityLimitsSharp } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import agent from '../../ApiCall/agent'
import { Product } from '../../models/Product'
import ProductsPage from '../../pages/ProductsPage'

interface IProps {
  product: Product
  mini?: boolean
}

const ProductCard: React.FC<IProps> = ({ product, mini }) => {
  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../images/${folder}/${path}`)
    } catch (err) {
      console.log('error occured', err)
      return null
    }
  }

  const [amount, setAmount] = useState(1)
  const [loading, setLoading] = React.useState(false)

  const addItem = (productId: number) => {
    setLoading(true)
    agent.Cart.addItem(productId, amount)
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  const addAmount = () => {
    setAmount((count) => count + 1)
  }

  const subAmount = () => {
    if (amount > 1) {
      setAmount((count) => count - 1)
    }
  }

  return (
    <Card sx={{ minHeight: mini ? '0px' : '400px' }}>
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
        <Typography
          variant={mini ? 'subtitle2' : 'h6'}
          component="div"
          overflow="hidden"
          sx={{ height: '60px' }}
        >
          {product.name}
        </Typography>
        <Typography component="div">{`Price: ${product.price}`}</Typography>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ flexDirection: 'column' }}>
          <Box
            sx={{
              marginLeft: mini ? '0' : 'auto',
              marginRight: mini ? '0' : 'auto',
              display: 'flex',
            }}
          >
            <Button size={mini ? 'small' : 'medium'} onClick={addAmount}>
              +
            </Button>
            {amount}
            <Button size={mini ? 'small' : 'medium'} onClick={subAmount}>
              -
            </Button>
            {mini ? undefined : (
              <LoadingButton
                size={mini ? 'small' : 'medium'}
                onClick={() => addItem(product.id)}
                loading={loading}
              >
                Add
              </LoadingButton>
            )}
            <Button
              component={Link}
              to={`/Products/${product.id}`}
              size="medium"
            >
              View
            </Button>
            {!mini ? (
              <Button variant="contained" size="small">
                Share
              </Button>
            ) : undefined}
          </Box>
          <Typography
            component="div"
            ml={3}
            sx={{ flexDirection: 'column-reverse' }}
          >
            {mini
              ? `Quantity: ${product.quantity}`
              : `Quantity left: ${product.quantity}`}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCard
