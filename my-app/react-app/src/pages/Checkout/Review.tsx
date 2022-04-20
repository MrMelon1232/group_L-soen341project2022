//https://github.com/mui/material-ui/blob/v5.6.2/docs/data/material/getting-started/templates/checkout/Review.tsx
import { Add, Remove, Delete } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardMedia,
  IconButton,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useAppSelector } from '../../store/configureStore'
import CartTable from './CartTable'

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA']
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]

const Review = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const subtotal =
    cart?.items
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => prev + curr, 0) ?? 0

  const TAX_RATE = 0.07

  const invoiceTaxes = TAX_RATE * subtotal
  const invoiceTotal = invoiceTaxes + subtotal

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {cart && <CartTable items={cart.items} isCart={false} />}
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`${invoiceTotal.toFixed(2)}$`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Review
