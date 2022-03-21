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

const ForgotPassword = () => {
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')

  const doSubmit = React.useCallback(() => {
    if (
      password !== passwordConfirm &&
      !(password === null || password === undefined)
    ) {
      console.log('Password does not match')
    }
  }, [passwordConfirm, password])

  return (
    <Grid>
      <Paper
        style={{ padding: 20, height: '73vh', width: 330, margin: '0 auto' }}
      >
        <Grid direction="column" display="flex" alignItems="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          required
          variant="standard"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={doSubmit}
        >
          Sign In
        </Button>
        <Typography>
          <Link href="/#">Forgot Password?</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link href="/#"> Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}
export default ForgotPassword
