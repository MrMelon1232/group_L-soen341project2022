import { Delete } from '@mui/icons-material'
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import agent from '../ApiCall/agent'
import CartComponent from '../components/Shopping/CartComponent'
import ProductCard from '../components/Shopping/ProductCard'
import { Cart } from '../models/CartModel'

const BasketPage = () => {
  const [listCart, setListCart] = React.useState<Cart | undefined>(undefined)
  const [loading, setLoading] = React.useState<boolean>(true)

  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../images/${folder}/${path}`)
    } catch (err) {
      console.log('error occured', err)
      return null
    }
  }

  React.useEffect(() => {
    agent.Cart.get()
      .then((list) => setListCart(list))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [loading])

  const [amount, setAmount] = React.useState(1)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <CircularProgress />
          ) : listCart ? (
            listCart?.items?.map((item) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  <CardMedia
                    component="img"
                    image={tryRequire(item.imgUrl, 'Catalog/Laptops')}
                    title={item.name}
                    sx={{
                      height: '100px',
                      width: 'auto',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  {(item.quantity * item.price).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : undefined}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasketPage
