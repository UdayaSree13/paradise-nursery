// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cart/CartSlice';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate('/thankyou');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: 20, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} width={100} style={{ borderRadius: 8 }} />
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity:
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                  disabled={item.quantity <= 1}
                  style={{ marginLeft: 10 }}
                >
                  -
                </button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                >
                  +
                </button>
              </p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}

          <h3>Total Items: {totalCount}</h3>
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>

          <div style={{ marginTop: 20 }}>
            <button onClick={handleCheckout} style={{ marginRight: 10 }}>
              Checkout
            </button>
            <Link to="/shop">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
