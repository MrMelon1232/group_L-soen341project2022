import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Paper,
  Checkbox,
} from '@mui/material'
import React, { Component } from 'react'

const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 330,
    margin: '0 auto',
  }
  const headerStyle = { margin: 0 }
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}> Sign Up </h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="standard"
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Signup
