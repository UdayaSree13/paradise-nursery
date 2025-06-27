// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import ThankYou from './pages/ThankYou';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
         <Route path="/thankyou" element={<ThankYou />} /> 
      </Routes>
    </Router>
  );
};

export default App;
