// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import tile1 from '../../ImagesProduct/tile1.png';
import tile2 from '../../ImagesProduct/tile2.png';
import tile3 from '../../ImagesProduct/tile3.png';
import tile4 from '../../ImagesProduct/tile4.png';
import tile5 from '../../ImagesProduct/tile5.png';
import tile6 from '../../ImagesProduct/tile6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'Textilo Pista', description: 'SKU: T3030441 , 300x300mm', image: tile1, price: '₹320 / Sqft' },
    { id: 2, name: 'Portico HL 01', description: 'SKU: T11H113000284105 , 300x600mm', image: tile2, price: '₹780 / Sqft' },
    { id: 3, name: 'VALLS NATURAL', description: 'SKU: VALLS NATURAL , 300x450mm', image: tile3, price: '₹299 / Sqft' },
    { id: 4, name: 'Grande Velvet Nuvolato Verde', description: 'SKU: Grande Velvet Nuvolato Verde , 600x1200mm', image: tile4, price: '₹512 / Sqft' },
    { id: 5, name: 'Sabia Peach HL 01 B', description: 'SKU: T11H113000408105 , 300x600mm', image: tile5, price: '₹780 / Sqft' },
    { id: 6, name: 'Alvaro Dark', description: 'SKU: Alvaro Dark ,  250x375mm', image: tile6, price: '₹499 / Sqft' },

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
