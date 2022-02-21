import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import OurBrand from './components/pages/OurBrand'
import Explore from './components/pages/Explore'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ourbrand" element={<OurBrand />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
