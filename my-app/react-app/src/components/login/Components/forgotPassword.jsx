import { Button, Grid, Paper, TextField, Typography, Link } from '@mui/material'
import EmailValidator from 'email-validator'
import React, { Component } from 'react'

const ForgotPassword = () => {
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [wrongEmail, setWrongEmail] = React.useState(false)

  const validateEmail = React.useCallback(
    () =>
      setWrongEmail(
        !EmailValidator.validate(email) && email !== undefined && email !== ''
      ),
    [email]
  )

  const doSubmit = React.useCallback(() => {
    if (
      password !== passwordConfirm ||
      !(password === null || password === undefined) ||
      !wrongEmail
    ) {
      console.log('Password does not match or wrong email')
    }
  }, [passwordConfirm, password, wrongEmail, email])

  return (
    <Grid>
      <Paper
        style={{ padding: 20, height: '73vh', width: 330, margin: '0 auto' }}
      >
        <Grid direction="column" display="flex" alignItems="center">
          <h2>Forgot Password</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          error={wrongEmail}
          value={wrongEmail ? email : undefined}
          onBlur={validateEmail}
        />
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
          Submit
        </Button>
      </Paper>
    </Grid>
  )
}
export default ForgotPassword
