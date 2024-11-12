// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path


import bajaj1 from '../../ImagesCompanies/bajaj1.png';
import bajaj2 from '../../ImagesCompanies/bajaj2.png';
import bajaj3 from '../../ImagesCompanies/bajaj3.png';
import bajaj4 from '../../ImagesCompanies/bajaj4.png';
import bajaj5 from '../../ImagesCompanies/bajaj5.png';
import bajaj6 from '../../ImagesCompanies/bajaj6.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Marazzi', description: 'Valence Gray Porcelain Tile - Matte', image: bajaj1, price: '₹140 / Sqft ' },
    { id: 2, name: 'Emser', description: 'Toledo Silver Ceramic Mosaic - 2" x 2"', image: bajaj2, price: '₹2082 / Sqft' },
    { id: 3, name: 'Bedrosians', description: 'Dark Green Marble Tile - Polished', image: bajaj3, price: '₹1130 / Sqft' },
    { id: 4, name: 'Daltile', description: 'Nero Marquina Marble Tile - Polished', image: bajaj4, price: '₹1103 / Sqft' },
    { id: 5, name: 'Bedrosians', description: 'Absolute Black Granite Tile - Flamed', image: bajaj5, price: '₹1024 / Sqft' },
    { id: 6, name: 'MSI', description: 'Montauk Black Slate Tile - Natural Cleft Face, Gauged Back', image: bajaj6, price: '₹707 / Sqft' },

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

export default Comp1;
