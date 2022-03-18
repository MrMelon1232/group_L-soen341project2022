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
  Link,
} from '@mui/material'
import EmailValidator from 'email-validator'
import React from 'react'

interface IProps {
  emailProp: string
  password: string
}
const AdminLogin: React.FC = () => {
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

  const doSubmit = React.useCallback(() => {
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
          <h2> Admin Log In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Admin Email"
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
          placeholder="Enter Admin Password"
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
          Log In
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

export default AdminLogin
