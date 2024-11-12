// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import somany1 from '../../ImagesCompanies/somany1.png';
import somany2 from '../../ImagesCompanies/somany2.png';
import somany3 from '../../ImagesCompanies/somany3.png';
import somany4 from '../../ImagesCompanies/somany4.png';
import somany5 from '../../ImagesCompanies/somany5.png';
import somany6 from '../../ImagesCompanies/somany6.png';

function Comp1() {
  const products = [
    { id: 1, name: '3D Rosette Blue', description: 'SKU: 3D Rosette Blue FP   600x600mm', image: somany1, price: '₹780 / Sqft' },
    { id: 2, name: 'Bienne HL 01', description: 'SKU: T11H113000613105  300x600mm', image: somany2, price: '₹1024 / Sqft' },
    { id: 3, name: 'Granit Trim 240 Ocean Blue 15 GFP', description: 'SKU: Granit Trim 240 Ocean Blue 15 GFP 800x2400mm', image: somany3, price: '₹1200 / Sqft' },
    { id: 4, name: 'Granit Trim 240 Imp Clarion Black 15', description: 'SKU: Granit Trim 240 Imp Clarion Black 15  800x2400mm', image: somany4, price: '₹650 / Sqft' },
    { id: 5, name: 'Granit Trim 240 Affinity 15 GFP', description: 'SKU: Granit Trim 240 Affinity 15 GFP  800x2400mm', image: somany5, price: '₹350 / Sqft' },
    { id: 6, name: 'Granit Trim 240 Imp Clarion White 15', description: 'SKU: Granit Trim 240 Imp Clarion White 15  800x2400mm', image: somany6, price: '₹850 / Sqft' },

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
