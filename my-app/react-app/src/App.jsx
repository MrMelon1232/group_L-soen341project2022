import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ForgotPassword from './components/login/forgotPassword'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import OurBrand from './pages/OurBrand'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Seller from './pages/Seller'

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Box mt="75px" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourbrand" element={<OurBrand />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/user-page" element={<LoginPage />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </div>
  </Router>
)

export default App
