import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetail.css'; // Make sure to create this CSS file
import image1 from '../assets/somany.png';

function ProductDetail() {
  const { id } = useParams();
  const [showPhone, setShowPhone] = useState(false);

  // Example product data
  const product = {
    id,
    name: `Product ${id}`,
    description: `Product ${id} is known for its exceptional quality and durability. It is designed to meet the highest standards and provides an excellent solution for your needs. With innovative features and an attractive design, this product is perfect for enhancing your space and lifestyle. Discover the benefits of using this product today.`,
    images: [
      image1,
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="product-detail">
      <div className="slider-container">
        <div className="slider">
          <img src={product.images[currentImageIndex]} alt={product.name} className="slider-image" />
        </div>
        <button className="show-phone-button" onClick={() => setShowPhone((prev) => !prev)}>
          Show Retailer Phone No
        </button>
        {showPhone && <p className="phone-number">+1 234 567 8901</p>}
      </div>
      <div className="description-container">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
