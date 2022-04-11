/*
Source code from https://mui.com/components/drawers/
*/
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import LoginIcon from '@mui/icons-material/Login'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import agent from '../ApiCall/agent'
import CartComponent from '../components/Shopping/CartComponent'
import { Cart } from '../models/CartModel'
import { Product } from '../models/Product'

interface IProps {
  openCart: boolean
}

const drawerWidth = 300

const SwipeableEdgeDrawer: React.FC<IProps> = ({ openCart }: IProps) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setOpen(openCart)
  }, [openCart])

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <Divider />
      <CartComponent />
      <List>
        {['Login', 'Sign-up', 'Admin login'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <LoginIcon /> : <ContactMailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button>
          <ListItemIcon>
            <MarkEmailUnreadIcon />
          </ListItemIcon>
          <ListItemText primary="Suscribe to our news letter" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  )
}

export default SwipeableEdgeDrawer
