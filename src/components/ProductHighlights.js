// src/components/ProductHighlights.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductHighlights.css';

//Company Images
import Somany from '../ImagesCompanies/bajaj3.png';
import Jaquar from '../ImagesCompanies/bajaj4.png';
import Kajria from '../ImagesCompanies/bajaj5.png';
import Orient from '../ImagesCompanies/bajaj11.png';
import Agl from '../ImagesCompanies/bajaj7.png';
import Cera from '../ImagesCompanies/bajaj8.png';
import Johnson from '../ImagesCompanies/bajaj9.png';
import Bajaj from '../ImagesCompanies/bajaj10.png';


//Product Image
import Shower from '../assets/shower.png';
import Bath from '../assets/bathtub.png';
import Sink from '../assets/sink.png';
import Faucets from '../assets/faucets.png';
import Tiles from '../assets/tiles.png';
import Marble from '../assets/marble.png';
import Granite from '../assets/granite.png';
import Sanitary from '../assets/sanitary.png';


function ProductHighlights() {
  const companies = [
    { name: 'Somany Ceramics', description: 'High-quality ceramics for all spaces.', image: Somany, route: 'somany' },
    { name: 'Jaquar', description: 'Premium bathroom fittings and more.', image: Jaquar, route: 'jaquar' },
    { name: 'Kajaria Tiles', description: 'Top-quality tiles for every design.', image: Kajria, route: 'kajaria' },
    { name: 'Orient Bell', description: 'Stylish tiles for modern homes.', image: Orient, route: 'orient' },
    { name: 'AGL Tiles', description: 'Durable tiles with contemporary designs.', image: Agl, route: 'agl' },
    { name: 'Cera India', description: 'Innovative sanitary ware solutions.', image: Cera, route: 'cera' },
    { name: 'Johnson Tiles', description: 'Elegant and long-lasting tiles.', image: Johnson, route: 'johnson' },
    { name: 'Bajaj Tiles', description: 'Stylish tiles with lasting quality.', image: Bajaj, route: 'bajaj' },
  ];

  const products = [
    { name: 'Showers', description: 'Elegant and functional showers.', image: Shower, route: 'showers' },
    { name: 'Jacuzzi Baths', description: 'Luxurious bathtubs for relaxation.', image: Bath, route: 'bathtubs' },
    { name: 'Bathroom Sink', description: 'Stylish sinks for every bathroom.', image: Sink, route: 'bathsink' },
    { name: 'Faucets', description: 'Modern and efficient faucets.', image: Faucets, route: 'faucets' },
    { name: 'Tiles', description: 'Versatile tiles for floors and ceilings.', image: Tiles, route: 'tiles' },
    { name: 'Marble Tile', description: 'Elegant marble tiles for luxury.', image: Marble, route: 'marble' },
    { name: 'Granite Tile', description: 'Durable and aesthetic granite tiles.', image: Granite, route: 'granite' },
    { name: 'Sanitary Ware', description: 'Innovative and stylish sanitary ware.', image: Sanitary, route: 'sanitary' },
  ];

  return (
    <section id="products" className="product-highlights">
      <h2>Our Products</h2>


      {/* Based on Company */}
      <div className="product-category">
        <h3>Company</h3>
        <div className="category-cards">
          {companies.map((company, index) => (
            <div className="category-card" key={index}>
              <img src={company.image} alt={company.name} />
              <h4>{company.name}</h4>
              <p>{company.description}</p>
              <Link to={`/company/${company.route}`} className="view-button">View More</Link>
            </div>
          ))}
        </div>
      </div>


      {/* Based on Product */}
      <div className="product-category">
        <h3>Product</h3>
        <div className="category-cards">
          {products.map((product, index) => (
            <div className="category-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <Link to={`/product/${product.route}`} className="view-button">View More</Link>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}

export default ProductHighlights;
