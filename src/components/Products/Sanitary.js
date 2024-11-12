// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

import san1 from '../../ImagesProduct/san1.png';
import san2 from '../../ImagesProduct/san2.png';
import san3 from '../../ImagesProduct/san3.png';
import san4 from '../../ImagesProduct/san4.png';
import san5 from '../../ImagesProduct/san5.png';
import san6 from '../../ImagesProduct/san6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'Wall-hung round-front toilet with skirted trapway, dual-flush', description: 'K-28780IN-0', image: san1, price: '₹4,940.00' },
    { id: 2, name: 'Urinal (Back Inlet) With Fixing Accessories', description: 'URS-WHT-13263 , 340x325x650 mm', image: san2, price: ' ₹2,400.00' },
    { id: 3, name: 'CADMOS Quiet Wave', description: 'Cat. No: S1044179 , 530x350x375 mm', image: san3, price: '₹15,640' },
    { id: 4, name: 'Plantex Wall Hung Commode', description: 'Square P Trap, APS-3045', image: san4, price: '₹13,999' },
    { id: 5, name: 'LAPO S Trap Commode', description: 'White, 20x14x16 Inch', image: san5, price: '₹4,999' },
    { id: 6, name: 'Plantex Platinum Ceramic Wall Hung Western Toilet/Commode', description: 'Toliet/Commode With Soft Close Toilet Seat - P Trap Outlet (White)', image: san6, price: ' ₹6,999' },
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
