import React, { useState } from 'react';
import '../../styles/ProductDetail.css';

function ProductDetail({ product, onClose }) {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  return (
    <div className="outer-container">
      <div className="product-detail">
        <button className="back-button" onClick={onClose}>Back</button>
        <div className="detail-left">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="detail-right">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us
          </button>
          {showContact && <p className="contact-info">Owner's Number: +91 9508930544</p>}
          <div className="additional-features">
            <h4>Features:</h4>
            <ul>
              <li>Water-resistant</li>
              <li>Durable ceramic</li>
              <li>Easy to clean</li>
              <li>Perfect for modern bathrooms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
