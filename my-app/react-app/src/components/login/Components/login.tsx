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
import React from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [wrongEmail, setWrongEmail] = React.useState<boolean>(false)
  const [wrongPass, setWrongPass] = React.useState<boolean>(false)

  const validateEmail = React.useCallback(
    () =>
      setWrongEmail(
        !EmailValidator.validate(email) && email !== undefined && email !== ''
      ),
    [email]
  )

  React.useCallback(() => {
    if (!wrongEmail && !(password === null || password === undefined)) {
      console.log({ email, password })
    }
  }, [email, password, wrongEmail])

  return (
    <Grid>
      <Paper
        style={{ padding: 20, height: '73vh', width: 330, margin: '0 auto' }}
      >
        <Grid direction="column" display="flex" alignItems="center">
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
