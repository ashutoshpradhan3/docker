// src/components/ProductHighlights.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductHighlights.css';

function ProductHighlights() {
  const companies = [
    { name: 'Somany Ceramics', description: 'High-quality ceramics for all spaces.', image: 'https://via.placeholder.com/300' },
    { name: 'Jaquar', description: 'Premium bathroom fittings and more.', image: 'https://via.placeholder.com/300' },
    { name: 'Kajaria Tiles', description: 'Top-quality tiles for every design.', image: 'https://via.placeholder.com/300' },
    { name: 'Orient Bell', description: 'Stylish tiles for modern homes.', image: 'https://via.placeholder.com/300' },
    { name: 'AGL Tiles', description: 'Durable tiles with contemporary designs.', image: 'https://via.placeholder.com/300' },
    { name: 'Cera India', description: 'Innovative sanitary ware solutions.', image: 'https://via.placeholder.com/300' },
    { name: 'Johnson Tiles', description: 'Elegant and long-lasting tiles.', image: 'https://via.placeholder.com/300' },
    { name: 'Bajaj Tiles', description: 'Stylish tiles with lasting quality.', image: 'https://via.placeholder.com/300' },
  ];

  const products = [
    { name: 'Showers', description: 'Elegant and functional showers.', image: 'https://via.placeholder.com/300' },
    { name: 'Bathtubs', description: 'Luxurious bathtubs for relaxation.', image: 'https://via.placeholder.com/300' },
    { name: 'Bathroom Sink', description: 'Stylish sinks for every bathroom.', image: 'https://via.placeholder.com/300' },
    { name: 'Faucets', description: 'Modern and efficient faucets.', image: 'https://via.placeholder.com/300' },
    { name: 'Tiles', description: 'Versatile tiles for floors and ceilings.', image: 'https://via.placeholder.com/300' },
    { name: 'Marble Tile', description: 'Elegant marble tiles for luxury.', image: 'https://via.placeholder.com/300' },
    { name: 'Granite Tile', description: 'Durable and aesthetic granite tiles.', image: 'https://via.placeholder.com/300' },
    { name: 'Sanitary Ware', description: 'Innovative and stylish sanitary ware.', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section id="products" className="product-highlights">
      <h2>Our Products</h2>

      {/* Based on Company */}
      <div className="product-category">
        <h3>Based on Company</h3>
        <div className="category-cards">
          {companies.map((company, index) => (
            <div className="category-card" key={index}>
              <img src={company.image} alt={company.name} />
              <h4>{company.name}</h4>
              <p>{company.description}</p>
              <Link to={`/company/${company.name}`} className="view-button">View More</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Based on Product */}
      <div className="product-category">
        <h3>Based on Product</h3>
        <div className="category-cards">
          {products.map((product, index) => (
            <div className="category-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <Link to={`/product/${product.name}`} className="view-button">View More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlights;
