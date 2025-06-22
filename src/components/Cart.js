import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p style={{ padding: 20 }}>Your cart is empty.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: 10, borderBottom: "1px solid #ccc", paddingBottom: 10 }}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>
            Quantity:
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>–</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
      <Link to="/shop"><button>Continue Shopping</button></Link>

    </div>
  );
};

export default Cart;
