import {
  Grid,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from '@mui/material'
import React, { Component } from 'react'

// eslint-disable-next-line react/function-component-definition
const ProfilePage = () => {
  const [account, setAccount] = React.useState(true)

  const handleAccount = () => {
    setAccount(!account)
  }

  const [billing, setBilling] = React.useState(true)

  const handleBilling = () => {
    setBilling(!billing)
  }

  const [shipping, setShipping] = React.useState(true)

  const handleShipping = () => {
    setShipping(!shipping)
  }

  const [date, setDate] = React.useState('')

  const handleChange = (event) => {
    setDate(event.target.value)
  }

  return (
    <>
      <Typography variant="h2">Your Account</Typography>
      <Box sx={{ marginLeft: '45px', marginRight: '50px', marginTop: 2 }}>
        <Grid sx={{ marginBottom: 5 }}>
          <Typography variant="h4">User account information</Typography>
          <Paper style={{ padding: 10 }}>
            <Grid item sx={{ marginBottom: 2 }}>
              <Grid item>
                <TextField
                  sx={{ marginBottom: 2 }}
                  label="Username"
                  placeholder="Username"
                  fullWidth
                  InputProps={{
                    readOnly: account,
                  }}
                  type="username"
                />
                <TextField
                  label="Email"
                  placeholder="Change Email"
                  fullWidth
                  InputProps={{
                    readOnly: account,
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Typography variant="h4">Shipping information</Typography>
          <Paper style={{ padding: 10, marginBottom: 10 }}>
            <TextField
              sx={{ marginBottom: 2 }}
              label="Full name"
              placeholder="Change name"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="Country"
              placeholder="Change Country"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="Address"
              placeholder="Change Address"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="City"
              placeholder="Change City"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="Province/Territory"
              placeholder="Change Province/Territory"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="Postal Code"
              placeholder="Change Postal Code"
              fullWidth
              InputProps={{
                readOnly: shipping,
              }}
            />
            {shipping ? (
              <Button onClick={handleShipping}>Edit</Button>
            ) : (
              <Button onClick={handleShipping}>Update</Button>
            )}
          </Paper>
        </Grid>

        <Grid>
          <h2>Billing information</h2>
          <Paper style={{ padding: 10 }}>
            <TextField
              sx={{ marginBottom: 2 }}
              label="Card Number"
              fullWidth
              InputProps={{
                readOnly: billing,
              }}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              label="Name on Card"
              fullWidth
              InputProps={{
                readOnly: billing,
              }}
            />
            <div>Expiration Date</div>:
            <FormControl>
              <Select
                value={date}
                label="Date"
                onChange={handleChange}
                readOnly={billing}
              >
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
            {billing ? (
              <Button onClick={handleBilling}>Edit</Button>
            ) : (
              <Button onClick={handleBilling}>Update</Button>
            )}
          </Paper>
        </Grid>
      </Box>
    </>
  )
}

export default ProfilePage
