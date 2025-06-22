import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: 10, backgroundColor: "#cce5cc" }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/shop" style={{ margin: 10 }}>Shop</Link>
      <Link to="/cart" style={{ margin: 10 }}>Cart</Link>
    </nav>
  );
};

export default Header;
