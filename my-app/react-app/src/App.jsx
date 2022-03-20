import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import OurBrand from './pages/OurBrand'
import Products from './pages/Products'

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
        <Route path="/user-page" element={<LoginPage />} />
      </Routes>
    </div>
  </Router>
)

export default App
