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
import * as EmailValidator from 'email-validator'
import React, { Component } from 'react'

interface IProps {
  email: string
  password: string
}

const Login: React.FC<IProps> = (props) => {
  const [email, setEmail] = React.useState<string>('')

  const hasError = React.useMemo(
    () => EmailValidator.validate(email),
    [props, props.children, props.email]
  )
  React.useEffect(() => {
    console.log('hello')
  }, [])

  return (
    <Grid>
      <Paper
        style={{ padding: 20, height: '73vh', width: 330, margin: '0 auto' }}
      >
        <Grid>
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
          onChange={(e) => setEmail(e.target.value)}
          error={hasError}
          value={props.email}
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
        <Button type="submit" color="primary" variant="contained" fullWidth>
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

export default Login
