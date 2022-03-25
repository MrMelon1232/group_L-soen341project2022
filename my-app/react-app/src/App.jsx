import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ForgotPassword from './components/login/forgotPassword'
import SwipeableEdgeDrawer from './misc/SwipeableEdgeDrawer'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import OurBrand from './pages/OurBrand'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Profile from './pages/profile'

const App = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Router>
      <div className="App">
        <Navbar setDrawerOpen={toggleDrawer} />
        <SwipeableEdgeDrawer openCart={open} />
        <Box mt="75px" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ourbrand" element={<OurBrand />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-page" element={<LoginPage />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
