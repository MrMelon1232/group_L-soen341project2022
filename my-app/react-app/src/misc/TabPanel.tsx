import { Typography, Box } from '@mui/material'
import React from 'react'

interface IProps {
  value: number
  index: number
}

const TabPanel: React.FC<IProps> = (props) => {
  const { value, children, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
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

export default TabPanel
