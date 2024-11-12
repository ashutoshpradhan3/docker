// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import agl1 from '../../ImagesCompanies/agl1.png';
import agl2 from '../../ImagesCompanies/agl2.png';
import agl3 from '../../ImagesCompanies/agl3.png';
import agl4 from '../../ImagesCompanies/agl4.png';
import agl5 from '../../ImagesCompanies/agl5.png';
import agl6 from '../../ImagesCompanies/agl6.png';

function Comp1() {
  const products = [
    { id: 1, name: '3D-34', description: 'Glossy , Floor , 600x600 mm', image: agl1, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 2, name: '3D-46', description: 'Glossy , Floor , 600x600 mm', image: agl2, price: 'MRP Rs 199.00/sq.ft (incl. of all taxes)' },
    { id: 3, name: '3D-47', description: 'Glossy , Floor , 600x600 mm', image: agl3, price: 'MRP Rs 245.00/sq.ft (incl. of all taxes)' },
    { id: 4, name: '3D-50', description: 'Glossy , Floor , 600x600 mm', image: agl4, price: 'MRP Rs 145.00/sq.ft (incl. of all taxes)' },
    { id: 5, name: '3D-64', description: 'Glossy , Floor , 600x600 mm', image: agl5, price: 'MRP Rs 114.00/sq.ft (incl. of all taxes)' },
    { id: 6, name: '3D-85', description: 'Glossy , Floor , 600x600 mm', image: agl6, price: 'MRP Rs 334.00/sq.ft (incl. of all taxes)' },

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
