// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path


import cera1 from '../../ImagesCompanies/cera1.png';
import cera2 from '../../ImagesCompanies/cera2.png';
import cera3 from '../../ImagesCompanies/cera3.png';
import cera4 from '../../ImagesCompanies/cera4.png';
import cera5 from '../../ImagesCompanies/cera5.png';
import cera6 from '../../ImagesCompanies/cera7.png';

function Comp1() {
  const products = [
    { id: 1, name: 'Trosia Ivory', description: 'T622001IV , Floor Tiles , Matt , 300x300 mm ', image: cera1, price: '₹140 / Sqft' },
    { id: 2, name: 'Petenka', description: 'T611007NA , Floor Tiles , Matt , 300x300 mm', image: cera2, price: '₹220 / Sqft' },
    { id: 3, name: 'Poviska', description: 'T611013NA , Floor Tiles , Matt , 300x300 mm', image: cera3, price: '₹460 / Sqft' },
    { id: 4, name: 'Rozzano Ivory', description: 'T621006IV , Floor Tiles , Matt , 300x300 mm', image: cera4, price: '₹319 / Sqft' },
    { id: 5, name: 'Robecco Teracotta', description: 'T621005TC , Floor Tiles , Matt , 300x300 mm', image: cera5, price: '₹520 / Sqft' },
    { id: 6, name: 'Petrovia', description: 'T611008NA , Floor Tiles , Matt , 300x300 mm', image: cera6, price: '₹299 / Sqft' },
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
