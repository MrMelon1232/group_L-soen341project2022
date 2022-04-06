/* eslint-disable jsx-a11y/interactive-supports-focus */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import AccountCircle from '@mui/icons-material/AccountCircle'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Hidden,
  AppBar,
  Typography,
  Box,
  Badge,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminSignInOutContainer from '../../containers/AdminSignInOutContainer'
import SignInOutContainer from '../../containers/SignInOutContainer'
import SwipeableEdgeDrawer from '../../misc/SwipeableEdgeDrawer'
import MenuItems from './MenuItems'
import './Navbar.css'

interface IProps {
  setDrawerOpen: () => void
}

const Navbar: React.FC<IProps> = (props: IProps) => {
  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const [showForm, setForm] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [openUser, setOpenUser] = React.useState(false)
  const [openAdmin, setOpenAdmin] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }
  //Handler for user login/signup
  const handleClickOpenUser = () => {
    setOpenUser(true)
  }

  const handleCloseDialogUser = () => {
    setOpenUser(false)
  }

  //Handler for admin login
  const handleClickOpenAdmin = () => {
    setOpenAdmin(true)
  }

  const handleCloseDialogAdmin = () => {
    setOpenAdmin(false)
  }

  const [showLogout, setshowLogout] = React.useState(false)
  const handleLogout = () => {
    setshowLogout(false)
  }

  return (
    <AppBar
      position="fixed"
      className="NavbarItems"
      sx={{ marginBottom: '50px' }}
    >
      <Box sx={{ flexDirection: 'row' }}>
        <Grid container flexDirection="row" alignSelf="center">
          <Grid item>
            <Typography
              className="navbar-logo"
              sx={{ display: 'inline-flex', marginTop: '10px' }}
            >
              AmaBay
              <i className="fab fa-react" />
            </Typography>
          </Grid>
          <div role="button" className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {/*Might not work as intended*/}
            {MenuItems.map((item, index) => (
              <Link className={item.cName} to={item.url} tabIndex={index}>
                {item.title}
              </Link>
            ))}
          </ul>
          <Hidden mdDown>
            <Box sx={{ textAlign: 'center', mt: 0.5, mr: 1.5 }}>
              <IconButton onClick={props.setDrawerOpen}>
                <Badge badgeContent={4} color="error">
                  <AddShoppingCartIcon sx={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </Box>

            <Button onClick={handleClickOpen}>Log In</Button>
            {!showLogout ? (
              <Button onClick={handleClickOpen}>Log In</Button>
            ) : null}
            <Dialog open={open} onClose={handleCloseDialog}>
              <SignInOutContainer stateChanger={setshowLogout} />
            </Dialog>
          </Hidden>

          <Hidden mdDown>
            {showLogout ? (
              <Button onClick={handleLogout}> Logout</Button>
            ) : null}
          </Hidden>

          <Hidden mdDown>
            {showLogout ? (
              <Button>
                <Link to="/profile"> Profile </Link>
              </Button>
            ) : null}
          </Hidden>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle color="primary" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            elevation={0}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Hidden mdDown>
              <MenuItem>
                <Button onClick={handleClickOpenAdmin}>Admin Login</Button>
              </MenuItem>
              <Dialog open={openAdmin} onClose={handleCloseDialogAdmin}>
                <AdminSignInOutContainer />
              </Dialog>
            </Hidden>
            <MenuItem onClick={handleClose}>Account Settings</MenuItem>
          </Menu>
        </Grid>
      </Box>
    </AppBar>
  )
}

export default Navbar
