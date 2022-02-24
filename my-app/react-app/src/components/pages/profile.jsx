import { Grid, Paper, TextField } from '@mui/material'
import React, { Component } from 'react'

export default function profile() {
  const [value] = React.useState(false)

  return (
    <div>
      <h1>Your Account</h1>

      <Grid>
        <h2>User account information</h2>
        <TextField
          label="Email"
          placeholder="Change Email"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Password"
          placeholder="Password"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          type="password"
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm Password"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          type="password"
        />
      </Grid>
    </div>
  )
}
