// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path
import bath1 from '../../ImagesProduct/bath1.png';
import bath2 from '../../ImagesProduct/bath2.png';
import bath3 from '../../ImagesProduct/bath3.png';
import bath4 from '../../ImagesProduct/bath4.png';
import bath5 from '../../ImagesProduct/bath5.png';
import bath6 from '../../ImagesProduct/bath6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'MADONNA Rex', description: 'Rectangular Acrylic 5.5 feet Fixed Bathtub - Black', image: bath1, price: 'MRP : ₹ 17 , 799.00' },
    { id: 2, name: 'Acrylic Bath Tub', description: '1685x790x580 mm , 67.4x31.6 ', image: bath2, price: 'MRP : ₹ 73 , 632.00' },
    { id: 3, name: 'Fonte Built-in Bathtub', description: 'Code : JBT-WHT-FONT150X', image: bath3, price: 'MRP : ₹ 21 , 500.00' },
    { id: 4, name: 'JABON BAGNO INFINITY', description: 'Elegant White (170x75x56cm)', image: bath4, price: 'MRP : ₹ 60 , 989.00' },
    { id: 5, name: 'Hindware: Marina bath tub', description: '508574SW , 152.5 x 76.5 x 45 cm (LXBXH)', image: bath5, price: 'MRP : ₹ 53 , 500.00' },
    { id: 6, name: 'Jaquar Opal Prime Built-in Bath Tub', description: 'SKU JBT-WHT-OPALPM180X', image: bath6, price: 'MRP : ₹ 25 , 208.00' },


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
