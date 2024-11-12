// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css';  // Importing the shared CSS


function Prod1() {
  const items = [
    { id: 1, name: 'Shower Model X', description: 'Luxury shower model X.', image: 'https://via.placeholder.com/400' },
    { id: 2, name: 'Shower Model Y', description: 'Eco-friendly shower model Y.', image: 'https://via.placeholder.com/400' },
    // Add six more items with unique names, descriptions, and images
  ];

  return (
    <div className="card-page">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Prod1;
