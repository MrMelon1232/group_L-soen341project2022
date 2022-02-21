import Button from '@mui/material/Button'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MenuItems from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }

    this.handleClick = () => {
      this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }
  }

  render() {
    const { clicked } = this.state

    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          AmaBay
          <i className="fab fa-react" />
        </h1>
        <div role="button" className="menu-icon" onClick={this.handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {/*Might not work as intended*/}
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar
