import { LoadingButton } from '@mui/lab'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from '@mui/material'
import React from 'react'
import agent from '../../ApiCall/agent'
import { Order } from '../../models/order'

export function currencyFormat(amount: number) {
  return `$${(amount / 100).toFixed(2)}`
}

const OrderPage = () => {
  const [orders, setOrders] = React.useState<Order[] | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    agent.Orders.list()
      .then((o) => setOrders(o))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <CircularProgress color="inherit" />

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order number</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Order Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders &&
            orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="right">
                  {currencyFormat(order.total)}
                </TableCell>
                <TableCell align="right">
                  {order.orderDate.toString().split('T')[0]}
                </TableCell>
                <TableCell align="right">{order.orderStatus}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderPage
