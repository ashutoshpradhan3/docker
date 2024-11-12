// src/components/Companies/Comp1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path

function Comp1() {
  const products = [
    { id: 1, name: 'Somany Tile A1', description: 'High-quality ceramic tile A1 with excellent durability.', image: 'https://via.placeholder.com/400/FF5733', price: '$50' },
    { id: 2, name: 'Somany Tile A2', description: 'Elegant and durable tile A2, perfect for modern designs.', image: 'https://via.placeholder.com/400/33FF57', price: '$60' },
    { id: 3, name: 'Somany Tile A3', description: 'Premium tile A3 for your home with vibrant colors.', image: 'https://via.placeholder.com/400/3357FF', price: '$55' },
    { id: 4, name: 'Somany Tile A4', description: 'Stylish tile A4 with a contemporary look.', image: 'https://via.placeholder.com/400/FFFF33', price: '$65' },
    { id: 5, name: 'Somany Tile A5', description: 'Eco-friendly tile A5 made from sustainable materials.', image: 'https://via.placeholder.com/400/FF33A1', price: '$70' },
    { id: 6, name: 'Somany Tile A6', description: 'Affordable tile A6 without compromising quality.', image: 'https://via.placeholder.com/400/A133FF', price: '$45' },
    { id: 7, name: 'Somany Tile A7', description: 'Luxury tile A7 for premium spaces.', image: 'https://via.placeholder.com/400/33FFF5', price: '$80' },
    { id: 8, name: 'Somany Tile A8', description: 'Elegant tile A8 with unique patterns.', image: 'https://via.placeholder.com/400/FFC300', price: '$75' },
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
