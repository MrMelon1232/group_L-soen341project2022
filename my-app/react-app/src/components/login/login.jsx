import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material'
import React, { Component } from 'react'

const Login = () => {
  const paperstyle = {
    padding: 20,
    height: '73vh',
    width: 330,
    margin: '0 auto',
  }

  var validator = require('email-validator')
  const btnsyle = { margin: '8px 0' }

  return (
    <Grid>
      <Paper style={paperstyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          variant="standard"
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnsyle}
          fullWidth
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link href="#"> Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
