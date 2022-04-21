import { Login } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, CircularProgress, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import agent from './ApiCall/agent'
import './App.css'
import { useECommerceContext } from './Context/ECommerceContext'
import Navbar from './components/Navbar/Navbar'
import AdminLogin from './components/login/AdminLogin'
import ForgotPassword from './components/login/forgotPassword'
import Signup from './components/login/signup'
import SwipeableEdgeDrawer from './misc/SwipeableEdgeDrawer'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import ExplorePage from './pages/ExplorePage'
import Home from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import OurBrandPage from './pages/OurBrandPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductsPage from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'
import getCookie from './utils/getCookie'

const App = () => {
  const [open, setOpen] = React.useState(false)
  const { setCart } = useECommerceContext()
  const [loading, setLoading] = React.useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    const customerId = getCookie('customerId')
    if (customerId) {
      agent.Cart.get()
        .then((cart) => setCart(cart))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [setCart])

  if (loading)
    return (
      <>
        <Typography component="div">App loading...</Typography>
        <CircularProgress />
      </>
    )

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
          <Route path="/admin-page" element={<AdminLogin />} />
          <Route path="/Products/:id" element={<ProductDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup emailProp="" password="" />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
