import { Paper, Tabs, Typography, Box, Tab } from '@mui/material'
import React, { Component } from 'react'
import Login from '../components/login/Components/login'
import Signup from '../components/login/Components/signup'

interface IProps {
  newValue: boolean
}

const SignInOutContainer: React.FC<IProps> = (props) => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel}-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  return (
    <Paper elevation={20} style={{ width: 330, margin: '20px auto' }}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="Sign In" />

        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup emailProp="" password="" />
      </TabPanel>
    </Paper>
  )
}

export default SignInOutContainer
