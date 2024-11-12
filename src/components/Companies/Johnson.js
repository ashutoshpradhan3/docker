// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import joh1 from '../../ImagesCompanies/joh1.png';
import joh2 from '../../ImagesCompanies/joh2.png';
import joh3 from '../../ImagesCompanies/joh3.png';
import joh4 from '../../ImagesCompanies/joh4.png';
import joh5 from '../../ImagesCompanies/joh5.png';
import joh6 from '../../ImagesCompanies/joh6.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Fern', description: 'BAR04A , Gloss , 250x50x8.5mm ', image: joh1, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 2, name: 'Ocean', description: 'BAR06A , Gloss, 250x50x8.5mm', image: joh2, price: 'MRP Rs 299.00/sq.ft (incl. of all taxes)' },
    { id: 3, name: 'Sand - Strips', description: 'BAR02D , Gloss , 250x125x10.5mm', image: joh3, price: 'MRP Rs 145.00/sq.ft (incl. of all taxes)' },
    { id: 4, name: 'Honey', description: 'CAS03A , Gloss , 240x70x8.5mm', image: joh4, price: 'MRP Rs 449.00/sq.ft (incl. of all taxes)' },
    { id: 5, name: 'Blue Décor', description: '	CAS05D , Gloss , 240x70x8.5mm', image: joh5, price: 'MRP Rs 229.00/sq.ft (incl. of all taxes)' },
    { id: 6, name: 'Turquoise', description: 'LIG05A , Gloss , 125x40x8.5mm', image: joh6, price: 'MRP Rs 199.00/sq.ft (incl. of all taxes)' },
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
