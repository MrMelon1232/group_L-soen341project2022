import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/login/login.tsx'
import Contact from './components/pages/Contact'
import Explore from './components/pages/Explore'
import Home from './components/pages/Home'
import OurBrand from './components/pages/OurBrand'
import Products from './components/pages/Products'
import SignInOutContainer from './containers'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/ourbrand" element={<OurBrand />} />
    //       <Route path="/explore" element={<Explore />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
  )
}

export default App
