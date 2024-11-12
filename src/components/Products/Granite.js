// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import granite1 from '../../ImagesProduct/granite1.png';
import granite2 from '../../ImagesProduct/granite2.png';
import granite3 from '../../ImagesProduct/granite3.png';
import granite4 from '../../ImagesProduct/granite4.png';
import granite5 from '../../ImagesProduct/granite5.png';
import granite6 from '../../ImagesProduct/granite6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'Nu River Smoky', description: 'Matte Finish , 600x600 mm', image: granite1, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes' },
    { id: 2, name: 'SNu River Ash', description: 'Glossy Finish , 600x600 mm', image: granite2, price: 'MRP Rs 92.00/sq.ft (incl. of all taxes)' },
    { id: 3, name: 'Sahara Double Body Glossy Carbon', description: 'Glossy Finish , 600x600 mm', image: granite3, price: 'MRP Rs 102.00/sq.ft (incl. of all taxes)' },
    { id: 4, name: 'Nu River Blue', description: 'Matte Finish , 600x600 mm', image: granite4, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 5, name: 'Sahara Double Body Glossy Gris', description: 'Glossy Finish , 600x600 mm', image: granite5, price: 'MRP Rs 92.00/sq.ft (incl. of all taxes)' },
    { id: 6, name: 'Sahara Double Body Glossy Nero', description: 'Glossy Finish , 600x600 mm', image: granite6, price: 'MRP Rs 102.00/sq.ft (incl. of all taxes)' },
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
