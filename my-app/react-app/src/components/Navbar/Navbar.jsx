import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton, Menu, MenuItem, Grid, Hidden } from '@mui/material'
import Button from '@mui/material/Button'
import { padding } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import SignInOutContainer from '../../containers'
import MenuItems from './MenuItems'
import './Navbar.css'

// eslint-disable-next-line react/function-component-definition
export default function Navbar() {
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

  const handleForm = () => {
    setForm(!showForm)
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        AmaBay
        <i className="fab fa-react" />
      </h1>
      <div role="button" className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {/*Might not work as intended*/}
        {MenuItems.map((item, index) => (
          <li index={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Grid item container direction="row" columnSpacing={2} xs="auto">
        <Hidden mdDown>
          <Button onClick={handleForm}>Log In</Button>
          {showForm && <SignInOutContainer />}
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
      </Grid>

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
        <MenuItem onClick={handleClose}>Admin Login</MenuItem>
        <MenuItem onClick={handleClose}>Account Settings</MenuItem>
      </Menu>
    </nav>
  )
}
