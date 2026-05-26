import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Loader } from 'lucide-react';
import './ProductCard.css';

const SLIDE_INTERVAL_MS = 3500;

export default function ProductCard({ product, addToCart, onOpenDetails }) {
  const [isAdding, setIsAdding] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const galleryImages = useMemo(() => {
    const list = product.images?.length ? product.images : [product.image];
    return list.filter(Boolean);
  }, [product.image, product.images]);

  const hasSlideshow = galleryImages.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    if (!hasSlideshow || isPaused) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [galleryImages.length, hasSlideshow, isPaused]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // منع فتح نافذة التفاصيل عند الضغط على زر الشراء
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div className="product-card glass clickable-card" onClick={() => onOpenDetails && onOpenDetails(product)}>
      <div
        className={`product-image-container ${hasSlideshow ? 'has-slideshow' : ''}`}
        onMouseEnter={() => hasSlideshow && setIsPaused(true)}
        onMouseLeave={() => hasSlideshow && setIsPaused(false)}
      >
        <div className="product-image-slider" aria-hidden={!hasSlideshow}>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} - صورة ${idx + 1}`}
              className={`product-image ${idx === activeIndex ? 'is-active' : ''}`}
              loading={idx === 0 ? 'lazy' : 'lazy'}
            />
          ))}
        </div>
        {hasSlideshow && (
          <div className="slideshow-dots" aria-hidden="true">
            {galleryImages.map((_, idx) => (
              <span key={idx} className={`slideshow-dot ${idx === activeIndex ? 'active' : ''}`} />
            ))}
          </div>
        )}
        <div className="product-category">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <span className="product-price">{product.price.toLocaleString('ar-EG')} ج.م</span>
          <button 
            className="btn add-to-cart-btn" 
            onClick={(e) => handleAddToCart(e, product)}
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
