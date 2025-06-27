import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20, background: '#f0f0f0' }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: 24 }}>🌿 Paradise Nursery</Link>
      <nav>
        <Link to="/shop" style={{ marginRight: 20 }}>Shop</Link>
        <Link to="/cart">🛒 Cart ({totalCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
