import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About } from './pages/About'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Account } from './pages/Account'

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
