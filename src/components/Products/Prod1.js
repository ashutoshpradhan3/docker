// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

function Prod1() {
  const products = [
    { id: 1, name: 'Shower Model X1', description: 'Luxury shower model X1 with excellent features.', image: 'https://via.placeholder.com/400/FF5733', price: '$200' },
    { id: 2, name: 'Shower Model X2', description: 'Eco-friendly shower model X2 with water-saving technology.', image: 'https://via.placeholder.com/400/33FF57', price: '$220' },
    { id: 3, name: 'Shower Model X3', description: 'Modern shower model X3 with LED lights.', image: 'https://via.placeholder.com/400/3357FF', price: '$250' },
    { id: 4, name: 'Shower Model X4', description: 'Premium shower model X4 with multiple jets.', image: 'https://via.placeholder.com/400/FFFF33', price: '$300' },
    { id: 5, name: 'Shower Model X5', description: 'Compact and efficient shower model X5.', image: 'https://via.placeholder.com/400/FF33A1', price: '$180' },
    { id: 6, name: 'Shower Model X6', description: 'High-tech shower model X6 with temperature control.', image: 'https://via.placeholder.com/400/A133FF', price: '$350' },
    { id: 7, name: 'Shower Model X7', description: 'Spacious shower model X7 for luxury.', image: 'https://via.placeholder.com/400/33FFF5', price: '$400' },
    { id: 8, name: 'Shower Model X8', description: 'Elegant shower model X8 with glass doors.', image: 'https://via.placeholder.com/400/FFC300', price: '$370' },
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
