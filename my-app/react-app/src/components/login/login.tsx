import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LoadingButton } from '@mui/lab'
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
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import agent from '../../ApiCall/agent'
import { useAppDispatch, useAppSelector } from '../../store/configureStore'
import { signInUser } from './accountSlice'

interface IProps {
  stateChanger: (boolean) => void
}

const Login: React.FC<IProps> = ({ stateChanger }: IProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.account)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: 'all' })

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data))
      stateChanger(true)
      navigate('/user-page')
    } catch (error) {
      console.log('login component', error)
    }
  }

  //  const navigate = useNavigate()

  /*const handleSubmit = React.useCallback(
    (event: any) => {
       const routeChange = () => {
      const path = `/user-page`
      navigate(path)
    }

    if (!wrongEmail && !(password === null || password === undefined)) {
      routeChange()
      stateChanger(true)
      console.log({ email, password })
    }
    
      event.preventDefault()
      agent.Account.login({ username, password })
    },
    [email, navigate, password, stateChanger]
  )*/

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
          label="Username"
          placeholder="Username"
          fullWidth
          error={!!errors.username}
          helperText={errors?.username?.message}
          variant="standard"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('username', { required: 'Username is required' })}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          variant="standard"
          error={!!errors.password}
          helperText={errors?.password?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: 'Password is required' })}
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
          onClick={handleSubmit(submitForm)}
          disabled={!isValid}
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
