import React, { useState } from 'react';
import { ShoppingBag, Loader } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, addToCart }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (product) => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div className="product-card glass">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-category">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <span className="product-price">{product.price.toLocaleString('ar-EG')} ج.م</span>
          <button 
            className="btn add-to-cart-btn" 
            onClick={() => handleAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            disabled={isAdding}
          >
            {isAdding ? (
              <div className="icon-container">
                <ShoppingBag size={24} className="bag-icon active" strokeWidth={1.5} />
                <Loader size={24} className="spinner" strokeWidth={2} />
              </div>
            ) : (
              <ShoppingBag size={24} className="bag-icon inactive" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
