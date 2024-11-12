// src/components/products/Prod1.js
import React, { useState } from 'react';
import '../../styles/CardPage.css';
import ProductDetail from './SinkDetail1';

import sink1 from '../../ImagesProduct/sink1.png';
import sink2 from '../../ImagesProduct/sink2.png';
import sink3 from '../../ImagesProduct/sink3.png';
import sink4 from '../../ImagesProduct/sink4.png';
import sink5 from '../../ImagesProduct/sink5.png';
import sink6 from '../../ImagesProduct/sink6.png';

function Prod1() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Table Top Basin', description: 'Code : SLS-WHT-6901', image: sink1, price: 'MRP : ₹ 4,350.00' },
    { id: 2, name: 'Thin Rim Table Top Basin', description: 'Code : SLS-WHT-6905', image: sink2, price: 'MRP : ₹ 6,500.00' },
    { id: 3, name: 'Wall Hung Basin with full pedestal', description: 'Code : SLS-WHT-6801', image: sink3, price: 'MRP : ₹ 4,350.00' },
    { id: 4, name: 'Counter Top Basin', description: 'Code : SLS-WHT-6601', image: sink4, price: 'MRP : ₹ 5,900.00' },
    { id: 5, name: 'Wall Hung Bidet - Black Matt', description: 'Code : SLS-BLM-6153N', image: sink5, price: 'MRP : ₹ 11,000.00' },
    { id: 6, name: 'Wall Hung Bidet - White', description: 'Code : SLS-WHT-6153N', image: sink6, price: 'MRP : ₹ 9,200.00' },
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

export default Prod1;
