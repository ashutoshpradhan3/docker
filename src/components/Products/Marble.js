// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import marble1 from '../../ImagesProduct/marble1.png';
import marble2 from '../../ImagesProduct/marble2.png';
import marble3 from '../../ImagesProduct/marble3.png';
import marble4 from '../../ImagesProduct/marble4.png';
import marble5 from '../../ImagesProduct/marble5.png';
import marble6 from '../../ImagesProduct/marble6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'DR Matte Endless Canova Statuario', description: 'Size 600x1200 mm ft', image: marble1, price: 'MRP ₹ 126 /- Sq.ft' },
    { id: 2, name: 'DR Matte Statuario Marmi Marble', description: 'Size 600x1200 mm ft', image: marble2, price: 'MRP ₹ 126 /- Sq.ft' },
    { id: 3, name: 'DR Gloss Stone Veins Silver Marble', description: 'Size 600x1200 mm ft', image: marble3, price: 'MRP ₹ 126 /- Sq.ft' },
    { id: 4, name: 'DR Gloss Onyx Crystal Aqua Marble', description: 'Size 600x1200 mm ft', image: marble4, price: 'MRP ₹ 126 /- Sq.ft' },
    { id: 5, name: 'DR Emboss Gloss Dalya Golden Marble', description: 'Size 600x1200 mm ft', image: marble5, price: 'MRP ₹ 142 /- Sq.ft' },
    { id: 6, name: 'DR Carving Endless Desert Marble', description: 'Size 600x1200 mm ft', image: marble6, price: 'MRP ₹ 133 /- Sq.ft' },

  ];

  return (
    <div className="card-page">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Prod1;
