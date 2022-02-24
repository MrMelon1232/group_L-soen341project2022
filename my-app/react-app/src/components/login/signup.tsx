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
import * as EmailValidator from 'email-validator'
import React, { Component } from 'react'

interface IProps {
  email: string
  password: string
}

const Signup: React.FC<IProps> = (props) => {
  const [email, setEmail] = React.useState<string>('')
  const hasError = React.useMemo(() => {
    console.log(email)
    return (
      !EmailValidator.validate(email) && email !== undefined && email !== ''
    )
  }, [email])

  return (
    <Grid>
      <Paper style={{ padding: 20, width: 330, margin: '0 auto' }}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}> Sign Up </h2>
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
            onBlur={(e) => setEmail(e.target.value)}
            error={hasError}
            value={props.email}
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
