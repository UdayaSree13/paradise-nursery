// src/components/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.find((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 10,
      borderRadius: 8,
      margin: 10,
      width: 200,
      textAlign: "center"
    }}>
      <img
        src={plant.image} // ✅ FIXED here
        alt={plant.name}
        width={150}
        height={150}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={!!isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
