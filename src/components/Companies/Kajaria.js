// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import kaj1 from '../../ImagesCompanies/kaj1.png';
import kaj2 from '../../ImagesCompanies/kaj2.png';
import kaj3 from '../../ImagesCompanies/kaj3.png';
import kaj4 from '../../ImagesCompanies/kaj4.png';
import kaj5 from '../../ImagesCompanies/kaj5.png';
import kaj6 from '../../ImagesCompanies/kaj6.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Agate Decor Polished', description: 'Polished , Digital , 30x60 cm', image: kaj1, price: '₹490 / Sqft' },
    { id: 2, name: 'Agate Decor Polished', description: 'Polished , Digital , 30x60 cm', image: kaj2, price: '₹240 / Sqft' },
    { id: 3, name: 'Alexandria Dark', description: 'Matt , Digital , 30x60 cm', image: kaj3, price: '₹312 / Sqft' },
    { id: 4, name: 'Alexandria Decor', description: 'Matt , Digital , 30x60 cm', image: kaj4, price: '₹620 / Sqft' },
    { id: 5, name: 'Alexis Decor', description: 'Polished , Digital , 30x60 cm', image: kaj5, price: '₹1240 / Sqft' },
    { id: 6, name: 'Alia Beige Polished', description: 'HD Polished , 30x60 cm', image: kaj6, price: '₹930 / Sqft' },


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
