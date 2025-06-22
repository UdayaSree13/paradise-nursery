import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: 20 }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
