import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../DetailPage.css';

function DetailPage() {
  const { companyName, productName } = useParams();

  // Example data for 12 cards
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: `Detailed description for Product ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    image: 'https://via.placeholder.com/300', // Placeholder image
  }));

  return (
    <div className="detail-page">
      <h1>{companyName || productName}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product-detail/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
