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
  Link as MuiLink,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import React from 'react'
import { Link } from 'react-router-dom'
import { useECommerceContext } from '../../Context/ECommerceContext'
import AdminSignInOutContainer from '../../containers/AdminSignInOutContainer'
import SignInOutContainer from '../../containers/SignInOutContainer'
import SwipeableEdgeDrawer from '../../misc/SwipeableEdgeDrawer'
import { useAppDispatch, useAppSelector } from '../../store/configureStore'
import { signOut } from '../login/accountSlice'
import MenuItems from './MenuItems'
import './Navbar.css'

interface IProps {
  setDrawerOpen: () => void
}

const Navbar: React.FC<IProps> = (props: IProps) => {
  const [clicked, setClicked] = React.useState(false)
  const { cart } = useAppSelector((state) => state.cart)
  const { user } = useAppSelector((state) => state.account)
  const dispatch = useAppDispatch()

  const count = cart?.items.reduce((sum, item) => sum + item.quantity, 0)

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
  const [openLogin, setOpenLogin] = React.useState(false)
  const [openSignUp, setOpenSignUp] = React.useState(false)
  const [openUser, setOpenUser] = React.useState(false)
  const [openAdmin, setOpenAdmin] = React.useState(false)

  const handleOpenLogin = () => {
    setOpenLogin(true)
  }

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }

  const handleOpenSignUp = () => {
    setOpenSignUp(true)
  }

  const handleCloseSignUp = () => {
    setOpenSignUp(false)
  }

  //Handler for admin login
  const handleClickOpenAdmin = () => {
    setOpenAdmin(true)
  }

  const handleCloseDialogAdmin = () => {
    setOpenAdmin(false)
  }

  const [showLogout, setshowLogout] = React.useState(!!user?.email)
  const handleLogout = () => {
    setshowLogout(false)
    dispatch(signOut())
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
                <Badge badgeContent={count} color="error">
                  <AddShoppingCartIcon sx={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </Box>

            {!showLogout ? (
              <>
                <Button onClick={handleOpenLogin}>Log In</Button>

                <Button onClick={handleOpenSignUp}>Sign Up</Button>
              </>
            ) : null}
            <Dialog
              open={openLogin || openSignUp}
              onClose={openLogin ? handleCloseLogin : handleCloseSignUp}
            >
              <SignInOutContainer
                stateChanger={setshowLogout}
                initialState={openLogin ? 0 : 1}
              />
            </Dialog>
          </Hidden>

          {showLogout ? user?.email : undefined}
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
                {showLogout ? (
                  <MuiLink href="/profile" underline="none">
                    Profile
                  </MuiLink>
                ) : (
                  <Button onClick={handleClickOpenAdmin}>Admin Login</Button>
                )}
              </MenuItem>
              <Dialog open={openAdmin} onClose={handleCloseDialogAdmin}>
                <AdminSignInOutContainer />
              </Dialog>
            </Hidden>
            <MenuItem onClick={handleClose}>Account Settings</MenuItem>
            {showLogout ? (
              <MenuItem onClick={handleLogout}> Logout</MenuItem>
            ) : null}
          </Menu>
        </Grid>
      </Box>
    </AppBar>
  )
}

export default Navbar
