import { Paper, Tabs, Box, Tab } from '@mui/material'
import React from 'react'
import Login from '../components/login/Components/login'
import Signup from '../components/login/Components/signup'
import TabPanel from '../components/misc/TabPanel'

const SignInOutContainer: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
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
        <Box>
          <Login />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Signup emailProp="" password="" />
        </Box>
      </TabPanel>
    </Paper>
  )
}

export default SignInOutContainer
