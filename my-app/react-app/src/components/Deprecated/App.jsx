import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SwipeableEdgeDrawer from '../../misc/SwipeableEdgeDrawer'
import AdminPage from '../../pages/AdminPage'
import CartPage from '../../pages/CartPage'
import ContactPage from '../../pages/ContactPage'
import ExplorePage from '../../pages/ExplorePage'
import Home from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import OurBrandPage from '../../pages/OurBrandPage'
import ProductDetailsPage from '../../pages/ProductDetailsPage'
import ProductsPage from '../../pages/ProductsPage'
import ProfilePage from '../../pages/ProfilePage'
import getCookie from '../../utils/getCookie'
import Navbar from '../Navbar/Navbar'
import ForgotPassword from '../login/forgotPassword'

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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/ourbrand" element={<OurBrandPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/user-page" element={<LoginPage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/Products/:id" element={<ProductDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
