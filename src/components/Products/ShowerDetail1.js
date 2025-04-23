import React, { useState } from 'react';
import '../../styles/ProductPage.css';

function ProductPage({ product, onBack }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity };
    setCart((prev) => [...prev, cartItem]);
    showNotification(`"${product.name}" added to cart!`);
  };

  const handleAddToWishlist = () => {
    if (!wishlist.includes(product.name)) {
      setWishlist((prev) => [...prev, product.name]);
      showNotification(`"${product.name}" added to wishlist!`);
    } else {
      showNotification(`"${product.name}" is already in the wishlist!`);
    }
  };

  const handleBuyNow = () => {
    const confirmed = window.confirm(
      `Are you sure you want to buy "${product.name}" for ${product.price}?`
    );
    if (confirmed) {
      showNotification(`"${product.name}" purchased successfully!`);
    }
  };

  const removeFromWishlist = (item) => {
    setWishlist((prev) => prev.filter((i) => i !== item));
    showNotification(`"${item}" removed from wishlist!`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="product-page">
      {notification && <div className="notification">{notification}</div>}
      <button className="back-button" onClick={onBack}>
        ⬅ Back to Products
      </button>

      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>₹{product.price}</p>

          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                onClick={() => setRating(i + 1)}
                style={{ color: i < rating ? '#f59e0b' : '#d1d5db' }}
              >
                ★
              </span>
            ))}
          </div>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="product-actions">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="wishlist-button" onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="cart-section">
        <h3>🛒 Cart</h3>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p className="total-price">Total: ₹{calculateTotal()}</p>
          </>
        ) : (
          <p className="empty-placeholder">Your cart is empty!</p>
        )}
      </div>

      <div className="wishlist-section">
        <h3>💖 Wishlist</h3>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  onClick={() => removeFromWishlist(item)}
                  style={{
                    marginLeft: '10px',
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-placeholder">Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
