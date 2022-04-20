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
import { useECommerceContext } from '../../Context/ECommerceContext'
import { Product } from '../../models/Product'
import ProductsPage from '../../pages/ProductsPage'
import { useAppDispatch, useAppSelector } from '../../store/configureStore'
import { setCart, addCartItemAsync, removeCartItemAsync } from './cartSlice'

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
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state) => state.cart)

  const addItem = () => {
    dispatch(addCartItemAsync({ productId: product.id, quantity: amount }))
  }

  const addOneItem = () => {
    dispatch(addCartItemAsync({ productId: product.id }))
  }

  function subOneItem() {
    dispatch(removeCartItemAsync({ productId: product.id, quantity: 1 }))
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
            <Button
              size={mini ? 'small' : 'medium'}
              onClick={() => (mini ? addOneItem() : addAmount())}
            >
              +
            </Button>
            {mini ? product.quantity : amount}
            <Button
              size={mini ? 'small' : 'medium'}
              onClick={() => (mini ? subOneItem() : subAmount())}
            >
              -
            </Button>
            {mini ? undefined : (
              <LoadingButton
                size={mini ? 'small' : 'medium'}
                onClick={() => addItem()}
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
          {!mini ? (
            <Typography
              component="div"
              ml={3}
              sx={{ flexDirection: 'column-reverse' }}
            >
              {`Quantity left: ${product.quantity}`}
            </Typography>
          ) : undefined}
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCard
