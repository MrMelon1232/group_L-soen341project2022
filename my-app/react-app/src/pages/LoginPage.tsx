import { Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../store/configureStore'

const LoggingPage = () => {
  const { user } = useAppSelector((state) => state.account)
  const welcomeMessage = 'Welcome '
  const email = user?.email

  return (
    <div>
      <Typography variant="h1">{welcomeMessage}</Typography>
      <Typography variant="h3">{email}</Typography>
    </div>
  )
}

export default LoggingPage
