// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path


import jaq1 from '../../ImagesCompanies/jaq1.png';
import jaq2 from '../../ImagesCompanies/jaq2.png';
import jaq3 from '../../ImagesCompanies/jaq3.png';
import jaq4 from '../../ImagesCompanies/jaq4.png';
import jaq5 from '../../ImagesCompanies/jaq5.png';
import jaq6 from '../../ImagesCompanies/jaq6.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Counter Top Basin', description: 'CODE : OPS-WHT-15601PM', image: jaq1, price: 'MRP : ₹ 4,650.00' },
    { id: 2, name: 'Table Top Basin', description: 'CODE : LAS-WHT-91933', image: jaq2, price: 'MRP : Price on request' },
    { id: 3, name: 'Automatic Rimless Floor Mounted WC', description: 'CODE : ITS-WHT-89853S300PPPM', image: jaq3, price: 'MRP : ₹ 1,17,000.00' },
    { id: 4, name: 'Urinal with Fixing Accessories', description: 'Code : URS-WHT-13253N', image: jaq4, price: 'MRP : ₹ 7,800.00' },
    { id: 5, name: 'Thin Rim Table Top Basin', description: 'Code : OPS-WHT-15901N', image: jaq5, price: 'MRP : ₹ 4,900.00' },
    { id: 6, name: 'Wall Hung  Integrated Basin', description: 'Code : ONS-WHT-10801', image: jaq6, price: 'MRP : ₹ 10,700.00' },

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
