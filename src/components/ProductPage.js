// src/components/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productType } = useParams();

  return (
    <div>
      <h1>{productType}</h1>
      <p>Discover a range of {productType}. This section will showcase various {productType} products.</p>
      {/* Add more detailed product-specific data here later */}
    </div>
  );
}

export default ProductPage;
