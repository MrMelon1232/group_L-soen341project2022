import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton, Menu, MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import './Navbar.css'

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
      <Button>Sign Up</Button>
      <Button>Log In</Button>
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
        <MenuItem onClick={handleClose}>Admin Login</MenuItem>
        <MenuItem onClick={handleClose}>Become a member of the team</MenuItem>
      </Menu>
    </nav>
  )
}
