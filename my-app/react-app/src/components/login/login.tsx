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
import EmailValidator from 'email-validator'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  loggedInProp: boolean
}

const Login: React.FC<IProps> = (props) => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [wrongEmail, setWrongEmail] = React.useState<boolean>(false)
  const [wrongPass, setWrongPass] = React.useState<boolean>(false)
  const [redirect, setRedirect] = React.useState<boolean>(false)
  const { loggedInProp } = props
  const [loggedIn, setLoggedIn] = React.useState<boolean>(loggedInProp)

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }

  const navigate = useNavigate()

  const validateEmail = React.useCallback(
    () =>
      setWrongEmail(
        !EmailValidator.validate(email) && email !== undefined && email !== ''
      ),
    [email]
  )

  const doSubmit = React.useCallback(() => {
    const routeChange = () => {
      const path = `/`
      navigate(path)
    }

    if (!wrongEmail && !(password === null || password === undefined)) {
      routeChange()
      handleLoggedIn()
      console.log({ email, password })
    }
  }, [email, navigate, password, wrongEmail])

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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
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
          <Link href="/forgotPassword">Forgot Password?</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
