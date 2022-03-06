import { Paper, Tabs, Typography, Box, Tab } from '@mui/material'
import React, { Component } from 'react'

interface IProps {
  value: number
  children: any
  tabValue: number
  index: number
}

const TabPanel: React.FC<IProps> = (props) => {
  const { value, children, tabValue, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel}-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
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
