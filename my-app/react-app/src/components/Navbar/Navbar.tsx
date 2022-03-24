/* eslint-disable jsx-a11y/interactive-supports-focus */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import AccountCircle from '@mui/icons-material/AccountCircle'
import {
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Hidden,
  AppBar,
  Typography,
  Box,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminSignInOutContainer from '../../containers/AdminSignInOutContainer'
import SignInOutContainer from '../../containers/SignInOutContainer'
import MenuItems from './MenuItems'
import './Navbar.css'

const Navbar: React.FC = () => {
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

  const [openUser, setOpenUser] = React.useState(false)
  const [openAdmin, setOpenAdmin] = React.useState(false)

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
            <Button onClick={handleClickOpenUser}>Log In</Button>
            <Dialog open={openUser} onClose={handleCloseDialogUser}>
              <SignInOutContainer />
            </Dialog>
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
