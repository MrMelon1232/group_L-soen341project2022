import { Paper, Tabs, Box, Tab } from '@mui/material'
import React from 'react'
import AdminLogin from '../components/login/AdminLogin'
import TabPanel from '../misc/TabPanel'

const AdminSignInOutContainer: React.FC = () => {
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
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <AdminLogin />
        </Box>
      </TabPanel>
    </Paper>
  )
}

export default AdminSignInOutContainer
