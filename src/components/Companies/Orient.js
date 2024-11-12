// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import orient1 from '../../ImagesCompanies/orient1.png';
import orient2 from '../../ImagesCompanies/orient2.png';
import orient3 from '../../ImagesCompanies/orient3.png';
import orient4 from '../../ImagesCompanies/orient4.png';
import orient5 from '../../ImagesCompanies/orient5.png';
import orient6 from '../../ImagesCompanies/orient6.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Nu River Red', description: 'Vitrified , Glossy Finish , 600x1200 mm', image: orient1, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 2, name: 'Nu River Golden', description: 'Vitrified , Matt Finish , 600x1200 mm', image: orient2, price: 'MRP Rs 115.00/sq.ft (incl. of all taxes)' },
    { id: 3, name: 'Nu River Smoky', description: 'Vitrified , Matt Finish , 600x1200 mm', image: orient3, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 4, name: 'Nu River Blue', description: 'Vitrified , Matt Finish , 600x1200 mm', image: orient4, price: 'MRP Rs 119.00/sq.ft (incl. of all taxes)' },
    { id: 5, name: 'Nu Canto Grey', description: 'Vitrified , Matt Finish , 600x1200 mm', image: orient5, price: 'MRP Rs 104.00/sq.ft (incl. of all taxes)' },
    { id: 6, name: 'Nu Canto Gold', description: 'Vitrified , Glossy Finish , 600x1200 mm', image: orient6, price: 'MRP Rs 104.00/sq.ft (incl. of all taxes)' },


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
