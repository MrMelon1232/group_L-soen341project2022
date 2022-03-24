import {
  Grid,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import React, { Component } from 'react'

// eslint-disable-next-line react/function-component-definition
export default function Profile() {
  const [account, setAccount] = React.useState(true)

  const handleAccount = () => {
    setAccount(!account)
  }

  const [billing, setBilling] = React.useState(true)

  const handleBilling = () => {
    setAccount(!billing)
  }

  const [shipping, setShipping] = React.useState(true)

  const handleShipping = () => {
    setAccount(!shipping)
  }

  const [date, setDate] = React.useState('')

  const handleChange = (event) => {
    setDate(event.target.value)
  }

  return (
    <div>
      <h1>Your Account</h1>

      <Grid>
        <h2>User account information</h2>
        <Paper style={{ padding: 10 }}>
          <TextField
            label="Email"
            placeholder="Change Email"
            fullWidth
            InputProps={{
              readOnly: account,
            }}
          />
          <TextField
            label="Password"
            placeholder="Password"
            fullWidth
            InputProps={{
              readOnly: account,
            }}
            type="password"
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm Password"
            fullWidth
            InputProps={{
              readOnly: account,
            }}
            type="password"
          />
          <Button onClick={handleAccount}>Update</Button>
        </Paper>
      </Grid>

      <Grid>
        <h2>Shipping information</h2>
        <Paper style={{ padding: 10 }}>
          <TextField
            label="Country"
            placeholder="Change Country"
            fullWidth
            InputProps={{
              readOnly: shipping,
            }}
          />
          <TextField
            label="Address"
            placeholder="Change Address"
            fullWidth
            InputProps={{
              readOnly: shipping,
            }}
          />
          <TextField
            label="City"
            placeholder="Change City"
            fullWidth
            InputProps={{
              readOnly: shipping,
            }}
          />
          <TextField
            label="Province/Territory"
            placeholder="Change Province/Territory"
            fullWidth
            InputProps={{
              readOnly: shipping,
            }}
          />
          <TextField
            label="Postal Code"
            placeholder="Change Postal Code"
            fullWidth
            InputProps={{
              readOnly: shipping,
            }}
          />
          <Button onClick={handleBilling}>Update</Button>
        </Paper>
      </Grid>

      <Grid>
        <h2>Billing information</h2>
        <Paper style={{ padding: 10 }}>
          <TextField
            label="Card Number"
            fullWidth
            InputProps={{
              readOnly: billing,
            }}
          />
          <TextField
            label="Name on Card"
            fullWidth
            InputProps={{
              readOnly: billing,
            }}
          />
          <div>Expiration Date</div>:
          <FormControl>
            <Select value={date} label="Date" onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Year"
            InputProps={{
              readOnly: billing,
            }}
          />
          <Button onClick={handleShipping}>Update</Button>
        </Paper>
      </Grid>
    </div>
  )
}
