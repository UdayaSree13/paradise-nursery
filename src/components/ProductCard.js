// src/components/ProductCard.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 10,
      width: 200,
      borderRadius: 8,
      textAlign: "center",
      backgroundColor: "#f9f9f9"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 4 }}
      />
      <h4 style={{ margin: "10px 0" }}>{product.name}</h4>
      <p style={{ margin: "5px 0" }}>${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        disabled={isInCart}
        style={{
          padding: "6px 12px",
          backgroundColor: isInCart ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: isInCart ? "not-allowed" : "pointer"
        }}
      >
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
