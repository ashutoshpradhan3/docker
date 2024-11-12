// src/components/Products/Showers.js
import React, { useState } from 'react';
import '../../styles/CardPage.css'; 
import ProductDetail from './ShowerDetail1';  // Make sure you have separate detail component for shower

import shower1 from '../../ImagesProduct/shower1.png';
import shower2 from '../../ImagesProduct/shower2.png';
import shower3 from '../../ImagesProduct/shower3.png';
import shower4 from '../../ImagesProduct/shower4.png';
import shower5 from '../../ImagesProduct/shower5.png';
import shower6 from '../../ImagesProduct/shower6.png';

function ShowerPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    { id: 1, name: 'Self cleaning shower', description: 'Cat. No: F7010607AB', image: shower1, price: '₹5,772' },
    { id: 2, name: 'Coupling square hand shower', description: 'Cat. No: F7030309AB', image: shower2, price: '₹4,040' },
    { id: 3, name: 'Overhead rain shower - stainless steel', description: 'Cat. No: F7010109SS', image: shower3, price: '₹8,600' },
    { id: 4, name: 'Overhead rain shower - stainless steel', description: 'Cat. No: F7010208SS', image: shower4, price: '₹13,100' },
    { id: 5, name: 'Overhead rain shower - brass', description: 'Cat. No: F7010301', image: shower5, price: '₹9,300' },
    { id: 6, name: 'Overhead rain shower - abs', description: 'Cat. No: F7010515AB', image: shower6, price: '₹6,550' },
  ];

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="card-page">
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
      ) : (
        products.map((product) => (
          <div key={product.id} className="card" onClick={() => openProductDetail(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowerPage;
