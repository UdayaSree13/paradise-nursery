// src/pages/ProductListingPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const ProductListingPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Shop Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
