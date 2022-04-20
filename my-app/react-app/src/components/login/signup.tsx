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
  Box,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import EmailValidator from 'email-validator'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import agent from '../../ApiCall/agent'
import { useAppDispatch, useAppSelector } from '../../store/configureStore'

interface IProps {
  emailProp: string
  password: string
}

const Signup: React.FC<IProps> = (props) => {
  const [validationErrors, setValidationErrors] = React.useState<string[]>([])
  const [email, setEmail] = React.useState<string>('')
  const [isWrongEmail, setIsWrongEmail] = React.useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.account)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: 'all' })

  const validateEmail = React.useCallback(
    () =>
      setIsWrongEmail(
        !EmailValidator.validate(email) && email !== undefined && email !== ''
      ),
    [email]
  )

  return (
    <Grid>
      <Paper style={{ padding: 20, width: 330, margin: '0 auto' }}>
        <Grid direction="column" display="flex" alignItems="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}> Sign Up </h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Box
          component="form"
          onSubmit={handleSubmit((data) => {
            agent.Account.signup(data)
              .then(() => {
                toast.success('Registration successful! You may login')
                navigate('/')
              })
              .catch((error) => setValidationErrors(error))
          })}
        >
          {/*<TextField
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
  />*/}
          <TextField
            label="Username"
            placeholder="Username"
            fullWidth
            required
            error={!!errors.username}
            helperText={errors?.username?.message}
            variant="standard"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('username', { required: 'A username is required' })}
          />
          <TextField
            label="email"
            placeholder="Enter an email"
            fullWidth
            required
            error={isWrongEmail}
            helperText={isWrongEmail ? 'Please enter a valid email' : undefined}
            variant="standard"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                message: 'Wrong email format',
              },
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
          />
          {console.log('isWrong', isWrongEmail)}
          {console.log('email', email)}

          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
            fullWidth
            required
            variant="standard"
            error={!!errors.password}
            helperText={errors?.password?.message}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value:
                  /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                message:
                  'password must be at least 6 characters with at least one capital letter, one digit, one special character',
              },
            })}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button
            disabled={!isValid || isWrongEmail}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
          {console.log('validation', validationErrors)}
          {validationErrors.length > 0 && (
            <Alert severity="error">
              <AlertTitle>Validation Errors</AlertTitle>
              <List>
                {validationErrors.map((error) => (
                  <ListItem key={error}>
                    <ListItemText>{error}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Alert>
          )}
        </Box>
      </Paper>
    </Grid>
  )
}

export default Signup
